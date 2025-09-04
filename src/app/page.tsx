import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Community project by RC Source of the Nile"
          fill
          className="object-cover"
          data-ai-hint="community project"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Service Above Self
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            The Rotary Club of Source of the Nile is dedicated to making a lasting impact in our community and beyond.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/projects">Our Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/events">Join Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Mission</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-secondary p-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Community Impact</h3>
              <p className="mt-2 text-muted-foreground">
                We focus on high-impact projects that address the most pressing needs of our local and international communities.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-secondary p-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Fellowship</h3>
              <p className="mt-2 text-muted-foreground">
                We build lifelong friendships and professional connections through our weekly meetings and social events.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-secondary p-4">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Professional Development</h3>
              <p className="mt-2 text-muted-foreground">
                Our members share their skills and expertise, creating a unique environment for personal and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Featured Projects</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image src="https://picsum.photos/600/400?random=1" alt="Clean Water Project" fill className="object-cover" data-ai-hint="clean water"/>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline">Clean Water Initiative</CardTitle>
                <CardDescription className="mt-2">Providing access to safe and clean drinking water for rural communities.</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0">
                    <Link href="/projects">Learn More &rarr;</Link>
                 </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image src="https://picsum.photos/600/400?random=2" alt="Education Support" fill className="object-cover" data-ai-hint="education children"/>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline">Literacy for All</CardTitle>
                <CardDescription className="mt-2">Building libraries and providing books to schools in underserved areas.</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0">
                    <Link href="/projects">Learn More &rarr;</Link>
                 </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image src="https://picsum.photos/600/400?random=3" alt="Healthcare Drive" fill className="object-cover" data-ai-hint="healthcare medical"/>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline">Community Health Camps</CardTitle>
                <CardDescription className="mt-2">Organizing free medical camps offering check-ups and basic treatments.</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0">
                    <Link href="/projects">Learn More &rarr;</Link>
                 </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to Make a Difference?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Join a global network of volunteers and start creating positive change today.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/events">Become a Member</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
