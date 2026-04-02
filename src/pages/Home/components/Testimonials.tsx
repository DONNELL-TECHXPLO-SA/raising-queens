import { useState, useEffect } from 'react';
import './Testimonials.css';

interface Testimonial {
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Lerato M',
    image: '/images/image0.jpeg',
    text: 'Before joining Raising Queens, I had no idea what I wanted to do after school. The mentorship program gave me confidence, taught me how to set goals, and reminded me that dreams are valid. Today, I\'m studying at university because of the encouragement I received from the amazing women at the foundation.'
  },
  {
    name: 'Nomsa D',
    image: '/images/image2.jpeg',
    text: 'The foundation supported me at my lowest. They helped with food parcels and sanitary products when I couldn\'t afford them. But more than that, they gave me hope and a community where I feel like I belong.'
  },
  {
    name: 'Ayanda N',
    image: '/images/image1.jpeg',
    text: 'Attending the \'Rise the Bar\' event was such a powerful experience. Being in a room full of strong, supportive women reminded me that I am not alone in my journey. I left feeling motivated to chase my goals with confidence.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials">
      <h1>Success Stories</h1>
      <p>
        Raising Queens Foundation has been impacting lives since 2018. Women and youth empowerment is an important goal in achieving sustainable 
        development worldwide. Our purpose is to advocate for South Africa's women and youth's rights until the cycles of poverty are broken and 
        there is transformation in gender equality.
      </p>

      <div className="carousel-container">
        <div className="testimonial-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-box" key={index}>
              
              <p>{testimonial.text}</p>
              <h2>{testimonial.name}</h2>
            </div>
          ))}
        </div>

        <button className="prev-testimonial" onClick={handlePrev}>&#10094;</button>
        <button className="next-testimonial" onClick={handleNext}>&#10095;</button>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
