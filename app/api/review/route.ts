import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, rating, comment, location, service } = body;

        // Basic validation
        if (!name || !rating || !location || !service) {
            return NextResponse.json(
                { message: 'กรุณากรอกข้อมูลให้ครบถ้วน' },
                { status: 400 }
            );
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ auth, version: 'v4' });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A:E', // Appends to column A to E
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        name,
                        location,
                        service,
                        rating,
                        comment || '-', // Optional comment
                        new Date().toISOString() // Timestamp
                    ],
                ],
            },
        });

        return NextResponse.json({
            message: 'ส่งรีวิวเรียบร้อยแล้ว',
            data: response.data
        });

    } catch (error: any) {
        console.error('Submission error:', error);
        return NextResponse.json(
            { message: 'เกิดข้อผิดพลาดในการส่งรีวิว', error: error.message },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets.readonly',
            ],
        });

        const sheets = google.sheets({ auth, version: 'v4' });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A:F', // Assuming columns are Name, Location, Service, Rating, Comment, Date
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return NextResponse.json({ reviews: [] });
        }

        // Transform rows to objects
        // Assuming first row might be headers or data. 
        // Strategy: If we control the sheet, we appeneded data. 
        // If the user created a blank sheet and we started appending, row 0 is data.
        // If the user added headers, row 0 is headers.
        // Simple heuristic: check if row[3] (rating) is a number.

        const reviews = rows.map((row, index) => {
            return {
                id: index, // Use index or generate unique ID
                name: row[0] || 'Anonymous',
                location: row[1] || '-',
                service: row[2] || '-',
                rating: parseInt(row[3]) || 5, // Default to 5 if parsing fails
                text: row[4] || '-',
                date: row[5] || null
            };
        }).filter(review => !isNaN(review.rating) && review.text !== 'Comment'); // Basic filter for header if it exists (assuming 'Rating' or 'Comment' literal is in header)

        return NextResponse.json({ reviews });

    } catch (error: any) {
        console.error('Fetch error:', error);
        return NextResponse.json(
            { message: 'Failed to fetch reviews', error: error.message },
            { status: 500 }
        );
    }
}
