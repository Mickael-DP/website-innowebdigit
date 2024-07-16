import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/joy/Button';
import imgHero from '../../assets/imgHero.jpg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SendIcon from '@mui/icons-material/Send';

const Hero: React.FC = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: '100vh',
				width: '100%',
				overflow: 'hidden',
				'@media (max-width:600px)': {
					height: '70vh',
				},
			}}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundImage: `url(${imgHero.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					opacity: 0.3,
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
					textAlign: 'center',
					color: '#fff',
					padding: 3,
				}}>
				<Box
					sx={{
						padding: 3,
						borderRadius: 1,
						zIndex: 1,
					}}>
					<Typography
						variant='h3'
						component='h1'
						fontFamily='Fire Sans, sans-serif'
						fontWeight='300'>
					BIENVENUE <br/> CHEZ <br /> 
                        <span style={{ color: '#59E2E8', fontWeight:'800' }}>INNOWEB DIGITAL</span>
					</Typography>
					<Typography
						variant='h5'
						component='h2'
						fontFamily='Fira Sans, sans-serif'
						fontWeight='100'
						marginTop='30px'>
						Votre Développeur web freelance
					</Typography>
					<Typography
						variant='h5'
						component='h2'
						fontFamily='Fira Sans, sans-serif'
						fontWeight='100'
						marginBottom='30px'>
						Prêt a améliorer ton expérence digital en fonction de tes besoins
					</Typography>
					<Box
						sx={{
							marginTop: 2,
							'& > *': {
								margin: 1,
							},
						}}>
						<Button
							variant='solid'
                            size='lg'
							sx={{ backgroundColor: '#181818', mr: 5 }}
							>
							Me découvrir <ArrowDownwardIcon sx={{ml: 1}} />
						</Button>
						<Button
							variant='solid'
                            size='lg'
							sx={{ backgroundColor: '#59E2E8', color:'#000000' }}
							>
							Demander un devis <SendIcon sx={{ml: 1}} />
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
