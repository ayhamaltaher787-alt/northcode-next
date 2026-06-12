import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PillarTemplate } from '@/components/local-seo/pillar-template';
import ClusterTemplate from '@/components/local-seo/cluster-template';
import FaqTemplate from '@/components/local-seo/faq-template';
import { getPageBySlug, allSlugs } from '@/lib/local-seo-data';
import { faqPages, faqSlugs } from '@/lib/faq-pages';
import { extraPillarPages, extraPillarSlugs } from '@/lib/extra-pillar-data';
import { getClusterBySlug, allClusterSlugs } from '@/lib/cluster-seo-data';
import { oldenburgMoneyPages, oldenburgMoneySlugs } from '@/lib/oldenburg-money-pages';
import { oldenburgSupportClusters, oldenburgSupportSlugs } from '@/lib/oldenburg-cluster-support';
import { oldenburgEduCostProofClusters, oldenburgEduCostProofSlugs } from '@/lib/oldenburg-cluster-edu-cost-proof';
import { oldenburgMicroNicheClusters, oldenburgMicroNicheSlugs } from '@/lib/oldenburg-cluster-microniche';
import { delmenhorstMoneyPages, delmenhorstMoneySlugs } from '@/lib/delmenhorst-money-pages';
import { delmenhorstSupportClusters, delmenhorstSupportSlugs } from '@/lib/delmenhorst-cluster-support';
import { delmenhorstEduCostProofClusters, delmenhorstEduCostProofSlugs } from '@/lib/delmenhorst-cluster-edu-cost-proof';
import { delmenhorstMicroNicheClusters, delmenhorstMicroNicheSlugs } from '@/lib/delmenhorst-cluster-microniche';
import { ganderkeseeMoneyPages, ganderkeseeMoneySlugs } from '@/lib/ganderkesee-money-pages';
import { ganderkeseeSupportClusters, ganderkeseeSupportSlugs } from '@/lib/ganderkesee-cluster-support';
import { ganderkeseeEduCostProofClusters, ganderkeseeEduCostProofSlugs } from '@/lib/ganderkesee-cluster-edu-cost-proof';
import { ganderkeseeMicroNicheClusters, ganderkeseeMicroNicheSlugs } from '@/lib/ganderkesee-cluster-microniche';

type Props = { params: Promise<{ slug: string }> };

/* ── Static params: all pillar + cluster pages ─────────────────────────── */
export function generateStaticParams() {
  return [
    ...allSlugs.map(slug => ({ slug })),
    ...extraPillarSlugs.map(slug => ({ slug })),
    ...allClusterSlugs.map(slug => ({ slug })),
    ...oldenburgMoneySlugs.map(slug => ({ slug })),
    ...oldenburgSupportSlugs.map(slug => ({ slug })),
    ...oldenburgEduCostProofSlugs.map(slug => ({ slug })),
    ...oldenburgMicroNicheSlugs.map(slug => ({ slug })),
    ...delmenhorstMoneySlugs.map(slug => ({ slug })),
    ...delmenhorstSupportSlugs.map(slug => ({ slug })),
    ...delmenhorstEduCostProofSlugs.map(slug => ({ slug })),
    ...delmenhorstMicroNicheSlugs.map(slug => ({ slug })),
    ...ganderkeseeMoneySlugs.map(slug => ({ slug })),
    ...ganderkeseeSupportSlugs.map(slug => ({ slug })),
    ...ganderkeseeEduCostProofSlugs.map(slug => ({ slug })),
    ...ganderkeseeMicroNicheSlugs.map(slug => ({ slug })),
    ...faqSlugs.map(slug => ({ slug })),
  ];
}

/* ── Resolve page data ──────────────────────────────────────────────────── */
// All extra cluster pages combined
const allExtraClusters = [
  ...oldenburgSupportClusters,
  ...oldenburgEduCostProofClusters,
  ...oldenburgMicroNicheClusters,
  ...delmenhorstSupportClusters,
  ...delmenhorstEduCostProofClusters,
  ...delmenhorstMicroNicheClusters,
  ...ganderkeseeSupportClusters,
  ...ganderkeseeEduCostProofClusters,
  ...ganderkeseeMicroNicheClusters,
  ...faqPages,
];

function resolvePageData(slug: string) {
  const pillar =
    getPageBySlug(slug) ??
    extraPillarPages.find(p => p.slug === slug) ??
    oldenburgMoneyPages.find(p => p.slug === slug) ??
    delmenhorstMoneyPages.find(p => p.slug === slug) ??
    ganderkeseeMoneyPages.find(p => p.slug === slug);

  if (pillar) return { type: 'pillar' as const, pillar };

  const cluster =
    getClusterBySlug(slug) ??
    allExtraClusters.find(c => c.slug === slug);

  if (cluster) return { type: 'cluster' as const, cluster };

  return null;
}

/* ── generateMetadata ───────────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolvePageData(slug);

  if (!resolved) return { title: 'Northcode' };

  if (resolved.type === 'pillar') {
    const { pillar: data } = resolved;
    return {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: `https://northcode.de/${data.slug}` },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://northcode.de/${data.slug}`,
        siteName: 'Northcode',
        locale: 'de_DE',
        type: 'website',
      },
    };
  }

  const { cluster: data } = resolved;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://northcode.de/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://northcode.de/${data.slug}`,
      siteName: 'Northcode',
      locale: 'de_DE',
      type: 'article',
    },
  };
}

/* ── Page component ─────────────────────────────────────────────────────── */
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const resolved = resolvePageData(slug);

  if (!resolved) notFound();

  if (resolved.type === 'pillar') {
    return <PillarTemplate data={resolved.pillar} />;
  }

  if (faqSlugs.includes(slug)) {
    return <FaqTemplate data={resolved.cluster} />;
  }

  return <ClusterTemplate data={resolved.cluster} />;
}
