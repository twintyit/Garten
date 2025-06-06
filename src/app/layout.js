import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Layout from "@/components/Layout"

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"],})
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata = {
    title: "Gartenpflege in Offenbach & Frankfurt | Preuss Gartenservice",
    description:
        "Professionelle Gartenpflege und Gartenarbeit in Offenbach, Frankfurt, Hanau & Umgebung. Rasen mähen, Hecken schneiden, Gartenreinigung & mehr.",
    keywords: [
        "Gartenpflege Offenbach",
        "Gartenarbeit Frankfurt",
        "Gartenservice Hanau",
        "Rasen mähen Offenbach",
        "Hecke schneiden Frankfurt",
        "Gartenhilfe Neu-Isenburg",
        "Gartenfirma Mühlheim",
        "Gartenarbeit günstig",
    ],
    icons: {
        icon: '/favicon.png',
    },
    authors: [{ name: 'Kristian Preuss', url: 'https://preuss-garten.de' }],
}

export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>{children}</Layout>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    name: "Preuss Garten",
                    image: "https://www.preuss-garten.de/logo-big.png",
                    "@id": "https://www.preuss-garten.de",
                    url: "https://www.preuss-garten.de",
                    telephone: "0171 3300309",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "Strasse 45",
                        addressLocality: "Offenbach am Main",
                        postalCode: "63065",
                        addressCountry: "DE",
                    },
                    areaServed: [
                        "Frankfurt",
                        "Offenbach",
                        "Hanau",
                        "Neu-Isenburg",
                        "Mühlheim",
                        "Maintal",
                        "Dreieich"
                    ],
                    description: "Gartenarbeit und Gartenpflege in Offenbach und Frankfurt vom Profi.",
                }),
            }}
        />
        </body>
        </html>
    )
}