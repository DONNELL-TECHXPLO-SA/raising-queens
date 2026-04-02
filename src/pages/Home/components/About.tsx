import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="story-image">
          <img src="/images/IMG_7540.jpg" alt="Raising Queens Foundation" />
        </div>
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Raising Queens Foundation was born out of both lived experience and a deep awareness of the challenges facing women and youth 
            in South Africa. Our country continues to grapple with staggering gender inequalities, high levels of gender-based violence (GBV), 
            and some of the highest youth unemployment rates in the world. For many girls and young women, these realities mean limited 
            opportunities, cycles of poverty, and a lack of safe spaces where they can dream, grow, and thrive.<br /><br />
            For me, this mission is deeply personal. I come from a GBV background and was raised by a single mother who embodied both woman 
            power and soft strength. Watching her resilience shaped my understanding of what true empowerment looks like — quiet courage, 
            dignity, and the will to rise above circumstances. Yet I also knew how isolating it could feel to navigate these struggles without 
            guidance.<br /><br />
            Raising Queens Foundation was my way of becoming the "older sister" I never had — someone who could walk alongside young girls 
            and women, reminding them of their worth and equipping them with the tools to succeed. What started as a dream has grown into a 
            movement: creating safe spaces, building digital and leadership skills, and breaking cycles of inequality.<br /><br />
            Our vision is simple but urgent — to raise a generation of Queens who are resilient, confident, and unstoppable, 
            rewriting the narrative for women and youth in South Africa and beyond.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="number">1000+</span>
              <span className="label">Youths impacted</span>
            </div>
            <div className="stat">
              <span className="number">1000s</span>
              <span className="label">Pads Donated</span>
            </div>
            <div className="stat">
              <span className="number">15+</span>
              <span className="label">Partnerships Annually</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
