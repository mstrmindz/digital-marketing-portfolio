"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export default function ContactPage() {
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
      } else if (state.message) {
        toast({
          title: "Something went wrong",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <div className="container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-headline font-bold md:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-lg text-foreground/70">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={dispatch} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" />
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="How can I help you?" rows={5} />
                {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Contact Details</CardTitle>
                    <CardDescription>Other ways to reach me.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:hello@vaishnavihadke.com" className="text-primary hover:underline">
                            hello@vaishnavihadke.com
                        </a>
                    </div>
                     <div>
                        <h3 className="font-semibold">Social Media</h3>
                        <div className="flex space-x-2 mt-2">
                            {SOCIAL_LINKS.map((social) => (
                                <Button key={social.name} variant="outline" size="icon" asChild>
                                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                                        <social.icon className="h-5 w-5" />
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
