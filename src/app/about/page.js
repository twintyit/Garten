'use client'
import {Typography, Container, Box, Button} from '@mui/material'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <Box>
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ color: 'var(--green)', fontWeight: 600, textAlign:'center' }}
            >
                Über uns
            </Typography>
                {/* Блок 1: Текст слева, фото справа */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        my: 4,
                    }}
                >

                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h5"
                            sx={{ color: 'var(--green)', fontWeight: 'bold', mb: 2 }}
                        >
                            Wer wir sind
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'var(--text-dark)', fontSize: '1.1rem', mb: 2 }}>
                            Willkommen bei <strong>Preuss Garten</strong> – Ihrem zuverlässigen Partner für professionelle Gartenpflege in Offenbach und Umgebung.
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'var(--text-dark)', fontSize: '1.1rem' }}>
                            Wir sind ein Familienbetrieb mit Herz und Hingabe für alles, was grün ist. Seit über 5 Jahren bringen wir Gärten zum Blühen.
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Image
                            src="/about-1.png"
                            alt="Gartenarbeit in Frankfurt und Offenbach"
                            width={600}
                            height={400}
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                borderRadius: '12px',
                            }}
                        />
                    </Box>
                </Box>

                {/* Блок 2: Фото слева, текст справа */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row-reverse' },
                        gap: 4,
                        my: 4,
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ color: 'var(--green)', fontWeight: 600, mb: 2 }}>
                            Was uns auszeichnet
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'var(--text-dark)', fontSize: '1.1rem', mb: 2 }}>
                            Egal ob Hecken- und Baumschnitt, regelmäßige Pflege oder kreative Gartengestaltung – wir beraten Sie persönlich und setzen Ihre Wünsche professionell um.
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'var(--text-dark)', fontSize: '1.1rem' }}>
                            Unsere Kunden schätzen besonders unsere Zuverlässigkeit, saubere Arbeit und faire Preise.
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Image
                            src="/about-2.png"
                            alt="Gartenarbeit in Frankfurt und Offenbach"
                            width={600}
                            height={400}
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                borderRadius: '12px',
                            }}
                        />
                    </Box>

                </Box>

                {/* Нижний блок */}
                <Box textAlign="center"
                     sx={{
                         py: 3,
                         bgcolor:'var(--green)',
                         color:'var(--white)',
                         borderRadius: '10px'
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                        Warum Preuss Garten?
                    </Typography>

                    <Typography variant="body1" sx={{ fontSize: '1.1rem'}}>
                        ✔️ Persönlicher Kontakt & Beratung<br />
                        ✔️ Langjährige Erfahrung<br />
                        ✔️ Schnell & zuverlässig<br />
                        ✔️ Faire Preise & saubere Arbeit
                    </Typography>
                </Box>

            <Box sx={{ textAlign: 'center', mt: 6, px: 2,  }}>
                <Typography variant="h5"
                            sx={{
                                fontStyle: 'italic',
                                fontWeight: 600,
                                color: 'var(--green)',
                                mb: 2,
                }}>
                    „Ein schöner Garten ist wie ein zweites Zuhause.“
                </Typography>

                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 3 }}>
                    Lassen Sie uns gemeinsam Ihren Garten in einen Ort der Erholung verwandeln.
                </Typography>

                <Button
                    variant="contained"
                    href="/contact"

                    Kontaktformula
                    sx={{ backgroundColor: 'var(--green)',
                        '&:hover': { backgroundColor: 'var(--green-light)' },
                        fontSize: '1rem', px: 4, py: 1
                }}>
                    Kontaktieren Sie uns
                </Button>
            </Box>
        </Box>
    )
}
