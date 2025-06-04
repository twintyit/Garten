'use client'

import { Box, Container, Typography, Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
      <Box>
        <Box>
          <Image
              src="/logo-big.png"
              alt="Preuss Garten"
              width={180}
              height={100}
              style={{ marginBottom: '1.5rem' }}
          />

          <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: 'var(--green)',
              }}
          >
            Gartenpflege in Offenbach
          </Typography>

          <Typography
              variant="h6"
              sx={{
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                color: 'var(--text-dark)',
              }}
          >
            Zuverlässige Gartenarbeit mit Liebe zur Natur – wir pflegen, schneiden, säen
            und verschönern Ihren Garten mit Sorgfalt und Erfahrung.
          </Typography>

          <Button
              variant="contained"
              size="large"
              href="/contact"
              component={Link}
              sx={{
                backgroundColor: 'var(--green)',
                '&:hover': {
                  backgroundColor: 'var(--green-light)',
                },
                px: 4,
                py: 1.5,
                fontSize: '1rem',
              }}
          >
            Jetzt kontaktieren
          </Button>
        </Box>
      </Box>
  )
}
