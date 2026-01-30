import { NextResponse } from 'next/server';

// Configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.NEXT_PUBLIC_REPO_OWNER || "votre-username"; // Fallback
const REPO_NAME = process.env.NEXT_PUBLIC_REPO_NAME || "votre-repo";       // Fallback
const FILE_PATH = "data/shops.json";
const BRANCH = "main"; // Or "master"

export async function POST(request: Request) {
    if (!GITHUB_TOKEN) {
        return NextResponse.json({ error: "Configuration Error: GITHUB_TOKEN is missing on server." }, { status: 500 });
    }

    try {
        const { shop, originalSlug } = await request.json();
        if (!shop || !shop.slug) return NextResponse.json({ error: "Invalid Data" }, { status: 400 });

        // 1. Get current file (SHA is required to update)
        const getUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}?ref=${BRANCH}`;
        const getRes = await fetch(getUrl, {
            headers: {
                "Authorization": `Bearer ${GITHUB_TOKEN}`,
                "Accept": "application/vnd.github.v3+json",
            },
            cache: "no-store" // Important to get latest
        });

        if (!getRes.ok) {
            const err = await getRes.text();
            console.error("GitHub Fetch Error:", err);
            return NextResponse.json({ error: "Failed to fetch current data from GitHub", details: err }, { status: 500 });
        }

        const currentFile = await getRes.json();
        const currentContent = Buffer.from(currentFile.content, 'base64').toString('utf-8');
        const shops = JSON.parse(currentContent);

        // 2. Modify the JSON
        // Use originalSlug to find the item if we are renaming it
        const targetSlug = originalSlug || shop.slug;
        const index = shops.findIndex((s: any) => s.slug === targetSlug);

        if (index === -1) {
            return NextResponse.json({ error: "Shop not found in current data" }, { status: 404 });
        }

        // Update the shop
        shops[index] = { ...shops[index], ...shop };

        // 3. Commit back to GitHub
        const newContent = JSON.stringify(shops, null, 4);
        const newContentBase64 = Buffer.from(newContent).toString('base64');

        const putBody = {
            message: `[Admin] Update shop: ${shop.name} (${shop.slug})`,
            content: newContentBase64,
            sha: currentFile.sha,
            branch: BRANCH
        };

        const putRes = await fetch(getUrl, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${GITHUB_TOKEN}`,
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(putBody)
        });

        if (!putRes.ok) {
            const err = await putRes.text();
            console.error("GitHub Commit Error:", err);
            return NextResponse.json({ error: "Failed to commit to GitHub", details: err }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Updated successfully" });

    } catch (error) {
        console.error("Admin API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
