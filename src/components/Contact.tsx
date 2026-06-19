import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-3">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Let's get your space sparkling</h3>
            <p className="text-lg text-slate-600 mb-10">
              Fill out the form to get a free, no-obligation quote. Our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase">Phone</h4>
                  <p className="text-xl font-bold text-slate-900">(555) 123-4567</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase">Email</h4>
                  <p className="text-xl font-bold text-slate-900">hello@urbanshine.com</p>
                  <p className="text-sm text-slate-500 mt-1">We typically reply within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase">Office</h4>
                  <p className="text-lg font-bold text-slate-900">123 Cleaning Blvd<br/>Dallas, TX 75201</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-8">Thank you for reaching out. We will get back to you within 24 hours with your free quote.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Quote</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                    <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none" placeholder="(555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                  <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-slate-700">Service Type</label>
                  <select required id="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-white text-slate-700 appearance-none">
                    <option value="" disabled selected>Select a service</option>
                    <option value="home">Home Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move">Move-In / Move-Out</option>
                    <option value="office">Office Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Additional Details</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none" placeholder="Tell us about your space and any specific requirements..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 mt-4"
                >
                  {formState === 'submitting' ? 'Sending...' : (
                    <>
                      Get My Free Quote
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  We respond within 24 hours. No commitment required.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
