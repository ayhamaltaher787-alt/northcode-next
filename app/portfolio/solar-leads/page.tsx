"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../portfolio-mobile.css";

// ─── Reveal hook ──────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function IcoArrowLeft() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoArrowRight() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoCheck() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="rgba(61,139,120,0.15)" />
      <path d="M8 12l3 3 5-5" stroke="#3D8B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoX() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="rgba(220,38,38,0.12)" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IcoPlay() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2" />
      <path d="M10 8l6 4-6 4V8z" fill="white" />
    </svg>
  );
}
function IcoBot() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="8" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" />
      <path d="M12 3v5M8 21v1M16 21v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IcoVoice() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IcoDatabase() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function IcoFlow() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="9" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 6h6M12 9v3M6 9v3a3 3 0 003 3M18 9v3a3 3 0 01-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IcoSolar() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IcoZap() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function IcoChart() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IcoClock() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IcoUsers() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ─── Video Player ─────────────────────────────────────────────────────────────
function VideoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        background: "#0a0f1a",
        cursor: "pointer",
        boxShadow: "0 24px 80px rgba(26,74,110,0.35)",
        border: "1px solid rgba(74,122,150,0.25)",
      }}
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        style={{ width: "100%", display: "block", maxHeight: 480, objectFit: "contain" }}
        onEnded={() => setPlaying(false)}
        playsInline
      />
      {!playing && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(10,15,26,0.55)",
            backdropFilter: "blur(2px)",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "var(--nc-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 16px rgba(61,139,120,0.18)",
            }}
          >
            <IcoPlay />
          </div>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600 }}>
            Live-Demo ansehen
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Workflow Node ────────────────────────────────────────────────────────────
function WorkflowNode({
  icon,
  label,
  sub,
  color = "#1A4A6E",
  accent = false,
}: {
  icon: React.ReactNode;
  label: string;
  sub?: string;
  color?: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        textAlign: "center",
        minWidth: 96,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: accent ? 14 : "50%",
          background: accent
            ? "linear-gradient(135deg, var(--nc-accent), var(--nc-accent-h))"
            : "rgba(255,255,255,0.06)",
          border: `1.5px solid ${accent ? "transparent" : "rgba(74,122,150,0.3)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: accent ? "white" : "#8EC5B5",
          boxShadow: accent ? "0 4px 20px rgba(61,139,120,0.4)" : "none",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#D4E5E2", lineHeight: 1.3 }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}

function ArrowRight({ label }: { label?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        <div style={{ width: 24, height: 1.5, background: "rgba(74,122,150,0.5)" }} />
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M0 4h6M4 1l3 3-3 3" stroke="rgba(74,122,150,0.6)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
      {label && <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>{label}</div>}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SolarLeadsPage() {
  useReveal();

  const problems = [
    "Potenzielle Kunden erhielten nicht immer sofort eine Antwort – Anfragen blieben liegen",
    "Durch verzögerte Rückmeldungen wechselten Interessenten zur Konkurrenz",
    "Neue Leads mussten manuell bearbeitet und an den Vertrieb weitergeleitet werden",
    "Keine automatische Vorqualifizierung: jede Anfrage war gleich, unabhängig von Kaufabsicht",
    "Wichtige Interessenten gingen verloren, wenn sie nicht schnell genug kontaktiert wurden",
    "Mitarbeiter verbrachten Zeit mit Erstanfragen statt mit Beratung und Abschlüssen",
    "Keine 24/7-Erreichbarkeit – außerhalb der Bürozeiten: kein Kontakt",
    "Der Vertriebsprozess war unstrukturiert und nicht skalierbar",
  ];

  const solutions = [
    {
      icon: <IcoSolar />,
      title: "Moderne Lead-Generierungs-Website",
      desc: "Eine conversionoptimierte Website speziell für Solaranlagen-Anfragen – klare Struktur, starker CTA, lokales SEO. Besucher werden zu Interessenten, Interessenten zu Leads.",
    },
    {
      icon: <IcoDatabase />,
      title: "RAG-Wissensdatenbank (Vektorspeicher)",
      desc: "Alle Unternehmensinfos, Produktdaten und FAQs werden als Vektoren gespeichert. Der KI-Agent greift in Echtzeit darauf zu – für präzise, kontextbezogene Antworten ohne Halluzination.",
    },
    {
      icon: <IcoBot />,
      title: "KI-Chatbot mit Solar-Kalkulations-Tool",
      desc: "Der Agent fragt Adresse und Dachgröße ab, ruft die Google Solar API auf, berechnet die Einsparung und gibt dem Interessenten sofort eine personalisierte Einschätzung – kein Warten auf einen Rückruf.",
    },
    {
      icon: <IcoVoice />,
      title: "Voice AI Agent",
      desc: "Wenn ein Lead qualifiziert ist, ruft ein KI-Voice-Agent automatisch an, führt ein Vorgespräch, bewertet die Kaufbereitschaft und bucht – wenn sinnvoll – direkt einen Beratungstermin im Kalender.",
    },
    {
      icon: <IcoFlow />,
      title: "Automatische Lead-Erfassung & CRM-Übergabe",
      desc: "Jede Anfrage wird strukturiert erfasst und automatisch in das CRM des Vertriebs übertragen. Kein manuelles Copy-Paste, kein vergessener Lead – jede Anfrage landet sofort beim richtigen Ansprechpartner.",
    },
    {
      icon: <IcoZap />,
      title: "Sofort-Benachrichtigung des Unternehmens",
      desc: "Bei jedem neuen qualifizierten Lead erhält das Vertriebsteam eine sofortige Benachrichtigung mit allen relevanten Daten – per E-Mail, Slack oder Telegram. Reaktionszeit: unter 60 Sekunden.",
    },
  ];

  const results = [
    { icon: <IcoZap />, val: "+500 %", label: "Closing-Rate", sub: "durch sofortige KI-Erstqualifizierung und automatischen Voice-Agent-Anruf" },
    { icon: <IcoClock />, val: "< 60 Sek.", label: "Reaktionszeit", sub: "auf neue Anfragen – vorher: Stunden oder gar keine Antwort außerhalb der Bürozeiten" },
    { icon: <IcoChart />, val: "24 / 7", label: "Erreichbarkeit", sub: "Interessenten können jederzeit eine Einschätzung erhalten, Termine buchen – ohne Mitarbeiter" },
    { icon: <IcoUsers />, val: "100 %", label: "Leads erfasst", sub: "Kein Lead geht mehr verloren. Jede Anfrage landet automatisch strukturiert im CRM" },
  ];

  const techStack = [
    { name: "n8n", cat: "Automatisierung", color: "#EA4B71" },
    { name: "OpenAI GPT-4o", cat: "KI-Modell", color: "#10A37F" },
    { name: "Google Solar API", cat: "Datenquelle", color: "#4285F4" },
    { name: "Google Maps API", cat: "Geocoding", color: "#34A853" },
    { name: "Vector Store", cat: "RAG / Wissen", color: "#7C3AED" },
    { name: "Voice AI Agent", cat: "Anruf-Automation", color: "#F59E0B" },
    { name: "n8n Chat Widget", cat: "Frontend", color: "#EA4B71" },
    { name: "CRM Integration", cat: "Lead-Übergabe", color: "#3D8B78" },
  ];

  return (
    <div id="northcode-site" style={{ fontFamily: "var(--nc-font, 'Plus Jakarta Sans', sans-serif)" }}>

      {/* ── Sticky back-nav ─────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: "rgba(245,250,250,0.92)", backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--nc-border, #D4E5E2)",
          boxShadow: "var(--nc-shadow-sm)",
        }}
      >
        <div
          className="cs-nav-inner"
          style={{
            maxWidth: 1140, margin: "0 auto", padding: "0 24px",
            height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          <Link
            href="/#portfolio"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--nc-navy, #1A4A6E)", textDecoration: "none",
              fontWeight: 600, fontSize: 14,
              padding: "8px 16px", borderRadius: 8,
              border: "1.5px solid var(--nc-border, #D4E5E2)",
              background: "white", transition: "all 200ms",
            }}
          >
            <IcoArrowLeft /> Zurück zum Portfolio
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontSize: 12, fontWeight: 600, letterSpacing: ".06em",
                textTransform: "uppercase", color: "var(--nc-accent, #3D8B78)",
                background: "var(--nc-accent-light, #EAF5F2)",
                padding: "4px 12px", borderRadius: 100,
              }}
            >
              Case Study
            </span>
            <a href="#kontakt-cta" className="nc-btn nc-btn-primary cs-nav-cta"
              style={{ padding: "8px 18px", fontSize: 13 }}>
              Ähnliches Projekt anfragen
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        className="cs-hero-section"
        style={{
          paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden",
          background: "linear-gradient(160deg, #F5FAFA 0%, #EAF5F2 60%, #F5FAFA 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,139,120,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,74,110,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="nc-container" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, fontSize: 13, color: "var(--nc-text-muted)" }}>
            <Link href="/" style={{ color: "var(--nc-text-muted)", textDecoration: "none" }}>Northcode</Link>
            <span>/</span>
            <Link href="/#portfolio" style={{ color: "var(--nc-text-muted)", textDecoration: "none" }}>Portfolio</Link>
            <span>/</span>
            <span style={{ color: "var(--nc-accent)", fontWeight: 600 }}>Solar Lead System</span>
          </div>

          <div className="cs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {["KI-Chatbot", "Voice AI", "n8n Automation", "Lead-System"].map((t) => (
                  <span key={t} className="nc-badge">{t}</span>
                ))}
              </div>
              <h1 style={{ color: "var(--nc-navy)", marginBottom: 20, fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)" }}>
                KI-gestütztes<br />
                <span style={{ color: "var(--nc-accent)" }}>Solar Lead System</span>
              </h1>
              <p style={{ fontSize: "1.05rem", marginBottom: 32, maxWidth: 480 }}>
                Wie ein Solarunternehmen durch einen KI-Chatbot, einen Voice AI Agent und vollautomatische Lead-Erfassung seine Closing-Rate um <strong style={{ color: "var(--nc-navy)" }}>+500 %</strong> steigerte – und dabei rund um die Uhr erreichbar wurde.
              </p>

              {/* Key metrics row */}
              <div className="cs-metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, padding: "20px 0", borderTop: "1px solid var(--nc-border)", borderBottom: "1px solid var(--nc-border)" }}>
                {[
                  { val: "+500 %", lbl: "Closing-Rate" },
                  { val: "< 60s", lbl: "Reaktionszeit" },
                  { val: "24 / 7", lbl: "Erreichbarkeit" },
                ].map((m) => (
                  <div key={m.val} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--nc-accent)", letterSpacing: "-0.04em" }}>{m.val}</div>
                    <div style={{ fontSize: 12, color: "var(--nc-text-muted)", fontWeight: 500, marginTop: 2 }}>{m.lbl}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <a href="#demo" className="nc-btn nc-btn-primary" style={{ gap: 8 }}>
                  <IcoPlay /> Live-Demo ansehen
                </a>
                <a href="#architektur" className="nc-btn nc-btn-secondary">System-Architektur</a>
              </div>
            </div>

            {/* Hero visual: chatbot screenshot */}
            <div className="reveal reveal-delay-2 cs-hero-visual" style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 20, overflow: "hidden",
                  boxShadow: "0 24px 80px rgba(26,74,110,0.2)",
                  border: "1px solid var(--nc-border)",
                  background: "#0D1117",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portfolio/solar-workflow-4.png"
                  alt="NorthCode Solar Chatbot live auf der Website"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute", bottom: -16, left: -16,
                  background: "white", borderRadius: 14,
                  padding: "12px 18px", boxShadow: "0 8px 32px rgba(26,74,110,0.18)",
                  border: "1px solid var(--nc-border)", display: "flex", alignItems: "center", gap: 10,
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 0 4px rgba(16,185,129,0.2)" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--nc-navy)" }}>Live & aktiv 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="problem" style={{ background: "rgba(236,243,242,0.6)" }}>
        <div className="nc-container">
          <div className="cs-problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
            <div className="reveal cs-problem-sticky" style={{ position: "sticky", top: 88 }}>
              <div className="nc-label"><span />Das Problem</div>
              <h2 style={{ color: "var(--nc-navy)", marginBottom: 16 }}>
                Jeden Tag gingen Leads verloren – unsichtbar.
              </h2>
              <p>
                Das Unternehmen hatte Interessenten, aber kein System, das sie zuverlässig auffing. Anfragen blieben unbeantwortet, Interessenten sprangen ab – und niemand merkte es, bis es zu spät war.
              </p>
              <div
                style={{
                  marginTop: 28, padding: "18px 20px",
                  background: "rgba(220,38,38,0.06)", borderRadius: 12,
                  border: "1px solid rgba(220,38,38,0.15)",
                }}
              >
                <p style={{ fontSize: 13.5, color: "#991B1B", fontWeight: 500, margin: 0 }}>
                  💸 Schätzung: Bei ∅ 8.000 € Projektvolumen und 3 verlorenen Leads/Woche = <strong>über 96.000 € entgangener Umsatz pro Jahr</strong> – allein durch fehlende Reaktionsgeschwindigkeit.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {problems.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 14,
                      padding: "16px 18px", borderRadius: 12,
                      background: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(220,38,38,0.12)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <div style={{ flexShrink: 0, marginTop: 1 }}>
                      <IcoX />
                    </div>
                    <p style={{ fontSize: 14.5, color: "var(--nc-text)", margin: 0, lineHeight: 1.6 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution ─────────────────────────────────────────────────── */}
      <section className="nc-section" id="loesung">
        <div className="nc-container">
          <div className="nc-section-header reveal">
            <div className="nc-label"><span />Die Lösung</div>
            <h2 style={{ color: "var(--nc-navy)" }}>Ein vollständiges, KI-gesteuertes Lead-System</h2>
            <p>Sechs Komponenten, die nahtlos zusammenarbeiten – von der ersten Website-Anfrage bis zur qualifizierten Übergabe an den Vertrieb.</p>
          </div>

          <div className="cs-solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
                style={{
                  background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)",
                  borderRadius: 16, border: "1px solid var(--nc-border)",
                  padding: "28px 24px", transition: "all 200ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--nc-accent)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--nc-shadow-md)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--nc-border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "var(--nc-accent-light)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--nc-accent)", marginBottom: 16,
                  }}
                >
                  {s.icon}
                </div>
                <div
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 22, height: 22, borderRadius: "50%",
                    background: "var(--nc-navy)", color: "white",
                    fontSize: 11, fontWeight: 700, marginBottom: 10, float: "right",
                    marginTop: -38,
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ color: "var(--nc-navy)", marginBottom: 10, fontSize: "1rem" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture Diagram ─────────────────────────────────────── */}
      <section className="nc-section" id="architektur" style={{ background: "#0D1520" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 48 }}>
            <div className="nc-label" style={{ color: "#8EC5B5" }}>
              <span style={{ background: "#8EC5B5" }} />Technische Architektur
            </div>
            <h2 style={{ color: "white" }}>So funktioniert das System unter der Haube</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>
              Zwei n8n-Workflows arbeiten parallel: einer befüllt die Wissensdatenbank, der andere treibt den Lead-Agenten an.
            </p>
          </div>

          {/* Workflow 1: RAG Pipeline */}
          <div className="reveal" style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#8EC5B5", marginBottom: 20 }}>
              Workflow 1 — Wissensdatenbank befüllen
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)", borderRadius: 16,
                border: "1px solid rgba(74,122,150,0.2)", padding: "28px 32px",
                display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
                overflowX: "auto",
              }}
            >
              <WorkflowNode icon="📋" label="Formular-Einreichung" sub="Trigger" accent />
              <ArrowRight />
              <WorkflowNode icon={<IcoDatabase />} label="Insert Docs" sub="Vector Store" />
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginLeft: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 1.5, height: 40, background: "rgba(74,122,150,0.35)", marginLeft: 12 }} />
                </div>
                <div style={{ display: "flex", gap: 16, marginLeft: 20 }}>
                  <WorkflowNode icon="✨" label="Embeddings" sub="OpenAI" />
                  <WorkflowNode icon="📄" label="Data Loader" sub="Dokumente" />
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 2: Lead Agent */}
          <div className="reveal reveal-delay-1" style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#8EC5B5", marginBottom: 20 }}>
              Workflow 2 — KI Lead Agent + Solar-Kalkulation
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)", borderRadius: 16,
                border: "1px solid rgba(74,122,150,0.2)", padding: "28px 32px",
              }}
            >
              {/* Main flow */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <WorkflowNode icon="💬" label="Chat Trigger" sub="n8n Chat Widget" accent />
                <ArrowRight />
                <WorkflowNode icon={<IcoBot />} label="Solar Lead Agent" sub="KI-Gehirn" accent />
                <ArrowRight label="Sub-Workflow" />
                <WorkflowNode icon="🔀" label="Execute Workflow" sub="Bei Solar-Anfrage" />
                <ArrowRight />
                <WorkflowNode icon={<IcoSolar />} label="Geocode Address" sub="Google Maps API" />
                <ArrowRight />
                <WorkflowNode icon="☀️" label="Get Solar Data" sub="Google Solar API" />
                <ArrowRight />
                <WorkflowNode icon="{}" label="Format Response" sub="JSON → Klartext" accent />
              </div>

              {/* Agent tools row */}
              <div
                style={{
                  borderTop: "1px dashed rgba(74,122,150,0.25)", paddingTop: 24,
                  display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start",
                }}
              >
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: ".08em", textTransform: "uppercase", width: "100%", marginBottom: 4 }}>
                  Agent Tools (immer verfügbar):
                </div>
                <WorkflowNode icon="🧠" label="Conversation Memory" sub="Gesprächskontext" />
                <WorkflowNode icon="✨" label="OpenAI GPT-4o" sub="Chat-Modell" />
                <WorkflowNode icon={<IcoDatabase />} label="Vector Store" sub="Firmenwissen" />
                <WorkflowNode icon="📞" label="Call Sub-Workflow" sub="Solar-Kalkulation" />
                <WorkflowNode icon="📊" label="Create Lead" sub="CRM-Eintrag" accent />
              </div>
            </div>
          </div>

          {/* Voice AI row */}
          <div className="reveal reveal-delay-2">
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#8EC5B5", marginBottom: 20 }}>
              Workflow 3 — Voice AI Agent (automatischer Anruf)
            </div>
            <div
              style={{
                background: "rgba(245,158,11,0.06)", borderRadius: 16,
                border: "1px solid rgba(245,158,11,0.2)", padding: "24px 32px",
                display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
              }}
            >
              <WorkflowNode icon="📊" label="Neuer Lead im CRM" sub="Trigger" accent />
              <ArrowRight />
              <WorkflowNode icon={<IcoVoice />} label="Voice AI Agent" sub="Automatischer Anruf" />
              <ArrowRight label="Vorgespräch" />
              <WorkflowNode icon="🎯" label="Lead-Qualifizierung" sub="Kaufbereitschaft?" />
              <ArrowRight />
              <WorkflowNode icon="📅" label="Kalender-Buchung" sub="Beratungstermin" accent />
              <ArrowRight />
              <WorkflowNode icon="🔔" label="Team-Benachrichtigung" sub="E-Mail / Telegram" />
            </div>
          </div>
        </div>
      </section>

      {/* ── n8n Screenshot ───────────────────────────────────────────── */}
      <section style={{ background: "#0D1520", paddingBottom: 80 }}>
        <div className="nc-container">
          <div className="reveal">
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 16, textAlign: "center" }}>
              Originaler n8n-Workflow-Screenshot
            </div>
            <div
              style={{
                borderRadius: 16, overflow: "hidden",
                border: "1px solid rgba(74,122,150,0.25)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio/solar-workflow-3.png"
                alt="n8n Workflow – Solar Lead Agent Architektur"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Demo ───────────────────────────────────────────────── */}
      <section className="nc-section" id="demo" style={{ background: "rgba(236,243,242,0.5)" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal">
            <div className="nc-label"><span />Live-Demo</div>
            <h2 style={{ color: "var(--nc-navy)" }}>Das System in Aktion</h2>
            <p>Hier siehst du, wie ein Interessent mit dem Chatbot interagiert, eine personalisierte Solar-Einschätzung erhält und automatisch als Lead erfasst wird.</p>
          </div>
          <div className="reveal" style={{ maxWidth: 800, margin: "0 auto" }}>
            <VideoPlayer src="/portfolio/solar-demo.mov" />
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────── */}
      <section className="nc-section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="nc-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="nc-label" style={{ justifyContent: "center" }}><span />Technologie-Stack</div>
            <h3 style={{ color: "var(--nc-navy)", fontSize: "1.5rem" }}>Was unter der Haube steckt</h3>
          </div>
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {techStack.map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 18px", borderRadius: 10,
                  background: "rgba(255,255,255,0.9)", border: "1px solid var(--nc-border)",
                  boxShadow: "var(--nc-shadow-sm)",
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--nc-navy)" }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: "var(--nc-text-muted)", marginTop: 1 }}>{t.cat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="ergebnisse" style={{ background: "var(--nc-navy)" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 56 }}>
            <div className="nc-label" style={{ color: "#8EC5B5" }}><span style={{ background: "#8EC5B5" }} />Ergebnisse</div>
            <h2 style={{ color: "white" }}>Messbare Wirkung von Tag 1</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>
              Kein theoretischer Nutzen – konkrete Zahlen, die direkt nach dem Launch sichtbar wurden.
            </p>
          </div>

          <div className="cs-results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {results.map((r, i) => (
              <div
                key={r.label}
                className={`reveal reveal-delay-${(i % 2) + 1}`}
                style={{
                  background: "rgba(255,255,255,0.06)", borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.1)", padding: "32px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div
                    style={{
                      width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                      background: "rgba(61,139,120,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#8EC5B5",
                    }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--nc-accent-sage, #8EC5B5)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                      {r.val}
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginTop: 6, marginBottom: 8 }}>
                      {r.label}
                    </div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>{r.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transformation summary */}
          <div className="reveal" style={{ marginTop: 40 }}>
            <div
              style={{
                background: "rgba(61,139,120,0.12)", borderRadius: 16,
                border: "1px solid rgba(61,139,120,0.3)", padding: "28px 32px",
              }}
            >
              <h3 style={{ color: "white", marginBottom: 20, fontSize: "1.1rem" }}>Vorher vs. Nachher – auf einen Blick</h3>
              <div className="cs-before-after" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#FC8181", textTransform: "uppercase", marginBottom: 12 }}>Vorher</div>
                  {[
                    "Manuelle Bearbeitung jeder Anfrage",
                    "Keine Antwort außerhalb der Bürozeiten",
                    "Unstrukturierte Lead-Übergabe",
                    "Keine Vorqualifizierung",
                    "Langsame Reaktion = verlorene Leads",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <IcoX />
                      <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#86EFAC", textTransform: "uppercase", marginBottom: 12 }}>Nachher</div>
                  {[
                    "KI antwortet sofort, 24/7",
                    "Automatische Solar-Einschätzung in Sekunden",
                    "Strukturierte CRM-Übergabe ohne manuellen Aufwand",
                    "Voice AI qualifiziert Leads automatisch vor",
                    "< 60s Reaktionszeit – Leads werden nicht mehr verloren",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <IcoCheck />
                      <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="nc-section" id="kontakt-cta" style={{ background: "var(--nc-bg-alt, #ECF3F2)" }}>
        <div className="nc-container">
          <div
            className="reveal"
            style={{
              background: "white", borderRadius: 24,
              border: "1px solid var(--nc-border)",
              padding: "56px 48px", textAlign: "center",
              boxShadow: "var(--nc-shadow-lg)",
            }}
          >
            <div className="nc-badge" style={{ marginBottom: 20, justifyContent: "center" }}>
              Ähnliches Projekt möglich
            </div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 16, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Willst du ein ähnliches System für dein Unternehmen?
            </h2>
            <p style={{ maxWidth: 540, margin: "0 auto 32px", fontSize: "1rem" }}>
              Ob Solar, Immobilien, Handwerk oder Dienstleistungen – das Prinzip funktioniert branchenübergreifend. In einem kostenlosen Gespräch analysiere ich, wie ein maßgeschneidertes Lead-System für dich aussehen würde.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://calendly.com/northcode/erstgespraech"
                target="_blank"
                rel="noopener noreferrer"
                className="nc-btn nc-btn-primary"
              >
                Kostenloses Erstgespräch buchen <IcoArrowRight />
              </a>
              <a
                href="https://wa.me/491234567890?text=Hallo%20Esmail%2C%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20%C3%A4hnliches%20Lead-System."
                target="_blank"
                rel="noopener noreferrer"
                className="nc-btn nc-btn-secondary"
              >
                💬 Direkt auf WhatsApp
              </a>
            </div>
            <p style={{ fontSize: 12, color: "var(--nc-text-muted)", marginTop: 20 }}>
              Kein Pitch, kein Druck. Nur ein ehrliches Gespräch darüber, was für dich möglich ist.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer mini ──────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--nc-navy)", padding: "28px 0",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          className="nc-container"
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: 16,
          }}
        >
          <Link href="/" style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", textDecoration: "none", letterSpacing: "-.03em" }}>
            North<span style={{ color: "#8EC5B5" }}>code</span>
          </Link>
          <Link
            href="/#portfolio"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "rgba(255,255,255,0.6)", textDecoration: "none",
              fontSize: 14, fontWeight: 500, transition: "color 200ms",
            }}
          >
            <IcoArrowLeft /> Alle Portfolio-Projekte
          </Link>
        </div>
      </div>
    </div>
  );
}
