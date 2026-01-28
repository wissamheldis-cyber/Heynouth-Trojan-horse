import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getShop, SHOPS } from "@/data/shops";
import ShopLanding from "@/components/shop/ShopLanding";

// 1. Generate Static Params for all known shops
export async function generateStaticParams() {
    return SHOPS.map((shop) => ({
        slug: shop.slug,
    }));
}

// 2. Generate Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const shop = getShop(slug);
    if (!shop) return {};

    return {
        title: `${shop.name} - ${shop.districtLabel}`,
        description: `Commandez chez ${shop.name}. ${shop.about.p1}`,
    };
}

// 3. Page Component
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const shop = getShop(slug);

    if (!shop) {
        notFound();
    }

    return <ShopLanding shop={shop} />;
}
