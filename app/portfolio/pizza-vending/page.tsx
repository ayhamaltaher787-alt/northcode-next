"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "../portfolio-mobile.css";

// ─── Reveal ───────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function IcoArrowLeft() {
  return (<svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoArrowRight() {
  return (<svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoCheck() {
  return (<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="rgba(61,139,120,0.15)"/><path d="M8 12l3 3 5-5" stroke="#3D8B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoX() {
  return (<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="rgba(220,38,38,0.12)"/><path d="M15 9l-6 6M9 9l6 6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/></svg>);
}
function IcoPlay() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.15"/><path d="M10 8l6 4-6 4V8z" fill="white"/></svg>);
}
function IcoGlobe() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20" stroke="currentColor" strokeWidth="1.8"/></svg>);
}
function IcoHandshake() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoMapPin() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>);
}
function IcoLayout() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.8"/></svg>);
}
function IcoImage() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoUsers() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>);
}
function IcoTrend() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 7l-8.5 8.5-5-5L2 17M22 7h-6M22 7v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoZap() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>);
}

// ─── Video Player ─────────────────────────────────────────────────────────────
function VideoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const toggle = () => {
    if (!ref.current) return;
    playing ? ref.current.pause() : ref.current.play();
    setPlaying(!playing);
  };
  return (
    <div onClick={toggle} style={{ position: "relative", borderRadius: 16, overflow: "hidden", background: "#0a0f1a", cursor: "pointer", boxShadow: "0 24px 80px rgba(26,74,110,0.35)", border: "1px solid rgba(74,122,150,0.2)" }}>
      <video ref={ref} src={src} style={{ width: "100%", display: "block", maxHeight: 540, objectFit: "contain" }} onEnded={() => setPlaying(false)} playsInline />
      {!playing && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(10,15,26,0.6)", backdropFilter: "blur(2px)", gap: 14 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--nc-accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 20px rgba(61,139,120,0.15)" }}>
            <IcoPlay />
          </div>
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 600 }}>Live-Demo der Website ansehen</span>
        </div>
      )}
    </div>
  );
}

