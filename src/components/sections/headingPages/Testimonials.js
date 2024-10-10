import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
const testimonials = [
    {
      name: "Sophia Rodriguez",
      description: "Little Lemon offers a delightful culinary experience. Every dish was bursting with flavor!"
    },
    {
      name: "Liam Walker",
      description: "The atmosphere is cozy and the food is absolutely amazing. Perfect for a weekend dinner."
    },
    {
      name: "Olivia Kim",
      description: "Their Mediterranean dishes are the best I've had in the city. Highly recommend the hummus platter!"
    },
    {
      name: "Ethan Brooks",
      description: "Wonderful service and excellent food. The pita bread was so fresh, I couldn’t get enough!"
    },
    {
      name: "Emma Patel",
      description: "Came here with friends, and we were all blown away by the freshness of the ingredients. We'll be back!"
    },
    {
      name: "Aiden Scott",
      description: "After a long day of work, this place was the perfect spot to relax and enjoy a delicious meal."
    },
    {
      name: "Mia Thompson",
      description: "The flavors were bold and authentic. I loved the grilled chicken with the lemon herb sauce!"
    },
    {
      name: "Noah Bennett",
      description: "The food and service were exceptional. I’ll definitely be returning for another dinner!"
    }
  ];
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>
            <section className="testimonials-cards">
            {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          description={testimonial.description}
        />
      ))}
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}