import './Home.css';
import Hero from './components/Hero';
import About from './components/About';
import MissionValues from './components/MissionValues';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <MissionValues />
      <Team />
      <Testimonials />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
