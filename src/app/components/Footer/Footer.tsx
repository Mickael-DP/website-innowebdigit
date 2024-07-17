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
						style={{ width: '480px', height: 'auto' }}
					/>
				</Box>
				<Box
					display='flex'
					justifyContent='space-around'
					sx={{ mt: 5 }}>
					<Box>
						<Box
							display='flex'
							alignItems='center'>
							<EmailIcon sx={{ color: '#63DFE6' }} />
							<Typography
								variant='body2'
								sx={{ pl: 1, fontFamily: 'Fira Sans, sans-serif' }}>
								contact@innowebdigital.com
							</Typography>
						</Box>
						<Divider sx={{ background: '#262626', mt: 1 }} />
					</Box>
					<Box>
						<Box
							display='flex'
							alignItems='center'>
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
						<Box
							display='flex'
							alignItems='center'>
							<LocationOnIcon sx={{ color: '#63DFE6' }} />
							<Typography
								variant='body2'
								sx={{ pl: 1, fontFamily: 'Fira Sans, sans-serif'}}>
								Pégomas, France
							</Typography>
						</Box>
						<Divider sx={{ background: '#262626', mt: 1 }} />
					</Box>
				</Box>

				<Box
					display='flex'
					justifyContent='space-around'
					sx={{ mt: 5 }}>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
						}}>
						Développement Frontend
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
						}}>
						Développement Backend
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
						}}>
						UX/UI
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
						}}>
						SEO
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '800',
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
					justifyContent='center'
					sx={{ mt: 3 }}>
					<Box>
						<Typography
							variant='body2'
							sx={{ color: '#828282' }}>
							© 2024 Innowebdigital
						</Typography>
					</Box>
					<Box sx={{ mx: 2 }}>
						<Typography
							variant='body2'
							sx={{ color: '#828282' }}>
							Mentions légales
						</Typography>
					</Box>
					<Box>
						<Typography
							variant='body2'
							sx={{ color: '#828282' }}>
							Politique de confidentialité
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
export default Footer;
