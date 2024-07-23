'use client';

import { Card, CardContent } from '@mui/joy';
import { Box } from '@mui/material';
import { StaticImageData } from 'next/image';
import { useTheme } from '@mui/material/styles';

interface TechCardProps {
	card: {
	  id: number;
	  logoTech: StaticImageData;
	};
}

const TechCard: React.FC<TechCardProps> = ({ card }) => {
	const theme = useTheme();

	return (
		<Card
			variant='solid'
			sx={{
				backgroundColor: '#181818',
				width: { xs: '150px', sm: '200px', md: '210px', lg: '230px' },
				height: { xs: '90px', sm: '120px', md: '115px', lg: '130px' },
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
			}}>
			<CardContent
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
				}}>
				<Box
					component='img'
					src={card.logoTech.src}
					alt='Logo'
					sx={{
						width: { xs: '50px', sm: '75px', md: '100px' },
						height: 'auto',
					}}
				/>
			</CardContent>
		</Card>
	);
};

export default TechCard;
