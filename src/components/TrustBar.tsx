import { Users, Star, Clock } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400 fill-current" />,
      value: "4.8/5",
      label: "Average Rating",
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-500" />,
      value: "24/7",
      label: "Same-Day Service",
    }
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-12 relative z-20 -mt-10 sm:-mt-16 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-3xl shadow-xl">
      <div className="px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center text-center ${index > 0 ? 'pt-8 md:pt-0' : ''}`}>
              <div className="bg-slate-50 p-4 rounded-2xl mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
