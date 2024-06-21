"use client";

import { Box } from "@mui/material";
import TechCard from "../TechCard/TechCard";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoJS from '../../assets/logoTech/logoJS.png';
import logoWordpress from '../../assets/logoTech/logoWordpress.png';
import logoNode from '../../assets/logoTech/logoNode.svg.png'
import logoMui from '../../assets/logoTech/logoMaterialui.png';
import logoFigma from '../../assets/logoTech/logoFigma.png';
import { lazy } from "react";

const cards = [
    { id: 1, logoTech: logoJS },
    { id: 2, logoTech: logoWordpress },
    { id: 3, logoTech: logoNode },
    { id: 4, logoTech: logoMui },
    { id: 5, logoTech: logoFigma },
    
    // Ajoutez plus de cartes ici si nécessaire
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
        cssEase: "linear",
      };
    
      return (
        <Box sx={{ width: '100%', my:10}}>
          <Slider {...settings}>
            {cards.map((card) => (
              <TechCard card={card} />
            ))}
          </Slider>
        </Box>
      );
    };

export default TechCarousel;