import { Github, Linkedin, Twitter } from "lucide-react";

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
        name: 'Twitter', 
        href: 'https://www.twitter.com', // Placeholder
        icon: Twitter 
    },
    { 
        name: 'GitHub', 
        href: 'https://www.github.com', // Placeholder
        icon: Github
    },
];
