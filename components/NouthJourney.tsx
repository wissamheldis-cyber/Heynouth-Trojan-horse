"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NouthVariant = 'welcome' | 'hub' | 'pro' | 'merchant' | 'clients' | 'stats' | 'settings' | 'custom' | 'launch_offer' | 'launch_offer_pro' | 'launch_offer_app';

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
    },
    launch_offer: {
        image: "/images/nouth-confiant.png",
        title: "Offre de Lancement",
        text: "Profitez-en maintenant !",
        bullets: [
            "2 mises à jour / semaine",
            "Toutes les futures sorties incluses",
            "Support prioritaire"
        ]
    },
    launch_offer_pro: {
        image: "/images/nouth-confiant.png",
        title: "Boostez votre Gestion",
        text: "Passez au niveau supérieur avec Heynouth Pro.",
        bullets: [
            "Tableau de bord complet",
            "Gestion client illimitée",
            "Statistiques détaillées"
        ]
    },
    launch_offer_app: {
        image: "/images/nouth-confiant.png",
        title: "Visibilité Maximale",
        text: "Attirez plus de clients avec votre présence sur l'App.",
        bullets: [
            "Mise en avant sur le Hub",
            "Profil vérifié & photos HD",
            "Lien direct vers vos offres"
        ]
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
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />

                    <h2 className={`text-2xl font-black text-white mb-2 relative z-10 ${variant.includes('launch_offer') ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500' : ''}`}>
                        {title}
                    </h2>

                    {variant.includes('launch_offer') ? (
                        <div className="text-left relative z-10 space-y-4 my-4">
                            <div className="flex items-end gap-2 justify-center border-b border-white/10 pb-4">
                                <span className="text-4xl font-black text-white">50€</span>
                                <span className="text-sm font-bold text-gray-400 mb-1">/ an</span>
                            </div>

                            <ul className="space-y-2">
                                {(content as any).bullets?.map((bullet: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
                                        <div className="mt-0.5 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        </div>
                                        <span className="font-bold">{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <button onClick={() => window.open('https://buy.stripe.com/fZubIU51g6j61hBbGI3sI0d', '_blank')} className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-95 transition-all mt-2">
                                J'en profite
                            </button>
                            <button onClick={onContinue} className="w-full text-xs font-bold text-gray-400 hover:text-white mt-1">
                                Non merci, je préfère payer plus tard
                            </button>
                        </div>
                    ) : (
                        <>
                            <p className="text-sm font-medium text-gray-200 mb-6 leading-relaxed relative z-10">
                                {text}
                            </p>

                            <button
                                onClick={onContinue}
                                className="w-full bg-white text-black font-bold py-3.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10"
                            >
                                Continuer
                            </button>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}
