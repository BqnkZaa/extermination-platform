import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { getContactConfig } from '@/app/lib/googleSheets';

export async function GET() {
    try {
        const config = await getContactConfig();
        return NextResponse.json({ config });
    } catch (error: any) {
        console.error('Error in contact API:', error);
        return NextResponse.json(
            { message: 'Failed to fetch contact info', error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, service, address, message } = body;

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ auth, version: 'v4' });

        // Prepare row data
        // Format: Timestamp, Name, Phone, Email, Service, Address, Message
        const timestamp = new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
        const values = [
            [timestamp, name, phone, email || '-', service, address, message || '-']
        ];

        // Append to 'Leads' sheet
        try {
            await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'Leads!A:G',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: values,
                },
            });

            return NextResponse.json({ success: true, message: 'Data saved successfully' });
        } catch (error: any) {
            console.error('Error appending to sheet:', error);

            // Fallback: try appending to first sheet if Leads doesn't exist? 
            // Better to just report error for now as we should create the sheet.
            return NextResponse.json(
                { success: false, message: 'Failed to save data to sheet', error: error.message },
                { status: 500 }
            );
        }

    } catch (error: any) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error', error: error.message },
            { status: 500 }
        );
    }
}
