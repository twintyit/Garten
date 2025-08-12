'use client'

import { Box, Container, Typography, TextField, Button } from '@mui/material'
import Link from 'next/link'
import ContactForm from "@/components/ContactForm";
import ServiceAreaMap from "@/components/ServiceAreaMap";

export default function ContactPage() {
    return (
        <Box sx={{ bgcolor: 'var(--beige)' }}>
            <Container maxWidth="sm">
                {/* Заголовок */}
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{color: 'var(--green)', fontWeight: 600, textAlign: 'center'}}
                >
                    Kontaktieren Sie uns
                </Typography>

                {/* Контактные данные */}
                <Box sx={{mb: 5, textAlign: 'center'}}>
                    <Typography variant="body1" sx={{fontSize: '1.1rem', mb: 1}}>
                        📞 Telefon:{' '}
                        <Link href="tel:01713300309" style={{color: 'inherit', textDecoration: 'none'}}>
                            <strong>0171 3300309</strong>
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{fontSize: '1.1rem', mb: 1}}>
                        📧 E-Mail:{' '}
                        <Link href="mailto:garten.preuss@email.de" style={{color: 'inherit', textDecoration: 'none'}}>
                            <strong>preussgarten@gmail.com</strong>
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{fontSize: '1.1rem'}}>
                        📍 Adresse: Mainzer Str. 75, 65187 Wiesbaden
                    </Typography>
                </Box>

                {/* Подпись перед формой */}
                <Typography
                    variant="body1"
                    sx={{mb: 4, color: 'var(--text-dark)', textAlign: 'center'}}
                >
                    Oder nutzen Sie einfach das folgende Formular:
                </Typography>

                <ContactForm/>
                <ServiceAreaMap/>
            </Container>
        </Box>
    )
}
