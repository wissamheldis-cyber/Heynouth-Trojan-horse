import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
    title: "Hub Commerçants | Trojan Horse",
};

export default function HubPage() {
    return <HubClient />;
}
