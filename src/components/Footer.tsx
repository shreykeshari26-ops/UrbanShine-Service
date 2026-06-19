import { Sparkles, Share2, MessageCircle, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                UrbanShine
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Professional, reliable, and high-quality cleaning services for homes and offices in the Dallas area. We make your space shine.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Home Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Move-In / Move-Out</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Office Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Carpet Cleaning</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-slate-500 mb-1">Phone</span>
                <a href="tel:+15551234567" className="text-white hover:text-primary-400 transition-colors font-medium">(555) 123-4567</a>
              </li>
              <li>
                <span className="block text-slate-500 mb-1">Email</span>
                <a href="mailto:hello@urbanshine.com" className="text-white hover:text-primary-400 transition-colors font-medium">hello@urbanshine.com</a>
              </li>
              <li>
                <span className="block text-slate-500 mb-1">Address</span>
                <span className="text-white">123 Cleaning Blvd, Dallas, TX 75201</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} UrbanShine Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
