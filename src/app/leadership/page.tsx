
"use client";

import { pastPresidents } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function LeadershipPage() {
  return (
    <div className="flex flex-col bg-background">
      {/* 1. Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[220px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="https://picsum.photos/1800/1200?random=60"
            alt="Leadership gathering"
            fill
            className="object-cover"
            priority
            data-ai-hint="leadership event"
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            className="font-headline text-2xl md:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Past Presidents
          </motion.h1>
          <motion.p
            className="mt-2 max-w-2xl mx-auto text-sm md:text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Honoring Our Legacy of Leadership
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Introductory Text */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-muted-foreground">
              Since our charter, the Rotary Club of the Source of the Nile has been guided by a succession of dedicated leaders. Each president has brought their unique vision and commitment, steering our club toward greater service, deeper fellowship, and lasting community impact. This page honors their invaluable contributions and celebrates the enduring legacy they have built.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. Presidents Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastPresidents.map((president, index) => (
              <motion.div
                key={president.term}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <Card className="bg-card text-card-foreground overflow-hidden h-full group flex flex-col text-center items-center transition-shadow duration-300 hover:shadow-2xl">
                  <CardHeader className="items-center">
                     <div className="relative w-[150px] h-[150px]">
                      <Image
                        src={president.imageUrl}
                        alt={`Portrait of ${president.name}`}
                        width={150}
                        height={150}
                        data-ai-hint={president.aiHint}
                        className="rounded-full object-cover border-4 border-card shadow-lg"
                      />
                    </div>
                    <CardTitle className="font-headline text-xl pt-4">{president.name}</CardTitle>
                    <p className="text-sm font-semibold text-accent">{president.term}</p>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <CardDescription className="text-sm text-muted-foreground line-clamp-4">
                      {president.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
