"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { events, fellowshipUpdates, projects, pastPresidents, resourceLinks } from "@/lib/data";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const leadershipTeam = [
    { name: "President Name", role: "Club President", imageUrl: "https://picsum.photos/256/256?random=50", bio: "Leading with vision and passion." },
    { name: "Secretary Name", role: "Club Secretary", imageUrl: "https://picsum.photos/256/256?random=51", bio: "Organizing and ensuring smooth operations." },
    { name: "Treasurer Name", role: "Club Treasurer", imageUrl: "https://picsum.photos/256/256?random=52", bio: "Managing the club's finances with integrity." },
    { name: "Member Name", role: "Member", imageUrl: "https://picsum.photos/256/256?random=53", bio: "A dedicated member of our team." },
];

const galleryImages = [
  { url: "https://picsum.photos/600/400?random=60", aiHint: "community event" },
  { url: "https://picsum.photos/400/600?random=61", aiHint: "volunteers working" },
  { url: "https://picsum.photos/600/400?random=62", aiHint: "children smiling" },
  { url: "https://picsum.photos/600/400?random=63", aiHint: "project site" },
  { url: "https://picsum.photos/400/600?random=64", aiHint: "group photo" },
  { url: "https://picsum.photos/600/400?random=65", aiHint: "cultural celebration" },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
  },
};

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically handle form submission
    alert("Thank you for your message!");
    form.reset();
  }
  
  return (
    <div className="flex flex-col">
      <motion.section 
        className="relative h-[80vh] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Community project by RC Source of the Nile"
          fill
          className="object-cover"
          data-ai-hint="community project"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-primary-foreground container mx-auto px-4">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
              <h1 className="font-headline text-4xl font-bold md:text-6xl">
                Service Above Self
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                The Rotary Club of Source of the Nile is dedicated to making a lasting impact in our community and beyond through service.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80 uppercase font-bold tracking-wider">
                  <Link href="/events">Join Us</Link>
                </Button>
              </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="upcoming-events" 
        className="py-16 md:py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
          <div className="container mx-auto px-4">
              <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Upcoming Events</h2>
              <motion.div 
                className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              >
                  {events.slice(0,3).map((event, index) => (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                      >
                        <Card className="overflow-hidden h-full">
                            <CardHeader className="p-0">
                                 <div className="relative h-56 w-full">
                                    <Image src={`https://picsum.photos/600/400?random=${30+index}`} alt={event.title} fill className="object-cover" data-ai-hint="event meeting"/>
                                    <div className="absolute bottom-0 left-0 bg-accent/90 text-accent-foreground p-3 rounded-tr-lg">
                                        <p className="text-2xl font-bold">{event.date.toLocaleDateString('en-US', { day: '2-digit' })}</p>
                                        <p className="text-sm font-semibold">{event.date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</p>
                                    </div>
                                 </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{event.summary}</p>
                                <Button asChild variant="link" className="p-0 mt-4 text-accent font-bold">
                                    <Link href="/events">Learn More &rarr;</Link>
                                </Button>
                            </CardContent>
                        </Card>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </motion.section>

      <motion.section 
        id="recent-fellowships" 
        className="py-16 md:py-24 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
          <div className="container mx-auto px-4">
              <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Recent Fellowships</h2>
              <div className="mt-12 space-y-12">
                  {fellowshipUpdates.map((update, index) => (
                      <motion.div 
                        key={index}
                        className="grid gap-8 md:grid-cols-2 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={sectionVariants}
                      >
                          <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                              <h3 className="font-headline text-2xl font-bold text-primary">{update.title}</h3>
                              <p className="mt-2 text-muted-foreground">{update.summary}</p>
                          </div>
                          <div className={`grid grid-cols-2 gap-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                              {update.photos.slice(0, 4).map((photo, i) => (
                                <motion.div 
                                    key={i} 
                                    className="overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image src={photo.url} alt={`${update.title} photo ${i + 1}`} width={300} height={300} className="object-cover w-full h-full" data-ai-hint={photo.aiHint}/>
                                </motion.div>
                              ))}
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </motion.section>

      <motion.section 
        id="community-projects" 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Community Projects</h2>
          <motion.div 
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              >
                <Card className="overflow-hidden h-full group">
                  <CardHeader className="p-0">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={project.aiHint} />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                    <p className="mt-4 font-headline text-2xl font-bold text-accent">Impact Stat</p>
                    <p className="mt-2 text-sm text-muted-foreground">{project.impact.split('. ')[0]}.</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      <motion.section 
        id="leadership" 
        className="py-16 md:py-24 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
          <div className="container mx-auto px-4">
              <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Leadership Team</h2>
              <motion.div 
                className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                  {leadershipTeam.map((member) => (
                      <motion.div key={member.name} variants={cardVariants} style={{ perspective: 1000 }}>
                        <motion.div
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full h-64 [transform-style:preserve-3d]"
                        >
                            {/* Front of Card */}
                            <Card className="absolute w-full h-full text-center p-6 [backface-visibility:hidden]">
                                <Image src={member.imageUrl} alt={`Portrait of ${member.name}`} width={128} height={128} className="rounded-full object-cover mx-auto border-4 border-accent" data-ai-hint="portrait professional" />
                                <CardHeader className="p-4">
                                    <CardTitle className="font-headline text-lg font-bold text-primary">{member.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </CardContent>
                            </Card>
                            {/* Back of Card */}
                            <Card className="absolute w-full h-full text-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center bg-primary text-primary-foreground">
                                <CardHeader>
                                    <CardTitle className="font-headline text-lg font-bold">{member.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">{member.bio}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                  ))}
              </motion.div>
          </div>
      </motion.section>

      <motion.section 
        id="past-presidents" 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
          <div className="container mx-auto px-4">
              <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Past Presidents</h2>
                <Carousel
                    opts={{
                    align: "start",
                    loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto mt-12"
                >
                    <CarouselContent>
                    {pastPresidents.map((president, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <motion.div 
                          className="p-1"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.5 }}
                        >
                            <Card className="text-center p-6 h-full">
                                <Image src={president.imageUrl} alt={`Portrait of ${president.name}`} width={128} height={128} className="rounded-full object-cover mx-auto border-4 border-accent" data-ai-hint={president.aiHint}/>
                                <CardHeader className="p-4">
                                  <CardTitle className="font-headline text-lg font-bold text-primary">{president.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                  <p className="text-sm font-semibold text-accent">{president.term}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
          </div>
      </motion.section>

       <motion.section 
        id="membership" 
        className="py-16 md:py-24 bg-primary text-primary-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
       >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="font-headline text-3xl font-bold">Become a Member</h2>
              <p className="mt-4 text-lg">Join a global network of volunteers and start creating positive change today. As a member of the Rotary Club of Source of the Nile, you'll connect with leaders, exchange ideas, and take action to improve our community.</p>
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80 uppercase font-bold tracking-wider">
                      <Link href="/events">Join Us</Link>
                  </Button>
               </motion.div>
            </motion.div>
             <motion.div 
                className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
             >
                  <Image src="https://picsum.photos/600/400?random=4" alt="Group of happy volunteers" fill className="object-cover" data-ai-hint="volunteers community"/>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.section
        id="photo-gallery"
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Photo Gallery</h2>
          <motion.div 
            className="mt-12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.03, zIndex: 10 }}
              >
                <Image src={image.url} alt={`Gallery image ${index + 1}`} width={600} height={400} className="w-full h-auto" data-ai-hint={image.aiHint} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="resources"
        className="py-16 md:py-24 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Resources & Links</h2>
          <motion.div 
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {resourceLinks.flatMap(cat => cat.links).slice(0, 4).map((link, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="w-full h-24 bg-primary text-primary-foreground text-lg hover:bg-accent hover:text-accent-foreground">
                  <Link href={link.url} target="_blank">{link.title}</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary mb-12">Contact & Location</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Your message..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button type="submit" className="w-full bg-accent text-accent-foreground">Submit</Button>
                      </motion.div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              className="relative min-h-[400px] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.755495493892!2d33.2044876152309!3d0.422119799638423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e7b89311413f7%3A0x6d9f70821e3f84f0!2sSource%20of%20the%20Nile%20Bridge!5e0!3m2!1sen!2sug!4v1683893661858!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
