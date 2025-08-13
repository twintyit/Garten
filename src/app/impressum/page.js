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
                Christian Preuss<br />
                Gartenservice Preuss<br />
                Mainzer Str. 75<br />
                63189, Wiesbaden
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
                Kontakt
            </Typography>
            <Typography>
                Telefon: 0171 3300309<br />
                E-Mail: preussgarten@gmail.com
            </Typography>
            

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
                Registrierungen & Mitgliedschaften
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2, listStyle: 'disc' }}>
                <li>
                    <Typography>IHK-Nr.: 16000694919</Typography>
                </li>
                <li>
                    <Typography>HWK-Nr.: 117721</Typography>
                </li>
                <li>
                    <Typography>Meisterbetrieb: 10000728</Typography>
                </li>
                <li>
                    <Typography>HRB: 53140</Typography>
                </li>
                <li>
                    <Typography>USt-ID: DE337009458</Typography>
                </li>
                <li>
                    <Typography>Betriebsnummer: 77653369</Typography>
                </li>
            </Box>

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
