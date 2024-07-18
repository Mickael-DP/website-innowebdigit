import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';
import { Container, Typography, Box, List, ListItem } from '@mui/material';

export default function Politiquedeconfidentialite() {
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
					Politique de confidentialité
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
						Collecte des informations
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Nous collectons les informations suivantes :
					</Typography>
					<List sx={{ color: 'white' }}>
						<ListItem>- Nom</ListItem>
						<ListItem>- Prénom</ListItem>
						<ListItem>- Adresse électronique</ListItem>
						<ListItem>- Numéro de téléphone</ListItem>
					</List>
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
						Utilisation des informations
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Les informations que nous collectons sont utilisées pour :
					</Typography>
					<List sx={{ color: 'white' }}>
						<ListItem>
							- Améliorer le service client et répondre à vos besoins de support
						</ListItem>
						<ListItem>
							- Personnaliser votre expérience et répondre à vos besoins
							individuels
						</ListItem>
						<ListItem>- Améliorer notre site web</ListItem>
						<ListItem>
							- Vous contacter par email ou téléphone pour des informations et
							offres relatives à nos services
						</ListItem>
					</List>
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
						Confidentialité des informations
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Nous sommes les seuls propriétaires des informations collectées sur
						ce site. Vos informations personnelles ne seront pas vendues,
						échangées, transférées ou données à une autre société pour n'importe
						quelle raison, sans votre consentement, en dehors de ce qui est
						nécessaire pour répondre à une demande et/ou transaction.
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
						Partage des informations avec des tiers
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Nous ne vendons, n'échangeons et ne transférons pas vos informations
						personnelles identifiables à des tiers. Cela ne comprend pas les
						tierces parties de confiance qui nous aident à exploiter notre site
						Web ou à conduire nos affaires, tant que ces parties conviennent de
						garder ces informations confidentielles.
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
						Protection des informations
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Nous mettons en œuvre une variété de mesures de sécurité pour
						préserver la sécurité de vos informations personnelles. Nous
						utilisons un cryptage à la pointe de la technologie pour protéger
						les informations sensibles transmises en ligne. Nous protégeons
						également vos informations hors ligne. Seuls les employés qui ont
						besoin d'effectuer un travail spécifique (par exemple, la
						facturation ou le service à la clientèle) ont accès aux informations
						personnelles identifiables. Les ordinateurs et serveurs utilisés
						pour stocker des informations personnelles identifiables sont
						conservés dans un environnement sécurisé.
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
						Durée de conservation des données
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Nous conservons vos données personnelles uniquement aussi longtemps
						que nécessaire pour les finalités pour lesquelles elles ont été
						collectées, notamment pour satisfaire à toute exigence légale,
						comptable ou de rapport.
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
						Vos droits
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Conformément au RGPD, vous disposez des droits suivants :
					</Typography>
					<List sx={{ color: 'white' }}>
						<ListItem>
							- Droit d'accès : Vous avez le droit de demander une copie des
							informations que nous détenons sur vous.
						</ListItem>
						<ListItem>
							- Droit de rectification : Vous avez le droit de corriger les
							données inexactes ou incomplètes que nous détenons sur vous.
						</ListItem>
						<ListItem>
							- Droit à l'oubli : Dans certaines circonstances, vous pouvez
							demander la suppression des données que nous détenons sur vous.
						</ListItem>
						<ListItem>
							- Droit de restriction du traitement : Dans certaines conditions,
							vous avez le droit de demander que nous restreignions le
							traitement de vos données personnelles.
						</ListItem>
						<ListItem>
							- Droit à la portabilité des données : Vous avez le droit de
							demander que les données que nous détenons sur vous soient
							transférées à une autre organisation.
						</ListItem>
						<ListItem>
							- Droit d'opposition : Vous avez le droit de vous opposer à certains
							types de traitement.
						</ListItem>
					</List>
					<Typography
						variant='body1'
						color='white'>
						Pour exercer ces droits, vous pouvez nous contacter à <b>contact@innowebdigital</b>.
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
						Consentement
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						En utilisant notre site, vous consentez à notre politique de
						confidentialité.
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
						Modifications de notre politique de confidentialité
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Nous nous réservons le droit de modifier cette politique de
						confidentialité à tout moment. Toutes les modifications prendront
						effet immédiatement après leur publication sur le site. Nous vous
						encourageons à consulter régulièrement cette page pour prendre
						connaissance de toute modification.
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
						Contactez-nous
					</Typography>
					<Typography
						variant='body1'
						color='white'>
						Si vous avez des questions concernant cette politique de
						confidentialité, vous pouvez nous contacter à l'adresse suivante: 
						<b> contact@innowebdigital.com</b>.
					</Typography>
				</Box>
			</Container>
			<Footer />
		</main>
	);
}
