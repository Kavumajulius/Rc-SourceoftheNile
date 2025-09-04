
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { projects, pastPresidents, fellowshipUpdates, resourceLinks, type Event } from "@/lib/data";
import { ArrowRight, HandHeart, Users, BarChart, Calendar, Clock, MapPin, Link as LinkIcon, Menu, X, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const AnimatedStat = ({ value, label, icon: Icon }: { value: string, label: string, icon: React.ElementType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Placeholder for count-up animation logic
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // A simple animation, can be replaced with a library like 'react-countup'
      let start = 0;
      const end = parseInt(value.replace(/[^0-9]/g, ''), 10);
      if (isNaN(end)) return;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setDisplayValue(Math.ceil(start).toLocaleString() + (value.includes('+') ? '+' : ''));
      }, 16);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Icon className="h-12 w-12 mx-auto text-accent" />
      <p className="mt-4 font-headline text-5xl font-extrabold">{displayValue}</p>
      <p className="mt-2 text-muted-foreground text-lg uppercase tracking-widest">{label}</p>
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
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
         <div className="absolute inset-0">
             <Image
                src="https://picsum.photos/1800/1200"
                alt="Community project by RC Source of the Nile"
                fill
                className="object-cover"
                data-ai-hint="community project women"
                priority
              />
              <div className="absolute inset-0 bg-primary/40"></div>
         </div>
        <div className="container mx-auto px-4 z-10 relative">
            <div className="max-w-2xl text-left">
              <motion.h1 
                className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Lasting Change Awaits
              </motion.h1>
              <motion.p 
                className="mt-6 max-w-md text-lg text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                We are committed to helping our communities thrive. Our expert teams drive personalized, impactful projects designed to meet unique local needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                  <Link href="/events">Join Our Mission <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
                </Button>
              </motion.div>
            </div>
        </div>
      </section>

      {/* 2. Impact Stats Section */}
      <Section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedStat value="5000+" label="Lives Impacted" icon={HandHeart} />
            <AnimatedStat value="50+" label="Active Members" icon={Users} />
            <AnimatedStat value="100+" label="Projects Completed" icon={BarChart} />
          </div>
        </div>
      </Section>
      
      {/* 3. Community Projects Section */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-sm uppercase tracking-widest text-muted-foreground">Our Work</h2>
            <p className="mt-2 font-headline text-4xl md:text-5xl font-bold">Signature Community Projects</p>
          </div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <MotionLink href="/projects" key={index} whileHover={{ y: -8 }} className="block">
                <Card className="bg-card text-card-foreground overflow-hidden h-full group transition-shadow hover:shadow-xl rounded-lg">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={project.aiHint} />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl font-bold">{project.title}</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                     <div className="p-0 mt-4 text-accent font-bold flex items-center text-sm">
                        LEARN MORE <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
                    </div>
                  </CardContent>
                </Card>
              </MotionLink>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* 4. Upcoming Events Section */}
      <Section id="upcoming-events" className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="font-headline text-sm uppercase tracking-widest text-muted-foreground">Stay Connected</h2>
            <p className="mt-2 font-headline text-4xl md:text-5xl font-bold">Upcoming Events</p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {clientEvents.slice(0, 3).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:bg-white transition-colors rounded-lg shadow-sm hover:shadow-lg">
                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-4 items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="text-center bg-accent/20 text-accent rounded-lg p-3">
                            <p className="font-bold text-2xl">{event.date.toLocaleDateString('en-US', { day: '2-digit' })}</p>
                            <p className="font-semibold text-xs uppercase">{event.date.toLocaleDateString('en-US', { month: 'short' })}</p>
                        </div>
                         <h3 className="font-headline text-xl">{event.title}</h3>
                    </div>
                    <p className="text-muted-foreground md:col-span-2">{event.summary}</p>
                    <Button asChild className="rounded-full font-bold w-full md:w-auto justify-self-start md:justify-self-end group bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/events">
                        View Details <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Leadership Team Section */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-sm uppercase tracking-widest text-muted-foreground">Our Team</h2>
            <p className="mt-2 font-headline text-4xl font-bold md:text-5xl">Club Leadership</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {pastPresidents.slice(0, 4).map((leader, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                  <Image
                    src={leader.imageUrl}
                    alt={`Portrait of ${leader.name}`}
                    width={160}
                    height={160}
                    data-ai-hint={leader.aiHint}
                    className="rounded-full object-cover border-4 border-card shadow-lg"
                  />
                </div>
                <h3 className="mt-4 font-headline text-xl font-bold">{leader.name}</h3>
                <p className="text-muted-foreground">{leader.term}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. Past Presidents Section */}
       <Section id="past-presidents" className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-sm uppercase tracking-widest text-muted-foreground">Our Heritage</h2>
            <p className="mt-2 font-headline text-4xl md:text-5xl font-bold">A Legacy of Leadership</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
            <div className="space-y-16">
              {pastPresidents.slice(0, 4).map((president, index) => (
                 <motion.div
                  key={president.term}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  className="md:grid md:grid-cols-2 md:gap-8 items-center relative"
                >
                  <motion.div
                    initial={{ x: index % 2 === 0 ? '-50%' : '50%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    className={`flex items-center justify-center ${index % 2 === 0 ? 'md:order-2 md:justify-start' : 'md:order-1 md:justify-end'}`}
                  >
                    <div className="relative w-48 h-48">
                      <Image
                        src={president.imageUrl}
                        alt={`Portrait of ${president.name}`}
                        width={192}
                        height={192}
                        data-ai-hint={president.aiHint}
                        className="rounded-full object-cover border-4 border-card shadow-lg"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ x: index % 2 === 0 ? '50%' : '-50%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    className={`mt-6 md:mt-0 text-center md:text-left ${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}
                  >
                    <p className="text-2xl font-headline font-bold">{president.name}</p>
                    <p className="text-accent font-semibold">{president.term}</p>
                    <p className="mt-2 text-muted-foreground">{president.bio}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* 7. Membership Information Section */}
      <Section id="membership">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-sm uppercase tracking-widest text-muted-foreground">Join Us</h2>
            <p className="mt-2 font-headline text-4xl md:text-5xl font-bold">Become a Member</p>
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
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://picsum.photos/800/600?random=30" 
              alt="Rotary members collaborating"
              fill
              className="object-cover"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </Section>

      {/* 8. Photo Gallery Section */}
      <Section id="gallery" className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-sm uppercase tracking-widest text-muted-foreground">Our Moments</h2>
            <p className="mt-2 font-headline text-4xl md:text-5xl font-bold">Glimpses of Service & Fellowship</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryPhotos.map((photo, index) => (
               <motion.div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                  <Image
                    src={photo.url}
                    alt={`Gallery photo ${index + 1}`}
                    width={500}
                    height={photo.height}
                    className="w-full h-auto object-cover"
                    data-ai-hint={photo.aiHint}
                  />
               </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. Resources & Links */}
      <Section id="resources">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-sm uppercase tracking-widest text-muted-foreground">Information Hub</h2>
            <p className="mt-2 font-headline text-4xl md:text-5xl font-bold">Member Resources</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {resourceLinks.flatMap(c => c.links).slice(0, 4).map((link, index) => (
                <MotionLink 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-secondary rounded-lg text-center shadow hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                    <LinkIcon className="h-8 w-8"/>
                  </div>
                  <h3 className="mt-4 font-headline text-lg font-semibold">{link.title}</h3>
                </MotionLink>
              ))}
          </div>
        </div>
      </Section>


      {/* 10. Get in Touch Section */}
      <Section id="contact" className="bg-secondary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-sm uppercase tracking-widest text-muted-foreground">Contact Us</h2>
            <p className="mt-2 font-headline text-4xl md:text-5xl font-bold">Get In Touch</p>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">We're here to answer your questions and welcome you to our community.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="mailto:info@rcsourcethenile.org" className="font-headline text-4xl md:text-6xl font-bold mt-8 text-primary hover:text-accent transition-colors block">
                info@rcsourcethenile.org
              </a>
            </motion.div>
            <div className="mt-10">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                <Link href="/events">Contact Us<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
              </Button>
            </div>
        </div>
      </Section>
    </div>
  );
}
