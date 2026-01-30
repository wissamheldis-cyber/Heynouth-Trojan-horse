"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NouthVariant = 'welcome' | 'hub' | 'pro' | 'merchant' | 'clients' | 'stats' | 'settings' | 'custom';

interface NouthJourneyProps {
    isVisible: boolean;
    onContinue: () => void;
    variant: NouthVariant;
    customText?: string;
    customTitle?: string;
}

const VARIANTS = {
    welcome: {
        image: "/images/nouth-welcome.png",
        title: "Bienvenue sur Heynouth !",
        text: "Je suis Nouth, ton guide local. Je te connecte en direct avec tes commerçants préférés pour ne rater aucune pépite du quartier !",
    },
    hub: {
        image: "/images/nouth-pointing.png",
        title: "Le Hub Heynouth",
        text: "Ici, tu trouveras tous les commerces de ton quartier. Utilise les filtres pour affiner ta recherche !",
    },
    pro: {
        image: "/images/nouth-confiant.png",
        title: "Espace Pro",
        text: "Gère ton activité, tes offres et tes clients en un clin d'œil depuis ton tableau de bord.",
    },
    merchant: {
        image: "/images/nouth-hello-or-bye.png",
        title: "Découverte",
        text: "Tu entres dans l'univers d'un commerçant partenaire. Jette un œil à ses offres du moment !",
    },
    clients: {
        image: "/images/nouth-pointing.png",
        title: "Vos Clients",
        text: "Gérez votre base client, envoyez des SMS et fidélisez votre communauté.",
    },
    stats: {
        image: "/images/nouth-confiant.png",
        title: "Analyses",
        text: "Suivez vos performances en temps réel : vues, clics et interactions.",
    },
    settings: {
        image: "/images/nouth-welcome.png",
        title: "Réglages",
        text: "Configurez votre boutique, vos horaires et vos informations essentielles.",
    },
    custom: {
        image: "/images/nouth-welcome.png",
        title: "Heynouth",
        text: "...",
    }
};

export default function NouthJourney({ isVisible, onContinue, variant, customText, customTitle }: NouthJourneyProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShow(true);
        } else {
            const timer = setTimeout(() => setShow(false), 500); // Wait for exit animation
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!show) return null;

    const content = VARIANTS[variant] || VARIANTS.welcome;
    const title = customTitle || content.title;
    const text = customText || content.text;
    const imageSrc = content.image;

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-500 ${isVisible ? "bg-black/60 backdrop-blur-xl opacity-100" : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
                }`}
        >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-orange-600/10 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} />

            <div className={`relative flex flex-col items-center max-w-[320px] text-center transition-all duration-700 transform ${isVisible ? "translate-y-0 scale-100" : "translate-y-10 scale-95"}`}>

                {/* Nouth Iamge */}
                <div className="relative w-64 h-64 mb-6 drop-shadow-2xl filter">
                    <Image
                        src={imageSrc}
                        alt="Nouth"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Glass Card */}
                <div className="bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md rounded-3xl p-6 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                    <h2 className="text-2xl font-black text-white mb-2 relative z-10">{title}</h2>
                    <p className="text-sm font-medium text-gray-200 mb-6 leading-relaxed relative z-10">
                        {text}
                    </p>

                    <button
                        onClick={onContinue}
                        className="w-full bg-white text-black font-bold py-3.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10"
                    >
                        Continuer
                    </button>
                </div>

            </div>
        </div>
    );
}
