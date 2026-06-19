import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import TrustBar from './components/TrustBar.tsx';
import Services from './components/Services.tsx';
import Pricing from './components/Pricing.tsx';
import BeforeAfter from './components/BeforeAfter.tsx';
import Testimonials from './components/Testimonials.tsx';
import CTABanner from './components/CTABanner.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import FloatingButtons from './components/FloatingButtons.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
