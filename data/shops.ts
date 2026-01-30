import { WeekHours } from "@/lib/shopHours";
import _shops from './shops.json';

export type Shop = {
    slug: string;
    name: string;
    rating?: number; // Note globale (ex: 5)
    districtLabel: string; // "PARIS XX"
    statusLabel?: string;  // @deprecated - Calculated dynamically
    hoursLabel?: string;   // @deprecated - Calculated dynamically
    isPartner?: boolean;   // Identifies official Heynouth partners

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

        label?: string;      // ex: "OFFRE DE LA SEMAINE"
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

    reviews?: Array<{
        author: string;
        rating: number;
        text: string;
        time: string;
    }>;
};

// Using a type assertion to treat the JSON data as Shop[]
export const SHOPS: Shop[] = _shops as unknown as Shop[];

export function getShop(slug: string): Shop | undefined {
    return SHOPS.find((s) => s.slug === slug);
}
