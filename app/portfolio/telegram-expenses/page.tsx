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
  return (<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2"/><path d="M10 8l6 4-6 4V8z" fill="white"/></svg>);
}
function IcoTelegram() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoSheet() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M3 9h18M3 15h18M9 9v9" stroke="currentColor" strokeWidth="1.8"/></svg>);
}
function IcoScan() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>);
}
function IcoBell() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoZap() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>);
}
function IcoClock() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>);
}
function IcoEuro() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17 7a6 6 0 100 10M3 10h10M3 14h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>);
}
function IcoShield() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>);
}
function IcoBot() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.8"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><path d="M12 3v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>);
}

// ─── Video Player ─────────────────────────────────────────────────────────────
function VideoPlayer({ src, label = "Demo ansehen" }: { src: string; label?: string }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const toggle = () => {
    if (!ref.current) return;
    playing ? ref.current.pause() : ref.current.play();
    setPlaying(!playing);
  };
  return (
    <div onClick={toggle} style={{ position: "relative", borderRadius: 16, overflow: "hidden", background: "#0a0f1a", cursor: "pointer", boxShadow: "0 24px 80px rgba(26,74,110,0.3)", border: "1px solid rgba(74,122,150,0.2)" }}>
      <video ref={ref} src={src} style={{ width: "100%", display: "block", maxHeight: 520, objectFit: "contain" }} onEnded={() => setPlaying(false)} playsInline />
      {!playing && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(10,15,26,0.55)", backdropFilter: "blur(2px)", gap: 12 }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--nc-accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 16px rgba(61,139,120,0.18)" }}>
            <IcoPlay />
          </div>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600 }}>{label}</span>
        </div>
      )}
    </div>
  );
}

