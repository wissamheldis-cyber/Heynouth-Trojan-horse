"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProConceptPage() {
    return (
        <main className="relative min-h-screen w-full bg-[#1A1A1A] text-white pb-24 font-sans">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-brand-green/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-brand-yellow/10 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <header className="relative z-10 px-6 pt-12 pb-6 flex items-center justify-between border-b border-white/5">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse" />
                        <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">En ligne</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Sairam - Paris 04</h1>
                </div>
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                    <span className="text-lg">🏪</span>
                </div>
            </header>

            <div className="relative z-10 px-6 mt-8 space-y-8">

                {/* KPI Section */}
                <section>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Performances (24h)</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {/* KPI 1 */}
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-32">
                            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <div>
                                <span className="text-3xl font-black block">128</span>
                                <span className="text-[11px] text-gray-400 font-medium">Vues aujourd'hui</span>
                            </div>
                        </div>
                        {/* KPI 2 */}
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-32">
                            <div className="h-8 w-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <span className="text-3xl font-black block">12</span>
                                <span className="text-[11px] text-gray-400 font-medium">Abonnés SMS</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Actions Section */}
                <section>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Actions Rapides</h2>

                    {/* Publish Offer Button */}
                    <button className="w-full relative overflow-hidden group rounded-3xl bg-brand-green p-1 transition-all active:scale-[0.98]">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="bg-[#1A1A1A] rounded-[22px] p-5 border border-brand-green/30 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-white text-lg leading-tight">Mettre à jour</h3>
                                    <p className="text-xs text-gray-400">Publier l'offre du jour</p>
                                </div>
                            </div>
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </div>
                    </button>

                    {/* Other Actions */}
                    <div className="grid grid-cols-2 gap-3 mt-3">
                        <button className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                            <span className="text-2xl">🕒</span>
                            <span className="text-[11px] font-bold text-gray-300">Horaires</span>
                        </button>
                        <button className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                            <span className="text-2xl">🚪</span>
                            <span className="text-[11px] font-bold text-gray-300">Fermeture</span>
                        </button>
                    </div>
                </section>

                {/* Preview Section */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Aperçu Client</h2>
                        <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-white font-mono">live</span>
                    </div>
                    <div className="relative h-48 w-full rounded-3xl overflow-hidden border border-white/10 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all">
                        {/* Fake content for preview */}
                        <div className="absolute inset-0 bg-[#F4F2EC]">
                            <div className="p-4 flex flex-col items-center mt-8">
                                <div className="h-3 w-32 bg-gray-200 rounded-full mb-2" />
                                <div className="h-8 w-48 bg-gray-800 rounded-full" />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                            <span className="text-sm font-bold">Voir ma page</span>
                        </div>
                    </div>
                </section>

            </div>

            {/* Bottom Nav (Pro) */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-white/5 pb-8 pt-4 px-8 flex justify-between items-end z-50">
                <div className="flex flex-col items-center gap-1 text-brand-green">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg>
                    <span className="text-[10px] font-bold">Dashboard</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    <span className="text-[10px] font-medium">Clients</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-[10px] font-medium">Réglages</span>
                </div>
            </div>

            {/* Floating indicator for "Concept" */}
            <div className="fixed top-24 right-4 z-50 pointer-events-none">
                <div className="bg-white/10 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest opacity-30">
                    Concept Pro
                </div>
            </div>
        </main>
    );
}
