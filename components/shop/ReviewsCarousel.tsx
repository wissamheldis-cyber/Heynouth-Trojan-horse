"use client";

import { useState, useRef } from "react";

interface Review {
    author: string;
    rating: number;
    text: string;
    time: string;
}

// Inline Star Component to avoid external dependency issues
function StarIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

export default function ReviewsCarousel({ reviews, mapsUrl }: { reviews: Review[], mapsUrl?: string }) {
    if (!reviews || reviews.length === 0) return null;

    return (
        <section className="mt-8 mb-safe">
            <div className="px-6 mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-brand-ink">Avis Clients</h3>
                <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400 stroke-none" />
                    <span className="text-sm font-bold text-brand-ink">4.8</span>
                    <span className="text-xs text-gray-400">({reviews.length})</span>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="flex overflow-x-auto gap-4 px-6 pb-4 snap-x snap-mandatory no-scrollbar">
                {reviews.map((review, i) => (
                    <div key={i} className="min-w-[280px] bg-white border border-gray-100 rounded-2xl p-5 shadow-sm snap-center flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-bold text-brand-ink truncate max-w-[120px]">{review.author}</span>
                                <span className="text-[10px] text-gray-400">{review.time}</span>
                            </div>

                            <div className="flex gap-0.5 mb-3">
                                {[...Array(5)].map((_, starIndex) => (
                                    <StarIcon
                                        key={starIndex}
                                        className={`w-3.5 h-3.5 stroke-none ${starIndex < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                                "{review.text}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Rate Us Button */}
            {mapsUrl && (
                <div className="px-6 mt-4">
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gray-50 border border-gray-200 rounded-xl text-brand-ink font-bold hover:bg-gray-100 transition-colors"
                    >
                        <StarIcon className="w-5 h-5 text-brand-ink fill-current stroke-none" />
                        Noter ce commerce
                    </a>
                </div>
            )}
        </section>
    );
}
