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

        {
        slug: "hanout1-paris04",
        name: "Hanout 1",
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
    },
    {
        slug: "hanout2-paris04",
        name: "Hanout 2",
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
    },
    {
        slug: "hanout3-paris04",
        name: "Hanout 3",
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
    },
    {
        slug: "hanout4-paris04",
        name: "Hanout 4",
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
    },
    {
        slug: "hanout5-paris04",
        name: "Hanout 5",
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
    },
    {
        slug: "hanout6-paris04",
        name: "Hanout 6",
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
    },
    {
        slug: "hanout7-paris04",
        name: "Hanout 7",
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
    },
    {
        slug: "hanout8-paris04",
        name: "Hanout 8",
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
    },
    {
        slug: "hanout9-paris04",
        name: "Hanout 9",
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
    },
    {
        slug: "hanout10-paris04",
        name: "Hanout 10",
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
    },
    {
        slug: "hanout11-paris04",
        name: "Hanout 11",
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
    },
    {
        slug: "hanout12-paris04",
        name: "Hanout 12",
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
    },
    {
        slug: "hanout13-paris04",
        name: "Hanout 13",
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
    },
    {
        slug: "hanout14-paris04",
        name: "Hanout 14",
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
    },
    {
        slug: "hanout15-paris04",
        name: "Hanout 15",
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
    },
    {
        slug: "hanout16-paris04",
        name: "Hanout 16",
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
    },
    {
        slug: "hanout17-paris04",
        name: "Hanout 17",
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
    },
    {
        slug: "hanout18-paris04",
        name: "Hanout 18",
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
    },
    {
        slug: "hanout19-paris04",
        name: "Hanout 19",
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
    },
    {
        slug: "hanout20-paris04",
        name: "Hanout 20",
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
    },
    {
        slug: "hanout21-paris04",
        name: "Hanout 21",
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
    },
    {
        slug: "hanout22-paris04",
        name: "Hanout 22",
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
    },
    {
        slug: "hanout23-paris04",
        name: "Hanout 23",
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
    },
    {
        slug: "hanout24-paris04",
        name: "Hanout 24",
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
    },
    {
        slug: "hanout25-paris04",
        name: "Hanout 25",
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
    },
    {
        slug: "hanout26-paris04",
        name: "Hanout 26",
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
    },
    {
        slug: "hanout27-paris04",
        name: "Hanout 27",
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
    },
    {
        slug: "hanout28-paris04",
        name: "Hanout 28",
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
    },
    {
        slug: "hanout29-paris04",
        name: "Hanout 29",
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
    },
    {
        slug: "hanout30-paris04",
        name: "Hanout 30",
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
    },
    {
        slug: "hanout31-paris04",
        name: "Hanout 31",
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
    },
    {
        slug: "hanout32-paris04",
        name: "Hanout 32",
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
    },
    {
        slug: "hanout33-paris04",
        name: "Hanout 33",
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
    },
    {
        slug: "hanout34-paris04",
        name: "Hanout 34",
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
    },
    {
        slug: "hanout35-paris04",
        name: "Hanout 35",
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
    },
    {
        slug: "hanout36-paris04",
        name: "Hanout 36",
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
    },
    {
        slug: "hanout37-paris04",
        name: "Hanout 37",
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
    },
    {
        slug: "hanout38-paris04",
        name: "Hanout 38",
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
    },
    {
        slug: "hanout39-paris04",
        name: "Hanout 39",
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
    },
    {
        slug: "hanout40-paris04",
        name: "Hanout 40",
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
    },
    {
        slug: "hanout41-paris04",
        name: "Hanout 41",
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
    },
    {
        slug: "hanout42-paris04",
        name: "Hanout 42",
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
    },
    {
        slug: "hanout43-paris04",
        name: "Hanout 43",
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
    },
    {
        slug: "hanout44-paris04",
        name: "Hanout 44",
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
    },
    {
        slug: "hanout45-paris04",
        name: "Hanout 45",
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
    },
    {
        slug: "hanout46-paris04",
        name: "Hanout 46",
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
    },
    {
        slug: "hanout47-paris04",
        name: "Hanout 47",
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
    },
    {
        slug: "hanout48-paris04",
        name: "Hanout 48",
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
    },
    {
        slug: "hanout49-paris04",
        name: "Hanout 49",
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
    },
    {
        slug: "hanout50-paris04",
        name: "Hanout 50",
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
    },
    {
        slug: "hanout51-paris04",
        name: "Hanout 51",
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
    },
    {
        slug: "hanout52-paris04",
        name: "Hanout 52",
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
    },
    {
        slug: "hanout53-paris04",
        name: "Hanout 53",
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
    },
    {
        slug: "hanout54-paris04",
        name: "Hanout 54",
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
    },
    {
        slug: "hanout55-paris04",
        name: "Hanout 55",
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
    },
    {
        slug: "hanout56-paris04",
        name: "Hanout 56",
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
    },
    {
        slug: "hanout57-paris04",
        name: "Hanout 57",
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
    },
    {
        slug: "hanout58-paris04",
        name: "Hanout 58",
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
    },
    {
        slug: "hanout59-paris04",
        name: "Hanout 59",
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
    },
    {
        slug: "hanout60-paris04",
        name: "Hanout 60",
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
    },
    {
        slug: "hanout61-paris04",
        name: "Hanout 61",
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
    },
    {
        slug: "hanout62-paris04",
        name: "Hanout 62",
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
    },
    {
        slug: "hanout63-paris04",
        name: "Hanout 63",
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
    },
    {
        slug: "hanout64-paris04",
        name: "Hanout 64",
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
    },
    {
        slug: "hanout65-paris04",
        name: "Hanout 65",
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
    },
    {
        slug: "hanout66-paris04",
        name: "Hanout 66",
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
    },
    {
        slug: "hanout67-paris04",
        name: "Hanout 67",
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
    },
    {
        slug: "hanout68-paris04",
        name: "Hanout 68",
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
    },
    {
        slug: "hanout69-paris04",
        name: "Hanout 69",
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
    },
    {
        slug: "hanout70-paris04",
        name: "Hanout 70",
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
    },
    {
        slug: "hanout71-paris04",
        name: "Hanout 71",
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
    },
    {
        slug: "hanout72-paris04",
        name: "Hanout 72",
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
    },
    {
        slug: "hanout73-paris04",
        name: "Hanout 73",
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
    },
    {
        slug: "hanout74-paris04",
        name: "Hanout 74",
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
    },
    {
        slug: "hanout75-paris04",
        name: "Hanout 75",
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
    },
    {
        slug: "hanout76-paris04",
        name: "Hanout 76",
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
    },
    {
        slug: "hanout77-paris04",
        name: "Hanout 77",
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
    },
    {
        slug: "hanout78-paris04",
        name: "Hanout 78",
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
    },
    {
        slug: "hanout79-paris04",
        name: "Hanout 79",
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
    },
    {
        slug: "hanout80-paris04",
        name: "Hanout 80",
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
    },
    {
        slug: "hanout81-paris04",
        name: "Hanout 81",
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
    },
    {
        slug: "hanout82-paris04",
        name: "Hanout 82",
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
    },
    {
        slug: "hanout83-paris04",
        name: "Hanout 83",
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
    },
    {
        slug: "hanout84-paris04",
        name: "Hanout 84",
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
    },
    {
        slug: "hanout85-paris04",
        name: "Hanout 85",
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
    },
    {
        slug: "hanout86-paris04",
        name: "Hanout 86",
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
    },
    {
        slug: "hanout87-paris04",
        name: "Hanout 87",
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
    },
    {
        slug: "hanout88-paris04",
        name: "Hanout 88",
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
    },
    {
        slug: "hanout89-paris04",
        name: "Hanout 89",
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
    },
    {
        slug: "hanout90-paris04",
        name: "Hanout 90",
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
    },
    {
        slug: "hanout91-paris04",
        name: "Hanout 91",
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
    },
    {
        slug: "hanout92-paris04",
        name: "Hanout 92",
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
    },
    {
        slug: "hanout93-paris04",
        name: "Hanout 93",
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
    },
    {
        slug: "hanout94-paris04",
        name: "Hanout 94",
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
    },
    {
        slug: "hanout95-paris04",
        name: "Hanout 95",
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
    },
    {
        slug: "hanout96-paris04",
        name: "Hanout 96",
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
    },
    {
        slug: "hanout97-paris04",
        name: "Hanout 97",
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
    },
    {
        slug: "hanout98-paris04",
        name: "Hanout 98",
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
    },
    {
        slug: "hanout99-paris04",
        name: "Hanout 99",
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
    },
    {
        slug: "hanout100-paris04",
        name: "Hanout 100",
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
    },
    {
        slug: "hanout101-paris04",
        name: "Hanout 101",
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
    },
    {
        slug: "hanout102-paris04",
        name: "Hanout 102",
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
    },
    {
        slug: "hanout103-paris04",
        name: "Hanout 103",
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
    },
    {
        slug: "hanout104-paris04",
        name: "Hanout 104",
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
    },
    {
        slug: "hanout105-paris04",
        name: "Hanout 105",
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
    },
    {
        slug: "hanout106-paris04",
        name: "Hanout 106",
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
    },
    {
        slug: "hanout107-paris04",
        name: "Hanout 107",
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
    },
    {
        slug: "hanout108-paris04",
        name: "Hanout 108",
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
    },
    {
        slug: "hanout109-paris04",
        name: "Hanout 109",
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
    },
    {
        slug: "hanout110-paris04",
        name: "Hanout 110",
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
    },
    {
        slug: "hanout111-paris04",
        name: "Hanout 111",
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
    },
    {
        slug: "hanout112-paris04",
        name: "Hanout 112",
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
    },
    {
        slug: "hanout113-paris04",
        name: "Hanout 113",
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
    },
    {
        slug: "hanout114-paris04",
        name: "Hanout 114",
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
    },
    {
        slug: "hanout115-paris04",
        name: "Hanout 115",
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
    },
    {
        slug: "hanout116-paris04",
        name: "Hanout 116",
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
    },
    {
        slug: "hanout117-paris04",
        name: "Hanout 117",
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
    },
    {
        slug: "hanout118-paris04",
        name: "Hanout 118",
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
    },
    {
        slug: "hanout119-paris04",
        name: "Hanout 119",
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
    },
    {
        slug: "hanout120-paris04",
        name: "Hanout 120",
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
    },
];

export const getShop = (slug: string) => SHOPS.find((s) => s.slug === slug);
export const getShopSlugs = () => SHOPS.map((s) => s.slug);
