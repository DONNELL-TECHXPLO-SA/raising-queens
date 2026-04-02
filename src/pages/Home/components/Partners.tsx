import { useEffect, useRef } from 'react';
import './Partners.css';

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: 'Rays of Hope', logo: '/images/ROH logo.png' },
  { name: 'For Good', logo: '/images/For-Good.jpg' },
  { name: 'Frida Hartley Shelter', logo: '/images/frida hartley shelter.png' },
  { name: 'Momentum', logo: '/images/momentum.png' },
  { name: 'Sisonke Foundation', logo: '/images/sisonke_wellness_foundation_logo.jpeg' },
  { name: 'Virgin Active', logo: '/images/Virgin-Active_Logo.png' },
  { name: 'Leap', logo: '/images/leap.png' },
  { name: 'Shibe\'s Creative Kids', logo: '/images/Shibes Creative Kids.jpg' },
  { name: 'Panda', logo: '/images/Panda Logo.jpg' },
  { name: 'WMC International', logo: '/images/WMC Logo.jpg' },
  { name: 'VSC', logo: '/images/VSC Logo.jpg' }
];

const Partners = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      if (position <= -track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="partners-section">
      <div className="partners-header">
        <h2>Our Partners</h2>
        <p>We collaborate with amazing organizations to empower the youth.</p>
      </div>

      <div className="partners-carousel">
        <div className="carousel-track" ref={trackRef}>
          {[...partners, ...partners].map((partner, index) => (
            <div className="partner" key={index}>
              <img src={partner.logo} alt={partner.name} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="partners-cta">
        <p>Interested in becoming a partner?</p>
        <a href="#contact" className="partner-link">Become a Partner</a>
      </div>
    </section>
  );
};

export default Partners;
