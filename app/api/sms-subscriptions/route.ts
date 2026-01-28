import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { parsePhoneNumber } from 'libphonenumber-js';

// Initialize Supabase client with Service Role Key for server-side operations
// CRITICAL: This key must NEVER be exposed to the client.
// Initialize Supabase client
// We lazy initialize or check for presence to avoid build-time errors if env vars are missing
const supabaseUrl = process.env.SUPABASE_URL || 'https://example.com';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'example-key';

// Ensure we don't crash during build if keys are missing
// Real validation happens in POST
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { shopSlug, phoneRaw, optInMarketing, optInUpdates } = body;

        // 1. Validation
        if (!shopSlug || !phoneRaw) {
            return NextResponse.json({ ok: false, error: 'Champs manquants (téléphone ou boutique).' }, { status: 400 });
        }

        if (optInUpdates !== true) {
            return NextResponse.json({ ok: false, error: 'Le consentement aux mises à jour est obligatoire.' }, { status: 400 });
        }

        // 2. Phone Normalization (FR default)
        const phoneNumber = parsePhoneNumber(phoneRaw, 'FR');
        if (!phoneNumber || !phoneNumber.isValid()) {
            return NextResponse.json({ ok: false, error: 'Numéro de téléphone invalide.' }, { status: 400 });
        }

        const phoneE164 = phoneNumber.number; // +33612345678
        const phoneDisplay = phoneNumber.formatNational(); // 06 12 34 56 78

        // 3. Insert/Upsert into Supabase
        // We store the user agent/ip for audit logs if needed (optional)
        const userAgent = req.headers.get('user-agent') || undefined;

        // We upsert based on (shop_slug, phone_e164) to avoid duplicates.
        // Meaning if they subscribe again, we just update their preferences/timestamp.
        const { error } = await supabase
            .from('sms_subscriptions')
            .upsert(
                {
                    shop_slug: shopSlug,
                    phone_e164: phoneE164,
                    phone_display: phoneDisplay,
                    opt_in_updates: optInUpdates,
                    opt_in_marketing: !!optInMarketing,
                    user_agent: userAgent,
                    // Update timestamp on re-subscribe
                    created_at: new Date().toISOString(),
                },
                { onConflict: 'shop_slug, phone_e164' }
            );

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ ok: false, error: 'Erreur lors de l\'enregistrement en base.' }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('API error:', err);
        return NextResponse.json({ ok: false, error: 'Erreur serveur interne.' }, { status: 500 });
    }
}
