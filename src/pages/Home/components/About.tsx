import { useEffect, useRef, useState } from "react";
import "./About.css";

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, ref };
};

const About = () => {
  const youths = useCountUp(1000);
  const pads = useCountUp(1000);
  const partners = useCountUp(15);
  return (
    <section className="about">
      <div className="container">
        <div className="story-image">
          <img
            src="/images/IMG_7540.jpg"
            alt="Raising Queens Foundation"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Raising Queens Foundation was born out of both lived experience and
            a deep awareness of the challenges facing women and youth in South
            Africa. Our country continues to grapple with staggering gender
            inequalities, high levels of gender-based violence (GBV), and some
            of the highest youth unemployment rates in the world. For many girls
            and young women, these realities mean limited opportunities, cycles
            of poverty, and a lack of safe spaces where they can dream, grow,
            and thrive.
            <br />
            <br />
            For me, this mission is deeply personal. I come from a GBV
            background and was raised by a single mother who embodied both woman
            power and soft strength. Watching her resilience shaped my
            understanding of what true empowerment looks like — quiet courage,
            dignity, and the will to rise above circumstances. Yet I also knew
            how isolating it could feel to navigate these struggles without
            guidance.
            <br />
            <br />
            Raising Queens Foundation was my way of becoming the "older sister"
            I never had — someone who could walk alongside young girls and
            women, reminding them of their worth and equipping them with the
            tools to succeed. What started as a dream has grown into a movement:
            creating safe spaces, building digital and leadership skills, and
            breaking cycles of inequality.
            <br />
            <br />
            Our vision is simple but urgent — to raise a generation of Queens
            who are resilient, confident, and unstoppable, rewriting the
            narrative for women and youth in South Africa and beyond.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="number" ref={youths.ref}>
                {youths.count}+
              </span>
              <span className="label">Youths impacted</span>
            </div>
            <div className="stat">
              <span className="number" ref={pads.ref}>
                {pads.count}s
              </span>
              <span className="label">Pads Donated</span>
            </div>
            <div className="stat">
              <span className="number" ref={partners.ref}>
                {partners.count}+
              </span>
              <span className="label">Partnerships Annually</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
