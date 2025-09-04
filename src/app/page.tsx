"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { events, projects, pastPresidents } from "@/lib/data";
import { ArrowRight, HandHeart, Users, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const impactStats = [
  { icon: HandHeart, value: "5000+", label: "Lives Impacted" },
  { icon: Users, value: "50+", label: "Active Members" },
  { icon: BarChart, value: "100+", label: "Projects Completed" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
};


export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      
      {/* Hero Section */}
      <motion.section
        className="py-20 md:py-32"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-headline text-5xl md:text-8xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Service <span className="text-foreground/20">Above</span> Self
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A community of leaders creating positive, lasting change in our communities and around the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg" asChild>
              <Link href="/events">Free Consultation <ArrowRight className="ml-2"/></Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Image Section */}
      <motion.section 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="relative h-[60vh] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/1200/800"
            alt="Community project by RC Source of the Nile"
            fill
            className="object-cover"
            data-ai-hint="community project women"
            priority
          />
        </div>
      </motion.section>

      {/* Impact Stats Section */}
      <motion.section 
        className="py-20 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <stat.icon className="h-12 w-12 mx-auto text-accent"/>
                <p className="mt-4 font-headline text-5xl font-bold">{stat.value}</p>
                <p className="mt-2 text-muted-foreground text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-20 md:py-28 bg-primary text-primary-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Community Projects</h2>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">Discover the impactful projects our club has undertaken to serve our community and the world.</p>
          </div>
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground overflow-hidden h-full group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={project.aiHint} />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <p className="mt-2 text-sm text-primary-foreground/70 line-clamp-2">{project.description}</p>
                     <Button asChild variant="link" className="p-0 mt-4 text-accent font-bold">
                        <Link href="/projects">View Project <ArrowRight className="ml-2"/></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        id="upcoming-events"
        className="py-20 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Upcoming Events</h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">Join us for our upcoming meetings, projects, and fellowship events.</p>
          </div>
          <div className="space-y-4">
            {events.slice(0,3).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:bg-secondary/50 transition-colors">
                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-4 items-center gap-6">
                    <div className="md:col-span-2">
                      <p className="text-sm text-accent font-bold">{event.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <CardTitle className="font-headline text-2xl mt-1">{event.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{event.summary}</p>
                    <Button asChild className="rounded-full font-bold w-full md:w-auto justify-self-start md:justify-self-end">
                      <Link href="/events">
                        Details <ArrowRight className="ml-2"/>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Get in Touch Section */}
      <motion.section
        id="contact"
        className="py-20 md:py-28 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">We're here to help with all your needs.</p>
            <p className="font-headline text-4xl md:text-6xl font-bold mt-8 text-primary hover:text-accent transition-colors">
              <a href="mailto:info@rcsourcethenile.org">info@rcsourcethenile.org</a>
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg" asChild>
                <Link href="/events">Fill Your Great Details <ArrowRight className="ml-2"/></Link>
              </Button>
            </div>
        </div>
      </motion.section>
    </div>
  );
}
