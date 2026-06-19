import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Clean modern home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/85 mix-blend-multiply"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to get your home cleaned today?
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of happy customers in Dallas. Book your cleaning service in less than 60 seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex justify-center items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="tel:+1234567890" 
            className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/30"
          >
            Call (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
