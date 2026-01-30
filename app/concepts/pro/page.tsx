"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

// Minimalist Icon Components
const Icons = {
    Dashboard: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
    ),
    Users: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
    Settings: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    Scan: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
    ),
    Check: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    Cross: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    Clock: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    Logout: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
    ),
    Shop: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    Card: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    ),
    Bell: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    ),
    Lock: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
    Eye: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
    Plus: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
    ),
    ChevronRight: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
    ),
    UserGroup: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    Calendar: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    Chat: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    ),
    TrendingUp: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
    ShoppingBag: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    ),
    Close: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
    ),
    Activity: ({ className }: { className?: string }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
};

// Analytics Chart Component (SVG)
// Analytics Chart Component (SVG)
const AnalyticsChart = ({ color = "#f97316" }: { color?: string }) => {
    // Mock Data points
    const points = [10, 40, 30, 70, 45, 90, 65];
    const max = 100;
    const width = 300;
    const height = 100;
    const stepX = width / (points.length - 1);

    // Generate Path
    const pathD = points.map((p, i) => {
        const x = i * stepX;
        const y = height - (p / max) * height;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    const fillD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

    const gradientId = `chartGradient-${color.replace('#', '')}`;

    return (
        <div className="w-full h-full relative group/chart">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                </defs>
                {/* Area Fill */}
                <path d={fillD} fill={`url(#${gradientId})`} />
                {/* Line */}
                <path d={pathD} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Dots (Simulated with simple circles on peaks) */}
                {points.map((p, i) => (
                    <circle
                        key={i}
                        cx={i * stepX}
                        cy={height - (p / max) * height}
                        r="3"
                        fill="#fff"
                        stroke={color}
                        strokeWidth="2"
                        className="animate-pulse opacity-0 group-hover/chart:opacity-100 transition-opacity"
                    />
                ))}
            </svg>
            {/* Tooltip Overlay (Simple Interaction) */}
            <div className="absolute inset-0 flex items-end justify-between px-2 pb-2 opacity-0 group-hover/chart:opacity-100 transition-opacity">
                {points.map((p, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                        <div className="bg-black/80 text-white text-[9px] px-1.5 py-0.5 rounded border border-white/10">{p}</div>
                        <div className="h-full w-[1px] bg-white/10 border-l border-dashed border-white/20 h-10"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default function ProConceptPage() {
    // Navigation State
    // Navigation State
    const [currentTab, setCurrentTab] = useState<"dashboard" | "clients" | "settings" | "stats">("dashboard");
    const [clientFilter, setClientFilter] = useState<"24h" | "1w" | "1m" | "all">("all");

    // Modal State
    const [activeModal, setActiveModal] = useState<"none" | "new_offer" | "hours" | "closure" | "settings_shop" | "settings_sub" | "settings_notif" | "settings_team" | "settings_sec">("none");

    // Form States
    const [offerDetails, setOfferDetails] = useState({
        name: "Menu Midi Express",
        price: "9.50",
        time: "12:00",
        selectedProduct: "Menu Midi +"
    });
    const [shopStatus, setShopStatus] = useState({ isOpen: true, nextOpening: "08:00" });

    // Toast State
    const [toast, setToast] = useState<{ visible: boolean; message: string; type: 'success' | 'warning' }>({ visible: false, message: "", type: 'success' });

    const showToast = (message: string, type: 'success' | 'warning' = 'success') => {
        setToast({ visible: true, message, type });
        setTimeout(() => setToast({ ...toast, visible: false }), 3000);
    };

    // Generic Action Handler for Settings
    const handleGenericAction = (actionLabel: string) => {
        const map: Record<string, "settings_shop" | "settings_sub" | "settings_notif" | "settings_team" | "settings_sec"> = {
            'Etablissement': 'settings_shop',
            'Abonnement': 'settings_sub',
            'Notifications': 'settings_notif',
            'Equipe': 'settings_team',
            'Sécurité': 'settings_sec'
        };
        const key = map[actionLabel];
        if (key) {
            setActiveModal(key);
        } else {
            showToast(`${actionLabel} - Bientôt disponible`, 'warning');
        }
    }

    // Handlers
    const handlePublishOffer = () => {
        closeModal();
        showToast(`Offre "${offerDetails.name}" (${offerDetails.selectedProduct}) publiée !`, 'success');
    };

    const handleSaveHours = () => {
        closeModal();
        showToast("Horaires mis à jour.", 'success');
    };

    const handleConfirmClosure = () => {
        setShopStatus({ ...shopStatus, isOpen: false });
        closeModal();
        showToast("Fermeture exceptionnelle activée.", 'warning');
    };

    // Mock Client Data - Expanded
    const clients = [
        { id: 1, name: "Julie D.", action: "reserved_bought", time: "Il y a 2h", amount: "5€", avatar: true, skin: "hue-rotate-0" },
        { id: 2, name: "Thomas M.", action: "scanned", time: "Il y a 3h", amount: null, avatar: false },
        { id: 3, name: "Sophie L.", action: "reserved_cancelled", time: "Il y a 5h", amount: "12€", avatar: true, skin: "hue-rotate-90" },
        { id: 4, name: "Marc A.", action: "reserved_bought", time: "Hier", amount: "8€", avatar: false },
        { id: 5, name: "Inès B.", action: "scanned", time: "Hier", amount: null, avatar: true, skin: "hue-rotate-180" },
        { id: 6, name: "Lucas P.", action: "reserved_bought", time: "Il y a 2 jours", amount: "15€", avatar: false },
        { id: 7, name: "Chloé R.", action: "scanned", time: "Il y a 2 jours", amount: null, avatar: true, skin: "hue-rotate-60" },
        { id: 8, name: "Nathan S.", action: "reserved_bought", time: "Il y a 3 jours", amount: "22€", avatar: false },
        { id: 9, name: "Emma W.", action: "reserved_bought", time: "Il y a 4 jours", amount: "9€", avatar: true, skin: "hue-rotate-270 saturate-150" },
        { id: 10, name: "Gabriel M.", action: "reserved_cancelled", time: "Il y a 5 jours", amount: "15€", avatar: false },
        { id: 11, name: "Léa K.", action: "scanned", time: "Semaine dernière", amount: null, avatar: true, skin: "sepia saturate-200" },
        { id: 12, name: "Alexandre T.", action: "reserved_bought", time: "Semaine dernière", amount: "30€", avatar: false },
        { id: 13, name: "Sarah B.", action: "reserved_bought", time: "Semaine dernière", amount: "11€", avatar: true, skin: "invert" },
        { id: 14, name: "Maxime L.", action: "scanned", time: "Il y a 10 jours", amount: null, avatar: false },
        { id: 15, name: "Charlotte D.", action: "reserved_bought", time: "Il y a 12 jours", amount: "6€", avatar: true, skin: "hue-rotate-30 saturate-50" },
    ];

    // Filter logic 
    const filteredClients = useMemo(() => {
        if (clientFilter === '24h') return clients.slice(0, 3);
        if (clientFilter === '1w') return clients.slice(0, 8);
        return clients;
    }, [clientFilter, clients]);

    // Close Modals
    const closeModal = () => setActiveModal("none");

    return (
        <div className="relative min-h-[100dvh] w-full bg-[#050505] font-sans flex items-center justify-center overflow-hidden">

            {/* --- BACKGROUND SHELL (Desktop Level) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black" />
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[60vh] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[20%] w-[40vw] h-[40vw] bg-yellow-600/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
            </div>

            {/* --- INTEMPOREL WRAPPER (The Phone Frame) --- */}
            <main className="relative z-10 w-full max-w-[430px] h-[100dvh] sm:h-[90vh] sm:max-h-[900px] sm:rounded-[40px] shadow-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 flex flex-col">

                {/* --- PHONE INTERNAL BACKGROUND --- */}
                <div className="absolute inset-0 z-0 bg-[#050505]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black" />
                    <div className="absolute top-[-10%] left-[-20%] w-[120%] h-[50%] bg-orange-500/10 rounded-full blur-[80px] mix-blend-screen animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[50%] bg-yellow-600/10 rounded-full blur-[80px] mix-blend-screen" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
                </div>

                {/* --- PRO CONTENT (Scrollable Area) --- */}
                <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-24">

                    {/* Logo Header PRO (Black + Orange Glow) */}
                    <div className="px-6 pt-6 pb-2">
                        <div className="py-4 flex justify-center relative group">
                            {/* Orange Glow Effect - Backlight */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-orange-500 blur-[35px] opacity-60 group-hover:opacity-100 transition-opacity" />

                            <div className="relative h-12 w-12 z-10">
                                <Image src="/logo-hey.png" alt="Logo" fill className="object-contain brightness-0 filter" />
                            </div>
                        </div>
                    </div>

                    {/* Header (Sticky Floating Capsule) */}
                    <header className="sticky top-4 z-50 px-6 flex justify-center pointer-events-none">
                        <div className="bg-[#151515]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 shadow-2xl flex items-center gap-4 pointer-events-auto ring-1 ring-white/5">
                            <div className="flex items-center gap-2">
                                <div className={`h-2 w-2 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)] ${shopStatus.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                                <span className={`text-[9px] font-black uppercase tracking-widest ${shopStatus.isOpen ? 'text-green-500' : 'text-red-500'}`}>
                                    {shopStatus.isOpen ? 'En ligne' : 'Fermé'}
                                </span>
                            </div>
                            <div className="w-[1px] h-3 bg-white/10"></div>
                            <h1 className="text-sm font-bold tracking-tight text-white">Sairam - Paris 04</h1>
                        </div>
                    </header>

                    {/* 1. DASHBOARD TAB */}
                    {currentTab === 'dashboard' && (
                        <div className="px-6 mt-6 space-y-8">

                            {/* Friendly Greeting with Nouth Avatar in Circle Frame */}
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-3xl border border-white/5 shadow-inner relative overflow-hidden group">

                                {/* Nouth Avatar (Profile Picture Style) */}
                                <div className="absolute top-6 right-6 w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-black/50 z-20">
                                    <Image
                                        src="/images/nouth-avatar.png"
                                        alt="Nouth Assistant"
                                        fill
                                        className="object-cover object-top hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                {/* Background blur for the avatar */}
                                <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full blur-xl z-10" />

                                <div className="relative z-10 pr-20">
                                    <h2 className="text-xl font-bold mb-2 text-white">Bonjour Sairam !</h2>
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                        Je suis Nouth, ton assistant. Tout est calme pour le moment.
                                    </p>
                                </div>

                                {/* WhatsApp Nouth Action (Mini) */}
                                <div className="mt-4 relative z-10">
                                    <button className="flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/30 px-3 py-1.5 rounded-full transition-colors cursor-pointer w-fit">
                                        <Icons.Chat className="w-3 h-3 text-[#25D366]" />
                                        <span className="text-[10px] font-bold text-[#25D366]">Parler à Nouth sur WhatsApp</span>
                                    </button>
                                </div>
                            </div>

                            {/* KPI Section (Expanded) */}
                            <section>
                                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Performances (24h)</h2>
                                <div className="grid grid-cols-2 gap-3">
                                    {/* KPI 1: Views */}
                                    <div className="bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-32 hover:bg-white/10 transition-colors cursor-pointer group shadow-lg">
                                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                            <Icons.Eye className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="text-3xl font-black block text-gray-100 group-hover:text-blue-400 transition-colors">128</span>
                                            <span className="text-[11px] text-gray-500 font-bold">Vues aujourd'hui</span>
                                        </div>
                                    </div>
                                    {/* KPI 2: Subscribers */}
                                    <div className="bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-32 hover:bg-white/10 transition-colors cursor-pointer group shadow-lg">
                                        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                            <Icons.Check className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="text-3xl font-black block text-gray-100 group-hover:text-green-500 transition-colors">12</span>
                                            <span className="text-[11px] text-gray-500 font-bold">Abonnés SMS</span>
                                        </div>
                                    </div>
                                    {/* KPI 3: Revenue (New) */}
                                    <div className="bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-32 hover:bg-white/10 transition-colors cursor-pointer group shadow-lg">
                                        <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                            <Icons.TrendingUp className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="text-3xl font-black block text-gray-100 group-hover:text-purple-400 transition-colors">142€</span>
                                            <span className="text-[11px] text-gray-500 font-bold">CA Estimé</span>
                                        </div>
                                    </div>
                                    {/* KPI 4: Orders (New) */}
                                    <div className="bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-32 hover:bg-white/10 transition-colors cursor-pointer group shadow-lg">
                                        <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                                            <Icons.ShoppingBag className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="text-3xl font-black block text-gray-100 group-hover:text-yellow-400 transition-colors">8</span>
                                            <span className="text-[11px] text-gray-500 font-bold">Commandes</span>
                                        </div>
                                    </div>
                                </div>
                            </section>



                            {/* Actions Section */}
                            <section className="relative">
                                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Actions Rapides</h2>

                                {/* Publish Offer Button */}
                                <button
                                    onClick={() => setActiveModal("new_offer")}
                                    className="relative w-full overflow-hidden group rounded-3xl bg-orange-600/90 p-[1px] transition-all active:scale-[0.98] shadow-lg shadow-orange-500/20 z-10"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                                    <div className="bg-[#151515] rounded-[23px] p-5 border border-transparent flex items-center justify-between group-hover:bg-[#1a1a1a] transition-colors relative z-10 h-full">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                                <Icons.Plus className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="font-bold text-white text-lg leading-tight">Nouvelle Offre</h3>
                                                <p className="text-xs text-gray-400">Booster votre visibilité</p>
                                            </div>
                                        </div>
                                        <Icons.ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                                    </div>
                                </button>

                                {/* Other Actions */}
                                <div className="grid grid-cols-2 gap-3 mt-3">
                                    <button
                                        onClick={() => setActiveModal("hours")}
                                        className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group shadow-sm active:scale-95"
                                    >
                                        <Icons.Clock className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform group-hover:text-orange-400" />
                                        <span className="text-[11px] font-bold text-gray-500 group-hover:text-gray-300">Horaires</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveModal("closure")}
                                        className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group shadow-sm active:scale-95"
                                    >
                                        <Icons.Logout className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform group-hover:text-red-400" />
                                        <span className="text-[11px] font-bold text-gray-500 group-hover:text-gray-300">Fermeture Ex.</span>
                                    </button>
                                </div>
                            </section>

                            {/* --- ANALYTICS CURVE (Moved & Updated) --- */}
                            <section className="bg-gradient-to-b from-[#1A1A1A]/60 to-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Analyse d'Activité</h2>
                                    <span className="text-[10px] bg-orange-500/10 px-2 py-1 rounded text-orange-500 font-mono font-bold">+18%</span>
                                </div>

                                {/* Chart Container */}
                                <div className="h-32 w-full relative z-10 mb-4">
                                    <AnalyticsChart />
                                </div>

                                {/* View All Button */}
                                <button onClick={() => showToast("Analyses détaillées Bientôt disponible", "success")} className="w-full relative z-10 bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-gray-300 py-3 rounded-xl transition-colors">
                                    Voir toutes les statistiques
                                </button>

                                {/* Decorative Glow */}
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
                            </section>

                            {/* Preview Section */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Aperçu Client</h2>
                                    <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-white font-mono font-bold">live</span>
                                </div>
                                <div className="relative h-48 w-full rounded-3xl overflow-hidden border border-white/10 opacity-90 transition-all group cursor-pointer shadow-2xl">
                                    {/* Fake content for preview */}
                                    <div className="absolute inset-0 bg-[#F4F2EC]">
                                        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-10" />
                                        <div className="h-full w-full bg-[url('/images/shop-placeholder.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                                        <Link href="/sairam-paris-04" className="text-sm font-bold bg-black/60 px-4 py-2 rounded-full border border-white/20 shadow-sm text-white hover:bg-black/80 transition-colors z-20">
                                            Voir ma page
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}


                    {/* 2. CLIENTS TAB */}
                    {currentTab === 'clients' && (
                        <div className="px-6 mt-6 pb-6">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold mb-1 text-white">Vos Clients</h2>
                                <p className="text-sm text-gray-400">Suivez l'activité de vos clients en temps réel.</p>
                            </div>

                            {/* --- ANALYTICS CURVE (New for Clients) --- */}
                            <section className="bg-gradient-to-b from-[#1A1A1A]/60 to-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 relative overflow-hidden group mb-6">
                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Fréquentation</h2>
                                    <span className="text-[10px] bg-blue-500/10 px-2 py-1 rounded text-blue-500 font-mono font-bold">+5%</span>
                                </div>

                                {/* Chart Container (Blue tint) */}
                                <div className="h-28 w-full relative z-10">
                                    <AnalyticsChart color="#3b82f6" />
                                </div>

                                {/* Decorative Glow */}
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
                            </section>

                            {/* Filters */}
                            <div className="flex bg-white/5 p-1 rounded-xl mb-6 overflow-x-auto no-scrollbar border border-white/5">
                                {(['24h', '1w', '1m', 'all'] as const).map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setClientFilter(filter)}
                                        className={`flex-1 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${clientFilter === filter
                                            ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                                            : 'text-gray-500 hover:text-white'
                                            }`}
                                    >
                                        {filter === '24h' ? '24h' :
                                            filter === '1w' ? '7 jours' :
                                                filter === '1m' ? '1 mois' : 'Tout'}
                                    </button>
                                ))}
                            </div>

                            {/* Clients List */}
                            <div className="space-y-4">
                                {filteredClients.map((client) => (
                                    <button key={client.id} className="w-full text-left bg-[#1A1A1A]/70 backdrop-blur-sm border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors shadow-sm group">
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-gray-400 font-bold border border-white/10 shadow-inner overflow-hidden">
                                                {client.avatar ? (
                                                    <Image
                                                        src="/images/nouth-avatar.png"
                                                        alt="Nouth Skin"
                                                        fill
                                                        className={`object-cover ${client.skin || ''}`}
                                                    />
                                                ) : (
                                                    client.name.charAt(0)
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">{client.name}</h3>
                                                <p className="text-[11px] text-gray-500">{client.time}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            {client.action === 'scanned' && (
                                                <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 px-2 py-1 rounded-lg text-[10px] font-bold border border-blue-500/10">
                                                    <Icons.Scan className="w-3 h-3" /> Scanné
                                                </span>
                                            )}
                                            {client.action === 'reserved_bought' && (
                                                <div className="flex flex-col items-end">
                                                    <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 px-2 py-1 rounded-lg text-[10px] font-bold border border-green-500/10 mb-1">
                                                        <Icons.Check className="w-3 h-3" /> Acheté
                                                    </span>
                                                    <span className="text-xs font-bold text-white">{client.amount}</span>
                                                </div>
                                            )}
                                            {client.action === 'reserved_cancelled' && (
                                                <div className="flex flex-col items-end">
                                                    <span className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-400 px-2 py-1 rounded-lg text-[10px] font-bold border border-red-500/10 mb-1">
                                                        <Icons.Cross className="w-3 h-3" /> Annulé
                                                    </span>
                                                    <span className="text-xs font-bold text-gray-500 line-through">{client.amount}</span>
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}



                    {/* 3. STATS TAB (New) */}
                    {currentTab === 'stats' && (
                        <div className="px-6 mt-6 pb-6 space-y-8">
                            <div>
                                <h2 className="text-xl font-bold mb-1 text-white">Analyses Détaillées</h2>
                                <p className="text-sm text-gray-400">Comprenez vos performances.</p>
                            </div>

                            {/* 1. REVENUE CURVE */}
                            <section className="bg-gradient-to-b from-[#1A1A1A]/60 to-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Chiffre d'Affaires</h2>
                                    <span className="text-[10px] bg-purple-500/10 px-2 py-1 rounded text-purple-500 font-mono font-bold">+142€</span>
                                </div>
                                <div className="h-32 w-full relative z-10 mb-2">
                                    <AnalyticsChart color="#a855f7" />
                                </div>
                                <p className="text-[10px] text-center text-gray-500 font-mono">7 derniers jours</p>
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />
                            </section>

                            {/* 2. CONVERSION FUNNEL */}
                            <section>
                                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Entonnoir de Conversion</h2>
                                <div className="space-y-2">
                                    {/* Views */}
                                    <div className="bg-[#1A1A1A]/60 p-4 rounded-2xl border border-white/5 flex items-center justify-between relative overflow-hidden">
                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Icons.Eye className="w-4 h-4" /></div>
                                            <span className="text-sm font-bold text-gray-300">Vues Totales</span>
                                        </div>
                                        <span className="text-xl font-black text-white relative z-10">1,240</span>
                                        <div className="absolute inset-y-0 left-0 bg-blue-500/5 w-full"></div>
                                    </div>
                                    {/* Scans */}
                                    <div className="ml-4 bg-[#1A1A1A]/60 p-4 rounded-2xl border border-white/5 flex items-center justify-between relative overflow-hidden">
                                        <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-4 h-[2px] bg-white/10"></div>
                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500"><Icons.Scan className="w-4 h-4" /></div>
                                            <span className="text-sm font-bold text-gray-300">Scans (QR)</span>
                                        </div>
                                        <div className="text-right relative z-10">
                                            <span className="text-xl font-black text-white block">380</span>
                                            <span className="text-[10px] text-gray-500 font-bold">30% conv.</span>
                                        </div>
                                        <div className="absolute inset-y-0 left-0 bg-orange-500/5 w-[30%]"></div>
                                    </div>
                                    {/* Sales */}
                                    <div className="ml-8 bg-[#1A1A1A]/60 p-4 rounded-2xl border border-white/5 flex items-center justify-between relative overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                        <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-4 h-[2px] bg-white/10"></div>
                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Icons.ShoppingBag className="w-4 h-4" /></div>
                                            <span className="text-sm font-bold text-white">Achats (Commandes)</span>
                                        </div>
                                        <div className="text-right relative z-10">
                                            <span className="text-xl font-black text-green-400 block">85</span>
                                            <span className="text-[10px] text-green-600 font-bold">22% conv.</span>
                                        </div>
                                        <div className="absolute inset-y-0 left-0 bg-green-500/5 w-[22%]"></div>
                                    </div>
                                </div>
                            </section>

                            {/* 3. OFFER PERFORMANCE */}
                            <section>
                                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Top Offres</h2>
                                <div className="space-y-3">
                                    {[{ name: "Menu Midi +", views: 450, sales: 42, rev: "399€" }, { name: "Tacos XL", views: 320, sales: 28, rev: "280€" }, { name: "Pizza 4 From.", views: 210, sales: 15, rev: "180€" }].map((offer, i) => (
                                        <div key={i} className="bg-[#1A1A1A]/40 p-4 rounded-2xl border border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors">
                                            <div>
                                                <h3 className="font-bold text-sm text-gray-200">{offer.name}</h3>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="text-[10px] text-gray-500 flex items-center gap-1"><Icons.Eye className="w-3 h-3" /> {offer.views}</span>
                                                    <span className="text-[10px] text-gray-500 flex items-center gap-1"><Icons.ShoppingBag className="w-3 h-3" /> {offer.sales}</span>
                                                </div>
                                            </div>
                                            <span className="font-mono font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded text-xs">{offer.rev}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}


                    {/* 4. SETTINGS TAB */}
                    {currentTab === 'settings' && (
                        <div className="px-6 mt-6 pb-6">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold mb-1 text-white">Réglages</h2>
                                <p className="text-sm text-gray-400">Gérez votre compte et vos préférences.</p>
                            </div>

                            <div className="space-y-2">
                                {[
                                    { icon: Icons.Shop, label: 'Etablissement', sub: 'Infos, Adresse, Photos' },
                                    { icon: Icons.Card, label: 'Abonnement', sub: 'Pro (Actif)' },
                                    { icon: Icons.Bell, label: 'Notifications', sub: 'SMS, Email, Push' },
                                    { icon: Icons.UserGroup, label: 'Equipe', sub: 'Gérer les accès' },
                                    { icon: Icons.Lock, label: 'Sécurité', sub: 'Mot de passe, 2FA' },
                                ].map((item) => (
                                    <button key={item.label} onClick={() => handleGenericAction(item.label)} className="w-full bg-[#1A1A1A]/80 px-4 py-4 rounded-2xl flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors group shadow-sm active:scale-98">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-black/40 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors border border-white/5">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <span className="font-bold text-sm block text-gray-200">{item.label}</span>
                                                <span className="text-[10px] text-gray-500">{item.sub}</span>
                                            </div>
                                        </div>
                                        <Icons.ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                                    </button>
                                ))}

                                <button onClick={() => showToast("Vous avez été déconnecté.", "warning")} className="w-full mt-8 bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-sm py-4 rounded-2xl hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2 active:scale-95">
                                    <Icons.Logout className="w-4 h-4" />
                                    Déconnexion
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* --- BOTTOM NAVIGATION (Restored) --- */}
                <div className="relative z-20 bg-[#121212]/90 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex items-center justify-between shrink-0 mb-safe active:mb-0">
                    <button
                        onClick={() => setCurrentTab('dashboard')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'dashboard' ? 'text-orange-500' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        <Icons.Dashboard className={`w-6 h-6 ${currentTab === 'dashboard' ? 'fill-current' : ''}`} />
                        <span className="text-[10px] font-bold">Accueil</span>
                    </button>
                    <button
                        onClick={() => setCurrentTab('clients')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'clients' ? 'text-orange-500' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        <Icons.Users className={`w-6 h-6 ${currentTab === 'clients' ? 'fill-current' : ''}`} />
                        <span className="text-[10px] font-bold">Clients</span>
                    </button>
                    <button
                        onClick={() => setCurrentTab('stats')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'stats' ? 'text-orange-500' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        <Icons.Activity className={`w-6 h-6 ${currentTab === 'stats' ? 'fill-current' : ''}`} />
                        <span className="text-[10px] font-bold">Analyses</span>
                    </button>
                    <button
                        onClick={() => setCurrentTab('settings')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'settings' ? 'text-orange-500' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        <Icons.Settings className={`w-6 h-6 ${currentTab === 'settings' ? 'fill-current' : ''}`} />
                        <span className="text-[10px] font-bold">Réglages</span>
                    </button>
                </div>

                {/* --- MODALS (Blurred Backdrop) --- */}
                {activeModal !== "none" && (
                    <div className="absolute inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-auto">
                        {/* Backdrop Blur */}
                        <div
                            onClick={closeModal}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in"
                        />

                        {/* Modal Content */}
                        <div className="relative z-10 bg-[#151515] w-full max-h-[80%] rounded-t-[30px] sm:rounded-[30px] border-t sm:border border-white/10 shadow-2xl p-6 flex flex-col gap-6 animate-slide-up sm:m-6">

                            {/* NEW OFFER MODAL */}
                            {activeModal === "new_offer" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">Nouvelle Offre</h3>
                                        <button onClick={closeModal} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><Icons.Close className="w-5 h-5 text-gray-400" /></button>
                                    </div>

                                    <div className="space-y-4 overflow-y-auto">
                                        {/* Product Selection */}
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Produit</label>
                                            <div className="mt-2 flex gap-3 overflow-x-auto no-scrollbar pb-2">
                                                {["Menu Midi +", "Pizza 4 From.", "Tacos XL"].map((prod) => (
                                                    <button
                                                        key={prod}
                                                        onClick={() => setOfferDetails({ ...offerDetails, selectedProduct: prod })}
                                                        className={`shrink-0 px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${offerDetails.selectedProduct === prod
                                                            ? 'bg-orange-500/20 border-orange-500 text-orange-500'
                                                            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                                                            }`}
                                                    >
                                                        {prod}
                                                    </button>
                                                ))}
                                                <button className="shrink-0 bg-white/5 border border-white/10 text-gray-400 px-4 py-2 rounded-xl text-sm font-bold hover:text-white">+ Créer</button>
                                            </div>
                                        </div>

                                        {/* Inputs */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase">Nom</label>
                                                <input
                                                    type="text"
                                                    value={offerDetails.name}
                                                    onChange={(e) => setOfferDetails({ ...offerDetails, name: e.target.value })}
                                                    className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase">Prix (€)</label>
                                                <input
                                                    type="text"
                                                    value={offerDetails.price}
                                                    onChange={(e) => setOfferDetails({ ...offerDetails, price: e.target.value })}
                                                    className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-orange-500"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Heure de fin</label>
                                            <input
                                                type="time"
                                                value={offerDetails.time}
                                                onChange={(e) => setOfferDetails({ ...offerDetails, time: e.target.value })}
                                                className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-orange-500"
                                            />
                                        </div>
                                    </div>

                                    <button onClick={handlePublishOffer} className="w-full bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-600/20 active:scale-95 transition-transform">
                                        Publier l'Offre
                                    </button>
                                </>
                            )}

                            {/* HOURS MODAL */}
                            {activeModal === "hours" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">Gérer les Horaires</h3>
                                        <button onClick={closeModal} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><Icons.Close className="w-5 h-5 text-gray-400" /></button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between">
                                            <span className="text-gray-200 font-bold">Statut Actuel</span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${shopStatus.isOpen ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                                                {shopStatus.isOpen ? 'OUVERT' : 'FERMÉ'}
                                            </span>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Ouverture Exceptionnelle</label>
                                            <div className="grid grid-cols-2 gap-4 mt-2">
                                                <button
                                                    onClick={() => setShopStatus({ ...shopStatus, isOpen: true })}
                                                    className={`py-3 rounded-xl font-bold text-sm border transition-colors ${shopStatus.isOpen ? 'bg-green-600 border-green-600 text-white' : 'bg-transparent border-white/10 text-gray-500 hover:text-white'}`}
                                                >
                                                    Ouvrir
                                                </button>
                                                <button
                                                    onClick={() => setShopStatus({ ...shopStatus, isOpen: false })}
                                                    className={`py-3 rounded-xl font-bold text-sm border transition-colors ${!shopStatus.isOpen ? 'bg-red-600 border-red-600 text-white' : 'bg-transparent border-white/10 text-gray-500 hover:text-white'}`}
                                                >
                                                    Fermer
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Prochaine Ouverture</label>
                                            <input
                                                type="time"
                                                value={shopStatus.nextOpening}
                                                onChange={(e) => setShopStatus({ ...shopStatus, nextOpening: e.target.value })}
                                                className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-brand-green"
                                            />
                                        </div>
                                    </div>

                                    <button onClick={handleSaveHours} className="w-full bg-white text-black font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform">
                                        Enregistrer
                                    </button>
                                </>
                            )}

                            {/* SETTINGS: SHOP */}
                            {activeModal === "settings_shop" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">Etablissement</h3>
                                        <button onClick={closeModal} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><Icons.Close className="w-5 h-5 text-gray-400" /></button>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Nom du commerce</label>
                                            <input type="text" defaultValue="Sairam - Paris 04" className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-orange-500" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Adresse Postale</label>
                                            <input type="text" defaultValue="12 Rue des Rosiers, 75004 Paris" className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-orange-500" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Description courte</label>
                                            <textarea defaultValue="Le meilleur de la street food indienne au cœur du marais." className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-orange-500 min-h-[80px]" />
                                        </div>
                                    </div>
                                    <button onClick={() => { closeModal(); showToast('Infos mises à jour !', 'success') }} className="w-full bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform">Enregistrer</button>
                                </>
                            )}

                            {/* SETTINGS: SUBSCRIPTION */}
                            {activeModal === "settings_sub" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">Abonnement</h3>
                                        <button onClick={closeModal} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><Icons.Close className="w-5 h-5 text-gray-400" /></button>
                                    </div>
                                    <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                        <div className="relative z-10">
                                            <h4 className="text-sm font-bold opacity-80 uppercase tracking-widest">Plan Actuel</h4>
                                            <div className="text-3xl font-black mt-2">Heynouth PRO</div>
                                            <div className="text-sm font-medium mt-1 opacity-90">Renouvellement le 01/03/2026</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                                            <span className="text-sm font-bold text-gray-300">Prochaine facture</span>
                                            <span className="text-sm font-bold text-white">29.00 €</span>
                                        </div>
                                        <button className="w-full py-3 bg-white/5 rounded-xl text-sm font-bold text-gray-300 hover:bg-white/10 transition-colors">Télécharger les factures</button>
                                    </div>
                                </>
                            )}

                            {/* SETTINGS: NOTIFICATIONS */}
                            {activeModal === "settings_notif" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">Notifications</h3>
                                        <button onClick={closeModal} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><Icons.Close className="w-5 h-5 text-gray-400" /></button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { label: 'Alertes SMS (Commandes)', active: true },
                                            { label: 'Emails Récapitulatifs', active: true },
                                            { label: 'Nouveautés Heynouth', active: false },
                                            { label: 'Sons de notification', active: true },
                                        ].map((notif, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                                <span className="text-sm font-bold text-gray-200">{notif.label}</span>
                                                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${notif.active ? 'bg-green-500' : 'bg-gray-700'}`}>
                                                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${notif.active ? 'translate-x-6' : 'translate-x-0'}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* SETTINGS: TEAM */}
                            {activeModal === "settings_team" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">Mon Equipe</h3>
                                        <button onClick={closeModal} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><Icons.Close className="w-5 h-5 text-gray-400" /></button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'Sairam Admin', role: 'Propriétaire', avatar: 'hue-rotate-0' },
                                            { name: 'Nouth Assistant', role: 'IA', avatar: 'hue-rotate-180' },
                                            { name: 'Chef Cuisine', role: 'Staff', avatar: 'grayscale' },
                                        ].map((member, i) => (
                                            <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-800">
                                                    <Image src="/images/nouth-avatar.png" alt="Avatar" fill className={`object-cover ${member.avatar}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-bold text-white">{member.name}</div>
                                                    <div className="text-xs font-medium text-gray-500">{member.role}</div>
                                                </div>
                                                {member.role !== 'Propriétaire' && <button className="text-red-500 font-bold text-xs">Retirer</button>}
                                            </div>
                                        ))}
                                        <button className="w-full py-4 border border-dashed border-white/20 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:border-white/40 transition-colors">+ Ajouter un membre</button>
                                    </div>
                                </>
                            )}

                            {/* SETTINGS: SECURITY */}
                            {activeModal === "settings_sec" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">Sécurité</h3>
                                        <button onClick={closeModal} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><Icons.Close className="w-5 h-5 text-gray-400" /></button>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Ancien mot de passe</label>
                                            <input type="password" placeholder="••••••••" className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-orange-500" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Nouveau mot de passe</label>
                                            <input type="password" placeholder="••••••••" className="w-full mt-1 bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm font-bold focus:outline-none focus:border-orange-500" />
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                                            <div>
                                                <div className="text-sm font-bold text-orange-500">Double Authentification</div>
                                                <div className="text-[10px] text-gray-400">Recommandé pour votre sécurité</div>
                                            </div>
                                            <div className="w-10 h-5 bg-orange-500 rounded-full p-0.5"><div className="w-4 h-4 bg-white rounded-full translate-x-5 shadow-sm"></div></div>
                                        </div>
                                    </div>
                                    <button onClick={() => { closeModal(); showToast('Sécurité mise à jour', 'success') }} className="w-full bg-white text-black font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform">Mettre à jour</button>
                                </>
                            )}

                            {/* CLOSURE MODAL */}
                            {activeModal === "closure" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">Fermeture Exceptionnelle</h3>
                                        <button onClick={closeModal} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><Icons.Close className="w-5 h-5 text-gray-400" /></button>
                                    </div>

                                    <p className="text-sm text-gray-400">
                                        Confirmez la fermeture immédiate de votre établissement. Vos clients seront notifiés.
                                    </p>

                                    <div className="space-y-3">
                                        <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-2xl hover:bg-white/10 flex items-center justify-between px-4 active:bg-white/20">
                                            <span>Fermer pour 1h</span>
                                            <Icons.ChevronRight className="w-4 h-4 text-gray-500" />
                                        </button>
                                        <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-2xl hover:bg-white/10 flex items-center justify-between px-4 active:bg-white/20">
                                            <span>Fermer jusqu'à demain</span>
                                            <Icons.ChevronRight className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </div>

                                    <button onClick={handleConfirmClosure} className="w-full bg-red-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-600/20 active:scale-95 transition-transform mt-2">
                                        Confirmer la Fermeture
                                    </button>
                                </>
                            )}

                        </div>
                    </div>
                )}

                {/* --- TOAST NOTIFICATION --- */}
                {
                    toast.visible && (
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-[110] animate-bounce-in w-full flex justify-center pointer-events-none">
                            <div className={`mx-4 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border font-bold text-sm backdrop-blur-xl ${toast.type === 'success' ? 'bg-green-500/90 text-white border-green-400/50' : 'bg-red-500/90 text-white border-red-400/50'}`}>
                                {toast.type === 'success' ? <Icons.Check className="w-5 h-5" /> : <Icons.Lock className="w-5 h-5" />}
                                <span>{toast.message}</span>
                            </div>
                        </div>
                    )
                }

            </main >
        </div >
    );
}
