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
function IcoArrowLeft() { return <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoArrowRight() { return <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoCheck() { return <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="rgba(61,139,120,0.15)"/><path d="M8 12l3 3 5-5" stroke="#3D8B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoX() { return <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="rgba(220,38,38,0.12)"/><path d="M15 9l-6 6M9 9l6 6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/></svg>; }
function IcoPlay() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.15"/><path d="M10 8l6 4-6 4V8z" fill="white"/></svg>; }
function IcoSmartphone() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>; }
function IcoStar() { return <svg width="14" height="14" fill="#F59E0B" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>; }
function IcoMapPin() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>; }
function IcoTool() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoShield() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>; }
function IcoEye() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>; }
function IcoMessageCircle() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>; }
function IcoBolt() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>; }
function IcoTrend() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 7l-8.5 8.5-5-5L2 17M22 7h-6M22 7v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoClock() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }
function IcoImage() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoRobot() { return <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M12 8V3M8.5 3h7M8 12h.01M16 12h.01M8 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }

// ─── Video Player ─────────────────────────────────────────────────────────────
function VideoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const toggle = () => { if (!ref.current) return; playing ? ref.current.pause() : ref.current.play(); setPlaying(!playing); };
  return (
    <div onClick={toggle} style={{ position: "relative", borderRadius: 16, overflow: "hidden", background: "#0a0f1a", cursor: "pointer", boxShadow: "0 24px 80px rgba(26,74,110,0.35)", border: "1px solid rgba(74,122,150,0.2)" }}>
      <video ref={ref} src={src} style={{ width: "100%", display: "block", maxHeight: 540, objectFit: "contain" }} onEnded={() => setPlaying(false)} playsInline />
      {!playing && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(10,15,26,0.6)", backdropFilter: "blur(2px)", gap: 14 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--nc-accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 20px rgba(61,139,120,0.15)" }}><IcoPlay /></div>
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 600 }}>Live-Demo der Plattform ansehen</span>
        </div>
      )}
    </div>
  );
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function PhoneMockup() {
  const [screen, setScreen] = useState<"home" | "services" | "chat">("home");
  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      {/* Glow */}
      <div style={{ position: "absolute", inset: -40, background: "radial-gradient(ellipse, rgba(99,179,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ width: 260, background: "#111827", borderRadius: 40, padding: "10px 6px", boxShadow: "0 40px 100px rgba(0,0,0,0.6), inset 0 0 0 1.5px rgba(255,255,255,0.12)", position: "relative" }}>
        {/* Notch */}
        <div style={{ width: 80, height: 24, background: "#111827", borderRadius: 12, margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#222" }} />
          <div style={{ width: 40, height: 8, borderRadius: 4, background: "#1a1a2e" }} />
        </div>
        {/* Screen */}
        <div style={{ background: "#0f172a", borderRadius: 28, overflow: "hidden", minHeight: 480 }}>
          {/* Status bar */}
          <div style={{ padding: "8px 16px", display: "flex", justifyContent: "space-between", fontSize: 10, color: "rgba(255,255,255,0.5)" }}>
            <span>9:41</span>
            <span>●●● ᯤ 🔋</span>
          </div>
          {screen === "home" && (
            <div style={{ padding: "12px 14px" }}>
              <div style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb)", borderRadius: 16, padding: "18px 14px", marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Willkommen bei</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "white", marginBottom: 2 }}>📱 TechRepair</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Reparatur · Verkauf · Service</div>
                <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
                  <div style={{ flex: 1, background: "#3b82f6", borderRadius: 8, padding: "6px 0", textAlign: "center", fontSize: 10, color: "white", fontWeight: 700, cursor: "pointer" }} onClick={() => setScreen("services")}>Leistungen</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "6px 0", textAlign: "center", fontSize: 10, color: "white", fontWeight: 700, cursor: "pointer" }} onClick={() => setScreen("chat")}>KI-Assistent</div>
                </div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 8 }}>Schnellzugriff</div>
              {[
                { icon: "🔧", label: "Preisliste", sub: "Alle Reparaturen & Preise" },
                { icon: "📍", label: "Standort & Öffnungszeiten", sub: "Mo–Sa 9–19 Uhr" },
                { icon: "⭐", label: "Kundenbewertungen", sub: "4,9 / 5 · 120+ Reviews" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{item.label}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {screen === "services" && (
            <div style={{ padding: "12px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: "#60a5fa", fontSize: 12, cursor: "pointer", padding: 0 }}>← Zurück</button>
                <span style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Leistungen & Preise</span>
              </div>
              {[
                { rep: "Display-Reparatur", price: "ab 49 €", time: "ca. 30 min", hot: true },
                { rep: "Akku-Tausch", price: "ab 29 €", time: "ca. 20 min", hot: false },
                { rep: "Ladebuchse", price: "ab 35 €", time: "ca. 45 min", hot: false },
                { rep: "Wasserschaden", price: "ab 59 €", time: "1–2 Tage", hot: false },
                { rep: "Kamera-Reparatur", price: "ab 39 €", time: "ca. 40 min", hot: false },
              ].map((s) => (
                <div key={s.rep} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 10px", marginBottom: 6, borderRadius: 10, background: s.hot ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.04)", border: `1px solid ${s.hot ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.06)"}` }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", gap: 4 }}>
                      {s.hot && <span style={{ fontSize: 9, background: "#ef4444", color: "white", borderRadius: 4, padding: "1px 5px", fontWeight: 700 }}>TOP</span>}
                      {s.rep}
                    </div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{s.time}</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#60a5fa" }}>{s.price}</div>
                </div>
              ))}
            </div>
          )}
          {screen === "chat" && (
            <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", height: 440 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: "#60a5fa", fontSize: 12, cursor: "pointer", padding: 0 }}>← Zurück</button>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🤖</div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "white" }}>KI-Assistent</span>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, overflowY: "auto" }}>
                <div style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: "12px 12px 12px 4px", padding: "10px 12px", maxWidth: "85%" }}>
                  <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>Hallo! Ich bin dein digitaler Assistent. Wie kann ich dir helfen? 😊</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px 12px 4px 12px", padding: "10px 12px", maxWidth: "85%", alignSelf: "flex-end" }}>
                  <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.85)" }}>Was kostet eine Display-Reparatur beim iPhone 13?</p>
                </div>
                <div style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: "12px 12px 12px 4px", padding: "10px 12px", maxWidth: "85%" }}>
                  <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>Display-Reparatur iPhone 13: <strong style={{ color: "#60a5fa" }}>ab 89 €</strong>, Dauer ca. 45 min. Terminvereinbarung direkt hier möglich 📅</p>
                </div>
              </div>
              <div style={{ marginTop: 10, background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", flex: 1 }}>Frage stellen…</span>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Home bar */}
        <div style={{ height: 4, width: 80, background: "rgba(255,255,255,0.15)", borderRadius: 2, margin: "10px auto 0" }} />
      </div>
      {/* Floating badges */}
      <div style={{ position: "absolute", right: -20, top: "20%", background: "white", borderRadius: 12, padding: "8px 14px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 16 }}>⭐</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#1A4A6E" }}>4,9 / 5</div>
          <div style={{ fontSize: 10, color: "#64748b" }}>120+ Bewertungen</div>
        </div>
      </div>
      <div style={{ position: "absolute", left: -24, bottom: "28%", background: "white", borderRadius: 12, padding: "8px 14px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 16 }}>📞</span>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1A4A6E" }}>−70 % Anrufe</div>
          <div style={{ fontSize: 10, color: "#64748b" }}>Standardfragen</div>
        </div>
      </div>
    </div>
  );
}

// ─── Reviews Mockup ───────────────────────────────────────────────────────────
function ReviewCard({ name, text, rating, time }: { name: string; text: string; rating: number; time: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: "18px 20px", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "white" }}>{name[0]}</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>{name}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{time}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 2 }}>{Array.from({ length: rating }).map((_, i) => <IcoStar key={i} />)}</div>
      </div>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TechRepairPage() {
  useReveal();

  const problems = [
    "Kunden konnten Leistungen und Preise nicht einfach online einsehen – jede Info erforderte einen Anruf",
    "Ständig dieselben Standardfragen: \"Was kostet eine Display-Reparatur?\" – belastete den Betrieb täglich",
    "Keine Transparenz über Reparaturzeiten, Garantien und Ablauf",
    "Fehlende digitale Vertrauensfaktoren wie Bewertungen und Referenzen",
    "Geringe Online-Auffindbarkeit – Kunden fanden den Shop nur durch Zufall oder Mundpropaganda",
    "Keine einfache Möglichkeit zur ersten Einschätzung eines Reparaturfalls",
    "Professionelle Konkurrenz mit moderner Online-Präsenz zog Kunden ab",
  ];

  const solutions = [
    { icon: <IcoSmartphone />, title: "Moderne Unternehmenswebsite", desc: "Eine klare, professionelle Website, die sofort Vertrauen aufbaut – mit allen wichtigen Infos an einem Ort: Leistungen, Preise, Öffnungszeiten, Standort.", color: "#3b82f6" },
    { icon: <IcoTool />, title: "Vollständige Leistungs- & Preisübersicht", desc: "Alle Reparaturarten mit Preisrahmen und Reparaturdauer sichtbar – keine Überraschungen, keine Rückfragen. Kunden kommen vorbereitet.", color: "#3D8B78" },
    { icon: <IcoShield />, title: "Digitale Vertrauenssignale", desc: "Kundenbewertungen direkt eingebunden, Garantiehinweise sichtbar platziert, Referenzfotos von abgeschlossenen Reparaturen. Vertrauen entsteht vor dem ersten Besuch.", color: "#F59E0B" },
    { icon: <IcoMapPin />, title: "Standort & Kontakt sofort sichtbar", desc: "Öffnungszeiten, Adresse, Google Maps-Einbindung und Click-to-Call – alles auf einen Blick, optimiert für Smartphone-Nutzer die spontan vorbeilaufen wollen.", color: "#E53E3E" },
    { icon: <IcoImage />, title: "Bildergalerie & Produkte", desc: "Visuelle Darstellung von Reparaturfällen und Gebrauchtgeräten im Verkauf – Kunden sehen die Qualität, bevor sie die Tür öffnen.", color: "#8B5CF6" },
    { icon: <IcoRobot />, title: "KI-Assistent für Betreiber & Kunden", desc: "Ein integrierter KI-Chat beantwortet Standardfragen automatisch rund um die Uhr: Preise, Zeiten, Verfügbarkeit. Kunden erhalten sofort Antworten, der Inhaber wird entlastet.", color: "#10A37F" },
  ];

  const results = [
    { icon: <IcoClock />, val: "−70 %", label: "Weniger Standardanrufe", sub: "Kunden finden Preise, Öffnungszeiten und Infos jetzt selbst – ohne anzurufen" },
    { icon: <IcoTrend />, val: "Mehr Vertrauen", label: "Vor dem ersten Kontakt", sub: "Bewertungen, transparente Preise und professionelles Design schaffen Vertrauen noch bevor der Kunde die Tür öffnet" },
    { icon: <IcoBolt />, val: "Sofort", label: "Antworten auf Standardfragen", sub: "Der KI-Assistent beantwortet Fragen zu Preisen und Ablauf rund um die Uhr – ohne dass der Inhaber eingreifen muss" },
    { icon: <IcoEye />, val: "Besser auffindbar", label: "Lokal & online", sub: "Durch SEO-Optimierung und saubere Struktur erscheint der Shop bei lokalen Suchanfragen wie \"Handy reparieren [Stadt]\"" },
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
      <section className="cs-hero-section" style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #EFF6FF 0%, #F5FAFA 50%, #EAF5F2 100%)" }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,139,120,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="nc-container" style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, fontSize: 13, color: "var(--nc-text-muted)" }}>
            <Link href="/" style={{ color: "var(--nc-text-muted)", textDecoration: "none" }}>Northcode</Link>
            <span>/</span>
            <Link href="/#portfolio" style={{ color: "var(--nc-text-muted)", textDecoration: "none" }}>Portfolio</Link>
            <span>/</span>
            <span style={{ color: "var(--nc-accent)", fontWeight: 600 }}>TechRepair Kundenplattform</span>
          </div>

          <div className="cs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {["Digitale Kundenplattform", "KI-Assistent", "Lokales SEO"].map((t) => (
                  <span key={t} className="nc-badge">{t}</span>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 8, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3b82f6" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#1d4ed8", letterSpacing: ".04em", textTransform: "uppercase" }}>Digitale Kundenplattform</span>
              </div>

              <h1 style={{ color: "var(--nc-navy)", marginBottom: 20, fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
                Vom unbekannten Reparaturladen zur{" "}
                <span style={{ color: "#3b82f6" }}>vertrauenswürdigen Anlaufstelle</span>
              </h1>

              <p style={{ fontSize: "1.05rem", marginBottom: 32, maxWidth: 490 }}>
                Eine digitale Kundenplattform, die Vertrauen aufbaut, Standardanfragen automatisch beantwortet und aus Suchenden zahlende Kunden macht – bevor sie überhaupt die Tür öffnen.
              </p>

              <div className="cs-metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, padding: "20px 0", borderTop: "1px solid var(--nc-border)", borderBottom: "1px solid var(--nc-border)", marginBottom: 28 }}>
                {[
                  { val: "−70 %", lbl: "Standardanrufe" },
                  { val: "24/7", lbl: "KI-Assistent aktiv" },
                  { val: "4,9★", lbl: "Sichtbare Bewertungen" },
                ].map((m) => (
                  <div key={m.val} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#3b82f6", letterSpacing: "-0.04em", lineHeight: 1.1 }}>{m.val}</div>
                    <div style={{ fontSize: 12, color: "var(--nc-text-muted)", fontWeight: 500, marginTop: 2 }}>{m.lbl}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#demo" className="nc-btn nc-btn-primary" style={{ background: "#3b82f6" }}>
                  <IcoPlay /> Live-Demo ansehen
                </a>
                <a href="#loesung" className="nc-btn nc-btn-secondary">Wie es funktioniert</a>
              </div>
            </div>

            <div className="reveal reveal-delay-2 cs-hero-visual">
              <PhoneMockup />
              <p style={{ textAlign: "center", fontSize: 12, color: "var(--nc-text-muted)", marginTop: 16 }}>← Klickbares Mockup · Tabs ausprobieren</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontext Banner ───────────────────────────────────────────── */}
      <div style={{ background: "#1e3a5f", padding: "28px 0" }}>
        <div className="nc-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap", textAlign: "center" }}>
            {[
              { emoji: "🔧", label: "Reparatur-Service", sub: "Professionell dargestellt" },
              { emoji: "💶", label: "Transparente Preise", sub: "Kein Raten mehr" },
              { emoji: "🤖", label: "KI beantwortet Fragen", sub: "Rund um die Uhr" },
              { emoji: "⭐", label: "Bewertungen sichtbar", sub: "Vertrauen sofort" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 22 }}>{item.emoji}</span>
                <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>{item.label}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="problem" style={{ background: "rgba(239,246,255,0.5)" }}>
        <div className="nc-container">
          <div className="cs-problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
            <div className="reveal cs-problem-sticky" style={{ position: "sticky", top: 88 }}>
              <div className="nc-label"><span />Das Problem</div>
              <h2 style={{ color: "var(--nc-navy)", marginBottom: 16 }}>Kunden, die nicht anrufen wollen – aber auch nicht wiederkommen.</h2>
              <p>Gute Handwerker verlieren Kunden nicht, weil sie schlecht reparieren. Sie verlieren sie, weil der erste Eindruck online fehlt.</p>
              <div style={{ marginTop: 28, padding: "18px 20px", background: "rgba(59,130,246,0.07)", borderRadius: 12, border: "1px solid rgba(59,130,246,0.15)" }}>
                <p style={{ fontSize: 13.5, color: "#1e40af", fontWeight: 500, margin: 0 }}>
                  📉 Ein Kunde, der deine Preise nicht kennt, geht zur Konkurrenz – nicht weil die besser sind, sondern weil die <strong>transparenter</strong> wirken.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {problems.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.9)", border: "1px solid rgba(59,130,246,0.1)", backdropFilter: "blur(4px)" }}>
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
            <h2 style={{ color: "var(--nc-navy)" }}>Eine Plattform, die rund um die Uhr für dich arbeitet</h2>
            <p>Kunden finden alles was sie brauchen – bevor sie anrufen, bevor sie hereinkommen. Der Inhaber wird entlastet, das Vertrauen steigt.</p>
          </div>
          <div className="cs-solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {solutions.map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${(i % 3) + 1}`}
                style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)", borderRadius: 16, border: "1px solid var(--nc-border)", padding: "28px 24px", transition: "all 200ms" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = s.color; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "var(--nc-shadow-md)"; }}
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

      {/* ── Reviews Sektion ──────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "#0f172a" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 48 }}>
            <div className="nc-label" style={{ color: "#93c5fd" }}><span style={{ background: "#93c5fd" }} />Vertrauen durch Bewertungen</div>
            <h2 style={{ color: "white" }}>Der Unterschied, den Sichtbarkeit macht</h2>
            <p style={{ color: "rgba(255,255,255,0.55)" }}>Bewertungen direkt auf der Website eingebunden – kein Umweg über Google nötig. Neukunden sehen sofort, was Bestandskunden sagen.</p>
          </div>
          <div className="cs-solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <ReviewCard name="Michael K." text="Display meines iPhones innerhalb von 30 Minuten gewechselt. Sehr professionell und faire Preise. Kann ich nur empfehlen!" rating={5} time="vor 2 Wochen" />
            <ReviewCard name="Sarah M." text="Endlich mal ein Laden, bei dem man die Preise vorher online einsehen kann. Keine Überraschungen, super Service." rating={5} time="vor 1 Monat" />
            <ReviewCard name="Tom B." text="Wasserschaden am Samsung – dachte das Handy ist hin. Nach 2 Tagen wie neu. Mega Service, definitiv wiederkommen!" rating={5} time="vor 3 Wochen" />
          </div>
          <div className="reveal" style={{ marginTop: 32, padding: "20px 28px", background: "rgba(255,255,255,0.04)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex", gap: 3 }}>{Array.from({ length: 5 }).map((_, i) => <IcoStar key={i} />)}</div>
              <div>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>4,9</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginLeft: 6 }}>/ 5 · 120+ Bewertungen</span>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0 }}>Sichtbar eingebunden – kein extra Klick, keine verlorene Aufmerksamkeit</p>
          </div>
        </div>
      </section>

      {/* ── KI-Assistent Highlight ───────────────────────────────────── */}
      <section className="nc-section" style={{ background: "rgba(239,246,255,0.4)" }}>
        <div className="nc-container">
          <div className="reveal cs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="nc-label"><span />KI-Assistent</div>
              <h2 style={{ color: "var(--nc-navy)", marginBottom: 16 }}>Der Mitarbeiter, der nie schläft</h2>
              <p style={{ marginBottom: 24 }}>
                Freitagabend, 22 Uhr. Jemand sucht einen Reparaturservice und fragt: „Was kostet ein Akkutausch beim iPhone 14?" – Während du schläfst, antwortet der KI-Assistent sofort, nennt den Preis und bietet Terminvereinbarung an.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "💬", title: "Standardfragen automatisch beantwortet", desc: "Preise, Öffnungszeiten, Reparaturzeiten, Garantie – alles ohne manuellen Aufwand." },
                  { icon: "📅", title: "Terminanfragen direkt aus dem Chat", desc: "Interessenten können Termine anfragen, ohne den Inhaber zu stören." },
                  { icon: "🔒", title: "Nur mit deinen Daten trainiert", desc: "Der Assistent kennt nur dein Unternehmen – keine falschen Antworten, kein Halluzinieren." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 14, padding: "16px 18px", background: "white", borderRadius: 12, border: "1px solid var(--nc-border)" }}>
                    <div style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--nc-navy)", marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: "var(--nc-text-muted)" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Chat demo */}
            <div style={{ background: "#0f172a", borderRadius: 20, padding: "24px", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🤖</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "white" }}>TechRepair Assistent</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} /> Online · antwortet sofort
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { from: "bot", text: "Hallo! Wie kann ich dir helfen? 😊 Ich beantworte Fragen zu Preisen, Reparaturen und Öffnungszeiten." },
                  { from: "user", text: "Was kostet Akkutausch iPhone 13?" },
                  { from: "bot", text: "Akkutausch iPhone 13: ab 39 €, Dauer ca. 20–30 min. Wir verwenden nur Originalteile. Möchtest du einen Termin?" },
                  { from: "user", text: "Habt ihr morgen Zeit?" },
                  { from: "bot", text: "Morgen haben wir ab 10 Uhr freie Termine. Soll ich dir einen Buchungslink schicken? 📅" },
                ].map((msg, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{ maxWidth: "80%", background: msg.from === "user" ? "rgba(255,255,255,0.08)" : "rgba(59,130,246,0.15)", border: `1px solid ${msg.from === "user" ? "rgba(255,255,255,0.1)" : "rgba(59,130,246,0.3)"}`, borderRadius: msg.from === "user" ? "12px 12px 4px 12px" : "12px 12px 12px 4px", padding: "10px 14px" }}>
                      <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
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
            <p>Sieh selbst, wie ein potenzieller Kunde die Seite erlebt – von der Suche bis zur Terminanfrage.</p>
          </div>
          <div className="reveal" style={{ maxWidth: 860, margin: "0 auto" }}>
            <VideoPlayer src="/portfolio/techrepair-demo.mov" />
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="ergebnisse" style={{ background: "var(--nc-navy)" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 56 }}>
            <div className="nc-label" style={{ color: "#93c5fd" }}><span style={{ background: "#93c5fd" }} />Ergebnisse</div>
            <h2 style={{ color: "white" }}>Was die Plattform konkret verändert</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>Weniger Aufwand für den Inhaber, bessere Erfahrung für den Kunden.</p>
          </div>

          <div className="cs-results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 40 }}>
            {results.map((r, i) => (
              <div key={r.label} className={`reveal reveal-delay-${(i % 2) + 1}`} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", padding: "32px", backdropFilter: "blur(8px)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0, background: "rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#93c5fd" }}>{r.icon}</div>
                  <div>
                    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#93c5fd", letterSpacing: "-0.04em", lineHeight: 1 }}>{r.val}</div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginTop: 6, marginBottom: 8 }}>{r.label}</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>{r.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vorher / Nachher */}
          <div className="reveal">
            <div style={{ background: "rgba(59,130,246,0.1)", borderRadius: 16, border: "1px solid rgba(59,130,246,0.25)", padding: "28px 32px" }}>
              <h3 style={{ color: "white", marginBottom: 20, fontSize: "1.1rem" }}>Vorher vs. Nachher</h3>
              <div className="cs-before-after" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#fca5a5", textTransform: "uppercase", marginBottom: 12 }}>Vorher</div>
                  {["Keine Preise online – nur per Anruf", "Kein professioneller erster Eindruck", "Keine Bewertungen sichtbar", "KI antwortet nicht – Inhaber muss ran", "Konkurrenz wirkt vertrauenswürdiger"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <IcoX /><span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#86efac", textTransform: "uppercase", marginBottom: 12 }}>Nachher</div>
                  {["Alle Preise transparent auf der Website", "Professionelle Plattform schafft Vertrauen", "120+ Bewertungen direkt eingebunden", "KI antwortet 24/7 auf Standardfragen", "Moderner Auftritt hebt sich von Konkurrenz ab"].map((item) => (
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

      {/* ── Portfolio Einordnung ─────────────────────────────────────── */}
      <section style={{ padding: "64px 0", background: "rgba(236,243,242,0.5)" }}>
        <div className="nc-container">
          <div className="reveal" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div className="nc-label" style={{ justifyContent: "center" }}><span />Northcodes Portfolio-Kategorien</div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 16, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>4 Kategorien. Eine klare Positionierung.</h2>
            <div className="cs-feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, textAlign: "left", marginTop: 32 }}>
              {[
                { num: "01", icon: "🎯", title: "Lead-Generierung", desc: "Solar · Pizza-Automat", active: false },
                { num: "02", icon: "⚙️", title: "Prozessautomati-sierung", desc: "Telegram Workflow", active: false },
                { num: "03", icon: "📱", title: "Digitale Kunden-plattformen", desc: "TechRepair", active: true },
                { num: "04", icon: "🎬", title: "Medien & Content", desc: "Imagevideo", active: false },
              ].map((cat) => (
                <div key={cat.num} style={{ padding: "18px", background: cat.active ? "var(--nc-navy)" : "rgba(255,255,255,0.9)", borderRadius: 14, border: `1px solid ${cat.active ? "transparent" : "var(--nc-border)"}`, boxShadow: cat.active ? "0 8px 32px rgba(26,74,110,0.2)" : "none" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: cat.active ? "#93c5fd" : "var(--nc-text-muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 8 }}>{cat.num}</div>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{cat.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: cat.active ? "white" : "var(--nc-navy)", marginBottom: 4 }}>{cat.title}</div>
                  <div style={{ fontSize: 12, color: cat.active ? "#93c5fd" : "var(--nc-text-muted)" }}>{cat.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, padding: "16px 24px", background: "var(--nc-navy)", borderRadius: 12, display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 15 }}>✅</span>
              <span style={{ fontSize: 14, color: "white", fontWeight: 600 }}>Websites · Automatisierungen · KI-Systeme · die Unternehmen wachsen lassen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="nc-section" id="kontakt-cta" style={{ background: "var(--nc-bg-alt)" }}>
        <div className="nc-container">
          <div className="reveal" style={{ background: "white", borderRadius: 24, border: "1px solid var(--nc-border)", padding: "56px 48px", textAlign: "center", boxShadow: "var(--nc-shadow-lg)" }}>
            <div className="nc-badge" style={{ marginBottom: 20, justifyContent: "center" }}>Ähnliches Projekt?</div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 16, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Auch dein Betrieb verdient eine digitale Präsenz, die Kunden überzeugt – bevor sie anrufen.
            </h2>
            <p style={{ maxWidth: 520, margin: "0 auto 32px", fontSize: "1rem" }}>
              Egal ob Handwerk, Dienstleistung oder Fachbetrieb – ich baue dir eine Plattform, die Vertrauen aufbaut, Standardfragen automatisch beantwortet und neue Kunden gewinnt.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://calendly.com/northcode/erstgespraech" target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-primary">
                Kostenloses Erstgespräch buchen <IcoArrowRight />
              </a>
              <a href="https://wa.me/491234567890?text=Hallo%20Esmail%2C%20ich%20brauche%20eine%20digitale%20Kundenplattform." target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-secondary">
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
            North<span style={{ color: "#93c5fd" }}>code</span>
          </Link>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/portfolio/pizza-vending" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}>
              ← Pizza-Automaten-Plattform
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