// ─── Website Mockup ───────────────────────────────────────────────────────────
function WebsiteMockup() {
  const [activeTab, setActiveTab] = useState<"kunde" | "partner">("kunde");
  return (
    <div style={{ background: "#1A1A2E", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "system-ui, sans-serif" }}>
      {/* Browser chrome */}
      <div style={{ background: "#2D2D44", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#FF5F57","#FEBC2E","#28C840"].map((c) => (<div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />))}
        </div>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: 6, padding: "4px 12px", fontSize: 12, color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
          🔒 pizza-automat.de
        </div>
      </div>
      {/* Nav */}
      <div style={{ background: "#111122", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>🍕</span>
          <span style={{ color: "white", fontWeight: 700, fontSize: 15 }}>PizzaVend</span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["Wie es funktioniert", "Standorte", "Kooperation"].map((l) => (
            <span key={l} style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <div style={{ background: "#E53E3E", color: "white", padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>
          Jetzt anfragen
        </div>
      </div>
      {/* Tab switcher */}
      <div style={{ background: "#111122", padding: "16px 20px" }}>
        <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 4, gap: 4 }}>
          {(["kunde", "partner"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all 200ms", background: activeTab === tab ? "white" : "transparent", color: activeTab === tab ? "#1A1A2E" : "rgba(255,255,255,0.5)" }}>
              {tab === "kunde" ? "👤 Für Kunden" : "🤝 Für Partner / Standorte"}
            </button>
          ))}
        </div>
        {activeTab === "kunde" ? (
          <div style={{ marginTop: 16, padding: "18px", background: "rgba(255,255,255,0.04)", borderRadius: 10 }}>
            <div style={{ color: "white", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Frische Pizza – rund um die Uhr, überall</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>Unsere Automaten servieren in 3 Minuten frisch gebackene Pizza. Kein Warten, keine Öffnungszeiten.</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {["🕐 24/7 verfügbar", "🍕 Frisch zubereitet", "💳 Kartenzahlung", "📍 Standort finden"].map((f) => (
                <div key={f} style={{ background: "rgba(229,62,62,0.12)", borderRadius: 8, padding: "8px 12px", fontSize: 11, color: "rgba(255,255,255,0.75)", border: "1px solid rgba(229,62,62,0.2)" }}>{f}</div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ marginTop: 16, padding: "18px", background: "rgba(255,255,255,0.04)", borderRadius: 10 }}>
            <div style={{ color: "white", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Automat bei dir aufstellen – passives Einkommen</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>Stellen Sie einen unserer Automaten in Ihrem Objekt auf und profitieren Sie durch Umsatzbeteiligung ohne eigenen Aufwand.</div>
            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "12px 14px" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 8, letterSpacing: ".06em", textTransform: "uppercase" }}>Standortanfrage</div>
              {["Ihr Name / Unternehmen", "Standortbeschreibung", "Tägl. Besucherzahl (ca.)"].map((p) => (
                <div key={p} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "6px 10px", marginBottom: 6, fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{p}</div>
              ))}
              <div style={{ background: "#E53E3E", color: "white", padding: "8px", borderRadius: 8, fontSize: 12, fontWeight: 700, textAlign: "center", marginTop: 4 }}>
                Kooperationsanfrage senden →
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Funnel Diagram ───────────────────────────────────────────────────────────
function FunnelStep({ icon, step, title, desc, color }: { icon: string; step: string; title: string; desc: string; color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, flex: 1, padding: "0 8px" }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${color}20`, border: `2px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, position: "relative", zIndex: 1, flexShrink: 0 }}>
        {icon}
        <div style={{ position: "absolute", top: -4, right: -4, width: 22, height: 22, borderRadius: "50%", background: color, color: "white", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{step}</div>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#D4E5E2", marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PizzaVendingPage() {
  useReveal();

  const problems = [
    "Keine zentrale Informationsquelle – Interessenten fanden kein klares Bild vom Produkt",
    "Potenzielle Standort-Partner konnten keine strukturierte Kooperationsanfrage stellen",
    "Fehlende Trennung: Endkunden-Infos und B2B-Kooperationen waren vermischt oder gar nicht vorhanden",
    "Neue Aufstellorte mussten mühsam per Telefon oder E-Mail angefragt werden",
    "Das Geschäftsmodell (Automat + Einnahmemodell + Umsatzbeteiligung) war nicht klar kommuniziert",
    "Interessenten sprangen ab, weil kein strukturierter Kontaktweg existierte",
    "Kein automatisierter Lead-Erfassungsprozess für Kooperationsanfragen",
  ];

  const solutions = [
    { icon: <IcoGlobe />, title: "Moderne Vertriebs-Website", desc: "Keine Standard-Unternehmensseite – eine Website, die gezielt zwei Zielgruppen anspricht: Endkunden (Wo finde ich einen Automaten?) und Standort-Partner (Wie kann ich kooperieren?).", color: "#E53E3E" },
    { icon: <IcoLayout />, title: "Klare B2B/B2C-Trennung", desc: "Eine explizite Struktur trennt Kundeninformationen von Business-Kooperationen. Jede Zielgruppe findet sofort, was sie sucht – kein Scrollen, kein Suchen.", color: "#3D8B78" },
    { icon: <IcoHandshake />, title: "Kooperations- & Anfrage-System", desc: "Ein strukturiertes Formular für Standortanfragen: Interessenten geben Standorttyp, Besucherzahl und Kontaktdaten ein. Qualifizierte Leads landen direkt beim Vertrieb.", color: "#F59E0B" },
    { icon: <IcoMapPin />, title: "Standort-Informationssystem", desc: "Eine klare Übersicht der vorhandenen Automaten-Standorte mit Öffnungszeiten und Karte – als Kundenservice und gleichzeitig als Beweis der Skalierung für Partner.", color: "#8B5CF6" },
    { icon: <IcoImage />, title: "KI-generierte Produkt- und Szenenbilder", desc: "Hochwertige KI-generierte Visualisierungen zeigen die Automaten in realistischen Umgebungen – Shoppingcenter, Bahnhöfe, Büros. Professioneller Eindruck ohne teures Fotoshooting.", color: "#2AABEE" },
    { icon: <IcoUsers />, title: "Optimiert für Mobilgeräte", desc: "Da potenzielle Standortpartner die Seite häufig unterwegs besuchen, wurde Mobile-First als primäres Design-Prinzip angewendet – schnell, klar, direkt zur Anfrage.", color: "#10A37F" },
  ];

  const results = [
    { icon: <IcoHandshake />, val: "+∞", label: "Strukturierte Kooperationsanfragen", sub: "Vorher: keine. Nachher: ein klarer, standardisierter Weg für neue Standortpartner" },
    { icon: <IcoTrend />, val: "2× mehr", label: "Conversion zu Anfragen", sub: "Klare Trennung B2B/B2C + strukturierter Anfragefluss erhöht die Wahrscheinlichkeit, dass Interessenten tatsächlich anfragen" },
    { icon: <IcoZap />, val: "Sofort", label: "Geschäftsmodell verständlich", sub: "Automat, Einnahmemodell und Umsatzbeteiligung werden auf einen Blick klar – kein langer Erklärungsbedarf mehr" },
    { icon: <IcoUsers />, val: "0 min", label: "Manuelle Lead-Erfassung", sub: "Standortanfragen kommen strukturiert rein – kein Telefon-Ping-Pong, kein unvollständiger E-Mail-Kontakt mehr" },
  ];

  return (
    <div id="northcode-site" style={{ fontFamily: "var(--nc-font, 'Plus Jakarta Sans', sans-serif)" }}>

      {/* ── Nav ──────────────────────────────────────────────────────── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(245,250,250,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--nc-border)", boxShadow: "var(--nc-shadow-sm)" }}>
        <div className="cs-nav-inner" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/#portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--nc-navy)", textDecoration: "none", fontWeight: 600, fontSize: 14, padding: "8px 16px", borderRadius: 8, border: "1.5px solid var(--nc-border)", background: "white" }}>
            <IcoArrowLeft /> Zurück zum Portfolio
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--nc-accent)", background: "var(--nc-accent-light)", padding: "4px 12px", borderRadius: 100 }}>Case Study</span>
            <a href="#kontakt-cta" className="nc-btn nc-btn-primary cs-nav-cta" style={{ padding: "8px 18px", fontSize: 13 }}>Ähnliches Projekt anfragen</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="cs-hero-section" style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #FFF5F5 0%, #F5FAFA 50%, #EAF5F2 100%)" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(229,62,62,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,139,120,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="nc-container" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, fontSize: 13, color: "var(--nc-text-muted)" }}>
            <Link href="/" style={{ color: "var(--nc-text-muted)", textDecoration: "none" }}>Northcode</Link>
            <span>/</span>
            <Link href="/#portfolio" style={{ color: "var(--nc-text-muted)", textDecoration: "none" }}>Portfolio</Link>
            <span>/</span>
            <span style={{ color: "var(--nc-accent)", fontWeight: 600 }}>Pizza Vending Platform</span>
          </div>

          <div className="cs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {["Lead-Generierung", "B2B-Kooperation", "Webdesign", "KI-Visualisierung"].map((t) => (
                  <span key={t} className="nc-badge">{t}</span>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 8, background: "rgba(229,62,62,0.08)", border: "1px solid rgba(229,62,62,0.2)", marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E53E3E" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#C53030", letterSpacing: ".04em", textTransform: "uppercase" }}>Digitales Vertriebs- & Kooperationssystem</span>
              </div>

              <h1 style={{ color: "var(--nc-navy)", marginBottom: 20, fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
                Lead-Generierungs-<br />plattform für{" "}
                <span style={{ color: "#E53E3E" }}>Pizza-Automaten</span>
              </h1>

              <p style={{ fontSize: "1.05rem", marginBottom: 32, maxWidth: 480 }}>
                Eine Website, die zwei völlig unterschiedliche Zielgruppen bedient – Endkunden und potenzielle Standortpartner – mit einem strukturierten Kooperationssystem, das neue Aufstellorte automatisch als qualifizierte Leads erfasst.
              </p>

              <div className="cs-metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, padding: "20px 0", borderTop: "1px solid var(--nc-border)", borderBottom: "1px solid var(--nc-border)", marginBottom: 28 }}>
                {[
                  { val: "2 Zielgruppen", lbl: "sauber getrennt" },
                  { val: "0 Reibung", lbl: "im Anfrageprozess" },
                  { val: "24/7", lbl: "Lead-Erfassung" },
                ].map((m) => (
                  <div key={m.val} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#E53E3E", letterSpacing: "-0.04em", lineHeight: 1.1 }}>{m.val}</div>
                    <div style={{ fontSize: 12, color: "var(--nc-text-muted)", fontWeight: 500, marginTop: 2 }}>{m.lbl}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#demo" className="nc-btn nc-btn-primary" style={{ background: "#E53E3E" }}>
                  <IcoPlay /> Website-Demo ansehen
                </a>
                <a href="#loesung" className="nc-btn nc-btn-secondary">Lösung erkunden</a>
              </div>
            </div>

            {/* Interactive Website Mockup */}
            <div className="reveal reveal-delay-2 cs-hero-visual">
              <WebsiteMockup />
              {/* Floating badge */}
              <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
                <div style={{ background: "white", borderRadius: 10, padding: "8px 14px", border: "1px solid var(--nc-border)", boxShadow: "var(--nc-shadow-sm)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>🤝</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--nc-navy)" }}>B2B-Anfragen automatisiert</span>
                </div>
                <div style={{ background: "white", borderRadius: 10, padding: "8px 14px", border: "1px solid var(--nc-border)", boxShadow: "var(--nc-shadow-sm)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>🤖</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--nc-navy)" }}>KI-Visualisierungen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Positionierungs-Banner ────────────────────────────────────── */}
      <div style={{ background: "var(--nc-navy)", padding: "28px 0" }}>
        <div className="nc-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap", textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, textDecoration: "line-through" }}>❌ Kein einfaches Webdesign</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 18 }}>→</div>
            <div style={{ color: "#8EC5B5", fontSize: 15, fontWeight: 700 }}>✅ Digitales Vertriebs- & Kooperationssystem</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 18 }}>·</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, textDecoration: "line-through" }}>❌ Kein Visitenkarten-Website</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 18 }}>→</div>
            <div style={{ color: "#8EC5B5", fontSize: 15, fontWeight: 700 }}>✅ Lead-Maschine für B2B-Kooperationen</div>
          </div>
        </div>
      </div>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="problem" style={{ background: "rgba(255,245,245,0.6)" }}>
        <div className="nc-container">
          <div className="cs-problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
            <div className="reveal cs-problem-sticky" style={{ position: "sticky", top: 88 }}>
              <div className="nc-label"><span />Das Problem</div>
              <h2 style={{ color: "var(--nc-navy)", marginBottom: 16 }}>Neue Standorte wurden durch fehlende Struktur verhindert.</h2>
              <p>Wer einen Pizza-Automaten aufstellen wollte, fand keinen klaren Weg. Interessenten mussten selbst recherchieren, telefonierten auf gut Glück – oder ließen es bleiben.</p>
              <div style={{ marginTop: 28, padding: "18px 20px", background: "rgba(229,62,62,0.06)", borderRadius: 12, border: "1px solid rgba(229,62,62,0.15)" }}>
                <p style={{ fontSize: 13.5, color: "#9B2C2C", fontWeight: 500, margin: 0 }}>
                  📉 Jeder verpasste Standortpartner = entgangener passiver Umsatz auf Jahre hinaus. Fehlende Online-Präsenz macht diesen Verlust <strong>unsichtbar, aber real.</strong>
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {problems.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.9)", border: "1px solid rgba(229,62,62,0.12)", backdropFilter: "blur(4px)" }}>
                    <div style={{ flexShrink: 0, marginTop: 1 }}><IcoX /></div>
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
            <h2 style={{ color: "var(--nc-navy)" }}>Ein System, das zwei Zielgruppen gleichzeitig bedient</h2>
            <p>Die Website funktioniert als Vertriebsmaschine für Kooperationspartner und gleichzeitig als Kundeninformationssystem – mit klarer Trennung und strukturierten Anfragewegen.</p>
          </div>
          <div className="cs-solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {solutions.map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)", borderRadius: 16, border: "1px solid var(--nc-border)", padding: "28px 24px", transition: "all 200ms" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = s.color; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "var(--nc-shadow-md)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--nc-border)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color }}>{s.icon}</div>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--nc-navy)", color: "white", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
                </div>
                <h3 style={{ color: "var(--nc-navy)", marginBottom: 10, fontSize: "1rem" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conversion Funnel ────────────────────────────────────────── */}
      <section style={{ padding: "64px 0", background: "#0D1520" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 48 }}>
            <div className="nc-label" style={{ color: "#8EC5B5" }}><span style={{ background: "#8EC5B5" }} />Kooperations-Funnel</div>
            <h2 style={{ color: "white" }}>Von Besucher zu qualifiziertem Partner</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>Der strukturierte Weg, den ein potenzieller Standortpartner auf der Website nimmt – automatisiert, ohne Reibung.</p>
          </div>
          <div className="reveal" style={{ position: "relative" }}>
            {/* Connector */}
            <div style={{ position: "absolute", top: 32, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, rgba(229,62,62,0.5), rgba(61,139,120,0.5))", borderRadius: 2 }} />
            <div style={{ display: "flex", gap: 16, position: "relative" }}>
              <FunnelStep step="1" icon="🌐" title="Website besuchen" desc="Organisch, Empfehlung oder Direktsuche" color="#2AABEE" />
              <FunnelStep step="2" icon="🤝" title="B2B-Sektion" desc="Geschäftsmodell & Umsatzbeteiligung verstehen" color="#F59E0B" />
              <FunnelStep step="3" icon="📋" title="Anfrageformular" desc="Standorttyp, Frequenz, Kontaktdaten eingeben" color="#E53E3E" />
              <FunnelStep step="4" icon="📩" title="Lead erfasst" desc="Strukturiert im System – kein manueller Aufwand" color="#8B5CF6" />
              <FunnelStep step="5" icon="📞" title="Vertrieb kontaktiert" desc="Qualifizierter Lead, relevante Infos bereits vorhanden" color="#3D8B78" />
            </div>
          </div>
        </div>
      </section>

      {/* ── KI-Bilder Highlight ───────────────────────────────────────── */}
      <section style={{ padding: "64px 0", background: "#0D1520", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="nc-container">
          <div className="reveal cs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div className="nc-label" style={{ color: "#8EC5B5" }}><span style={{ background: "#8EC5B5" }} />KI-generierte Visualisierungen</div>
              <h2 style={{ color: "white", marginBottom: 16 }}>Professionelle Bilder ohne teures Fotoshooting</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
                Statt teure Produktfotos in verschiedenen Umgebungen zu machen, wurden hochwertige KI-generierte Szenenbilder erstellt – der Automat in einem Shoppingcenter, einem Bahnhof, einem Bürogebäude. Realistisch, professionell, flexibel.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "💰", text: "Kostenersparnis gegenüber professionellem Fotoshooting: über 80 %" },
                  { icon: "⚡", text: "Lieferzeit: Stunden statt Wochen" },
                  { icon: "🎨", text: "Beliebig viele Szenarien und Umgebungen möglich" },
                  { icon: "✏️", text: "Jederzeit anpassbar ohne erneuten Aufwand" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", background: "rgba(255,255,255,0.04)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* KI image grid mockup */}
            <div className="cs-img-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { bg: "linear-gradient(135deg,#2D1B69,#11998e)", label: "🏢 Bürogebäude", sub: "200+ Mitarbeiter täglich" },
                { bg: "linear-gradient(135deg,#c94b4b,#4b134f)", label: "🛍️ Einkaufszentrum", sub: "Hohe Laufkundschaft" },
                { bg: "linear-gradient(135deg,#1a3a4a,#2d6a8f)", label: "🚉 Bahnhof", sub: "24/7 Frequenz" },
                { bg: "linear-gradient(135deg,#2D3436,#636e72)", label: "🏋️ Fitnesscenter", sub: "Nach dem Training" },
              ].map((card) => (
                <div key={card.label} style={{ background: card.bg, borderRadius: 12, padding: "40px 16px 16px", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "3px 8px", fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>KI-generiert</div>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>🍕</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>{card.label}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Demo ───────────────────────────────────────────────── */}
      <section className="nc-section" id="demo">
        <div className="nc-container">
          <div className="nc-section-header reveal">
            <div className="nc-label"><span />Live-Demo</div>
            <h2 style={{ color: "var(--nc-navy)" }}>Die Plattform in Aktion</h2>
            <p>Hier siehst du die vollständige Website – von der Endkunden-Darstellung bis zum strukturierten Kooperationsformular für Standortpartner.</p>
          </div>
          <div className="reveal" style={{ maxWidth: 860, margin: "0 auto" }}>
            <VideoPlayer src="/portfolio/pizza-demo.mov" />
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="ergebnisse" style={{ background: "var(--nc-navy)" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 56 }}>
            <div className="nc-label" style={{ color: "#8EC5B5" }}><span style={{ background: "#8EC5B5" }} />Ergebnisse</div>
            <h2 style={{ color: "white" }}>Was die Plattform für das Unternehmen verändert</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>Mehr strukturierte Kooperationsanfragen, weniger Reibung, professionellerer Marktauftritt.</p>
          </div>

          <div className="cs-results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 40 }}>
            {results.map((r, i) => (
              <div key={r.label} className={`reveal reveal-delay-${(i % 2) + 1}`} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", padding: "32px", backdropFilter: "blur(8px)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0, background: "rgba(229,62,62,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FC8181" }}>{r.icon}</div>
                  <div>
                    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#8EC5B5", letterSpacing: "-0.04em", lineHeight: 1 }}>{r.val}</div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginTop: 6, marginBottom: 8 }}>{r.label}</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>{r.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vorher/Nachher */}
          <div className="reveal">
            <div style={{ background: "rgba(61,139,120,0.12)", borderRadius: 16, border: "1px solid rgba(61,139,120,0.3)", padding: "28px 32px" }}>
              <h3 style={{ color: "white", marginBottom: 20, fontSize: "1.1rem" }}>Vorher vs. Nachher</h3>
              <div className="cs-before-after" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#FC8181", textTransform: "uppercase", marginBottom: 12 }}>Vorher</div>
                  {["Keine zentrale Website", "Kooperationsanfragen nur per Telefon", "Geschäftsmodell unklar für Außenstehende", "Keine Trennung B2B / B2C", "Kein skalierbarer Partnergewinnungs-Prozess"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <IcoX /><span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#86EFAC", textTransform: "uppercase", marginBottom: 12 }}>Nachher</div>
                  {["Professionelle Plattform mit klarer Struktur", "Strukturiertes Formular für Standortanfragen", "Geschäftsmodell sofort verständlich", "Klare B2B/B2C-Trennung auf der Website", "Automatisierte Lead-Erfassung für Kooperationen"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <IcoCheck /><span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio-Einordnung ─────────────────────────────────────── */}
      <section style={{ padding: "64px 0", background: "rgba(236,243,242,0.5)" }}>
        <div className="nc-container">
          <div className="reveal" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div className="nc-label" style={{ justifyContent: "center" }}><span />Einordnung in Northcodes Portfolio</div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 16, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>3 Projektkategorien – eine klare Positionierung</h2>
            <p style={{ marginBottom: 36 }}>Dieses Projekt ergänzt Northcodes Portfolio um die dritte strategische Kategorie.</p>
            <div className="cs-solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "left" }}>
              {[
                { num: "01", icon: "🎯", title: "Lead-Systeme", desc: "Solar & Pizza-Automaten", detail: "Kunden gewinnen durch strukturierte digitale Vertriebsprozesse", active: true },
                { num: "02", icon: "⚙️", title: "Automatisierungs-systeme", desc: "Telegram Expense Tracker", detail: "Interne Prozesse ersetzen durch KI-gestützte Workflows", active: false },
                { num: "03", icon: "🎨", title: "KI & Visualisierung", desc: "KI-Bilder, Präsentationen", detail: "Professionelles Branding und Darstellung durch KI-generierte Assets", active: false },
              ].map((cat) => (
                <div key={cat.num} style={{ padding: "20px", background: cat.active ? "var(--nc-navy)" : "rgba(255,255,255,0.9)", borderRadius: 14, border: `1px solid ${cat.active ? "transparent" : "var(--nc-border)"}`, boxShadow: cat.active ? "0 8px 32px rgba(26,74,110,0.2)" : "none" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: cat.active ? "#8EC5B5" : "var(--nc-text-muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 8 }}>{cat.num}</div>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{cat.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: cat.active ? "white" : "var(--nc-navy)", marginBottom: 4 }}>{cat.title}</div>
                  <div style={{ fontSize: 12, color: cat.active ? "#8EC5B5" : "var(--nc-accent)", fontWeight: 600, marginBottom: 8 }}>{cat.desc}</div>
                  <div style={{ fontSize: 13, color: cat.active ? "rgba(255,255,255,0.65)" : "var(--nc-text-muted)", lineHeight: 1.5 }}>{cat.detail}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, padding: "18px 24px", background: "var(--nc-navy)", borderRadius: 12, display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 16 }}>✅</span>
              <span style={{ fontSize: 14, color: "white", fontWeight: 600 }}>Northcode = Entwickler digitaler Geschäfts- & Automatisierungssysteme für Unternehmen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="nc-section" id="kontakt-cta" style={{ background: "var(--nc-bg-alt)" }}>
        <div className="nc-container">
          <div className="reveal" style={{ background: "white", borderRadius: 24, border: "1px solid var(--nc-border)", padding: "56px 48px", textAlign: "center", boxShadow: "var(--nc-shadow-lg)" }}>
            <div className="nc-badge" style={{ marginBottom: 20, justifyContent: "center" }}>Ähnliches System gewünscht?</div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 16, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Du willst mehr Kooperationspartner oder eine strukturierte Lead-Plattform?
            </h2>
            <p style={{ maxWidth: 520, margin: "0 auto 32px", fontSize: "1rem" }}>
              Egal ob Franchise, Produkt, Dienstleistung oder Standortgeschäft – ich baue dir eine digitale Plattform, die aktiv neue Partner und Kunden gewinnt.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://calendly.com/northcode/erstgespraech" target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-primary">
                Kostenloses Erstgespräch buchen <IcoArrowRight />
              </a>
              <a href="https://wa.me/491234567890?text=Hallo%20Esmail%2C%20ich%20brauche%20eine%20Lead-Plattform." target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-secondary">
                💬 Direkt auf WhatsApp
              </a>
            </div>
            <p style={{ fontSize: 12, color: "var(--nc-text-muted)", marginTop: 20 }}>Kein Pitch, kein Druck. Nur ein ehrliches Gespräch darüber, was möglich ist.</p>
          </div>
        </div>
      </section>

      {/* ── Footer mini ──────────────────────────────────────────────── */}
      <div style={{ background: "var(--nc-navy)", padding: "28px 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="nc-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link href="/" style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", textDecoration: "none", letterSpacing: "-.03em" }}>
            North<span style={{ color: "#8EC5B5" }}>code</span>
          </Link>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/portfolio/telegram-expenses" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}>
              ← Telegram Expense System
            </Link>
            <Link href="/#portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              <IcoArrowLeft /> Alle Projekte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
