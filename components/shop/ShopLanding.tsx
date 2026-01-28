"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import type { Shop } from "@/data/shops";
import { isShopOpen, formatTodayHoursLabel } from "@/lib/shopHours";
import { QuickIconSearch, QuickIconTimer, QuickIconPhone, QuickIconQuestion } from "@/components/icons/QuickActionIcons";
import SmsSubscribeModal from "./SmsSubscribeModal";
// ...


function telHref(phoneE164: string) {
    return `tel:${phoneE164.replace(/\s+/g, "")}`;
}
function smsHref(phoneE164: string) {
    return `sms:${phoneE164.replace(/\s+/g, "")}`;
}

function SnapCarousel({
    children,
    items,
    itemWidth, // Width of item + gap
}: {
    children: (item: any, index: number) => React.ReactNode;
    items: any[];
    itemWidth: number;
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onScroll = () => {
        if (!scrollRef.current) return;
        const currentScrollLeft = scrollRef.current.scrollLeft;
        const index = Math.round(currentScrollLeft / itemWidth);
        const clampedIndex = Math.min(Math.max(index, 0), items.length - 1);
        setActiveIndex(clampedIndex);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollTo = (index: number) => {
        if (!scrollRef.current) return;
        const targetScrollLeft = index * itemWidth;
        scrollRef.current.scrollTo({
            left: targetScrollLeft,
            behavior: "smooth",
        });
        setActiveIndex(index);
    };

    return (
        <>
            <div
                ref={scrollRef}
                onScroll={onScroll}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 no-scrollbar cursor-grab ${isDragging ? "cursor-grabbing snap-none" : ""}`}
            >
                {items.map((item, i) => children(item, i))}
            </div>
            <div className="flex justify-center gap-2 mt-0">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-brand-ink scale-100" : "bg-black/20 scale-75 hover:bg-black/40"
                            }`}
                    />
                ))}
            </div>
        </>
    );
}

function Btn3D({
    href,
    children,
    variant = "yellow",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "yellow" | "green";
}) {
    const base =
        "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-4 text-sm font-extrabold tracking-wide transition active:translate-y-1";
    const yellow =
        "bg-brand-yellow text-[#3b2a00] shadow-[0_10px_0_#c08b00,0_18px_28px_rgba(0,0,0,.20)] active:shadow-[0_6px_0_#c08b00,0_10px_18px_rgba(0,0,0,.18)]";
    const green =
        "bg-[image:var(--tw-gradient-stops)] bg-brand-green text-white shadow-[0_10px_0_#064a34,0_18px_28px_rgba(13,107,76,.35)] active:shadow-[0_6px_0_#064a34,0_10px_18px_rgba(13,107,76,.28)]";

    return (
        <a href={href} className={`${base} ${variant === "yellow" ? yellow : green}`}>
            {children}
        </a>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-6">
            <h2 className="text-2xl font-black tracking-tight">{children}</h2>
            <div className="mt-2 h-1 w-10 rounded-full bg-brand-yellow" />
        </div>
    );
}

