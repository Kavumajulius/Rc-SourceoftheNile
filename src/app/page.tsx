
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { projects, pastPresidents, fellowshipUpdates, resourceLinks, type Event } from "@/lib/data";
import { ArrowRight, HandHeart, Users, BarChart, Calendar, Clock, MapPin, Link as LinkIcon, Menu, X, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const AnimatedStat = ({ value, label, icon: Icon }: { value: string, label: string, icon: React.ElementType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Icon className="h-12 w-12 mx-auto text-accent" />
      <p className="mt-4 font-headline text-5xl font-bold">{value}</p>
      <p className="mt-2 text-muted-foreground text-lg">{label}</p>
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
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const MotionLink = motion(Link);
  const [clientEvents, setClientEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Generate dates on the client-side to avoid hydration mismatch
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
  }, []);


  return (
    <div className="flex flex-col overflow-x-hidden bg-background">
      
      {/* 1. Hero Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <motion.div 
                className="inline-block bg-secondary px-4 py-2 rounded-full mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center -space-x-2">
                  <Image src="https://picsum.photos/40/40?random=1" alt="member 1" width={32} height={32} className="rounded-full border-2 border-background"/>
                  <Image src="https://picsum.photos/40/40?random=2" alt="member 2" width={32} height={32} className="rounded-full border-2 border-background"/>
                  <Image src="https://picsum.photos/40/40?random=3" alt="member 3" width={32} height={32} className="rounded-full border-2 border-background"/>
                  <span className="pl-4 text-sm font-medium text-foreground/80">50+ Members with a Mission</span>
                </div>
              </motion.div>
              <motion.h1 
                className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Lasting
                <span className="text-foreground/20 ml-4">Change</span>
              </motion.h1>
              <motion.h1 
                className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Awaits
              </motion.h1>
              <motion.p 
                className="mt-6 max-w-md text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                We are committed to helping our communities thrive. Our expert teams drive personalized, impactful projects designed to meet unique local needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                  <Link href="/events">Join Our Mission <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="relative h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="https://picsum.photos/1200/800"
                alt="Community project by RC Source of the Nile"
                fill
                className="object-cover"
                data-ai-hint="community project women"
                priority
              />
              <motion.div 
                className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="font-bold">RC Source of the Nile</p>
                <p className="text-sm text-muted-foreground">Connect with us for personalized advice.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Impact Stats Section */}
      <Section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-5xl font-bold">1000+</h2>
            <p className="text-lg text-muted-foreground">Lives Touched Through Our Projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedStat value="5000+" label="Lives Impacted" icon={HandHeart} />
            <AnimatedStat value="50+" label="Active Members" icon={Users} />
            <AnimatedStat value="100+" label="Projects Completed" icon={BarChart} />
          </div>
        </div>
      </Section>
      
      {/* 3. Community Projects Section */}
      <Section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Signature Community Projects</h2>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">Discover the impactful projects our club has undertaken to serve our community and the world.</p>
          </div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <MotionLink href="/projects" key={index} whileHover={{ y: -8 }} className="block">
                <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground overflow-hidden h-full group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={project.aiHint} />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <p className="mt-2 text-sm text-primary-foreground/70 line-clamp-2">{project.description}</p>
                     <div className="p-0 mt-4 text-accent font-bold flex items-center">
                        View Project <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
                    </div>
                  </CardContent>
                </Card>
              </MotionLink>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* 4. Upcoming Events Section */}
      <Section id="upcoming-events" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Upcoming Events</h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">Join us for our upcoming meetings, projects, and fellowship events.</p>
          </div>
          <div className="space-y-4">
            {clientEvents.slice(0, 3).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:bg-secondary/50 transition-colors">
                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-4 items-center gap-6">
                    <div className="md:col-span-2">
                      <p className="text-sm text-accent font-bold">{event.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                      <CardTitle className="font-headline text-2xl mt-1">{event.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{event.summary}</p>
                    <Button asChild className="rounded-full font-bold w-full md:w-auto justify-self-start md:justify-self-end group">
                      <Link href="/events">
                        Details <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
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
      <Section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">Our Leadership</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Meet the dedicated team guiding our club's mission.</p>
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
                whileHover={{ y: -10 }}
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
       <Section id="past-presidents" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Legacy of Leadership</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A tribute to those who have guided our club through the years.</p>
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
      <Section id="membership" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Become a Member</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">Join a global network of volunteers making a difference. As a member, you will:</p>
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
      <Section id="gallery" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Moments of Service</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A glimpse into our recent fellowships, projects, and events.</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {fellowshipUpdates.flatMap(u => u.photos).slice(0,8).map((photo, index) => (
               <motion.div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                  <Image
                    src={photo.url}
                    alt={`Gallery photo ${index + 1}`}
                    width={500}
                    height={Math.random() > 0.5 ? 400 : 700}
                    className="w-full h-auto object-cover"
                    data-ai-hint={photo.aiHint}
                  />
               </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. Resources & Links */}
      <Section id="resources" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Member Resources</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Quick access to essential Rotary tools and information.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {resourceLinks.flatMap(c => c.links).slice(0, 4).map((link, index) => (
                <MotionLink 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-background rounded-lg text-center shadow hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <LinkIcon className="h-8 w-8 mx-auto text-accent"/>
                  <h3 className="mt-4 font-headline text-lg font-semibold">{link.title}</h3>
                </MotionLink>
              ))}
          </div>
        </div>
      </Section>


      {/* 10. Get in Touch Section */}
      <Section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h2>
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
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                <Link href="/events">Contact Us<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
              </Button>
            </div>
        </div>
      </Section>
    </div>
  );
}

    