
"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import Section from "./section";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <Section className="bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
            className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto bg-background p-8 rounded-2xl shadow-s2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <div className="bg-foreground text-background rounded-lg w-16 h-16 flex items-center justify-center">
                <Quote className="w-8 h-8" fill="currentColor" />
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-medium leading-tight">
                The clean water project transformed our village. Our children are healthier and can now attend school regularly. We are so <span className="italic">grateful for their support</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Beatrice Achieng • Community Leader, Budondo Village
            </p>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden mt-8 lg:mt-0">
            <Image
              src="https://picsum.photos/600/600?random=80"
              alt="Testimonial person"
              fill
              className="object-cover"
              data-ai-hint="happy person"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
