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
                        gap: 3,
                    }}
                >
                    {/* Логотип и адрес */}
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Link href="/" style={{ textDecoration: 'none', marginBottom: 1 }}>
                            <img
                                src="/logo-big.png"
                                alt="Preuss Garten"
                                style={{
                                    height: '64px',
                                    width: 'auto',
                                }}
                            />
                        </Link>
                        <Typography variant="body2" sx={{ fontSize: '1.1rem' }}>Strasse 45</Typography>
                        <Typography variant="body2" sx={{ fontSize: '1.1rem' }}>Offenbach am Main</Typography>
                    </Box>


                    <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>Navigation</Typography>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Start
                            </Typography>
                        </Link>
                        <Link href="/about" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Über uns
                            </Typography>
                        </Link>
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Kontakt
                            </Typography>
                        </Link>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>Rechtliches</Typography>
                        <Link href="/impressum" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
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
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Datenschutz
                            </Typography>
                        </Link>
                    </Box>
                </Box>

                {/* Копирайт */}
                <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '1rem', marginTop: '1rem' }}>
                    © {new Date().getFullYear()} Gartenpflege Preuss. Alle Rechte vorbehalten.
                </Typography>
            </Container>
        </Box>
    )
}