export default function ShopLanding({ shop }: { shop: Shop }) {
    const [isOpen, setIsOpen] = useState(true);
    const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);
    const [hoursLabel, setHoursLabel] = useState("");

    useEffect(() => {
        const updateStatus = () => {
            setIsOpen(isShopOpen(shop.hours, shop.timezone));
            setHoursLabel(formatTodayHoursLabel(shop.hours, shop.timezone));
        };

        updateStatus();
        const interval = setInterval(updateStatus, 60000);
        return () => clearInterval(interval);
    }, [shop]);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F4F2EC] px-4 py-10 md:py-20">
            {/* Desktop Background Shell */}
            <div className="pointer-events-none fixed inset-0 z-0 hidden md:block">
                {/* Left Green Gradient */}
                <div className="absolute -left-[10%] top-[-10%] h-[90vh] w-[50vw] rounded-full bg-brand-green/20 blur-[120px] mix-blend-multiply" />

                {/* Right Yellow Gradient */}
                <div className="absolute -right-[10%] bottom-[-10%] h-[90vh] w-[50vw] rounded-full bg-brand-yellow/30 blur-[120px] mix-blend-multiply" />

                {/* Global White Veil */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[430px]">
                {/* App wrapper "intemporel" */}
                <div className="overflow-hidden rounded-[42px] border border-white/70 bg-white/55 shadow-float backdrop-blur-xl">
                    {/* Logo */}
                    <div className="flex justify-center pt-6">
                        <div className="relative h-14 w-14">
                            <Image src="/logo-hey.png" alt="Logo" fill className="object-contain" />
                        </div>
                    </div>

                    {/* Map hero */}
                    <div className="px-6 pt-5">
                        <div className="relative h-44 overflow-hidden rounded-3xl border-[4px] border-white shadow-float ring-1 ring-black/5">
                            <Image
                                src={shop.mapImage}
                                alt="Carte"
                                fill
                                priority
                                className="object-cover"
                                sizes="430px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/0" />

                            {/* Itinerary Button (Left) */}
                            {shop.mapsUrl && (
                                <a
                                    href={shop.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute left-4 top-4 rounded-full bg-brand-yellow px-4 py-2 text-[11px] font-extrabold text-[#3b2a00] shadow-card backdrop-blur transition hover:bg-[#eec12e]"
                                >
                                    S’Y RENDRE
                                </a>
                            )}

                            <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
                                <div className={`rounded-full px-4 py-2 text-[11px] font-extrabold text-white shadow-card backdrop-blur transition-colors duration-300 ${isOpen ? "bg-brand-green/90" : "bg-black/90"
                                    }`}>
                                    <div className="flex items-center gap-2">
                                        <span className={`inline-block h-2 w-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,.8)] ${isOpen ? "bg-white" : "bg-white/50"
                                            }`} />
                                        {isOpen ? "OUVERT" : "FERMÉ"}
                                    </div>
                                </div>
                                <div className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-black text-brand-ink shadow-soft backdrop-blur-md">
                                    {hoursLabel || "Chargement..."}
                                </div>
                            </div>
                        </div>

                        {/* Store header */}
                        <div className="pb-2 pt-6 text-center">
                            <h1 className="text-3xl font-black tracking-tight">{shop.name}</h1>
                            <div className="mt-3 inline-flex rounded-full bg-brand-yellow px-4 py-1 text-[11px] font-extrabold text-[#3b2a00] shadow-yellow">
                                {shop.districtLabel}
                            </div>
                        </div>
                    </div>

                    {/* SMS CTA */}
                    <div className="px-6 pt-5">
                        <button
                            onClick={() => setIsSmsModalOpen(true)}
                            className="w-full relative overflow-hidden rounded-3xl bg-white border border-brand-green/20 shadow-sm p-4 text-left group hover:shadow-md hover:border-brand-green/40 transition-all active:scale-[0.98]"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-16 h-16 text-brand-green rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            </div>
                            <div className="relative flex items-center gap-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-[#3b2a00]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-black text-brand-green leading-tight">
                                        Recevez un SMS
                                    </h4>
                                    <p className="text-[11px] font-medium text-gray-500 leading-tight mt-0.5">
                                        Dès la mise à jour de votre commerçant
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>

                    <SmsSubscribeModal
                        isOpen={isSmsModalOpen}
                        onClose={() => setIsSmsModalOpen(false)}
                        shopSlug={shop.slug}
                        shopName={shop.name}
                    />

                    {/* Daily offer */}
                    <div className="px-6 pt-5">
                        <div className="relative overflow-hidden rounded-4xl bg-brand-green shadow-green">
                            {/* Decorative blur */}
                            <div className="absolute right-0 top-0 h-48 w-48 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

                            {/* Hero Image */}
                            <div className="relative h-52 w-full">
                                <Image
                                    src={shop.dailyOffer.image}
                                    alt={shop.dailyOffer.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 430px) 100vw, 430px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 -mt-16 px-5 pb-6">
                                <div className="flex items-end justify-between gap-4">
                                    <div className="min-w-0 flex-1">
                                        <div className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-black tracking-wide text-[#3b2a00] shadow-sm">
                                            {(shop.dailyOffer.label || "OFFRE DU JOUR").toUpperCase()}
                                        </div>
                                        <h3 className="mt-2 text-2xl font-black leading-tight text-white line-clamp-2">
                                            {shop.dailyOffer.title}
                                        </h3>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="text-4xl font-black tracking-tight text-white shadow-sm">
                                            {shop.dailyOffer.price}
                                        </div>
                                        {shop.dailyOffer.oldPrice ? (
                                            <div className="text-sm font-bold text-white/70 line-through">
                                                {shop.dailyOffer.oldPrice}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <Btn3D href={telHref(shop.contact.phoneE164)} variant="yellow">
                                        APPELER POUR RÉSERVER
                                    </Btn3D>
                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="text-[11px] font-semibold text-white/90">
                                            Dites l’heure de passage + le produit.
                                        </div>
                                        {shop.dailyOffer.protocolHref ? (
                                            <a
                                                className="text-[11px] font-extrabold text-white underline underline-offset-4"
                                                href={shop.dailyOffer.protocolHref}
                                            >
                                                PROTOCOLE →
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="pt-10">
                        <SectionTitle>Nos produits du moment</SectionTitle>

                        <SnapCarousel items={shop.products} itemWidth={240 + 16}>
                            {(p) => (
                                <article
                                    key={p.id}
                                    className="snap-start shrink-0 w-[240px] overflow-hidden rounded-4xl border border-white/70 bg-white/70 shadow-soft"
                                >
                                    <div className="relative h-36">
                                        <Image src={p.image} alt={p.title} fill className="object-cover" sizes="240px" />
                                    </div>
                                    <div className="p-4 text-center">
                                        <div className="text-sm font-extrabold line-clamp-2">{p.title}</div>
                                        <div className="mt-2 text-2xl font-black text-brand-green">{p.price}</div>
                                        <a
                                            href={telHref(shop.contact.phoneE164)}
                                            className="mt-3 inline-flex rounded-full bg-brand-yellow/60 px-4 py-2 text-[11px] font-extrabold text-[#3b2a00]"
                                        >
                                            Mettre de côté (appel)
                                        </a>
                                    </div>
                                </article>
                            )}
                        </SnapCarousel>

                        <div className="px-6 mt-4 text-center text-[11px] font-semibold text-slate-500">
                            Astuce : appelez + dites votre heure de passage — mise de côté selon stock.
                        </div>
                    </div>

                    {/* Quick actions */}
                    <div className="pt-10">
                        <div className="px-6">
                            <div className="rounded-4xl border border-white/70 bg-white/70 p-5 shadow-soft">
                                <h3 className="text-2xl font-black">Demandes rapides</h3>

                                <div className="mt-4 grid gap-3">
                                    <a
                                        href={smsHref(shop.contact.phoneE164)}
                                        className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <QuickIconQuestion className="h-10 w-10 shrink-0" />
                                            <div className="min-w-0">
                                                <div className="text-sm font-extrabold">Une question ?</div>
                                                <div className="text-[12px] font-semibold text-slate-500">
                                                    Envoyer un SMS (réponse rapide)
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-slate-400">→</span>
                                    </a>

                                    <a
                                        href="#reservation"
                                        className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <QuickIconTimer className="h-10 w-10 shrink-0" />
                                            <div className="min-w-0">
                                                <div className="text-sm font-extrabold">Commander / Réserver</div>
                                                <div className="text-[12px] font-semibold text-slate-500">Voir le protocole</div>
                                            </div>
                                        </div>
                                        <span className="text-slate-400">→</span>
                                    </a>

                                    <a
                                        href={telHref(shop.contact.phoneE164)}
                                        className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <QuickIconSearch className="h-10 w-10 shrink-0" />
                                            <div className="min-w-0">
                                                <div className="text-sm font-extrabold">Je cherche un produit</div>
                                                <div className="text-[12px] font-semibold text-slate-500">Appeler et demander</div>
                                            </div>
                                        </div>
                                        <span className="text-slate-400">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="pt-10">
                        <div className="px-6">
                            <h3 className="text-3xl font-black underline underline-offset-8 decoration-brand-green/30">
                                Qui sommes nous
                            </h3>

                            <div className="mt-4 space-y-4 text-[15px] leading-7 font-semibold text-slate-700">
                                <p>{shop.about.p1}</p>
                                <p>{shop.about.p2}</p>
                            </div>
                        </div>

                        <SnapCarousel items={shop.about.images} itemWidth={260 + 16}>
                            {(src: string, idx: number) => (
                                <div
                                    key={`${src}-${idx}`}
                                    className="relative snap-start shrink-0 h-40 w-[260px] overflow-hidden rounded-4xl border border-white/70 bg-white shadow-soft"
                                >
                                    <Image src={src} alt={`Photo ${idx + 1}`} fill className="object-cover" sizes="260px" />
                                </div>
                            )}
                        </SnapCarousel>
                    </div>

                    {/* Reservation */}
                    <div className="pt-10" id="reservation">
                        <div className="px-6 pb-10">
                            <div className="rounded-4xl border border-white/70 bg-white/70 p-6 shadow-soft">
                                <h3 className="text-2xl font-black">Pour réserver</h3>

                                <div className="mt-5 grid gap-4">
                                    <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4">
                                        <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-green text-white font-black shadow-soft">
                                            1
                                        </div>
                                        <div>
                                            <div className="text-sm font-extrabold">Appelez le magasin</div>
                                            <div className="text-[12px] font-semibold text-slate-500">
                                                Idéalement hors heures de pointe
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4">
                                        <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-green text-white font-black shadow-soft">
                                            2
                                        </div>
                                        <div>
                                            <div className="text-sm font-extrabold">Dites l’heure + votre demande</div>
                                            <div className="text-[12px] font-semibold text-slate-500">
                                                Réservation selon stock, confirmation par téléphone.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div className="rounded-3xl border border-slate-200 bg-white p-4 text-center">
                                        <div className="text-[11px] font-extrabold tracking-widest text-slate-400">TÉLÉPHONE</div>
                                        <div className="mt-2 text-sm font-black text-brand-green">{shop.contact.phoneDisplay}</div>
                                    </div>
                                    <div className="rounded-3xl border border-slate-200 bg-white p-4 text-center">
                                        <div className="text-[11px] font-extrabold tracking-widest text-slate-400">ADRESSE</div>
                                        <div className="mt-2 text-[12px] font-black text-brand-green leading-tight">
                                            {shop.contact.address || "Adresse non renseignée"}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <Btn3D href={telHref(shop.contact.phoneE164)} variant="green">
                                        APPELER MAINTENANT
                                    </Btn3D>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="bg-brand-green px-6 py-10 text-center text-white">
                        <a className="font-extrabold underline underline-offset-4 opacity-95" href={`/${shop.slug}/mentions-legales`}>
                            Mentions légales & confidentialité
                        </a>
                        <div className="mt-6 text-sm font-bold opacity-90">
                            © 2026 SHOU EDITION. ARCHITECTURAL MODULAR.
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    );
}
