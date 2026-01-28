"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { SHOPS } from "@/data/shops";
import { isShopOpen, formatTodayHoursLabel } from "@/lib/shopHours";
import { QuickIconSearch } from "@/components/icons/QuickActionIcons";
// Custom icons defined below to avoid dependencies
// If lucide-react is not available, I will use text or SVGs. I saw QuickActionIcons, I'll stick to simple SVGs or text if I'm not sure about lucide.
// Actually, I'll just use simple SVG icons inline to be safe and dependency-free for now, similar to QuickActionIcons.
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});

export default function HubClient() {
    const [query, setQuery] = useState("");

    const filteredShops = useMemo(() => {
        const lowerQ = query.toLowerCase();
        return SHOPS.filter((shop) => {
            return (
                shop.name.toLowerCase().includes(lowerQ) ||
                shop.slug.toLowerCase().includes(lowerQ) ||
                shop.districtLabel.toLowerCase().includes(lowerQ)
            );
        });
    }, [query]);

    const copyLink = (e: React.MouseEvent, slug: string) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/${slug}`;
        navigator.clipboard.writeText(url).then(() => {
            alert(`Lien copié : ${url}`);
        });
    };

    const copySlug = (e: React.MouseEvent, slug: string) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(slug).then(() => {
            alert(`Slug copié : ${slug}`);
        });
    }

    return (
        <div className="min-h-screen bg-brand-paper text-[#111827] p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header & Search */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                            <Image src="/logo-hey.png" alt="Heynouth" fill className="object-contain" />
                        </div>
                        <h1 className={`${ubuntu.className} text-3xl font-bold tracking-tight text-[#2F6B2B]`}>Heynouth</h1>
                    </div>

                    <div className="relative w-full max-w-md group">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2F6B2B] transition-colors">
                            <QuickIconSearch className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Rechercher un commerce..."
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-gray-200 outline-none focus:border-[#2F6B2B] focus:ring-1 focus:ring-[#2F6B2B] shadow-sm transition-all"
                        />
                    </div>
                </div>

                {/* Counter */}
                <div className="text-sm text-gray-500 font-medium">
                    {filteredShops.length} commerce{filteredShops.length > 1 ? "s" : ""}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredShops.map((shop) => {
                        const open = isShopOpen(shop.hours, shop.timezone);
                        const hoursText = formatTodayHoursLabel(shop.hours, shop.timezone);
                        const statusLabel = open ? "OUVERT" : "FERMÉ";
                        const statusColor = open ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";

                        return (
                            <div
                                key={shop.slug}
                                className="group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                            >
                                {/* Clickable Area Overlay */}
                                <Link href={`/${shop.slug}`} className="absolute inset-0 z-0" />

                                {/* Cover Image */}
                                <div className="relative h-48 w-full bg-gray-100">
                                    <Image
                                        src={shop.mapImage}
                                        alt={shop.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm ${statusColor}`}>
                                            {statusLabel}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex-1 flex flex-col gap-3 z-10 pointer-events-none">
                                    {/* Pointer events none on content wrapper to let click pass through, buttons will need pointer-events-auto */}

                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 leading-tight mb-1">{shop.name}</h2>
                                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                                <MapPinIcon className="w-3 h-3" />
                                                {shop.districtLabel}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-2 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 font-medium">
                                        <span>{hoursText}</span>
                                    </div>
                                </div>

                                {/* Actions Footer */}
                                <div className="p-4 pt-0 z-20 flex gap-2">
                                    <Link
                                        href={`/${shop.slug}`}
                                        className="flex-1 bg-[#2F6B2B] hover:bg-[#245421] text-white py-2.5 rounded-xl text-sm font-semibold text-center transition-colors flex items-center justify-center gap-2"
                                    >
                                        <span>Ouvrir</span>
                                        <ArrowUpRightIcon className="w-4 h-4" />
                                    </Link>

                                    <button
                                        onClick={(e) => copyLink(e, shop.slug)}
                                        className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors flex items-center justify-center"
                                        title="Copier le lien"
                                    >
                                        <LinkIcon className="w-4 h-4" />
                                    </button>

                                    <button
                                        onClick={(e) => copySlug(e, shop.slug)}
                                        className="px-3 bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 rounded-xl transition-colors flex items-center justify-center border border-dashed border-gray-200"
                                        title="Copier le slug"
                                    >
                                        <span className="text-[10px] font-mono">ID</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// Simple Icons to avoid external deps issues if Lucide isn't installed
function MapPinIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
    );
}

function LinkIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
}
