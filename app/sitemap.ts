import { MetadataRoute } from 'next';
import { allSlugs } from '@/lib/local-seo-data';
import { extraPillarSlugs } from '@/lib/extra-pillar-data';
import { allClusterSlugs } from '@/lib/cluster-seo-data';
import { oldenburgMoneySlugs } from '@/lib/oldenburg-money-pages';
import { oldenburgSupportSlugs } from '@/lib/oldenburg-cluster-support';
import { oldenburgEduCostProofSlugs } from '@/lib/oldenburg-cluster-edu-cost-proof';
import { oldenburgMicroNicheSlugs } from '@/lib/oldenburg-cluster-microniche';
import { delmenhorstMoneySlugs } from '@/lib/delmenhorst-money-pages';
import { delmenhorstSupportSlugs } from '@/lib/delmenhorst-cluster-support';
import { delmenhorstEduCostProofSlugs } from '@/lib/delmenhorst-cluster-edu-cost-proof';
import { delmenhorstMicroNicheSlugs } from '@/lib/delmenhorst-cluster-microniche';
import { ganderkeseeMoneySlugs } from '@/lib/ganderkesee-money-pages';
import { ganderkeseeSupportSlugs } from '@/lib/ganderkesee-cluster-support';
import { ganderkeseeEduCostProofSlugs } from '@/lib/ganderkesee-cluster-edu-cost-proof';
import { ganderkeseeMicroNicheSlugs } from '@/lib/ganderkesee-cluster-microniche';
import { faqSlugs } from '@/lib/faq-pages';

const BASE_URL = 'https://northcode-esmail.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homePage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Original 12 money pages (BOFU, highest priority)
  const originalPillarPages: MetadataRoute.Sitemap = allSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 16 extra money pages (BOFU, high priority)
  const extraPillarEntries: MetadataRoute.Sitemap = extraPillarSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // 28 cluster / support pages (MOFU / TOFU, medium priority)
  const clusterEntries: MetadataRoute.Sitemap = allClusterSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Oldenburg: 2 extra money pages (BOFU)
  const oldenburgMoneyEntries: MetadataRoute.Sitemap = oldenburgMoneySlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Oldenburg: 38 cluster pages (BOFU/MOFU/TOFU)
  const oldenburgClusterSlugs = [
    ...oldenburgSupportSlugs,
    ...oldenburgEduCostProofSlugs,
    ...oldenburgMicroNicheSlugs,
  ];
  const oldenburgClusterEntries: MetadataRoute.Sitemap = oldenburgClusterSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Delmenhorst: 4 extra money pages (BOFU)
  const delmenhorstMoneyEntries: MetadataRoute.Sitemap = delmenhorstMoneySlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Delmenhorst: 36 cluster pages (BOFU/MOFU/TOFU)
  const delmenhorstClusterSlugs = [
    ...delmenhorstSupportSlugs,
    ...delmenhorstEduCostProofSlugs,
    ...delmenhorstMicroNicheSlugs,
  ];
  const delmenhorstClusterEntries: MetadataRoute.Sitemap = delmenhorstClusterSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Ganderkesee: 3 extra money pages (BOFU)
  const ganderkeseeMoneyEntries: MetadataRoute.Sitemap = ganderkeseeMoneySlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Ganderkesee: 37 cluster pages (BOFU/MOFU/TOFU)
  const ganderkeseeClusterSlugs = [
    ...ganderkeseeSupportSlugs,
    ...ganderkeseeEduCostProofSlugs,
    ...ganderkeseeMicroNicheSlugs,
  ];
  const ganderkeseeClusterEntries: MetadataRoute.Sitemap = ganderkeseeClusterSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 12 FAQ article pages (TOFU/MOFU education)
  const faqEntries: MetadataRoute.Sitemap = faqSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...homePage,
    ...originalPillarPages,
    ...extraPillarEntries,
    ...clusterEntries,
    ...oldenburgMoneyEntries,
    ...oldenburgClusterEntries,
    ...delmenhorstMoneyEntries,
    ...delmenhorstClusterEntries,
    ...ganderkeseeMoneyEntries,
    ...ganderkeseeClusterEntries,
    ...faqEntries,
  ];
}
