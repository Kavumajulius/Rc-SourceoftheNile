
"use client";

import { fellowshipUpdates, events } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";


export default function FellowshipPage() {
  return (
    <div className="flex flex-col bg-background">
       {/* 1. Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[300px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="https://picsum.photos/1800/1200?random=70"
            alt="Fellowship gathering"
            fill
            className="object-cover"
            priority
            data-ai-hint="fellowship event"
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Fellowships
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
           Connecting, Sharing, Growing Together
          </motion.p>
        </div>
      </motion.section>


      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold md:text-5xl">Fellowship Updates</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Stay connected with highlights from our recent gatherings.
          </p>
        </div>

        <div className="space-y-12">
          {fellowshipUpdates.map((update, index) => (
            <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <CardTitle className="text-xl md:text-2xl">{update.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{update.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <CardDescription className="text-base leading-relaxed">{update.summary}</CardDescription>
                  </div>
                  {update.photos.length > 0 && (
                    <Carousel className="w-full max-w-lg mx-auto">
                      <CarouselContent>
                        {update.photos.map((photo, i) => (
                          <CarouselItem key={i}>
                            <div className="p-1">
                              <Card className="overflow-hidden">
                                <CardContent className="flex aspect-video items-center justify-center p-0">
                                  <Image
                                    src={photo.url}
                                    alt={`${update.title} photo ${i + 1}`}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                    data-ai-hint={photo.aiHint}
                                  />
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
