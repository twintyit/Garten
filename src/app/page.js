'use client'

import { Box, Container, Typography, Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: 'url("/hero-garden.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    pb: 4,
                    textAlign: 'center',
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 2,
                            mb: 4,
                        }}
                    >
                        {/* Левая иконка - скрывается на мобильных */}
                        <Box
                            component="img"
                            src="/home-icon-1.png"
                            alt="home-icon"
                            sx={{
                                maxHeight: 120,
                                display: { xs: 'none', sm: 'block' }, // скрыть на xs
                            }}
                        />

                        {/* Центрированный текст */}
                        <Box sx={{ textAlign: 'center', mx: 2, flex: '1 1 300px' }}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>
                                Gartenpflege von Kristian Preuss
                            </Typography>

                            <Typography variant="h6" sx={{ mb: 4 }}>
                                Zuverlässige Gartenarbeit für Ihr Zuhause oder Unternehmen
                            </Typography>

                            <Typography variant="h6" sx={{ my: 3 }}>
                                📞 Rufen Sie uns an:{" "}
                                <Link href="tel:1713300309" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <strong>0171 3300309</strong>
                                </Link>
                            </Typography>

                            <Typography variant="h6" sx={{ mb: 4 }}>
                                oder
                            </Typography>

                            <Button variant="contained" href="/contact" sx={{ backgroundColor: 'var(--green)' }}>
                                Jetzt anfragen
                            </Button>
                        </Box>

                        {/* Правая иконка - скрывается на мобильных */}
                        <Box
                            component="img"
                            src="/home-icon-2.png"
                            alt="home-icon"
                            sx={{
                                maxHeight: 120,
                                display: { xs: 'none', sm: 'block' }, // скрыть на xs
                            }}
                        />
                    </Box>
                </Container>
            </Box>

            {/* About Short Section */}
            <Box sx={{ bgcolor: 'var(--green)', py: 5, color: 'var(--white)' }}>
                <Container>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
                        Über uns
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        Wir sind ein kleines Familienunternehmen aus Offenbach mit über 5 Jahren Erfahrung in Gartenpflege.
                        Zuverlässigkeit, Sauberkeit und faire Preise stehen bei uns an erster Stelle.
                    </Typography>
                </Container>
            </Box>

            {/* Services Section */}
            <Container sx={{ py: 6 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },

                        gap: 4,
                        mt: 3,
                    }}
                >
                    {/* Список слева */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
                            Unsere Leistungen
                        </Typography>
                        <ul style={{fontSize: '1.2rem', lineHeight: '2', margin: 0, paddingLeft: '1.2rem'}}>
                            <li>✅ Rasen mähen und Pflege</li>
                            <li>✂️ Hecken- und Baumschnitt</li>
                            <li>🧹 Gartenreinigung & Laubentsorgung</li>
                            <li>🌼 Bepflanzung und Gestaltung</li>
                            <li>📦 Entsorgung von Gartenabfällen</li>
                            <li>…und vieles mehr!</li>
                        </ul>
                    </Box>

                    {/* Картинка справа */}
                    <Box sx={{ flex: 1, textAlign: 'center' }}>
                        <img
                            src="/garden.png" // добавь изображение в public
                            alt="Gartenarbeit"
                            style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                        />
                    </Box>
                </Box>
            </Container>

            {/* CTA Section */}
            <Container
                sx={{
                    py: 6,
                    border:'1px solid var(--green)',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection:'column',
                    alignItems:'center'

            }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Kostenloses Angebot anfordern
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Kontaktieren Sie uns unverbindlich – wir freuen uns auf Ihre Anfrage!
                </Typography>
                <Button variant="contained" href="/contact" sx={{bgcolor:'var(--green)'}}>
                    Kontaktformular öffnen
                </Button>
            </Container>
        </Box>
  )
}
