
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Section from "./section";

export default function ContactSection() {
    return (
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
    );
}
