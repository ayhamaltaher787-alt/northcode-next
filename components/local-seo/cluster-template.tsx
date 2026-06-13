'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown, Phone, Calendar, MapPin, CheckCircle2, ArrowRight,
  Target, TrendingUp, Shield, Clock, Zap, Mail,
} from 'lucide-react';
import { ClusterPageData } from '@/lib/cluster-seo-data';
import { pillarPages } from '@/lib/local-seo-data';
import { BackgroundPathsDark } from '@/components/ui/background-paths';

/* ── Constants ───────────────────────────────────────────────────────────── */
const CALENDLY    = 'https://calendly.com/maxsel-100/30min?month=2026-06';
const WA_BASE     = 'https://wa.me/491786270048?text=';
const ANALYSE_URL = '/#analyse';

/* ── Intent badge config ─────────────────────────────────────────────────── */
const INTENT_CONFIG = {
  BOFU: { label: 'Entscheidungsphase', color: '#F87171', bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.3)' },
  MOFU: { label: 'Recherchephase',    color: '#FBBF24', bg: 'rgba(251,191,36,0.12)',  border: 'rgba(251,191,36,0.3)'  },
  TOFU: { label: 'Informationsphase', color: '#7BAE9B', bg: 'rgba(123,174,155,0.12)', border: 'rgba(123,174,155,0.3)' },
} as const;

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
function JsonLd({ data }: { data: ClusterPageData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Northcode',
        url: 'https://northcode.de',
        telephone: '+4901786270048',
        address: { '@type': 'PostalAddress', addressLocality: data.city, addressCountry: 'DE' },
        areaServed: [data.city, 'Bremen', 'Oldenburg', 'Delmenhorst', 'Ganderkesee'],
        description: data.metaDescription,
      },
      {
        '@type': 'Article',
        headline: data.h1,
        description: data.metaDescription,
        author: { '@type': 'Organization', name: 'Northcode' },
        publisher: { '@type': 'Organization', name: 'Northcode', url: 'https://northcode.de' },
      },
      data.faqs.length > 0 && {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(f => ({
          '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ].filter(Boolean),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ── Dark FAQ accordion ──────────────────────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '20px 0', gap: 16,
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontWeight: 600, color: '#fff', fontSize: 15, lineHeight: 1.5,
          borderLeft: open ? '3px solid #3D8B78' : '3px solid transparent',
          paddingLeft: 14, transition: '200ms',
        }}>
          {question}
        </span>
        <div style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
          background: open ? 'rgba(61,139,120,0.2)' : 'rgba(255,255,255,0.05)',
          border: open ? '1px solid rgba(61,139,120,0.4)' : '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: '200ms',
        }}>
          <ChevronDown
            size={16} color={open ? '#7BAE9B' : 'rgba(255,255,255,0.45)'} aria-hidden
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '200ms' }}
          />
        </div>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: 'hidden',
        transition: 'max-height 260ms cubic-bezier(.4,0,.2,1)',
      }}>
        <p style={{
          fontSize: 14.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8,
          paddingBottom: 22, margin: 0, paddingLeft: 17,
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ── Sticky dark sidebar ─────────────────────────────────────────────────── */
function Sidebar({ data }: { data: ClusterPageData }) {
  const WA = `${WA_BASE}${encodeURIComponent('Hallo, ich interessiere mich für ' + data.service + ' in ' + data.city)}`;
  return (
    <div style={{ position: 'sticky', top: 96 }}>
      {/* Potenzialanalyse card — PROMINENT */}
      <div style={{
        background: 'linear-gradient(160deg, #0A2440 0%, #0D2E1C 100%)',
        border: '1px solid rgba(61,139,120,0.25)',
        borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        marginBottom: 16,
      }}>
        {/* Glow top stripe */}
        <div style={{
          height: 3,
          background: 'linear-gradient(90deg, transparent, #3D8B78, transparent)',
        }} />
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'rgba(61,139,120,0.15)', border: '1px solid rgba(61,139,120,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Target size={17} color="#7BAE9B" aria-hidden />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#7BAE9B' }}>
              Kostenlos & unverbindlich
            </span>
          </div>
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            color: '#fff', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.35,
            marginBottom: 10,
          }}>
            Wo verliert Ihr Unternehmen Potenzial?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5, lineHeight: 1.65, marginBottom: 18 }}>
            In einem kurzen Quiz finden Sie heraus, welche Prozesse bei Ihnen die größten Hebel haben — kostenlos, in 3 Minuten.
          </p>
          <a href={ANALYSE_URL} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: 'linear-gradient(135deg, #3D8B78 0%, #2F7A68 100%)',
            color: '#fff', borderRadius: 100, padding: '13px 20px',
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(61,139,120,0.4)',
            transition: '200ms',
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(61,139,120,0.5)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(61,139,120,0.4)';
            }}
          >
            <Target size={15} aria-hidden />
            Potenzialanalyse starten
          </a>
        </div>
      </div>

      {/* Contact card */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 18, overflow: 'hidden',
        marginBottom: 16,
      }}>
        {/* Dark header */}
        <div style={{ padding: '20px 22px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 6px' }}>
            Persönliche Beratung
          </p>
          <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', margin: 0, lineHeight: 1.35 }}>
            {data.service} in {data.city}
          </h4>
        </div>

        {/* Trust list */}
        <div style={{ padding: '16px 22px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {[
            'Persönliche Beratung in der Region',
            'Antwort innerhalb von 24h',
            'Festpreisangebot ohne Überraschungen',
          ].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <CheckCircle2 size={14} color="#3D8B78" style={{ flexShrink: 0 }} aria-hidden />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
            color: '#fff', borderRadius: 10, padding: '12px 16px',
            fontWeight: 600, fontSize: 13.5, textDecoration: 'none',
            transition: '200ms',
          }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.13)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'}
          >
            <Calendar size={15} aria-hidden />
            Termin vereinbaren
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.7)', borderRadius: 10, padding: '12px 16px',
            fontWeight: 600, fontSize: 13.5, textDecoration: 'none',
            transition: '200ms',
          }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'}
          >
            <Phone size={15} aria-hidden />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Parent page link */}
      <Link href={`/${data.parentSlug}`} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(61,139,120,0.08)', border: '1px solid rgba(61,139,120,0.18)',
        borderRadius: 12, padding: '14px 18px', textDecoration: 'none',
        transition: '200ms',
      }}
        onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(61,139,120,0.14)'}
        onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'rgba(61,139,120,0.08)'}
      >
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#7BAE9B', margin: '0 0 3px', letterSpacing: '.06em', textTransform: 'uppercase' }}>
            Hauptleistung
          </p>
          <p style={{ fontSize: 13.5, color: '#fff', fontWeight: 600, margin: 0 }}>
            Zur Übersichtsseite
          </p>
        </div>
        <ArrowRight size={16} color="#7BAE9B" aria-hidden />
      </Link>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   MAIN TEMPLATE
   ════════════════════════════════════════════════════════════════════════════ */
