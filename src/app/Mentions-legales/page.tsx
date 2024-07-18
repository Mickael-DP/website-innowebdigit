import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';
import { Container, Typography, Box, Link } from '@mui/material';

export default function MentionLegales() {
	return (
		<main className={styles.main}>
			<Navbar />
			<Container
				maxWidth='lg'
				sx={{ mt: 15 }}>
				<Typography
					sx={{
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: 'bold',
						textAlign: 'center',
						marginBottom: '50px',
					}}
					variant='h2'
					color='white'
					gutterBottom>
					Mentions légales
				</Typography>
				<Box sx={{ mb: '15px' }}>
					<Typography
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							marginBottom: '10px',
						}}
						variant='h5'
						color='white'
						gutterBottom>
						Éditeur du site
					</Typography>
					<Typography
						variant='body1'
						color='white'
						sx={{ display: 'flex', flexDirection: 'column' }}>
						<span>
							<b>Nom de la société:</b> DALLE PASQUALINE Mickael - InnoWeb
							Digital
						</span>
						<span>
							<b>Adresse :</b> 151 Avenue de Grasse, 06580 Pégomas, France
						</span>
						<span>
							<b>Téléphone:</b> +33622224415
						</span>
						<span>
							<b>Email:</b> contact@innowebdigital.com
						</span>
						<span>
							<b>Numéro SIRET:</b> 89532959700028
						</span>
					</Typography>
				</Box>
				<Box sx={{ mb: '15px' }}>
					<Typography
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							marginBottom: '10px',
						}}
						variant='h5'
						color='white'
						gutterBottom>
						Hébergeur
					</Typography>
					<Typography
						variant='body1'
						color='white'
						sx={{ display: 'flex', flexDirection: 'column' }}>
						<span>Nom de l'hébergeur: OVH</span>
						<span>Adresse: 2 rue Kellermann, 59100 Roubaix, France</span>
						<span>Téléphone: +33 9 72 10 10 07</span>
						<span>Email: support@ovh.com</span>
					</Typography>
				</Box>
				<Box sx={{ mb: '15px' }}>
					<Typography
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							marginBottom: '10px',
						}}
						variant='h5'
						color='white'
						gutterBottom>
						Propriété intellectuelle
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Tout le contenu du site <b>innowebdigital.com</b>, incluant, de
						façon non limitative, les graphismes, images, textes, vidéos,
						animations, sons, logos, gifs et icônes ainsi que leur mise en forme
						sont la propriété exclusive de <b>DALLE PASQUALINE Mickael</b>, à
						l'exception des marques, logos ou contenus appartenant à d'autres
						sociétés partenaires ou auteurs.
					</Typography>
				</Box>
				<Box sx={{ mb: '15px' }}>
					<Typography
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							marginBottom: '10px',
						}}
						variant='h5'
						color='white'
						gutterBottom>
						Responsabilité
					</Typography>

					<Typography
						variant='body1'
						color='white'>
						<b>Innowebdigital.com</b> ne pourra également être tenu responsable
						des dommages indirects (tels par exemple qu'une perte de marché ou
						perte d'une chance) consécutifs à l'utilisation du site{' '}
						<b>innowebdigital.com</b>.
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						<b>Innowebdigital.com</b> décline toute responsabilité quant à
						l'utilisation qui pourrait être faite des informations et contenus
						présents sur <b>innowebdigital.com</b>.
					</Typography>
				</Box>
				<Box sx={{ mb: '15px' }}>
					<Typography
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							marginBottom: '10px',
						}}
						variant='h5'
						color='white'
						gutterBottom>
						Conditions générales d'utilisation
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Les services offerts par <b>innowebdigital.com</b> sont soumis à des
						conditions générales de vente disponibles.
					</Typography>
				</Box>
				<Box sx={{ mb: '15px' }}>
					<Typography
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							marginBottom: '10px',
						}}
						variant='h5'
						color='white'
						gutterBottom>
						Cookies
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						<b>Innowebdigital.com</b> utilise des cookies pour améliorer
						l'expérience utilisateur. En naviguant sur <b>innowebdigital.com</b>
						, vous acceptez l'utilisation des cookies. Vous pouvez désactiver
						les cookies en modifiant les paramètres de votre navigateur.
					</Typography>
				</Box>
				<Box sx={{ mb: '15px' }}>
					<Typography
						sx={{
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: 'bold',
							marginBottom: '10px',
						}}
						variant='h5'
						color='white'
						gutterBottom>
						Politiques de confidentialité
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Vous pouvez consulter notre politique de confidentialité{' '}
						<Link href='/Politique-de-confidentialite'>ici</Link>.
					</Typography>
				</Box>
			</Container>
			<Footer />
		</main>
	);
}
