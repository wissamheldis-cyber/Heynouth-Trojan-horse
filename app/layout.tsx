import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bukra = localFont({
  src: [
    {
      path: "./fonts/29LTBukra-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/29LTBukra-Regular.ttf", // Fallback to Regular if Bold is missing
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bukra",
});

export const viewport: Viewport = {
  themeColor: "#256327",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Heynouth",
  description: "Commerces locaux — pages rapides + réservation par appel",
  applicationName: "Heynouth",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Heynouth",
  },
  icons: {
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bukra.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
