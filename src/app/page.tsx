
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects, pastPresidents, fellowshipUpdates, resourceLinks, type Event } from "@/lib/data";
import { ArrowRight, HandHeart, Users, BarChart, Check, Link as LinkIcon, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const AnimatedStat = ({ value, label, icon: Icon, suffix }: { value: string, label: string, icon: React.ElementType, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const end = parseInt(value.replace(/[^0-9]/g, ''), 10);
      if (isNaN(end)) return;
      
      let start = 0;
      const duration = 1200;
      const frameRate = 60;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let currentFrame = 0;

      const counter = setInterval(() => {
        currentFrame++;
        const progress = Math.pow(currentFrame / totalFrames, 0.5); // Ease-out
        const currentNum = Math.round(end * progress);

        if (currentNum >= end) {
          clearInterval(counter);
          setDisplayValue(value);
        } else {
          setDisplayValue(currentNum.toLocaleString());
        }
      }, 1000 / frameRate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center bg-secondary p-6 rounded-lg shadow-s1"
    >
      <p className="font-headline text-5xl font-extrabold text-primary">
        {displayValue}
        {suffix && <span className="text-accent">{suffix}</span>}
      </p>
      <p className="mt-2 text-muted-foreground text-sm uppercase font-semibold tracking-wider">{label}</p>
    </motion.div>
  );
};

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 md:py-22", className)}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const MotionLink = motion(Link);
  const [clientEvents, setClientEvents] = useState<Event[]>([]);
  const [galleryPhotos, setGalleryPhotos] = useState<{url: string; aiHint: string; height: number}[]>([]);


  useEffect(() => {
    const eventsWithDates: Event[] = [
      {
        date: new Date(new Date().setDate(new Date().getDate() + 7)),
        title: "Weekly Fellowship Meeting",
        summary: "Join us for our regular weekly meeting. This week's topic: 'The Role of Technology in Community Service'.",
        location: "Grand Imperial Hotel",
      },
      {
        date: new Date(new Date().setDate(new Date().getDate() + 14)),
        title: "Tree Planting Day",
        summary: "As part of our environmental conservation efforts, we will be planting 1,000 trees at the community park.",
        location: "Jinja Community Park",
      },
      {
        date: new Date(new Date().setDate(new Date().getDate() + 21)),
        title: "Visit to the 'Literacy for All' Project Site",
        summary: "A field visit to one of the schools benefiting from our literacy project. Come and see the impact we're making.",
        location: "Nile Primary School",
      },
    ];
    setClientEvents(eventsWithDates);

    const photosWithRandomHeights = fellowshipUpdates
      .flatMap(u => u.photos)
      .slice(0, 8)
      .map(photo => ({
        ...photo,
        height: Math.random() > 0.5 ? 400 : 700,
      }));
    setGalleryPhotos(photosWithRandomHeights);

  }, []);


  return (
    <div className="flex flex-col overflow-x-hidden bg-background text-primary">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[72vh] flex items-center justify-center text-center">
         <div className="absolute inset-0">
             <Image
                src="https://picsum.photos/1800/1200"
                alt="Community project by RC Source of the Nile"
                fill
                className="object-cover"
                data-ai-hint="community project women"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-primary/0"></div>
         </div>
        <div className="container mx-auto px-4 z-10 relative">
            <motion.div 
                className="max-w-2xl text-center mx-auto"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.18 }
                    }
                }}
            >
                <motion.p 
                  className="font-body text-sm font-semibold uppercase tracking-widest text-accent"
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
                >
                  Rotary Club of Source of the Nile
                </motion.p>
                <motion.h1 
                    className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white mt-4"
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
                >
                    Lasting Change Awaits
                </motion.h1>
                <motion.p 
                    className="mt-6 max-w-lg mx-auto text-lg text-white/90"
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 } } }}
                >
                    We are committed to helping our communities thrive. Our expert teams drive personalized, impactful projects designed to meet unique local needs.
                </motion.p>
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } } }}
                >
                    <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                    <Link href="/events">Join Our Mission <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* 2. Impact Stats Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Impact by the Numbers</h2>
            <p className="mt-4 text-muted-foreground">We measure our success by the lives we touch and the communities we strengthen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedStat value="5000" suffix="+" label="Lives Impacted" icon={HandHeart} />
            <AnimatedStat value="50" suffix="+" label="Active Members" icon={Users} />
            <AnimatedStat value="100" suffix="+" label="Projects Completed" icon={BarChart} />
          </div>
        </div>
      </Section>
      
      {/* 3. Community Projects Section */}
      <Section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Signature Community Projects</h2>
            <p className="mt-4 text-muted-foreground">Explore some of the ways we're making a difference.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.18 }}
               >
                <Card className="bg-card text-card-foreground overflow-hidden h-full group transition-all duration-300 hover:shadow-s2 hover:-translate-y-1 rounded-xl">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={project.aiHint} />
                     <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                     <div className="p-0 mt-4 text-accent font-bold flex items-center text-sm">
                        Learn More <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
            <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="rounded-full font-bold px-8 py-6 text-lg group" asChild>
                    <Link href="/projects">Explore All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
                </Button>
            </div>
        </div>
      </Section>

      {/* 4. Upcoming Events Section */}
      <Section id="upcoming-events">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Upcoming Events</h2>
             <p className="mt-4 text-muted-foreground">Join us and be part of the change.</p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {clientEvents.slice(0, 3).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.18 }}
              >
                <Card className="hover:bg-secondary/50 transition-all duration-300 rounded-xl shadow-s1 hover:shadow-s2 hover:-translate-y-1">
                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                    <div className="flex items-center gap-4 md:col-span-2">
                        <div className="text-center bg-primary text-primary-foreground rounded-lg p-3 w-16 h-16 flex flex-col justify-center">
                            <p className="font-bold text-2xl leading-none">{event.date.toLocaleDateString('en-US', { day: '2-digit' })}</p>
                            <p className="font-semibold text-xs uppercase tracking-wider">{event.date.toLocaleDateString('en-US', { month: 'short' })}</p>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <h3 className="font-headline text-xl font-semibold">{event.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{event.location}</p>
                    </div>
                    <div className="md:col-span-3 justify-self-start md:justify-self-end">
                        <Button asChild className="rounded-full font-bold group bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/events">
                            View Details <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
                        </Link>
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

       {/* 7. Membership Information Section */}
      <Section id="membership" className="bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.6, ease: 'easeOut' }}
           >
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Become a Member</h2>
            <p className="mt-4 text-lg text-muted-foreground">Join a global network of volunteers making a difference. As a member, you will:</p>
            <ul className="mt-6 space-y-4">
              {[
                "Connect with diverse perspectives",
                "Develop leadership skills",
                "Make a tangible impact in our community",
                "Build lifelong friendships"
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-accent"/>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
             <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg group" asChild>
              <Link href="/events">Start Your Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
            </Button>
          </motion.div>
           <motion.div 
            className="relative h-96 w-full rounded-2xl overflow-hidden shadow-s2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
           >
            <Image 
              src="https://picsum.photos/800/600?random=30" 
              alt="Rotary members collaborating"
              fill
              className="object-cover"
              data-ai-hint="team collaboration"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* 10. Get in Touch Section */}
      <Section id="contact">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">We're here to answer your questions and welcome you to our community.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="mailto:info@rcsourcethenile.org" className="font-headline text-4xl md:text-5xl font-bold mt-8 text-primary hover:text-accent transition-colors block">
                info@rcsourcethenile.org
              </a>
            </motion.div>
            <div className="mt-10">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                <Link href="/events">Contact Us<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
              </Button>
            </div>
        </div>
      </Section>
    </div>
  );
}
