'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bot, Settings2, BarChart3, Link2, Monitor, Target, ShoppingCart, Search,
  Map, Cloud, Smartphone, FolderOpen, ClipboardList, Factory, Package,
  RefreshCw, Plug, Database, Shield, Film, Megaphone, Mic, Building2,
  Compass, Wrench, BookOpen, Scale, Laptop, Zap, Video, Users, ShoppingBag,
  Mail, Receipt, Globe, Folder, ChevronDown, Phone, Calendar, MapPin,
  CheckCircle2, ArrowRight, Star, type LucideIcon,
} from 'lucide-react';
import { PillarPageData, pillarPages } from '@/lib/local-seo-data';
import { BackgroundPathsDark } from '@/components/ui/background-paths';

/* ── Constants ───────────────────────────────────────────────────────────── */
const CALENDLY  = 'https://calendly.com/maxsel-100/30min?month=2026-06';
const WA_BASE   = 'https://wa.me/491786270048?text=';
const ANALYSE_URL = '/#analyse';

/* ── Emoji → Lucide icon map ─────────────────────────────────────────────── */
const ICON_MAP: Record<string, LucideIcon> = {
  '🤖': Bot,          '⚙️': Settings2,  '📊': BarChart3,    '🔗': Link2,
  '💻': Monitor,      '🎯': Target,     '🛒': ShoppingCart, '🔍': Search,
  '🗺️': Map,         '☁️': Cloud,      '📱': Smartphone,   '📂': FolderOpen,
  '📋': ClipboardList,'🏭': Factory,    '📦': Package,      '🔄': RefreshCw,
  '🔌': Plug,         '🗄️': Database,  '🛡️': Shield,      '🎬': Film,
  '📣': Megaphone,    '🎙️': Mic,       '🏢': Building2,    '🧭': Compass,
  '🔧': Wrench,       '📐': BookOpen,   '⚖️': Scale,        '🖥️': Laptop,
  '⚡': Zap,          '🎥': Video,      '📲': Smartphone,   '👥': Users,
  '🛍️': ShoppingBag, '💌': Mail,       '🧾': Receipt,      '🌐': Globe,
  '📁': Folder,
};

