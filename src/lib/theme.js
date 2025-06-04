// src/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-geist-sans), sans-serif',
    },
    palette: {
        primary: {
            main: '#2e7d32',
        },
        secondary: {
            main: '#81c784',
        },
    },
})

export default theme
