"use client";

import { useState, useMemo } from 'react';
import { SHOPS, Shop } from '@/data/shops'; // We can still import types/data for initial state
import Image from 'next/image';

// Simple Password Gate Component
function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // HARDCODED PASSWORD (TEMPORARY - The user asked for "a password we communicate later")
        // I will set it to "admin123" for now and tell the user where to change it.
        // Or better, checking against an env var passed via props would be safer but client-side is requested physically.
        if (password === "admin123") {
            onUnlock();
        } else {
            setError(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="p-8 bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
                <h1 className="text-2xl font-bold mb-6 text-center">Accès Restreint 🔒</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(false); }}
                    placeholder="Mot de passe"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 mb-4 transition-colors"
                />
                {error && <p className="text-red-500 text-sm mb-4 text-center">Mot de passe incorrect</p>}
                <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all">
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
    const [editingShop, setEditingShop] = useState<Shop | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const filteredShops = useMemo(() => {
        const q = search.toLowerCase();
        return shops.filter(s =>
            s.name.toLowerCase().includes(q) ||
            s.districtLabel.toLowerCase().includes(q) ||
            s.slug.toLowerCase().includes(q)
        );
    }, [shops, search]);

    // Handle Save (Call API)
    const handleSave = async (updatedShop: Shop) => {
        setIsSaving(true);
        try {
            const response = await fetch('/api/admin/update-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ shop: updatedShop }),
            });

            if (!response.ok) throw new Error('Failed to update');

            alert('Modifications enregistrées ! La mise à jour sera visible dans quelques minutes.');
            setEditingShop(null);
            // Optionally reload page or update local state
            // window.location.reload(); 
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la sauvegarde. Vérifiez la console.');
        } finally {
            setIsSaving(false);
        }
    };

    if (!isUnlocked) return <PasswordGate onUnlock={() => setIsUnlocked(true)} />;

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard ⚡</h1>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Rechercher un commerce..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-gray-100 border-none px-4 py-2 rounded-lg text-sm w-64 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                    <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                </div>
            </header>

            <main className="p-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredShops.map((shop) => (
                        <div
                            key={shop.slug}
                            onClick={() => setEditingShop(shop)}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                        >
                            <div className="h-32 bg-gray-100 relative">
                                <Image src={shop.mapImage} alt={shop.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold shadow-sm">
                                    {shop.districtLabel}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1">{shop.name}</h3>
                                <p className="text-sm text-gray-500 truncate">{shop.contact.address}</p>
                                <div className="mt-3 flex items-center gap-2">
                                    {shop.isPartner && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-bold">Partenaire</span>}
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold">⭐ {shop.rating || 5}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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
                            <div className="grid grid-cols-2 gap-4">
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

                            <div className="grid grid-cols-2 gap-4">
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
            )}
        </div>
    );
}
