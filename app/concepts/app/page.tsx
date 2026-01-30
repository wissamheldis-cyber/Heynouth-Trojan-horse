"use client";

import Image from "next/image";
import { SHOPS } from "@/data/shops";
import Link from "next/link";

export default function AppConceptPage() {
    // Mock user
    const userName = "Julie";
    const favoriteShops = SHOPS.slice(0, 3); // Take first 3 as favorites

    return (
        <div className="relative min-h-[100dvh] w-full bg-[#f0f0f0] font-sans flex items-center justify-center overflow-hidden">

            {/* --- BACKGROUND SHELL (Same as Shop Landing) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#22c55e]/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#fbbf24]/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
            </div>

            {/* --- INTEMPOREL WRAPPER (The Phone Frame) --- */}
            <main className="relative z-10 w-full max-w-[430px] h-[100dvh] sm:h-[90vh] sm:max-h-[900px] sm:rounded-[40px] bg-[#FAFAFA] shadow-2xl overflow-y-auto overflow-x-hidden no-scrollbar pb-24 border sm:border-white/50">

                {/* --- APP CONTENT --- */}

                {/* Header */}
                <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-black/5 px-6 pt-12 pb-4">
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

                <div className="px-6 space-y-8 mt-6">

                    {/* Section: Mes Commerces */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-black tracking-tight">Mes Commerces</h2>
                            <button className="text-xs font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">Voir tout</button>
                        </div>

                        {/* Horizontal Scroll */}
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar snap-x snap-mandatory">
                            {favoriteShops.map((shop) => (
                                <div key={shop.slug} className="snap-start shrink-0 w-[140px] flex flex-col gap-2">
                                    <div className="relative h-[140px] w-full overflow-hidden rounded-3xl shadow-sm border border-black/5">
                                        <Image
                                            src={shop.mapImage}
                                            alt={shop.name}
                                            fill
                                            className="object-cover"
                                        />
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
                            {/* Add Button */}
                            <div className="snap-start shrink-0 w-[80px] flex flex-col gap-2 items-center justify-center">
                                <button className="h-[60px] w-[60px] rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-300 hover:border-brand-green hover:text-brand-green transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                </button>
                                <span className="text-[10px] font-medium text-gray-400">Ajouter</span>
                            </div>
                        </div>
                    </section>

                    {/* Section: Offres du moment (Wallet style) */}
                    <section>
                        <h2 className="text-lg font-black tracking-tight mb-4">Offres en cours</h2>
                        <div className="space-y-4">
                            {/* Mock Offer 1 */}
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
                                    <div className="ml-auto flex flex-col items-end justify-center">
                                        <span className="text-lg font-black text-brand-green">{favoriteShops[0].dailyOffer?.price || "5€"}</span>
                                        <span className="text-xs font-bold text-gray-300 line-through">{favoriteShops[0].dailyOffer?.oldPrice || "12€"}</span>
                                    </div>
                                </div>
                                <div className="mt-1 bg-brand-paper rounded-2xl p-3 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Fini dans 2h</span>
                                    <button className="text-[11px] font-black bg-brand-ink text-white px-4 py-2 rounded-xl shadow-lg">RÉSERVER</button>
                                </div>
                            </div>

                            {/* Mock Offer 2 */}
                            <div className="group relative overflow-hidden rounded-3xl bg-white p-1 shadow-card opacity-60 grayscale filter">
                                <div className="flex gap-4 p-3">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 text-xs font-bold text-gray-400">ÉPUISÉ</div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-400 w-fit mb-1">
                                            TERMINÉ
                                        </div>
                                        <h3 className="text-base font-black leading-tight text-gray-400">
                                            Brunch Box
                                        </h3>
                                        <p className="text-xs font-medium text-gray-400">Café de la Poste</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

                {/* Bottom Nav (Mock) - Must be absolute within the Frame */}
                <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-black/5 pb-8 pt-4 px-8 flex justify-between items-end z-50 sm:rounded-b-[40px]">
                    <div className="flex flex-col items-center gap-1 text-brand-green">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                        <span className="text-[10px] font-bold">Accueil</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <span className="text-[10px] font-medium">Explorer</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="text-[10px] font-medium">Panier</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        <span className="text-[10px] font-medium">Profil</span>
                    </div>
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
