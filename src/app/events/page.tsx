
"use client";

import { events } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function EventsPage() {
  const [clientEvents, setClientEvents] = useState<typeof events & { date: Date }[]>([]);

  useEffect(() => {
    const eventsWithDates = events.map((event, index) => ({
      ...event,
      date: new Date(new Date().setDate(new Date().getDate() + 7 * (index + 1))),
    }));
    setClientEvents(eventsWithDates);
  }, []);

  const sortedEvents = clientEvents.sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="flex flex-col bg-background">
      {/* 1. Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[350px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="https://picsum.photos/1800/1200?random=90"
            alt="Rotary Event"
            fill
            className="object-cover"
            priority
            data-ai-hint="community event"
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Events
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Celebrating Our Moments Together
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Upcoming Events Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Upcoming Events</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Join us for our upcoming meetings, projects, and fellowship events.
          </p>
        </div>

        <div className="space-y-8">
          {sortedEvents.map((event, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Card className="flex flex-col md:flex-row transition-shadow duration-300 hover:shadow-xl overflow-hidden">
                <div className="flex flex-col items-center justify-center bg-secondary p-6 text-center md:w-48">
                  <p className="text-5xl font-bold text-primary">{event.date.toLocaleDateString('en-US', { day: '2-digit' })}</p>
                  <p className="text-lg font-semibold text-primary">{event.date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</p>
                  <p className="text-sm text-muted-foreground">{event.date.getFullYear()}</p>
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{event.summary}</CardDescription>
                    <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
       {/* 5. Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="py-20 bg-accent text-accent-foreground"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Join us at our next event and make a difference.
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-xl mx-auto">
            Your skills, passion, and time can help us create even greater impact.
          </p>
          <div className="mt-8">
             <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                <Link href="/leadership#join-us">
                    Join Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
