import { resourceLinks } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Resources</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A directory of essential resources for our members.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {resourceLinks.map((category, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="font-headline text-xl">
                {category.category}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pt-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <LinkIcon className="h-4 w-4 mr-2" />
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
