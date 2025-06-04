'use client'
import { AppBar, Toolbar, Box, Button, useTheme, useMediaQuery, Container } from '@mui/material'
import Link from 'next/link'

export default function Header() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <AppBar position="static" sx={{ backgroundColor: 'var(--green)' }}>
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: '72px !important', // 👈 увеличим высоту хедера
                    }}
                >
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Link href="/">
                            <img
                                src={isMobile ? '/logo-small.png' : '/logo-big.png'}
                                alt="Preuss Garten"
                                style={{
                                    height: isMobile ? '40px' : '64px', // 👈 увеличим лого
                                    width: 'auto',
                                }}
                            />
                        </Link>
                    </Box>

                    <Box>
                        <Button
                            color="inherit"
                            component={Link}
                            href="/"
                            sx={{ fontSize: '1rem', mx: 1 }} // 👈 увеличен шрифт
                        >
                            Start
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            href="/about"
                            sx={{ fontSize: '1rem', mx: 1 }}
                        >
                            Über uns
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            href="/contact"
                            sx={{ fontSize: '1rem', mx: 1 }}
                        >
                            Kontakt
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
