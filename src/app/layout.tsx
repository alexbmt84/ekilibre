import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import {Footer, NavbarSimple} from "./provider";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#000000",
}

export const metadata: Metadata = {
    title: "Coach Sportif | Ekilibre84",
    description: "Ekilibre recouvre la pratique d'activités physiques, " +
        "sportives et bien être qui contribuent à la santé physique, " +
        "psychologique et sociale de l'individu. " +
        "Sébastien Jacquemin, Coach sportif, " +
        "maître nageur sur Malaucène, " +
        "Bédoin, situé au pied du Mont Ventoux.",
    applicationName: "Ekilibre84",
    authors: [{name: "Alexis Beaumont", url: "https://www.alexisbeaumontdev.com"}],
    generator: "Next.js",
    keywords: [
        "coach",
        "coach sportif",
        "ekilibre",
        "ekilibre 84",
        "ekilibre84",
        "Bédoin",
        "Malaucène",
        "Carpentras",
        "maître nageur",
        "massages",
        "Sébastien Jacquemin",
        "Vaucluse",
        "coach Mont Ventoux",
        "coach sportif Vaucluse",
        "coach sportif Carpentras",
        "cours de natation",
        "remise en forme",
        "coach sportif Bédoin",
        "coach sportif Malaucène",
        "préparation physique",
        "entraînement personnalisé",
        "coaching individuel",
        "coaching groupe", "aquagym",
        "aquagym Bédoin",
        "cours à domicile",
        "apprentissage natation",
        "natation enfants",
        "natation adultes",
        "sécurité aquatique",
        "aquaphobie",
        "massages minceur",
        "masseur professionnel",
        "massage bien-être",
        "techniques de massage",
        "massage thérapeutique",
        "maître masseur",
        "santé et sport",
        "programmes fitness",
        "conditionnement physique",
        "méthodes d'entraînement",
        "stratégies de remise en forme"
    ],
    referrer: "origin",
    creator: "Alexis Beaumont",
    publisher: "Vercel",
    robots: "index, follow",
    alternates: {canonical: "https://ekilibre84.fr"},
    icons: "https://ekilibre84.fr/icon.png",
    manifest: "https://ekilibre84.fr/manifest.json",
    openGraph: {
        type: "website",
        url: "https://ekilibre84.fr",
        title: "Coach Sportif | Ekilibre84",
        description: "Ekilibre recouvre la pratique d'activités physiques, " +
            "sportives et bien être qui contribuent à la santé physique, " +
            "psychologique et sociale de l'individu. " +
            "Sébastien Jacquemin, Coach sportif, " +
            "maître nageur sur Malaucène, " +
            "Bédoin, situé au pied du Mont Ventoux.",
        siteName: "Ekilibre84",
        images: [
            {
                url: "https://ekilibre84.fr/icon.png",
            }
        ],
    },
    appleWebApp: {
        capable: true,
        title: "Coach Sportif | Ekilibre84",
        statusBarStyle: "black-translucent"
    },
};

export default function RootLayout(
    {children}: Readonly<{ children: React.ReactNode; }>
)
{
    return (
        <html lang={"fr"}>
            <body className={inter.className}>
                <header
                    className={
                        "h-14 " +
                        "flex " +
                        "items-center " +
                        "z-10 " +
                        "bg-black"
                    }
                >
                    <NavbarSimple/>
                </header>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
