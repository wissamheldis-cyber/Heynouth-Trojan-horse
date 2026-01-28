"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import QRCode from "react-qr-code";

interface QrButtonProps {
    slug: string;
    name: string;
}

export default function QrButton({ slug, name }: QrButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (typeof window !== "undefined") {
            setUrl(`${window.location.origin}/${slug}`);
        }
    }, [slug]);

    const copyUrl = () => {
        navigator.clipboard.writeText(url).then(() => {
            alert("Lien copié !");
        });
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(true);
                }}
                className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors flex items-center justify-center font-bold text-xs"
                title="Afficher le QR Code"
            >
                QR
            </button>

            {isOpen && mounted && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 print-portal"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                    }}
                >
                    <div
                        className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative animate-in fade-in zoom-in duration-200 print:shadow-none print:w-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors print:hidden"
                        >
                            ✕
                        </button>

                        <div className="text-center space-y-6">
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-1">{name}</h3>
                                <p className="text-sm text-gray-500 break-all">{url}</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border-2 border-gray-100 inline-block print:border-0">
                                <QRCode
                                    value={url}
                                    size={220}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    viewBox={`0 0 256 256`}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3 print:hidden">
                                <button
                                    onClick={copyUrl}
                                    className="py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-semibold text-sm transition-colors"
                                >
                                    Copier le lien
                                </button>
                                <button
                                    onClick={handlePrint}
                                    className="py-2.5 px-4 bg-[#2F6B2B] hover:bg-[#245421] text-white rounded-xl font-semibold text-sm transition-colors"
                                >
                                    Imprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
