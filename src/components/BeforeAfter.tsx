import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let x;
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
    } else {
      x = e.clientX - rect.left;
    }
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-accent-400 uppercase mb-3">See The Difference</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Transforming spaces, one room at a time</h3>
          <p className="text-lg text-slate-400">
            Slide to see the incredible results of our professional deep cleaning service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
          <div 
            className="relative w-full h-[300px] md:h-[500px] cursor-ew-resize select-none"
            onMouseMove={handleDrag}
            onTouchMove={handleDrag}
          >
            {/* After Image (Clean Room) - Sits in the background */}
            <img 
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Clean beautiful bathroom" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold shadow-sm">
              After (Clean)
            </div>

            {/* Before Image (Messy Room) - Overlays using clip-path */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              {/* Apply CSS filters to make the same clean image look dirty/yellowish */}
              <img 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Messy room before cleaning" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ filter: 'sepia(0.5) brightness(0.8) contrast(0.85) saturate(0.6)' }}
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                Before (Dirty)
              </div>
            </div>

            {/* Slider Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              {/* Handle Icon */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)] text-primary-600 transition-transform hover:scale-110">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
