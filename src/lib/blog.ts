import type { BlogPost } from '@/types';

const placeholderPosts: BlogPost[] = [
  {
    slug: 'what-is-tantra',
    title: "What Tantra Actually Is (And What It Isn't)",
    excerpt: 'Beyond the misconceptions, tantra is one of the most sophisticated maps of human consciousness and connection ever developed. Here is where to start.',
    date: 'May 2025',
    category: 'Tantra',
    readTime: '7 min read',
  },
  {
    slug: 'nervous-system-intimacy',
    title: 'Why Your Nervous System Is the Foundation of Intimacy',
    excerpt: 'Most of what gets labeled as "intimacy issues" is actually nervous system regulation. Understanding this changes everything.',
    date: 'April 2025',
    category: 'Nervous System',
    readTime: '8 min read',
  },
  {
    slug: 'consent-living-practice',
    title: 'Consent as a Living Practice, Not a Checkbox',
    excerpt: 'Consent is not something you get once and then move on from. It is an ongoing, nuanced, deeply relational skill.',
    date: 'March 2025',
    category: 'Consent',
    readTime: '6 min read',
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  return placeholderPosts.map((p) => ({ ...p }));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
