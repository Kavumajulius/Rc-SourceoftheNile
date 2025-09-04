import { projects } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Projects</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover the impactful projects our club has undertaken to serve our community and the world.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl md:grid md:grid-cols-3 md:items-start">
            <div className="relative h-56 w-full md:h-full md:col-span-1">
              <Image 
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.aiHint}
              />
            </div>
            <div className="md:col-span-2">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Impact</h4>
                  <p className="mt-1 text-foreground">{project.impact}</p>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
