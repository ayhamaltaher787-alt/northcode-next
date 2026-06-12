import type { Metadata } from 'next';
import { getPageBySlug } from '@/lib/local-seo-data';
import { PillarTemplate } from '@/components/local-seo/pillar-template';

const data = getPageBySlug('landingpage-delmenhorst')!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `https://northcode.de/${data.slug}` },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://northcode.de/${data.slug}`,
  },
};

export default function Page() {
  return <PillarTemplate data={data} />;
}
