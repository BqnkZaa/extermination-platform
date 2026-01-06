import { google } from 'googleapis';

export interface ContactConfig {
    phone_display?: string;
    phone_call?: string;
    email?: string;
    line_url?: string;
    line_id?: string;
    facebook_url?: string;
    instagram_url?: string;
    address?: string;
    open_time?: string;
    [key: string]: string | undefined;
}

export function normalizeKey(key: string): string {
    const k = key.toLowerCase().trim().replace(/[\s_]+/g, '');

    if (k.includes('lineurl') || k === 'line') return 'line_url';
    if (k.includes('lineid')) return 'line_id';
    if (k.includes('facebook') || k === 'fb') return 'facebook_url';
    if (k.includes('instagram') || k === 'ig') return 'instagram_url';
    if (k.includes('phonedisplay') || k === 'phone' || k === 'tel') return 'phone_display';
    if (k.includes('phonecall') || k === 'telcall' || k === 'call') return 'phone_call';
    if (k.includes('email') || k === 'mail') return 'email';
    if (k.includes('address') || k === 'addr') return 'address';
    if (k.includes('opentime') || k.includes('openhour') || k.includes('hours') || k === 'time') return 'open_time';

    return key.toLowerCase().replace(/\s+/g, '_');
}

export async function getContactConfig(): Promise<ContactConfig> {
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
            range: 'ContactConfig!A:B',
        });

        const rows = response.data.values;
        const config: ContactConfig = {};

        if (rows && rows.length > 0) {
            rows.forEach(row => {
                if (row[0] && row[1]) {
                    const rawKey = row[0].trim();
                    const value = row[1].trim();
                    const key = normalizeKey(rawKey);
                    config[key] = value;
                }
            });
        }

        return config;

    } catch (err: any) {
        console.error('Error fetching contact config:', err.message);
        return {};
    }
}
