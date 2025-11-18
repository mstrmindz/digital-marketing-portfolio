import { Facebook, Instagram, Linkedin, Tiktok, Twitter } from "lucide-react";

export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

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
