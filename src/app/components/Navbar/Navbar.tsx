"use client";

import React from 'react';
import Link from 'next/link';
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
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logoSite from '../../assets/Logoentreprise.png';

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
	{ text: 'Accueil', href: '#' },
	{ text: 'Expertise', href: '#expertise' },
	{ text: 'A propos', href: '#apropos' },
];

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
					<ListItem key={item.text} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<Link href={`/${item.href.toLowerCase().replace(/\s+/g, '')}`}>
								<ListItemText primary={item.text} sx={{ color: '#fff' }} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider sx={{ backgroundColor: 'white', mb: 2, mx: 3 }} />
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button variant='solid' sx={{ backgroundColor: '#59E2E8' }}>
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
			<AppBar component='nav' sx={{ backgroundColor: '#000' }}>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: { sm: 'space-between', xs: 'space-between' },
						alignItems: { sm: 'center', xs: 'center' },
						mx: { sm: 21, xs: 1 },
					}}>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<img
							src={logoSite.src}
							alt='logo'
							style={{ width: '400px', height: 'auto' }}
						/>
					</Box>

					<Box sx={{ mr: 1, display: { sm: 'none', xs: 'block' } }}>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}>
							<MenuRoundedIcon />
						</IconButton>
					</Box>

					<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
						<img
							src={logoSite.src}
							alt='logo'
							style={{ width: '170px', height: 'auto' }}
						/>
					</Box>

					<Box sx={{ display: { xs: 'none', sm: 'block' },  }}>
						{navItems.map((item) => (
							<Link key={item.text} href={`/${item.href.toLowerCase().replace(/\s+/g, '')}`}>
								<Button
									variant='plain'
									size='lg'
									sx={{
										color: '#fff',
										fontFamily: 'Fira Sans, sans-serif',
										fontWeight: '500',
										'&:hover': {
											backgroundColor: '#59E2E8',
											color: '#000000',
										},

									}}>
									{item.text}
								</Button>
							</Link>
						))}
						<Link href={`/#contact`}>
						
						<Button
							variant='solid'
							sx={{
								ml:{sm: 3},
								backgroundColor: '#59E2E8',
								color: '#000000',
								fontFamily: 'Fira Sans, sans-serif',
								fontWeight: 'bold',
								'&:hover': {
											backgroundColor: '#59E2E8',
											color: '#ffffff',
										},
							}}
							endDecorator={<ArticleIcon />}>
							ME CONTACTER
						</Button>
						</Link>
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
						fontFamily: 'Fira Sans, sans-serif',
						fontWeight: 'bold',
					}}>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
};

export default Navbar;
