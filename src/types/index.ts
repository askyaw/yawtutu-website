export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context?: string;
}

export interface Workshop {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  capacity?: string;
  href: string;
  description: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}
