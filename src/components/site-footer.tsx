import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:gap-0">
        <div className="flex flex-col items-center gap-4 px-8 sm:flex-row sm:gap-2 sm:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              Vaishnavi Hadke
            </span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Vaishnavi Hadke. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-1">
          {SOCIAL_LINKS.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
