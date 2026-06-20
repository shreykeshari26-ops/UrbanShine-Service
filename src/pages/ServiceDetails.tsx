import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
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

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative">
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
        
      </div>
    </main>
  );
}
