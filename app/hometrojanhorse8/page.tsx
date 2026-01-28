"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SHOPS, type Shop } from "@/data/shops";
import { isShopOpen, formatTodayHoursLabel } from "@/lib/shopHours";

// Force client side rendering for search interactivity
// export const dynamic = "force-dynamic"; (Not needed if we trust standard client component behavior)

export default function HubPage() {
    const [search, setSearch] = useState("");

    const filteredShops = SHOPS.filter((shop) => {
        const query = search.toLowerCase();
        return (
            shop.name.toLowerCase().includes(query) ||
            shop.slug.toLowerCase().includes(query) ||
            shop.districtLabel.toLowerCase().includes(query)
        );
    });

    const copyLink = (slug: string) => {
        const url = `${window.location.origin}/${slug}`;
        navigator.clipboard.writeText(url);
        alert(`Lien copié : ${url}`);
    };

    const copySlug = (slug: string) => {
        navigator.clipboard.writeText(slug);
        alert(`Slug copié : ${slug}`);
    };

    return (
        <main className="min-h-screen bg-[#F4F2EC] px-4 py-10 md:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-black text-brand-ink">Heynouth HUB 🐴</h1>
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                        Gestion centralisée des landing pages commerçants.
                    </p>
                </header>

                {/* Search */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Rechercher (nom, slug, district)..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold shadow-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-black"
                            >
                                EFFACER
                            </button>
                        )}
                    </div>
                    <div className="text-sm font-extrabold text-slate-400">
                        {filteredShops.length} commerce{filteredShops.length > 1 ? "s" : ""}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredShops.map((shop) => (
                        <ShopCard key={shop.slug} shop={shop} onCopyLink={copyLink} onCopySlug={copySlug} />
                    ))}
                </div>

                {filteredShops.length === 0 && (
                    <div className="mt-10 text-center text-slate-500">
                        Aucun commerce trouvé pour "{search}".
                    </div>
                )}
            </div>
        </main>
    );
}

function ShopCard({
    shop,
    onCopyLink,
    onCopySlug,
}: {
    shop: Shop;
    onCopyLink: (slug: string) => void;
    onCopySlug: (slug: string) => void;
}) {
    const isOpen = isShopOpen(shop.hours, shop.timezone);
    const hoursLabel = formatTodayHoursLabel(shop.hours, shop.timezone);

    return (
        <article className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg">
            {/* Cover */}
            <div className="relative h-40 bg-slate-100">
                <Image
                    src={shop.mapImage}
                    alt={shop.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 text-white">
                    <h2 className="text-xl font-black leading-tight">{shop.name}</h2>
                    <div className="text-xs font-bold opacity-90">{shop.districtLabel}</div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-4 py-3">
                <div className="flex items-center gap-2">
                    <span
                        className={`inline-block h-2 w-2 rounded-full ${isOpen ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" : "bg-red-500"
                            }`}
                    />
                    <span className={`text-[11px] font-extrabold ${isOpen ? "text-green-700" : "text-slate-500"}`}>
                        {isOpen ? "OUVERT" : "FERMÉ"}
                    </span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500">{hoursLabel}</div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2 p-4">
                <Link
                    href={`/${shop.slug}`}
                    className="col-span-2 flex items-center justify-center rounded-xl bg-brand-green px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-900"
                >
                    Ouvrir la page ↗
                </Link>
                <button
                    onClick={() => onCopyLink(shop.slug)}
                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                    Copier Lien 🔗
                </button>
                <button
                    onClick={() => onCopySlug(shop.slug)}
                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-gray-50 px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                    Slug
                </button>
            </div>
        </article>
    );
}
