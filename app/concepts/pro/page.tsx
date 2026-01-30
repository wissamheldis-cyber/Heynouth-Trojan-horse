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
};


export default function ProConceptPage() {
    // Basic state for mock navigation
    const [currentTab, setCurrentTab] = useState<"dashboard" | "clients" | "settings">("dashboard");
    const [clientFilter, setClientFilter] = useState<"24h" | "1w" | "1m" | "all">("24h");

    // Mock Client Data
    const clients = [
        { id: 1, name: "Julie D.", action: "reserved_bought", time: "Il y a 2h", amount: "5€" },
        { id: 2, name: "Thomas M.", action: "scanned", time: "Il y a 3h", amount: null },
        { id: 3, name: "Sophie L.", action: "reserved_cancelled", time: "Il y a 5h", amount: "12€" },
        { id: 4, name: "Marc A.", action: "reserved_bought", time: "Hier", amount: "8€" },
        { id: 5, name: "Inès B.", action: "scanned", time: "Hier", amount: null },
        { id: 6, name: "Lucas P.", action: "reserved_bought", time: "Il y a 2 jours", amount: "15€" },
    ];

    // Filter logic (mocked for visual demo)
    const filteredClients = useMemo(() => {
        if (clientFilter === '24h') return clients.slice(0, 3);
        if (clientFilter === '1w') return clients.slice(0, 5);
        return clients;
    }, [clientFilter, clients]);

    return (
        <div className="relative min-h-[100dvh] w-full bg-[#050505] font-sans flex items-center justify-center overflow-hidden">

            {/* --- BACKGROUND SHELL (Desktop Level) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Main Dark Radial */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black" />

                {/* Desktop Glows */}
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[60vh] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[20%] w-[40vw] h-[40vw] bg-yellow-600/10 rounded-full blur-[100px] mix-blend-screen" />

                {/* Global Noise */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
            </div>

            {/* --- INTEMPOREL WRAPPER (The Phone Frame) --- */}
            <main className="relative z-10 w-full max-w-[430px] h-[100dvh] sm:h-[90vh] sm:max-h-[900px] sm:rounded-[40px] shadow-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 flex flex-col">

                {/* --- PHONE INTERNAL BACKGROUND (Matches Desktop) --- */}
                <div className="absolute inset-0 z-0 bg-[#050505]">
                    {/* Internal Radial */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black" />

                    {/* Internal Glows (Scaled down for phone) */}
                    <div className="absolute top-[-10%] left-[-20%] w-[120%] h-[50%] bg-orange-500/10 rounded-full blur-[80px] mix-blend-screen animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[50%] bg-yellow-600/10 rounded-full blur-[80px] mix-blend-screen" />

                    {/* Internal Noise */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
                </div>

                {/* --- PRO CONTENT (Scrollable Area) --- */}
                <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-24">

                    {/* Header (Sticky) */}
                    <header className="sticky top-0 z-50 bg-[#121212]/80 backdrop-blur-xl border-b border-white/5 px-6 pt-12 pb-4 flex items-center justify-between shadow-sm">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                {/* Pulsing Dot */}
                                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse" />
                                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">En ligne</span>
                            </div>
                            <h1 className="text-xl font-bold tracking-tight text-gray-100">Sairam - Paris 04</h1>
                        </div>
                        <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-gray-400">
                            <Icons.Shop className="w-5 h-5" />
                        </div>
                    </header>

                    {/* 1. DASHBOARD TAB */}
                    {currentTab === 'dashboard' && (
                        <div className="px-6 mt-6 space-y-8">

                            {/* Friendly Greeting */}
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-3xl border border-white/5 shadow-inner relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full group-hover:bg-orange-500/20 transition-colors" />
                                <h2 className="text-xl font-bold mb-2 text-white relative z-10">Bonjour l'équipe Sairam</h2>
                                <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                                    C'est une belle journée pour développer votre activité ! Voici un aperçu de ce qui se passe chez vous aujourd'hui.
                                </p>
                            </div>

                            {/* KPI Section */}
                            <section>
                                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Performances (24h)</h2>
                                <div className="grid grid-cols-2 gap-3">
                                    {/* KPI 1 */}
                                    <div className="bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-32 hover:bg-white/10 transition-colors cursor-pointer group shadow-lg">
                                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                            <Icons.Eye className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="text-3xl font-black block text-gray-100 group-hover:text-blue-400 transition-colors">128</span>
                                            <span className="text-[11px] text-gray-500 font-bold">Vues aujourd'hui</span>
                                        </div>
                                    </div>
                                    {/* KPI 2 */}
                                    <div className="bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-32 hover:bg-white/10 transition-colors cursor-pointer group shadow-lg">
                                        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                            <Icons.Check className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="text-3xl font-black block text-gray-100 group-hover:text-green-500 transition-colors">12</span>
                                            <span className="text-[11px] text-gray-500 font-bold">Abonnés SMS</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Actions Section */}
                            <section>
                                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Actions Rapides</h2>

                                {/* Publish Offer Button */}
                                <button className="w-full relative overflow-hidden group rounded-3xl bg-orange-600/90 p-[1px] transition-all active:scale-[0.98] shadow-lg shadow-orange-500/20">
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
                                    <button className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group shadow-sm">
                                        <Icons.Clock className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform group-hover:text-orange-400" />
                                        <span className="text-[11px] font-bold text-gray-500 group-hover:text-gray-300">Horaires</span>
                                    </button>
                                    <button className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group shadow-sm">
                                        <Icons.Logout className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform group-hover:text-red-400" />
                                        <span className="text-[11px] font-bold text-gray-500 group-hover:text-gray-300">Fermeture Ex.</span>
                                    </button>
                                </div>
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
                                        <span className="text-sm font-bold bg-black/60 px-4 py-2 rounded-full border border-white/20 shadow-sm text-white hover:bg-black/80 transition-colors">Voir ma page</span>
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
                                    <div key={client.id} className="bg-[#1A1A1A]/70 backdrop-blur-sm border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-gray-400 font-bold border border-white/10 shadow-inner">
                                                {/* Initials or User Icon */}
                                                {client.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-sm text-gray-200">{client.name}</h3>
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 3. SETTINGS TAB */}
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
                                    <button key={item.label} className="w-full bg-[#1A1A1A]/80 px-4 py-4 rounded-2xl flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors group shadow-sm">
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

                                <button className="w-full mt-8 bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-sm py-4 rounded-2xl hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2">
                                    <Icons.Logout className="w-4 h-4" />
                                    Déconnexion
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Nav (Sticky) */}
                <div className="relative z-50 w-full bg-[#121212]/90 backdrop-blur-xl border-t border-white/5 pt-3 pb-6 px-8 flex justify-between items-end">
                    <button
                        onClick={() => setCurrentTab('dashboard')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'dashboard' ? 'text-orange-500' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                        <Icons.Dashboard className="w-6 h-6" />
                        <span className="text-[10px] font-bold">Dashboard</span>
                    </button>

                    <button
                        onClick={() => setCurrentTab('clients')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'clients' ? 'text-orange-500' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                        <Icons.Users className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Clients</span>
                    </button>

                    <button
                        onClick={() => setCurrentTab('settings')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'settings' ? 'text-orange-500' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                        <Icons.Settings className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Réglages</span>
                    </button>
                </div>
            </main>
        </div>
    );
}
