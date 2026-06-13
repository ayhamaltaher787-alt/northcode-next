'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronDown, ChevronRight, Clock, ArrowRight,
  Phone, Calendar, BookOpen,
} from 'lucide-react';
import { ClusterPageData } from '@/lib/cluster-seo-data';
import { pillarPages } from '@/lib/local-seo-data';

/* ── Constants ───────────────────────────────────────────────────────────── */
const CALENDLY  = 'https://calendly.com/maxsel-100/30min?month=2026-06';
const WA_BASE   = 'https://wa.me/491786270048?text=';
const ANALYSE_URL = '/#analyse';

const NAV_LINKS = [
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#analyse',    label: 'Analyse'    },
  { href: '/#portfolio',  label: 'Portfolio'  },
  { href: '/#ueber-mich', label: 'Über mich' },
  { href: '/#kontakt',    label: 'Kontakt'    },
];

/* ── Reading progress bar ───────────────────────────────────────────────── */
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const top = el.scrollTop || document.body.scrollTop;
      const h   = el.scrollHeight - el.clientHeight;
      setPct(h > 0 ? (top / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 9999, background: 'rgba(255,255,255,0.08)' }}>
      <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #3D8B78, #7BAE9B)', transition: 'width 80ms linear' }} />
    </div>
  );
}

