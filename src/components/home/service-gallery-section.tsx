
"use client";
import { motion } from "framer-motion";
import { Users, Heart, Stethoscope, BookOpen, TreePine, Lightbulb, Globe, Award } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i) => ({
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

export default function ServiceGallerySection() {
  return (
    <section className="py-16 md:py-20 bg-gray-100">
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

        {/* Grid Layout matching the reference image */}
        <div className="grid grid-cols-12 grid-rows-6 md:grid-rows-8 gap-4 h-[1200px] md:h-[1000px]">
          
          {/* Top Left - Community Outreach (2x2) */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3 row-span-1 md:row-span-2 bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full p-6 flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Outreach</h3>
                <p className="text-gray-600 text-sm">Reaching out to serve our neighbors with compassion and care</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div 
                  className="h-16 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://picsum.photos/200/200?random=301)' }}
                />
                <div 
                  className="h-16 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://picsum.photos/200/200?random=302)' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Top Center - Live Service (tall) */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3 row-span-2 md:row-span-4 bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://picsum.photos/400/800?random=303)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block self-start">
                Live
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Medical Outreach</h3>
                <p className="text-white/90">Providing healthcare services to underserved communities</p>
              </div>
            </div>
          </motion.div>

          {/* Top Right Small - Environmental */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-6 md:col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: 'url(https://picsum.photos/400/200?random=304)' }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Top Right - Meet Rotarians */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-6 md:col-span-3 row-span-1 md:row-span-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full p-6 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-4">Meet Rotarians</h3>
              <p className="text-blue-100 mb-4">Connect with our dedicated members</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold self-start">
                View All
              </button>
            </div>
          </motion.div>

          {/* Second Row Left - Celebrate Pride */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3 row-span-1 md:row-span-2 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full p-6 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">Service Projects</h3>
              <p className="text-green-100">Celebrating our community impact and achievements</p>
            </div>
          </motion.div>

          {/* Fellowship Section */}
          <motion.div
            custom={5}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3 row-span-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full p-6 flex items-center justify-center text-white">
              <h3 className="text-xl font-bold">Fellowship Events</h3>
            </div>
          </motion.div>

          {/* Bottom Left Mobile - Great for groups */}
          <motion.div
            custom={6}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3 row-span-2 md:row-span-3 bg-gray-900 rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://picsum.photos/400/600?random=305)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Active Projects</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Youth Development</h3>
                <p className="text-white/80 text-sm">Empowering the next generation through education and mentorship</p>
              </div>
            </div>
          </motion.div>

          {/* Center Athletic Figure */}
          <motion.div
            custom={7}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-6 md:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="h-full bg-cover bg-center bg-blue-500"
              style={{ backgroundImage: 'url(https://picsum.photos/300/400?random=306)' }}
            />
          </motion.div>

          {/* Water Projects */}
          <motion.div
            custom={8}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 row-span-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full p-6 flex items-center text-white">
              <h3 className="text-xl font-bold">Water & Sanitation Projects</h3>
            </div>
          </motion.div>

          {/* Community Impact Stats */}
          <motion.div
            custom={9}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-6 md:col-span-2 row-span-1 md:row-span-2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full p-6 flex flex-col justify-center text-white">
              <h3 className="text-lg font-bold mb-4">Impact Statistics</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-orange-400">500+</div>
                  <div className="text-xs text-gray-400">Lives Impacted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">25+</div>
                  <div className="text-xs text-gray-400">Active Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Popular Programs */}
          <motion.div
            custom={10}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-6 md:col-span-2 row-span-2 bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full p-4">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Most popular around the world</h3>
              <div className="space-y-2">
                {[
                  { name: "Rotaract Program", desc: "Youth leadership development" },
                  { name: "End Polio Campaign", desc: "Global health initiative" },
                  { name: "Clean Water Projects", desc: "Community water access" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Great for families */}
          <motion.div
            custom={11}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3 row-span-2 md:row-span-3 bg-gray-900 rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://picsum.photos/400/600?random=307)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Community Focus</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Family Programs</h3>
                <p className="text-white/80 text-sm">Building stronger families and communities together</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
