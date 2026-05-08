import type { Metadata } from 'next';

const siteConfig = {
  name: 'Yaw Tutu',
  title: 'Yaw Tutu — Tantra, Embodiment & Conscious Intimacy',
  description:
    'Transformational workshops and retreats in tantra foundations, conscious intimacy education, and private VIP couple experiences in coastal Maine. Led by Yaw Tutu.',
  url: 'https://yawtutu.com',
  ogImage: '/images/og-default.jpg',
  twitterHandle: '@yawtutu',
  locale: 'en_US',
};

export { siteConfig };

export function buildMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const metaDescription = description ?? siteConfig.description;
  const metaUrl = `${siteConfig.url}${path}`;
  const metaImage = image ?? siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: metaUrl },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [{ url: metaImage, width: 1200, height: 630, alt: metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: siteConfig.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
