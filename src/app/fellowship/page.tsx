import { fellowshipUpdates } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FellowshipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Fellowship Updates</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Stay connected with highlights from our recent gatherings.
        </p>
      </div>

      <div className="space-y-12">
        {fellowshipUpdates.map((update, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <CardTitle className="font-headline text-2xl">{update.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{update.date}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
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
                                  className="object-cover w-full h-full"
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
  );
}
