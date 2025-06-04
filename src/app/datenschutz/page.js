'use client'
import { Box, Typography } from '@mui/material'

export default function DatenschutzPage() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Datenschutzerklärung
            </Typography>

            <Typography variant="h6" gutterBottom mt={4}>
                1. Datenschutz auf einen Blick
            </Typography>
            <Typography gutterBottom>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </Typography>
            <Typography gutterBottom>
                Die Datenverarbeitung erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie unten im Abschnitt „Verantwortliche Stelle“.
            </Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                Wie erfassen wir Ihre Daten?
            </Typography>
            <Typography gutterBottom>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. durch das Ausfüllen eines Kontaktformulars.
                Andere Daten werden automatisch beim Besuch der Website durch IT-Systeme erfasst (z. B. Browser, Betriebssystem, Uhrzeit).
            </Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                Wofür nutzen wir Ihre Daten?
            </Typography>
            <Typography gutterBottom>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Andere Daten können zur Analyse des Nutzerverhaltens verwendet werden.
            </Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                Welche Rechte haben Sie?
            </Typography>
            <Typography gutterBottom>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten.
                Sie können Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen sowie der Verarbeitung widersprechen.
                Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </Typography>

            <Typography variant="h6" gutterBottom mt={4}>
                2. Hosting
            </Typography>
            <Typography gutterBottom>
                Diese Website wird bei einem externen Dienstleister (Hoster) gehostet. Personenbezogene Daten werden dabei auf dessen Servern gespeichert.
                Dies kann IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten u. a. umfassen.
            </Typography>
            <Typography gutterBottom>
                Der Hoster verarbeitet Ihre Daten nur im Rahmen der Auftragsverarbeitung gemäß Art. 28 DSGVO.
            </Typography>

            <Typography variant="h6" gutterBottom mt={4}>
                3. Allgemeine Hinweise und Pflichtinformationen
            </Typography>
            <Typography gutterBottom>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.
            </Typography>
            <Typography gutterBottom>
                Verantwortliche Stelle:
                <br />
                Max Mustermann
                <br />
                Musterstraße 1
                <br />
                12345 Musterstadt
                <br />
                E-Mail: kontakt@example.com
            </Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                SSL- bzw. TLS-Verschlüsselung
            </Typography>
            <Typography gutterBottom>
                Diese Seite nutzt eine SSL- bzw. TLS-Verschlüsselung zum Schutz vertraulicher Inhalte.
                Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol.
            </Typography>

            <Typography variant="h6" gutterBottom mt={4}>
                4. Datenerfassung auf dieser Website
            </Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                Server-Log-Dateien
            </Typography>
            <Typography gutterBottom>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien.
                Dies betrifft z. B. den Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse.
            </Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                Kontaktformular
            </Typography>
            <Typography gutterBottom>
                Wenn Sie uns per Formular kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihrer Anfrage.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                Anfrage per E-Mail oder Telefon
            </Typography>
            <Typography gutterBottom>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, speichern wir Ihre Anfrage und Kontaktdaten zur Bearbeitung.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={6}>
                Quelle: <a
                style={{
                    textDecoration:'none',
                    color:'var(--green)'
                }}
                href="https://www.e-recht24.de" target="_blank" rel="noreferrer">e-recht24.de</a>
            </Typography>
        </Box>
    )
}