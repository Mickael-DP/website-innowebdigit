"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import FormInput from '../FormInput/FormInput';
import FormTextarea from '../FormTextarea/FormTextarea';
import { VariantProp } from '@mui/joy/styles';
import { Alert, Button, Snackbar } from '@mui/joy';
import emailjs from '@emailjs/browser';

interface FormState {
  [key: string]: string;
  name: string;
  entity: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    entity: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [variant, setVariant] = React.useState<VariantProp>('soft');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormState({
      name: '',
      entity: '',
      email: '',
      phone: '',
      country: '',
      message: '',
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_contact',
        'template_contact', 
        formState,
        'HjyopoL0Li5rbTNkE' // Remplacez par votre public key
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        resetForm(); 
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  }

  return (
    <Box
      sx={{
        backgroundColor: '#181818',
        borderTop: '2px solid #3C3C3C',
        borderBottom: '2px solid #3C3C3C',
        padding: '2rem 0',
        marginTop: 5,
      }}>
      <Box
        sx={{
          color: 'white',
          paddingX: { xs: 2, sm: 25 },
        }}>
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'Fira Sans, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.3em',
            color: '#59E2E8',
          }}>
          FORMULAIRE
        </Typography>
        <Typography
          variant='h3'
          sx={{
            fontFamily: 'Fira Sans, sans-serif',
            fontWeight: '800',
          }}>
          Entrons en contact
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 5,
        }}>
        <Container maxWidth='md'>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                gap: { xs: 2, sm: 15 },
                marginBottom: 2,
              }}>
              <FormInput
              required
                label='Nom / Prénom'
                placeholder='Nom / Prénom'
                type='text'
                name='name'
                value={formState.name}
                onChange={handleChange}
              />
              <FormInput
              required
                label='Entité'
                placeholder='Entité'
                type='text'
                name='entity'
                value={formState.entity}
                onChange={handleChange}
              />
            </Box>
            <FormInput
            required
              label='Email'
              placeholder='Email'
              type='email'
              name='email'
              value={formState.email}
              onChange={handleChange}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                gap: { xs: 2, sm: 15 },
                marginY: 2,
              }}>
              <FormInput
                label='N°Téléphone'
                placeholder='N°Téléphone'
                type='text'
                name='phone'
                value={formState.phone}
                onChange={handleChange}
              />
              <FormInput
                label='Pays'
                placeholder='Pays'
                type='text'
                name='country'
                value={formState.country}
                onChange={handleChange}
              />
            </Box>
            <FormTextarea
            required
              label='Message'
              placeholder='Entrez votre message'
              name='message'
              value={formState.message}
              onChange={handleChange}
            />
            <Button
              type='submit'
              variant='solid'
              size='lg'
              sx={{
                backgroundColor: '#59E2E8',
                color: '#181818',
                marginTop: 3,
                display: 'block',
                marginX: 'auto',
                fontFamily: 'Fira Sans, sans-serif',
                width: { xs: '100%', sm: 'auto' }, // full width on mobile
              }}>
              Envoyer votre demande
            </Button>
          </form>
        </Container>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert variant={variant} color="success" sx={{ width: '100%' }}>
          Votre message a été envoyé avec succès !
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
