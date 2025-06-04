'use client'

import { Box, Container, Typography, TextField, Button } from '@mui/material'

export default function ContactPage() {
    return (
        <Box sx={{ bgcolor: 'var(--beige)', py: { xs: 6, md: 10 } }}>
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ color: 'var(--green)', fontWeight: 600, textAlign: 'center' }}
                >
                    Kontaktieren Sie uns
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ mb: 4, color: 'var(--text-dark)', textAlign: 'center' }}
                >
                    Haben Sie Fragen oder möchten Sie ein Angebot erhalten? Schreiben Sie uns einfach!
                </Typography>

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
