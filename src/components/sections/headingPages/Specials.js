import Carousel from './SpecialsCarousel';
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
export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
            {specials.map((special, index) => (
        <SpecialCard
          key={index}
          name={special[0]} // Dish name
          price={special[1]} // Price
          description={special[2]} // Description
          image={special[3]} // Image
        />
      ))}
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}