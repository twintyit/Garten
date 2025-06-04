import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Layout from "@/components/Layout"

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"],})
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata = {
    title: "Gartenpflege in Offenbach | Gartenservice",
    description: "Professionelle Gartenpflege in Offenbach: Rasen mähen, Baumschnitt, Gartenreinigung und mehr.",
    icons: {
        icon: '/favicon.png',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>{children}</Layout> {/* Это клиентский компонент */}
        </body>
        </html>
    )
}