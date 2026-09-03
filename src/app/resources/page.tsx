

"use client";

import { resourceLinks } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ParallaxComponent } from "@/components/ui/parallax-scrolling";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function ResourcesPage() {
  const allLinks = resourceLinks.flatMap((category, catIdx) => 
    category.links.map((link, linkIdx) => ({
      ...link,
      categoryName: category.category,
      // Assign distinct vibrant card styles matching the reference image
      colorClass: [
        "bg-purple-600/90", 
        "bg-amber-500/90", 
        "bg-blue-600/90", 
        "bg-sky-400/90", 
        "bg-emerald-600/90", 
        "bg-rose-600/90", 
        "bg-indigo-600/90", 
        "bg-teal-600/90"
      ][(catIdx * 3 + linkIdx) % 8],
      bgImage: `https://picsum.photos/600/600?random=${50 + catIdx * 10 + linkIdx}`
    }))
  );

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* 1. Parallax Hero Header */}
      <ParallaxComponent 
        title="Resources"
        subtitle="Gateway to Rotary Tools & Documentation"
        image1="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80"
        image2="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80"
        image3="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
      />

      {/* 2. Resource Cards Grid matching reference image */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-[320px] w-full rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={link.bgImage}
                      alt={link.title}
                      fill
                      className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Vibrant Tint Overlay */}
                  <div className={`absolute inset-0 ${link.colorClass} mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-95`} />
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                    <div>
                      <span className="text-[11px] font-bold tracking-widest uppercase opacity-80 block mb-3">
                        {link.categoryName}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-white">
                        {link.title}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm text-white/90 line-clamp-3">
                        {link.description}
                      </p>
                    </div>

                    <div className="flex items-center text-xs font-bold tracking-wider uppercase pt-4 border-t border-white/20">
                      <span>Access Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* 3. Call-to-Action Section */}
      <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 1 }}
        className="py-16 md:py-20 bg-card border-t border-border"
      >
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Stay connected with Rotary’s global network.
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            Your journey in service and leadership starts here. Join our weekly fellowships and community service projects.
          </p>
          <div className="mt-6">
             <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold px-8 py-6 text-base group" asChild>
                <Link href="/events">
                    View Upcoming Events <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

