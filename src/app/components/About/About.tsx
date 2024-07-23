/* eslint-disable react/no-unescaped-entities */

'use client';

import { LinkedIn } from '@mui/icons-material';
import { Box, Button, Link, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Picofme from '../../assets/photodemoi.jpeg';

const About = () => {
	const openCVPDF = () => {
		// Chemin relatif vers le PDF
		const pdfPath = '/assets/CVMickaelDALLEPASQUALINE.pdf'; // Assurez-vous que le chemin est correctement défini

		// Ouvrir le PDF dans une nouvelle fenêtre
		window.open(pdfPath);
	};

	return (
		<Box
			id='apropos'
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'column',  md: 'column', lg: 'row' },
				justifyContent: { xs: 'center', md: 'center', lg: 'space-between' },
				paddingX: { xs: 7, sm: 10, md: 8, lg: 11, xl: 21},
				mt: 8,
				width: '100%',
			}}>
			<Box
				sx={{
					paddingRight: { xs: 0, lg: 15, md: 0 },
					mx: { xs: 5, md: 0 },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
				<Typography
				variant='h3'
					sx={{
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: '800',
					}}
					color='white'>
					À PROPOS DE <span style={{color: '#63DFE6'}}>MOI</span>
				</Typography>
				<Typography
					sx={{
						marginTop: {xs:'20px'},
						fontSize: { xs: '1.2rem', sm: '1rem', md: '1.1rem' },
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: '400',
					}}
					color='#C7C7C7'>
					Je m'appelle <b>Mickael DALLE PASQUALINE</b>, développeur web passionné et
					nouvel entrepreneur. Passionné par le développement web, je suis constamment à la recherche
					de nouvelles technologies et de nouveaux défis pour enrichir mon
					expertise et offrir des solutions innovantes.
				</Typography>
				<Typography
					variant='body1'
					sx={{
						display: { xs: 'none', md: 'block' },
						fontSize: { xs: '1rem', sm: '1rem', md: '1.1rem' },
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: '400',
					}}
					color='#C7C7C7'>
					Mon parcours a débuté avec cinq années d'études en informatique,
					durant lesquelles j'ai acquis une solide formation théorique et
					pratique en développement web. J'ai maîtrisé des technologies
					essentielles telles que HTML, CSS, et JavaScript, ainsi que des
					frameworks avancés comme React et Node.js.
					</Typography>
					<Typography
					variant='body1'
					sx={{
						display: { xs: 'none', md: 'block' },
						fontSize: { xs: '1rem', sm: '1rem', md: '1.1rem' },
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: '400',
					}}
					color='#C7C7C7'>
					Pendant ces cinq années, j'ai eu l'opportunité de travailler en
					alternance pendant trois ans dans deux entreprises différentes. Ces
					expériences m'ont permis de mettre en pratique mes connaissances et
					d'acquérir de nouvelles compétences. J'ai participé à divers projets,
					allant de la création de sites web vitrine à des applications web
					complexes. Après avoir consolidé mes compétences et mon expérience en
					informatique et en développement web, j'ai décidé de me lancer en tant
					que développeur web freelance.
					</Typography>
					<Typography
					variant='body1'
					sx={{
						display: { xs: 'block', md: 'none' },
						fontSize: { xs: '1.2rem', sm: '1rem', md: '1.1rem' },
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: '400',
						marginTop: {xs:'20px'}
					}}
					color='#C7C7C7'>
					Après avoir consolidé mes compétences et mon expérience pendant mes études, j'ai décidé de me lancer en tant
					que développeur web freelance.
					</Typography>
				<Box sx={{ display: { xs: 'flex' }, justifyContent: {xs: 'center', sm:'flex-start'}, marginTop: {xs:'20px'} }}>
					<Button
			
						onClick={openCVPDF}
						size='small'
						sx={{
							display: { xs: 'none', md: 'flex' },
							backgroundColor: '#59E2E8',
							padding: { xs: 1, sm: 2, md: 1},
							color: 'black',
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							mr: 2,
							fontSize: { xs: '0.8rem', sm: '1rem', md: '0.8rem' },
							'&:hover': {
								backgroundColor: '#59E2E8',
								color: '#ffffff',
							},
						}}
						endIcon={<FileDownloadIcon />}>
						Télécharger mon CV -
					</Button>
					<Button
						onClick={openCVPDF}
						size='small'
						sx={{
							display: { xs: 'flex', md: 'none' },
							backgroundColor: '#59E2E8',
							padding: {xs:1, sm: 1, md: 1},
							color: 'black',
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							mr: 2,
							fontSize: { xs: '0.8rem', sm: '0.8rem', md: '0.8rem' },
							'&:hover': {
								backgroundColor: '#59E2E8',
								color: '#ffffff',
							},
						}}
						endIcon={<FileDownloadIcon />}>
						 mon CV -
					</Button>

					<Link
							sx={{ display: { xs: 'none', md: 'block' } }}
						href='https://www.linkedin.com/in/mickael-dalle-pasqualine/'
						target='_blank'
						rel='noopener noreferrer'>
						<Button
							size='small'
							sx={{
								backgroundColor: '#181818',
								padding: {xs:1, sm: 1, md: 1},
								color: '#59E2E8',
								fontWeight: 'bold',
								fontSize: { xs: '0.8rem', sm: '1rem', md: '0.8rem' },
								'&:hover': {
									backgroundColor: '#59E2E8',
									color: '#ffffff',
								},
							}}>
								Ajoute moi sur LinkedIn -   
							<LinkedIn />
						</Button>
					</Link>
					<Link
						sx={{ display: { xs: 'block', md: 'none' } }}
						href='https://www.linkedin.com/in/mickael-dalle-pasqualine/'
						target='_blank'
						rel='noopener noreferrer'>
						<Button
							size='small'
							sx={{
								backgroundColor: '#181818',
								padding: {xs:1, sm: 1, md: 1},
								color: '#59E2E8',
								fontWeight: 'bold',
								fontSize: { xs: '0.8rem', sm: '0.8rem', md: '0.8rem' },
								'&:hover': {
									backgroundColor: '#59E2E8',
									color: '#ffffff',
								},
							}}>
								Ajoute moi -    
							<LinkedIn />
						</Button>
					</Link>
				</Box>
			</Box>
			<Box sx={{ mt: { xs: 5 }, display: 'flex', justifyContent: 'center' }}>
				<Box
					component='img'
					src={Picofme.src}
					sx={{
						width: { xs: '350px', sm: '350px', md: '450px' },
						height: 'auto',
					}}
					alt='photo de moi'
				/>
			</Box>
		</Box>
	);
};
export default About;
