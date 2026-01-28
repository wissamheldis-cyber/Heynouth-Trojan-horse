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
        address: string;     // "77 Rue Crozatier, 75012"
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
        slug: "hey-77-rue-crozatier-75012",
        name: "Hey",
        districtLabel: "PARIS 12",
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
        mapsUrl: "https://www.google.fr/maps/place/77%20Rue%20Crozatier%2075012",
        contact: {
            phoneE164: "0140190033", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 40 19 00 33",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 77 Rue Crozatier, 75012 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-2-rue-fernand-labori-75018",
        name: "Hey",
        districtLabel: "PARIS 18",
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
        mapsUrl: "https://www.google.fr/maps/place/2%20Rue%20Fernand%20Labori%2075018",
        contact: {
            phoneE164: "0142574299", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 42 57 42 99",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 2 Rue Fernand Labori, 75018 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-123-rue-falgui-re-75015",
        name: "Hey",
        districtLabel: "PARIS 15",
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
        mapsUrl: "https://www.google.fr/maps/place/123%20Rue%20Falgui%C3%A8re%2075015",
        contact: {
            phoneE164: "0142798002", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 42 79 80 02",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 123 Rue Falguière, 75015 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-124-rue-du-cherche-midi-75006",
        name: "Hey",
        districtLabel: "PARIS 06",
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
        mapsUrl: "https://www.google.fr/maps/place/124%20Rue%20du%20Cherche-midi%2075006",
        contact: {
            phoneE164: "0142892335", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 42 89 23 35",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 124 Rue du Cherche-midi, 75006 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-24-rue-monge-75005",
        name: "Hey",
        districtLabel: "PARIS 05",
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
        mapsUrl: "https://www.google.fr/maps/place/24%20Rue%20Monge%2075005",
        contact: {
            phoneE164: "0143260870", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 43 26 08 70",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 24 Rue Monge, 75005 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-10-rue-de-pontoise-75005",
        name: "Hey",
        districtLabel: "PARIS 05",
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
        mapsUrl: "https://www.google.fr/maps/place/10%20Rue%20de%20Pontoise%2075005",
        contact: {
            phoneE164: "0143267057", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 43 26 70 57",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 10 Rue de Pontoise, 75005 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-153-rue-saint-jacques-75005",
        name: "Hey",
        districtLabel: "PARIS 05",
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
        mapsUrl: "https://www.google.fr/maps/place/153%20Rue%20Saint-Jacques%2075005",
        contact: {
            phoneE164: "0143546308", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 43 54 63 08",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 153 Rue Saint-Jacques, 75005 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-146-rue-du-faubourg-st-antoine-75011",
        name: "Hey",
        districtLabel: "PARIS 11",
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
        mapsUrl: "https://www.google.fr/maps/place/146%20Rue%20du%20Faubourg%20St%20Antoine%2075011",
        contact: {
            phoneE164: "0143958971", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 43 95 89 71",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 146 Rue du Faubourg St Antoine, 75011 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-202-rue-de-vaugirard-75015",
        name: "Hey",
        districtLabel: "PARIS 15",
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
        mapsUrl: "https://www.google.fr/maps/place/202%20Rue%20de%20Vaugirard%2075015",
        contact: {
            phoneE164: "0145669581", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 45 66 95 81",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 202 Rue de Vaugirard, 75015 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-53-boulevard-blanqui-75013",
        name: "Hey",
        districtLabel: "PARIS 13",
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
        mapsUrl: "https://www.google.fr/maps/place/53%20Boulevard%20Blanqui%2075013",
        contact: {
            phoneE164: "0145711421", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 45 71 14 21",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 53 Boulevard Blanqui, 75013 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-73-boulevard-vincent-auriol-75013",
        name: "Hey",
        districtLabel: "PARIS 13",
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
        mapsUrl: "https://www.google.fr/maps/place/73%20Boulevard%20Vincent%20Auriol%2075013",
        contact: {
            phoneE164: "0145857992", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 45 85 79 92",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 73 Boulevard Vincent Auriol, 75013 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-67-rue-saint-louis-en-l-le-75004",
        name: "Hey",
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
        mapsUrl: "https://www.google.fr/maps/place/67%20Rue%20Saint-Louis%20en%20l'%C3%8Ele%2075004",
        contact: {
            phoneE164: "0146347080", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 46 34 70 80",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 67 Rue Saint-Louis en l'Île, 75004 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-35-rue-georges-pitard-75015",
        name: "Hey",
        districtLabel: "PARIS 15",
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
        mapsUrl: "https://www.google.fr/maps/place/35%20Rue%20Georges%20Pitard%2075015",
        contact: {
            phoneE164: "0158052092", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 58 05 20 92",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 35 Rue Georges Pitard, 75015 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-107-rue-de-charenton-75012",
        name: "Hey",
        districtLabel: "PARIS 12",
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
        mapsUrl: "https://www.google.fr/maps/place/107%20Rue%20de%20Charenton%2075012",
        contact: {
            phoneE164: "0173712195", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 73 71 21 95",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 107 Rue de Charenton, 75012 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-13-rue-de-la-roquette-75004",
        name: "Hey",
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
        mapsUrl: "https://www.google.fr/maps/place/13%20Rue%20de%20la%20Roquette%2075004",
        contact: {
            phoneE164: "0177125480", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "01 77 12 54 80",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 13 Rue de la Roquette, 75004 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-3-rue-des-coles-75005",
        name: "Hey",
        districtLabel: "PARIS 05",
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
        mapsUrl: "https://www.google.fr/maps/place/3%20Rue%20des%20%C3%89coles%2075005",
        contact: {
            phoneE164: "0658336250", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "06 58 33 62 50",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 3 Rue des Écoles, 75005 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-94-avenue-philippe-auguste-75011",
        name: "Hey",
        districtLabel: "PARIS 11",
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
        mapsUrl: "https://www.google.fr/maps/place/94%20Avenue%20Philippe%20Auguste%2075011",
        contact: {
            phoneE164: "0673244651", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "06 73 24 46 51",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 94 Avenue Philippe Auguste, 75011 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-5-rue-ren-boulanger-75010",
        name: "Hey",
        districtLabel: "PARIS 10",
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
        mapsUrl: "https://www.google.fr/maps/place/5%20Rue%20Ren%C3%A9%20Boulanger%2075010",
        contact: {
            phoneE164: "0695131290", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "06 95 13 12 90",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 5 Rue René Boulanger, 75010 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-121-rue-de-charenton-75012",
        name: "Hey",
        districtLabel: "PARIS 12",
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
        mapsUrl: "https://www.google.fr/maps/place/121%20Rue%20de%20Charenton%2075012",
        contact: {
            phoneE164: "0745256983", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "07 45 25 69 83",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 121 Rue de Charenton, 75012 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-97-rue-de-bagnolet-75020",
        name: "Hey",
        districtLabel: "PARIS 20",
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
        mapsUrl: "https://www.google.fr/maps/place/97%20Rue%20de%20Bagnolet%2075020",
        contact: {
            phoneE164: "0758123257", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "07 58 12 32 57",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 97 Rue de Bagnolet, 75020 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-35-rue-claude-bernard-75005",
        name: "Hey",
        districtLabel: "PARIS 05",
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
        mapsUrl: "https://www.google.fr/maps/place/35%20Rue%20Claude%20Bernard%2075005",
        contact: {
            phoneE164: "0950878549", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 50 87 85 49",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 35 Rue Claude Bernard, 75005 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-57-rue-saint-jacques-75005",
        name: "Hey",
        districtLabel: "PARIS 05",
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
        mapsUrl: "https://www.google.fr/maps/place/57%20Rue%20Saint-Jacques%2075005",
        contact: {
            phoneE164: "0952380560", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 52 38 05 60",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 57 Rue Saint-Jacques, 75005 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-5-bd-de-magenta-75010",
        name: "Hey",
        districtLabel: "PARIS 10",
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
        mapsUrl: "https://www.google.fr/maps/place/5%20Bd%20de%20Magenta%2075010",
        contact: {
            phoneE164: "0981864250", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 81 86 42 50",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 5 Bd de Magenta, 75010 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-74-rue-du-bac-75007",
        name: "Hey",
        districtLabel: "PARIS 07",
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
        mapsUrl: "https://www.google.fr/maps/place/74%20Rue%20du%20Bac%2075007",
        contact: {
            phoneE164: "0982367107", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 82 36 71 07",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 74 Rue du Bac, 75007 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-243-rue-de-bercy-75012",
        name: "Hey",
        districtLabel: "PARIS 12",
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
        mapsUrl: "https://www.google.fr/maps/place/243%20Rue%20de%20Bercy%2075012",
        contact: {
            phoneE164: "0982532078", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 82 53 20 78",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 243 Rue de Bercy, 75012 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-51-rue-de-l-chiquier-75010",
        name: "Hey",
        districtLabel: "PARIS 10",
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
        mapsUrl: "https://www.google.fr/maps/place/51%20Rue%20de%20l%E2%80%99%C3%89chiquier%2075010",
        contact: {
            phoneE164: "0983585258", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 83 58 52 58",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 51 Rue de l’Échiquier, 75010 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-73-rue-de-charenton-75012",
        name: "Hey",
        districtLabel: "PARIS 12",
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
        mapsUrl: "https://www.google.fr/maps/place/73%20Rue%20de%20Charenton%2075012",
        contact: {
            phoneE164: "0984037859", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 84 03 78 59",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 73 Rue de Charenton, 75012 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-1-rue-du-g-n-ral-lanrezac-75017",
        name: "Hey",
        districtLabel: "PARIS 17",
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
        mapsUrl: "https://www.google.fr/maps/place/1%20Rue%20du%20G%C3%A9n%C3%A9ral%20Lanrezac%2075017",
        contact: {
            phoneE164: "0984245291", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 84 24 52 91",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 1 Rue du Général Lanrezac, 75017 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },
    {
        slug: "hey-24-avenue-ledru-rollin-75012",
        name: "Hey",
        districtLabel: "PARIS 12",
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
        mapsUrl: "https://www.google.fr/maps/place/24%20Avenue%20Ledru%20Rollin%2075012",
        contact: {
            phoneE164: "0986124881", // Basic clean up, assuming +33 implicit if 0 starts? Actually let's just keep as is or format. The UI expects E164 but for now raw is better than broken.
            phoneDisplay: "09 86 12 48 81",
            // Looking at previous shops.ts content... contact has phoneE164, phoneDisplay, email. Not address.
            // I will put the address in "about" or just leave it implicitly in mapsUrl.
            // Actually, I'll add it to 'about.p1' to make it visible.
            address: "8 shou édition, 75000",
        },
        dailyOffer: {
            title: "Offre du jour",
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
            p1: "Retrouvez-nous au 24 Avenue Ledru Rollin, 75012 Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    },


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
            address: "8 shou édition, 75000",
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
        slug: "heynouth1-paris01",
        name: "Heynouth 1",
        districtLabel: "PARIS 01",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth2-paris01",
        name: "Heynouth 2",
        districtLabel: "PARIS 01",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth3-paris01",
        name: "Heynouth 3",
        districtLabel: "PARIS 01",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth4-paris01",
        name: "Heynouth 4",
        districtLabel: "PARIS 01",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth5-paris01",
        name: "Heynouth 5",
        districtLabel: "PARIS 01",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth6-paris01",
        name: "Heynouth 6",
        districtLabel: "PARIS 01",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth7-paris02",
        name: "Heynouth 7",
        districtLabel: "PARIS 02",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth8-paris02",
        name: "Heynouth 8",
        districtLabel: "PARIS 02",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth9-paris02",
        name: "Heynouth 9",
        districtLabel: "PARIS 02",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth10-paris02",
        name: "Heynouth 10",
        districtLabel: "PARIS 02",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth11-paris02",
        name: "Heynouth 11",
        districtLabel: "PARIS 02",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth12-paris02",
        name: "Heynouth 12",
        districtLabel: "PARIS 02",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth13-paris03",
        name: "Heynouth 13",
        districtLabel: "PARIS 03",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth14-paris03",
        name: "Heynouth 14",
        districtLabel: "PARIS 03",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth15-paris03",
        name: "Heynouth 15",
        districtLabel: "PARIS 03",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth16-paris03",
        name: "Heynouth 16",
        districtLabel: "PARIS 03",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth17-paris03",
        name: "Heynouth 17",
        districtLabel: "PARIS 03",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth18-paris03",
        name: "Heynouth 18",
        districtLabel: "PARIS 03",
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
            address: "8 shou édition, 75000",
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
            address: "8 shou édition, 75000",
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
            address: "8 shou édition, 75000",
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
            address: "8 shou édition, 75000",
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
            address: "8 shou édition, 75000",
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
            address: "8 shou édition, 75000",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth25-paris05",
        name: "Heynouth 25",
        districtLabel: "PARIS 05",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth26-paris05",
        name: "Heynouth 26",
        districtLabel: "PARIS 05",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth27-paris05",
        name: "Heynouth 27",
        districtLabel: "PARIS 05",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth28-paris05",
        name: "Heynouth 28",
        districtLabel: "PARIS 05",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth29-paris05",
        name: "Heynouth 29",
        districtLabel: "PARIS 05",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth30-paris05",
        name: "Heynouth 30",
        districtLabel: "PARIS 05",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth31-paris06",
        name: "Heynouth 31",
        districtLabel: "PARIS 06",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth32-paris06",
        name: "Heynouth 32",
        districtLabel: "PARIS 06",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth33-paris06",
        name: "Heynouth 33",
        districtLabel: "PARIS 06",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth34-paris06",
        name: "Heynouth 34",
        districtLabel: "PARIS 06",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth35-paris06",
        name: "Heynouth 35",
        districtLabel: "PARIS 06",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth36-paris06",
        name: "Heynouth 36",
        districtLabel: "PARIS 06",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth37-paris07",
        name: "Heynouth 37",
        districtLabel: "PARIS 07",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth38-paris07",
        name: "Heynouth 38",
        districtLabel: "PARIS 07",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth39-paris07",
        name: "Heynouth 39",
        districtLabel: "PARIS 07",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth40-paris07",
        name: "Heynouth 40",
        districtLabel: "PARIS 07",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth41-paris07",
        name: "Heynouth 41",
        districtLabel: "PARIS 07",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth42-paris07",
        name: "Heynouth 42",
        districtLabel: "PARIS 07",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth43-paris08",
        name: "Heynouth 43",
        districtLabel: "PARIS 08",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth44-paris08",
        name: "Heynouth 44",
        districtLabel: "PARIS 08",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth45-paris08",
        name: "Heynouth 45",
        districtLabel: "PARIS 08",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth46-paris08",
        name: "Heynouth 46",
        districtLabel: "PARIS 08",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth47-paris08",
        name: "Heynouth 47",
        districtLabel: "PARIS 08",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth48-paris08",
        name: "Heynouth 48",
        districtLabel: "PARIS 08",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth49-paris09",
        name: "Heynouth 49",
        districtLabel: "PARIS 09",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth50-paris09",
        name: "Heynouth 50",
        districtLabel: "PARIS 09",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth51-paris09",
        name: "Heynouth 51",
        districtLabel: "PARIS 09",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth52-paris09",
        name: "Heynouth 52",
        districtLabel: "PARIS 09",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth53-paris09",
        name: "Heynouth 53",
        districtLabel: "PARIS 09",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth54-paris09",
        name: "Heynouth 54",
        districtLabel: "PARIS 09",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth55-paris10",
        name: "Heynouth 55",
        districtLabel: "PARIS 10",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth56-paris10",
        name: "Heynouth 56",
        districtLabel: "PARIS 10",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth57-paris10",
        name: "Heynouth 57",
        districtLabel: "PARIS 10",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth58-paris10",
        name: "Heynouth 58",
        districtLabel: "PARIS 10",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth59-paris10",
        name: "Heynouth 59",
        districtLabel: "PARIS 10",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth60-paris10",
        name: "Heynouth 60",
        districtLabel: "PARIS 10",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth61-paris11",
        name: "Heynouth 61",
        districtLabel: "PARIS 11",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth62-paris11",
        name: "Heynouth 62",
        districtLabel: "PARIS 11",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth63-paris11",
        name: "Heynouth 63",
        districtLabel: "PARIS 11",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth64-paris11",
        name: "Heynouth 64",
        districtLabel: "PARIS 11",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth65-paris11",
        name: "Heynouth 65",
        districtLabel: "PARIS 11",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth66-paris11",
        name: "Heynouth 66",
        districtLabel: "PARIS 11",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth67-paris12",
        name: "Heynouth 67",
        districtLabel: "PARIS 12",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth68-paris12",
        name: "Heynouth 68",
        districtLabel: "PARIS 12",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth69-paris12",
        name: "Heynouth 69",
        districtLabel: "PARIS 12",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth70-paris12",
        name: "Heynouth 70",
        districtLabel: "PARIS 12",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth71-paris12",
        name: "Heynouth 71",
        districtLabel: "PARIS 12",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth72-paris12",
        name: "Heynouth 72",
        districtLabel: "PARIS 12",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth73-paris13",
        name: "Heynouth 73",
        districtLabel: "PARIS 13",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth74-paris13",
        name: "Heynouth 74",
        districtLabel: "PARIS 13",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth75-paris13",
        name: "Heynouth 75",
        districtLabel: "PARIS 13",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth76-paris13",
        name: "Heynouth 76",
        districtLabel: "PARIS 13",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth77-paris13",
        name: "Heynouth 77",
        districtLabel: "PARIS 13",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth78-paris13",
        name: "Heynouth 78",
        districtLabel: "PARIS 13",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth79-paris14",
        name: "Heynouth 79",
        districtLabel: "PARIS 14",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth80-paris14",
        name: "Heynouth 80",
        districtLabel: "PARIS 14",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth81-paris14",
        name: "Heynouth 81",
        districtLabel: "PARIS 14",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth82-paris14",
        name: "Heynouth 82",
        districtLabel: "PARIS 14",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth83-paris14",
        name: "Heynouth 83",
        districtLabel: "PARIS 14",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth84-paris14",
        name: "Heynouth 84",
        districtLabel: "PARIS 14",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth85-paris15",
        name: "Heynouth 85",
        districtLabel: "PARIS 15",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth86-paris15",
        name: "Heynouth 86",
        districtLabel: "PARIS 15",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth87-paris15",
        name: "Heynouth 87",
        districtLabel: "PARIS 15",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth88-paris15",
        name: "Heynouth 88",
        districtLabel: "PARIS 15",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth89-paris15",
        name: "Heynouth 89",
        districtLabel: "PARIS 15",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth90-paris15",
        name: "Heynouth 90",
        districtLabel: "PARIS 15",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth91-paris16",
        name: "Heynouth 91",
        districtLabel: "PARIS 16",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth92-paris16",
        name: "Heynouth 92",
        districtLabel: "PARIS 16",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth93-paris16",
        name: "Heynouth 93",
        districtLabel: "PARIS 16",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth94-paris16",
        name: "Heynouth 94",
        districtLabel: "PARIS 16",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth95-paris16",
        name: "Heynouth 95",
        districtLabel: "PARIS 16",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth96-paris16",
        name: "Heynouth 96",
        districtLabel: "PARIS 16",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth97-paris17",
        name: "Heynouth 97",
        districtLabel: "PARIS 17",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth98-paris17",
        name: "Heynouth 98",
        districtLabel: "PARIS 17",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth99-paris17",
        name: "Heynouth 99",
        districtLabel: "PARIS 17",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth100-paris17",
        name: "Heynouth 100",
        districtLabel: "PARIS 17",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth101-paris17",
        name: "Heynouth 101",
        districtLabel: "PARIS 17",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth102-paris17",
        name: "Heynouth 102",
        districtLabel: "PARIS 17",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth103-paris18",
        name: "Heynouth 103",
        districtLabel: "PARIS 18",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth104-paris18",
        name: "Heynouth 104",
        districtLabel: "PARIS 18",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth105-paris18",
        name: "Heynouth 105",
        districtLabel: "PARIS 18",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth106-paris18",
        name: "Heynouth 106",
        districtLabel: "PARIS 18",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth107-paris18",
        name: "Heynouth 107",
        districtLabel: "PARIS 18",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth108-paris18",
        name: "Heynouth 108",
        districtLabel: "PARIS 18",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth109-paris19",
        name: "Heynouth 109",
        districtLabel: "PARIS 19",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth110-paris19",
        name: "Heynouth 110",
        districtLabel: "PARIS 19",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth111-paris19",
        name: "Heynouth 111",
        districtLabel: "PARIS 19",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth112-paris19",
        name: "Heynouth 112",
        districtLabel: "PARIS 19",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth113-paris19",
        name: "Heynouth 113",
        districtLabel: "PARIS 19",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth114-paris19",
        name: "Heynouth 114",
        districtLabel: "PARIS 19",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth115-paris20",
        name: "Heynouth 115",
        districtLabel: "PARIS 20",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth116-paris20",
        name: "Heynouth 116",
        districtLabel: "PARIS 20",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth117-paris20",
        name: "Heynouth 117",
        districtLabel: "PARIS 20",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth118-paris20",
        name: "Heynouth 118",
        districtLabel: "PARIS 20",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth119-paris20",
        name: "Heynouth 119",
        districtLabel: "PARIS 20",
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
            address: "8 shou édition, 75000",
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
        slug: "heynouth120-paris20",
        name: "Heynouth 120",
        districtLabel: "PARIS 20",
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
            address: "8 shou édition, 75000",
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
    }
];

export const getShop = (slug: string) => SHOPS.find((s) => s.slug === slug);
export const getShopSlugs = () => SHOPS.map((s) => s.slug);
