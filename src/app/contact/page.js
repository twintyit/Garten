'use client'

import { Box, Container, Typography, TextField, Button } from '@mui/material'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <Box sx={{ bgcolor: 'var(--beige)' }}>
            <Container maxWidth="sm">
                {/* Заголовок */}
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ color: 'var(--green)', fontWeight: 600, textAlign: 'center' }}
                >
                    Kontaktieren Sie uns
                </Typography>

                {/* Контактные данные */}
                <Box sx={{ mb: 5, textAlign: 'center' }}>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
                        📞 Telefon:{' '}
                        <Link href="tel:01713300309" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <strong>0171 3300309</strong>
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
                        📧 E-Mail:{' '}
                        <Link href="mailto:garten.preuss@email.de" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <strong>garten.preuss@email.de</strong>
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                        📍 Adresse: Strasse 45, Offenbach am Main
                    </Typography>
                </Box>

                {/* Подпись перед формой */}
                <Typography
                    variant="body1"
                    sx={{ mb: 4, color: 'var(--text-dark)', textAlign: 'center' }}
                >
                    Oder nutzen Sie einfach das folgende Formular:
                </Typography>

                {/* Форма */}
                <form>
                    <TextField
                        label="Ihr Name"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="E-Mail-Adresse"
                        type="email"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Nachricht"
                        fullWidth
                        required
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 3,
                            backgroundColor: 'var(--green)',
                            '&:hover': { backgroundColor: 'var(--green-light)' },
                            fontSize: '1rem',
                            py: 1.2
                        }}
                    >
                        Nachricht senden
                    </Button>
                </form>
            </Container>
        </Box>
    )
}
