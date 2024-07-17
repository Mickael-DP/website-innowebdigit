import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Link from 'next/link';
import logoFooter from '../../assets/IMG_3431-removebg-preview.png';

const Footer = () => {
	return (
		<Box sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
			<Container>
				<Box textAlign='center'>
					<img
						src={logoFooter.src}
						alt='logo Innowebdigital'
						style={{ width: '100%', maxWidth: '480px', height: 'auto' }}
					/>
				</Box>
				<Box
					display='flex'
					flexDirection={{ xs: 'column', sm: 'row' }}
					justifyContent='space-around'
					alignItems='center'
					sx={{ mt: 5 }}>
					<Box sx={{ mb: { xs: 3, sm: 0 } }}>
						<Box display='flex' alignItems='center'>
							<EmailIcon sx={{ color: '#63DFE6' }} />
							<Typography
								variant='body2'
								sx={{ pl: 1, fontFamily: 'Fira Sans, sans-serif' }}>
								contact@innowebdigital.com
							</Typography>
						</Box>
						<Divider sx={{ background: '#262626', mt: 1 }} />
					</Box>
					<Box sx={{ mb: { xs: 3, sm: 0 } }}>
						<Box display='flex' alignItems='center'>
							<PhoneIcon sx={{ color: '#63DFE6' }} />
							<Typography
								variant='body2'
								sx={{ pl: 1, fontFamily: 'Fira Sans, sans-serif' }}>
								+33 6 22 22 44 15
							</Typography>
						</Box>
						<Divider sx={{ background: '#262626', mt: 1 }} />
					</Box>
					<Box>
						<Box display='flex' alignItems='center'>
							<LocationOnIcon sx={{ color: '#63DFE6' }} />
							<Typography
								variant='body2'
								sx={{ pl: 1, fontFamily: 'Fira Sans, sans-serif' }}>
								Pégomas, France
							</Typography>
						</Box>
						<Divider sx={{ background: '#262626', mt: 1 }} />
					</Box>
				</Box>

				<Box
					display='flex'
					flexDirection={{ xs: 'column', sm: 'row' }}
					justifyContent='space-around'
					alignItems='center'
					sx={{ mt: 5 }}>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
							mb: { xs: 2, sm: 0 },
						}}>
						Développement Frontend
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
							mb: { xs: 2, sm: 0 },
						}}>
						Développement Backend
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
							mb: { xs: 2, sm: 0 },
						}}>
						UX/UI
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
							mb: { xs: 2, sm: 0 },
						}}>
						SEO
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
							mb: { xs: 2, sm: 0 },
						}}>
						CMS
					</Typography>
				</Box>
				<Box
					display='flex'
					justifyContent='center'
					sx={{ mt: 5 }}>
					<Instagram sx={{ color: '#63DFE6' }} />
					<Facebook sx={{ mx: 2, color: '#63DFE6' }} />
					<Twitter sx={{ color: '#63DFE6' }} />
				</Box>

				<Box
					display='flex'
					flexDirection={{ xs: 'row', sm: 'row' }}
					justifyContent={{ xs: 'space-between', sm: 'center' }}
					alignItems='center'
					sx={{ mt: 3 }}>
					<Box>
						<Typography
							sx={{ color: '#828282', fontSize: {xs: '0.7rem', sm:'1rem'}}}>
							© 2024 Innowebdigital
						</Typography>
					</Box>
					<Box>
						<Typography
							sx={{ color: '#828282', fontSize: {xs: '0.7rem', sm:'1rem'}, mx:{xs:0, sm:3}}}>
							Mentions légales
						</Typography>
					</Box>
					<Box>
						<Typography
				sx={{ color: '#828282', fontSize: {xs: '0.7rem', sm:'1rem'}}}>
							Politique de confidentialité
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
