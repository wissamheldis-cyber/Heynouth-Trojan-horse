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
        slug: "heynouth1-paris04",
        name: "Heynouth 1",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth2-paris04",
        name: "Heynouth 2",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth3-paris04",
        name: "Heynouth 3",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth4-paris04",
        name: "Heynouth 4",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth5-paris04",
        name: "Heynouth 5",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth6-paris04",
        name: "Heynouth 6",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth7-paris04",
        name: "Heynouth 7",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth8-paris04",
        name: "Heynouth 8",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth9-paris04",
        name: "Heynouth 9",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth10-paris04",
        name: "Heynouth 10",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth11-paris04",
        name: "Heynouth 11",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth12-paris04",
        name: "Heynouth 12",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth13-paris04",
        name: "Heynouth 13",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth14-paris04",
        name: "Heynouth 14",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth15-paris04",
        name: "Heynouth 15",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth16-paris04",
        name: "Heynouth 16",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth17-paris04",
        name: "Heynouth 17",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth18-paris04",
        name: "Heynouth 18",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth19-paris04",
        name: "Heynouth 19",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth20-paris04",
        name: "Heynouth 20",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth21-paris04",
        name: "Heynouth 21",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth22-paris04",
        name: "Heynouth 22",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth23-paris04",
        name: "Heynouth 23",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth24-paris04",
        name: "Heynouth 24",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth25-paris04",
        name: "Heynouth 25",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth26-paris04",
        name: "Heynouth 26",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth27-paris04",
        name: "Heynouth 27",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth28-paris04",
        name: "Heynouth 28",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth29-paris04",
        name: "Heynouth 29",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth30-paris04",
        name: "Heynouth 30",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth31-paris04",
        name: "Heynouth 31",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth32-paris04",
        name: "Heynouth 32",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth33-paris04",
        name: "Heynouth 33",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth34-paris04",
        name: "Heynouth 34",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth35-paris04",
        name: "Heynouth 35",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth36-paris04",
        name: "Heynouth 36",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth37-paris04",
        name: "Heynouth 37",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth38-paris04",
        name: "Heynouth 38",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth39-paris04",
        name: "Heynouth 39",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth40-paris04",
        name: "Heynouth 40",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth41-paris04",
        name: "Heynouth 41",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth42-paris04",
        name: "Heynouth 42",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth43-paris04",
        name: "Heynouth 43",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth44-paris04",
        name: "Heynouth 44",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth45-paris04",
        name: "Heynouth 45",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth46-paris04",
        name: "Heynouth 46",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth47-paris04",
        name: "Heynouth 47",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth48-paris04",
        name: "Heynouth 48",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth49-paris04",
        name: "Heynouth 49",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth50-paris04",
        name: "Heynouth 50",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth51-paris04",
        name: "Heynouth 51",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth52-paris04",
        name: "Heynouth 52",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth53-paris04",
        name: "Heynouth 53",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth54-paris04",
        name: "Heynouth 54",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth55-paris04",
        name: "Heynouth 55",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth56-paris04",
        name: "Heynouth 56",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth57-paris04",
        name: "Heynouth 57",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth58-paris04",
        name: "Heynouth 58",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth59-paris04",
        name: "Heynouth 59",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth60-paris04",
        name: "Heynouth 60",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth61-paris04",
        name: "Heynouth 61",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth62-paris04",
        name: "Heynouth 62",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth63-paris04",
        name: "Heynouth 63",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth64-paris04",
        name: "Heynouth 64",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth65-paris04",
        name: "Heynouth 65",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth66-paris04",
        name: "Heynouth 66",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth67-paris04",
        name: "Heynouth 67",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth68-paris04",
        name: "Heynouth 68",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth69-paris04",
        name: "Heynouth 69",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth70-paris04",
        name: "Heynouth 70",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth71-paris04",
        name: "Heynouth 71",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth72-paris04",
        name: "Heynouth 72",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth73-paris04",
        name: "Heynouth 73",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth74-paris04",
        name: "Heynouth 74",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth75-paris04",
        name: "Heynouth 75",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth76-paris04",
        name: "Heynouth 76",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth77-paris04",
        name: "Heynouth 77",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth78-paris04",
        name: "Heynouth 78",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth79-paris04",
        name: "Heynouth 79",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth80-paris04",
        name: "Heynouth 80",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth81-paris04",
        name: "Heynouth 81",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth82-paris04",
        name: "Heynouth 82",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth83-paris04",
        name: "Heynouth 83",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth84-paris04",
        name: "Heynouth 84",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth85-paris04",
        name: "Heynouth 85",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth86-paris04",
        name: "Heynouth 86",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth87-paris04",
        name: "Heynouth 87",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth88-paris04",
        name: "Heynouth 88",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth89-paris04",
        name: "Heynouth 89",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth90-paris04",
        name: "Heynouth 90",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth91-paris04",
        name: "Heynouth 91",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth92-paris04",
        name: "Heynouth 92",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth93-paris04",
        name: "Heynouth 93",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth94-paris04",
        name: "Heynouth 94",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth95-paris04",
        name: "Heynouth 95",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth96-paris04",
        name: "Heynouth 96",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth97-paris04",
        name: "Heynouth 97",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth98-paris04",
        name: "Heynouth 98",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth99-paris04",
        name: "Heynouth 99",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth100-paris04",
        name: "Heynouth 100",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth101-paris04",
        name: "Heynouth 101",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth102-paris04",
        name: "Heynouth 102",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth103-paris04",
        name: "Heynouth 103",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth104-paris04",
        name: "Heynouth 104",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth105-paris04",
        name: "Heynouth 105",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth106-paris04",
        name: "Heynouth 106",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth107-paris04",
        name: "Heynouth 107",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth108-paris04",
        name: "Heynouth 108",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth109-paris04",
        name: "Heynouth 109",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth110-paris04",
        name: "Heynouth 110",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth111-paris04",
        name: "Heynouth 111",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth112-paris04",
        name: "Heynouth 112",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth113-paris04",
        name: "Heynouth 113",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth114-paris04",
        name: "Heynouth 114",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth115-paris04",
        name: "Heynouth 115",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth116-paris04",
        name: "Heynouth 116",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth117-paris04",
        name: "Heynouth 117",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth118-paris04",
        name: "Heynouth 118",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth119-paris04",
        name: "Heynouth 119",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
            p2: "Notre principe est simple : du service humain et du temps gagné.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "heynouth120-paris04",
        name: "Heynouth 120",
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
            p1: "Bienvenue chez Heynouth, votre épicerie de quartier. On est là pour le dépannage rapide comme pour les essentiels du quotidien.",
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
