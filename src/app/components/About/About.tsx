import { LinkedIn } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const About = () => {
	return (
		<Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingX:25,
            mt: 5,
            width: '100%',
        }}>
			<Box sx={{
                mr: 25,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
				<Typography
					variant='h3'
					gutterBottom
					color='white'>
					À propos de moi
				</Typography>
				<Typography
					variant='h6'
					gutterBottom
					color='white'>
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
					color='white'>
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
				<Box>
					<Button sx={{
                        backgroundColor: '#59E2E8',
                        borderRadius: 90,
                        padding:2,
                        color: 'black',
                        fontWeight: 'bold',
                        mr: 2,

                    }} endIcon={<FileDownloadIcon/>}>Télécharger mon CV -</Button>
					<Button  sx={{
                        backgroundColor: '#181818',
                        borderRadius: 180,
                        padding:2.5,
                        color: '#59E2E8',
                        fontWeight: 'bold',

                    }} >
						<LinkedIn />
					</Button>
				</Box>
			</Box>
			<Box>
				<img
					src='https://via.placeholder.com/450x560'
					alt='placeholder'
				/>
			</Box>
		</Box>
	);
};
export default About;
