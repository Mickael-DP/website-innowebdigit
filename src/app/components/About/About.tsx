"use client";

import { LinkedIn } from '@mui/icons-material';
import { Box, Button, Link, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

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
				flexDirection: { xs: 'column', md: 'row' },
				justifyContent: { xs: 'center', md: 'space-between' },
				paddingX: { md: 25 },
				mt: 8,
				width: '100%',
			}}>
			<Box
				sx={{
					mr: { xs: 0, md: 25 },
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
					gutterBottom
					color='white'>
					À PROPOS DE <span color='#63DFE6'>MOI</span>
				</Typography>
				<Typography
					variant='h6'
					sx={{
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: '400',
					}}
					gutterBottom
					color='#C7C7C7'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
					fringilla turpis tempor enim. Vel tristique suspendisse eget sodales
					egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit
					ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id
					bibendum velit cras. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Blandit id fringilla turpis tempor enim. Vel
					tristique suspendisse eget sodales egestas. Donec duis lacus, odio
					velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu
					fames sit lectus. Scelerisque id bibendum velit cras.
				</Typography>
				<Typography
					variant='h6'
					gutterBottom
					sx={{
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: '400',
					}}
					color='#C7C7C7'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
					fringilla turpis tempor enim. Vel tristique suspendisse eget sodales
					egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit
					ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id
					bibendum velit cras. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Blandit id fringilla turpis tempor enim. Vel
					tristique suspendisse eget sodales egestas. Donec duis lacus, odio
					velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu
					fames sit lectus. Scelerisque id bibendum velit cras.
				</Typography>
				<Box sx={{ display: { xs: 'flex' }, mx: { xs: 1 } }}>
	
					<Button
						onClick={openCVPDF}
						sx={{
							backgroundColor: '#59E2E8',
							borderRadius: 90,
							padding: { xs: 1, sm: 2, md: 2 },
							color: 'black',
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							mr: 2,
							fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' },
							'&:hover': {
											backgroundColor: '#59E2E8',
											color: '#ffffff',
										},
						}}
						endIcon={<FileDownloadIcon />}>
						Télécharger mon CV -
					</Button>
			
					<Link href="https://www.linkedin.com/in/mickael-dalle-pasqualine/" target="_blank" rel="noopener noreferrer">
					<Button
						sx={{
							backgroundColor: '#181818',
							borderRadius: 180,
							padding: 2.5,
							color: '#59E2E8',
							fontWeight: 'bold',
							fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' },
							'&:hover': {
											backgroundColor: '#59E2E8',
											color: '#ffffff',
										},
						}}>
						<LinkedIn />
					</Button>
					</Link>
				</Box>
			</Box>
			<Box sx={{ mt: { xs: 5 } }}>
				<img
					src='https://via.placeholder.com/450x560'
					alt='placeholder'
				/>
			</Box>
		</Box>
	);
};
export default About;
