import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart, Megaphone, PaintBrush, Search, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
const portfolioImages = PlaceHolderImages.filter(p => p.id.startsWith('portfolio'));

const services = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "SEO Optimization",
    description: "Boosting your visibility on search engines to attract organic traffic.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Social Media Marketing",
    description: "Creating and managing campaigns on social platforms to build your brand.",
  },
  {
    icon: <PaintBrush className="h-8 w-8 text-primary" />,
    title: "Content Creation",
    description: "Crafting compelling content that engages your audience and tells your story.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "PPC Campaigns",
    description: "Running targeted ad campaigns to drive immediate results and conversions.",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    title: "CEO, Tech Innovators",
    quote: "Vaishnavi's strategies doubled our online engagement in just three months. Her expertise is unparalleled.",
    avatar: "https://picsum.photos/seed/t1/40/40"
  },
  {
    name: "Samantha Lee",
    title: "Founder, Creative Co.",
    quote: "Working with Vaishnavi was a game-changer. Our brand now has a clear and powerful voice online.",
    avatar: "https://picsum.photos/seed/t2/40/40"
  },
  {
    name: "Michael Chen",
    title: "Marketing Director, HealthFirst",
    quote: "The results speak for themselves. We've seen a significant increase in leads since we started our campaign.",
    avatar: "https://picsum.photos/seed/t3/40/40"
  }
];

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative container z-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-headline font-bold md:text-6xl lg:text-7xl">
            Driving Growth Through Digital Strategy
          </h1>
          <p className="max-w-2xl text-lg text-foreground/80 md:text-xl">
            I'm Vaishnavi Hadke, a digital marketer helping brands connect with their audience and achieve their goals.
          </p>
          <div className="flex gap-4 mt-4">
            <Button asChild size="lg">
              <Link href="/portfolio">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">My Services</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
              I offer a range of services to help your business succeed online.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">Recent Projects</h2>
            <p className="mt-4 max-w-xl text-lg text-foreground/70">
              A glimpse into the results I've delivered for my clients.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {portfolioImages.slice(0, 2).map((image) => (
              <Card key={image.id} className="overflow-hidden group">
                <div className="relative aspect-video">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">
                See Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">What My Clients Say</h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
              Success stories from businesses I've helped grow.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-foreground/80">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
