import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import SpaghettiCarbonara from '../../../assets/food/pasta1.jpg';
import  GrilledSteak from '../../../assets/food/grilled.jpg';
import  GrilledSalmon from '../../../assets/food/salmon.jpg';
import SpecialCard from './CardInfo/SpecialCard';

const specials = [
    // Pasta Dish
    [
      "Spaghetti Carbonara",
      "$14.50",
      "Creamy sauce with pancetta, parmesan, and black pepper",
      SpaghettiCarbonara
    ],
    // Meat Dish
    [
      "Grilled Steak",
      "$22.50",
      "Juicy steak served with garlic butter and roasted vegetables",
      GrilledSteak
    ],
    // Fish Dish
    [
      "Grilled Salmon",
      "$20.50",
      "Perfectly grilled salmon with lemon butter sauce and asparagus",
      GrilledSalmon
    ]
  ];
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
             {specials.map((special, index) => (
        <SpecialCard
          key={index}
          name={special[0]} // Dish name
          price={special[1]} // Price
          description={special[2]} // Description
          image={special[3]} // Image
        />
      ))}
        </Carousel>
    )
}