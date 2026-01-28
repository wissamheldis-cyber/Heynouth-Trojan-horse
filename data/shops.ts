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
        slug: "demo-epicerie",
        name: "Nom du commerce",
        districtLabel: "PARIS XX",
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
            { id: "p3", title: "Panier frais", price: "12,00 €", image: "/shops/dgeneric/p3.png" },
        ],
        about: {
            p1: "Bienvenue chez [Nom du commerce], votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien : boissons, snacks, produits frais et basiques, avec une sélection qui bouge selon les arrivages.",
            p2: "Notre principe est simple : du service humain et du temps gagné. Vous appelez, vous réservez ce qu’il vous faut, vous passez à l’heure qui vous arrange — on prépare et on met de côté selon le stock.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "boulangerie-test",
        name: "Boulangerie Test",
        districtLabel: "PARIS XI",
        statusLabel: "OUVERT",
        hoursLabel: "07:00 — 20:00",

        timezone: "Europe/Paris",
        hours: {
            mon: [["07:00", "20:00"]],
            tue: [["07:00", "20:00"]],
            wed: [["07:00", "20:00"]],
            thu: [["07:00", "20:00"]],
            fri: [["07:00", "20:00"]],
            sat: [["08:00", "20:00"]],
            sun: [["08:00", "13:00"]],
        },

        mapImage: "/shops/boulangerie-test/map.jpg", // Reusing assets for test
        mapsUrl: "https://www.google.fr/maps/place/Bill's+Burger+Chatelet/@48.8597703,2.3461398,19z/data=!4m9!1m2!10m1!1e1!3m5!1s0x47e66f001250df6d:0x4cbbed7619ea4303!8m2!3d48.8599556!4d2.3467894!16s%2Fg%2F11w2mk38ps?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D",

        contact: {
            phoneE164: "+33123456789",
            phoneDisplay: "01 23 45 67 89",
            email: "contact@boulangerie.com",
        },
        dailyOffer: {
            title: "Croissant au beurre",
            price: "1,20 €",
            oldPrice: "1,50 €",
            image: "/shops/boulangerie-test/offer.png",
            protocolHref: "#reservation",
        },
        products: [
            { id: "p1", title: "Baguette Tradition", price: "1,30 €", image: "/shops/boulangerie-test/p1.png" },
            { id: "p2", title: "Pain au chocolat", price: "1,40 €", image: "/shops/boulangerie-test/p2.png" },
            { id: "p3", title: "Formule Midi", price: "8,50 €", image: "/shops/boulangerie-test/p3.png" },
        ],
        about: {
            p1: "Votre boulangerie artisanale au cœur du 11ème.",
            p2: "Des produits frais, faits maison chaque matin.",
            images: [
                "/shops/boulangerie-test/a1.png",
                "/shops/boulangerie-test/a2.png",
                "/shops/boulangerie-test/a3.png",
            ],
        },
    },
];

export const getShop = (slug: string) => SHOPS.find((s) => s.slug === slug);
export const getShopSlugs = () => SHOPS.map((s) => s.slug);
