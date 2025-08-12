'use client'

import { useState } from 'react'
import {
    Box, TextField, Button, Alert, Checkbox, FormControlLabel, CircularProgress
} from '@mui/material'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false) // 👈 Новый state

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        callback: false,
    })

    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        message: false,
        phone: false,
    })

    const isValidGermanPhone = (number) => {
        const regex = /^(?:\+49|0)[1-9][0-9\s\-]{6,}$/
        return regex.test(number.trim())
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormValues(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
        setFormErrors(prev => ({
            ...prev,
            [name]: false
        }))
    }

    const validate = () => {
        const errors = {
            name: !formValues.name.trim(),
            email: !formValues.email.trim(),
            message: !formValues.message.trim(),
            phone:
                formValues.callback &&
                (!formValues.phone.trim() || !isValidGermanPhone(formValues.phone)),
        }
        setFormErrors(errors)
        return !Object.values(errors).some(Boolean)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess(false)
        setError(false)

        if (!validate()) return

        setLoading(true) // ⏳ показываем загрузку

        const payload = {
            ...formValues,
            phone: formValues.callback && formValues.phone
                ? formValues.phone
                : 'Nicht angegeben',
        }

        emailjs
            .send(
                'service_syyyv9q',
                'template_pqja7au',
                payload,
                'KJoO_KeTWoeuxXO4D'
            )
            .then(() => {
                setSuccess(true)
                setFormValues({
                    name: '',
                    email: '',
                    message: '',
                    phone: '',
                    callback: false,
                })
                setFormErrors({
                    name: false,
                    email: false,
                    message: false,
                    phone: false,
                })
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false)) // ✅ скрываем загрузку
    }

    const getInputStyle = (hasError = false) => ({
        '& label': {
            color: hasError ? '#d32f2f' : 'var(--green)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: hasError ? '#d32f2f' : 'var(--green)',
            },
            '&:hover fieldset': {
                borderColor: hasError ? '#d32f2f' : 'var(--green-light)',
            },
            '&.Mui-focused fieldset': {
                borderColor: hasError ? '#d32f2f' : 'var(--green)',
            },
        },
    })

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                name="name"
                label="Ihr Name"
                fullWidth
                margin="normal"
                value={formValues.name}
                onChange={handleChange}
                error={formErrors.name}
                helperText={formErrors.name ? 'Bitte geben Sie Ihren Namen ein.' : ''}
                sx={getInputStyle(formErrors.name)}
            />
            <TextField
                name="email"
                label="E-Mail-Adresse"
                type="email"
                fullWidth
                margin="normal"
                value={formValues.email}
                onChange={handleChange}
                error={formErrors.email}
                helperText={formErrors.email ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' : ''}
                sx={getInputStyle(formErrors.email)}
            />
            <TextField
                name="message"
                label="Nachricht"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={formValues.message}
                onChange={handleChange}
                error={formErrors.message}
                helperText={formErrors.message ? 'Bitte schreiben Sie eine Nachricht.' : ''}
                sx={getInputStyle(formErrors.message)}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        name="callback"
                        checked={formValues.callback}
                        onChange={handleChange}
                        sx={{ color: 'var(--green)' }}
                    />
                }
                label="Ich möchte einen Rückruf erhalten"
            />

            {formValues.callback && (
                <TextField
                    name="phone"
                    label="Telefonnummer (Deutschland)"
                    fullWidth
                    margin="normal"
                    value={formValues.phone}
                    onChange={handleChange}
                    error={formErrors.phone}
                    helperText={
                        formErrors.phone
                            ? 'Bitte geben Sie eine gültige deutsche Telefonnummer ein (z.B. +49 160 1234567)'
                            : ''
                    }
                    sx={getInputStyle(formErrors.phone)}
                />
            )}

            <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading} // 🚫 Заблокировать во время отправки
                sx={{
                    mt: 3,
                    backgroundColor: 'var(--green)',
                    '&:hover': { backgroundColor: 'var(--green-light)' },
                    color: 'white',
                    fontSize: '1rem',
                    py: 1.2,
                    position: 'relative'
                }}
            >
                {loading ? (
                    <>
                        <CircularProgress size={20} sx={{ color: 'white', mr: 2 }} />
                        Wird gesendet...
                    </>
                ) : (
                    'NACHRICHT SENDEN'
                )}
            </Button>

            {success && (
                <Alert severity="success" sx={{ mt: 2 }}>
                    Nachricht erfolgreich gesendet!
                </Alert>
            )}
            {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                    Fehler beim Senden. Bitte versuchen Sie es später erneut.
                </Alert>
            )}
        </Box>
    )
}
