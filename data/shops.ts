import { WeekHours } from "@/lib/shopHours";

export type Shop = {
    slug: string;
    name: string;
    districtLabel: string; // "PARIS XX"
    statusLabel?: string;  // @deprecated - Calculated dynamically
    hoursLabel?: string;   // @deprecated - Calculated dynamically

    // New fields for dynamic status
    timezone: string;
    hours: WeekHours;

    mapImage: string;      // /shops/<slug>/map.jpg
    mapsUrl?: string;      // Optional Google Maps URL

    contact: {
        phoneE164: string;   // "+33695842569"
        phoneDisplay: string;// "06 95 84 25 69"
        email: string;
    };

    dailyOffer: {
        title: string;       // "Nom du produit"
        price: string;       // "4,99 €"
        oldPrice?: string;   // "7,99 €"
        image: string;       // /shops/<slug>/offer.jpg
        protocolHref?: string; // "#reservation" ou "/protocole"
    };

    products: Array<{
        id: string;
        title: string;
        price: string;
        image: string;
    }>;

    about: {
        p1: string;
        p2: string;
        images: string[]; // 1 à 6 images
    };
};

export const SHOPS: Shop[] = [

    {
        slug: "sairam-paris04",
        name: "SAIRAM",
        districtLabel: "PARIS 04",
        statusLabel: "OUVERT",
        hoursLabel: "10:00 — 02:00",

        timezone: "Europe/Paris",
        hours: {
            mon: [["10:00", "02:00"]],
            tue: [["10:00", "02:00"]],
            wed: [["10:00", "02:00"]],
            thu: [["10:00", "02:00"]],
            fri: [["10:00", "04:00"]],
            sat: [["10:00", "04:00"]],
            sun: [["12:00", "02:00"]],
        },

        mapImage: "/shops/generic/map.png",
        mapsUrl: "https://www.google.fr/maps/place/Bill's+Burger+Chatelet/@48.8597703,2.3461398,19z/data=!4m9!1m2!10m1!1e1!3m5!1s0x47e66f001250df6d:0x4cbbed7619ea4303!8m2!3d48.8599556!4d2.3467894!16s%2Fg%2F11w2mk38ps?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D",

        contact: {
            phoneE164: "+33695842569",
            phoneDisplay: "06 95 84 25 69",
            email: "nomducommerce@hey.com",
        },
        dailyOffer: {
            title: "Nom du produit",
            price: "4,99 €",
            oldPrice: "7,99 €",
            image: "/shops/generic/offer.png",
            protocolHref: "#reservation",
        },
        products: [
            { id: "p1", title: "Nom du produit", price: "7,99 €", image: "/shops/generic/p1.png" },
            { id: "p2", title: "Snack box", price: "5,50 €", image: "/shops/generic/p2.png" },
            { id: "p3", title: "Panier frais", price: "12,00 €", image: "/shops/generic/p3.png" },
        ],
        about: {
            p1: "Bienvenue chez Sairam, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien : boissons, snacks, produits frais et basiques, avec une sélection qui bouge selon les arrivages.",
            p2: "Notre principe est simple : du service humain et du temps gagné. Vous appelez, vous réservez ce qu’il vous faut, vous passez à l’heure qui vous arrange — on prépare et on met de côté selon le stock.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },

    // Generated Hanout Shops 1-120
    ...Array.from({ length: 120 }).map((_, i) => ({
        slug: `hanout${i + 1}-paris04`,
        name: `Hanout ${i + 1}`,
        districtLabel: "PARIS 04",
        statusLabel: "OUVERT",
        hoursLabel: "10:00 — 02:00",
        timezone: "Europe/Paris",
        hours: {
            mon: [["10:00", "02:00"]],
            tue: [["10:00", "02:00"]],
            wed: [["10:00", "02:00"]],
            thu: [["10:00", "02:00"]],
            fri: [["10:00", "04:00"]],
            sat: [["10:00", "04:00"]],
            sun: [["12:00", "02:00"]],
        },
        mapImage: "/shops/generic/map.png",
        mapsUrl: "https://www.google.fr/maps/place/Bill's+Burger+Chatelet/@48.8597703,2.3461398,19z/data=!4m9!1m2!10m1!1e1!3m5!1s0x47e66f001250df6d:0x4cbbed7619ea4303!8m2!3d48.8599556!4d2.3467894!16s%2Fg%2F11w2mk38ps?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D",
        contact: {
            phoneE164: "+33695842569",
            phoneDisplay: "06 95 84 25 69",
            email: "nomducommerce@hey.com",
        },
        dailyOffer: {
            title: "Nom du produit",
            price: "4,99 €",
            oldPrice: "7,99 €",
            image: "/shops/generic/offer.png",
            protocolHref: "#reservation",
        },
        products: [
            { id: "p1", title: "Nom du produit", price: "7,99 €", image: "/shops/generic/p1.png" },
            { id: "p2", title: "Snack box", price: "5,50 €", image: "/shops/generic/p2.png" },
            { id: "p3", title: "Panier frais", price: "12,00 €", image: "/shops/generic/p3.png" },
        ],
        about: {
            p1: "Bienvenue chez Hanout, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    })),
];

export const getShop = (slug: string) => SHOPS.find((s) => s.slug === slug);
export const getShopSlugs = () => SHOPS.map((s) => s.slug);
