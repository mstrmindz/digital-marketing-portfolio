import Image from "next/image";
import Link from "next/link";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const headshotImage = PlaceHolderImages.find(p => p.id === 'headshot');

const professionalJourney = [
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        period: "Apr 2025 - Present",
        title: "Field Marketing Representative",
        description: "Representing Kognitive Sales Solutions in the field, driving brand awareness and customer acquisition through direct engagement."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        period: "Jan 2025 - Mar 2025",
        title: "Host/Cashier",
        description: "Provided excellent customer service as a host and cashier at The Ballroom Bowl, ensuring a smooth and enjoyable guest experience."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        period: "Oct 2023 - Aug 2024",
        title: "Manager - Social Media & Client Servicing",
        description: "Managed social media strategies and maintained client relationships at BigTrunk Communications, driving engagement and client satisfaction."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        period: "Jun 2022 - May 2023",
        title: "Senior Client Servicing and Digital Media Executive",
        description: "Handled senior client accounts and executed digital media campaigns at Dentsu Creative, contributing to successful project delivery."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        period: "Oct 2021 - May 2022",
        title: "Social Media & Content Executive",
        description: "Created and managed engaging content and social media presence for various brands at Buzz Makers."
    }
];

export default function AboutPage() {
  return (
    <div className="container max-w-5xl py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-headline font-bold md:text-5xl">About Vaishnavi</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          A passionate digital marketer with a knack for turning data into results.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-5 items-start">
        <div className="md:col-span-2">
          {headshotImage && (
            <div className="aspect-square relative rounded-lg shadow-lg overflow-hidden">
                <Image
                src={headshotImage.imageUrl}
                alt={headshotImage.description}
                fill
                className="object-cover"
                data-ai-hint={headshotImage.imageHint}
                sizes="(max-width: 768px) 100vw, 40vw"
                />
            </div>
          )}
        </div>
        <div className="md:col-span-3 space-y-6 text-foreground/90 text-lg">
          <h2 className="font-headline text-3xl font-bold">My Philosophy</h2>
          <p>
            I’ve always had a thing for creativity—colors, patterns, words, and ideas that spark curiosity. Somewhere along the way, I realized I could turn that spark into impact (and income!) through the world of marketing and sales.
          </p>
          <p>
            Over the last 4 years, I’ve built my career from Content Writer Intern to Account Manager in marketing with agencies like Dentsu Creative and BigTrunk Communications, collaborating with industry legends like Tata Motors Passenger Vehicles and more. From pitching ideas to crafting campaigns, I learned the art of understanding audiences and creating moments that make brands stand out and surprise!
          </p>
          <p>
            In 2025, life brought me to Toronto, Canada. I completed a postgraduate diploma in Project Management and am now stepping into my second postgrad in Marketing this Fall. Meanwhile, I’m living the thrill of the field as a Field Marketing Representative with PC Financial — where I get to see the power of marketing meet the rush of real-time sales. Talking to customers, hitting their pain points, and closing sales has taught me marketing at its rawest and most practical level. While doing that, I have started with my new course in Marketing Management – Digital Media program to learn in-depth about how Canadian Market works around it.
          </p>
          <p>
            And here’s the truth: marketing never leaves me. Like Djo’s iconic line—“You can take the man out of the city, but not the city out of the man”—I can’t stop my eyes from chasing ads everywhere I go. Whether it’s a subway poster, a gas station banner, or snackable content on social media platforms, I find myself decoding how brands thought it through—and what makes us stop, smile, and act.
          </p>
          <p>
            Now, I’m exploring Canada’s vibrant ad world, soaking in how brands connect with people here, and bringing my own blend of creative storytelling + sales-driven strategy to every project I touch.
          </p>
          <p className="italic text-foreground/70">
            💬 Have you seen an ad you just can’t get out of your head? I’d love to hear about it, DM me and let’s geek out about marketing together!
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Let's Connect</Link>
          </Button>
        </div>
      </div>

      <section className="mt-16 md:mt-24">
        <div className="text-center">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">My Journey</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
                A timeline of my professional and educational milestones.
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
            {professionalJourney.map((item, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                        {item.icon}
                        <div>
                            <p className="text-sm text-muted-foreground">{item.period}</p>
                            <CardTitle className="text-lg font-headline">{item.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p>{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
