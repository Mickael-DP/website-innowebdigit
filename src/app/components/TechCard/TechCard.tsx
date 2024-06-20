"use client";

import { Card, CardContent } from '@mui/joy';
import { Box } from '@mui/material';

interface TechCardProps {
    logoTech: string;
}

const TechCard: React.FC<TechCardProps> = ({ logoTech }) => {
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
					src={logoTech}
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
