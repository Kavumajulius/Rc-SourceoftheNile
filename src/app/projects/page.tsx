"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, CheckCircle, Calendar, Users, MapPin } from "lucide-react";

interface EditorialProject {
  id: string;
  category: string;
  title: string;
  description: string;
  extendedDetails: string;
  impactMetrics: { label: string; value: string }[];
  location: string;
  timeline: string;
  imageUrl: string;
  watermark: string;
  bgColor: string;
  textColor: string;
  tagColor: string;
  buttonBg: string;
}

const editorialProjects: EditorialProject[] = [
  {
    id: "water-sanitation",
    category: "WATER & SANITATION",
    title: "CLEAN BOREHOLE WATER ALONG THE NILE",
    description:
      "Providing safe, reliable drinking water points across remote rural villages, dramatically reducing waterborne illnesses and empowering women and children.",
    extendedDetails:
      "Access to clean and safe water is a fundamental human right. Our flagship water and sanitation project drills solar-powered deep boreholes, installs filtration units, and establishes water user committees in remote villages along the Nile basin. This initiative has directly served over 12,000 community members by eliminating long daily walks for water and preventing waterborne diseases.",
    impactMetrics: [
      { label: "Boreholes Installed", value: "24+" },
      { label: "People Served", value: "12,500" },
      { label: "Schools Reached", value: "8" },
    ],
    location: "Jinja & Buikwe Districts",
    timeline: "Ongoing (Phase III)",
    imageUrl: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=1000&q=80",
    watermark: "WATER",
    bgColor: "bg-[#E0F2FE]", // Soft sky blue
    textColor: "text-sky-950",
    tagColor: "text-sky-700 bg-sky-200/60",
    buttonBg: "bg-sky-900 text-white hover:bg-sky-800",
  },
  {
    id: "maternal-health",
    category: "HEALTHCARE",
    title: "MOBILE HEALTH CAMPS & MATERNAL CARE",
    description:
      "Delivering free medical checkups, immunizations, and maternal healthcare support to over 5,000 expectant mothers and children in Jinja communities.",
    extendedDetails:
      "Quality healthcare should never be out of reach. Our mobile health camps deploy volunteer doctors, nurses, and specialists directly to underserved rural parishes. We provide antenatal care, safe delivery kits, immunizations for newborns, malaria treatment, and chronic illness screenings.",
    impactMetrics: [
      { label: "Patients Treated", value: "8,200+" },
      { label: "Maternal Kits Distributed", value: "1,500" },
      { label: "Health Camps Held", value: "18" },
    ],
    location: "Bugembe & Kamuli Rural",
    timeline: "Quarterly Outreaches",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    watermark: "HEALTH",
    bgColor: "bg-[#EDE9FE]", // Soft lavender
    textColor: "text-purple-950",
    tagColor: "text-purple-700 bg-purple-200/60",
    buttonBg: "bg-purple-900 text-white hover:bg-purple-800",
  },
  {
    id: "education-literacy",
    category: "EDUCATION",
    title: "DIGITAL LITERACY & SCHOOL SUPPORT",
    description:
      "Equipping local primary schools with computer labs, textbooks, and teacher training programs to unlock the potential of the next generation of leaders.",
    extendedDetails:
      "Education is the great equalizer. We partner with local primary schools to build solar-powered computer learning hubs, supply comprehensive textbook libraries, and mentor students in STEM and leadership skills to prepare them for the modern digital economy.",
    impactMetrics: [
      { label: "Students Empowered", value: "4,500+" },
      { label: "Computers Deployed", value: "120" },
      { label: "Teachers Trained", value: "65" },
    ],
    location: "Jinja Central & Budondo",
    timeline: "Annual Academic Support",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
    watermark: "SCHOOL",
    bgColor: "bg-[#DCFCE7]", // Mint green
    textColor: "text-emerald-950",
    tagColor: "text-emerald-700 bg-emerald-200/60",
    buttonBg: "bg-emerald-900 text-white hover:bg-emerald-800",
  },
  {
    id: "environmental-conservation",
    category: "ENVIRONMENT",
    title: "SOURCE OF THE NILE TREE PLANTING",
    description:
      "Restoring native riverbank forests, organizing community cleanups, and promoting sustainable agriculture to protect the pristine ecology of the River Nile.",
    extendedDetails:
      "As guardians of the source of the world's longest river, our club leads massive afforestation campaigns, riverbank buffer restoration, and youth eco-clubs. We have planted over 20,000 indigenous trees to combat soil erosion and preserve local biodiversity.",
    impactMetrics: [
      { label: "Trees Planted", value: "22,000+" },
      { label: "Riverbanks Restored", value: "15 km" },
      { label: "Eco-Clubs Formed", value: "12" },
    ],
    location: "Source of the Nile Banks",
    timeline: "Bi-monthly Campaigns",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
    watermark: "NATURE",
    bgColor: "bg-[#FEF3C7]", // Warm yellow/cream
    textColor: "text-amber-950",
    tagColor: "text-amber-800 bg-amber-200/70",
    buttonBg: "bg-amber-900 text-white hover:bg-amber-800",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<EditorialProject | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Editorial Header */}
      <div className="py-16 px-6 text-center border-b border-slate-100">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7] bg-sky-50 py-1.5 px-4 rounded-full inline-block mb-3">
          Rotary Impact
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
          OUR SIGNATURE PROJECTS
        </h1>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Explore our full-width editorial showcase of community service initiatives along the Source of the Nile.
        </p>
      </div>

      {/* Multi-Row Full-Width Editorial Layout */}
      <div className="w-full flex flex-col">
        {editorialProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative w-full min-h-[500px] md:min-h-[600px] ${project.bgColor} overflow-hidden flex items-center border-b border-white/40`}
          >
            {/* Giant Background Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
              <span className="font-black text-[25vw] md:text-[22vw] tracking-tighter uppercase text-white/40 whitespace-nowrap leading-none">
                {project.watermark}
              </span>
            </div>

            <div className="container mx-auto px-6 lg:px-16 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className={`text-xs font-black uppercase tracking-widest py-1.5 px-3 rounded-md inline-block mb-4 ${project.tagColor}`}>
                    {project.category}
                  </span>
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${project.textColor} leading-tight`}>
                    {project.title}
                  </h2>
                </div>

                <p className={`text-base md:text-lg leading-relaxed ${project.textColor}/80 max-w-xl font-normal`}>
                  {project.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer ${project.buttonBg}`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: High-Impact Photography */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg aspect-[4/3] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative w-full h-64 md:h-72">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-black uppercase tracking-widest bg-sky-500 text-white py-1 px-3 rounded-md mb-2 inline-block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                    <MapPin className="w-4 h-4 text-[#0284C7]" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4 text-[#0284C7]" />
                    <span>{selectedProject.timeline}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Project Overview</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                    {selectedProject.extendedDetails}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Key Impact Metrics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="bg-sky-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-sky-100 dark:border-slate-700 text-center">
                        <div className="text-2xl font-black text-[#0284C7] mb-1">{metric.value}</div>
                        <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full bg-[#0284C7] hover:bg-[#0284C7]/90 text-white text-sm font-bold shadow-lg transition-transform hover:scale-105 cursor-pointer inline-flex items-center gap-2"
                  >
                    Get Involved <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

