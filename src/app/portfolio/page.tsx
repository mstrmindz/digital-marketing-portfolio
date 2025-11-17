import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    id: "portfolio-1",
    title: "E-commerce SEO Overhaul",
    description: "Revitalized an online retailer's search presence, leading to a 150% increase in organic traffic and a 75% uplift in conversions.",
    tags: ["SEO", "E-commerce", "Content Strategy"],
    image: PlaceHolderImages.find(p => p.id === 'portfolio-1')
  },
  {
    id: "portfolio-2",
    title: "B2B Social Media Campaign",
    description: "Launched a targeted LinkedIn campaign for a SaaS company, generating over 500 qualified leads in the first quarter.",
    tags: ["Social Media", "B2B", "Lead Generation"],
    image: PlaceHolderImages.find(p => p.id === 'portfolio-2')
  },
  {
    id: "portfolio-3",
    title: "Startup Brand Identity",
    description: "Developed a complete brand identity and content strategy for a new tech startup, establishing a strong market presence from day one.",
    tags: ["Branding", "Content Marketing", "Startups"],
    image: PlaceHolderImages.find(p => p.id === 'portfolio-3')
  },
  {
    id: "portfolio-4",
    title: "Email Marketing Automation",
    description: "Implemented an automated email workflow for a subscription service, improving customer retention by 25%.",
    tags: ["Email Marketing", "Automation", "CRM"],
    image: PlaceHolderImages.find(p => p.id === 'portfolio-4')
  }
];

export default function PortfolioPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-headline font-bold md:text-5xl">My Work</h1>
        <p className="mt-4 text-lg text-foreground/70">
          Here are some of the projects I'm proud to have worked on. Each one represents a unique challenge and a story of growth.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="group flex flex-col overflow-hidden">
            {item.image && (
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image.imageUrl}
                  alt={item.image.description}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={item.image.imageHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center justify-between">
                {item.title}
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform duration-300 group-hover:rotate-45" />
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
