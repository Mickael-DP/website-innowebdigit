import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
	Facebook,
	Google,
	Instagram,
	LinkedIn,
	Twitter,
} from '@mui/icons-material';
import Link from 'next/link';
import logoFooter from '../../assets/IMG_3431-removebg-preview.png';

const Footer = () => {
	return (
		<Box sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
			<Container maxWidth='lg'>
				<Grid
					container
					spacing={4}
					direction='column'
					alignItems='center'>
					<Grid
						item
						xs={12}
						textAlign='center'>
						<img
							src={logoFooter.src}
							alt='logo Innowebdigital'
							style={{ width: '100%', maxWidth: '480px', height: 'auto' }}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						container
						spacing={4}
						justifyContent='space-between'>
						<Grid
							item
							xs={12}
							sm={4}
							textAlign={{ xs: 'center', sm: 'center' }}>
							<Link href='mailto:contact@innowebdigital.com'>
								<Box
									display='flex'
									justifyContent={{ xs: 'center', sm: 'flex-end' }}
									alignItems='center'>
									<EmailIcon sx={{ color: '#63DFE6' }} />
									<Typography
										variant='body2'
										sx={{ ml: 1, fontFamily: 'Fira Sans, sans-serif' }}>
										contact@innowebdigital.com
									</Typography>
									<Divider sx={{ background: '#262626', mt: 1 }} />
								</Box>
							</Link>
						</Grid>

						<Grid
							item
							xs={12}
							sm={4}
							textAlign={{ xs: 'center', sm: 'center' }}>
							<Link href='tel:+33622224415'>
								<Box
									display='flex'
									justifyContent={{ xs: 'center', sm: 'center' }}
									alignItems='center'>
									<PhoneIcon sx={{ color: '#63DFE6', p: 0, mr: 1 }} />

									<Typography
										variant='body2'
										sx={{ fontFamily: 'Fira Sans, sans-serif' }}>
										+33 6 22 22 44 15
									</Typography>
								</Box>
							</Link>
						</Grid>

						<Grid
							item
							xs={12}
							sm={4}
							textAlign={{ xs: 'center', sm: 'center' }}>
							<Box
								display='flex'
								justifyContent={{ xs: 'center', sm: 'flex-start' }}
								alignItems='center'>
								<LocationOnIcon sx={{ color: '#63DFE6' }} />
								<Typography
									variant='body2'
									sx={{ pl: 1, fontFamily: 'Fira Sans, sans-serif' }}>
									Pégomas, France
								</Typography>
								<Divider sx={{ background: '#262626', mt: 1 }} />
							</Box>
						</Grid>
					</Grid>
					<Divider sx={{ background: '#262626', mt: 3, width: '100%' }} />
					<Grid
						item
						xs={12}
						container
						spacing={4}
						flexDirection={{ xs: 'column', sm: 'row' }}
						textAlign='center'
						justifyContent={{ xs: 'center', sm: 'space-around' }}>
						<Grid item>
							<Typography
								variant='body1'
								sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: '800' }}>
								Développement Frontend
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: '800' }}>
								Développement Backend
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: '800' }}>
								UX/UI
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: '800' }}>
								SEO
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: '800' }}>
								CMS
							</Typography>
						</Grid>
					</Grid>

					<Grid
						item
						xs={12}
						container
						justifyContent='center'
						spacing={3}>
						<Grid item>
							<Link
								href='https://www.instagram.com/innoweb.digital/'
								target='_blank'
								rel='noopener noreferrer'>
								<Instagram sx={{ color: '#63DFE6' }} />
							</Link>
						</Grid>
						<Grid item>
							<Link
								href='https://www.linkedin.com/in/mickael-dalle-pasqualine/'
								target='_blank'
								rel='noopener noreferrer'>
								<LinkedIn sx={{ color: '#63DFE6' }} />
							</Link>
						</Grid>
						<Grid item>
							<Google sx={{ color: '#63DFE6' }} />
						</Grid>
					</Grid>

					<Grid
						item
						xs={12}
						container
						justifyContent={{ xs: 'center', sm: 'center' }}
						spacing={{ xs: '12', sm: '15' }}>
						<Grid item>
							<Typography
								sx={{
									color: '#828282',
									fontSize: { xs: '0.7rem', sm: '1rem' },
								}}>
								© 2024 Innowebdigital
							</Typography>
						</Grid>

						<Grid item>
							<Typography
								sx={{
									color: '#828282',
									fontSize: { xs: '0.7rem', sm: '1rem' },
								}}>
								Mentions légales
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								sx={{
									color: '#828282',
									fontSize: { xs: '0.7rem', sm: '1rem' },
								}}>
								Politique de confidentialité
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
