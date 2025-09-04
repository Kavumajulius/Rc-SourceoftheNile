
"use client";

import { projects } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search, HandHeart, Users, BarChart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Link from "next/link";

const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
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

const AnimatedStat = ({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
}) => {
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

export default function ProjectsPage() {
  const MotionLink = motion(Link);

  return (
    <div className="flex flex-col overflow-x-hidden bg-background">
      {/* 1. Hero Banner */}
      <section className="relative h-[400px] md:h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: "-20%" }}
          animate={{ y: "20%" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="https://picsum.photos/1800/1200?random=50"
            alt="Community project banner"
            fill
            className="object-cover"
            priority
            data-ai-hint="community action"
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Making a Difference in Our Community
          </motion.p>
        </div>
      </section>

      {/* 2. Filter & Search Bar */}
      <Section className="bg-secondary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex gap-4 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-full md:w-[180px] bg-background">
                  <SelectValue placeholder="Filter by Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[180px] bg-background">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="environment">Environment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative w-full md:flex-1">
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-10 bg-background"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Project Cards Grid */}
      <Section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card text-card-foreground overflow-hidden h-full group flex flex-col transition-shadow duration-300 hover:shadow-2xl">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-accent font-bold mb-2">
                      Education
                    </p>
                    <h3 className="font-headline text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                       <Button asChild className="w-full font-bold group/btn">
                          <Link href="/projects">
                              View Details <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1"/>
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

      {/* 4. Impact Statistics Section */}
      <Section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">
              Our Collective Impact
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Numbers that tell the story of our commitment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedStat
              value="100+"
              label="Projects Completed"
              icon={BarChart}
            />
            <AnimatedStat value="5000+" label="Lives Impacted" icon={HandHeart} />
            <AnimatedStat value="$1M+" label="Funds Raised" icon={Users} />
          </div>
        </div>
      </Section>

      {/* 5. Call-to-Action Section */}
      <Section id="join-us" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Want to be part of our next project?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Join a global network of volunteers making a difference. Your skills, passion, and time can help us create even greater impact.
          </p>
          <div className="mt-8">
             <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                <Link href="/events">Start Your Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
