import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const { default: MDXContent } = await import(`@/content/blog/${slug}.mdx`).catch(() => ({
    default: () => null,
  }));

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 bg-charcoal-800">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 to-charcoal-800" />
        <div className="relative z-10 container-editorial">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-ivory/50 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Journal
          </Link>
          <div className="max-w-3xl">
            <p className="subheading text-gold/70 mb-4">{post.category}</p>
            <h1 className="heading-xl text-ivory mb-5 text-balance">{post.title}</h1>
            <div className="flex gap-4 text-xs text-ivory/40">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="section-padding bg-ivory">
        <div className="container-narrow">
          <div className="prose prose-lg prose-neutral max-w-none
            prose-headings:font-display prose-headings:font-light prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-charcoal-600 prose-p:leading-relaxed
            prose-a:text-gold prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-gold/40 prose-blockquote:text-charcoal-500 prose-blockquote:italic
            prose-strong:text-charcoal-800
          ">
            {MDXContent ? <MDXContent /> : (
              <p className="text-charcoal-400 italic">Content loading…</p>
            )}
          </div>

          <div className="mt-16 pt-10 border-t border-sand/40">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-800 transition-colors"
            >
              <ArrowLeft size={15} />
              Back to Journal
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
