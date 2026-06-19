import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "UrbanShine completely transformed my home. Their attention to detail is unmatched, and the team is incredibly professional and trustworthy.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=44"
    },
    {
      name: "Michael Chen",
      role: "Local Business Owner",
      content: "We use them for our weekly office cleaning. Reliable, quiet, and thorough. Our workspace has never looked better. Highly recommend!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Emily Davis",
      role: "Apartment Renter",
      content: "Hired them for a move-out clean and got my full deposit back with zero issues. The apartment looked better than when I moved in.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Don't just take our word for it</h3>
          <p className="text-lg text-slate-600">
            Read what our satisfied customers have to say about their UrbanShine experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-8 text-6xl text-primary-100 font-serif leading-none select-none">"</div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-8 relative z-10 leading-relaxed">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 border-t border-slate-50 pt-6 mt-auto">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
