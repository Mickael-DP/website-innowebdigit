import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import FormInput from '../FormInput/FormInput';
import FormTextarea from '../FormTextarea/FormTextarea';
import { Button } from '@mui/joy';

const Contact = () => {
	return (
		<Box sx={{
            backgroundColor:'#181818',
            borderTop: '2px solid #3C3C3C',
            borderBottom: '2px solid #3C3C3C',
            padding: '2rem 0',
            marginTop: 5,
        }}>
			<Box
				sx={{
					color: 'white',
                  paddingX: 25,
				}}>
				<Typography variant='h6'  sx={{
                            fontFamily: 'Fira Sans, sans-serif',
                            fontWeight: '300',
							letterSpacing: '0.3em',
							color: '#59E2E8',
                        }}>FORMULAIRE</Typography>
				<Typography variant='h3'
				 sx={{
					fontFamily: 'Fira Sans, sans-serif',
					fontWeight: '800',
				}}>Entrons en contact</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
                    paddingTop: 5,
				}}>
                    <Container maxWidth='md'>
				<form>
					<Box
						sx={{
							display: 'flex',
                            justifyContent: 'space-between',
							gap: 15,
							marginBottom: 2,
						}}>
						<FormInput
							label='Nom / Prénom'
                            placeholder='Nom / Prénom'
							type='text'
					
						/>
						<FormInput
							label='Entité'
                            placeholder='Entité'
							type='text'
						/>
					</Box>
					<FormInput
						label='Email'
                        placeholder='Email'
						type='email'
					/>
					<Box
						sx={{
							display: 'flex',
                            justifyContent: 'space-between',
							gap: 15,
							marginY: 2,
						}}>
						<FormInput
							label='N°Téléphone'
                            placeholder='N°Téléphone'
							type='text'
						/>
						<FormInput
							label='Pays'
                            placeholder='Pays'
							type='text'
						/>
					</Box>
					<FormTextarea label='Message' placeholder='Entrez votre message' />
                    <Button
							variant='solid'
                            size='lg'
							sx={{ backgroundColor: '#59E2E8', color: '#181818', marginTop: 3, display: 'block', marginX: 'auto', fontFamily: 'Fira Sans, sans-serif' }}
							>
							Envoyer votre demande
						</Button>
				</form>
                </Container>
			</Box>
		</Box>
                                    
	);
};

export default Contact;
