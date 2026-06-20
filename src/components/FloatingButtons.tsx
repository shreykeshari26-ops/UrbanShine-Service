import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/15551234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Chat with us
        </span>
      </a>

      {/* Telephone Floating Button */}
      <a 
        href="/#contact" 
        className="fixed bottom-6 left-6 z-50 bg-primary-600 text-white p-4 rounded-full shadow-[0_4px_14px_rgba(79,168,216,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center"
        aria-label="Contact Us"
      >
        <Phone className="w-7 h-7" />
      </a>
    </>
  );
}
