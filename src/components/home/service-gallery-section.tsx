
"use client";
import { motion } from "framer-motion";
import { Users, Heart, Stethoscope, BookOpen, TreePine, Lightbulb, Globe, Award } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const services = [
  {
    title: "Community Outreach",
    location: "Jinja Main Street",
    address: "Central Division, Jinja, Uganda",
    time: "9:00 AM\nEAT",
    date: { month: "DEC", day: "12", dayOfWeek: "TUE" },
    image: "https://picsum.photos/600/800?random=301",
    color: "from-[#2A8296] via-[#2A8296]/90 to-transparent",
  },
  {
    title: "Medical Outreach",
    location: "Community Hospital",
    address: "Health Sector, Jinja, Uganda",
    time: "8:30 AM\nEAT",
    date: { month: "DEC", day: "15", dayOfWeek: "FRI" },
    image: "https://picsum.photos/600/800?random=303",
    color: "from-[#B93A32] via-[#B93A32]/90 to-transparent",
  },
  {
    title: "Meet Rotarians",
    location: "Rotary Club House",
    address: "Nile Crescent, Jinja, Uganda",
    time: "6:00 PM\nEAT",
    date: { month: "DEC", day: "24", dayOfWeek: "SAT" },
    image: "https://picsum.photos/600/800?random=304",
    color: "from-[#0F4C3A] via-[#0F4C3A]/90 to-transparent",
  },
  {
    title: "Youth Development",
    location: "Jinja High School",
    address: "Education District, Jinja",
    time: "2:00 PM\nEAT",
    date: { month: "JAN", day: "05", dayOfWeek: "THU" },
    image: "https://picsum.photos/600/800?random=305",
    color: "from-[#C46210] via-[#C46210]/90 to-transparent",
  },
  {
    title: "Water & Sanitation",
    location: "Rural Village",
    address: "Water Project Site, Jinja",
    time: "10:00 AM\nEAT",
    date: { month: "JAN", day: "18", dayOfWeek: "WED" },
    image: "https://picsum.photos/600/800?random=306",
    color: "from-[#1D5E88] via-[#1D5E88]/90 to-transparent",
  },
  {
    title: "Family Programs",
    location: "Community Center",
    address: "Family District, Jinja, Uganda",
    time: "4:00 PM\nEAT",
    date: { month: "JAN", day: "22", dayOfWeek: "SUN" },
    image: "https://picsum.photos/600/800?random=307",
    color: "from-[#6B3278] via-[#6B3278]/90 to-transparent",
  }
];

export default function ServiceGallerySection() {
  return (
    <section className="py-16 md:py-20 bg-[#EFECE8]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Our Service in Action
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Rotary Club Source of the Nile transforms communities through dedicated service.
          </p>
        </motion.div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg group cursor-pointer relative h-[380px] md:h-[400px]"
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Vibrant Gradient Overlay matching reference */}
              <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-90 mix-blend-multiply`} />
              <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-90`} />
              
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-end text-white z-10">
                {/* Title */}
                <h3 className="w-full text-center text-3xl md:text-3xl font-semibold tracking-tight mb-6 leading-tight truncate">
                  {service.title}
                </h3>
                
                {/* Footer Details */}
                <div className="flex items-center gap-4 mt-auto border-t border-white/20 pt-4">
                  {/* Calendar Box */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-14 h-16 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">{service.date.month}</span>
                    <span className="text-xl font-bold leading-none my-0.5">{service.date.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">{service.date.dayOfWeek}</span>
                  </div>
                  
                  {/* Location Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm md:text-base truncate">{service.location}</p>
                    <p className="text-xs md:text-sm text-white/80 truncate">{service.address}</p>
                  </div>
                  
                  {/* Time */}
                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold whitespace-pre-line text-right">{service.time}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
