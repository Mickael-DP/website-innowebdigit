'use client';

import { Box, Card, CardContent, Typography } from '@mui/material';

interface ExpertiseCardProps {
	icon: any;
	title: string;
	description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
	icon,
	title,
	description,
}) => {
	return (
		<Card
			sx={{
				backgroundColor: '#181818',
				width: '287px',
				height: '291px',
				border: '2px solid #3C3C3C',
				borderRadius: '0px',
			}}>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Box
					sx={{
						color: '#59E2E8',
						marginBottom: '15px ',
                        
					}}>
					{icon}
				</Box>
				<Box>
					<Typography
						sx={{
							color: '#FFFFFF',
							fontSize: '1.4rem',
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '600',
							marginBottom: '15px ',
						}}>
						{title}
					</Typography>
					<Typography
						sx={{
							color: '#C9C9C9',
							fontFamily: 'Fira Sans, sans-serif',
							fontWeight: '500',
							fontSize: '1rem',
						}}>
						{description}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ExpertiseCard;
