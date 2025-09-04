
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./section";

const galleryItems = [
  {
    type: "image",
    imageUrl: "https://picsum.photos/800/600?random=101",
    alt: "Children smiling",
    className: "md:row-span-2",
    aiHint: "happy children",
  },
  {
    type: "text",
    title: "Fellowship",
    bgColor: "bg-yellow-400",
    textColor: "text-black",
  },
  {
    type: "image",
    imageUrl: "https://picsum.photos/800/1200?random=102",
    alt: "Community gathering",
    className: "md:row-span-2",
    aiHint: "community gathering",
  },
  {
    type: "text",
    title: "Service Above Self",
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
  {
    type: "image",
    imageUrl: "https://picsum.photos/800/600?random=103",
    alt: "Planting trees",
    aiHint: "tree planting",
  },
  {
    type: "text",
    title: "Leadership",
    bgColor: "bg-green-500",
    textColor: "text-white",
  },
  {
    type: "image",
    imageUrl: "https://picsum.photos/800/600?random=104",
    alt: "Medical checkup",
    aiHint: "medical checkup",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ServiceGallerySection() {
  return (
    <Section className="bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Our Service in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the moments that define our commitment to community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`relative rounded-xl overflow-hidden group ${item.className || ''}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
              ) : (
                <div
                  className={`flex items-center justify-center h-full p-8 ${item.bgColor} ${item.textColor}`}
                >
                  <h3 className="text-3xl font-bold tracking-tight text-center">
                    {item.title}
                  </h3>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
