import { Home, Sparkles, Key, Briefcase, Grid } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-primary-500" />,
      title: "Home Cleaning",
      description: "Standard cleaning to keep your home fresh, tidy, and welcoming week after week.",
      highlight: false
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent-500" />,
      title: "Deep Cleaning",
      description: "A thorough top-to-bottom clean, hitting all those hard-to-reach spots and neglected areas.",
      highlight: true
    },
    {
      icon: <Key className="w-8 h-8 text-primary-500" />,
      title: "Move-In / Move-Out",
      description: "Get your full deposit back or step into a spotless new home. We handle the heavy lifting.",
      highlight: false
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary-500" />,
      title: "Office Cleaning",
      description: "Professional cleaning to maintain a productive and healthy environment for your team.",
      highlight: false
    },
    {
      icon: <Grid className="w-8 h-8 text-primary-500" />,
      title: "Carpet Cleaning",
      description: "Revitalize your carpets with deep extraction that removes stains, odors, and allergens.",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Expert cleaning for every space</h3>
          <p className="text-lg text-slate-600">
            Whether you need a quick touch-up or a comprehensive deep clean, our experienced team delivers exceptional results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                service.highlight ? 'ring-2 ring-accent-500 shadow-md relative' : 'shadow-sm border border-slate-100'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 -mt-3 mr-6 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  Most Popular
                </div>
              )}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                service.highlight ? 'bg-accent-50 group-hover:bg-accent-100' : 'bg-primary-50 group-hover:bg-primary-100'
              }`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                  Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
          
          {/* Extra placeholder for symmetry */}
          <div className="group bg-gradient-to-br from-primary-500 to-primary-600 p-8 rounded-3xl text-white shadow-md flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl">
            <h4 className="text-2xl font-bold mb-4">Need a custom cleaning plan?</h4>
            <p className="text-primary-100 mb-8">We can tailor our services to fit your exact needs and schedule.</p>
            <a href="#contact" className="bg-white text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors">
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
