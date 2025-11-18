import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

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
        name: 'Twitter', 
        href: 'https://www.twitter.com', // Placeholder
        icon: Twitter 
    },
];
