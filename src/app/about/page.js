'use client'
import { Typography, Container } from '@mui/material'
import styles from './about.module.css'

export default function AboutPage() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>О нас</Typography>
            <Typography>
                Мы предлагаем профессиональные услуги по уходу за садом в Берлине и окрестностях.
            </Typography>
        </Container>
    )
}