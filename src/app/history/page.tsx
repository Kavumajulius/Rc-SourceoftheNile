import { pastPresidents } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Legacy of Leadership</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A tribute to the dedicated individuals who have guided our club through the years.
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        
        <div className="space-y-12">
          {pastPresidents.map((president, index) => (
            <div key={president.term} className="md:grid md:grid-cols-2 md:gap-8 items-start">
              <div className={`flex justify-center md:justify-end ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                   <Image
                    src={president.imageUrl}
                    alt={`Portrait of ${president.name}`}
                    width={256}
                    height={256}
                    data-ai-hint={president.aiHint}
                    className="rounded-full object-cover border-4 border-card shadow-lg"
                  />
                </div>
              </div>
              <div className={`mt-4 md:mt-0 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <Card className="text-left">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <CardTitle className="font-headline text-2xl">{president.name}</CardTitle>
                      <span className="text-sm font-semibold text-primary mt-1 sm:mt-0">{president.term}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{president.bio}</CardDescription>
                    <h4 className="font-bold mt-4 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {president.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
                          <span className="text-sm text-muted-foreground">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
