import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { parsePhoneNumber } from 'libphonenumber-js';

// Initialize Supabase lazily to prevent build-time crashes
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    // Lazy init
    // Lazy init
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
        console.error('Missing Supabase environment variables');
        return NextResponse.json({ ok: false, error: 'Configuration serveur manquante.' }, { status: 500 });
    }

    // Defensive: Validate URL format to prevent createClient crash
    try {
        new URL(supabaseUrl);
    } catch (e) {
        console.error('Invalid SUPABASE_URL format:', supabaseUrl);
        return NextResponse.json({ ok: false, error: 'Configuration serveur invalide.' }, { status: 500 });
    }

    // Initialize client inside the handler
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

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
