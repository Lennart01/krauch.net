import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "Lennart Krauch - Cloud Platform / Kubernetes Engineer",
    description: "Cloud Platform / Kubernetes Engineer specializing in Kubernetes & Cloud Infrastructure",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth dark">
        <body className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0A0A0B] text-zinc-300 min-h-screen antialiased`}>
        {children}
        </body>
        </html>
    );
}
