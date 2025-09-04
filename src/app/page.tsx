import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { events, fellowshipUpdates, projects, pastPresidents } from "@/lib/data";
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

const leadershipTeam = [
    { name: "President Name", role: "Club President", imageUrl: "https://picsum.photos/256/256?random=50" },
    { name: "Secretary Name", role: "Club Secretary", imageUrl: "https://picsum.photos/256/256?random=51" },
    { name: "Treasurer Name", role: "Club Treasurer", imageUrl: "https://picsum.photos/256/256?random=52" },
    { name: "Member Name", role: "Member", imageUrl: "https://picsum.photos/256/256?random=53" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] w-full">
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
          <div className="max-w-xl">
              <h1 className="font-headline text-4xl font-bold md:text-6xl">
                Service Above Self
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                The Rotary Club of Source of the Nile is dedicated to making a lasting impact in our community and beyond through service.
              </p>
              <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80 uppercase font-bold tracking-wider">
                <Link href="/events">Join Us</Link>
              </Button>
          </div>
        </div>
      </section>

      <section id="upcoming-events" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
              <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Upcoming Events</h2>
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {events.slice(0,3).map((event, index) => (
                      <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:-translate-y-2 transform">
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
                  ))}
              </div>
          </div>
      </section>

      <section id="recent-fellowships" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
              <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Recent Fellowships</h2>
              <div className="mt-12 space-y-12">
                  {fellowshipUpdates.map((update, index) => (
                      <div key={index} className="grid gap-8 md:grid-cols-2 items-center">
                          <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                              <h3 className="font-headline text-2xl font-bold text-primary">{update.title}</h3>
                              <p className="mt-2 text-muted-foreground">{update.summary}</p>
                          </div>
                          <div className={`grid grid-cols-2 gap-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                              {update.photos.slice(0, 4).map((photo, i) => (
                                <div key={i} className="overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1">
                                    <Image src={photo.url} alt={`${update.title} photo ${i + 1}`} width={300} height={300} className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300" data-ai-hint={photo.aiHint}/>
                                </div>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section id="community-projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Community Projects</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={project.aiHint} />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                  <p className="mt-4 font-headline text-2xl font-bold text-accent">Impact Stat</p>
                  <p className="mt-2 text-sm text-muted-foreground">{project.impact.split('. ')[0]}.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="leadership" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
              <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Leadership Team</h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                  {leadershipTeam.map((member) => (
                      <Card key={member.name} className="text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                          <Image src={member.imageUrl} alt={`Portrait of ${member.name}`} width={128} height={128} className="rounded-full object-cover mx-auto border-4 border-accent" data-ai-hint="portrait professional" />
                          <CardHeader className="p-4">
                              <CardTitle className="font-headline text-lg font-bold text-primary">{member.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      <section id="past-presidents" className="py-16 md:py-24">
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
                        <div className="p-1">
                            <Card className="text-center p-6">
                                <Image src={president.imageUrl} alt={`Portrait of ${president.name}`} width={128} height={128} className="rounded-full object-cover mx-auto border-4 border-accent" data-ai-hint={president.aiHint}/>
                                <CardHeader className="p-4">
                                <CardTitle className="font-headline text-lg font-bold text-primary">{president.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                <p className="text-sm font-semibold text-accent">{president.term}</p>
                                </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
          </div>
      </section>

       <section id="membership" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold">Become a Member</h2>
              <p className="mt-4 text-lg">Join a global network of volunteers and start creating positive change today. As a member of the Rotary Club of Source of the Nile, you'll connect with leaders, exchange ideas, and take action to improve our community.</p>
               <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80 uppercase font-bold tracking-wider">
                  <Link href="/events">Join Us</Link>
              </Button>
            </div>
             <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <Image src="https://picsum.photos/600/400?random=4" alt="Group of happy volunteers" fill className="object-cover" data-ai-hint="volunteers community"/>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
