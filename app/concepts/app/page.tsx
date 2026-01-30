"use client";

import Image from "next/image";
import { SHOPS } from "@/data/shops";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function AppConceptPage() {
    // State for navigation
    const [currentTab, setCurrentTab] = useState<"home" | "offers" | "cart" | "profile" | "hub">("home");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedHubDistrict, setSelectedHubDistrict] = useState("all");

    // Mock user
    const userName = "Julie";
    const favoriteShops = SHOPS.slice(0, 3); // Take first 3 as favorites

    // Derived data for Hub view
    const districts = useMemo(() => {
        const unique = new Set(SHOPS.map(s => s.districtLabel));
        return Array.from(unique).sort();
    }, []);

    const filteredShops = useMemo(() => {
        const q = searchQuery.toLowerCase();
        return SHOPS.filter(s => {
            const matchQ = s.name.toLowerCase().includes(q) || s.districtLabel.toLowerCase().includes(q);
            const matchD = selectedHubDistrict === "all" || s.districtLabel === selectedHubDistrict;
            return matchQ && matchD;
        });
    }, [searchQuery, selectedHubDistrict]);


    return (
        <div className="relative min-h-[100dvh] w-full bg-[#f0f0f0] font-sans flex items-center justify-center overflow-hidden">

            {/* --- BACKGROUND SHELL (Same as Shop Landing) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#22c55e]/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#fbbf24]/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
            </div>

            {/* --- INTEMPOREL WRAPPER (The Phone Frame) --- */}
            <main className="relative z-10 w-full max-w-[430px] h-[100dvh] sm:h-[90vh] sm:max-h-[900px] sm:rounded-[40px] bg-[#FAFAFA] shadow-2xl overflow-hidden border sm:border-white/50 flex flex-col">

                {/* --- APP CONTENT (Scrollable Area) --- */}
                <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-24">

                    {/* Header (Always Visible) */}
                    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 px-6 pt-12 pb-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Bonjour,</p>
                                <h1 className="text-2xl font-black text-brand-green">{userName} 👋</h1>
                            </div>
                            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-black/10">
                                {/* Placeholder Avatar */}
                                <div className="h-full w-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow text-xs font-bold">You</div>
                            </div>
                        </div>
                    </header>

                    {/* --- TAB CONTENT --- */}

                    {/* 1. HOME TAB */}
                    {currentTab === "home" && (
                        <>
                            {/* Section: Map */}
                            <div className="px-6 mt-6">
                                <div className="relative h-32 w-full rounded-3xl overflow-hidden shadow-sm border border-black/5 group cursor-pointer bg-gray-200">
                                    <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Paris&zoom=13&size=600x300&sensor=false')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/10 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-white/50">
                                            <span className="text-lg">🗺️</span>
                                            <span className="text-xs font-bold text-gray-800">Voir la carte</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 space-y-8 mt-6">
                                {/* Section: Mes Commerces */}
                                <section>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-lg font-black tracking-tight">Mes Commerces</h2>
                                        <button
                                            onClick={() => setCurrentTab('hub')}
                                            className="text-xs font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full"
                                        >
                                            Voir tout
                                        </button>
                                    </div>
                                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar snap-x snap-mandatory">
                                        {favoriteShops.map((shop) => (
                                            <div key={shop.slug} className="snap-start shrink-0 w-[140px] flex flex-col gap-2">
                                                <div className="relative h-[140px] w-full overflow-hidden rounded-3xl shadow-sm border border-black/5">
                                                    <Image src={shop.mapImage} alt={shop.name} fill className="object-cover" />
                                                    {shop.isPartner && (
                                                        <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg">
                                                            <Image src="/logo-hey.png" alt="P" width={12} height={12} className="object-contain inverted" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-sm leading-tight truncate">{shop.name}</h3>
                                                    <p className="text-[10px] text-gray-400 font-medium">{shop.districtLabel}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="snap-start shrink-0 w-[80px] flex flex-col gap-2 items-center justify-center">
                                            <button className="h-[60px] w-[60px] rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-300 hover:border-brand-green hover:text-brand-green transition-colors">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                            </button>
                                            <span className="text-[10px] font-medium text-gray-400">Ajouter</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Teaser Offres */}
                                <section>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-lg font-black tracking-tight">Offres en cours</h2>
                                        <button onClick={() => setCurrentTab('offers')} className="text-xs font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">Voir tout</button>
                                    </div>
                                    <div className="group relative overflow-hidden rounded-3xl bg-white p-1 shadow-card transition-transform active:scale-[0.98]">
                                        <div className="flex gap-4 p-3">
                                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                                                <Image src={favoriteShops[0].products[0].image} alt="Offer" fill className="object-cover" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-bold text-brand-green w-fit mb-1">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                                                    DISPO
                                                </div>
                                                <h3 className="text-base font-black leading-tight text-brand-ink">
                                                    {favoriteShops[0].dailyOffer?.title || "Panier surprise"}
                                                </h3>
                                                <p className="text-xs font-medium text-gray-500">{favoriteShops[0].name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </>
                    )}

                    {/* 2. OFFERS TAB */}
                    {currentTab === "offers" && (
                        <div className="px-6 mt-6 space-y-8">
                            {/* Header Section */}
                            <div>
                                <h2 className="text-2xl font-black mb-2">Explorer ❤️</h2>
                                <p className="text-sm text-gray-500">Concours, offres favorites et pépites du quartier.</p>
                            </div>

                            {/* Filter Pills */}
                            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                                <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">Tout voir</button>
                                <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">Concours 🎁</button>
                                <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">Favoris ⭐</button>
                                <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">Autour de moi 📍</button>
                            </div>

                            <div className="space-y-4">
                                {/* Concours Card */}
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-yellow to-orange-400 p-4 shadow-lg text-white">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    </div>
                                    <div className="relative z-10">
                                        <span className="bg-white/20 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">Concours</span>
                                        <h3 className="text-xl font-black mt-2 leading-tight">Gagnez un an de courses !</h3>
                                        <p className="text-xs font-medium opacity-90 mt-1 mb-4">Participez au grand jeu Heynouth.</p>
                                        <button className="bg-white text-brand-ink px-4 py-2 rounded-xl text-xs font-bold shadow-sm">Je participe</button>
                                    </div>
                                </div>

                                {/* Offers List */}
                                {[favoriteShops[0], favoriteShops[1], favoriteShops[2]].map((shop, i) => (
                                    <div key={i} className="group relative overflow-hidden rounded-3xl bg-white p-1 shadow-card">
                                        <div className="flex gap-4 p-3">
                                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                                                <Image src={shop.products[0].image} alt="Offer" fill className="object-cover" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-bold text-brand-green w-fit mb-1">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                                                    DISPO
                                                </div>
                                                <h3 className="text-base font-black leading-tight text-brand-ink">
                                                    {shop.dailyOffer?.title || "Panier Surprise"}
                                                </h3>
                                                <p className="text-xs font-medium text-gray-500">{shop.name}</p>
                                            </div>
                                            <div className="ml-auto flex flex-col items-end justify-center">
                                                <span className="text-lg font-black text-brand-green">{shop.dailyOffer?.price || "5€"}</span>
                                                <span className="text-xs font-bold text-gray-300 line-through">{shop.dailyOffer?.oldPrice || "12€"}</span>
                                            </div>
                                        </div>
                                        <div className="mt-1 bg-brand-paper rounded-2xl p-3 flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Fini dans 4h</span>
                                            <button className="text-[11px] font-black bg-brand-ink text-white px-4 py-2 rounded-xl shadow-lg">RÉSERVER</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 3. MOBILE HUB ("Tout les commerces") TAB */}
                    {currentTab === "hub" && (
                        <div className="px-6 mt-6 space-y-6">
                            {/* Header */}
                            <div>
                                <button onClick={() => setCurrentTab('home')} className="mb-4 text-xs font-bold text-gray-400 hover:text-brand-green flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                    Retour
                                </button>
                                <h2 className="text-2xl font-black text-brand-ink">Tous les commerces</h2>
                                <p className="text-sm text-gray-500">Explorez les pépites de votre quartier.</p>
                            </div>

                            {/* Search & Filter */}
                            <div className="sticky top-0 bg-[#FAFAFA] z-20 pb-4 pt-2 -mx-6 px-6 space-y-4">
                                {/* Search Input */}
                                <div className="relative">
                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    <input
                                        type="text"
                                        placeholder="Rechercher un commerce..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white border-none py-3 pl-12 pr-4 rounded-xl text-sm font-medium shadow-sm ring-1 ring-gray-100 focus:ring-2 focus:ring-brand-green/20 outline-none placeholder-gray-400"
                                    />
                                </div>

                                {/* District Horizontal Scroll */}
                                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                                    <button
                                        onClick={() => setSelectedHubDistrict('all')}
                                        className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${selectedHubDistrict === 'all' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
                                    >
                                        Tout Paris
                                    </button>
                                    {districts.map(d => (
                                        <button
                                            key={d}
                                            onClick={() => setSelectedHubDistrict(d)}
                                            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${selectedHubDistrict === d ? 'bg-brand-green text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Shops List */}
                            <div className="space-y-4 pb-12">
                                {filteredShops.map((shop) => (
                                    <Link
                                        href={`/${shop.slug}`}
                                        key={shop.slug}
                                        className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-all active:scale-[0.99]"
                                    >
                                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-gray-100">
                                            <Image src={shop.mapImage} alt={shop.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-bold text-gray-900 truncate">{shop.name}</h3>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-md font-medium">{shop.districtLabel}</span>
                                                {shop.isPartner && (
                                                    <span className="text-[10px] text-brand-green font-bold flex items-center gap-0.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                                                        Partenaire
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-300">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                        </div>
                                    </Link>
                                ))}
                                {filteredShops.length === 0 && (
                                    <div className="text-center py-12 text-gray-400">
                                        <p className="text-sm">Aucun commerce trouvé.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* 3. CART TAB */}
                    {currentTab === "cart" && (
                        <div className="flex flex-col items-center justify-center p-6 min-h-[50vh] text-center">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-4xl">🛒</span>
                            </div>
                            <h2 className="text-xl font-black text-gray-900 mb-2">Votre panier est vide</h2>
                            <p className="text-sm text-gray-500 mb-8 max-w-[200px]">On dirait que vous n'avez pas encore craqué pour nos offres !</p>
                            <button onClick={() => setCurrentTab('offers')} className="bg-brand-green text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-green/30 hover:scale-105 transition-transform">
                                Découvrir les offres
                            </button>
                        </div>
                    )}

                    {/* 4. PROFILE TAB */}
                    {currentTab === "profile" && (
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-16 w-16 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow text-xl font-bold border-2 border-white shadow-lg">
                                    You
                                </div>
                                <div>
                                    <h2 className="text-xl font-black">{userName}</h2>
                                    <p className="text-sm text-gray-500">Membre depuis 2024</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {['Mes commandes', 'Mes favoris', 'Moyens de paiement', 'Notifications', 'Aide & Contact'].map((item) => (
                                    <button key={item} className="w-full bg-white px-4 py-4 rounded-2xl flex items-center justify-between shadow-sm border border-gray-100">
                                        <span className="font-bold text-gray-700">{item}</span>
                                        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                ))}
                                <button className="w-full mt-8 text-red-500 font-bold text-sm py-4">
                                    Se déconnecter
                                </button>
                            </div>
                        </div>
                    )}

                </div>

                {/* Bottom Nav (Fixed at bottom of container) */}
                <div className="w-full bg-white border-t border-black/5 pt-3 pb-6 px-6 flex justify-between items-end z-50">
                    <button
                        onClick={() => setCurrentTab('home')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'home' || currentTab === 'hub' ? 'text-brand-green' : 'text-gray-300 hover:text-gray-400'}`}
                    >
                        <svg className="w-6 h-6" fill={(currentTab === 'home' || currentTab === 'hub') ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={(currentTab === 'home' || currentTab === 'hub') ? "0" : "2"} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            {(currentTab === 'home' || currentTab === 'hub') && <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />}
                        </svg>
                        <span className="text-[10px] font-bold">Accueil</span>
                    </button>

                    <button
                        onClick={() => setCurrentTab('offers')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'offers' ? 'text-brand-green' : 'text-gray-300 hover:text-gray-400'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                        <span className="text-[10px] font-medium">Offres</span>
                    </button>

                    <button
                        onClick={() => setCurrentTab('cart')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'cart' ? 'text-brand-green' : 'text-gray-300 hover:text-gray-400'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="text-[10px] font-medium">Panier</span>
                    </button>

                    <button
                        onClick={() => setCurrentTab('profile')}
                        className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'profile' ? 'text-brand-green' : 'text-gray-300 hover:text-gray-400'}`}
                    >
                        <svg className="w-6 h-6" fill={currentTab === 'profile' ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        <span className="text-[10px] font-medium">Profil</span>
                    </button>
                </div>

                {/* Floating indicator for "Concept" */}
                <div className="fixed top-24 right-4 z-50 pointer-events-none">
                    <div className="bg-black/80 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest opacity-30">
                        Concept
                    </div>
                </div>
            </main>
        </div>
    );
}