export default function ClusterTemplate({ data }: { data: ClusterPageData }) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const intentCfg = INTENT_CONFIG[data.intent];
  const WA = `${WA_BASE}${encodeURIComponent('Hallo, ich interessiere mich für ' + data.service + ' in ' + data.city)}`;

  React.useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <JsonLd data={data} />

      <div style={{ background: '#0D1F35', minHeight: '100dvh', position: 'relative' }}>
        <BackgroundPathsDark />

        {/* ════════════════════════════════════════════════════
            1 · NAV — dark glassmorphism, same as pillar
            ════════════════════════════════════════════════════ */}
        <nav
          role="navigation"
          aria-label="Hauptnavigation"
          style={{
            position: 'sticky', top: 0, zIndex: 50,
            background: 'rgba(245,250,250,0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: navScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
            boxShadow: navScrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
            transition: '300ms cubic-bezier(.4,0,.2,1)',
          }}
        >
          <div style={{
            maxWidth: 1200, margin: '0 auto', padding: '0 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68,
          }}>
            <Link href="/" aria-label="Northcode – Startseite" className="nc-logo-seo" style={{
              textDecoration: 'none', fontFamily: 'Syne, sans-serif',
              fontSize: '1rem', fontWeight: 800, color: '#1A4A6E',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-icon.png" alt="Northcode Logo" width="28" height="28" style={{ objectFit: 'contain', display: 'block' }} />
              <span className="nc-logo-north">North</span><span className="nc-logo-code" style={{ color: '#3D8B78' }}>code</span>
            </Link>

            <div className="nc-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
              {[
                { href: '/#leistungen', label: 'Leistungen' },
                { href: '/#analyse',    label: 'Analyse'    },
                { href: '/#portfolio',  label: 'Portfolio'  },
                { href: '/#ueber-mich', label: 'Über mich'  },
                { href: '/#kontakt',    label: 'Kontakt'    },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{
                  fontSize: 14, fontWeight: 500, color: '#4A6B8A',
                  textDecoration: 'none', transition: '180ms',
                }}
                  onMouseOver={e => (e.currentTarget.style.color = '#3D8B78')}
                  onMouseOut={e => (e.currentTarget.style.color = '#4A6B8A')}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <a href={ANALYSE_URL} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #3D8B78 0%, #2F7A68 100%)',
              color: '#fff', padding: '10px 22px', borderRadius: 100,
              fontSize: 13.5, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(61,139,120,0.35)',
              transition: '200ms', whiteSpace: 'nowrap',
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
              <span style={{ display: 'block', width: 22, height: 2, background: '#1A4A6E', borderRadius: 2, transition: '200ms', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#1A4A6E', borderRadius: 2, transition: '200ms', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#1A4A6E', borderRadius: 2, transition: '200ms', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>

          {/* Mobile dropdown */}
          {mobileOpen && (
            <div style={{ padding: '8px 24px 20px', borderTop: '1px solid rgba(0,0,0,0.07)', background: 'rgba(245,250,250,0.98)', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { href: '/#leistungen', label: 'Leistungen' },
                { href: '/#analyse',    label: 'Analyse'    },
                { href: '/#portfolio',  label: 'Portfolio'  },
                { href: '/#ueber-mich', label: 'Über mich'  },
                { href: '/#kontakt',    label: 'Kontakt'    },
              ].map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{
                  padding: '13px 4px', fontSize: 15, fontWeight: 500,
                  color: '#1A4A6E', textDecoration: 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
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

        {/* ════════════════════════════════════════════════════
            2 · HERO — dark, breadcrumb, intent badge
            ════════════════════════════════════════════════════ */}
        <header style={{
          background: 'linear-gradient(160deg, #0D1F35 0%, #061220 100%)',
          padding: '72px 24px 80px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Orbs */}
          <div aria-hidden style={{
            position: 'absolute', top: '-20%', right: '-8%',
            width: 480, height: 480, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(61,139,120,0.14) 0%, transparent 65%)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: '-25%', left: '-5%',
            width: 380, height: 380, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(26,74,110,0.35) 0%, transparent 65%)',
          }} />
          {/* Orbital rings */}
          <div aria-hidden style={{
            position: 'absolute', top: '5%', right: '3%',
            width: 180, height: 180, borderRadius: '50%', pointerEvents: 'none',
            border: '1px solid rgba(61,139,120,0.1)',
          }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
              <ol style={{
                display: 'flex', alignItems: 'center', gap: 8,
                listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap',
              }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: data.city, href: `/${data.parentSlug}` },
                  { label: data.service },
                ].map((crumb, i, arr) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {crumb.href
                      ? <Link href={crumb.href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}
                          onMouseOver={e => (e.currentTarget.style.color = '#7BAE9B')}
                          onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                        >{crumb.label}</Link>
                      : <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13 }}>{crumb.label}</span>
                    }
                    {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>/</span>}
                  </li>
                ))}
              </ol>
            </nav>

            <div style={{ maxWidth: 820 }}>
              {/* Badges row */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
                <span style={{
                  background: intentCfg.bg, color: intentCfg.color,
                  border: `1px solid ${intentCfg.border}`,
                  borderRadius: 100, padding: '4px 14px',
                  fontSize: 12, fontWeight: 700, letterSpacing: '.05em',
                }}>
                  {data.intent} · {intentCfg.label}
                </span>
                <span style={{
                  background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 100, padding: '4px 14px', fontSize: 12,
                  display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  <MapPin size={11} aria-hidden /> {data.city}
                </span>
              </div>

              <h1 style={{
                fontFamily: 'Syne, sans-serif',
                color: '#fff', fontWeight: 800,
                fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
                lineHeight: 1.1, margin: '0 0 16px', letterSpacing: '-0.025em',
                background: 'linear-gradient(135deg, #fff 0%, #7BAE9B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {data.h1}
              </h1>
              <p style={{
                color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem',
                lineHeight: 1.65, margin: '0 0 28px',
              }}>
                {data.subtitle}
              </p>

              {/* Mini trust row */}
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                {[
                  { icon: <Clock size={13} aria-hidden />, text: 'Antwort in 24h' },
                  { icon: <Shield size={13} aria-hidden />, text: 'DSGVO-konform' },
                  { icon: <TrendingUp size={13} aria-hidden />, text: 'Messbare Ergebnisse' },
                  { icon: <Zap size={13} aria-hidden />, text: 'Schnelle Umsetzung' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{
                    display: 'flex', alignItems: 'center', gap: 7,
                    color: 'rgba(255,255,255,0.55)', fontSize: 13,
                  }}>
                    <span style={{ color: '#7BAE9B' }}>{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Mobile CTA bar */}
        <div className="nc-mobile-cta" style={{
          display: 'none', position: 'sticky', top: 68, zIndex: 40,
          background: '#07111D', padding: '10px 20px', gap: 10,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <a href={ANALYSE_URL} style={{
            flex: 1, background: 'linear-gradient(135deg, #3D8B78, #2F7A68)',
            color: '#fff', borderRadius: 8, padding: '10px',
            textAlign: 'center', fontWeight: 700, fontSize: 13.5,
            textDecoration: 'none',
          }}>
            Potenzial analysieren
          </a>
          <a href={`/${data.parentSlug}`} style={{
            flex: 1, background: 'rgba(255,255,255,0.06)', color: '#fff', borderRadius: 8,
            padding: '10px', textAlign: 'center', fontWeight: 600, fontSize: 13.5,
            textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)',
          }}>
            Zur Übersicht
          </a>
        </div>

        {/* ════════════════════════════════════════════════════
            3 · MAIN CONTENT + SIDEBAR layout
            ════════════════════════════════════════════════════ */}
        <main>
          <div
            className="nc-cluster-layout"
            style={{
              maxWidth: 1200, margin: '0 auto', padding: '0 24px',
              display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48,
              alignItems: 'start',
            }}
          >
            {/* ── LEFT: article ──────────────────────────────── */}
            <article style={{ padding: '52px 0 88px' }}>

              {/* Intro block — glassmorphism accent */}
              <div style={{
                background: 'rgba(61,139,120,0.08)',
                border: '1px solid rgba(61,139,120,0.18)',
                borderLeft: '4px solid #3D8B78',
                borderRadius: '0 16px 16px 0',
                padding: '22px 24px',
                marginBottom: 44,
              }}>
                <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                  {data.intro}
                </p>
              </div>

              {/* Content sections */}
              {data.sections.map((section, i) => (
                <section key={i} style={{ marginBottom: 44 }}>
                  <h2 style={{
                    fontFamily: 'Syne, sans-serif',
                    color: '#fff', fontWeight: 700,
                    fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
                    lineHeight: 1.3, marginBottom: 14,
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                  }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: 32, height: 32, borderRadius: 9,
                      background: 'rgba(61,139,120,0.15)',
                      border: '1px solid rgba(61,139,120,0.25)',
                      color: '#7BAE9B', fontSize: 13, fontWeight: 800, flexShrink: 0,
                      marginTop: 1,
                    }}>
                      {i + 1}
                    </span>
                    {section.heading}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, margin: 0, paddingLeft: 44 }}>
                    {section.body}
                  </p>
                  {i < data.sections.length - 1 && (
                    <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginTop: 36 }} />
                  )}
                </section>
              ))}

              {/* ── ANALYSE BANNER — mid-page glowing CTA ── */}
              <div style={{
                background: 'linear-gradient(135deg, #0A2440 0%, #0D2E1C 100%)',
                border: '1px solid rgba(61,139,120,0.2)',
                borderRadius: 20, padding: '36px 32px',
                margin: '52px 0',
                position: 'relative', overflow: 'hidden',
              }}>
                <div aria-hidden style={{
                  position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)',
                  width: 260, height: 260, borderRadius: '50%', pointerEvents: 'none',
                  background: 'radial-gradient(circle, rgba(61,139,120,0.12) 0%, transparent 70%)',
                }} />
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
                  background: 'linear-gradient(90deg, transparent, #3D8B78, transparent)',
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'inline-block', padding: '4px 14px',
                    background: 'rgba(61,139,120,0.15)', border: '1px solid rgba(61,139,120,0.3)',
                    borderRadius: 100, marginBottom: 14,
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#7BAE9B' }}>
                      Kostenlos & unverbindlich
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                    fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.25,
                  }}>
                    Wo verliert Ihr Unternehmen Potenzial?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7, marginBottom: 22, maxWidth: 480 }}>
                    Viele Unternehmen verlieren täglich Zeit durch Prozesse, die sich längst automatisieren ließen — oft ohne es zu wissen. Finden Sie in 3 Minuten heraus, wo Ihre größten Hebel liegen.
                  </p>
                  <a href={ANALYSE_URL} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    background: 'linear-gradient(135deg, #3D8B78 0%, #2F7A68 100%)',
                    color: '#fff', padding: '14px 28px', borderRadius: 100,
                    fontSize: 15, fontWeight: 700, textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(61,139,120,0.4)',
                    transition: '200ms',
                  }}
                    onMouseOver={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 44px rgba(61,139,120,0.55)';
                    }}
                    onMouseOut={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(61,139,120,0.4)';
                    }}
                  >
                    <Target size={16} aria-hidden />
                    Potenzialanalyse starten
                    <ArrowRight size={15} aria-hidden />
                  </a>
                </div>
              </div>

              {/* FAQ section */}
              {data.faqs.length > 0 && (
                <section style={{ marginTop: 60 }}>
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ width: 24, height: 2, background: '#3D8B78', display: 'block' }} />
                      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                        Häufige Fragen
                      </span>
                      <span style={{ width: 24, height: 2, background: '#3D8B78', display: 'block' }} />
                    </div>
                    <h2 style={{
                      fontFamily: 'Syne, sans-serif',
                      color: '#fff', fontWeight: 800,
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', margin: 0,
                    }}>
                      Ihre Fragen zu {data.service} in {data.city}
                    </h2>
                  </div>
                  {/* Dark accordion */}
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 18, padding: '6px 28px',
                  }}>
                    {data.faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
                  </div>
                </section>
              )}

              {/* Parent pillar CTA */}
              <div style={{
                marginTop: 56, borderRadius: 18,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '28px 30px',
                display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <div>
                  <p style={{ color: '#7BAE9B', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
                    Vollständige Übersichtsseite
                  </p>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: 0, lineHeight: 1.35 }}>
                    Alle Informationen zu {data.service} in {data.city}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 8, lineHeight: 1.65, marginBottom: 0, fontSize: 14 }}>
                    Die Übersichtsseite enthält alle Services, Preise und Fallstudien im Überblick.
                  </p>
                </div>
                <Link href={`/${data.parentSlug}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                  color: '#fff', borderRadius: 100, padding: '11px 22px',
                  fontWeight: 600, fontSize: 14, textDecoration: 'none',
                  alignSelf: 'flex-start', transition: '200ms',
                }}
                  onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'}
                  onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'}
                >
                  Zur Übersichtsseite <ArrowRight size={15} aria-hidden />
                </Link>
              </div>

              {/* Related clusters */}
              {data.relatedClusters.length > 0 && (
                <section style={{ marginTop: 52 }}>
                  <div style={{ marginBottom: 22 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ width: 20, height: 2, background: '#3D8B78', display: 'block' }} />
                      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3D8B78' }}>
                        Verwandte Themen
                      </span>
                      <span style={{ width: 20, height: 2, background: '#3D8B78', display: 'block' }} />
                    </div>
                    <h2 style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', margin: 0 }}>
                      Weitere Themen für {data.city}
                    </h2>
                  </div>
                  <div className="nc-related-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12,
                  }}>
                    {data.relatedClusters.map(rel => (
                      <Link key={rel.href} href={rel.href} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        background: 'rgba(255,255,255,0.04)', borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.07)', padding: '14px 16px',
                        textDecoration: 'none', transition: '200ms',
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(61,139,120,0.25)';
                          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        }}
                      >
                        <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: 13.5 }}>{rel.title}</span>
                        <ArrowRight size={14} color="#7BAE9B" style={{ flexShrink: 0 }} aria-hidden />
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* ── RIGHT: sticky sidebar ─────────────────────── */}
            <aside className="nc-sidebar" style={{ padding: '52px 0 88px' }}>
              <Sidebar data={data} />
            </aside>
          </div>
        </main>

        {/* ════════════════════════════════════════════════════
            4 · CONTACT SECTION
            ════════════════════════════════════════════════════ */}
        <section
          id="kontakt"
          style={{
            background: 'linear-gradient(135deg, #2F7A68 0%, #3D8B78 50%, #2F7A68 100%)',
            padding: '88px 24px',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div aria-hidden style={{
            position: 'absolute', top: '-30%', right: '-10%',
            width: 480, height: 480, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)',
          }} />
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{ width: 24, height: 2, background: 'rgba(255,255,255,0.5)', display: 'block' }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
                Jetzt starten
              </span>
              <span style={{ width: 24, height: 2, background: 'rgba(255,255,255,0.5)', display: 'block' }} />
            </div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              color: '#fff', fontWeight: 800,
              fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
              marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.02em',
            }}>
              Kostenloses Erstgespräch für {data.city}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, marginBottom: 36, fontSize: 16 }}>
              In einem 30-minütigen Gespräch schauen wir gemeinsam, wie {data.service} Ihr Unternehmen in {data.city} konkret weiterbringt. Kostenlos, unverbindlich, ohne Verkaufsdruck.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: '#fff', color: '#1A4A6E',
                borderRadius: 100, padding: '15px 30px',
                fontWeight: 800, fontSize: 15, textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
                transition: '200ms',
              }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(0,0,0,0.25)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.18)';
                }}
              >
                <Calendar size={16} aria-hidden />
                Termin vereinbaren
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'rgba(255,255,255,0.14)',
                border: '1.5px solid rgba(255,255,255,0.3)',
                color: '#fff', borderRadius: 100, padding: '15px 30px',
                fontWeight: 700, fontSize: 15, textDecoration: 'none',
                transition: '200ms',
              }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.22)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.14)'}
              >
                <Phone size={16} aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            5 · FOOTER
            ════════════════════════════════════════════════════ */}
        <footer style={{ background: '#07111D', padding: '60px 24px 36px' }} role="contentinfo">
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="nc-cluster-footer" style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px 48px',
              marginBottom: 36,
            }}>
              {/* Brand */}
              <div style={{ maxWidth: 280 }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', color: '#fff', fontWeight: 800, fontSize: '1.2rem' }}>
                    North<span style={{ color: '#7BAE9B' }}>code</span>
                  </span>
                </Link>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13.5, lineHeight: 1.7, marginTop: 10, marginBottom: 16 }}>
                  Webdesign, KI-Automatisierung &amp; Digitalisierung für KMU in Nordwest-Deutschland.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a href="mailto:northcodeesmail@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#7BAE9B')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    <Mail size={12} color="#7BAE9B" aria-hidden /> northcodeesmail@gmail.com
                  </a>
                  <a href="tel:01786270048" style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#7BAE9B')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    <Phone size={12} color="#7BAE9B" aria-hidden /> 01786270048
                  </a>
                </div>
              </div>

              {/* Nav */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>
                  Navigation
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {[
                    { href: '/', label: 'Startseite' },
                    { href: '/#leistungen', label: 'Leistungen' },
                    { href: '/#analyse', label: 'Analyse' },
                    { href: '/#portfolio', label: 'Portfolio' },
                    { href: '/#kontakt', label: 'Kontakt' },
                    { href: '/impressum', label: 'Impressum' },
                    { href: '/datenschutz', label: 'Datenschutz' },
                  ].map(l => (
                    <li key={l.href}>
                      <Link href={l.href} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
                        onMouseOver={e => (e.currentTarget.style.color = '#7BAE9B')}
                        onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                      >
                        <ArrowRight size={10} aria-hidden style={{ opacity: 0.35 }} />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* All pillar pages */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>
                  Alle Leistungen
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px 20px' }}>
                  {pillarPages.map(p => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}`} style={{
                        fontSize: 12.5,
                        color: p.slug === data.parentSlug ? '#7BAE9B' : 'rgba(255,255,255,0.45)',
                        fontWeight: p.slug === data.parentSlug ? 600 : 400,
                        textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, lineHeight: 1.4,
                      }}
                        onMouseOver={e => (e.currentTarget.style.color = '#7BAE9B')}
                        onMouseOut={e => (e.currentTarget.style.color = p.slug === data.parentSlug ? '#7BAE9B' : 'rgba(255,255,255,0.45)')}
                      >
                        <ArrowRight size={9} aria-hidden style={{ flexShrink: 0, opacity: 0.35 }} />
                        <span>{p.service} {p.city}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: 22,
              display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
              alignItems: 'center', gap: 10,
            }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
                &copy; {new Date().getFullYear()} Northcode by Esmail Altaher. Alle Rechte vorbehalten.
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
                {data.service} · {data.city}
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* ── CSS: responsive + animations ──────────────────────────────── */}
      <style>{`
        @media (max-width: 1024px) {
          .nc-cluster-layout { grid-template-columns: 1fr !important; }
          .nc-sidebar { display: none !important; }
          .nc-mobile-cta { display: flex !important; }
        }
        @media (max-width: 768px) {
          .nc-nav-links { display: none !important; }
          .nc-seo-hamburger { display: flex !important; }
          .nc-related-grid { grid-template-columns: 1fr !important; }
          .nc-cluster-footer { flex-direction: column !important; }
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
