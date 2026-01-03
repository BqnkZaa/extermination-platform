import { google } from 'googleapis';
import { NextResponse } from 'next/server';

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

        // valid keys we expect
        // phone_display: 089-123-4567
        // phone_call: 0891234567
        // email: example@gmail.com
        // line_url: https://line.me/...
        // facebook_url: https://facebook.com/...
        // we will fetch a range. Let's assume a sheet named "ContactConfig" exists. 
        // If it doesn't, this might fail. 
        // Alternative: Read a specific range in a known sheet, or just search metadata. 
        // To be safe and simple for now: Read 'ContactConfig!A:B'

        try {
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'ContactConfig!A:B',
            });

            const rows = response.data.values;
            const config: Record<string, string> = {};

            if (rows && rows.length > 0) {
                rows.forEach(row => {
                    if (row[0] && row[1]) {
                        config[row[0].trim()] = row[1].trim();
                    }
                });
            }

            return NextResponse.json({ config });

        } catch (err: any) {
            // If sheet not found or other error, return empty config so frontend uses defaults
            console.error('Error fetching contact config (sheet might be missing):', err.message);
            return NextResponse.json({ config: {} });
        }

    } catch (error: any) {
        console.error('Auth or other error:', error);
        return NextResponse.json(
            { message: 'Failed to fetch contact info', error: error.message },
            { status: 500 }
        );
    }
}