/* ── FAQ accordion item ─────────────────────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(26,74,110,0.12)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', padding: '20px 0', gap: 16,
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 600,
          color: '#1A4A6E', fontSize: 16, lineHeight: 1.5,
          borderLeft: `3px solid ${open ? '#3D8B78' : 'transparent'}`,
          paddingLeft: 14, transition: 'border-color 180ms',
        }}>
          {question}
        </span>
        <div style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: '50%', marginTop: 2,
          background: open ? 'rgba(61,139,120,0.15)' : 'rgba(26,74,110,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '180ms',
        }}>
          <ChevronDown size={15} color={open ? '#3D8B78' : '#1A4A6E'}
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '200ms' }} />
        </div>
      </button>
      {open && (
        <p style={{ paddingBottom: 20, paddingLeft: 17, color: '#374151', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
          {answer}
        </p>
      )}
    </div>
  );
}

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
function JsonLd({ data }: { data: ClusterPageData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: data.h1,
        description: data.metaDescription,
        author:    { '@type': 'Organization', name: 'Northcode' },
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

/* ── Main component ─────────────────────────────────────────────────────── */
export default function FaqTemplate({ data }: { data: ClusterPageData }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const wordCount  = [data.intro, ...data.sections.map(s => s.body)].join(' ').split(/\s+/).length;
  const readingMin = Math.max(4, Math.round(wordCount / 200));

  return (
    <>
      <JsonLd data={data} />
      <ReadingProgress />

      <style>{`
        .fn-link { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 180ms; }
        .fn-link:hover { color: #7BAE9B; }
        .fn-section { transition: transform 200ms ease; }
        .fn-section:hover { transform: translateX(3px); }
        .fn-related-link { display: flex; align-items: center; gap: 10px; background: #fff; border: 1px solid rgba(26,74,110,0.12); border-radius: 12px; padding: 14px 16px; text-decoration: none; color: #1A4A6E; font-size: 14px; font-weight: 500; transition: border-color 180ms, background 180ms; }
        .fn-related-link:hover { border-color: #3D8B78; background: rgba(61,139,120,0.04); }
        @media (max-width: 768px) {
          .fn-nav-links { display: none !important; }
          .fn-seo-hamburger { display: flex !important; }
          .fn-article { padding: 0 20px !important; }
          .fn-hero-h1 { font-size: clamp(24px, 6vw, 36px) !important; }
          .fn-section-num { display: none !important; }
          .fn-section-body { padding-left: 0 !important; }
        }
      `}</style>

      {/* ── NAVBAR ──────────────────────────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 3, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(245,250,250,0.92)', backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 1px 12px rgba(0,0,0,0.05)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" className="nc-logo-seo" style={{
            textDecoration: 'none', fontFamily: 'Syne, sans-serif',
            fontWeight: 800, fontSize: '1rem', color: '#1A4A6E',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-icon.png" alt="Northcode Logo" width="28" height="28" style={{ objectFit: 'contain', display: 'block' }} />
            <span className="nc-logo-north">North</span><span className="nc-logo-code" style={{ color: '#3D8B78' }}>code</span>
          </Link>
          <div className="fn-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {NAV_LINKS.map(l => <a key={l.href} href={l.href} className="fn-link" style={{ color: '#4A6B8A' }}>{l.label}</a>)}
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
              background: '#3D8B78', color: '#fff', padding: '8px 20px',
              borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600,
            }}>Potenzial analysieren</a>
          </div>
          <button
            className="fn-seo-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            style={{
              display: 'none', background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, flexDirection: 'column', gap: 5,
            }}
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#1A4A6E', borderRadius: 2, transition: '200ms', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#1A4A6E', borderRadius: 2, transition: '200ms', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#1A4A6E', borderRadius: 2, transition: '200ms', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ padding: '8px 24px 20px', borderTop: '1px solid rgba(0,0,0,0.07)', background: 'rgba(245,250,250,0.98)', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
                padding: '13px 4px', fontSize: 15, fontWeight: 500,
                color: '#1A4A6E', textDecoration: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}>{l.label}</a>
            ))}
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{
              marginTop: 12, padding: '13px 24px', borderRadius: 100, textAlign: 'center',
              background: 'linear-gradient(135deg, #3D8B78 0%, #2F7A68 100%)',
              color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: 14,
              boxShadow: '0 4px 20px rgba(61,139,120,0.35)',
            }}>Potenzial analysieren →</a>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <header style={{
        background: 'linear-gradient(160deg, #07111D 0%, #0D1F35 55%, #102540 100%)',
        paddingTop: 120, paddingBottom: 88, position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative orbs */}
        <div style={{ position: 'absolute', top: -120, right: -120, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(61,139,120,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,74,110,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
        {/* Grid overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13 }}>Northcode</Link>
            <ChevronRight size={11} color="rgba(255,255,255,0.25)" />
            <Link href={`/${data.parentSlug}`} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13 }}>{data.service}</Link>
            <ChevronRight size={11} color="rgba(255,255,255,0.25)" />
            <span style={{ color: '#7BAE9B', fontSize: 13 }}>FAQ</span>
          </nav>

          {/* Category chip */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(61,139,120,0.14)', border: '1px solid rgba(61,139,120,0.28)',
            borderRadius: 100, padding: '5px 16px', marginBottom: 24,
          }}>
            <BookOpen size={12} color="#7BAE9B" />
            <span style={{ color: '#7BAE9B', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {data.service}
            </span>
          </div>

          {/* H1 */}
          <h1 className="fn-hero-h1" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.8vw, 50px)',
            lineHeight: 1.15, margin: '0 0 20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #a8d4c8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>{data.h1}</h1>

          {/* Subtitle */}
          <p style={{
            color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.65,
            margin: '0 0 36px', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto',
          }}>{data.subtitle}</p>

          {/* Meta row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
              <Clock size={13} />
              <span>{readingMin} Min. Lesezeit</span>
            </div>
            <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Northcode · Nordwestdeutschland</span>
          </div>
        </div>
      </header>

      {/* ── ARTICLE ─────────────────────────────────────────────────────────── */}
      <main style={{ background: '#F4F8F8' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', padding: '72px 48px 88px' }} className="fn-article">

          {/* INTRO BLOCK */}
          <div style={{
            borderLeft: '4px solid #3D8B78',
            background: 'rgba(61,139,120,0.05)',
            borderRadius: '0 16px 16px 0',
            padding: '24px 28px',
            marginBottom: 64,
          }}>
            <p style={{ color: '#1A4A6E', fontSize: 18, lineHeight: 1.85, margin: 0, fontWeight: 400 }}>
              {data.intro}
            </p>
          </div>

          {/* CONTENT SECTIONS */}
          {data.sections.map((section, i) => (
            <section key={i} className="fn-section" style={{ marginBottom: 60 }}>
              {/* Section header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                <div className="fn-section-num" style={{
                  flexShrink: 0, width: 42, height: 42, borderRadius: 14,
                  background: 'linear-gradient(135deg, #1A4A6E 0%, #3D8B78 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17,
                  boxShadow: '0 4px 12px rgba(61,139,120,0.3)',
                }}>{i + 1}</div>
                <h2 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: 'clamp(20px, 2.4vw, 26px)',
                  color: '#1A4A6E', margin: 0, lineHeight: 1.3, paddingTop: 8,
                }}>{section.heading}</h2>
              </div>
              {/* Section body */}
              <div className="fn-section-body" style={{ paddingLeft: 62 }}>
                <p style={{ color: '#374151', fontSize: 16, lineHeight: 1.85, margin: 0 }}>
                  {section.body}
                </p>
              </div>
              {i < data.sections.length - 1 && (
                <div style={{ marginTop: 48, height: 1, background: 'linear-gradient(90deg, rgba(26,74,110,0.1) 0%, transparent 100%)' }} />
              )}
            </section>
          ))}

          {/* MID-ARTICLE ANALYSE BANNER */}
          <div style={{
            background: 'linear-gradient(135deg, #0D1F35 0%, #1A4A6E 100%)',
            borderRadius: 24, padding: '44px 36px', textAlign: 'center',
            marginBottom: 64, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -50, right: -50, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(61,139,120,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,174,155,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ color: '#7BAE9B', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 10px' }}>
                Kostenlos &amp; unverbindlich
              </p>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 12px', lineHeight: 1.3 }}>
                Wo verliert Ihr Unternehmen Potenzial?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7, margin: '0 0 28px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
                In einem kurzen Gespräch schauen wir gemeinsam, wo die größten Hebel in Ihrem Betrieb liegen.
              </p>
              <a href={ANALYSE_URL} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#3D8B78', color: '#fff', padding: '13px 26px',
                borderRadius: 100, textDecoration: 'none', fontSize: 15, fontWeight: 600,
                boxShadow: '0 4px 20px rgba(61,139,120,0.4)',
              }}>
                Potenzialanalyse starten <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* FAQ SECTION */}
          {data.faqs.length > 0 && (
            <section style={{ marginBottom: 64 }}>
              <h2 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: 26, color: '#1A4A6E', margin: '0 0 8px',
              }}>Häufige Fragen</h2>
              <p style={{ color: '#6B7280', fontSize: 14, margin: '0 0 32px' }}>
                Weitere Fragen? Schreiben Sie uns — wir antworten innerhalb eines Werktags.
              </p>
              {data.faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
            </section>
          )}

          {/* RELATED LINKS */}
          {data.relatedClusters.length > 0 && (
            <section>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#1A4A6E', margin: '0 0 20px' }}>
                Weiterführende Themen
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 12 }}>
                {data.relatedClusters.map((cl, i) => (
                  <Link key={i} href={cl.href} className="fn-related-link">
                    <ArrowRight size={14} color="#3D8B78" style={{ flexShrink: 0 }} />
                    {cl.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #2F7A68 0%, #3D8B78 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Nächster Schritt
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>
            Kostenlose Potenzialanalyse
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 1.7, margin: '0 0 32px' }}>
            In einem kurzen Gespräch schauen wir, wo die größten Hebel für mehr Effizienz und Sichtbarkeit in Ihrem Unternehmen liegen – konkret, ohne Verkaufsdruck.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#2F7A68', padding: '14px 28px',
              borderRadius: 100, textDecoration: 'none', fontSize: 15, fontWeight: 700,
            }}>
              <Calendar size={16} /> Termin buchen
            </a>
            <a
              href={`${WA_BASE}Hallo%2C%20ich%20m%C3%B6chte%20eine%20Potenzialanalyse%20anfragen.`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.14)', color: '#fff', padding: '14px 28px',
                borderRadius: 100, textDecoration: 'none', fontSize: 15, fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.28)',
              }}
            >
              <Phone size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer style={{ background: '#07111D', padding: '40px 24px', textAlign: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff' }}>
            north<span style={{ color: '#3D8B78' }}>code</span>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="fn-link" style={{ fontSize: 13 }}>{l.label}</a>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, marginTop: 24 }}>
          © {new Date().getFullYear()} Northcode · Bremen · Oldenburg · Delmenhorst · Ganderkesee
        </p>
      </footer>
    </>
  );
}