function ServiceIcon({ emoji }: { emoji: string }) {
  const Icon = ICON_MAP[emoji] ?? Star;
  return <Icon size={24} color="#7BAE9B" strokeWidth={1.6} aria-hidden />;
}

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
function JsonLd({ data }: { data: PillarPageData }) {
  const localBusiness = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'Northcode', description: data.metaDescription,
    url: `https://northcode.de/${data.slug}`,
    telephone: '+4901786270048', email: 'northcodeesmail@gmail.com',
    address: {
      '@type': 'PostalAddress', addressLocality: data.city,
      addressRegion: 'Niedersachsen', addressCountry: 'DE',
    },
    areaServed: [data.city, 'Bremen', 'Oldenburg', 'Delmenhorst', 'Ganderkesee', 'Nordwest-Deutschland'],
    serviceType: data.service, priceRange: '€€',
    sameAs: ['https://www.linkedin.com/company/northcode'],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

/* ── FAQ accordion ────────────────────────────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      transition: '200ms',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '22px 0', gap: 16,
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontWeight: 600, color: '#fff', fontSize: 15.5, lineHeight: 1.5,
          borderLeft: open ? '3px solid #3D8B78' : '3px solid transparent',
          paddingLeft: 14, transition: '200ms',
        }}>
          {question}
        </span>
        <div style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
          background: open ? 'rgba(61,139,120,0.25)' : 'rgba(255,255,255,0.06)',
          border: open ? '1px solid rgba(61,139,120,0.5)' : '1px solid rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: '200ms',
        }}>
          <ChevronDown
            size={16} color={open ? '#7BAE9B' : 'rgba(255,255,255,0.5)'} aria-hidden
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '200ms' }}
          />
        </div>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: 'hidden',
        transition: 'max-height 280ms cubic-bezier(.4,0,.2,1)',
      }}>
        <p style={{
          fontSize: 14.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
          paddingBottom: 24, margin: 0, paddingLeft: 17,
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   MAIN TEMPLATE
   ════════════════════════════════════════════════════════════════════════════ */
export function PillarTemplate({ data }: { data: PillarPageData }) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const otherPages = pillarPages.filter(p => p.slug !== data.slug);

  const WA = `${WA_BASE}${encodeURIComponent('Hallo, ich interessiere mich für ' + data.service + ' in ' + data.city)}`;

  React.useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <JsonLd data={data} />

      {/* ════════════════════════════════════════════════════
          1 · NAV — dark glassmorphism
          ════════════════════════════════════════════════════ */}
      <nav
        role="navigation"
        aria-label="Hauptnavigation"
        style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: navScrolled
            ? 'rgba(13,31,53,0.97)'
            : 'rgba(13,31,53,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: navScrolled
            ? '1px solid rgba(61,139,120,0.2)'
            : '1px solid rgba(255,255,255,0.06)',
          transition: '300ms cubic-bezier(.4,0,.2,1)',
        }}
      >
        <div style={{
          maxWidth: 1160, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68,
        }}>
          {/* Logo */}
          <Link href="/" aria-label="Northcode – Startseite" className="nc-logo-seo" style={{
            textDecoration: 'none', fontFamily: 'Syne, sans-serif',
            fontSize: '1.1rem', fontWeight: 800, color: '#fff',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-icon.png" alt="Northcode Logo" width="32" height="32" style={{ objectFit: 'contain', display: 'block' }} />
            <span className="nc-logo-north">North</span><span className="nc-logo-code" style={{ color: '#7BAE9B' }}>code</span>
          </Link>

          {/* Desktop nav links */}
          <div className="nc-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {[
              { href: '/#leistungen', label: 'Leistungen' },
              { href: '/#analyse',    label: 'Analyse'    },
              { href: '/#portfolio',  label: 'Portfolio'  },
              { href: '/#ueber-mich', label: 'Über mich'  },
              { href: '/#kontakt',    label: 'Kontakt'    },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none', transition: '180ms',
              }}
                onMouseOver={e => (e.currentTarget.style.color = '#7BAE9B')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a href={ANALYSE_URL} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #3D8B78 0%, #2F7A68 100%)',
            color: '#fff', padding: '10px 22px', borderRadius: 100,
            fontSize: 13.5, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(61,139,120,0.35)',
            transition: '200ms',
            whiteSpace: 'nowrap',
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(61,139,120,0.45)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(61,139,120,0.35)';
            }}
          >
            Potenzial analysieren
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="nc-seo-hamburger"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: '200ms', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: '200ms', opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: '200ms', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div style={{ padding: '8px 24px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { href: '/#leistungen', label: 'Leistungen' },
              { href: '/#analyse',    label: 'Analyse'    },
              { href: '/#portfolio',  label: 'Portfolio'  },
              { href: '/#ueber-mich', label: 'Über mich'  },
              { href: '/#kontakt',    label: 'Kontakt'    },
            ].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{
                padding: '13px 4px', fontSize: 15, fontWeight: 500,
                color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>{l.label}</Link>
            ))}
            <a href={ANALYSE_URL} onClick={() => setMobileOpen(false)} style={{
              marginTop: 12, padding: '13px 24px', borderRadius: 100, textAlign: 'center',
              background: 'linear-gradient(135deg, #3D8B78 0%, #2F7A68 100%)',
              color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: 14,
              boxShadow: '0 4px 20px rgba(61,139,120,0.35)',
            }}>Potenzial analysieren →</a>
          </div>
        )}
      </nav>

      <main style={{ background: '#0D1F35', position: 'relative' }}>
        <BackgroundPathsDark />

        {/* ════════════════════════════════════════════════════
            2 · HERO — dark navy, orbs, grid
            ════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="hero-heading"
          style={{
            background: 'linear-gradient(160deg, #0D1F35 0%, #0A1928 50%, #061220 100%)',
            padding: '100px 24px 110px',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Radial glow orbs */}
          <div aria-hidden style={{
            position: 'absolute', top: '-15%', right: '-5%',
            width: 600, height: 600, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(61,139,120,0.18) 0%, transparent 65%)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: '-25%', left: '-10%',
            width: 480, height: 480, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(26,74,110,0.4) 0%, transparent 70%)',
          }} />
          {/* Orbital decorative rings */}
          <div aria-hidden style={{
            position: 'absolute', top: '8%', right: '6%',
            width: 200, height: 200, borderRadius: '50%', pointerEvents: 'none',
            border: '1px solid rgba(61,139,120,0.12)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', top: '3%', right: '1%',
            width: 320, height: 320, borderRadius: '50%', pointerEvents: 'none',
            border: '1px solid rgba(61,139,120,0.06)',
          }} />
          {/* Subtle grid overlay */}
          <div aria-hidden className="nc-hero-grid" style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />

          <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 13,
            }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Northcode</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
              <span style={{ color: '#7BAE9B', fontWeight: 600 }}>{data.service} {data.city}</span>
            </nav>

            {/* Location badge */}
            <div style={{ marginBottom: 24 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(61,139,120,0.15)',
                border: '1px solid rgba(61,139,120,0.3)',
                color: '#7BAE9B', padding: '5px 16px', borderRadius: 100,
                fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
              }}>
                <MapPin size={11} aria-hidden /> {data.city} · Nordwest-Deutschland
              </span>
            </div>

            {/* Headline with gradient text */}
            <h1 id="hero-heading" style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
              fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.025em',
              marginBottom: 20, maxWidth: 780,
              background: 'linear-gradient(135deg, #fff 0%, #7BAE9B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {data.h1}
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.72)',
              maxWidth: 580, marginBottom: 44, lineHeight: 1.7,
            }}>
              {data.subtitle}
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 52, alignItems: 'center' }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'linear-gradient(135deg, #3D8B78 0%, #2F7A68 100%)',
                color: '#fff', padding: '15px 30px', borderRadius: 100,
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(61,139,120,0.45)',
                transition: '200ms',
              }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(61,139,120,0.55)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(61,139,120,0.45)';
                }}
              >
                <Calendar size={17} aria-hidden />
                Kostenloses Erstgespräch
              </a>
              <a href={ANALYSE_URL} style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff', padding: '15px 30px', borderRadius: 100,
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
                transition: '200ms',
              }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.28)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                }}
              >
                <Target size={17} aria-hidden />
                Kostenloses Potenzial analysieren
              </a>
            </div>

            {/* Trust bar */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: 28, display: 'flex', flexWrap: 'wrap', gap: '14px 40px',
            }}>
              {[
                'Kein Risiko, keine Verpflichtung',
                'Antwort in 24 Stunden',
                'DSGVO-konform',
              ].map(text => (
                <span key={text} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 500,
                }}>
                  <CheckCircle2 size={13} color="#3D8B78" aria-hidden />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            3 · STATS STRIP — glowing numbers
            ════════════════════════════════════════════════════ */}
        <section
          aria-label="Kennzahlen"
          style={{
            background: 'rgba(255,255,255,0.03)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
            <div className="nc-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {data.stats.map((s, i) => (
                <div key={i} style={{
                  textAlign: 'center', padding: '36px 20px',
                  borderRight: i < data.stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  {/* Glowing ring around number */}
                  <div style={{
                    display: 'inline-block',
                    padding: '12px 20px',
                    borderRadius: 16,
                    background: 'rgba(61,139,120,0.08)',
                    border: '1px solid rgba(61,139,120,0.2)',
                    boxShadow: '0 0 24px rgba(61,139,120,0.12)',
                    marginBottom: 10,
                  }}>
                    <div style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                      fontWeight: 800, letterSpacing: '-0.03em',
                      background: 'linear-gradient(135deg, #fff 0%, #7BAE9B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      {s.value}
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500, lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            4 · INTRO — light section, large left-accent text
            ════════════════════════════════════════════════════ */}
        <section style={{ background: '#F5FAFA', padding: '80px 24px' }} aria-label="Einleitung">
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <span style={{ width: 32, height: 2, background: '#3D8B78', display: 'block', borderRadius: 2 }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                Warum das wichtig ist
              </span>
              <span style={{ width: 32, height: 2, background: '#3D8B78', display: 'block', borderRadius: 2 }} />
            </div>
            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', color: '#102030',
              lineHeight: 1.9, borderLeft: '4px solid #3D8B78',
              paddingLeft: 28,
            }}>
              {data.intro}
            </p>
          </div>
        </section>

        {/* SVG wave divider */}
        <div aria-hidden style={{ lineHeight: 0, background: '#F5FAFA' }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 0 C360 48 1080 48 1440 0 L1440 48 L0 48 Z" fill="#0D1F35" />
          </svg>
        </div>

        {/* ════════════════════════════════════════════════════
            5 · SERVICES — dark section, glassmorphism 2×2 grid
            ════════════════════════════════════════════════════ */}
        <section style={{ background: '#0D1F35', padding: '96px 24px' }} aria-labelledby="services-heading">
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                  Unsere Leistungen
                </span>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
              </div>
              <h2 id="services-heading" style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
                fontWeight: 800, color: '#fff', marginBottom: 14, lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}>
                {data.service} in {data.city}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                Konkrete Lösungen für Ihr Unternehmen in {data.city} und der Region Nordwest.
              </p>
            </div>

            <div className="nc-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {data.services.map((s, i) => (
                <ServiceGlassCard key={i} icon={s.icon} title={s.title} desc={s.desc} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* SVG wave divider */}
        <div aria-hidden style={{ lineHeight: 0, background: '#0D1F35' }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 48 C360 0 1080 0 1440 48 L1440 0 L0 0 Z" fill="#F5FAFA" />
          </svg>
        </div>

        {/* ════════════════════════════════════════════════════
            6 · BENEFITS — light section, left-accent card design
            ════════════════════════════════════════════════════ */}
        <section style={{ background: '#F5FAFA', padding: '96px 24px' }} aria-labelledby="benefits-heading">
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                  Ihre Vorteile
                </span>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
              </div>
              <h2 id="benefits-heading" style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
                fontWeight: 800, color: '#1A4A6E', lineHeight: 1.2,
                letterSpacing: '-0.02em', marginBottom: 0,
              }}>
                Warum Northcode in {data.city}?
              </h2>
            </div>

            <div className="nc-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {data.benefits.map((b, i) => (
                <BenefitAccentCard key={i} title={b.title} desc={b.desc} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* SVG wave divider */}
        <div aria-hidden style={{ lineHeight: 0, background: '#F5FAFA' }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 0 C360 48 1080 48 1440 0 L1440 48 L0 48 Z" fill="#0D1F35" />
          </svg>
        </div>

        {/* ════════════════════════════════════════════════════
            7 · PROCESS — dark, horizontal timeline (desktop)
            ════════════════════════════════════════════════════ */}
        <section style={{ background: '#0D1F35', padding: '96px 24px' }} aria-labelledby="process-heading">
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 68px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                  So arbeiten wir
                </span>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
              </div>
              <h2 id="process-heading" style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
                fontWeight: 800, color: '#fff', lineHeight: 1.2,
                letterSpacing: '-0.02em', marginBottom: 14,
              }}>
                Transparent. Unkompliziert. Ergebnisorientiert.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15.5, lineHeight: 1.7, margin: 0 }}>
                Von der ersten Analyse bis zum fertigen Ergebnis — mit klarem Fahrplan und ohne Überraschungen.
              </p>
            </div>

            {/* Timeline connector line (desktop) */}
            <div style={{ position: 'relative' }}>
              <div className="nc-timeline-line" aria-hidden style={{
                position: 'absolute', top: 30, left: '10%', right: '10%', height: 2,
                background: 'linear-gradient(90deg, transparent, rgba(61,139,120,0.3) 20%, rgba(61,139,120,0.3) 80%, transparent)',
                zIndex: 0,
              }} />
              <div className="nc-process-grid" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${data.processSteps.length}, 1fr)`,
                gap: 24, position: 'relative', zIndex: 1,
              }}>
                {data.processSteps.map((s, i) => (
                  <ProcessTimelineStep key={i} step={s.step} title={s.title} desc={s.desc} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            8 · ANALYSE CTA BANNER — glowing mid-page CTA
            ════════════════════════════════════════════════════ */}
        <section
          aria-label="Potenzialanalyse"
          style={{
            background: 'linear-gradient(135deg, #0A2440 0%, #0D2E1C 100%)',
            padding: '72px 24px',
            position: 'relative', overflow: 'hidden',
            borderTop: '1px solid rgba(61,139,120,0.15)',
            borderBottom: '1px solid rgba(61,139,120,0.15)',
          }}
        >
          <div aria-hidden style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(61,139,120,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-block', padding: '5px 16px',
              background: 'rgba(61,139,120,0.15)', border: '1px solid rgba(61,139,120,0.3)',
              borderRadius: 100, marginBottom: 20,
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#7BAE9B' }}>
                Kostenlos & unverbindlich
              </span>
            </div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em',
              marginBottom: 16,
              background: 'linear-gradient(135deg, #fff 0%, #7BAE9B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Wo verliert Ihr Unternehmen Potenzial?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, lineHeight: 1.75, marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
              In vielen Betrieben stecken versteckte Zeitfresser, die täglich Ressourcen kosten — oft ohne es zu merken. Finden Sie heraus, wo bei Ihnen die größten Hebel liegen.
            </p>
            <a href={ANALYSE_URL} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #3D8B78 0%, #2F7A68 100%)',
              color: '#fff', padding: '16px 36px', borderRadius: 100,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 8px 36px rgba(61,139,120,0.45)',
              transition: '200ms',
            }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 48px rgba(61,139,120,0.6)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 36px rgba(61,139,120,0.45)';
              }}
            >
              <Target size={18} aria-hidden />
              Kostenlose Potenzialanalyse starten
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            9 · CASE STUDY — dark, big metric numbers
            ════════════════════════════════════════════════════ */}
        <section
          style={{
            background: 'linear-gradient(160deg, #061018 0%, #0D1F35 100%)',
            padding: '100px 24px',
            position: 'relative', overflow: 'hidden',
          }}
          aria-labelledby="case-heading"
        >
          {/* Big watermark number */}
          <div aria-hidden style={{
            position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)',
            fontFamily: 'Syne, sans-serif', fontSize: 'clamp(10rem, 20vw, 18rem)',
            fontWeight: 900, color: 'rgba(61,139,120,0.04)',
            lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
          }}>
            01
          </div>
          <div aria-hidden style={{
            position: 'absolute', top: '-20%', left: '-8%',
            width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(61,139,120,0.1) 0%, transparent 65%)',
          }} />

          <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 840, margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, justifyContent: 'center' }}>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                  Fallstudie · {data.city}
                </span>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
              </div>

              <h2 id="case-heading" style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
                fontWeight: 800, color: '#fff', textAlign: 'center',
                marginBottom: 18, lineHeight: 1.2, letterSpacing: '-0.02em',
              }}>
                {data.caseStudy.result}
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: 16,
                marginBottom: 48, textAlign: 'center',
              }}>
                {data.caseStudy.description}
              </p>

              {/* Big metric numbers */}
              <div className="nc-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
                {[
                  { val: data.caseStudy.m1, lbl: data.caseStudy.m1Label },
                  { val: data.caseStudy.m2, lbl: data.caseStudy.m2Label },
                ].map((m, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(61,139,120,0.22)',
                    borderRadius: 20, padding: '40px 32px', textAlign: 'center',
                    boxShadow: '0 0 40px rgba(61,139,120,0.08)',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    {/* Accent top stripe */}
                    <div style={{
                      position: 'absolute', top: 0, left: '20%', right: '20%',
                      height: 2, background: 'linear-gradient(90deg, transparent, #3D8B78, transparent)',
                    }} />
                    <div style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                      fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 10,
                      background: 'linear-gradient(135deg, #fff 0%, #7BAE9B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      {m.val}
                    </div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{m.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SVG wave divider */}
        <div aria-hidden style={{ lineHeight: 0, background: 'linear-gradient(160deg, #061018 0%, #0D1F35 100%)' }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 48 C360 0 1080 0 1440 48 L1440 0 L0 0 Z" fill="#F5FAFA" />
          </svg>
        </div>

        {/* ════════════════════════════════════════════════════
            10 · FAQ — light section, dark accordion style
            ════════════════════════════════════════════════════ */}
        <section style={{ background: '#F5FAFA', padding: '96px 24px' }} aria-labelledby="faq-heading">
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                  FAQ
                </span>
                <span style={{ width: 28, height: 2, background: '#3D8B78', display: 'block' }} />
              </div>
              <h2 id="faq-heading" style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
                fontWeight: 800, color: '#1A4A6E', lineHeight: 1.2,
                letterSpacing: '-0.02em', marginBottom: 0,
              }}>
                Häufige Fragen zu {data.service}
              </h2>
            </div>

            {/* Dark accordion container */}
            <div style={{
              maxWidth: 820, margin: '0 auto',
              background: 'linear-gradient(160deg, #0D1F35 0%, #0A1928 100%)',
              borderRadius: 24,
              border: '1px solid rgba(61,139,120,0.2)',
              padding: '8px 36px',
              boxShadow: '0 20px 60px rgba(13,31,53,0.25)',
            }}>
              {data.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            11 · RELATED PAGES — dark section, small card grid
            ════════════════════════════════════════════════════ */}
        {otherPages.length > 0 && (
          <section style={{ background: '#0D1F35', padding: '80px 24px' }} aria-labelledby="related-heading">
            <div style={{ maxWidth: 1160, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 44px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 24, height: 2, background: '#3D8B78', display: 'block' }} />
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                    Weitere Leistungen
                  </span>
                  <span style={{ width: 24, height: 2, background: '#3D8B78', display: 'block' }} />
                </div>
                <h2 id="related-heading" style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 800, color: '#fff', lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}>
                  Alle Northcode-Leistungen im Überblick
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                {otherPages.map(p => (
                  <RelatedPageCard key={p.slug} slug={p.slug} service={p.service} city={p.city} subtitle={p.subtitle} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SVG wave divider */}
        <div aria-hidden style={{ lineHeight: 0, background: '#0D1F35' }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 0 C360 48 1080 48 1440 0 L1440 48 L0 48 Z" fill="#2F7A68" />
          </svg>
        </div>

        {/* ════════════════════════════════════════════════════
            12 · FINAL CTA — green gradient banner
            ════════════════════════════════════════════════════ */}
        <section
          style={{
            background: 'linear-gradient(135deg, #2F7A68 0%, #3D8B78 50%, #2F7A68 100%)',
            padding: '96px 24px',
            position: 'relative', overflow: 'hidden',
          }}
          aria-labelledby="final-cta-heading"
        >
          <div aria-hidden style={{
            position: 'absolute', top: '-30%', right: '-10%',
            width: 520, height: 520, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: '-20%', left: '-8%',
            width: 380, height: 380, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 65%)',
          }} />
          <div style={{ maxWidth: 1160, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 id="final-cta-heading" style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
              fontWeight: 800, color: '#fff',
              marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.025em',
            }}>
              Bereit für {data.service} in {data.city}?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.85)', fontSize: 18, lineHeight: 1.7,
              maxWidth: 540, margin: '0 auto 40px',
            }}>
              In einem 30-minütigen Gespräch zeigen wir, wo konkrete Hebel für mehr Effizienz und Sichtbarkeit liegen.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 14 }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: '#fff', color: '#1A4A6E',
                padding: '16px 32px', borderRadius: 100,
                fontSize: 15.5, fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transition: '200ms',
              }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 48px rgba(0,0,0,0.28)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              >
                <Calendar size={17} aria-hidden />
                Erstgespräch buchen
                <ArrowRight size={15} aria-hidden />
              </a>
              <a href={`mailto:northcodeesmail@gmail.com`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: '#fff', padding: '16px 32px', borderRadius: 100,
                fontSize: 15.5, fontWeight: 700, textDecoration: 'none',
                transition: '200ms',
              }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
                }}
              >
                <Mail size={17} aria-hidden />
                E-Mail schreiben
              </a>
            </div>
            <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 32px' }}>
              {['Kein Risiko, keine Verpflichtung', 'Antwort in 24 h', 'DSGVO-konform'].map(t => (
                <span key={t} style={{
                  fontSize: 13, color: 'rgba(255,255,255,0.75)',
                  display: 'flex', alignItems: 'center', gap: 7,
                }}>
                  <CheckCircle2 size={13} aria-hidden /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            13 · FOOTER
            ════════════════════════════════════════════════════ */}
        <footer style={{ background: '#07111D', padding: '72px 24px 40px' }} role="contentinfo">
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div className="nc-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '48px 64px', marginBottom: 52 }}>
              {/* Brand */}
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
                  North<span style={{ color: '#7BAE9B' }}>code</span>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 20 }}>
                  Webdesign, KI-Automatisierung &amp; Digitalisierung für KMU in Nordwest-Deutschland.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { icon: <Mail size={13} color="#7BAE9B" aria-hidden />, label: 'northcodeesmail@gmail.com', href: 'mailto:northcodeesmail@gmail.com' },
                    { icon: <Phone size={13} color="#7BAE9B" aria-hidden />, label: '01786270048', href: 'tel:01786270048' },
                    { icon: <MapPin size={13} color="#7BAE9B" aria-hidden />, label: `${data.city}, Nordwest-DE`, href: undefined },
                  ].map((item, i) => (
                    item.href
                      ? <a key={i} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                          onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                          onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                        >{item.icon}{item.label}</a>
                      : <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{item.icon}{item.label}</span>
                  ))}
                </div>
              </div>

              {/* Nav links */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
                  Northcode
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { href: '/', label: 'Startseite' },
                    { href: '/#leistungen', label: 'Leistungen' },
                    { href: '/#analyse', label: 'Analyse' },
                    { href: '/#portfolio', label: 'Portfolio' },
                    { href: '/#ueber-mich', label: 'Über mich' },
                    { href: '/#kontakt', label: 'Kontakt' },
                    { href: '/impressum', label: 'Impressum' },
                    { href: '/datenschutz', label: 'Datenschutz' },
                  ].map(l => (
                    <li key={l.href}>
                      <Link href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
                        onMouseOver={e => (e.currentTarget.style.color = '#7BAE9B')}
                        onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                      >
                        <ArrowRight size={11} aria-hidden style={{ opacity: 0.4 }} />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* All pillar pages */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
                  Alle Leistungen &amp; Standorte
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
                  {pillarPages.map(p => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}`} style={{
                        fontSize: 13,
                        color: p.slug === data.slug ? '#7BAE9B' : 'rgba(255,255,255,0.5)',
                        fontWeight: p.slug === data.slug ? 600 : 400,
                        textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, lineHeight: 1.4,
                      }}
                        onMouseOver={e => (e.currentTarget.style.color = '#7BAE9B')}
                        onMouseOut={e => (e.currentTarget.style.color = p.slug === data.slug ? '#7BAE9B' : 'rgba(255,255,255,0.5)')}
                        aria-current={p.slug === data.slug ? 'page' : undefined}
                      >
                        <ArrowRight size={10} aria-hidden style={{ flexShrink: 0, opacity: 0.4 }} />
                        <span>{p.service} {p.city}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: 24,
              display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
              alignItems: 'center', gap: 12,
            }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
                &copy; {new Date().getFullYear()} Northcode by Esmail Altaher. Alle Rechte vorbehalten.
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
                {data.service} · {data.city} · Nordwest-Deutschland
              </span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── CSS: responsive + animations ──────────────────────────────── */}
      <style>{`
        @keyframes nc-pulse-glow {
          0%, 100% { box-shadow: 0 0 24px rgba(61,139,120,0.15); }
          50%       { box-shadow: 0 0 40px rgba(61,139,120,0.28); }
        }
        @media (max-width: 768px) {
          .nc-nav-links { display: none !important; }
          .nc-seo-hamburger { display: flex !important; }
          .nc-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .nc-stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .nc-stats-grid > div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.06) !important; }
          .nc-stats-grid > div:nth-last-child(-n+2) { border-bottom: none; }
          .nc-grid-2 { grid-template-columns: 1fr !important; }
          .nc-process-grid { grid-template-columns: 1fr !important; }
          .nc-timeline-line { display: none !important; }
          .nc-metrics { grid-template-columns: 1fr !important; }
          .nc-footer-grid { grid-template-columns: 1fr !important; }
          .nc-hero-grid { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
        :focus-visible { outline: 2px solid #3D8B78; outline-offset: 3px; border-radius: 4px; }
      `}</style>
    </>
  );
}

