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

const drawerWidth = 400;
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
			sx={{ textAlign: 'center', backgroundColor: '#000', color: '#fff' , marginTop: '20px'}}>
			<Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
			<Link href='/'>
				<Box
					component='img'
					src={logoSite.src}
					alt='logo'
					sx={{ width: '180px', height: 'auto' }}
				/>
				</Link>
			</Box>
			<Divider sx={{ backgroundColor: 'white', mx: 3}} />
			<List >
				{navItems.map((item) => (
					<ListItem key={item.text} disablePadding>
						<ListItemButton sx={{ textAlign: 'center', display:'flex', justifyContent:'center' }}>
							<Link href={`/${item.href.toLowerCase().replace(/\s+/g, '')}`}>
								<ListItemText primary={item.text} sx={{ color: '#fff' }} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider sx={{ backgroundColor: 'white', mb: 3, mx: 3 }} />
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Link href={`/#contact`}>
				<Button variant='solid' sx={{ backgroundColor: '#59E2E8', color:'#000000'}}>
					Me Contacter - <ArticleIcon />
				</Button>
				</Link>
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
						justifyContent: { sm: 'space-between', xs: 'space-between', md: 'space-between' },
						alignItems: { sm: 'center', xs: 'center' },
						mx: { sm: 0, xs: 1, md: 5, lg: 9, xl: 21},
						padding: { sm: 3, xs: 1, md: 1 },
					}}>
					<Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
						<Link href='/'>
						
						<Box
							component='img'
							src={logoSite.src}
							alt='logo'
							sx={{ width: {sm: '200px', md:'250px', lg:'280px', xl: '350px'}, height: 'auto' }}
						/>
						</Link>
					</Box>

					<Box sx={{ mr: 1, display: { md:'none' ,sm: 'block', xs: 'block' } }}>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}>
							<MenuRoundedIcon />
						</IconButton>
					</Box>

					<Box sx={{ display: { xs: 'block', sm: 'block', md:'none' } }}>
						<Box
							component='img'
							src={logoSite.src}
							alt='logo'
							sx={{ width: {xs:'170px', sm: '250px'}, height: 'auto' }}
						/>
					</Box>

					<Box sx={{ display: { xs: 'none', sm:'none', md: 'block' },  }}>
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
						display: { xs: 'block', sm: 'block', md:'none' },
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
