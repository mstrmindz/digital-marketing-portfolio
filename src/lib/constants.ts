import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.6 5.82a4.49 4.49 0 0 1-2.28-2.73 4.44 4.44 0 0 1 .1-2.42.5.5 0 0 0-.53-.53h-3.1a.5.5 0 0 0-.53.53v10.3A4.27 4.27 0 0 1 6 15.1a4.27 4.27 0 0 1-4.27-4.27A4.27 4.27 0 0 1 6 6.56a.5.5 0 0 0 .53-.53V2.91a.5.5 0 0 0-.53-.53H3.41a.5.5 0 0 0-.53.53 8.54 8.54 0 0 0 8.54 8.54v4.38a.5.5 0 0 0 .53.53h3.1a.5.5 0 0 0 .53-.53Z" />
    </svg>
);


export const SOCIAL_LINKS = [
    { 
        name: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/vaishnavi-hadke/', 
        icon: Linkedin 
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com', // Placeholder
        icon: Instagram
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com', // Placeholder
        icon: Facebook
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com', // Placeholder
        icon: Tiktok
    },
    { 
        name: 'Twitter', 
        href: 'https://www.twitter.com', // Placeholder
        icon: Twitter 
    },
];
