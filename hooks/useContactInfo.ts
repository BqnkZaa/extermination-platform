"use client";

import { useState, useEffect } from 'react';

// Default values matching the current hardcoded ones
const defaultContact = {
    phone_display: '089-123-4567',
    phone_call: '0891234567',
    email: 'info@rabbitpestcontrol.net',
    line_url: 'https://line.me/ti/p/~rabbit-pest',
    line_id: '@rabbit-pest',
    google_sheet_url: 'https://docs.google.com/spreadsheets/', // Placeholder: Update this with the actual URL
    facebook_url: 'https://facebook.com',
    instagram_url: 'https://instagram.com',
    address: 'ให้บริการพื้นที่ภาคตะวันออก',
    open_time: '24 ชั่วโมง / 7 วัน'
};

export function useContactInfo() {
    const [contact, setContact] = useState(defaultContact);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchContact() {
            try {
                const res = await fetch('/api/contact', { next: { revalidate: 0 } }); // No cache
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();

                if (data.config && Object.keys(data.config).length > 0) {
                    setContact(prev => ({ ...prev, ...data.config }));
                }
            } catch (error) {
                console.error('Failed to load contact info, using defaults', error);
            } finally {
                setLoading(false);
            }
        }

        fetchContact();
    }, []);

    return { contact, loading };
}
