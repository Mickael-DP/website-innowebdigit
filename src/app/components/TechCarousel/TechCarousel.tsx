'use client';

import { Box } from '@mui/material';
import TechCard from '../TechCard/TechCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoJS from '../../assets/logoTech/logoJS.png';
import logoWordpress from '../../assets/logoTech/logoWordpress.png';
import logoNode from '../../assets/logoTech/logoNode.svg.png';
import logoMui from '../../assets/logoTech/logoMaterialui.png';
import logoFigma from '../../assets/logoTech/logoFigma.png';
import logoWebflow from '../../assets/logoTech/logoWebglow.svg';
import logoHtml from '../../assets/logoTech/logoHTML.svg.png';
import logoCss from '../../assets/logoTech/logoCSS.png';
import logoBootstrap from '../../assets/logoTech/logoBootstrap.svg.png';
import logoReact from '../../assets/logoTech/logoReact.svg.png';
import logoStrapi from '../../assets/logoTech/logoStrapi.svg';
import { lazy } from 'react';

const cards = [
	{ id: 1, logoTech: logoWordpress },
	{ id: 2, logoTech: logoWebflow },
	{ id: 3, logoTech: logoStrapi },
	{ id: 4, logoTech: logoReact },
	{ id: 5, logoTech: logoNode },
	{ id: 6, logoTech: logoMui },
	{ id: 7, logoTech: logoFigma },
	{ id: 8, logoTech: logoJS },
	{ id: 9, logoTech: logoHtml },
	{ id: 10, logoTech: logoCss },
	{ id: 11, logoTech: logoBootstrap },
];

const TechCarousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 0,
		cssEase: 'linear',
	};

	return (
		<Box sx={{ width: '100%', my: 10 }}>
			<Slider {...settings}>
				{cards.map((card) => (
					<TechCard
						key={card.id}
						card={card}
					/>
				))}
			</Slider>
		</Box>
	);
};

export default TechCarousel;
