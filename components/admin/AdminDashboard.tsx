"use client";

import { useState, useMemo } from 'react';
import { SHOPS, Shop } from '@/data/shops'; // We can still import types/data for initial state
import Link from 'next/link';
import Image from 'next/image';

// Simple Password Gate Component
// Sleek Password Gate Component (Pro Design)
function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Updated Password
        if (password === "Acor0rocA") {
            onUnlock();
        } else {
            setError(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden font-sans">
            {/* Background Effects (Pro Style) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black" />
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[60vh] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[20%] w-[40vw] h-[40vw] bg-yellow-600/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 p-8 w-full max-w-sm flex flex-col items-center gap-6">

                {/* Logo & Glow */}
                <div className="relative group mb-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500 blur-[50px] opacity-60 animate-pulse-slow" />
                    <div className="relative h-20 w-20">
                        {/* SHOU Edition Logo */}
                        <Image src="/shou-logo.png" alt="SHOU Edition Access" fill className="object-contain drop-shadow-2xl" />
                    </div>
                </div>

                <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-2xl shadow-2xl">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(false); }}
                        placeholder="Mot de passe"
                        className="w-full bg-transparent text-center text-white font-bold placeholder-white/30 px-4 py-4 rounded-xl outline-none focus:bg-white/5 transition-all tracking-widest"
                        autoFocus
                    />
                </div>

                {error && <p className="text-red-400 text-xs font-bold animate-pulse">Mot de passe incorrect</p>}

                <button
                    type="submit"
                    className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
                >
                    Entrer
                </button>
            </form>
        </div>
    );
}