/* ── Sub-components defined after main to keep template readable ──────────── */

function ServiceGlassCard({ icon, title, desc, index }: {
  icon: string; title: string; desc: string; index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        border: hovered ? '1px solid rgba(61,139,120,0.35)' : '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20, padding: '36px 32px',
        transition: '250ms cubic-bezier(.4,0,.2,1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 48px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.15)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top-left accent corner */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: hovered
          ? 'linear-gradient(90deg, #3D8B78, transparent)'
          : 'linear-gradient(90deg, rgba(61,139,120,0.3), transparent)',
        transition: '250ms',
      }} />
      {/* Watermark index */}
      <div aria-hidden style={{
        position: 'absolute', right: 20, bottom: 10,
        fontFamily: 'Syne, sans-serif', fontSize: '5rem', fontWeight: 900,
        color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none',
      }}>
        0{index + 1}
      </div>

      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: 'rgba(61,139,120,0.12)',
        border: '1px solid rgba(61,139,120,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 22,
      }}>
        <ServiceIcon emoji={icon} />
      </div>
      <h3 style={{
        color: '#fff', marginBottom: 12,
        fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.35,
        fontFamily: 'Syne, sans-serif',
      }}>
        {title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}

function BenefitAccentCard({ title, desc, index }: {
  title: string; desc: string; index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#fff' : '#FFFFFF',
        border: `1px solid ${hovered ? '#3D8B78' : '#D4E5E2'}`,
        borderLeft: `4px solid #3D8B78`,
        borderRadius: '0 16px 16px 0',
        padding: '28px 28px 28px 24px',
        transition: '200ms',
        boxShadow: hovered ? '0 8px 32px rgba(26,74,110,0.1)' : '0 1px 4px rgba(26,74,110,0.06)',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        display: 'flex', gap: 18, alignItems: 'flex-start',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Index watermark */}
      <div aria-hidden style={{
        position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'Syne, sans-serif', fontSize: '3.5rem', fontWeight: 900,
        color: 'rgba(61,139,120,0.06)', lineHeight: 1, userSelect: 'none',
      }}>
        {index + 1}
      </div>
      <div style={{
        flexShrink: 0, width: 40, height: 40, borderRadius: '50%',
        background: 'rgba(61,139,120,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <CheckCircle2 size={19} color="#3D8B78" strokeWidth={2} aria-hidden />
      </div>
      <div>
        <p style={{ fontWeight: 700, color: '#1A4A6E', marginBottom: 6, fontSize: 15.5 }}>{title}</p>
        <p style={{ color: '#5A7A8A', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

function ProcessTimelineStep({ step, title, desc }: { step: number; title: string; desc: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0 }}>
      {/* Glowing bubble */}
      <div style={{
        width: 60, height: 60, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(61,139,120,0.2) 0%, rgba(61,139,120,0.1) 100%)',
        border: '2px solid rgba(61,139,120,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20, position: 'relative',
        boxShadow: '0 0 32px rgba(61,139,120,0.2)',
        flexShrink: 0,
      }}>
        {/* Outer ring */}
        <div aria-hidden style={{
          position: 'absolute', inset: -8, borderRadius: '50%',
          border: '1px solid rgba(61,139,120,0.15)',
        }} />
        <span style={{
          fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 900,
          color: '#7BAE9B',
        }}>
          {step}
        </span>
      </div>
      <h3 style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700, color: '#fff', marginBottom: 10, fontSize: '1rem', lineHeight: 1.35,
      }}>
        {title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.7, margin: 0, maxWidth: 220 }}>
        {desc}
      </p>
    </div>
  );
}

function RelatedPageCard({ slug, service, city, subtitle }: {
  slug: string; service: string; city: string; subtitle: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
        border: hovered ? '1px solid rgba(61,139,120,0.3)' : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 14, padding: '18px 20px',
        textDecoration: 'none', transition: '200ms',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#7BAE9B', margin: '0 0 3px', letterSpacing: '.04em' }}>{service}</p>
          <p style={{ fontSize: 14.5, fontWeight: 700, color: '#fff', margin: '0 0 4px', lineHeight: 1.3 }}>
            {service} <span style={{ color: 'rgba(255,255,255,0.5)' }}>{city}</span>
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{subtitle}</p>
        </div>
        <ArrowRight size={15} color={hovered ? '#7BAE9B' : 'rgba(255,255,255,0.3)'}
          style={{ flexShrink: 0, marginTop: 2, transition: '200ms' }} aria-hidden />
      </div>
    </Link>
  );
}
