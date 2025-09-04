import { events } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  const sortedEvents = events.sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Upcoming Events</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join us for our upcoming meetings, projects, and fellowship events.
        </p>
      </div>

      <div className="space-y-8">
        {sortedEvents.map((event, index) => (
          <Card key={index} className="flex flex-col md:flex-row transition-shadow duration-300 hover:shadow-xl">
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
        ))}
      </div>
    </div>
  );
}
