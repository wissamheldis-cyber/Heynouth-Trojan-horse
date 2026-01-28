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
    const [selectedDistrict, setSelectedDistrict] = useState("all");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Extract unique districts
    const districts = useMemo(() => {
        const unique = new Set(SHOPS.map(s => s.districtLabel));
        return Array.from(unique).sort();
    }, []);

    const filteredShops = useMemo(() => {
        const lowerQ = query.toLowerCase();
        return SHOPS.filter((shop) => {
            const matchesQuery = (
                shop.name.toLowerCase().includes(lowerQ) ||
                shop.slug.toLowerCase().includes(lowerQ) ||
                shop.districtLabel.toLowerCase().includes(lowerQ)
            );

            const matchesDistrict = selectedDistrict === "all" || shop.districtLabel === selectedDistrict;

            return matchesQuery && matchesDistrict;
        });
    }, [query, selectedDistrict]);

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
        <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F4F2EC] px-4 py-10 md:py-8 font-sans">
            {/* Desktop Background Shell */}
            <div className="pointer-events-none fixed inset-0 z-0 hidden md:block">
                {/* Left Green Gradient */}
                <div className="absolute -left-[10%] top-[-10%] h-[90vh] w-[50vw] rounded-full bg-brand-green/20 blur-[120px] mix-blend-multiply" />

                {/* Right Yellow Gradient */}
                <div className="absolute -right-[10%] bottom-[-10%] h-[90vh] w-[50vw] rounded-full bg-brand-yellow/30 blur-[120px] mix-blend-multiply" />

                {/* Global White Veil */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto space-y-8">

                {/* Header & Search */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                            <Image src="/logo-hey.png" alt="Heynouth" fill className="object-contain" />
                        </div>
                        <h1 className={`${ubuntu.className} text-3xl font-bold tracking-tight text-[#2F6B2B]`}>Heynouth</h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
                        {/* District Dropdown (Custom) */}
                        <div className="relative min-w-[200px] z-50">
                            {/* Toggle Button */}
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                                className="relative w-full text-left pl-5 pr-12 py-3.5 rounded-2xl bg-white/70 backdrop-blur-2xl border border-white/80 outline-none focus:border-[#2F6B2B]/50 focus:ring-4 focus:ring-[#2F6B2B]/10 shadow-lg hover:shadow-xl transition-all text-gray-800 font-medium tracking-wide flex items-center justify-between group"
                            >
                                {/* Glow Effect Backend for Button */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2F6B2B]/30 to-[#F2C94C]/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 -z-10" />

                                <span className="truncate relative z-10">{selectedDistrict === "all" ? "Tout Paris" : selectedDistrict}</span>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-[#2F6B2B] transition-colors duration-300 z-10">
                                    <svg className={`w-5 h-5 drop-shadow-sm transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </button>

                            {/* Custom Options List */}
                            <div
                                className={`absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top transform ${isDropdownOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}`}
                            >
                                {/* Gradient Background for List */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2F6B2B]/5 to-[#F2C94C]/10 mix-blend-overlay pointer-events-none" />

                                <div className="relative max-h-[300px] overflow-y-auto pr-1">
                                    <button
                                        onClick={() => { setSelectedDistrict("all"); setIsDropdownOpen(false); }}
                                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${selectedDistrict === "all" ? "bg-[#2F6B2B] text-white shadow-md" : "text-gray-700 hover:bg-white/80 hover:text-[#2F6B2B]"}`}
                                    >
                                        Tout Paris
                                    </button>
                                    {districts.map(d => (
                                        <button
                                            key={d}
                                            onClick={() => { setSelectedDistrict(d); setIsDropdownOpen(false); }}
                                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors mt-1 ${selectedDistrict === d ? "bg-[#2F6B2B] text-white shadow-md" : "text-gray-700 hover:bg-white/80 hover:text-[#2F6B2B]"}`}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full group">
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
        </main>
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
