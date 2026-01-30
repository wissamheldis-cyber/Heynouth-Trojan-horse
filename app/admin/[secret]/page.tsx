import AdminDashboard from "@/components/admin/AdminDashboard";
import { notFound } from "next/navigation";

// Only specific codes work (Basic URL security)
const ALLOWED_SECRETS = ["super-secret-dashboard", "admin-access-75011", "heynouth-master"];

export default async function AdminPage({ params }: { params: Promise<{ secret: string }> }) {
    const { secret } = await params;

    if (!ALLOWED_SECRETS.includes(secret)) {
        notFound(); // 404 if the URL is not exactly right
    }

    return <AdminDashboard />;
}
