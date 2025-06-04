'use client'
import { Box, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box component="footer" sx={{ mt: 4, py: 3, textAlign: 'center', bgcolor: '#f5f5f5' }}>
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Gartenarbeit Berlin. Все права защищены.
            </Typography>
        </Box>
    )
}
