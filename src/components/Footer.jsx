'use client'
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 4, bgcolor: 'var(--green)', color: 'white' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        gap: 4,
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Логотип — строго слева */}
                    <Box>
                        <Link href="/" style={{ textDecoration: 'none', alignItems: 'center' }}>
                            <img
                                src="/logo-big.png"
                                alt="Preuss Garten"
                                style={{ height: '64px', width: 'auto' }}
                            />
                        </Link>
                    </Box>

                    {/* Контактная информация */}
                    <Box>
                        <Typography variant="h6" sx={{mb: 1}}>Kontakt</Typography>
                        <Typography variant="body2" sx={{fontSize: '1.1rem'}}>
                            Mainzer Str. 75
                        </Typography>
                        <Typography variant="body2" sx={{fontSize: '1.1rem', mb: 1}}>
                            63189, Wiesbaden
                        </Typography>
                        <a href="tel:+491713300309" style={{textDecoration: 'none'}}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': {textDecoration: 'underline'},
                                }}
                            >
                                Telefon: 0171 3300309
                            </Typography>
                        </a>
                        <a
                            href="mailto:preussgarten@gmail.com?subject=Neue%20Nachricht%20von%20der%20Website"
                            style={{textDecoration: 'none'}}
                        >
                            <Typography
                                sx={{color: 'white', fontSize: '1.1rem', '&:hover': {textDecoration: 'underline'}}}
                            >
                                E‑Mail: preussgarten@gmail.com
                            </Typography>
                        </a>

                        <a
                            href="https://g.page/r/CaHskTSOjBK0EBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{textDecoration: 'none'}}
                        >
                            <Typography
                                sx={{color: 'white', fontSize: '1.1rem', '&:hover': {textDecoration: 'underline'}, marginTop: 'px'}}
                            >
                                Bewertung schreiben
                            </Typography>
                        </a>
                    </Box>

                    {/* Навигация */}
                    <Box>
                        <Typography variant="h6" sx={{mb: 1}}>Navigation</Typography>
                        <Link href="/" style={{textDecoration: 'none'}}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': {textDecoration: 'underline'},
                                }}
                            >
                            Start
                            </Typography>
                        </Link>
                        <Link href="/about" style={{textDecoration: 'none'}}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': {textDecoration: 'underline'},
                                }}
                            >
                                Über uns
                            </Typography>
                        </Link>
                        <Link href="/contact" style={{textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': { textDecoration: 'underline' },
                                }}
                            >
                                Kontakt
                            </Typography>
                        </Link>
                    </Box>

                    {/* Правовая информация */}
                    <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>Rechtliches</Typography>
                        <Link href="/impressum" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': { textDecoration: 'underline' },
                                }}
                            >
                                Impressum
                            </Typography>
                        </Link>
                        <Link href="/datenschutz" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': { textDecoration: 'underline' },
                                }}
                            >
                                Datenschutz
                            </Typography>
                        </Link>
                    </Box>
                </Box>

                {/* Копирайт */}
                <Typography
                    variant="body2"
                    sx={{ textAlign: 'center', fontSize: '1rem', mt: 4 }}
                >
                    © {new Date().getFullYear()} Christian Preuss. Alle Rechte vorbehalten.
                </Typography>
            </Container>
        </Box>
    )
}
