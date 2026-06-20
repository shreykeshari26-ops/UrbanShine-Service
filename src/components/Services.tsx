import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Home, Building2, Droplets } from 'lucide-react';
import { servicesData } from '../lib/services';
import { cn } from '../lib/utils';

export default function Services() {
  // Let's feature a mix of highlighted services for the landing page
  const featuredServices = servicesData.filter(s => s.highlight).slice(0, 3);
  const otherServices = servicesData.filter(s => !s.highlight).slice(0, 3);
  const displayServices = [...featuredServices, ...otherServices];

  const getIconForCategory = (category: string, highlight?: boolean) => {
    const className = cn(
      "w-8 h-8", 
      highlight ? "text-accent-500" : "text-primary-500"
    );
    switch (category) {
      case 'Commercial Services':
        return <Building2 className={className} />;
      case 'Specialized Pressure Services':
        return <Droplets className={className} />;
      default:
        return <Home className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Expert cleaning for every space</h3>
          <p className="text-lg text-slate-600">
            Whether you need a quick touch-up or a comprehensive deep clean, our experienced team delivers exceptional results across domestic, commercial, and specialized environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <div 
              key={service.id} 
              className={cn(
                "group bg-white p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full",
                service.highlight ? 'ring-2 ring-accent-500 shadow-md relative' : 'shadow-sm border border-slate-100'
              )}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 -mt-3 mr-6 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  Most Popular
                </div>
              )}
              
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                service.highlight ? 'bg-accent-50 group-hover:bg-accent-100' : 'bg-primary-50 group-hover:bg-primary-100'
              )}>
                {service.highlight ? <Sparkles className="w-8 h-8 text-accent-500" /> : getIconForCategory(service.category)}
              </div>
              
              <span className="text-xs font-bold tracking-wider text-primary-600 uppercase mb-2 block">
                {service.category}
              </span>
              <h4 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.shortDescription}
              </p>
              
              <div className="mt-auto">
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center justify-center w-full py-3 px-4 bg-slate-50 hover:bg-primary-50 text-primary-600 font-semibold rounded-xl transition-colors group-hover:text-primary-700 border border-slate-100 group-hover:border-primary-100"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
          
          {/* Custom Plan Card */}
          <div className="group bg-gradient-to-br from-primary-600 to-slate-900 p-8 rounded-3xl text-white shadow-md flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary-500/30">
            <h4 className="text-2xl font-bold mb-4">Need a custom cleaning plan?</h4>
            <p className="text-primary-100 mb-8 leading-relaxed">We can tailor our services to fit your exact needs, industry requirements, and schedule.</p>
            <Link to="/#contact" className="bg-white text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-sm">
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

