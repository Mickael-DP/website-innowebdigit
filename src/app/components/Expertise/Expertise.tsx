import { Box, Container, Typography, Grid } from '@mui/material';
import ExpertiseCard from '../ExpertiseCard/ExpertiseCard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SettingsIcon from '@mui/icons-material/Settings';
import BrushIcon from '@mui/icons-material/Brush';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import React from 'react';

const Expertise = () => {
    return (
     
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
					width: '100%',
					paddingX:25,
                }}
            >
                <Grid container spacing={5} justifyContent='center' mb={5}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ExpertiseCard
                            icon={<AutoAwesomeIcon sx={{ fontSize:'3em', marginBottom:'30px'}} />}
                            title='Développement Front-end'
                            description="Permettre aux utilisateurs d'interagir de manière intuitive et fluide avec mes sites"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ExpertiseCard
                            icon={<SettingsIcon sx={{ fontSize:'3em', marginBottom:'30px'}}   />}
                            title='Développement Back-end'
                            description="Concevoir des systèmes solides et performants pour gérer vos données"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} justifyContent='center'>
                        <Typography variant='h4' gutterBottom color='white'>
                            Mon expertise web à votre disposition
                        </Typography>
                        <Typography variant='body1' gutterBottom color='white'>
						Besoin d&apos;un développeur web spécialiste pour des missions ponctuelles ? <br />
						Je suis là pour répondre à tous ces besoins spécifiques.
                        </Typography>
                    </Grid>
					</Grid>
					<Grid container spacing={5} justifyContent='center'>
                    <Grid item xs={12} sm={6} md={3}>
                        <ExpertiseCard
                            icon={<BrushIcon sx={{ fontSize:'3em', marginBottom:'30px'}}/>}
                            title='UX / UI'
                            description="Créer des interfaces attractives et faciles à utiliser"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ExpertiseCard
                            icon={<SmartphoneIcon sx={{ fontSize:'3em', marginBottom:'30px'}} />}
                            title='Responsive'
                            description="Assurer une expérience fluide sur tous les appareils"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ExpertiseCard
                            icon={<SearchIcon sx={{ fontSize:'3em', marginBottom:'30px'}}  />}
                            title='SEO'
                            description="Optimiser votre site pour les moteurs de recherche et améliorer sa visibilité"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ExpertiseCard
                            icon={<BuildIcon sx={{ fontSize:'3em', marginBottom:'30px'}} />}
                            title='CMS'
                            description="Permettre aux utilisateurs de gérer le contenu facilement et efficacement"
                        />
                    </Grid>
                </Grid>
            </Box>
    
    );
};

export default Expertise;
