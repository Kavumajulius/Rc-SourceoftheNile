
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { ArrowRight, Check, MoveRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const AnimatedStat = ({ value, label, icon: Icon, suffix }: { value: string, label: string, icon?: React.ElementType, suffix?: string }) => {
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
      className="text-left"
    >
      <p className="font-headline text-5xl lg:text-7xl font-bold text-foreground">
        {displayValue}
        {suffix && <span className="text-accent">{suffix}</span>}
      </p>
      <p className="mt-2 text-muted-foreground text-sm font-semibold tracking-wider">{label}</p>
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("py-20 md:py-28", className)}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const MotionLink = motion(Link);
  
  return (
    <div className="flex flex-col overflow-x-hidden bg-background text-foreground">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
         <div className="container mx-auto px-4 z-10 relative">
            <motion.div 
                className="max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    }
                }}
            >
              <div className="flex items-center gap-4 text-sm font-bold text-muted-foreground">
                <Users className="w-5 h-5"/>
                <span>200+ MEMBERS WORLDWIDE</span>
              </div>
              
              <motion.h1 
                    className="font-headline text-6xl md:text-9xl font-extrabold tracking-tighter mt-8"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                >
                    Lasting
                </motion.h1>
              <motion.h1 
                    className="font-headline text-6xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-white"
                    style={{ WebkitTextStroke: '2px var(--colors-foreground, black)' }}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } } }}
                >
                    Change
                </motion.h1>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-8">
                  <motion.p 
                    className="max-w-sm text-lg text-muted-foreground"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } } }}
                  >
                    We are a global network of community leaders and friends dedicated to creating lasting change in our communities and around the world.
                  </motion.p>
                  <motion.h1 
                    className="font-headline text-6xl md:text-9xl font-extrabold tracking-tighter"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } } }}
                  >
                    Awaits
                </motion.h1>
                </div>
                
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } } }}
                    className="mt-12 flex flex-col md:flex-row items-center gap-4"
                >
                    <p className="font-bold text-lg">Expert Solutions for Community Needs</p>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                      <Link href="/events">Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
        <motion.div 
          className="absolute top-1/3 right-0 w-full h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
              src="https://picsum.photos/1200/900"
              alt="Community project by RC Source of the Nile"
              width={1200}
              height={900}
              className="object-cover w-auto h-full"
              data-ai-hint="community project women"
              priority
            />
        </motion.div>
      </section>

      {/* 2. Impact Stats Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Impact by the Numbers</h2>
              <p className="mt-4 text-muted-foreground text-lg">We measure our success by the lives we touch and the communities we strengthen.</p>
              <div className="mt-6 flex gap-2">
                {Array(3).fill(0).map((_, i) => (
                   <Image key={i} src={`https://picsum.photos/100/100?random=${10+i}`} alt="member" width={60} height={60} className="rounded-full border-2 border-white"/>
                ))}
                 <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl">
                  +
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center">
               <AnimatedStat value="95%" label="PROJECT COMPLETION" />
               <AnimatedStat value="9/10" label="MEMBER SATISFACTION" />
            </div>
          </div>
        </div>
      </Section>
      
      {/* 3. Community Projects Section */}
      <Section className="bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
                <p className="text-sm font-bold text-accent">OUR SIGNATURE PROJECTS</p>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-2">Advanced Community Treatments</h2>
                <p className="mt-4 text-muted-foreground max-w-xl">We offer a range of expert-driven services designed to address your unique community needs. Whether you're dealing with health, education, or environmental challenges, we've got you covered.</p>
            </div>
             <div className="hidden md:flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full bg-transparent border-background/50 hover:bg-accent/10"><ArrowRight className="w-5 h-5 rotate-180"/></Button>
                <Button size="icon" variant="outline" className="rounded-full bg-accent border-accent hover:bg-accent/80"><ArrowRight className="w-5 h-5"/></Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.18 }}
               >
                <Card className="bg-transparent text-background border-background/20 overflow-hidden h-full group transition-all duration-300 hover:shadow-s2 hover:-translate-y-1 rounded-xl">
                  <CardContent className="p-5">
                    <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3 h-16">{project.description}</p>
                     <div className="p-0 mt-4 text-accent font-bold flex items-center text-sm">
                        Learn More <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
                    </div>
                  </CardContent>
                   <div className="relative h-64 w-full overflow-hidden mt-4 rounded-xl">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={project.aiHint} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Skincare Essentials (Membership) */}
      <Section id="membership" className="bg-background">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="font-bold text-sm text-accent">HANDPICKED FOR YOUR NEEDS</p>
                <h2 className="font-headline text-7xl md:text-9xl font-extrabold tracking-tighter mt-4">Membership</h2>
                <h2 className="font-headline text-7xl md:text-9xl font-extrabold tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px var(--colors-foreground, black)' }}>Essentials</h2>
              </div>
              <p className="max-w-xs text-muted-foreground mt-4">We offer a carefully curated selection of membership benefits designed to enhance your service journey.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-s2">
                    <Image 
                    src="https://picsum.photos/800/600?random=30" 
                    alt="Rotary members collaborating"
                    fill
                    className="object-cover"
                    data-ai-hint="team collaboration"
                    />
                     <div className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm p-4 rounded-lg">
                        <p className="font-bold">Exclusive Benefits</p>
                        <ul className="mt-2 space-y-2 text-sm">
                        {[
                            "Global Networking",
                            "Leadership Training",
                            "Service Projects"
                        ].map(item => (
                            <li key={item} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-accent"/>
                            <span>{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="font-headline text-3xl font-bold">Become a Member</h3>
                    <p className="mt-4 text-lg text-muted-foreground">Join a global network of volunteers making a difference. As a member, you will connect with diverse perspectives, develop leadership skills, make a tangible impact, and build lifelong friendships.</p>
                    <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                    <Link href="/events">See Products <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
                    </Button>
                </div>
            </div>
        </div>
      </Section>
      
      {/* 10. Get in Touch Section */}
      <Section id="contact" className="bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold">Get In Touch</h2>
              <p className="mt-2 text-muted-foreground">We're here to answer your questions and welcome you to our community.</p>
               <Button variant="outline" className="mt-6 rounded-full group">Fill Your Great Details <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="mailto:info@rcsourcethenile.org" className="font-headline text-4xl md:text-5xl font-bold text-foreground hover:text-accent transition-colors block text-right">
                info@rcsourcethenile.org
              </a>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