// Main Dashboard Component
export default function AdminDashboard() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [shops] = useState<Shop[]>(SHOPS); // Initial data
    const [search, setSearch] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("all");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [editingShop, setEditingShop] = useState<Shop | null>(null);
    const [originalSlug, setOriginalSlug] = useState<string>("");
    const [isSaving, setIsSaving] = useState(false);

    const filteredShops = useMemo(() => {
        const q = search.toLowerCase();
        return shops.filter(s => {
            const matchesSearch = s.name.toLowerCase().includes(q) ||
                s.districtLabel.toLowerCase().includes(q) ||
                s.slug.toLowerCase().includes(q);
            const matchesDistrict = selectedDistrict === "all" || s.districtLabel === selectedDistrict;
            return matchesSearch && matchesDistrict;
        });
    }, [shops, search, selectedDistrict]);

    const partnerShops = useMemo(() => {
        return filteredShops.filter(s => s.isPartner);
    }, [filteredShops]);

    const regularShops = useMemo(() => {
        return filteredShops.filter(s => !s.isPartner);
    }, [filteredShops]);

    // Extract unique districts
    const districts = useMemo(() => {
        const unique = new Set(SHOPS.map(s => s.districtLabel));
        return Array.from(unique).sort();
    }, []);

    // Handle Save (Call API)
    const handleSave = async (updatedShop: Shop) => {
        setIsSaving(true);
        try {
            const response = await fetch('/api/admin/update-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ shop: updatedShop, originalSlug }),
            });

            if (!response.ok) throw new Error('Failed to update');

            alert('Modifications enregistrées ! La mise à jour sera visible dans quelques minutes.');
            setEditingShop(null);
            // Optionally reload page or update local state
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la sauvegarde. Vérifiez la console.');
        } finally {
            setIsSaving(false);
        }
    };

    if (!isUnlocked) return <PasswordGate onUnlock={() => setIsUnlocked(true)} />;

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans relative">
            {/* Background Effects (Pro Style) - Persistent */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black" />
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[60vh] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[20%] w-[40vw] h-[40vw] bg-yellow-600/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
            </div>

            <header className="relative z-20 bg-[#121212]/80 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between sticky top-0 gap-4 md:gap-0">
                <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                    <div className="relative h-10 w-10 shrink-0">
                        <Image src="/shou-logo.png" alt="SHOU" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-lg font-bold text-white tracking-[0.2em] uppercase leading-tight">SHOU edition</span>
                        <span className="text-[8px] sm:text-[9px] font-medium text-gray-400 tracking-[0.05em] uppercase">Marque A.M - Pôle Développement - Heynouth</span>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
                    {/* Navigation Group */}
                    <div className="flex items-center gap-2 md:mr-4 md:border-r border-white/10 pr-0 md:pr-4">
                        <Link href="/hometrojanhorse8" className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="Retour au Hub">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </Link>
                        <Link href="/concepts/app" className="p-2 rounded-lg text-green-500/80 hover:text-green-400 hover:bg-green-500/10 transition-colors" title="Heynouth App">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 0 002-2V5a2 0 00-2-2H8a2 0 00-2 2v14a2 0 002 2z" /></svg>
                        </Link>
                        <Link href="/concepts/pro" className="p-2 rounded-lg text-orange-500/80 hover:text-orange-400 hover:bg-orange-500/10 transition-colors" title="Heynouth Pro">
                            <div className="relative w-5 h-5">
                                <Image src="/logo-hey.png" alt="Pro" fill className="object-contain brightness-0 invert" />
                            </div>
                        </Link>
                    </div>

                    {/* District Dropdown */}
                    <div className="relative z-20">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/5 px-3 py-2 rounded-lg text-xs md:text-sm font-bold text-white transition-colors whitespace-nowrap"
                        >
                            {selectedDistrict === "all" ? "Tout Paris" : selectedDistrict}
                            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1 max-h-64 overflow-y-auto">
                                <button
                                    onClick={() => { setSelectedDistrict("all"); setIsDropdownOpen(false); }}
                                    className={`w-full text-left px-4 py-2 text-xs font-bold ${selectedDistrict === "all" ? "bg-orange-500/20 text-orange-400" : "text-gray-300 hover:bg-white/5"}`}
                                >
                                    Tout Paris
                                </button>
                                {districts.map(d => (
                                    <button
                                        key={d}
                                        onClick={() => { setSelectedDistrict(d); setIsDropdownOpen(false); }}
                                        className={`w-full text-left px-4 py-2 text-xs font-bold ${selectedDistrict === d ? "bg-orange-500/20 text-orange-400" : "text-gray-300 hover:bg-white/5"}`}
                                    >
                                        {d}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="Rechercher..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-white/10 border border-white/5 px-3 py-2 rounded-lg text-xs md:text-sm w-32 md:w-48 text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    />

                    {/* Nouth Avatar */}
                    <div className="h-8 w-8 md:h-10 md:w-10 relative rounded-full overflow-hidden border border-white/10 shadow-sm bg-black/40 shrink-0">
                        <Image src="/logo-hey.png" alt="Admin" fill className="object-contain p-1 brightness-0 invert" />
                    </div>
                </div>
            </header>

            <main className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto space-y-8 md:space-y-12">

                {/* --- PARTNERS SECTION --- */}
                {partnerShops.length > 0 && (
                    <section>
                        <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#f97316]"></span>
                            Partenaires Officiels
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {partnerShops.map((shop) => (
                                <div
                                    key={shop.slug}
                                    onClick={() => { setEditingShop(shop); setOriginalSlug(shop.slug); }}
                                    className="bg-black/80 backdrop-blur-xl rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.1)] border border-orange-500/30 overflow-hidden hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all cursor-pointer group relative"
                                >
                                    {/* Gold Glow inside */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />

                                    <div className="h-40 bg-black/50 relative">
                                        <Image src={shop.mapImage} alt={shop.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg border border-orange-400/50 uppercase tracking-wide">
                                            Partenaire
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-xl mb-1 text-white group-hover:text-orange-400 transition-colors">{shop.name}</h3>
                                        <p className="text-sm text-gray-400 truncate mb-4">{shop.contact.address}</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs bg-orange-500/10 text-orange-200 border border-orange-500/20 px-2 py-1 rounded-lg font-bold">⭐ {shop.rating || 5}</span>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-wider">{shop.districtLabel}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* --- REGULAR SHOPS --- */}
                <section>
                    {partnerShops.length > 0 && <h2 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">Autres Commerces</h2>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularShops.map((shop) => (
                            <div
                                key={shop.slug}
                                onClick={() => { setEditingShop(shop); setOriginalSlug(shop.slug); }}
                                className="bg-[#1A1A1A]/60 backdrop-blur-md rounded-xl shadow-lg border border-white/5 overflow-hidden hover:border-white/20 hover:shadow-xl transition-all cursor-pointer group"
                            >
                                <div className="h-32 bg-black/50 relative">
                                    <Image src={shop.mapImage} alt={shop.name} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                                    <div className="absolute top-2 right-2 bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold shadow-sm text-white border border-white/10">
                                        {shop.districtLabel}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-1 text-white group-hover:text-orange-400 transition-colors">{shop.name}</h3>
                                    <p className="text-sm text-gray-400 truncate">{shop.contact.address}</p>
                                    <div className="mt-3 flex items-center gap-2">
                                        {shop.isPartner && <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded-full font-bold">Partenaire</span>}
                                        <span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full font-bold">⭐ {shop.rating || 5}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* --- EDIT MODAL --- */}
            {editingShop && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                            <h2 className="text-lg font-bold">Modifier : {editingShop.name}</h2>
                            <button onClick={() => setEditingShop(null)} className="text-gray-400 hover:text-gray-600">✕</button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">ID Unique (Slug / URL)</label>
                                    <input
                                        type="text"
                                        value={editingShop.slug}
                                        onChange={(e) => setEditingShop({ ...editingShop, slug: e.target.value })}
                                        className="w-full bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-sm font-bold text-red-800 focus:ring-2 focus:ring-red-500 outline-none"
                                    />
                                    <p className="text-[10px] text-red-600 mt-1">⚠️ Attention : Changer le slug change l'URL du commerce (`/{editingShop.slug}`). Si vous aviez des QR codes imprimés, ils ne marcheront plus.</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nom du commerce</label>
                                    <input
                                        type="text"
                                        value={editingShop.name}
                                        onChange={(e) => setEditingShop({ ...editingShop, name: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Arrondissement (ex: PARIS 11)</label>
                                    <input
                                        type="text"
                                        value={editingShop.districtLabel}
                                        onChange={(e) => setEditingShop({ ...editingShop, districtLabel: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Note (1-5)</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        max="5"
                                        value={editingShop.rating || 5}
                                        onChange={(e) => setEditingShop({ ...editingShop, rating: parseFloat(e.target.value) })}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>
                                <div className="flex items-center pt-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={editingShop.isPartner || false}
                                            onChange={(e) => setEditingShop({ ...editingShop, isPartner: e.target.checked })}
                                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500 border-gray-300"
                                        />
                                        <span className="text-sm font-bold text-gray-700">Partenaire Officiel</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Téléphone (Affiché)</label>
                                <input
                                    type="text"
                                    value={editingShop.contact.phoneDisplay}
                                    onChange={(e) => setEditingShop({ ...editingShop, contact: { ...editingShop.contact, phoneDisplay: e.target.value } })}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-green-500 outline-none"
                                />
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                                <p className="text-xs text-yellow-800">⚠️ Attention : Les autres champs (Horaires, Produits, Offres) ne sont pas encore éditables dans cette version simplifiée.</p>
                            </div>
                        </div>

                        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button
                                onClick={() => setEditingShop(null)}
                                className="px-6 py-2 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={() => handleSave(editingShop)}
                                disabled={isSaving}
                                className={`px-6 py-2 rounded-lg text-sm font-bold text-white shadow-lg transition-all ${isSaving ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 hover:scale-105'}`}
                            >
                                {isSaving ? 'Enregistrement...' : 'Enregistrer sur GitHub'}
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}
