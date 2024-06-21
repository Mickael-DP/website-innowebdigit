"use client";

import { Card, CardContent } from '@mui/joy';
import { Box } from '@mui/material';
import { StaticImageData } from 'next/image';


interface TechCardProps {
	card: {
	  id: number;
	  logoTech: StaticImageData;
	};
  }

const TechCard: React.FC<TechCardProps> = ({ card }) => {
	return (
		<Card
			variant='solid'
			sx={{
				backgroundColor: '#181818',
				width: '230px',
				height: '135px',
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
						width: '70px', 
						height: 'auto',
					}}
				/>
			</CardContent>
		</Card>
	);
};

export default TechCard;
