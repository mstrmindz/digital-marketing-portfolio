import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Megaphone, Paintbrush, Search, TrendingUp, Users } from "lucide-react";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: <Search className="w-10 h-10 text-primary mb-4" />,
    description: "Enhance your website's visibility on search engines to capture organic traffic. I focus on technical SEO, on-page optimization, and quality link building to get you to the top.",
    features: [
      "Keyword Research & Strategy",
      "Technical SEO Audits",
      "Content & On-Page SEO",
      "Link Building Campaigns",
    ],
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    icon: <TrendingUp className="w-10 h-10 text-primary mb-4" />,
    description: "Drive targeted traffic and generate leads quickly with effective PPC campaigns on platforms like Google Ads and Bing. I manage budgets efficiently to maximize your ROI.",
    features: [
      "Campaign Setup & Management",
      "Ad Copy & Creative Design",
      "Conversion Rate Optimization",
      "Performance Tracking & Reporting",
    ],
  },
  {
    title: "Social Media Marketing",
    icon: <Users className="w-10 h-10 text-primary mb-4" />,
    description: "Build and engage your community on social media. I create tailored strategies for platforms like Instagram, Facebook, LinkedIn, and Twitter to grow your brand's voice.",
    features: [
      "Platform-Specific Strategy",
      "Content Calendar & Creation",
      "Community Management",
      "Paid Social Advertising",
    ],
  },
  {
    title: "Content Marketing",
    icon: <Paintbrush className="w-10 h-10 text-primary mb-4" />,
    description: "Attract and retain your audience with high-quality, valuable content. From blog posts to videos, I help you tell your story in a way that converts.",
    features: [
      "Content Strategy & Planning",
      "Blog & Article Writing",
      "Video & Infographic Production",
      "Content Distribution & Promotion",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-headline font-bold md:text-5xl">Digital Marketing Services</h1>
        <p className="mt-4 text-lg text-foreground/70">
          A complete suite of services designed to elevate your brand's digital presence, engage your audience, and drive measurable results.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="items-center text-center">
              {service.icon}
              <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              <CardDescription className="px-6">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