// ─── Workflow Node ────────────────────────────────────────────────────────────
function Node({ icon, label, sub, accent = false, color }: { icon: React.ReactNode; label: string; sub?: string; accent?: boolean; color?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center", minWidth: 90 }}>
      <div style={{ width: 56, height: 56, borderRadius: accent ? 14 : "50%", background: accent ? (color ?? "linear-gradient(135deg,var(--nc-accent),var(--nc-accent-h))") : "rgba(255,255,255,0.06)", border: `1.5px solid ${accent ? "transparent" : "rgba(74,122,150,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: accent ? "white" : "#8EC5B5", boxShadow: accent ? "0 4px 20px rgba(61,139,120,0.35)" : "none", flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#D4E5E2", lineHeight: 1.3 }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: 20, height: 1.5, background: "rgba(74,122,150,0.5)" }} />
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M0 4h6M4 1l3 3-3 3" stroke="rgba(74,122,150,0.6)" strokeWidth="1.2" strokeLinecap="round"/></svg>
      </div>
      {label && <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>{label}</div>}
    </div>
  );
}

// ─── Telegram Message Mockup ──────────────────────────────────────────────────
function TelegramMockup() {
  return (
    <div style={{ background: "#17212B", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", maxWidth: 380 }}>
      {/* Header */}
      <div style={{ background: "#232E3C", padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#2AABEE,#229ED9)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>R</div>
        <div><div style={{ color: "white", fontWeight: 600, fontSize: 14 }}>ReceiptBot</div><div style={{ color: "#6C8FA8", fontSize: 12 }}>Bot · online</div></div>
      </div>
      {/* Messages */}
      <div style={{ padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
        {/* User uploads receipt */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ background: "#2B5278", borderRadius: "12px 12px 2px 12px", padding: "10px 14px", maxWidth: "85%" }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>📎 receipt_artgroup.pdf</div>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "8px 10px", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Rechnung hochgeladen</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "right", marginTop: 6 }}>10:52</div>
          </div>
        </div>
        {/* Bot processing */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#2AABEE,#229ED9)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🤖</div>
          <div style={{ background: "#232E3C", borderRadius: "2px 12px 12px 12px", padding: "12px 14px", maxWidth: "85%" }}>
            <div style={{ color: "#4FC3F7", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>✅ Ausgabe gespeichert!</div>
            {[
              ["Datum", "2025-06-26"],
              ["Betrag", "79,40 EUR"],
              ["Steuern", "10,00 EUR"],
              ["Kategorie", "Office Supplies"],
              ["Verkäufer", "ARTGROUP T-Shirt Emporium"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", minWidth: 72 }}>{k}:</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{v}</span>
              </div>
            ))}
            <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 11, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>This message was sent automatically with n8n</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "right", marginTop: 4 }}>10:53</div>
          </div>
        </div>
        {/* CFO Alert hint */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#2AABEE,#229ED9)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🤖</div>
          <div style={{ background: "#1E3A5F", borderRadius: "2px 12px 12px 12px", padding: "10px 14px", maxWidth: "85%", border: "1px solid rgba(255,165,0,0.2)" }}>
            <div style={{ color: "#FFA726", fontWeight: 700, fontSize: 12, marginBottom: 4 }}>⚠️ Eskalations-Regel nicht ausgelöst</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>Betrag unter 500 € – kein CFO-Alert nötig</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "right", marginTop: 6 }}>10:53</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TelegramExpensesPage() {
  useReveal();

  const problems = [
    "Rechnungen und Belege wurden manuell gesammelt, sortiert und abgetippt",
    "Hoher Zeitaufwand: Mitarbeiter verbrachten Stunden mit reinem Datentransfer",
    "Fehleranfällige manuelle Übertragung – falsche Beträge, falsche Kategorien",
    "Keine zentrale, strukturierte Übersicht über laufende Kosten in Echtzeit",
    "Verzögerte Kontrolle größerer Ausgaben – CFO erfuhr es erst Tage später",
    "Finanzverantwortliche mussten regelmäßig manuell nachfragen und prüfen",
    "Kein automatisierter Workflow zur Weiterleitung kritischer Belege",
    "Buchhaltungsprozesse waren nicht skalierbar – mehr Volumen = mehr Aufwand",
  ];

  const solutions = [
    {
      icon: <IcoTelegram />,
      title: "Telegram als Eingabe-Interface",
      desc: "Kein neues Tool, keine App, kein Login. Mitarbeiter schicken Belege einfach als Foto oder PDF an den ReceiptBot – genauso wie eine normale Telegram-Nachricht.",
      color: "#2AABEE",
    },
    {
      icon: <IcoScan />,
      title: "KI-Belegsanalyse (OCR + GPT-4o)",
      desc: "Der KI-Agent extrahiert automatisch alle relevanten Daten aus dem Beleg: Betrag, Datum, Steuern, Kategorie, Beschreibung und Verkäufer – ohne manuellen Eingriff.",
      color: "#10A37F",
    },
    {
      icon: <IcoSheet />,
      title: "Automatische Speicherung in Google Sheets",
      desc: "Jede erkannte Ausgabe wird sofort strukturiert in die zentrale Tabelle eingetragen. Kein Copy-Paste, kein Tippfehler. Die Tabelle ist jederzeit aktuell und für alle zugänglich.",
      color: "#34A853",
    },
    {
      icon: <IcoBell />,
      title: "Eskalations-Regel: CFO-Alert ab 500 €",
      desc: "Übersteigt eine Ausgabe den Schwellenwert, sendet das System automatisch eine Gmail-Benachrichtigung an den Finanzverantwortlichen – mit allen Belegdaten. Sofort, ohne Verzögerung.",
      color: "#EA4335",
    },
    {
      icon: <IcoBot />,
      title: "Kontextbewusstes Gespräch",
      desc: "Der Agent hat Gesprächsgedächtnis und kann auf Rückfragen reagieren: 'Was war meine letzte Ausgabe?' oder 'Wie viel haben wir diesen Monat in Kategorie X ausgegeben?'",
      color: "#8B5CF6",
    },
    {
      icon: <IcoZap />,
      title: "Sofort-Bestätigung per Telegram",
      desc: "Nach jeder Verarbeitung antwortet der Bot mit einer strukturierten Zusammenfassung direkt in Telegram – der Nutzer weiß sofort, dass alles korrekt erfasst wurde.",
      color: "#F59E0B",
    },
  ];

  const results = [
    { icon: <IcoClock />, val: "−90 %", label: "Zeitaufwand", sub: "Manuelle Dateneingabe in der Buchhaltung fast vollständig eliminiert" },
    { icon: <IcoEuro />, val: "0 €", label: "Verpasste Ausgaben", sub: "Jede Ausgabe wird erfasst – keine vergessenen Belege, keine Datenlücken" },
    { icon: <IcoBell />, val: "< 10s", label: "CFO-Alert-Zeit", sub: "Vom Beleg-Upload bis zur Benachrichtigung des Finanzverantwortlichen" },
    { icon: <IcoShield />, val: "100 %", label: "Fehlerfreiheit", sub: "KI-Extraktion eliminiert Tippfehler und Kategorisierungsfehler" },
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
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--nc-accent)", background: "var(--nc-accent-light)", padding: "4px 12px", borderRadius: 100 }}>
              Case Study
            </span>
            <a href="#kontakt-cta" className="nc-btn nc-btn-primary cs-nav-cta" style={{ padding: "8px 18px", fontSize: 13 }}>Ähnliches Projekt anfragen</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="cs-hero-section" style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #F5FAFA 0%, #EAF5F2 60%, #F5FAFA 100%)" }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(42,171,238,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,139,120,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="nc-container" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, fontSize: 13, color: "var(--nc-text-muted)" }}>
            <Link href="/" style={{ color: "var(--nc-text-muted)", textDecoration: "none" }}>Northcode</Link>
            <span>/</span>
            <Link href="/#portfolio" style={{ color: "var(--nc-text-muted)", textDecoration: "none" }}>Portfolio</Link>
            <span>/</span>
            <span style={{ color: "var(--nc-accent)", fontWeight: 600 }}>Telegram Expense System</span>
          </div>

          <div className="cs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {["Prozessautomatisierung", "KI-Beleganalyse", "n8n", "Google Sheets"].map((t) => (
                  <span key={t} className="nc-badge">{t}</span>
                ))}
              </div>

              {/* Category label */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 8, background: "rgba(42,171,238,0.1)", border: "1px solid rgba(42,171,238,0.2)", marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2AABEE" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#1A7BB8", letterSpacing: ".04em", textTransform: "uppercase" }}>Automatisiertes Finanz-Workflow-System</span>
              </div>

              <h1 style={{ color: "var(--nc-navy)", marginBottom: 20, fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
                KI-gestützte<br />
                <span style={{ color: "var(--nc-accent)" }}>Ausgabenerfassung</span><br />
                über Telegram
              </h1>
              <p style={{ fontSize: "1.05rem", marginBottom: 32, maxWidth: 480 }}>
                Foto des Belegs per Telegram schicken – fertig. Das System extrahiert Betrag, Datum, Steuern und Kategorie automatisch, schreibt alles in Google Sheets und benachrichtigt den CFO bei Ausgaben über 500 €.
              </p>

              <div className="cs-metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, padding: "20px 0", borderTop: "1px solid var(--nc-border)", borderBottom: "1px solid var(--nc-border)", marginBottom: 28 }}>
                {[
                  { val: "−90 %", lbl: "Manuelle Eingabe" },
                  { val: "< 10s", lbl: "Verarbeitung" },
                  { val: "0 €", lbl: "Verpasste Belege" },
                ].map((m) => (
                  <div key={m.val} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--nc-accent)", letterSpacing: "-0.04em" }}>{m.val}</div>
                    <div style={{ fontSize: 12, color: "var(--nc-text-muted)", fontWeight: 500, marginTop: 2 }}>{m.lbl}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#architektur" className="nc-btn nc-btn-primary">System-Architektur ansehen <IcoArrowRight /></a>
                <a href="#ergebnisse" className="nc-btn nc-btn-secondary">Ergebnisse</a>
              </div>
            </div>

            {/* Telegram mockup */}
            <div className="reveal reveal-delay-2 cs-hero-visual" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <TelegramMockup />
              {/* Floating Google Sheets badge */}
              <div style={{ position: "absolute", top: -16, right: -16, background: "white", borderRadius: 14, padding: "12px 18px", boxShadow: "0 8px 32px rgba(26,74,110,0.18)", border: "1px solid var(--nc-border)", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📊</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--nc-navy)" }}>Google Sheets</div>
                  <div style={{ fontSize: 11, color: "#4CAF50", fontWeight: 600 }}>Auto-aktualisiert</div>
                </div>
              </div>
              {/* Floating CFO badge */}
              <div style={{ position: "absolute", bottom: -16, left: -16, background: "white", borderRadius: 14, padding: "12px 18px", boxShadow: "0 8px 32px rgba(26,74,110,0.18)", border: "1px solid var(--nc-border)", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#FFF3E0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📧</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--nc-navy)" }}>CFO-Alert</div>
                  <div style={{ fontSize: 11, color: "#FF9800", fontWeight: 600 }}>ab 500 € automatisch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Positionierung Callout ────────────────────────────────────── */}
      <div style={{ background: "var(--nc-navy)", padding: "28px 0" }}>
        <div className="nc-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap", textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "line-through" }}>❌ Kein einfacher Chatbot</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 18 }}>→</div>
            <div style={{ color: "#8EC5B5", fontSize: 15, fontWeight: 700 }}>✅ Automatisiertes Finanz-Workflow-System</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 18 }}>·</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "line-through" }}>❌ Kein Webdesign-Projekt</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 18 }}>→</div>
            <div style={{ color: "#8EC5B5", fontSize: 15, fontWeight: 700 }}>✅ Backoffice-Automatisierung für Unternehmen</div>
          </div>
        </div>
      </div>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="problem" style={{ background: "rgba(236,243,242,0.6)" }}>
        <div className="nc-container">
          <div className="cs-problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
            <div className="reveal cs-problem-sticky" style={{ position: "sticky", top: 88 }}>
              <div className="nc-label"><span />Das Problem</div>
              <h2 style={{ color: "var(--nc-navy)", marginBottom: 16 }}>Jeder Beleg kostet 5 Minuten. Täglich. Ewig.</h2>
              <p>Buchhaltungsarbeit ist im Kern eine Routine: Beleg aufnehmen, Daten lesen, in Tabelle übertragen, ablegen. Jeder Schritt ist manuell, fehleranfällig und skaliert nicht.</p>
              <div style={{ marginTop: 28, padding: "18px 20px", background: "rgba(220,38,38,0.06)", borderRadius: 12, border: "1px solid rgba(220,38,38,0.15)" }}>
                <p style={{ fontSize: 13.5, color: "#991B1B", fontWeight: 500, margin: 0 }}>
                  💸 Bei nur 10 Belegen pro Tag und 5 Min. Bearbeitungszeit = <strong>über 200 Stunden manuelle Arbeit pro Jahr</strong> – für reine Dateneingabe, die keinerlei Wert schafft.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {problems.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.85)", border: "1px solid rgba(220,38,38,0.12)", backdropFilter: "blur(4px)" }}>
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
            <h2 style={{ color: "var(--nc-navy)" }}>Foto schicken. KI erledigt den Rest.</h2>
            <p>Sechs Systemkomponenten, die zusammen einen vollständig automatisierten Buchhaltungsworkflow ergeben – von der Belegerfassung bis zur CFO-Eskalation.</p>
          </div>
          <div className="cs-solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {solutions.map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)", borderRadius: 16, border: "1px solid var(--nc-border)", padding: "28px 24px", transition: "all 200ms" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--nc-accent)"; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "var(--nc-shadow-md)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--nc-border)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color }}>{s.icon}</div>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--nc-navy)", color: "white", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
                </div>
                <h3 style={{ color: "var(--nc-navy)", marginBottom: 10, fontSize: "1rem" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ─────────────────────────────────────────────── */}
      <section className="nc-section" id="architektur" style={{ background: "#0D1520" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 48 }}>
            <div className="nc-label" style={{ color: "#8EC5B5" }}><span style={{ background: "#8EC5B5" }} />Technische Architektur</div>
            <h2 style={{ color: "white" }}>Der Workflow unter der Haube</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>Ein einzelner n8n-Workflow verbindet Telegram, OpenAI, Google Sheets und Gmail zu einem vollautomatischen Finanz-System.</p>
          </div>

          {/* Main flow diagram */}
          <div className="reveal" style={{ marginBottom: 40 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(74,122,150,0.2)", padding: "28px 32px" }}>
              {/* Main pipeline */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
                <Node icon="✈️" label="Telegram Trigger" sub="Updates: message" accent color="linear-gradient(135deg,#2AABEE,#229ED9)" />
                <Arrow />
                <Node icon="⚙️" label="Workflow Config" sub="Einstellungen" />
                <Arrow />
                <Node icon={<IcoBot />} label="Expense Agent" sub="KI-Gehirn" accent />
              </div>

              {/* Agent tools */}
              <div style={{ borderTop: "1px dashed rgba(74,122,150,0.25)", paddingTop: 24 }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>Agent Tools – parallel verfügbar:</div>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
                  <Node icon="✨" label="OpenAI GPT-4o" sub="Chat Model" />
                  <Node icon="🧠" label="Conversation Memory" sub="Gesprächskontext" />
                  <Node icon={<IcoSheet />} label="Sheets Append" sub="Ausgabe speichern" accent color="linear-gradient(135deg,#34A853,#2E9446)" />
                  <Node icon={<IcoSheet />} label="Sheets Read" sub="Daten abfragen" />
                  <Node icon="📧" label="Gmail – CFO Alert" sub="ab 500 € → Mail" accent color="linear-gradient(135deg,#EA4335,#C62828)" />
                  <Node icon="✈️" label="Telegram Reply" sub="Bestätigung senden" />
                </div>
              </div>
            </div>
          </div>

          {/* Process flow: step by step */}
          <div className="reveal reveal-delay-1">
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#8EC5B5", marginBottom: 20 }}>Schritt-für-Schritt Flow eines eingehenden Belegs:</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, position: "relative" }}>
              {/* Connector line */}
              <div style={{ position: "absolute", top: 28, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, rgba(42,171,238,0.5), rgba(61,139,120,0.5))", borderRadius: 2 }} />
              {[
                { step: "01", icon: "📸", label: "Beleg-Foto", sub: "Per Telegram geschickt", color: "#2AABEE" },
                { step: "02", icon: "🔍", label: "KI-Analyse", sub: "OCR + GPT-4o extrahiert Daten", color: "#8B5CF6" },
                { step: "03", icon: "📊", label: "Sheets-Eintrag", sub: "Automatisch gespeichert", color: "#34A853" },
                { step: "04", icon: "⚖️", label: "Regel-Check", sub: "Betrag > 500 €?", color: "#F59E0B" },
                { step: "05", icon: "✅", label: "Bestätigung", sub: "Reply + ggf. CFO-Mail", color: "#3D8B78" },
              ].map((s) => (
                <div key={s.step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center", padding: "0 8px", position: "relative", zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${s.color}22`, border: `2px solid ${s.color}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: s.color, letterSpacing: ".06em", textTransform: "uppercase" }}>{s.step}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#D4E5E2", marginTop: 2 }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── n8n Screenshot ───────────────────────────────────────────── */}
      <section style={{ background: "#0D1520", paddingBottom: 80 }}>
        <div className="nc-container">
          <div className="reveal">
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 16, textAlign: "center" }}>Originaler n8n-Workflow-Screenshot</div>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(74,122,150,0.25)", boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/portfolio/telegram-workflow.png" alt="n8n Telegram Expense Workflow" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Screenshot Telegram Chat ─────────────────────────────────── */}
      <section className="nc-section" style={{ background: "rgba(236,243,242,0.4)", paddingTop: 64 }}>
        <div className="nc-container">
          <div className="nc-section-header reveal">
            <div className="nc-label"><span />Live-Screenshot</div>
            <h2 style={{ color: "var(--nc-navy)" }}>So sieht es in der Praxis aus</h2>
            <p>Ein Beleg wird als Foto geschickt – der Bot antwortet innerhalb von Sekunden mit allen extrahierten Daten, bestätigt die Speicherung und löst ggf. den CFO-Alert aus.</p>
          </div>
          <div className="reveal" style={{ maxWidth: 460, margin: "0 auto" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 80px rgba(26,74,110,0.2)", border: "1px solid var(--nc-border)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/portfolio/telegram-chat.png" alt="Telegram ReceiptBot in Aktion" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────── */}
      <section style={{ paddingTop: 64, paddingBottom: 64, background: "rgba(236,243,242,0.4)" }}>
        <div className="nc-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="nc-label" style={{ justifyContent: "center" }}><span />Technologie-Stack</div>
            <h3 style={{ color: "var(--nc-navy)", fontSize: "1.5rem" }}>Was hinter dem System steckt</h3>
          </div>
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {[
              { name: "n8n", cat: "Workflow-Automatisierung", color: "#EA4B71" },
              { name: "OpenAI GPT-4o", cat: "KI-Beleganalyse", color: "#10A37F" },
              { name: "Telegram Bot API", cat: "Eingabe-Interface", color: "#2AABEE" },
              { name: "Google Sheets API", cat: "Datenspeicherung", color: "#34A853" },
              { name: "Gmail API", cat: "CFO-Eskalation", color: "#EA4335" },
              { name: "Conversation Memory", cat: "Gesprächskontext", color: "#8B5CF6" },
              { name: "OCR + Extraktion", cat: "Belegverarbeitung", color: "#F59E0B" },
              { name: "Regelbasierte Logik", cat: "Eskalationsregeln", color: "#3D8B78" },
            ].map((t) => (
              <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", borderRadius: 10, background: "rgba(255,255,255,0.9)", border: "1px solid var(--nc-border)", boxShadow: "var(--nc-shadow-sm)" }}>
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
            <h2 style={{ color: "white" }}>Was das System konkret bringt</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>Keine Theorie – das sind die messbaren Auswirkungen auf den Arbeitsalltag.</p>
          </div>

          <div className="cs-results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 40 }}>
            {results.map((r, i) => (
              <div key={r.label} className={`reveal reveal-delay-${(i % 2) + 1}`} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", padding: "32px", backdropFilter: "blur(8px)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0, background: "rgba(61,139,120,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8EC5B5" }}>{r.icon}</div>
                  <div>
                    <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#8EC5B5", letterSpacing: "-0.04em", lineHeight: 1 }}>{r.val}</div>
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
                  {["Manuelle Dateneingabe für jeden Beleg", "Fehlerhafte Übertragungen", "CFO erfährt Ausgaben Tage später", "Buchhaltung muss manuell prüfen", "Keine strukturierte Übersicht"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <IcoX />
                      <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#86EFAC", textTransform: "uppercase", marginBottom: 12 }}>Nachher</div>
                  {["Foto schicken – alles andere läuft automatisch", "KI-Extraktion: keine Tippfehler mehr", "CFO-Alert in unter 10 Sekunden", "Alle Daten jederzeit strukturiert abrufbar", "Skaliert problemlos mit wachsendem Belegvolumen"].map((item) => (
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

      {/* ── Warum wertvoll ───────────────────────────────────────────── */}
      <section style={{ padding: "64px 0", background: "rgba(236,243,242,0.5)" }}>
        <div className="nc-container">
          <div className="reveal" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div className="nc-label" style={{ justifyContent: "center" }}><span />Einordnung</div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 16, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>Warum dieses Projekt mehr wert ist als eine Website</h2>
            <p style={{ marginBottom: 36 }}>
              Dieses System zeigt etwas, das die meisten digitalen Dienstleister nicht können: interne Geschäftsprozesse analysieren, modellieren und vollständig automatisieren. Das ist keine Webseite – das ist ein echter Produktivitätsmultiplikator.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, textAlign: "left" }}>
              {[
                { icon: "⚙️", title: "Interne Prozesse automatisieren", desc: "Nicht nur nach außen sichtbar werden – sondern innen effizienter werden." },
                { icon: "🧠", title: "Daten verarbeiten und strukturieren", desc: "Unstrukturierte Eingaben (Fotos) in strukturierte Daten verwandeln." },
                { icon: "📋", title: "Regeln + Logik + Automatisierung", desc: "Komplexe Geschäftsregeln (CFO-Alert ab 500 €) in Workflows übersetzen." },
                { icon: "🏢", title: "Echte Backoffice-Systeme bauen", desc: "Lösungen, die tief in den Unternehmensalltag eingebettet sind." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: 14, padding: "18px 20px", background: "rgba(255,255,255,0.9)", borderRadius: 12, border: "1px solid var(--nc-border)" }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--nc-navy)", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13.5, color: "var(--nc-text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="nc-section" id="kontakt-cta" style={{ background: "var(--nc-bg-alt)" }}>
        <div className="nc-container">
          <div className="reveal" style={{ background: "white", borderRadius: 24, border: "1px solid var(--nc-border)", padding: "56px 48px", textAlign: "center", boxShadow: "var(--nc-shadow-lg)" }}>
            <div className="nc-badge" style={{ marginBottom: 20, justifyContent: "center" }}>Ähnliches System gewünscht?</div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 16, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Welche manuelle Arbeit soll bei dir wegfallen?</h2>
            <p style={{ maxWidth: 520, margin: "0 auto 32px", fontSize: "1rem" }}>
              Ausgabenerfassung, Angebote, Berichte, Anfragen – was auch immer dich täglich Zeit kostet: In einem kostenlosen Gespräch analysiere ich, ob und wie ich es automatisieren kann.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://calendly.com/northcode/erstgespraech" target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-primary">
                Kostenloses Erstgespräch buchen <IcoArrowRight />
              </a>
              <a href="https://wa.me/491234567890?text=Hallo%20Esmail%2C%20ich%20m%C3%B6chte%20einen%20Prozess%20automatisieren." target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-secondary">
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
            <Link href="/portfolio/solar-leads" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 200ms" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}>
              ← Solar Lead System
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
