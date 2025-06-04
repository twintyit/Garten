'use client'

import { Box, Container, Typography } from '@mui/material'



export default function ImpressumPage() {
    return (
        <Box  >
            <Typography variant="h4" gutterBottom color="var(--green)">
                Impressum
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
                Angaben gemäß § 5 TMG
            </Typography>
            <Typography>
                Cristian Preuss<br />
                Gartenservice Preuss<br />
                Musterstraße 45<br />
                63065 Offenbach am Main
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
                Kontakt
            </Typography>
            <Typography>
                Telefon: 0151 23456789<br />
                E-Mail: info@preuss-garten.de
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
                Umsatzsteuer-ID
            </Typography>
            <Typography>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
                Haftung für Inhalte
            </Typography>
            <Typography>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
                Haftung für Links
            </Typography>
            <Typography>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen.
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
                Urheberrecht
            </Typography>
            <Typography>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
                gekennzeichnet.
            </Typography>
        </Box>
    )
}
