import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-200/50 blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-200/40 blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-100 text-accent-700 font-medium text-sm mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>Top-rated cleaning service in Dallas, TX</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Professional Cleaning Services <span className="text-primary-600">You Can Trust</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Reliable, affordable, and high-quality cleaning for homes and offices. We handle the mess so you can focus on what matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#pricing" 
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-slate-300 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                View Pricing
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="font-bold text-slate-800">500+</span> local families</p>
            </div>
          </div>

          <div className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Sparkling clean modern living room" 
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">100% Satisfaction</p>
                <p className="text-sm text-slate-500">Guaranteed on every clean</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
