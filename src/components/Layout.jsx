'use client'
import Header from './Header'
import Footer from './Footer'
import { Container } from '@mui/material'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {children}
            </Container>
            <Footer />
        </>
    )
}
