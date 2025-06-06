'use client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../lib/theme.js'
import Header from './Header'
import Footer from './Footer'
import { Box, Container } from '@mui/material'

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundImage: 'url("/grass.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                }}
            >
                {/* Белый полупрозрачный слой поверх травы */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        zIndex: 1,
                    }}
                />

                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Header />
                </Box>

                {/* Контент без отступов */}
                <Box
                    sx={{
                        flexGrow: 1,
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Container
                        maxWidth="lg"
                        sx={{
                            bgcolor: 'var(--beige)',
                            borderRadius: 0,
                            boxShadow: 0,
                            width: '100%',
                            py: 4,
                        }}
                    >
                        {children}
                    </Container>
                </Box>

                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Footer />
                </Box>
            </Box>
        </ThemeProvider>
    )
}
