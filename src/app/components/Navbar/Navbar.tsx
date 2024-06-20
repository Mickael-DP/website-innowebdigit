'use client';

import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	CssBaseline,
	IconButton,
	Drawer,
	ListItemText,
	AppBar,
	Toolbar,
} from '@mui/material';
import Button from '@mui/joy/Button';
import ArticleIcon from '@mui/icons-material/Article';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import React from 'react';
import logoSite from '../../assets/IMG_3431-removebg-preview.png';

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Accueil', 'Expertise', 'A propos', 'Avis'];

const Navbar = (props: Props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<img
					src={logoSite.src}
					alt='logo'
					style={{ width: '180px', height: 'auto' }}
				/>
			</Box>
			<Divider sx={{ backgroundColor: 'white', mx: 3 }} />
			<List>
				{navItems.map((item) => (
					<ListItem
						key={item}
						disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider sx={{ backgroundColor: 'white', mb: 2, mx: 3 }} />
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					variant='solid'
					sx={{ backgroundColor: '#59E2E8' }}>
					Contact
				</Button>
			</Box>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				component='nav'
				sx={{ backgroundColor: '#000' }}>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<img
							src={logoSite.src}
							alt='logo'
							style={{ width: '400px', height: 'auto' }}
						/>
					</Box>
					<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
						<img
							src={logoSite.src}
							alt='logo'
							style={{ width: '200px', height: 'auto' }}
						/>
					</Box>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='end'
						onClick={handleDrawerToggle}
						sx={{ mr: 1, display: { sm: 'none' } }}>
						<DragHandleIcon />
					</IconButton>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button
								variant='plain'
								size='lg'
								key={item}
								sx={{ color: '#fff' }}>
								{item}
							</Button>
						))}
					</Box>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<Button
							variant='solid'
							sx={{ backgroundColor: '#59E2E8' }}
							endDecorator={<ArticleIcon />}>
							ME CONTACTER
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
							backgroundColor: '#000',
						},
						backgroundColor: '#000',
					}}>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
};

export default Navbar;
