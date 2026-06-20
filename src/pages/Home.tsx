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
