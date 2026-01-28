import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: "#3a6c31",
                    green2: "#2d5426",
                    yellow: "#F6C74A",
                    yellow2: "#F9DE70",
                    ink: "#0F172A",
                    paper: "#f0f0f0",
                },
            },
            backgroundImage: {
                "brand-green": "linear-gradient(135deg, #3a6c31 0%, #2d5426 100%)",
                "brand-yellow": "linear-gradient(135deg, #F9DE70 0%, #F6C74A 100%)",
                "ambient":
                    "radial-gradient(900px circle at 15% 10%, rgba(58,108,49,.18), transparent 55%), radial-gradient(900px circle at 85% 85%, rgba(246,199,74,.22), transparent 55%)",
            },
            boxShadow: {
                float: "0 30px 80px rgba(0,0,0,.18)",
                card: "0 18px 45px rgba(15, 23, 42, .10)",
                soft: "0 10px 25px rgba(15, 23, 42, .08)",
                green: "0 18px 45px rgba(13,107,76,.30)",
                yellow: "0 14px 35px rgba(246,199,74,.45)",
            },
            borderRadius: {
                "4xl": "2.5rem",
                "5xl": "3rem",
            },
            fontFamily: {
                sans: ["var(--font-bukra)", "sans-serif"],
                bukra: ["var(--font-bukra)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
