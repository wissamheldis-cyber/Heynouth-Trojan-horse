import ShopLanding from "@/components/shop/ShopLanding";
import { SHOPS } from "@/data/shops";

export default function Page() {
  return <ShopLanding shop={SHOPS[0]} />;
}
