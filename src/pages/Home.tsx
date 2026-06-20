import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Pricing />
      <BeforeAfter />
      <Testimonials />
      <CTABanner />
      <About />
      <Contact />
    </main>
  );
}
