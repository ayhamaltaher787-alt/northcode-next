"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
function IcoArrowDown() { return <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoCheck() { return <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="rgba(139,92,246,0.15)"/><path d="M8 12l3 3 5-5" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoX() { return <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="rgba(220,38,38,0.12)"/><path d="M15 9l-6 6M9 9l6 6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/></svg>; }
function IcoZap() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>; }
function IcoCpu() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/><rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.8"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }
function IcoUsers() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }
function IcoCalendar() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }
function IcoMic() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M5 10a7 7 0 0014 0M12 19v3M8 22h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }
function IcoPresentation() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 3h20v13H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M12 16v5M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }
function IcoSearch() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }
function IcoTrend() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M22 7l-8.5 8.5-5-5L2 17M22 7h-6M22 7v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IcoClock() { return <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }

// ─── Agent Card Component ─────────────────────────────────────────────────────
function AgentCard({ emoji, name, role, desc, color, tools, delay = 0 }: {
  emoji: string; name: string; role: string; desc: string; color: string; tools?: string[]; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, border: `1px solid ${color}30`, padding: "24px", backdropFilter: "blur(8px)", cursor: "default" }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${color}20`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{emoji}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 2 }}>KI-Agent</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "white", lineHeight: 1.2 }}>{name}</div>
          <div style={{ fontSize: 12, color: `${color}cc`, fontWeight: 600, marginTop: 2 }}>{role}</div>
        </div>
      </div>
      <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", margin: "0 0 14px", lineHeight: 1.6 }}>{desc}</p>
      {tools && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tools.map((t) => (
            <span key={t} style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.06)", padding: "3px 9px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Workflow Diagram ─────────────────────────────────────────────────────────
function WorkflowDiagram() {
  return (
    <div style={{ position: "relative", padding: "48px 24px", background: "rgba(255,255,255,0.02)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)", overflowX: "auto" }}>
      <div style={{ minWidth: 720, position: "relative" }}>

        {/* Row 1: Triggers */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 8 }}>
          {["💬 Nutzer-Nachricht", "💼 Slack"].map((t) => (
            <div key={t} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", letterSpacing: ".06em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 4 }}>
                <IcoZap /> Trigger
              </div>
              <div style={{ background: "white", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 600, color: "#1e293b", boxShadow: "0 2px 12px rgba(0,0,0,0.15)", border: "1px solid rgba(0,0,0,0.08)" }}>{t}</div>
            </div>
          ))}
        </div>

        {/* Arrow down to Orion */}
        <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "rgba(255,255,255,0.3)" }}>
            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.2)" }} />
            <IcoArrowDown />
          </div>
        </div>

        {/* Orion - Orchestrator */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.2))", borderRadius: 14, border: "1px solid rgba(139,92,246,0.4)", padding: "16px 24px", textAlign: "center", minWidth: 280, backdropFilter: "blur(8px)" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#a78bfa", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 6 }}>🤖 Agent · Orchestrator</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "white", marginBottom: 4 }}>Orion, the Meeting Orchestrator</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Analysiert die Anfrage, verteilt Aufgaben an Spezialisten-Agenten</div>
          </div>
        </div>

        {/* Three branches */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div style={{ width: "75%", height: 1, background: "rgba(139,92,246,0.3)", position: "relative", marginTop: 8 }}>
            {["25%", "50%", "75%"].map((pos) => (
              <div key={pos} style={{ position: "absolute", left: pos, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 1, height: 20, background: "rgba(139,92,246,0.3)" }} />
                <IcoArrowDown />
              </div>
            ))}
          </div>
        </div>

        {/* Branch labels */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 8, marginTop: 24 }}>
          {[
            { label: "👥 Intern. Teilnehmer finden", color: "#60a5fa" },
            { label: "🌍 Extern. Teilnehmer + Präsentation", color: "#34d399" },
            { label: "📅 Meeting buchen", color: "#f472b6" },
          ].map((b) => (
            <div key={b.label} style={{ textAlign: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${b.color}12`, border: `1px dashed ${b.color}50`, borderRadius: 8, padding: "5px 12px", fontSize: 11, fontWeight: 600, color: b.color }}>{b.label}</div>
            </div>
          ))}
        </div>

        {/* Agent boxes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {/* Branch 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ width: 1, height: 16, background: "rgba(96,165,250,0.4)" }} />
            <div style={{ background: "rgba(96,165,250,0.1)", borderRadius: 12, border: "1px solid rgba(96,165,250,0.3)", padding: "12px 16px", width: "100%" }}>
              <div style={{ fontSize: 10, color: "#60a5fa", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>KI-Agent</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginTop: 3 }}>🔵 Polaris</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Participant Finder</div>
              <div style={{ marginTop: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["Knowledge Base"].map(t => <span key={t} style={{ fontSize: 10, background: "rgba(96,165,250,0.15)", color: "#93c5fd", padding: "2px 7px", borderRadius: 4, fontWeight: 600 }}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* Branch 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ width: 1, height: 16, background: "rgba(52,211,153,0.4)" }} />
            <div style={{ background: "rgba(52,211,153,0.1)", borderRadius: 12, border: "1px solid rgba(52,211,153,0.3)", padding: "12px 16px", width: "100%" }}>
              <div style={{ fontSize: 10, color: "#34d399", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>KI-Agent</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginTop: 3 }}>🟢 Lania</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Lead Locator (extern)</div>
              <div style={{ marginTop: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["Google", "LinkedIn", "Web-Recherche"].map(t => <span key={t} style={{ fontSize: 10, background: "rgba(52,211,153,0.15)", color: "#6ee7b7", padding: "2px 7px", borderRadius: 4, fontWeight: 600 }}>{t}</span>)}
              </div>
            </div>
            <div style={{ width: 1, height: 12, background: "rgba(52,211,153,0.3)" }} />
            <div style={{ background: "rgba(52,211,153,0.07)", borderRadius: 12, border: "1px dashed rgba(52,211,153,0.25)", padding: "12px 16px", width: "100%" }}>
              <div style={{ fontSize: 10, color: "#34d399", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>KI-Agent</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginTop: 3 }}>🎨 Gamma</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Presentation Preparer</div>
              <div style={{ marginTop: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["Gamma AI", "Pitch Deck"].map(t => <span key={t} style={{ fontSize: 10, background: "rgba(52,211,153,0.1)", color: "#6ee7b7", padding: "2px 7px", borderRadius: 4, fontWeight: 600 }}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* Branch 3 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ width: 1, height: 16, background: "rgba(244,114,182,0.4)" }} />
            <div style={{ background: "rgba(244,114,182,0.1)", borderRadius: 12, border: "1px solid rgba(244,114,182,0.3)", padding: "12px 16px", width: "100%" }}>
              <div style={{ fontSize: 10, color: "#f472b6", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>KI-Agent</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginTop: 3 }}>🌸 Borealis</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Meeting Booker</div>
              <div style={{ marginTop: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["Google Calendar", "Einladungen"].map(t => <span key={t} style={{ fontSize: 10, background: "rgba(244,114,182,0.15)", color: "#f9a8d4", padding: "2px 7px", borderRadius: 4, fontWeight: 600 }}>{t}</span>)}
              </div>
            </div>
            <div style={{ width: 1, height: 12, background: "rgba(244,114,182,0.3)" }} />
            <div style={{ background: "rgba(244,114,182,0.07)", borderRadius: 12, border: "1px dashed rgba(244,114,182,0.25)", padding: "12px 16px", width: "100%" }}>
              <div style={{ fontSize: 10, color: "#f472b6", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>KI-Agent</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginTop: 3 }}>📝 Nate</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Meeting Notetaker</div>
              <div style={{ marginTop: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["Aufzeichnung", "Transkript", "Zusammenfassung"].map(t => <span key={t} style={{ fontSize: 10, background: "rgba(244,114,182,0.1)", color: "#f9a8d4", padding: "2px 7px", borderRadius: 4, fontWeight: 600 }}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Command Demo ─────────────────────────────────────────────────────────────
function CommandDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { icon: "💬", label: "Befehl eingegeben", detail: "\"Plane nächste Woche ein Meeting mit Max Mustermann von Firma XY zum Thema Vertrieb.\"", color: "#a78bfa" },
    { icon: "🧠", label: "Orion analysiert", detail: "Erkennt: Teilnehmer, Unternehmen, Thema, Zeitraum. Weist Aufgaben an 4 Agenten zu.", color: "#60a5fa" },
    { icon: "👥", label: "Polaris sucht intern", detail: "Findet relevante interne Kollegen aus der Wissensdatenbank.", color: "#60a5fa" },
    { icon: "🔍", label: "Lania recherchiert", detail: "Sucht Max Mustermann auf LinkedIn & Google. Findet Kontaktdaten und Unternehmensinfos.", color: "#34d399" },
    { icon: "🎨", label: "Gamma erstellt Unterlagen", detail: "Bereitet automatisch eine individuelle Präsentation zum Thema Vertrieb vor.", color: "#34d399" },
    { icon: "📅", label: "Borealis bucht", detail: "Findet freie Slots, erstellt Kalendereinträge und versendet Einladungen an alle.", color: "#f472b6" },
    { icon: "🎙️", label: "Nate dokumentiert", detail: "Nimmt das Meeting auf, erstellt Transkript, Zusammenfassung und To-do-Liste.", color: "#f472b6" },
    { icon: "✅", label: "Aufgaben übergeben", detail: "To-dos landen automatisch im Projektmanagement-System. Kein manueller Aufwand.", color: "#86efac" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % steps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: "#0d1117", borderRadius: 20, padding: "32px", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
      {/* Input box */}
      <div style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.25)", borderRadius: 12, padding: "14px 18px", marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#a78bfa", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 6 }}>💬 Ein einziger Befehl</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontFamily: "monospace", lineHeight: 1.6 }}>
          &bdquo;Plane nächste Woche ein Meeting mit <span style={{ color: "#a78bfa" }}>Max Mustermann</span> von <span style={{ color: "#60a5fa" }}>Firma XY</span> zum Thema <span style={{ color: "#34d399" }}>Vertrieb</span>.&ldquo;
        </div>
      </div>

      {/* Steps */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            animate={{
              background: activeStep === i ? `${step.color}12` : "transparent",
              borderColor: activeStep === i ? `${step.color}40` : "transparent",
            }}
            transition={{ duration: 0.4 }}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, border: "1px solid transparent" }}
          >
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: activeStep === i ? `${step.color}20` : "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0, transition: "all 0.4s" }}>{step.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: activeStep === i ? "white" : "rgba(255,255,255,0.4)", transition: "color 0.4s" }}>{step.label}</div>
              <AnimatePresence>
                {activeStep === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 3, lineHeight: 1.5 }}>{step.detail}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.div
              animate={{ scale: activeStep === i ? 1 : 0 }}
              style={{ width: 8, height: 8, borderRadius: "50%", background: step.color, flexShrink: 0 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Output */}
      <div style={{ marginTop: 20, padding: "14px 18px", background: "rgba(134,239,172,0.08)", border: "1px solid rgba(134,239,172,0.2)", borderRadius: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#86efac", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 6 }}>✅ Ergebnis</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>Meeting geplant · Teilnehmer informiert · Präsentation fertig · Protokoll erstellt · To-dos verteilt.</div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MeetingWorkforcePage() {
  useReveal();

  const problems = [
    "Mitarbeiter verbringen wertvolle Zeit mit Terminorganisation statt mit ihrer eigentlichen Arbeit",
    "Relevante Teilnehmer müssen manuell recherchiert und kontaktiert werden",
    "Externe Kontakte erfordern separate Recherche über LinkedIn, Google und Co.",
    "Präsentationen werden häufig kurzfristig und unter Zeitdruck erstellt",
    "Meetings enden oft ohne klare Dokumentation oder Aufgabenverteilung",
    "Notizen und Protokolle gehen verloren oder werden nie weiterverfolgt",
    "Administrative Tätigkeiten halten Führungskräfte von strategischer Arbeit ab",
  ];

  const agents = [
    { emoji: "🤖", name: "Orion", role: "Meeting Orchestrator", desc: "Das Gehirn des Systems. Orion empfängt die Anfrage, analysiert Kontext, identifiziert Teilnehmer und Purpose – und delegiert dann automatisch an die richtigen Spezialisten.", color: "#a78bfa", tools: ["Anfragen-Analyse", "Aufgabenverteilung", "Kontext-Verarbeitung"] },
    { emoji: "🔵", name: "Polaris", role: "Participant Finder", desc: "Durchsucht die interne Wissensdatenbank und findet relevante Kollegen für das Meeting – basierend auf Thema, Abteilung und Expertise.", color: "#60a5fa", tools: ["Knowledge Base", "Interner Verzeichnis"] },
    { emoji: "🟢", name: "Lania", role: "Lead Locator", desc: "Sucht externe Teilnehmer und Kontakte außerhalb des Unternehmens. Recherchiert auf LinkedIn, Google und anderen Quellen – vollständig automatisiert.", color: "#34d399", tools: ["LinkedIn", "Google", "Web-Recherche", "Kontaktdaten"] },
    { emoji: "🎨", name: "Gamma", role: "Presentation Preparer", desc: "Erstellt automatisch professionelle Meeting-Unterlagen und Präsentationen via Gamma AI – individuell für jedes Meeting, basierend auf Thema und Teilnehmern.", color: "#fbbf24", tools: ["Gamma AI", "Pitch Decks", "Präsentationen"] },
    { emoji: "🌸", name: "Borealis", role: "Meeting Booker", desc: "Findet freie Zeitslots, erstellt Kalendereinträge, generiert Meeting-Links und versendet Einladungen an alle Teilnehmer – intern wie extern.", color: "#f472b6", tools: ["Google Calendar", "Meeting-Links", "Einladungen"] },
    { emoji: "📝", name: "Nate", role: "Meeting Notetaker", desc: "Schickt einen Bot in das Meeting, der alles aufzeichnet. Erstellt danach automatisch Transkript, Zusammenfassung und extrahiert alle To-dos und Aufgaben.", color: "#fb923c", tools: ["Aufzeichnung", "Transkription", "To-dos", "Projektübergabe"] },
  ];

  const results = [
    { icon: <IcoClock />, val: "−80 %", label: "Zeitaufwand für Organisation", sub: "Was früher Stunden dauerte, erledigt das System in Sekunden – Recherche, Planung, Vorbereitung inklusive" },
    { icon: <IcoUsers />, val: "Automatisch", label: "Teilnehmer identifiziert", sub: "Intern aus der Wissensdatenbank, extern über LinkedIn & Web – kein manuelles Suchen mehr" },
    { icon: <IcoCpu />, val: "6 Agenten", label: "Arbeiten parallel", sub: "Orion orchestriert ein Netzwerk spezialisierter KI-Agenten – jeder ein Experte auf seinem Gebiet" },
    { icon: <IcoTrend />, val: "100 %", label: "Meetings dokumentiert", sub: "Jedes Meeting hinterlässt automatisch Protokoll, Zusammenfassung und klare To-do-Liste" },
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
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#8B5CF6", background: "rgba(139,92,246,0.08)", padding: "4px 12px", borderRadius: 100 }}>KI-Konzeptprojekt</span>
            <a href="#kontakt-cta" className="nc-btn nc-btn-primary cs-nav-cta" style={{ padding: "8px 18px", fontSize: 13 }}>Ähnliches Projekt anfragen</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="cs-hero-section" style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #1a0533 0%, #0f172a 40%, #0a1628 100%)", minHeight: 600 }}>
        {/* Ambient glows */}
        <div style={{ position: "absolute", top: -100, left: "30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, right: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="nc-container" style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Northcode</Link>
            <span>/</span>
            <Link href="/#portfolio" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Portfolio</Link>
            <span>/</span>
            <span style={{ color: "#a78bfa", fontWeight: 600 }}>Meeting AI Workforce</span>
          </div>

          <div className="cs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {["Multi-Agent System", "KI-Automatisierung", "Konzeptprojekt"].map((t) => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 600, color: "#c4b5fd", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", padding: "4px 12px", borderRadius: 100 }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 8, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#a78bfa", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#c4b5fd", letterSpacing: ".04em", textTransform: "uppercase" }}>KI Multi-Agent Workforce</span>
              </div>

              <h1 style={{ color: "white", marginBottom: 20, fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
                Ein Befehl.{" "}
                <span style={{ color: "#a78bfa" }}>Sechs Agenten.</span>
                <br />Das komplette Meeting automatisiert.
              </h1>

              <p style={{ fontSize: "1.05rem", marginBottom: 32, maxWidth: 490, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                Ein Netzwerk spezialisierter KI-Agenten übernimmt automatisch Planung, Recherche, Präsentationserstellung, Terminbuchung, Dokumentation und Aufgabenverteilung – komplett ohne manuellen Aufwand.
              </p>

              <div className="cs-metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: 28 }}>
                {[
                  { val: "6 Agenten", lbl: "parallel aktiv" },
                  { val: "−80 %", lbl: "weniger Aufwand" },
                  { val: "1 Befehl", lbl: "startet alles" },
                ].map((m) => (
                  <div key={m.val} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#a78bfa", letterSpacing: "-0.04em", lineHeight: 1.1 }}>{m.val}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 500, marginTop: 2 }}>{m.lbl}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#demo" className="nc-btn nc-btn-primary" style={{ background: "#7c3aed" }}>
                  System in Aktion sehen <IcoArrowRight />
                </a>
                <a href="#agenten" className="nc-btn nc-btn-secondary" style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.04)" }}>
                  Alle 6 Agenten kennenlernen
                </a>
              </div>

              {/* Honest label */}
              <div style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: 8 }}>
                <span style={{ fontSize: 14 }}>💡</span>
                <span style={{ fontSize: 12, color: "rgba(251,191,36,0.8)", lineHeight: 1.5 }}>Konzept- & Entwicklungsprojekt – demonstriert KI-Agenten-Orchestrierung für komplexe Geschäftsprozesse</span>
              </div>
            </motion.div>

            {/* Command Demo animated */}
            <motion.div className="cs-hero-visual" initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <CommandDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="problem">
        <div className="nc-container">
          <div className="cs-problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
            <div className="reveal cs-problem-sticky" style={{ position: "sticky", top: 88 }}>
              <div className="nc-label"><span />Das Problem</div>
              <h2 style={{ color: "var(--nc-navy)", marginBottom: 16 }}>Meetings kosten Unternehmen massiv Zeit – vor und nach dem Gespräch.</h2>
              <p>Das Gespräch selbst dauert 60 Minuten. Die Vorbereitung, Koordination, Dokumentation und Nachverfolgung dauern ein Vielfaches davon.</p>
              <div style={{ marginTop: 28, padding: "18px 20px", background: "rgba(139,92,246,0.05)", borderRadius: 12, border: "1px solid rgba(139,92,246,0.15)" }}>
                <p style={{ fontSize: 13.5, color: "#5b21b6", fontWeight: 500, margin: 0 }}>
                  📊 Laut Studien verbringen Führungskräfte bis zu <strong>23 Stunden pro Woche</strong> in Meetings – ein erheblicher Teil davon in Vor- und Nachbereitung, die vollständig automatisierbar ist.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {problems.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.9)", border: "1px solid rgba(139,92,246,0.1)" }}>
                    <div style={{ flexShrink: 0, marginTop: 1 }}><IcoX /></div>
                    <p style={{ fontSize: 14.5, color: "var(--nc-text)", margin: 0, lineHeight: 1.6 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow Diagram ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "#0f172a" }} id="demo">
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 48 }}>
            <div className="nc-label" style={{ color: "#a78bfa" }}><span style={{ background: "#a78bfa" }} />System-Architektur</div>
            <h2 style={{ color: "white" }}>Wie die Agenten zusammenarbeiten</h2>
            <p style={{ color: "rgba(255,255,255,0.55)" }}>Orion orchestriert fünf spezialisierte Agenten, die parallel und sequenziell zusammenarbeiten – wie ein eingespieltes digitales Team.</p>
          </div>
          <div className="reveal">
            <WorkflowDiagram />
          </div>
        </div>
      </section>

      {/* ── Prozess Demo ─────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "#0a0f1a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="nc-container">
          <div className="cs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div className="reveal">
              <div className="nc-label" style={{ color: "#a78bfa" }}><span style={{ background: "#a78bfa" }} />Der gesamte Ablauf</div>
              <h2 style={{ color: "white", marginBottom: 16 }}>Von der Anfrage bis zum Protokoll – vollautomatisch</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: 32 }}>Was früher einen halben Arbeitstag in Anspruch nahm – Teilnehmer suchen, Termin finden, Präsentation vorbereiten, Notizen erstellen – erledigt das System nach einem einzigen Befehl.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { step: "01", title: "Anfrage stellen", desc: "Per Chat, Slack oder Sprachbefehl", color: "#a78bfa" },
                  { step: "02", title: "Agenten analysieren", desc: "Orion versteht Kontext, Teilnehmer, Zweck", color: "#60a5fa" },
                  { step: "03", title: "Parallel recherchieren", desc: "Polaris & Lania suchen intern und extern", color: "#34d399" },
                  { step: "04", title: "Unterlagen erstellen", desc: "Gamma bereitet Meeting-Präsentation vor", color: "#fbbf24" },
                  { step: "05", title: "Meeting buchen", desc: "Borealis koordiniert Termine & Links", color: "#f472b6" },
                  { step: "06", title: "Dokumentieren & übergeben", desc: "Nate erstellt Protokoll, To-dos ins System", color: "#86efac" },
                ].map((item, i, arr) => (
                  <div key={item.step} style={{ display: "flex", gap: 16, position: "relative" }}>
                    {i < arr.length - 1 && (
                      <div style={{ position: "absolute", left: 19, top: 48, width: 2, height: "calc(100% - 8px)", background: `linear-gradient(${item.color}40, ${arr[i+1].color}20)` }} />
                    )}
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${item.color}18`, border: `2px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: item.color, flexShrink: 0, zIndex: 1 }}>{item.step}</div>
                    <div style={{ paddingBottom: 24 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2 cs-problem-sticky" style={{ position: "sticky", top: 88 }}>
              <CommandDemo />
            </div>
          </div>
        </div>
      </section>

      {/* ── Agenten ──────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.04)" }} id="agenten">
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 48 }}>
            <div className="nc-label" style={{ color: "#a78bfa" }}><span style={{ background: "#a78bfa" }} />Das Team</div>
            <h2 style={{ color: "white" }}>6 spezialisierte KI-Agenten</h2>
            <p style={{ color: "rgba(255,255,255,0.55)" }}>Jeder Agent ist ein Experte auf seinem Gebiet. Gemeinsam decken sie den kompletten Meeting-Prozess ab.</p>
          </div>
          <div className="cs-solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {agents.map((a, i) => (
              <AgentCard key={a.name} {...a} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="nc-section" id="ergebnisse" style={{ background: "var(--nc-navy)" }}>
        <div className="nc-container">
          <div className="nc-section-header reveal" style={{ marginBottom: 56 }}>
            <div className="nc-label" style={{ color: "#c4b5fd" }}><span style={{ background: "#c4b5fd" }} />Ergebnisse</div>
            <h2 style={{ color: "white" }}>Was dieses System für ein Unternehmen bedeutet</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>Weniger Verwaltungsaufwand, mehr Fokus auf das, was wirklich zählt.</p>
          </div>
          <div className="cs-results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 40 }}>
            {results.map((r, i) => (
              <div key={r.label} className={`reveal reveal-delay-${(i % 2) + 1}`} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", padding: "32px", backdropFilter: "blur(8px)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0, background: "rgba(139,92,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c4b5fd" }}>{r.icon}</div>
                  <div>
                    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#c4b5fd", letterSpacing: "-0.04em", lineHeight: 1 }}>{r.val}</div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginTop: 6, marginBottom: 8 }}>{r.label}</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>{r.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <div style={{ background: "rgba(139,92,246,0.1)", borderRadius: 16, border: "1px solid rgba(139,92,246,0.25)", padding: "28px 32px" }}>
              <h3 style={{ color: "white", marginBottom: 20, fontSize: "1.1rem" }}>Vorher vs. Nachher</h3>
              <div className="cs-before-after" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#fca5a5", textTransform: "uppercase", marginBottom: 12 }}>Vorher</div>
                  {["Manuell Teilnehmer recherchieren", "Termine per E-Mail koordinieren", "Präsentationen kurzfristig zusammenstellen", "Notizen gehen verloren oder fehlen", "To-dos werden nie konsequent verfolgt"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <IcoX /><span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#86efac", textTransform: "uppercase", marginBottom: 12 }}>Nachher</div>
                  {["Polaris & Lania recherchieren automatisch", "Borealis koordiniert und bucht selbst", "Gamma erstellt Unterlagen automatisch", "Nate dokumentiert jedes Meeting lückenlos", "Aufgaben landen direkt im Projektmanagement"].map((item) => (
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

      {/* ── Portfolio Kategorien ─────────────────────────────────────── */}
      <section style={{ padding: "64px 0", background: "rgba(236,243,242,0.5)" }}>
        <div className="nc-container">
          <div className="reveal" style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <div className="nc-label" style={{ justifyContent: "center" }}><span />Northcodes Portfolio</div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 8, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>4 Kategorien. Eine klare Positionierung.</h2>
            <p style={{ marginBottom: 36, maxWidth: 580, margin: "0 auto 36px" }}>Von einfachen Websites bis zu komplexen KI-Agenten-Systemen – Northcode entwickelt digitale Lösungen, die Unternehmen messbar weiterbringen.</p>
            <div className="cs-feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, textAlign: "left" }}>
              {[
                { num: "01", icon: "🎯", title: "Lead-Generierung", desc: "Solar · Pizza-Automat", active: false },
                { num: "02", icon: "⚙️", title: "Prozessautomati-sierung", desc: "Telegram Workflow", active: false },
                { num: "03", icon: "📱", title: "Digitale Kunden-plattformen", desc: "TechRepair", active: false },
                { num: "04", icon: "🤖", title: "KI Multi-Agent Systeme", desc: "Meeting Workforce", active: true },
              ].map((cat) => (
                <div key={cat.num} style={{ padding: "18px", background: cat.active ? "var(--nc-navy)" : "rgba(255,255,255,0.9)", borderRadius: 14, border: `1px solid ${cat.active ? "transparent" : "var(--nc-border)"}`, boxShadow: cat.active ? "0 8px 32px rgba(26,74,110,0.2)" : "none" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: cat.active ? "#c4b5fd" : "var(--nc-text-muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 8 }}>{cat.num}</div>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{cat.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: cat.active ? "white" : "var(--nc-navy)", marginBottom: 4 }}>{cat.title}</div>
                  <div style={{ fontSize: 12, color: cat.active ? "#c4b5fd" : "var(--nc-text-muted)" }}>{cat.desc}</div>
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 100, marginBottom: 20 }}>
              <span style={{ fontSize: 14 }}>🤖</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#7c3aed" }}>KI-Automatisierung für dein Team</span>
            </div>
            <h2 style={{ color: "var(--nc-navy)", marginBottom: 16, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Dein Unternehmen verdient ein Team, das nie schläft.
            </h2>
            <p style={{ maxWidth: 540, margin: "0 auto 32px", fontSize: "1rem" }}>
              Ob Meeting-Orchestrierung, Datenerfassung, Lead-Qualifizierung oder interne Prozesse – ich baue KI-Agenten-Systeme, die deinen Betrieb entlasten und skalieren.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://calendly.com/northcode/erstgespraech" target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-primary">
                Kostenloses Erstgespräch buchen <IcoArrowRight />
              </a>
              <a href="https://wa.me/491234567890?text=Hallo%20Esmail%2C%20ich%20interessiere%20mich%20f%C3%BCr%20KI-Automatisierung." target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-secondary">
                💬 Direkt auf WhatsApp
              </a>
            </div>
            <p style={{ fontSize: 12, color: "var(--nc-text-muted)", marginTop: 20 }}>Kein Pitch, kein Druck. Nur ein ehrliches Gespräch darüber, was möglich ist.</p>
          </div>
        </div>
      </section>

      {/* ── Footer mini ──────────────────────────────────────────────── */}
      <div style={{ background: "var(--nc-navy)", padding: "28px 0" }}>
        <div className="nc-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link href="/" style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", textDecoration: "none", letterSpacing: "-.03em" }}>
            North<span style={{ color: "#c4b5fd" }}>code</span>
          </Link>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/portfolio/techrepair" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}>
              ← TechRepair Plattform
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
