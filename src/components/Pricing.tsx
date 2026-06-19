import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Basic Cleaning",
      price: "50",
      description: "Perfect for regular upkeep and maintaining a tidy home.",
      features: [
        "Dusting all accessible surfaces",
        "Wiping down kitchen counters",
        "Basic bathroom cleaning",
        "Vacuuming and mopping floors",
        "Emptying trash bins"
      ],
      isPopular: false
    },
    {
      name: "Deep Cleaning",
      price: "120",
      description: "Our most comprehensive clean for a sparkling fresh start.",
      features: [
        "Everything in Basic Cleaning",
        "Cleaning inside cabinets & drawers",
        "Scrubbing tile grout",
        "Baseboards and door frames",
        "Interior window cleaning"
      ],
      isPopular: true
    },
    {
      name: "Move-Out Cleaning",
      price: "180",
      description: "Ensure you get your deposit back with our detailed service.",
      features: [
        "Everything in Deep Cleaning",
        "Inside refrigerator & oven",
        "Deep carpet vacuuming",
        "Spot cleaning walls",
        "Thorough sanitization"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-3">Simple Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Choose the perfect clean for you</h3>
          <p className="text-lg text-slate-600">
            Transparent pricing with no hidden fees. All cleaning supplies and equipment are included.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl transition-all duration-300 ${
                plan.isPopular 
                  ? 'ring-4 ring-accent-500 shadow-2xl scale-100 md:scale-105 z-10 p-8' 
                  : 'border border-slate-100 shadow-md hover:shadow-lg p-8'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-accent-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex justify-center items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-900">$</span>
                  <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium">/visit</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-accent-500 hover:bg-accent-600 text-white shadow-md hover:shadow-lg' 
                    : 'bg-primary-50 hover:bg-primary-100 text-primary-700'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm font-medium">
            * Custom pricing available — <a href="#contact" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">contact us</a> for a tailored quote.
          </p>
        </div>

      </div>
    </section>
  );
}
