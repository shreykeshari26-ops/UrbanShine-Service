import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ShieldCheck, Clock, ThumbsUp, Sparkles, UserCheck } from 'lucide-react';
import { getServiceById } from '../lib/services';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = getServiceById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const whyChooseUsFeatures = [
    { icon: ShieldCheck, title: "Fully Insured", text: "Peace of mind with our comprehensive liability coverage." },
    { icon: UserCheck, title: "Vetted Professionals", text: "Background-checked, trained, and highly experienced staff." },
    { icon: Sparkles, title: "Premium Products", text: "We use top-tier, eco-friendly cleaning solutions." },
    { icon: ThumbsUp, title: "100% Satisfaction", text: "We re-clean for free if you aren't completely satisfied." }
  ];

  const processSteps = [
    { num: "01", title: "Consultation", text: "We assess your space and understand your unique cleaning requirements." },
    { num: "02", title: "Customized Plan", text: "We develop a tailored cleaning checklist and schedule that works for you." },
    { num: "03", title: "Expert Cleaning", text: "Our professional team executes the plan with meticulous attention to detail." },
    { num: "04", title: "Quality Check", text: "A final walkthrough ensures our high standards and your satisfaction are met." }
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative mb-12">
          <div className="h-4 bg-accent-500 w-full absolute top-0 left-0"></div>
          
          <div className="p-8 md:p-12 mt-4">
            <div className="mb-8 border-b border-slate-100 pb-8">
              <span className="text-sm font-bold tracking-wider text-accent-600 uppercase mb-3 block">
                {service.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
                {service.fullDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Service Checklist</h3>
                <ul className="space-y-4">
                  {service.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Pricing Estimate</h3>
                  <p className="text-3xl font-extrabold text-accent-600 mb-2">
                    {service.mockPricing.split(' ')[0]}
                    {service.mockPricing.includes(' ') && (
                      <span className="text-base font-normal text-slate-500 ml-2">
                        {service.mockPricing.substring(service.mockPricing.indexOf(' '))}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-slate-500 mb-8">
                    *Final price depends on property size and condition.
                  </p>
                  
                  <Link 
                    to="/#contact"
                    className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl font-bold transition-all hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Request Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Experience the UrbanShine difference with our unwavering commitment to quality and trust.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUsFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-primary-50 p-3 rounded-xl h-fit">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our 4-Step Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">How we deliver consistent, spotless results every time.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 relative overflow-hidden group hover:border-primary-200 transition-colors">
                <span className="absolute -top-4 -right-4 text-8xl font-black text-slate-50 group-hover:text-primary-50 transition-colors z-0">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </main>
  );
}
