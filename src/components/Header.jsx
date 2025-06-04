'use client'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import Link from 'next/link'

export default function Header() {
    return (
        <AppBar position="static" color="success">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Gartenservice Offenbach
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} href="/">Startseite</Button>
                    <Button color="inherit" component={Link} href="/about">Über uns</Button>
                    <Button color="inherit" component={Link} href="/contact">Kontakt</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
