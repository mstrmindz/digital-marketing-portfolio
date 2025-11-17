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
        period: "2020 - Present",
        title: "Senior Digital Marketer",
        description: "Leading strategy and execution for key accounts, driving significant growth in ROI and brand engagement."
    },
    {
        icon: <Award className="h-6 w-6 text-primary" />,
        period: "2018 - 2020",
        title: "Social Media Specialist",
        description: "Managed and grew social media presence for B2C clients, increasing follower base by over 300%."
    },
    {
        icon: <GraduationCap className="h-6 w-6 text-primary" />,
        period: "2014 - 2018",
        title: "B.Sc. in Marketing",
        description: "Graduated with honors, focusing on digital trends and consumer behavior."
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
            I believe that the best marketing doesn't feel like marketing at all. It's about building genuine connections and providing real value. My approach is rooted in understanding the 'why' behind consumer behavior, then using data-driven insights to craft strategies that resonate.
          </p>
          <p>
            For me, every click, like, and share tells a story. My job is to listen to that story and use it to help brands grow in a meaningful and sustainable way. I'm committed to transparency, continuous learning, and delivering results that go beyond the metrics.
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
