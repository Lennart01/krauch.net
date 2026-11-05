import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { personalInfo } from "@/data/personal-info";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const siteTitle = `${personalInfo.name} - ${personalInfo.title}`;
const [firstName, ...lastNames] = personalInfo.name.split(" ");

export const metadata: Metadata = {
    title: siteTitle,
    description: personalInfo.summary,
    openGraph: {
        type: "profile",
        title: siteTitle,
        description: personalInfo.summary,
        locale: "en_US",
        firstName,
        lastName: lastNames.join(" "),
    },
    twitter: {
        card: "summary",
        title: siteTitle,
        description: personalInfo.summary,
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
        <body className="min-h-screen antialiased">
        {children}
        </body>
        </html>
    );
}
