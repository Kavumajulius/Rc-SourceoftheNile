
"use client";

import { resourceLinks } from "@/lib/data";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  const allLinks = resourceLinks.flatMap(category => category.links);

  return (
    <div className="flex flex-col bg-background">
      {/* 1. Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[300px] md:h-[300px] flex items-center justify-center text-center text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="https://picsum.photos/1800/1200?random=80"
            alt="Members engaging in a project"
            fill
            className="object-cover"
            priority
            data-ai-hint="teamwork community"
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            className="text-2xl md:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Resources
          </motion.h1>
          <motion.p
            className="mt-2 max-w-2xl mx-auto text-sm md:text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Your Gateway to Rotary Tools & Information
          </motion.p>
        </div>
      </motion.section>
      
      {/* 2. Introductory Text */}
       <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
             <p className="text-base md:text-lg text-muted-foreground">
                This page provides quick and easy access to essential Rotary International and District resources. Whether you're looking to manage your profile, learn more about our global initiatives, or find branding materials, this is your starting point.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. Resource Cards Grid */}
      <motion.section 
        className="pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Card className="bg-card text-card-foreground overflow-hidden h-full group flex flex-col transition-shadow duration-300 hover:shadow-2xl">
                  <CardContent className="p-6 flex flex-col flex-grow">
                     <LinkIcon className="h-8 w-8 mb-4 text-accent"/>
                    <h3 className="text-xl font-bold text-primary">
                      {link.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">
                      {link.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                       <Button asChild className="w-full font-bold group/btn bg-accent text-accent-foreground hover:bg-accent/90" variant="default">
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                              Visit Site <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1"/>
                          </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* 4. Call-to-Action Section */}
      <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 1 }}
        className="py-20 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stay connected with Rotary’s global network.
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Your journey in service and leadership starts here. Join us to make a lasting impact.
          </p>
          <div className="mt-8">
             <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                <Link href="/events">
                    Join Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
