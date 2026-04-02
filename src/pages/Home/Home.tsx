import './Home.css';
import Hero from './components/Hero';
import About from './components/About';
import MissionValues from './components/MissionValues';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';

const homeSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Raising Queens Foundation',
    url: 'https://raisingqueens.org.za/',
    logo: 'https://raisingqueens.org.za/images/logo.png',
    email: 'info@raisingqueens.org.za',
    telephone: '+27 81 407 6516',
    sameAs: [
      'https://www.facebook.com/share/19NDCD3vNG/',
      'https://www.instagram.com/raisingqueensfoundation',
      'https://www.linkedin.com/company/raisingqueensfoundation/',
      'https://www.tiktok.com/@raisingqueensfoundation',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '47 Maple Dr, Kyalami',
      addressLocality: 'Midrand',
      postalCode: '1684',
      addressCountry: 'ZA',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Raising Queens Foundation',
    url: 'https://raisingqueens.org.za/',
  },
];

const Home = () => {
  return (
    <div className="home">
      <SEO
        title="Raising Queens Foundation | Empowering Women and Girls in South Africa"
        description="Raising Queens Foundation supports women and girls through mentorship, events, community programs, and donations that create measurable local impact."
        path="/"
        image="/images/logo.png"
        keywords="women empowerment South Africa, girls mentorship NGO, donate to women foundation, community development"
        schema={homeSchema}
      />
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
