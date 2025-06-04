'use client'
import { Typography, Container, Box } from '@mui/material'

export default function AboutPage() {
    return (
        <Box sx={{  py: { xs: 6, md: 10 } }}>
            <Box>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ color: 'var(--green)', fontWeight: 600 }}
                >
                    Über uns
                </Typography>

                <Typography variant="body1" sx={{ color: 'var(--text-dark)', fontSize: '1.1rem', mb: 2 }}>
                    Willkommen bei <strong>Preuss Garten</strong> – Ihrem zuverlässigen Partner für professionelle Gartenpflege in Offenbach und Umgebung.
                </Typography>

                <Typography variant="body1" sx={{ color: 'var(--text-dark)', fontSize: '1.1rem', mb: 2 }}>
                    Unser kleines Familienunternehmen kümmert sich mit Leidenschaft und Sorgfalt um Gärten jeder Größe. Ob regelmäßiger Rasenschnitt, fachgerechter Baumschnitt oder die komplette Gartenneugestaltung – wir helfen gerne weiter.
                </Typography>

                <Typography variant="body1" sx={{ color: 'var(--text-dark)', fontSize: '1.1rem' }}>
                    Mit unserer Erfahrung, transparenten Preisen und persönlichem Einsatz sorgen wir dafür, dass Ihr Garten nicht nur gepflegt, sondern lebendig und einladend wirkt.
                </Typography>
            </Box>
        </Box>
    )
}
