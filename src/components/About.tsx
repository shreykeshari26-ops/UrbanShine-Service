import { ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cleaning staff" 
                className="rounded-3xl object-cover h-64 w-full shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Clean room" 
                className="rounded-3xl object-cover h-64 w-full shadow-lg"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-36 h-36">
              <span className="text-4xl font-extrabold text-primary-600">10+</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-wider text-center">Years Exp</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Your trusted local cleaning experts</h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At UrbanShine Services, we believe that a clean home is a happy home. For over a decade, we've been providing top-tier cleaning services to families and businesses. 
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We know inviting someone into your space requires trust. That's why every member of our team is fully insured, thoroughly background-checked, and rigorously trained to meet our high standards.
            </p>

            <div className="space-y-4 mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Fully Insured & Bonded</h4>
                  <p className="text-slate-500 text-sm">Your property is completely protected.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-2 rounded-full text-primary-600 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Background-Checked Staff</h4>
                  <p className="text-slate-500 text-sm">Only trusted professionals in your home.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-accent-500" />
                <h4 className="font-bold text-slate-900 text-xl">Service Area</h4>
              </div>
              <p className="text-slate-600">
                Proudly serving <span className="font-bold text-slate-800">Dallas, Texas</span> and surrounding metropolitan areas. Contact us to see if we cover your neighborhood!
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
