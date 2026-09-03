import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Globe, Shield, Heart, Award, Users, Landmark, Sparkles, Handshake } from "lucide-react";

export function InfiniteSliderDemo() {
  const partners = [
    { name: "Rotary Foundation", icon: Globe, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { name: "Community Care", icon: Heart, color: "text-red-600 bg-red-50 border-red-200" },
    { name: "Global Reach", icon: Handshake, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Youth Leaders", icon: Users, color: "text-amber-600 bg-amber-50 border-amber-200" },
    { name: "Excellence in Service", icon: Award, color: "text-purple-600 bg-purple-50 border-purple-200" },
    { name: "Source Alliance", icon: Landmark, color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
    { name: "Impact Partners", icon: Sparkles, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    { name: "Trust Shield", icon: Shield, color: "text-green-600 bg-green-50 border-green-200" },
  ];

  return (
    <div className="w-full bg-white py-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 max-w-7xl mb-8 text-center">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Our Partners</h2>
        <p className="text-2xl font-semibold text-gray-900">Organizations working with us to create change</p>
      </div>
      <div className="w-full relative">
        {/* Gradient Masks for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <InfiniteSlider gap={32} className="w-full h-full py-4">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border shadow-sm ${partner.color} transition-transform hover:scale-105 cursor-pointer whitespace-nowrap`}
              >
                <Icon className="w-6 h-6 shrink-0" />
                <span className="font-bold text-gray-800 text-sm md:text-base tracking-tight">{partner.name}</span>
              </div>
            );
          })}
        </InfiniteSlider>
      </div>
    </div>
  );
}

