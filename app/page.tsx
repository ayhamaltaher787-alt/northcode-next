"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card-effect";
import { CircleMenu } from "@/components/ui/circle-menu";
import { Zap, Search, Briefcase, User, Mail } from "lucide-react";

// ─── Analyse Types ────────────────────────────────────────────────────────────
type AQType = "single" | "multi";
interface AOption { value: string; label: string; }
interface AQuestion {
  id: string;
  section: string;
  sectionLabel: string;
  text: string;
  type: AQType;
  options: AOption[];
  showIf?: { id: string; value: string };
  hint?: string;
}
type AAnswers = Record<string, string | string[]>;
interface ReportQuickWin { title: string; desc: string; icon: string; }
interface ReportLongterm { title: string; desc: string; }
interface ReportResult {
  scores: {
    website: number; seo: number; leadgen: number; kommunikation: number;
    prozesse: number; automatisierung: number; digitalisierung: number; gesamt: number;
  };
  revenueImpact: {
    totalMonthlyLoss: number;       // Zeitverlust + Lead-Verlust kombiniert
    timeWasteCost: number;          // Stunden × Stundensatz × 4,3 Wochen
    leadLossCost: number;           // verlorene Leads × Auftragswert × Conversion
    weeklyHoursSaved: number;       // durch Automatisierung rückgewinnbare Stunden
  };
  insights:       string[];
  quickWins:      ReportQuickWin[];
  longterm:       ReportLongterm[];
  recommendedService:      string;
  recommendedServiceIcon:  string;
  recommendedServicePrice: string;
  whyRecommended:          string;
  ctaHeadline:             string;
  executiveSummary?: string;
  systemStack?:      { kern: string; erweiterungen: string[]; systemName: string; };
}

// ─── Analyse Questions v2 (15 Fragen) ────────────────────────────────────────
const analyseQuestions: AQuestion[] = [
  // ── Unternehmen ──────────────────────────────────────────────────────────────
  {
    id: "branch", section: "unternehmen", sectionLabel: "Ihr Unternehmen",
    text: "In welcher Branche sind Sie tätig?",
    type: "single",
    options: [
      { value: "handwerk",      label: "Handwerk & Bau" },
      { value: "dienstleistung",label: "Dienstleistung & Beratung" },
      { value: "gesundheit",    label: "Gesundheit & Pflege" },
      { value: "immobilien",    label: "Immobilien" },
      { value: "gastronomie",   label: "Gastronomie & Einzelhandel" },
      { value: "produktion",    label: "Produktion & Industrie" },
      { value: "sonstiges",     label: "Sonstiges" },
    ],
  },
  {
    id: "team-size", section: "unternehmen", sectionLabel: "Ihr Unternehmen",
    text: "Wie viele Personen arbeiten in Ihrem Unternehmen (inkl. Sie)?",
    type: "single",
    options: [
      { value: "solo",  label: "Nur ich (1 Person)" },
      { value: "klein", label: "2–5 Personen" },
      { value: "mittel",label: "6–15 Personen" },
      { value: "gross", label: "Mehr als 15 Personen" },
    ],
  },
  {
    id: "main-goal", section: "unternehmen", sectionLabel: "Ihr Unternehmen",
    text: "Was ist Ihr wichtigstes Ziel für die nächsten 12 Monate?",
    type: "single",
    options: [
      { value: "mehr-neukunden",         label: "Mehr Neukunden gewinnen" },
      { value: "team-entlasten",         label: "Mitarbeiter entlasten & Kosten senken" },
      { value: "skalieren",              label: "Umsatz skalieren ohne mehr Personal" },
      { value: "sichtbarkeit",           label: "Online-Sichtbarkeit aufbauen" },
      { value: "prozesse-digitalisieren",label: "Abläufe digitalisieren & modernisieren" },
    ],
  },
  // ── Online-Präsenz ───────────────────────────────────────────────────────────
  {
    id: "has-website", section: "online", sectionLabel: "Online-Präsenz",
    text: "Wie würden Sie Ihre aktuelle Website beschreiben?",
    type: "single",
    options: [
      { value: "modern-aktiv",      label: "Professionell, aktuell und bringt Anfragen" },
      { value: "vorhanden-veraltet",label: "Vorhanden, aber veraltet oder kaum gepflegt" },
      { value: "keine",             label: "Noch keine professionelle Website" },
    ],
  },
  {
    id: "website-problems", section: "online", sectionLabel: "Online-Präsenz",
    text: "Was trifft auf Ihre Website zu?",
    type: "multi", hint: "Mehrfachauswahl möglich",
    showIf: { id: "has-website", value: "vorhanden-veraltet" },
    options: [
      { value: "zu-wenig-anfragen", label: "Kaum Anfragen über die Website" },
      { value: "kein-seo",          label: "Schlechte Google-Sichtbarkeit" },
      { value: "kein-cta",          label: "Keine klaren Handlungsaufforderungen" },
      { value: "veraltetes-design", label: "Veraltetes Design" },
      { value: "nicht-mobil",       label: "Nicht mobil optimiert" },
      { value: "langsam",           label: "Langsame Ladezeit" },
    ],
  },
  {
    id: "google-profile", section: "online", sectionLabel: "Online-Präsenz",
    text: "Wie ist Ihr Google-Unternehmensprofil (Google Maps) aufgestellt?",
    type: "single",
    options: [
      { value: "vollstaendig-bewertet",label: "Vollständig ausgefüllt, aktiv & mit Bewertungen" },
      { value: "vorhanden-ungepflegt", label: "Vorhanden, aber kaum gepflegt" },
      { value: "wenig-bewertungen",    label: "Vorhanden, aber kaum Bewertungen" },
      { value: "kein-profil",          label: "Kein Google-Profil vorhanden" },
    ],
  },
  // ── Leadgenerierung ──────────────────────────────────────────────────────────
  {
    id: "monthly-inquiries", section: "leads", sectionLabel: "Leadgenerierung",
    text: "Wie viele neue Anfragen erhalten Sie durchschnittlich pro Monat?",
    type: "single",
    options: [
      { value: "unter-5",  label: "Weniger als 5" },
      { value: "5-15",     label: "5–15 Anfragen" },
      { value: "15-30",    label: "15–30 Anfragen" },
      { value: "ueber-30", label: "Mehr als 30 Anfragen" },
    ],
  },
  {
    id: "response-time", section: "leads", sectionLabel: "Leadgenerierung",
    text: "Wie schnell antworten Sie im Schnitt auf neue Anfragen?",
    type: "single",
    options: [
      { value: "unter-1h",     label: "Innerhalb einer Stunde" },
      { value: "gleicher-tag", label: "Noch am gleichen Tag" },
      { value: "naechster-tag",label: "Am nächsten Tag oder später" },
      { value: "unregelmaessig",label: "Unregelmäßig – je nach Auslastung" },
    ],
  },
  {
    id: "lead-followup", section: "leads", sectionLabel: "Leadgenerierung",
    text: "Was passiert mit Interessenten, die sich nicht sofort entscheiden?",
    type: "single",
    options: [
      { value: "systematisch",label: "Wir fassen systematisch nach" },
      { value: "manchmal",    label: "Wir fassen manchmal nach" },
      { value: "kaum",        label: "Kaum – der Kontakt geht meist verloren" },
      { value: "kein-system", label: "Kein System – wir warten auf Rückmeldung" },
    ],
  },
  // ── Prozesse ─────────────────────────────────────────────────────────────────
  {
    id: "time-wasters", section: "prozesse", sectionLabel: "Prozesse",
    text: "Welche Aufgaben kosten Sie oder Ihr Team regelmäßig viel Zeit?",
    type: "multi", hint: "Mehrfachauswahl möglich",
    options: [
      { value: "angebote",      label: "Angebote erstellen & nachfassen" },
      { value: "termine",       label: "Terminplanung & Koordination" },
      { value: "anfragen",      label: "Kundenanfragen beantworten" },
      { value: "rechnungen",    label: "Rechnungen erstellen & verwalten" },
      { value: "dateneingabe",  label: "Dateneingaben & Übertragungen" },
      { value: "nachfassen",    label: "Leads & Kunden nachfassen" },
      { value: "reporting",     label: "Berichte & Auswertungen" },
    ],
  },
  {
    id: "weekly-hours", section: "prozesse", sectionLabel: "Prozesse",
    text: "Wie viele Stunden pro Woche verbringen Sie mit wiederkehrenden manuellen Aufgaben?",
    type: "single",
    options: [
      { value: "unter-5",  label: "Unter 5 Stunden" },
      { value: "5-10",     label: "5–10 Stunden" },
      { value: "10-20",    label: "10–20 Stunden" },
      { value: "ueber-20", label: "Über 20 Stunden" },
    ],
  },
  {
    id: "online-booking", section: "prozesse", sectionLabel: "Prozesse",
    text: "Können Kunden bei Ihnen online Termine buchen?",
    type: "single",
    options: [
      { value: "ja-laeuft",      label: "Ja, funktioniert gut" },
      { value: "ja-schlecht",    label: "Ja, aber kaum genutzt" },
      { value: "nein-bedarf",    label: "Nein, aber das wäre hilfreich" },
      { value: "nein-kein-bedarf",label: "Nein, kein Bedarf" },
    ],
  },
  // ── KI & Digitalisierung ─────────────────────────────────────────────────────
  {
    id: "digitalization", section: "ki", sectionLabel: "KI & Digitalisierung",
    text: "Wie digital arbeitet Ihr Unternehmen aktuell?",
    type: "single",
    options: [
      { value: "vollstaendig",label: "Vollständig digital (CRM, Projekttools, digitale Ablage)" },
      { value: "teilweise",   label: "Teilweise (Mix aus Digital und Papier/Telefon)" },
      { value: "kaum",        label: "Kaum – hauptsächlich Telefon, E-Mail und Papier" },
      { value: "gar-nicht",   label: "Fast gar nicht digitalisiert" },
    ],
  },
  {
    id: "ai-current", section: "ki", sectionLabel: "KI & Digitalisierung",
    text: "Nutzen Sie bereits KI oder Automatisierungen in Ihrem Unternehmen?",
    type: "single",
    options: [
      { value: "umfangreich",label: "Ja, umfangreich" },
      { value: "teilweise",  label: "Teilweise" },
      { value: "kaum",       label: "Kaum – vereinzelt" },
      { value: "gar-nicht",  label: "Gar nicht" },
    ],
  },
  // ── Ziele ────────────────────────────────────────────────────────────────────
  {
    id: "growth-target", section: "ziele", sectionLabel: "Ihre Ziele",
    text: "Welches Wachstum streben Sie in den nächsten 12 Monaten an?",
    type: "single",
    options: [
      { value: "stabilisieren",label: "Stabil halten – kein Wachstum geplant" },
      { value: "10-20",        label: "10–20% Wachstum" },
      { value: "20-50",        label: "20–50% Wachstum" },
      { value: "ueber-50",     label: "Über 50% / starke Skalierung" },
    ],
  },
  {
    id: "top-priority", section: "ziele", sectionLabel: "Ihre Ziele",
    text: "Wenn Sie heute ein einziges Problem lösen könnten – welches wäre das?",
    type: "single",
    options: [
      { value: "mehr-anfragen",      label: "Mehr planbare Anfragen bekommen" },
      { value: "weniger-arbeit",     label: "Weniger manuelle Arbeit im Alltag" },
      { value: "schneller-reagieren",label: "Schneller auf Anfragen reagieren" },
      { value: "besser-gefunden",    label: "Online besser gefunden werden" },
      { value: "prozesse-verbessern",label: "Abläufe effizienter gestalten" },
    ],
  },
];

// ─── Report Engine ────────────────────────────────────────────────────────────
function calculateReport(answers: AAnswers): ReportResult {
  const get  = (id: string): string   => (answers[id] as string)   ?? "";
  const getA = (id: string): string[] => (answers[id] as string[]) ?? [];

  const branch    = get("branch") || "sonstiges";
  const weights   = BRANCH_WEIGHTS[branch]   || BRANCH_WEIGHTS.sonstiges;
  const dealValue = AVG_DEAL_VALUE[branch]   || 1000;

  // ── 1. Website Score ─────────────────────────────────────────────────────────
  let websiteScore = 50;
  const websiteStatus = get("has-website");
  if (websiteStatus === "keine")            websiteScore = 10;
  else if (websiteStatus === "modern-aktiv") websiteScore = 85;
  else {
    const probs = getA("website-problems");
    websiteScore = Math.max(12, 70 - probs.length * 10);
  }

  // ── 2. SEO Score ─────────────────────────────────────────────────────────────
  let seoScore = 40;
  const googleProfile = get("google-profile");
  if      (googleProfile === "vollstaendig-bewertet")  seoScore = 85;
  else if (googleProfile === "vorhanden-ungepflegt")   seoScore = 45;
  else if (googleProfile === "wenig-bewertungen")      seoScore = 40;
  else if (googleProfile === "kein-profil")            seoScore = 10;
  if (websiteStatus === "keine")              seoScore = Math.min(seoScore, 20);
  else if (websiteStatus === "vorhanden-veraltet") seoScore = Math.min(seoScore, 55);
  if (getA("website-problems").includes("kein-seo"))   seoScore = Math.max(8, seoScore - 20);

  // ── 3. Leadgen Score ─────────────────────────────────────────────────────────
  let leadgenScore = 40;
  const monthlyInq = get("monthly-inquiries");
  if      (monthlyInq === "ueber-30")  leadgenScore = 85;
  else if (monthlyInq === "15-30")     leadgenScore = 68;
  else if (monthlyInq === "5-15")      leadgenScore = 45;
  else if (monthlyInq === "unter-5")   leadgenScore = 15;

  // ── 4. Kommunikation Score ───────────────────────────────────────────────────
  let kommunikationScore = 50;
  const responseTime = get("response-time");
  if      (responseTime === "unter-1h")        kommunikationScore = 88;
  else if (responseTime === "gleicher-tag")    kommunikationScore = 68;
  else if (responseTime === "naechster-tag")   kommunikationScore = 42;
  else if (responseTime === "unregelmaessig")  kommunikationScore = 22;
  const followup = get("lead-followup");
  if      (followup === "systematisch")  kommunikationScore = Math.min(100, kommunikationScore + 8);
  else if (followup === "manchmal")      kommunikationScore = Math.max(10,  kommunikationScore - 5);
  else if (followup === "kaum")          kommunikationScore = Math.max(10,  kommunikationScore - 15);
  else if (followup === "kein-system")   kommunikationScore = Math.max(10,  kommunikationScore - 20);

  // ── 5. Prozesse Score ────────────────────────────────────────────────────────
  let prozesseScore = 50;
  const weeklyHours = get("weekly-hours");
  if      (weeklyHours === "unter-5")  prozesseScore = 85;
  else if (weeklyHours === "5-10")     prozesseScore = 60;
  else if (weeklyHours === "10-20")    prozesseScore = 35;
  else if (weeklyHours === "ueber-20") prozesseScore = 15;
  const booking = get("online-booking");
  if      (booking === "ja-laeuft")    prozesseScore = Math.min(100, prozesseScore + 12);
  else if (booking === "nein-bedarf")  prozesseScore = Math.max(10,  prozesseScore - 8);

  // ── 6. Automatisierung Score ─────────────────────────────────────────────────
  let automatisierungScore = 50;
  const aiCurrent = get("ai-current");
  if      (aiCurrent === "umfangreich")  automatisierungScore = 85;
  else if (aiCurrent === "teilweise")    automatisierungScore = 62;
  else if (aiCurrent === "kaum")         automatisierungScore = 38;
  else if (aiCurrent === "gar-nicht")    automatisierungScore = 15;

  // ── 7. Digitalisierung Score ─────────────────────────────────────────────────
  let digitalisierungScore = 40;
  const digital = get("digitalization");
  if      (digital === "vollstaendig")  digitalisierungScore = 88;
  else if (digital === "teilweise")     digitalisierungScore = 55;
  else if (digital === "kaum")          digitalisierungScore = 28;
  else if (digital === "gar-nicht")     digitalisierungScore = 10;

  // ── Branch-weighted Gesamt ───────────────────────────────────────────────────
  const W = weights;
  const wSum = Object.values(W).reduce((a, b) => a + b, 0);
  const gesamt = Math.round(
    (websiteScore         * W.website +
     seoScore             * W.seo +
     leadgenScore         * W.leadgen +
     kommunikationScore   * W.kommunikation +
     prozesseScore        * W.prozesse +
     automatisierungScore * W.automatisierung +
     digitalisierungScore * W.digitalisierung) / wSum
  );

  // ── Revenue Impact ───────────────────────────────────────────────────────────
  const hourlyRate = AVG_HOURLY_RATE[branch] || 110;

  // 1. Zeitverlust-Kosten: Stunden/Woche × Unternehmer-Stundensatz × 4,3 Wochen
  const hoursPerWeek = weeklyHours === "ueber-20" ? 24 : weeklyHours === "10-20" ? 15 : weeklyHours === "5-10" ? 7 : 3;
  const timeWasteCost = Math.round(hoursPerWeek * hourlyRate * 4.3);

  // 2. Lead-Verlust: verlorene Anfragen × Auftragswert × Conversion-Rate 25%
  const inqNum = monthlyInq === "ueber-30" ? 38 : monthlyInq === "15-30" ? 22 : monthlyInq === "5-15" ? 10 : 4;
  // Verlustfaktor Reaktionszeit: wie viele Leads gehen durch langsame Antwort verloren
  const rLoss = responseTime === "unter-1h" ? 0.05 : responseTime === "gleicher-tag" ? 0.18 : responseTime === "naechster-tag" ? 0.35 : 0.55;
  // Verlustfaktor Nachverfolgung: wie viele gehen durch fehlende Nachverfolgung verloren
  const fuLoss = followup === "systematisch" ? 0.05 : followup === "manchmal" ? 0.22 : followup === "kaum" ? 0.42 : 0.60;
  // Kombinierter Verlust (Überschneidung berücksichtigt)
  const combinedLossRate = Math.min(0.90, rLoss + fuLoss - rLoss * fuLoss);
  const lostLeads = Math.max(0, Math.round(inqNum * combinedLossRate));
  const leadLossCost = Math.round(lostLeads * dealValue * 0.25);

  // 3. Gesamt + Stunden-Ersparnis durch Automatisierung
  const totalMonthlyLoss = timeWasteCost + leadLossCost;
  const autoSavingsFactor = aiCurrent === "gar-nicht" ? 0.65 : aiCurrent === "kaum" ? 0.50 : aiCurrent === "teilweise" ? 0.28 : 0.10;
  const weeklyHoursSaved = Math.round(hoursPerWeek * autoSavingsFactor);

  // ── Insights ──────────────────────────────────────────────────────────────────
  const ins: string[] = [];
  const goal = get("main-goal");
  const goalMap: Record<string, string> = {
    "mehr-neukunden":          "Ihr Ziel ist Neukunden-Wachstum – eine starke Online-Sichtbarkeit und ein funktionierendes Lead-System sind dafür die wichtigsten Hebel.",
    "team-entlasten":          "Mitarbeiterentlastung gelingt am schnellsten durch Automatisierung wiederkehrender Aufgaben – mit dem richtigen System sparen Sie sofort mehrere Stunden pro Woche.",
    "skalieren":               "Skalierbares Wachstum ohne Mehraufwand erfordert automatisierte Prozesse und ein System, das Leads selbstständig qualifiziert und nachfasst.",
    "sichtbarkeit":            "Online-Sichtbarkeit entsteht durch das Zusammenspiel von Website, Google-Profil und lokalem SEO – alle drei Bereiche haben bei Ihnen Optimierungspotenzial.",
    "prozesse-digitalisieren": "Prozessdigitalisierung ist Ihre Basis für Wachstum – und gleichzeitig der größte Hebel für sofortige Zeitersparnis in Ihrem Betrieb.",
  };
  if (goal && goalMap[goal]) ins.push(goalMap[goal]);
  if (websiteStatus === "keine")
    ins.push("Ohne professionelle Website verlieren Sie täglich potenzielle Kunden – sie finden stattdessen Ihre Mitbewerber.");
  else if (websiteStatus === "vorhanden-veraltet")
    ins.push("Ihre veraltete Website kostet aktiv Anfragen – ein modernes, conversion-optimiertes Design zahlt sich meist innerhalb weniger Monate aus.");
  if (googleProfile === "kein-profil" || googleProfile === "wenig-bewertungen")
    ins.push("Ihr Google-Profil lässt entscheidendes Lokalpotenzial ungenutzt – 46% aller Google-Suchen haben lokalen Bezug.");
  if (responseTime === "naechster-tag" || responseTime === "unregelmaessig")
    ins.push("Langsame Reaktionszeiten kosten Aufträge: Über 50% der Interessenten entscheiden sich für den Anbieter, der zuerst antwortet.");
  if (followup === "kaum" || followup === "kein-system")
    ins.push("Ohne systematisches Nachfassen verlieren Sie pro Monat mehrere potenzielle Kunden, die mit einem automatisierten System gehalten werden könnten.");
  if (weeklyHours === "ueber-20" || weeklyHours === "10-20")
    ins.push("Der hohe Anteil manueller Aufgaben bindet wertvolle Kapazitäten – Automatisierungen können hier direkt Zeit und Geld sparen.");
  if (ins.length < 3)
    ins.push("Eine Kombination aus professionellem Webauftritt und gezielter Automatisierung ist der effektivste Hebel für nachhaltiges Wachstum.");

  // ── Quick Wins ────────────────────────────────────────────────────────────────
  const qw: ReportQuickWin[] = [];
  const timeTasks = getA("time-wasters");
  if (websiteStatus === "keine")
    qw.push({ title: "Professionelle Website aufbauen", desc: "Eine conversion-optimierte Website ist die Grundlage für jeden weiteren Wachstumsschritt.", icon: "monitor" });
  else if (websiteStatus === "vorhanden-veraltet") {
    const pCnt = getA("website-problems").length;
    qw.push({ title: "Website-Optimierung", desc: `${pCnt > 0 ? pCnt + " erkannte Schwachstellen" : "Mehrere Punkte"} direkt beheben – mehr Anfragen in wenigen Wochen.`, icon: "monitor" });
  }
  if (responseTime !== "unter-1h" || followup === "kaum" || followup === "kein-system")
    qw.push({ title: "Automatische Lead-Nachverfolgung", desc: "Ein automatisiertes System antwortet sofort auf Anfragen und hält Leads aktiv – auch wenn Sie gerade nicht verfügbar sind.", icon: "bot" });
  if (timeTasks.length >= 2)
    qw.push({ title: `${timeTasks.length} Zeitfresser automatisieren`, desc: "Wiederkehrende Routineaufgaben durch smarte Workflows ersetzen – spart sofort wertvolle Arbeitszeit.", icon: "settings" });
  if (googleProfile === "kein-profil" || googleProfile === "vorhanden-ungepflegt")
    qw.push({ title: "Google-Profil optimieren", desc: "Ein vollständig gepflegtes Google-Unternehmensprofil erhöht Ihre lokale Sichtbarkeit messbar – und kostet nichts.", icon: "search" });
  if (qw.length < 3)
    qw.push({ title: "KI-gestützten Chatbot integrieren", desc: "Ein intelligenter Chatbot qualifiziert Interessenten rund um die Uhr und liefert Ihnen nur ernsthafte Anfragen.", icon: "bot" });

  // ── System Stack ──────────────────────────────────────────────────────────────
  const needsWebsite = websiteStatus === "keine" || websiteStatus === "vorhanden-veraltet";
  const needsAuto    = aiCurrent === "gar-nicht" || aiCurrent === "kaum" || weeklyHours === "ueber-20" || weeklyHours === "10-20";
  const needsLeads   = leadgenScore < 50 || followup === "kaum" || followup === "kein-system";
  const needsSEO     = seoScore < 50;

  let systemStack: ReportResult["systemStack"];
  if (needsWebsite && needsAuto && needsLeads) {
    systemStack = { kern: "Website + Lead-Automatisierung", erweiterungen: ["CRM-System", "Google-Profil-Optimierung", "KI-Chatbot"], systemName: "Vollständiges Digital-System" };
  } else if (needsWebsite && needsSEO) {
    systemStack = { kern: "Website + Lokales SEO", erweiterungen: ["Google-Profil-Management", "Conversion-Optimierung"], systemName: "Sichtbarkeits-System" };
  } else if (needsAuto && needsLeads) {
    systemStack = { kern: "Lead-Automation + CRM", erweiterungen: ["Terminbuchung", "Automatisches Nachfassen", "E-Mail-Sequenzen"], systemName: "Lead-Nurturing-System" };
  } else if (needsAuto) {
    systemStack = { kern: "Workflow-Automatisierung", erweiterungen: ["n8n / Make Integration", "Rechnungsautomatisierung", "Interne Prozesse"], systemName: "Prozess-Automatisierungs-System" };
  } else {
    systemStack = { kern: "Optimierung & Skalierung", erweiterungen: ["Performance-Marketing", "Conversion-Rate-Optimierung", "KI-Assistenten"], systemName: "Wachstums-System" };
  }

  // ── Service Recommendation ────────────────────────────────────────────────────
  let recommendedService      = "";
  let recommendedServiceIcon  = "";
  let recommendedServicePrice = "";
  let whyRecommended          = "";
  let ctaHeadline             = "";

  const noWebsite    = websiteStatus === "keine";
  const lowWebsite   = websiteScore <= 45;
  const highAutoPot  = automatisierungScore <= 35; // low score = still much to unlock
  const lowLeadgen   = leadgenScore <= 45;
  const manualHeavy  = weeklyHours === "ueber-20" || weeklyHours === "10-20";
  const noAI         = aiCurrent === "gar-nicht" || aiCurrent === "kaum";
  const slowResp     = responseTime === "naechster-tag" || responseTime === "unregelmaessig";
  const badFollowup  = followup === "kaum" || followup === "kein-system";

  if (noWebsite) {
    if (highAutoPot) {
      recommendedService = "Website + Automatisierungspaket"; recommendedServiceIcon = "combo"; recommendedServicePrice = "ab 1.900 €";
      whyRecommended = "Sie haben noch keine professionelle Website und gleichzeitig großes Automatisierungspotenzial. Das Kombipaket schafft beides auf einmal: eine Website, die Anfragen bringt, und Prozesse, die sich selbst erledigen.";
      ctaHeadline    = "Bereit für Ihre erste professionelle Online-Präsenz mit eingebauter Automatisierung?";
    } else {
      recommendedService = "Professionelle Unternehmenswebsite"; recommendedServiceIcon = "monitor"; recommendedServicePrice = "ab 1.200 €";
      whyRecommended = "Ohne Website verlieren Sie täglich Kunden an Mitbewerber. Eine klare, conversion-optimierte Website ist der wichtigste erste Schritt.";
      ctaHeadline    = "Lassen Sie uns Ihre neue Website planen – kostenlos und unverbindlich.";
    }
  } else if (lowWebsite && highAutoPot) {
    recommendedService = "Website-Redesign + Prozessautomatisierung"; recommendedServiceIcon = "combo"; recommendedServicePrice = "ab 1.900 €";
    whyRecommended = "Ihre Website hat konkrete Schwachstellen, die Anfragen kosten. Gleichzeitig steckt in Ihren Prozessen viel Potenzial für Zeitersparnis. Beides zusammen gelöst ergibt den größten Effekt.";
    ctaHeadline    = "Zwei Probleme, eine Lösung – schauen wir es uns gemeinsam an.";
  } else if (timeTasks.includes("termine") && noAI) {
    recommendedService = "Terminbuchung & Lead-Automatisierung"; recommendedServiceIcon = "bot"; recommendedServicePrice = "ab 800 €";
    whyRecommended = "Terminplanung ist einer Ihrer größten Zeitfresser – und gleichzeitig einer der einfachsten Prozesse zum Automatisieren. Ein System übernimmt Buchungen, Bestätigungen und Erinnerungen vollautomatisch.";
    ctaHeadline    = "Sparen Sie täglich 30–60 Minuten Terminkoordination. Ich zeige Ihnen wie.";
  } else if ((timeTasks.includes("angebote") || timeTasks.includes("rechnungen")) && manualHeavy) {
    recommendedService = "Angebots- & Rechnungsautomatisierung"; recommendedServiceIcon = "settings"; recommendedServicePrice = "ab 900 €";
    whyRecommended = "Sie investieren viele Stunden in Angebote und Rechnungen. Mit automatisierten Workflows werden diese nach Auftragsabschluss sofort erstellt, versendet und nachgefasst – ohne Ihren Eingriff.";
    ctaHeadline    = "Rechnungen und Angebote, die sich selbst erledigen – kostenlos besprechen.";
  } else if (slowResp || badFollowup) {
    recommendedService = "KI-Chatbot & automatische Lead-Nachverfolgung"; recommendedServiceIcon = "bot"; recommendedServicePrice = "ab 1.100 €";
    whyRecommended = badFollowup
      ? "Interessenten springen bei Ihnen regelmäßig ab. Ein automatisches Nachverfolgungssystem antwortet sofort und hält den Kontakt aufrecht – auch wenn Sie gerade nicht verfügbar sind."
      : "Langsame Reaktionszeiten kosten Aufträge. Über 50% der Interessenten entscheiden sich für den Anbieter, der zuerst antwortet.";
    ctaHeadline = "Kein Interessent soll mehr verloren gehen – lassen Sie uns das System bauen.";
  } else if (lowLeadgen) {
    recommendedService = "Lokales SEO & Leadgenerierung"; recommendedServiceIcon = "search"; recommendedServicePrice = "ab 1.400 €";
    whyRecommended = "Sie erhalten zu wenige Anfragen. Mit lokalem SEO und einer konvertierenden Landingpage werden Sie von Kunden gefunden, die aktiv nach Ihrem Angebot suchen.";
    ctaHeadline    = "Planbare Neukunden statt Zufalls-Anfragen – kostenlos besprechen.";
  } else if (manualHeavy && noAI) {
    recommendedService = "Workflow-Automatisierung mit KI (n8n / Make)"; recommendedServiceIcon = "settings"; recommendedServicePrice = "ab 800 €";
    whyRecommended = `Sie verbringen ${weeklyHours === "ueber-20" ? "über 20" : "10–20"} Stunden pro Woche mit wiederkehrenden Aufgaben – und nutzen noch keine Automatisierung. Das ist das größte sofort hebbare Potenzial in Ihrem Betrieb.`;
    ctaHeadline    = "Ich zeige Ihnen, welche Ihrer Aufgaben sich in dieser Woche automatisieren lassen.";
  } else {
    recommendedService = "KI-gestütztes Gesamtsystem"; recommendedServiceIcon = "combo"; recommendedServicePrice = "ab 1.500 €";
    whyRecommended = "Ihr Betrieb läuft solide. Der nächste Schritt ist ein integriertes System aus Website, Lead-Qualifizierung und Prozessautomatisierung – damit Wachstum planbar und ohne Mehraufwand entsteht.";
    ctaHeadline    = "Lassen Sie uns gemeinsam den nächsten Wachstumsschritt planen.";
  }

  return {
    scores: { website: websiteScore, seo: seoScore, leadgen: leadgenScore, kommunikation: kommunikationScore, prozesse: prozesseScore, automatisierung: automatisierungScore, digitalisierung: digitalisierungScore, gesamt },
    revenueImpact: { totalMonthlyLoss, timeWasteCost, leadLossCost, weeklyHoursSaved },
    insights: ins.slice(0, 5),
    quickWins: qw.slice(0, 3),
    longterm: [
      { title: "Integriertes Digital-System", desc: "Website, CRM, KI-Tools und Automatisierungen als ein durchgängiges System, das Leads automatisch qualifiziert, nachfasst und konvertiert." },
      { title: "Datengetriebene Skalierung", desc: "Messbare Kanäle aufbauen – SEO, Performance-Ads und Conversion-Optimierung schaffen planbare, skalierbare Anfragen ohne Mehraufwand." },
      { title: "Vollautomatisierte Prozesse", desc: "Schritt für Schritt manuelle Arbeit durch smarte Workflows ersetzen, bis Ihr Unternehmen mit maximaler Effizienz wächst." },
    ],
    recommendedService, recommendedServiceIcon, recommendedServicePrice, whyRecommended, ctaHeadline,
    systemStack,
  };
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function IcoGlobe() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#3D8B78" strokeWidth="1.8"/><path d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20" stroke="#3D8B78" strokeWidth="1.8"/></svg>);
}
function IcoLayout() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#3D8B78" strokeWidth="1.8"/><path d="M3 9h18M9 9v12" stroke="#3D8B78" strokeWidth="1.8"/></svg>);
}
function IcoZap() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="#3D8B78" strokeWidth="1.8" strokeLinejoin="round"/></svg>);
}
function IcoBot() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="3" stroke="#3D8B78" strokeWidth="1.8"/><circle cx="9" cy="14" r="1.5" fill="#3D8B78"/><circle cx="15" cy="14" r="1.5" fill="#3D8B78"/><path d="M12 3v5M8 21v1M16 21v1" stroke="#3D8B78" strokeWidth="1.8" strokeLinecap="round"/></svg>);
}
function IcoSettings() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="#3D8B78" strokeWidth="1.8"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="#3D8B78" strokeWidth="1.8"/></svg>);
}
function IcoSearch() {
  return (<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#3D8B78" strokeWidth="1.8"/><path d="M21 21l-4.35-4.35" stroke="#3D8B78" strokeWidth="1.8" strokeLinecap="round"/></svg>);
}
function IcoCheck({ color = "#3D8B78" }: { color?: string }) {
  return (<svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoArrow() {
  return (<svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
function IcoWA() {
  return (<svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>);
}
function IcoMail() {
  return (<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="3" stroke="#3D8B78" strokeWidth="1.8"/><path d="M2 8l10 7 10-7" stroke="#3D8B78" strokeWidth="1.8"/></svg>);
}
function IcoCalendar() {
  return (<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="3" stroke="#3D8B78" strokeWidth="1.8"/><path d="M3 10h18M8 2v4M16 2v4" stroke="#3D8B78" strokeWidth="1.8" strokeLinecap="round"/></svg>);
}
function IcoPhone() {
  return (<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#25D366" strokeWidth="1.8"/></svg>);
}

// ─── Reveal hook ──────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (inViewport) {
        // Already visible — don't hide, no animation needed
        el.classList.add("ready", "visible");
      } else {
        // Below fold — hide and animate on scroll
        el.classList.add("ready");
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#analyse", label: "Analyse" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#ueber-mich", label: "Über mich" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav className={`nc-nav${scrolled ? " scrolled" : ""}`}>
      <div className="nc-nav__inner">
        <a href="#" className="nc-nav__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.png" alt="Northcode Logo" width="36" height="36"
            style={{ objectFit: "contain", display: "block" }} />
          <span className="nc-logo-north">North</span><span className="nc-logo-code">code</span>
        </a>
        <ul className="nc-nav__links">
          {navLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <div className="nc-nav__cta">
          <a href="https://calendly.com/maxsel-100/30min?month=2026-06" target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-primary" style={{ padding: "9px 20px", fontSize: 14 }}>Kostenlos starten</a>
          <button className="nc-nav__hamburger" aria-label="Menü öffnen" onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`nc-nav__mobile${mobileOpen ? " open" : ""}`}>
        {navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>)}
        <a href="https://calendly.com/maxsel-100/30min?month=2026-06" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} style={{ color: "#3D8B78", fontWeight: 700 }}>→ Kostenlos starten</a>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="nc-hero" id="home">
      <div className="nc-container">
        <div className="nc-hero__inner">
          <div className="reveal">
            <div className="nc-hero__eyebrow">
              <div className="nc-hero__dot" />
              <span className="nc-hero__eyebrow-text">Northcode · Sichtbarkeit & Automatisierung für KMU</span>
            </div>
            <h1 style={{ lineHeight: 1.15 }}>
              Mehr Kunden gewinnen.
              <span className="nc-hero__typewriter-line">
                <Typewriter
                  text={[
                    "Weniger manuelle Arbeit.",
                    "Prozesse, die sich selbst erledigen.",
                    "Sichtbarkeit, die Vertrauen schafft.",
                    "Systeme, die für dich arbeiten.",
                    "Keine sinnlosen Routineaufgaben.",
                    "Wachstum ohne mehr Aufwand.",
                  ]}
                  speed={52}
                  deleteSpeed={26}
                  waitTime={2400}
                  initialDelay={700}
                  cursorChar="_"
                  cursorClassName="ml-0.5"
                  className="text-[#3D8B78]"
                />
              </span>
            </h1>
            <p className="nc-hero__sub">
              Northcode baut dir nicht einfach eine Website – ich analysiere, wo dein Unternehmen Zeit verliert und Kunden verliert, und löse beides: einen professionellen Auftritt, der Anfragen bringt, und Systeme, die repetitive Arbeit übernehmen.
            </p>
            <div className="nc-hero__actions">
              <a href="#analyse" className="nc-btn nc-btn-primary">Kostenloses Potenzial-Analyse <IcoArrow /></a>
              <a href="#portfolio" className="nc-btn nc-btn-secondary">Projekte ansehen</a>
            </div>
            <div className="nc-hero__trust">
              {[{ num: "5+", lbl: "Projekte abgeschlossen" }, { num: "100 %", lbl: "Kundenzufriedenheit" }, { num: "48h", lbl: "Ø Reaktionszeit" }].map((t) => (
                <div key={t.num}><div className="nc-hero__trust-num">{t.num}</div><div className="nc-hero__trust-lbl">{t.lbl}</div></div>
              ))}
            </div>
          </div>

          <div className="nc-hero__visual reveal reveal-delay-2">
            <div className="nc-hero__card-main">
              <div className="nc-hero__card-header">
                <div className="nc-hero__avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/portrait.png" alt="Esmail – Northcode" className="nc-hero__avatar-img" />
                </div>
                <div className="nc-hero__card-meta"><h4>Northcode by Esmail</h4><p>Webdesign · KI · Automatisierung</p></div>
              </div>
              <div className="nc-hero__metrics">
                {[{ val: "+127%", lbl: "Mehr Anfragen" }, { val: "−15h", lbl: "Manuelle Arbeit / Woche" }, { val: "0€", lbl: "Erstgespräch" }, { val: "24/7", lbl: "Systeme laufen durch" }].map((m) => (
                  <div key={m.val} className="nc-hero__metric"><div className="nc-hero__metric-val">{m.val}</div><div className="nc-hero__metric-lbl">{m.lbl}</div></div>
                ))}
              </div>
              <div className="nc-hero__services">
                {[{ icon: "🌐", label: "Websites & Landingpages" }, { icon: "⚙️", label: "Prozess- & KI-Automatisierung" }, { icon: "📊", label: "Business-Systeme & Workflows" }].map((s) => (
                  <div key={s.label} className="nc-hero__service-tag"><span>{s.icon}</span><span>{s.label}</span></div>
                ))}
              </div>
            </div>
            {/* Portrait — after card in DOM → renders in front, face visible */}
            <div className="nc-hero__portrait-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portrait-nobg.png"
                alt="Esmail – Northcode Gründer"
                className="nc-hero__portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  { bold: "Websites", rest: " die konvertieren" },
  { bold: "Prozesse", rest: " die sich automatisieren" },
  { bold: "Weniger", rest: " manuelle Routinearbeit" },
  { bold: "SEO", rest: " & lokale Sichtbarkeit" },
  { bold: "Persönlicher", rest: " Ansprechpartner" },
];

function TrustDot() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", marginInline: 36, opacity: 0.3, flexShrink: 0 }}>
      <svg width="5" height="5" viewBox="0 0 5 5"><circle cx="2.5" cy="2.5" r="2.5" fill="#8EC5B5"/></svg>
    </span>
  );
}

function TrustBar() {
  return (
    <div className="nc-trust-bar">
      <Marquee duration={36} pauseOnHover fade fadeAmount={6}>
        {TRUST_ITEMS.flatMap((item, i) => [
          <div
            key={`item-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "18px 0",
              whiteSpace: "nowrap",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {/* Check icon */}
            <span style={{ display: "flex", alignItems: "center", color: "#8EC5B5", flexShrink: 0 }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="rgba(142,197,181,0.15)"/>
                <path d="M8 12l3 3 5-5" stroke="#8EC5B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span style={{ fontSize: 17, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}>
              <span style={{ color: "white", fontWeight: 800 }}>{item.bold}</span>
              {item.rest}
            </span>
          </div>,
          <TrustDot key={`dot-${i}`} />,
        ])}
      </Marquee>
    </div>
  );
}

// ─── Leistungen ───────────────────────────────────────────────────────────────

function IcoMarketing() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      {/* Megaphone body */}
      <path d="M6 14h4v8H6a2 2 0 01-2-2v-4a2 2 0 012-2z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      {/* Horn flare */}
      <path d="M10 14L26 7v22L10 22V14z" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      {/* Sound waves */}
      <path d="M29 12c1.5 1.5 2 3.5 2 6s-.5 4.5-2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      {/* Lead dot / magnet */}
      <circle cx="8" cy="28" r="2.5" fill="currentColor" fillOpacity=".9"/>
      <path d="M10 22v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IcoOps() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      {/* Central gear */}
      <circle cx="18" cy="18" r="4" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.6"/>
      {/* Gear teeth */}
      <path d="M18 7v4M18 25v4M7 18h4M25 18h4M10.1 10.1l2.8 2.8M23.1 23.1l2.8 2.8M10.1 25.9l2.8-2.8M23.1 12.9l2.8-2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Flow arrow curving around */}
      <path d="M11 8c3-2 8-2.5 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path d="M25 28c-3 2-8 2.5-12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
    </svg>
  );
}

function IcoAI() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      {/* Brain outline – two lobes */}
      <path d="M18 10c-1-3-5-3.5-7-1.5S8 14 10 16c-3 1-3.5 5-1 7 1 1 2.5 1.5 4 1l1 3h8l1-3c1.5.5 3 0 4-1 2.5-2 2-6-1-7 2-2 2.5-5.5.5-7.5S19 7 18 10z" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      {/* Neural dots */}
      <circle cx="14" cy="16" r="1.4" fill="currentColor"/>
      <circle cx="18" cy="14" r="1.4" fill="currentColor"/>
      <circle cx="22" cy="16" r="1.4" fill="currentColor"/>
      <circle cx="16" cy="20" r="1.4" fill="currentColor"/>
      <circle cx="20" cy="20" r="1.4" fill="currentColor"/>
      {/* Connections */}
      <path d="M14 16l4-2M18 14l4 2M14 16l2 4M22 16l-2 4M16 20l4 0" stroke="currentColor" strokeWidth="1" strokeOpacity=".5"/>
    </svg>
  );
}

function Leistungen() {
  const services = [
    {
      Icon: IcoMarketing,
      number: "01",
      title: "Kunden gewinnen",
      subtitle: "Marketing-Systeme",
      desc: "Dein digitaler Auftritt wird zur aktiven Vertriebsmaschine. Website, Landingpage, SEO und Lead-Funnel arbeiten zusammen, damit potenzielle Kunden auf dich aufmerksam werden – und konvertieren.",
      items: ["Website & Landingpage", "Lokales SEO & Auffindbarkeit", "Lead-Funnel & Conversion", "Professioneller Markenauftritt"],
      color: "#3D8B78",
      bg: "rgba(61,139,120,0.07)",
      border: "rgba(61,139,120,0.2)",
    },
    {
      Icon: IcoOps,
      number: "02",
      title: "Arbeit automatisieren",
      subtitle: "Operations-Systeme",
      desc: "Wiederkehrende Aufgaben werden einmal automatisiert – und laufen dann dauerhaft ohne deinen Eingriff. Weniger manueller Aufwand, weniger Fehler, mehr Zeit für das Wesentliche.",
      items: ["Workflow-Automatisierung (n8n / Make)", "CRM-Integration & Datenpflege", "Telegram-Bots & Reporting", "Auto-Angebote, Rechnungen, Protokolle"],
      color: "#1A4A6E",
      bg: "rgba(26,74,110,0.07)",
      border: "rgba(26,74,110,0.18)",
    },
    {
      Icon: IcoAI,
      number: "03",
      title: "Kunden vorqualifizieren",
      subtitle: "AI Layer",
      desc: "Ein KI-System übernimmt den ersten Kontakt: Es stellt die richtigen Fragen, erkennt ernsthafte Interessenten und leitet sie gezielt weiter. Du sprichst nur noch mit Kunden, die wirklich passen.",
      items: ["KI-Chatbot & Gesprächsführung", "Lead-Filterung & Scoring", "CRM-Routing nach Qualität", "24/7 aktiv ohne Personalaufwand"],
      color: "#7C3AED",
      bg: "rgba(124,58,237,0.07)",
      border: "rgba(124,58,237,0.18)",
    },
  ];

  return (
    <section className="nc-section" id="leistungen">
      <div className="nc-container">
        <div className="nc-section-header reveal">
          <div className="nc-label"><span />Leistungen</div>
          <h2>Drei Hebel. Ein Ziel: dein Unternehmen wächst.</h2>
          <p>Mehr Sichtbarkeit nach außen, weniger unnötige Arbeit innen – und ein KI-Filter, der sicherstellt, dass nur die richtigen Anfragen bei dir landen.</p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .nc-ls__grid { grid-template-columns: 1fr !important; gap: 20px !important; }
            .nc-ls__card { padding: 24px 20px !important; }
          }
          @media (max-width: 480px) {
            .nc-ls__card { padding: 20px 16px !important; }
          }
        `}</style>

        <div className="nc-ls__grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {services.map((s, i) => (
            <CardContainer
              key={s.title}
              containerClassName={`reveal reveal-delay-${i + 1}`}
              className="w-full h-full"
            >
              <CardBody
                className="nc-ls__card w-full h-full"
                style={{
                  background: s.bg,
                  border: `1.5px solid ${s.border}`,
                  borderRadius: 20,
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 0 0 transparent",
                  transition: "box-shadow 280ms ease",
                }}
              >
                {/* Number watermark — stays flat at Z=0 */}
                <div style={{ position: "absolute", top: 20, right: 24, fontSize: "4.5rem", fontWeight: 900, color: s.color, opacity: 0.06, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>{s.number}</div>

                {/* Icon — pops out most */}
                <CardItem translateZ={55} className="block" style={{ marginBottom: 22 }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: `${s.color}14`, border: `1.5px solid ${s.color}25`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color }}>
                    <s.Icon />
                  </div>
                </CardItem>

                {/* Label + Title + Desc */}
                <CardItem translateZ={28} className="block">
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: s.color, marginBottom: 8 }}>{s.subtitle}</div>
                  <h3 style={{ color: "var(--nc-navy)", marginBottom: 14, fontSize: "1.25rem", lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--nc-text)", marginBottom: 24 }}>{s.desc}</p>
                </CardItem>

                {/* Feature list */}
                <CardItem translateZ={16} className="block" style={{ marginTop: "auto" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${s.color}14`, border: `1.5px solid ${s.color}30`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: 13.5, color: "var(--nc-text)", fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardItem>

                {/* CTA — pops out on hover */}
                <CardItem translateZ={38} className="block" style={{ marginTop: 28 }}>
                  <a href="#kontakt" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 700, color: s.color, textDecoration: "none", borderBottom: `2px solid transparent`, paddingBottom: 2, transition: "border-color 180ms", width: "fit-content" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderBottomColor = s.color)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderBottomColor = "transparent")}
                  >
                    Mehr dazu anfragen
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quiz score bar ───────────────────────────────────────────────────────────
function ScoreBar({ score, color, delay }: { score: number; color: string; delay: number }) {
  return (
    <div className="nc-quiz__bar-track">
      <motion.div
        className="nc-quiz__bar-fill"
        initial={{ width: 0 }}
        animate={{ width: `${score}%` }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
        style={{ background: color }}
      />
    </div>
  );
}

// ─── Quiz result icon mapper ──────────────────────────────────────────────────
function QWIcon({ type }: { type: string }) {
  const s = "rgba(61,139,120,0.9)";
  if (type === "monitor") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="3" stroke={s} strokeWidth="1.8"/><path d="M8 21h8M12 17v4" stroke={s} strokeWidth="1.8" strokeLinecap="round"/></svg>;
  if (type === "settings") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke={s} strokeWidth="1.8"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke={s} strokeWidth="1.8"/></svg>;
  if (type === "search") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke={s} strokeWidth="1.8"/><path d="M21 21l-4.35-4.35" stroke={s} strokeWidth="1.8" strokeLinecap="round"/></svg>;
  // bot (default)
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="13" rx="3" stroke={s} strokeWidth="1.8"/><circle cx="9" cy="14" r="1.5" fill={s}/><circle cx="15" cy="14" r="1.5" fill={s}/><path d="M12 3v5M8 21v1M16 21v1" stroke={s} strokeWidth="1.8" strokeLinecap="round"/></svg>;
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────
// Phase: 'quiz' → questions | 'contact' → lead form | 'result' → full report
type QuizPhase = 'quiz' | 'contact' | 'loading' | 'result';

const GOAL_LABELS: Record<string, string> = {
  "mehr-neukunden":          "Mehr Neukunden gewinnen",
  "team-entlasten":          "Mitarbeiter entlasten & Kosten senken",
  "skalieren":               "Umsatz skalieren ohne mehr Personal",
  "sichtbarkeit":            "Online-Sichtbarkeit aufbauen",
  "prozesse-digitalisieren": "Abläufe digitalisieren & modernisieren",
};

// Branch-specific scoring weights (7 dimensions, each branch has different priorities)
const BRANCH_WEIGHTS: Record<string, Record<string, number>> = {
  handwerk:       { website: 0.12, seo: 0.18, leadgen: 0.20, kommunikation: 0.15, prozesse: 0.15, automatisierung: 0.12, digitalisierung: 0.08 },
  dienstleistung: { website: 0.15, seo: 0.15, leadgen: 0.18, kommunikation: 0.18, prozesse: 0.12, automatisierung: 0.14, digitalisierung: 0.08 },
  gesundheit:     { website: 0.10, seo: 0.12, leadgen: 0.15, kommunikation: 0.20, prozesse: 0.18, automatisierung: 0.15, digitalisierung: 0.10 },
  immobilien:     { website: 0.15, seo: 0.15, leadgen: 0.22, kommunikation: 0.18, prozesse: 0.10, automatisierung: 0.12, digitalisierung: 0.08 },
  gastronomie:    { website: 0.15, seo: 0.20, leadgen: 0.12, kommunikation: 0.15, prozesse: 0.18, automatisierung: 0.12, digitalisierung: 0.08 },
  produktion:     { website: 0.08, seo: 0.08, leadgen: 0.12, kommunikation: 0.15, prozesse: 0.22, automatisierung: 0.20, digitalisierung: 0.15 },
  sonstiges:      { website: 0.13, seo: 0.13, leadgen: 0.17, kommunikation: 0.17, prozesse: 0.15, automatisierung: 0.13, digitalisierung: 0.12 },
};

// Average deal value per branch (€) – for Revenue Impact calculation
// Average deal/project value per branch (€) — realistic project sizes, not single transactions
const AVG_DEAL_VALUE: Record<string, number> = {
  handwerk:       2800,   // Renovierung, Einbau, Projektauftrag
  dienstleistung: 2200,   // Beratungsauftrag, Retainer, Projekt
  gesundheit:     750,    // Behandlungspaket, Patient-LTV
  immobilien:     9500,   // Provision auf Verkauf / Vermietung
  gastronomie:    550,    // Catering-Auftrag, Gruppenreservierung, Event
  produktion:     6500,   // B2B-Auftrag, Liefervertrag
  sonstiges:      1800,
};

// Unternehmer-Zeitwert pro Stunde (€) — Opportunitätskosten, nicht Mitarbeiterlohn
const AVG_HOURLY_RATE: Record<string, number> = {
  handwerk:       85,    // Meisterstundensatz inkl. Overhead
  dienstleistung: 130,   // Berater / Dienstleister
  gesundheit:     110,   // Praxis-Stundensatz
  immobilien:     160,   // Deal-basierter Zeitwert
  gastronomie:    120,   // Unternehmer-Zeitwert (nicht Tellerwäscher)
  produktion:     95,    // Fertigungsleiter / Inhaber
  sonstiges:      110,
};

function ServiceIconLarge({ type }: { type: string }) {
  const s = "#3D8B78";
  if (type === "monitor") return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="3" stroke={s} strokeWidth="1.6"/>
      <path d="M8 21h8M12 17v4" stroke={s} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
  if (type === "settings") return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke={s} strokeWidth="1.6"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke={s} strokeWidth="1.6"/>
    </svg>
  );
  if (type === "search") return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={s} strokeWidth="1.6"/>
      <path d="M21 21l-4.35-4.35" stroke={s} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
  if (type === "combo") return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="13" height="9" rx="2" stroke={s} strokeWidth="1.6"/>
      <path d="M8 16v3M5 19h6" stroke={s} strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="18" cy="15" r="4" stroke={s} strokeWidth="1.6"/>
      <path d="M18 13v2l1 1" stroke={s} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
  // bot (default)
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="8" width="18" height="13" rx="3" stroke={s} strokeWidth="1.6"/>
      <circle cx="9" cy="14" r="1.5" fill={s}/>
      <circle cx="15" cy="14" r="1.5" fill={s}/>
      <path d="M12 3v5M8 21v1M16 21v1" stroke={s} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function Quiz() {
  const [answers,      setAnswers]      = useState<AAnswers>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const justWentBack = useRef(false);
  const [phase,        setPhase]        = useState<QuizPhase>('quiz');
  const [report,       setReport]       = useState<ReportResult | null>(null);
  const [direction,    setDirection]    = useState<1 | -1>(1);

  // Contact form state
  const [cName,       setCName]       = useState('');
  const [cPhone,      setCPhone]      = useState('');
  const [cEmail,      setCEmail]      = useState('');
  const [submitting,  setSubmitting]  = useState(false);
  const [formError,   setFormError]   = useState('');

  // Blurred animated price (creates curiosity on result screen)
  const [blurPrice, setBlurPrice] = useState(1200);
  const [priceDir,  setPriceDir]  = useState<1|-1>(1);
  useEffect(() => {
    if (phase !== 'result') return;
    const vals = [850, 1350, 950, 1700, 1100, 2100, 800, 1550, 1900, 750, 1250, 1650];
    let idx = 0;
    const t = setInterval(() => {
      idx = (idx + 1) % vals.length;
      setPriceDir(vals[idx] > vals[(idx - 1 + vals.length) % vals.length] ? 1 : -1);
      setBlurPrice(vals[idx]);
    }, 700);
    return () => clearInterval(t);
  }, [phase]);

  // ── Submit handler: saves to Airtable + calls Claude AI ───────────
  const submitToAirtable = async (skip: boolean) => {
    if (!skip && (!cName.trim() || !cPhone.trim())) {
      setFormError('Bitte Name und Telefonnummer eingeben.');
      return;
    }
    setFormError('');
    setSubmitting(true);
    setPhase('loading');

    // Fire-and-forget Airtable save (no await – don't block AI call)
    if (!skip) {
      fetch('/api/analyse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:              cName.trim(),
          phone:             cPhone.trim(),
          email:             cEmail.trim(),
          branch:            answers['branch']            ?? '',
          teamSize:          answers['team-size']         ?? '',
          mainGoal:          answers['main-goal']         ?? '',
          hasWebsite:        answers['has-website']       ?? '',
          websiteProblems:   answers['website-problems']  ?? [],
          googleProfile:     answers['google-profile']    ?? '',
          monthlyInquiries:  answers['monthly-inquiries'] ?? '',
          responseTime:      answers['response-time']     ?? '',
          leadFollowup:      answers['lead-followup']     ?? '',
          timeWasters:       answers['time-wasters']      ?? [],
          weeklyHours:       answers['weekly-hours']      ?? '',
          onlineBooking:     answers['online-booking']    ?? '',
          digitalization:    answers['digitalization']    ?? '',
          aiCurrent:         answers['ai-current']        ?? '',
          growthTarget:      answers['growth-target']     ?? '',
          topPriority:       answers['top-priority']      ?? '',
          scores:            report?.scores,
          revenueImpact: report?.revenueImpact ? {
            totalMonthlyLoss: report.revenueImpact.totalMonthlyLoss,
            timeWasteCost:    report.revenueImpact.timeWasteCost,
            leadLossCost:     report.revenueImpact.leadLossCost,
          } : undefined,
          recommendedService: report?.recommendedService,
          systemStack:       report?.systemStack?.systemName,
        }),
      }).catch(() => {});
    }

    // Call Claude AI for personalised results
    let finalReport = report;
    try {
      const aiRes = await fetch('/api/analyse-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    cName.trim() || undefined,
          answers,
          scores:  report?.scores,
        }),
      });
      if (aiRes.ok) {
        const aiData = await aiRes.json();
        if (!aiData.error) {
          const merged = report ? { ...report, ...aiData } : report;
          setReport(merged);
          finalReport = merged;
        }
      }
    } catch { /* fall back to algorithmic report */ }

    // Send result email if email address was provided
    const emailAddr = cEmail.trim();
    if (!skip && emailAddr && emailAddr.includes('@') && finalReport) {
      fetch('/api/send-result-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to:                 emailAddr,
          name:               cName.trim(),
          scores:             finalReport.scores,
          revenueImpact:      finalReport.revenueImpact,
          recommendedService: finalReport.recommendedService,
          whyRecommended:     finalReport.whyRecommended,
          ctaHeadline:        finalReport.ctaHeadline,
          systemStack:        finalReport.systemStack,
          executiveSummary:   finalReport.executiveSummary,
        }),
      }).catch(() => {});
    }

    setSubmitting(false);
    setPhase('result');
  };

  // Visible questions (apply conditional showIf)
  const visibleQ = analyseQuestions.filter(q => {
    if (!q.showIf) return true;
    const val = answers[q.showIf.id];
    return typeof val === "string" ? val === q.showIf.value
         : Array.isArray(val)      ? val.includes(q.showIf.value)
         : false;
  });
  const total = visibleQ.length;
  const safeIdx = Math.min(currentIndex, total - 1);
  const currentQ = visibleQ[safeIdx];
  const progress = phase !== 'quiz' ? 100 : (safeIdx / total) * 100;

  const currentAns = answers[currentQ?.id];
  const hasAnswer = currentQ?.type === "multi"
    ? Array.isArray(currentAns) && (currentAns as string[]).length > 0
    : currentAns !== undefined;

  const handleSingle = useCallback((value: string) => {
    setAnswers(a => ({ ...a, [currentQ.id]: value }));
  }, [currentQ]);

  const handleMulti = useCallback((value: string) => {
    const cur = (answers[currentQ.id] as string[]) || [];
    if (value === "keines") {
      setAnswers(a => ({ ...a, [currentQ.id]: cur.includes("keines") ? [] : ["keines"] }));
      return;
    }
    const withoutKeines = cur.filter(v => v !== "keines");
    setAnswers(a => ({
      ...a,
      [currentQ.id]: withoutKeines.includes(value)
        ? withoutKeines.filter(v => v !== value)
        : [...withoutKeines, value],
    }));
  }, [answers, currentQ]);

  const handleNext = useCallback(() => {
    if (!hasAnswer) return;
    if (safeIdx < total - 1) {
      setDirection(1);
      setCurrentIndex(i => i + 1);
    } else {
      setReport(calculateReport(answers));
      setPhase('contact');
    }
  }, [hasAnswer, safeIdx, total, answers]);

  const handleBack = useCallback(() => {
    if (safeIdx > 0) {
      justWentBack.current = true;
      setTimeout(() => { justWentBack.current = false; }, 600);
      setDirection(-1);
      setCurrentIndex(i => i - 1);
    }
  }, [safeIdx]);

  // Auto-advance single-select after brief delay (skip if just went back)
  useEffect(() => {
    if (!currentQ || currentQ.type !== "single" || !hasAnswer || phase !== 'quiz') return;
    if (justWentBack.current) return;
    const t = setTimeout(() => handleNext(), 320);
    return () => clearTimeout(t);
  }, [currentAns, currentQ, hasAnswer, phase, handleNext]);

  // Section label derived data
  const sectionOrder = ["unternehmen","online","leads","prozesse","ki","ziele"];
  const activeSectionIdx = sectionOrder.indexOf(currentQ?.section ?? "unternehmen");
  const completedSections = visibleQ
    .slice(0, safeIdx)
    .map(q => q.section)
    .filter((s, i, arr) => arr.indexOf(s) === i);

  // Build personalised WhatsApp message
  const waMsg = report ? encodeURIComponent(
    `Hallo Esmail! Ich habe gerade die Potenzialanalyse auf Ihrer Website gemacht.` +
    (cName ? `\nMein Name: ${cName}` : '') +
    (cPhone ? `\nMeine Nummer: ${cPhone}` : '') +
    `\nMein wichtigstes Ziel: ${GOAL_LABELS[answers['main-goal'] as string] ?? ''}` +
    `\nEmpfohlene Lösung: ${report.recommendedService}` +
    `\nGesamtpotenzial: ${report.scores.gesamt}/100` +
    `\n\nIch würde das gerne besprechen.`
  ) : '';

  return (
    <div className="nc-quiz__glass">

      {/* ── Top progress bar ── */}
      <div className="nc-quiz__progress-track">
        <motion.div
          className="nc-quiz__progress-fill"
          animate={{ width: `${phase !== 'quiz' ? 100 : progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* ── Section + step meta ── */}
      {phase === 'quiz' && (
        <div className="nc-quiz__meta-row">
          <span className="nc-quiz__section-pill">
            {sectionOrder.map((s, i) => (
              <span
                key={s}
                className={`nc-quiz__section-dot${completedSections.includes(s) ? " done" : ""}${i === activeSectionIdx ? " active" : ""}`}
                aria-hidden="true"
              />
            ))}
          </span>
          <span className="nc-quiz__step-count">
            {currentQ?.sectionLabel}&nbsp;·&nbsp;{safeIdx + 1}&nbsp;/&nbsp;{total}
          </span>
        </div>
      )}

      {/* ── Animated question / contact / result ── */}
      <AnimatePresence mode="wait" custom={direction}>

        {/* ── PHASE: quiz ── */}
        {phase === 'quiz' ? (
          <motion.div
            key={`q-${safeIdx}`}
            custom={direction}
            variants={{
              enter:  (d: number) => ({ opacity: 0, x: d * 30 }),
              center: { opacity: 1, x: 0 },
              exit:   (d: number) => ({ opacity: 0, x: d * -30 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="nc-quiz__question">{currentQ?.text}</p>
            {currentQ?.hint && <p className="nc-quiz__hint">{currentQ.hint}</p>}

            <div className="nc-quiz__options">
              {currentQ?.options.map((opt, i) => {
                const isMulti = currentQ.type === "multi";
                const sel = isMulti
                  ? ((currentAns as string[]) || []).includes(opt.value)
                  : currentAns === opt.value;
                return (
                  <motion.button
                    key={opt.value}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.045 + 0.06, duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                    className={`nc-quiz__option${sel ? " selected" : ""}${isMulti ? " multi" : ""}`}
                    onClick={() => isMulti ? handleMulti(opt.value) : handleSingle(opt.value)}
                  >
                    {isMulti ? (
                      <span className={`nc-quiz__checkbox${sel ? " checked" : ""}`}>
                        {sel && <svg viewBox="0 0 12 12" width="10" height="10" fill="none"><path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </span>
                    ) : (
                      <div className="nc-quiz__radio" />
                    )}
                    {opt.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="nc-quiz__nav">
              {safeIdx > 0 && (
                <button className="nc-quiz__back" onClick={handleBack} aria-label="Zurück">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Zurück
                </button>
              )}
              {currentQ?.type === "multi" && (
                <button className="nc-quiz__next" disabled={!hasAnswer} onClick={handleNext}>
                  {safeIdx < total - 1 ? "Weiter" : "Ergebnis anzeigen"} <IcoArrow />
                </button>
              )}
            </div>
          </motion.div>

        /* ── PHASE: contact form ── */
        ) : phase === 'contact' && report ? (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >

            {/* ── Blurred locked preview ── */}
            <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", marginBottom: 22 }}>

              {/* Blurred content */}
              <div style={{ filter: "blur(5px)", userSelect: "none", pointerEvents: "none", padding: "16px", background: "rgba(61,139,120,0.07)", border: "1px solid rgba(61,139,120,0.2)", borderRadius: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", border: "3px solid #3D8B78", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "rgba(61,139,120,0.15)" }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "white" }}>{report.scores.gesamt}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "white", marginBottom: 2 }}>{report.scores.gesamt}% Potenzial identifiziert</div>
                    <div style={{ fontSize: 11, color: "#8EC5B5" }}>{report.recommendedService}</div>
                  </div>
                </div>
                {report.insights.slice(0, 2).map((ins, i) => (
                  <div key={i} style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 6, paddingLeft: 10, borderLeft: "2px solid rgba(61,139,120,0.5)" }}>{ins}</div>
                ))}
                <div style={{ marginTop: 10, padding: "10px 12px", background: "rgba(255,255,255,0.05)", borderRadius: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "white", marginBottom: 3 }}>{report.recommendedService}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{(report.whyRecommended ?? "").slice(0, 90)}…</div>
                </div>
              </div>

              {/* Gradient + lock overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,18,14,0) 10%, rgba(8,18,14,0.65) 45%, rgba(8,18,14,0.97) 100%)", borderRadius: 14, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: 18 }}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.25, duration: 0.4, ease: [0.22,1,0.36,1] }}
                  style={{ width: 40, height: 40, background: "rgba(61,139,120,0.22)", border: "1.5px solid rgba(61,139,120,0.55)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="11" rx="2" stroke="#8EC5B5" strokeWidth="2"/><path d="M8 11V7a4 4 0 018 0v4" stroke="#8EC5B5" strokeWidth="2" strokeLinecap="round"/></svg>
                </motion.div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 3 }}>Analyse gesperrt</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textAlign: "center", maxWidth: 220 }}>Tragen Sie Ihre Daten ein, um Ihre persönliche Auswertung zu sehen</div>
              </div>
            </div>

            {/* ── Input fields ── */}
            <style>{`
              .nc-cf-label { display: block; font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.5); letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 5px; }
              .nc-cf { width: 100%; background: rgba(8,18,14,0.7); border: 1.5px solid rgba(61,139,120,0.25); border-radius: 10px; padding: 13px 16px; color: white; font-size: 15px; font-family: 'Plus Jakarta Sans', sans-serif; outline: none; transition: border-color 200ms, background 200ms; box-sizing: border-box; }
              .nc-cf:focus { border-color: rgba(61,139,120,0.7); background: rgba(8,18,14,0.9); }
              .nc-cf::placeholder { color: rgba(255,255,255,0.28); }
            `}</style>

            <div className="nc-quiz__contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
              <div>
                <label className="nc-cf-label">Name *</label>
                <input className="nc-cf" type="text" placeholder="Max Mustermann" value={cName} onChange={e => setCName(e.target.value)} autoComplete="name" />
              </div>
              <div>
                <label className="nc-cf-label">Telefon *</label>
                <input className="nc-cf" type="tel" placeholder="0176 12345678" value={cPhone} onChange={e => setCPhone(e.target.value)} autoComplete="tel" />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label className="nc-cf-label">E-Mail <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 11 }}>(optional)</span></label>
              <input className="nc-cf" type="email" placeholder="max@beispiel.de" value={cEmail} onChange={e => setCEmail(e.target.value)} autoComplete="email" />
            </div>

            {formError && (
              <p style={{ color: "#f87171", fontSize: 13, marginBottom: 12, marginTop: -8 }}>{formError}</p>
            )}

            <button
              onClick={() => submitToAirtable(false)}
              disabled={submitting}
              style={{
                width: "100%", padding: "15px 20px",
                background: submitting ? "rgba(61,139,120,0.5)" : "linear-gradient(135deg,#3D8B78,#2d7a68)",
                color: "white", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15,
                cursor: submitting ? "not-allowed" : "pointer", display: "flex", alignItems: "center",
                justifyContent: "center", gap: 8, fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "opacity 200ms",
              }}
            >
              {submitting ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 1s linear infinite" }}>
                    <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/>
                    <path d="M12 3a9 9 0 019 9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  KI erstellt Ihre Analyse…
                </>
              ) : (
                <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ marginRight: 2 }}><rect x="5" y="11" width="14" height="11" rx="2" stroke="white" strokeWidth="2"/><path d="M8 11V7a4 4 0 018 0v4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>Analyse entsperren <IcoArrow /></>
              )}
            </button>
          </motion.div>

        /* ── PHASE: loading (KI analysiert) ── */
        ) : phase === 'loading' ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', padding: '52px 20px 48px' }}
          >
            <div style={{ position: 'relative', width: 72, height: 72, margin: '0 auto 28px' }}>
              <svg viewBox="0 0 72 72" width="72" height="72" style={{ position: 'absolute', inset: 0 }}>
                <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(61,139,120,0.15)" strokeWidth="5"/>
                <motion.circle
                  cx="36" cy="36" r="30" fill="none" stroke="#3D8B78" strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="60 130"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '36px 36px' }}
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a2 2 0 012 2v2a2 2 0 01-4 0V4a2 2 0 012-2zM12 18a2 2 0 012 2v.5a2 2 0 01-4 0V20a2 2 0 012-2zM4.22 4.22a2 2 0 012.83 0l1.41 1.42a2 2 0 01-2.83 2.83L4.22 7.05a2 2 0 010-2.83zM15.54 15.54a2 2 0 012.83 0l1.41 1.41a2 2 0 01-2.83 2.83l-1.41-1.41a2 2 0 010-2.83zM2 12a2 2 0 012-2h2a2 2 0 010 4H4a2 2 0 01-2-2zM18 12a2 2 0 012-2h.5a2 2 0 010 4H20a2 2 0 01-2-2zM4.22 19.78a2 2 0 010-2.83l1.42-1.41a2 2 0 012.83 2.83l-1.42 1.41a2 2 0 01-2.83 0zM15.54 8.46a2 2 0 010-2.83l1.41-1.42a2 2 0 012.83 2.83l-1.41 1.42a2 2 0 01-2.83 0z" stroke="#3D8B78" strokeWidth="0" fill="#3D8B78" fillOpacity="0.7"/>
                </svg>
              </div>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 10 }}>
              KI analysiert Ihre Situation…
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 280, margin: '0 auto' }}>
              Einen Moment – wir erstellen Ihre persönliche Empfehlung basierend auf Ihren Antworten.
            </p>
          </motion.div>

        /* ── PHASE: result ── */
        ) : phase === 'result' && report ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="nc-quiz__report"
          >
            {/* Header */}
            <div className="nc-quiz__report-head">
              <div className="nc-quiz__report-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M12 3a9 9 0 100 18A9 9 0 0012 3z" stroke="#3D8B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Analyse abgeschlossen
              </div>
              <h3>{cName ? `${cName}, hier ist Ihr persönlicher Potenzialbericht` : 'Ihr persönlicher Potenzialbericht'}</h3>
              <p>Basierend auf Ihren Antworten wurden {report.insights.length} konkrete Optimierungsbereiche identifiziert.</p>
            </div>

            {/* Executive summary (from AI) */}
            {report.executiveSummary && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: "rgba(61,139,120,0.07)", border: "1px solid rgba(61,139,120,0.2)", borderRadius: 12, padding: "13px 16px", marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, fontStyle: "italic" }}
              >
                {report.executiveSummary}
              </motion.div>
            )}

            {/* Overall score ring */}
            <div className="nc-quiz__gesamt">
              <div className="nc-quiz__gesamt-ring">
                <svg viewBox="0 0 80 80" width="80" height="80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8"/>
                  <motion.circle
                    cx="40" cy="40" r="34" fill="none"
                    stroke="#3D8B78" strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 34 * (1 - report.scores.gesamt / 100) }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <div className="nc-quiz__gesamt-val">
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    {report.scores.gesamt}
                  </motion.span>
                  <small>/ 100</small>
                </div>
              </div>
              <div className="nc-quiz__gesamt-text">
                <strong>Gesamtpotenzial</strong>
                <span>Optimierungspotenzial erkannt</span>
              </div>
            </div>

            {/* Revenue Impact card */}
            {report.revenueImpact?.totalMonthlyLoss > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: "rgba(229,80,80,0.07)", border: "1.5px solid rgba(229,80,80,0.28)", borderRadius: 14, padding: "18px 18px 14px", marginTop: 4, marginBottom: 4 }}
              >
                {/* Headline */}
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(248,113,113,0.8)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                  Was das Ihr Unternehmen kostet – jeden Monat
                </div>

                {/* Big total */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                  <span className="nc-quiz__revenue-total" style={{ fontSize: 36, fontWeight: 900, color: "#f87171", lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {report.revenueImpact.totalMonthlyLoss.toLocaleString("de-DE")} €
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>/ Monat</span>
                </div>

                {/* Breakdown */}
                <div className="nc-quiz__revenue-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                  <div style={{ background: "rgba(0,0,0,0.18)", borderRadius: 10, padding: "10px 12px" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.38)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>Zeitverlust-Kosten</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#fca5a5", lineHeight: 1 }}>{report.revenueImpact.timeWasteCost.toLocaleString("de-DE")} €</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 3 }}>manuelle Aufgaben × Stundensatz</div>
                  </div>
                  <div style={{ background: "rgba(0,0,0,0.18)", borderRadius: 10, padding: "10px 12px" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.38)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>Entgangene Aufträge</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#fca5a5", lineHeight: 1 }}>{report.revenueImpact.leadLossCost.toLocaleString("de-DE")} €</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 3 }}>Anfragen die verloren gehen</div>
                  </div>
                </div>

                {/* Hours saved */}
                {report.revenueImpact.weeklyHoursSaved > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(91,229,181,0.12)", border: "1px solid rgba(91,229,181,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2v10l4 4M22 12a10 10 0 11-20 0 10 10 0 0120 0z" stroke="#5BE5B5" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                      Mit Automatisierung könnten Sie
                      {" "}<strong style={{ color: "#5BE5B5" }}>{report.revenueImpact.weeklyHoursSaved} Stunden/Woche</strong>
                      {" "}zurückgewinnen
                    </span>
                  </div>
                )}
              </motion.div>
            )}

            {/* Insights */}
            <div className="nc-quiz__section-block">
              <div className="nc-quiz__block-label">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6l-.7.5V18a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.5l-.7-.5A7 7 0 0112 2zM9 21h6" stroke="#8EC5B5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Wichtigste Erkenntnisse
              </div>
              <ul className="nc-quiz__insights-list">
                {report.insights.map((ins, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.8, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="nc-quiz__ins-dot" />
                    {ins}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick wins */}
            <div className="nc-quiz__section-block">
              <div className="nc-quiz__block-label">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="#8EC5B5" strokeWidth="1.8" strokeLinejoin="round"/></svg>
                Schnellste Verbesserungen
              </div>
              <div className="nc-quiz__qw-grid">
                {report.quickWins.map((qw, i) => (
                  <motion.div key={qw.title} className="nc-quiz__qw-card"
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 1.0, duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="nc-quiz__qw-icon"><QWIcon type={qw.icon} /></div>
                    <div className="nc-quiz__qw-title">{qw.title}</div>
                    <div className="nc-quiz__qw-desc">{qw.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Personalisierte Service-Empfehlung ── */}
            <motion.div
              className="nc-quiz__section-block"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: "rgba(61,139,120,0.08)", border: "1.5px solid rgba(61,139,120,0.25)", borderRadius: 14, padding: "20px 20px 16px" }}
            >
              <div className="nc-quiz__block-label" style={{ marginBottom: 14 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#8EC5B5" strokeWidth="1.8" strokeLinejoin="round"/></svg>
                Empfohlene Lösung für Sie
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(61,139,120,0.15)", border: "1.5px solid rgba(61,139,120,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ServiceIconLarge type={report.recommendedServiceIcon} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 4, lineHeight: 1.3 }}>{report.recommendedService}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    {/* Blurred fluctuating price – creates curiosity */}
                    <div style={{ position: "relative", overflow: "hidden", borderRadius: 6 }}>
                      <motion.span
                        key={blurPrice}
                        initial={{ y: priceDir === 1 ? 8 : -8, opacity: 0.6 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          display: "block",
                          fontSize: 14,
                          fontWeight: 800,
                          color: "#a8d5c8",
                          filter: "blur(7px)",
                          userSelect: "none",
                          pointerEvents: "none",
                          letterSpacing: "0.01em",
                        }}
                      >
                        ab {blurPrice.toLocaleString("de-DE")} €
                      </motion.span>
                    </div>
                    <span style={{ background: "rgba(61,139,120,0.18)", border: "1px solid rgba(61,139,120,0.45)", color: "#8EC5B5", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 20, letterSpacing: "0.03em", whiteSpace: "nowrap" }}>
                      ✦ Eröffnungsangebot
                    </span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>Kostenloses Erstgespräch</span>
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{report.whyRecommended}</div>
                </div>
              </div>
            </motion.div>

            {/* System Stack */}
            {report.systemStack && (
              <motion.div
                className="nc-quiz__section-block"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: "rgba(138,123,232,0.07)", border: "1.5px solid rgba(138,123,232,0.22)", borderRadius: 14, padding: "18px 20px" }}
              >
                <div className="nc-quiz__block-label" style={{ marginBottom: 12 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#8A7BE8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ color: "#b8aef5" }}>{report.systemStack.systemName}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ background: "rgba(138,123,232,0.18)", border: "1px solid rgba(138,123,232,0.4)", color: "#b8aef5", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>
                    ● {report.systemStack.kern}
                  </span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Kernsystem</span>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {report.systemStack.erweiterungen.map((ext) => (
                    <span key={ext} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)", fontSize: 11, fontWeight: 500, padding: "3px 10px", borderRadius: 16 }}>
                      + {ext}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Long-term */}
            <div className="nc-quiz__section-block">
              <div className="nc-quiz__block-label">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M2 12h2m16 0h2M12 2v2m0 16v2M5.6 5.6l1.4 1.4m9.4 9.4 1.4 1.4M5.6 18.4l1.4-1.4M16.6 7l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#8EC5B5" strokeWidth="1.8" strokeLinecap="round"/></svg>
                Langfristige Chancen
              </div>
              <div className="nc-quiz__lt-list">
                {report.longterm.map((lt, i) => (
                  <motion.div key={lt.title} className="nc-quiz__lt-item"
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.09 + 1.3, duration: 0.33, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="nc-quiz__lt-arrow"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="#3D8B78" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    <div>
                      <div className="nc-quiz__lt-title">{lt.title}</div>
                      <div className="nc-quiz__lt-desc">{lt.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div className="nc-quiz__cta-wrap"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="nc-quiz__cta-note">{report.ctaHeadline}</p>
              <a href="https://calendly.com/maxsel-100/30min?month=2026-06" target="_blank" rel="noopener noreferrer" className="nc-quiz__cta-primary">
                <IcoCalendar /> Kostenloses Gespräch buchen (30 Min.)
              </a>
              <a href={`https://wa.me/491786270048?text=${waMsg}`}
                target="_blank" rel="noopener noreferrer" className="nc-quiz__cta-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A12 12 0 003.46 20.53L2 22l1.47-1.47A12 12 0 1020.52 3.48Zm-8.52 17a10 10 0 01-5.46-1.61l-.39-.24-2.54.67.68-2.5-.25-.4A10 10 0 1112 20.5Zm5.47-7.42c-.3-.15-1.77-.87-2.05-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.18 8.18 0 01-2.41-1.49 9.08 9.08 0 01-1.67-2.08c-.17-.3 0-.46.13-.61s.3-.35.45-.52a2 2 0 00.3-.5.55.55 0 00-.02-.52c-.07-.15-.67-1.62-.92-2.22s-.49-.5-.67-.51h-.57a1.1 1.1 0 00-.8.37A3.35 3.35 0 007 9a5.82 5.82 0 001.22 3.08 13.33 13.33 0 005.12 4.5 15.3 15.3 0 001.71.63 4.1 4.1 0 001.89.12 3.08 3.08 0 002.02-1.43 2.5 2.5 0 00.17-1.43c-.07-.13-.27-.2-.57-.35Z"/></svg>
                Per WhatsApp schreiben
              </a>
              {cPhone && (
                <a href={`tel:${cPhone.replace(/\s/g, '')}`} className="nc-quiz__cta-secondary" style={{ marginTop: 6 }}>
                  <IcoPhone /> Direkt anrufen: {cPhone}
                </a>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// ─── Analyse ─────────────────────────────────────────────────────────────────
function Analyse() {
  return (
    <section className="nc-section nc-analyse" id="analyse">
      {/* Orb backdrop — has its own overflow:hidden so orbs don't bleed */}
      <div className="nc-analyse__backdrop" aria-hidden="true">
        <div className="nc-analyse__orb nc-analyse__orb--1" />
        <div className="nc-analyse__orb nc-analyse__orb--2" />
      </div>
      {/* Wave top — page background bleeds into section */}
      <div className="nc-analyse__wave nc-analyse__wave--top" aria-hidden="true">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,56 1080,0 1440,36 L1440,0 Z" fill="#F5FAFA"/>
        </svg>
      </div>
      {/* Wave bottom */}
      <div className="nc-analyse__wave nc-analyse__wave--bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,36 C480,0 960,56 1440,20 L1440,56 L0,56 Z" fill="#F5FAFA"/>
        </svg>
      </div>
      <div className="nc-container">
        <div className="nc-analyse__inner">
          <motion.div
            className="reveal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] as const } } }}>
              <div className="nc-label" style={{ color: "#8EC5B5" }}><span style={{ background: "#8EC5B5" }} />Kostenlose Potenzial-Analyse</div>
            </motion.div>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] as const } } }}>
              Finden Sie heraus, wo Ihr Unternehmen Zeit, Kunden oder Umsatz verliert.
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] as const } } }}
              style={{ color: "rgba(255,255,255,.65)" }}
            >
              Unsere kostenlose Potenzialanalyse zeigt Ihnen anhand von 10 gezielten Fragen, wo die größten Hebel für mehr Sichtbarkeit, effizientere Prozesse und intelligente Automatisierung liegen.
            </motion.p>
            <motion.ul
              className="nc-analyse__bullets"
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as const } } }}
            >
              <li>Sichtbarkeit: wirst du von Kunden gefunden?</li>
              <li>Effizienz: welche Abläufe fressen deine Zeit?</li>
              <li>Personalisiertes Ergebnis in 2 Minuten</li>
              <li>Kostenlos, unverbindlich, ohne Anmeldung</li>
            </motion.ul>
          </motion.div>
          <motion.div
            className="reveal reveal-delay-2"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <Quiz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
interface PortfolioProject {
  cat: string;
  title: string;
  desc: string;
  tags: string[];
  thumb: string;
  icon: React.ReactNode;
  href: string | null;
  stat?: { val: string; lbl: string };
}

function Portfolio() {
  const projects: PortfolioProject[] = [
    {
      cat: "KI-Chatbot · Voice AI · Lead-System",
      title: "Solar Lead System – KI-gestützte Leadgenerierung",
      desc: "KI-Chatbot + Voice AI Agent + automatische CRM-Übergabe für ein Solarunternehmen. Der Chatbot berechnet per Google Solar API sofort eine personalisierte Einschätzung. Closing-Rate +500 %.",
      tags: ["Mehr Abschlüsse", "Sofort erreichbar", "24/7 aktiv"],
      thumb: "Solar",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="88" height="88">
          <circle cx="40" cy="40" r="13" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="40" y1="5" x2="40" y2="17" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="40" y1="63" x2="40" y2="75" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="5" y1="40" x2="17" y2="40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="63" y1="40" x2="75" y2="40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="15.1" y1="15.1" x2="23.3" y2="23.3" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="56.7" y1="56.7" x2="64.9" y2="64.9" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="64.9" y1="15.1" x2="56.7" y2="23.3" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="23.3" y1="56.7" x2="15.1" y2="64.9" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      href: "/portfolio/solar-leads",
      stat: { val: "+500 %", lbl: "Closing-Rate" },
    },
    {
      cat: "Automatisiertes Finanz-Workflow-System",
      title: "Ausgaben erfassen – ohne Tabellen, ohne Aufwand",
      desc: "Foto vom Beleg schicken, fertig. Das System erkennt Betrag und Kategorie automatisch und hält alles ordentlich fest.",
      tags: ["Zeit gespart", "Fehler eliminiert", "Automatisch dokumentiert"],
      thumb: "Telegram",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
          <rect x="18" y="10" width="44" height="56" rx="6" stroke="white" strokeWidth="3"/>
          <line x1="28" y1="27" x2="52" y2="27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="28" y1="37" x2="52" y2="37" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="28" y1="47" x2="40" y2="47" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="54" cy="58" r="11" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2.5"/>
          <path d="M49 58 L53 62 L60 54" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      href: "/portfolio/telegram-expenses",
      stat: { val: "−90 %", lbl: "Manuelle Eingabe" },
    },
    {
      cat: "Digitales Vertriebs- & Kooperationssystem",
      title: "Neue Standorte gewinnen – mit einer Website, die verkauft",
      desc: "Interessierte Standortpartner finden sofort alles, was sie brauchen – und können direkt anfragen. Keine langen E-Mail-Ketten mehr.",
      tags: ["Mehr Anfragen", "Klar positioniert", "Professioneller Auftritt"],
      thumb: "Pizza",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="82" height="82">
          <rect x="20" y="36" width="40" height="28" rx="3" stroke="white" strokeWidth="3"/>
          <path d="M13 36 L40 14 L67 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="32" y="50" width="16" height="14" rx="2" stroke="white" strokeWidth="2.5"/>
          <line x1="40" y1="50" x2="40" y2="64" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      href: "/portfolio/pizza-vending",
      stat: { val: "24/7", lbl: "Lead-Erfassung" },
    },
    {
      cat: "Digitale Kundenplattform",
      title: "Weniger Anrufe, mehr Kunden – die Website, die antwortet",
      desc: "Preise, Leistungen und Öffnungszeiten online sichtbar. Ein KI-Assistent beantwortet Standardfragen automatisch – damit der Inhaber sich aufs Wesentliche konzentrieren kann.",
      tags: ["Vertrauen aufgebaut", "Weniger Anrufe", "24/7 KI-Assistent"],
      thumb: "Repair",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="84" height="84">
          <path d="M48 14 C54 14 60 18 62 24 L54 32 L58 36 L66 28 C68 34 66 42 60 46 C54 50 46 48 42 44 L22 64 C19.8 66.2 16.2 66.2 14 64 C11.8 61.8 11.8 58.2 14 56 L34 36 C30 32 28 24 32 18 C34 15 41 12 48 14 Z" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="60" r="3" fill="white" opacity="0.6"/>
        </svg>
      ),
      href: "/portfolio/techrepair",
      stat: { val: "−70 %", lbl: "Standardanrufe" },
    },
    {
      cat: "KI Multi-Agent System",
      title: "Ein Befehl – das komplette Meeting erledigt sich selbst",
      desc: "Teilnehmer suchen, Termin buchen, Unterlagen vorbereiten, Protokoll erstellen: Ein KI-System übernimmt den gesamten Ablauf im Hintergrund.",
      tags: ["Zeit zurückgewonnen", "Nichts vergessen", "Skalierbar für Teams"],
      thumb: "KI",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="86" height="86">
          <circle cx="40" cy="22" r="8" stroke="white" strokeWidth="2.8"/>
          <circle cx="18" cy="58" r="8" stroke="white" strokeWidth="2.8"/>
          <circle cx="62" cy="58" r="8" stroke="white" strokeWidth="2.8"/>
          <line x1="40" y1="30" x2="18" y2="50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="40" y1="30" x2="62" y2="50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="26" y1="58" x2="54" y2="58" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="40" cy="22" r="3" fill="white" opacity="0.5"/>
          <circle cx="18" cy="58" r="3" fill="white" opacity="0.5"/>
          <circle cx="62" cy="58" r="3" fill="white" opacity="0.5"/>
        </svg>
      ),
      href: "/portfolio/meeting-workforce",
      stat: { val: "6 Agenten", lbl: "parallel aktiv" },
    },
  ];

  return (
    <section className="nc-section" id="portfolio">
      <div className="nc-container">
        <div className="nc-section-header reveal">
          <div className="nc-label"><span />Portfolio</div>
          <h2>Sichtbarkeit aufgebaut. Arbeit wegautomatisiert.</h2>
          <p>Beides zusammen – das ist Northcode. Hier sind reale Projekte, die zeigen, was möglich ist.</p>
        </div>
        <motion.div
          className="nc-portfolio__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
        >
          {projects.map((p) => (
            /* motion.div = grid child for nth-child CSS + entrance animation */
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <CardContainer containerClassName="w-full h-full" className="nc-portfolio__card w-full h-full flex-col items-stretch justify-start">
                <CardBody className="w-full h-full flex flex-col">
                  {/* Thumb — pops out */}
                  <CardItem translateZ={18} className="block w-full">
                    <div className="nc-portfolio__thumb">
                      <div className="nc-portfolio__thumb-icon">{p.icon}</div>
                      {p.stat && (
                        <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 10, padding: "6px 12px", textAlign: "center" }}>
                          <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>{p.stat.val}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{p.stat.lbl}</div>
                        </div>
                      )}
                      {p.href && (
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 200ms" }} className="nc-portfolio__overlay">
                          <a href={p.href} style={{ background: "var(--nc-accent)", color: "white", padding: "11px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                            Case Study lesen →
                          </a>
                        </div>
                      )}
                    </div>
                  </CardItem>
                  {/* Body content */}
                  <CardItem translateZ={10} className="block w-full flex-1">
                    <div className="nc-portfolio__body">
                      <div className="nc-portfolio__cat">{p.cat}</div>
                      <h3>{p.title}</h3>
                      <p style={{ fontSize: 14, marginBottom: 14 }}>{p.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: p.href ? 16 : 0 }}>
                        {p.tags.map((t) => <span key={t} className="nc-badge">{t}</span>)}
                      </div>
                      {p.href && (
                        <a href={p.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: "var(--nc-accent)", textDecoration: "none", marginTop: 4, padding: "8px 0", borderBottom: "2px solid transparent", transition: "border-color 200ms" }}
                          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--nc-accent)")}
                          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
                        >
                          Vollst&#228;ndige Case Study lesen
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                      )}
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Warum Northcode ──────────────────────────────────────────────────────────

function IcoSystem() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <rect x="13" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <rect x="2" y="14" width="9" height="7" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <rect x="13" y="14" width="9" height="7" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M11 7.5h2M11 17.5h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

function IcoWrenchSpark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 3l1 2M21 5l-2 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IcoRocket() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IcoUnlock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M7 11V7a5 5 0 019.9-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
      <path d="M12 17.5v1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

// Floating orb – pure CSS keyframe animation via inline style injection
const ORB_KEYFRAMES = `
@keyframes ncOrbDrift {
  0%   { transform: translate(0,   0)   scale(1);   }
  33%  { transform: translate(40px,-30px) scale(1.08); }
  66%  { transform: translate(-25px, 20px) scale(0.94); }
  100% { transform: translate(0,   0)   scale(1);   }
}
@keyframes ncOrbDrift2 {
  0%   { transform: translate(0, 0)    scale(1);   }
  40%  { transform: translate(-50px, 30px) scale(1.12); }
  80%  { transform: translate(20px,-20px) scale(0.9);  }
  100% { transform: translate(0, 0)    scale(1);   }
}
@keyframes ncOrbDrift3 {
  0%   { transform: translate(0, 0)   scale(1);   }
  50%  { transform: translate(30px, 40px) scale(1.06); }
  100% { transform: translate(0, 0)   scale(1);   }
}

/* ── Vorteile Mobile Overrides (inline styles can't be targeted by globals.css) ── */
@media (max-width: 768px) {
  /* Header: 2-col → 1-col stacked */
  .nc-vt__header-grid {
    grid-template-columns: 1fr !important;
    gap: 28px !important;
    margin-bottom: 40px !important;
    padding-bottom: 28px !important;
    align-items: start !important;
  }
  /* Metrics row: reduce gap so 3 items fit on 320px */
  .nc-vt__metrics {
    gap: 20px !important;
    padding-top: 16px !important;
  }
  /* Item row: 3-col → icon left + rest right on row 1, body full-width on row 2 */
  .nc-vt__item {
    grid-template-columns: 56px 1fr !important;
    grid-template-rows: auto auto !important;
    gap: 0 16px !important;
    padding: 28px 4px !important;
  }
  .nc-vt__icon-col {
    grid-column: 1 !important;
    grid-row: 1 !important;
    align-items: flex-start !important;
    padding-top: 0 !important;
  }
  .nc-vt__title-col {
    grid-column: 2 !important;
    grid-row: 1 !important;
    padding-top: 0 !important;
  }
  .nc-vt__body-col {
    grid-column: 1 / -1 !important;
    grid-row: 2 !important;
    padding-top: 16px !important;
    padding-left: 0 !important;
  }
  /* Bottom CTA strip: stack vertically */
  .nc-vt__cta-strip {
    flex-direction: column !important;
    align-items: flex-start !important;
    padding: 24px 20px !important;
    gap: 20px !important;
    margin-top: 40px !important;
  }
  .nc-vt__cta-strip a {
    width: 100% !important;
    justify-content: center !important;
  }
}
@media (max-width: 480px) {
  .nc-vt__header-grid {
    margin-bottom: 32px !important;
    padding-bottom: 24px !important;
  }
  .nc-vt__item {
    padding: 22px 0 !important;
  }
  .nc-vt__metrics {
    gap: 16px !important;
  }
  .nc-vt__cta-strip {
    padding: 20px 16px !important;
  }
}
`;

function Vorteile() {
  const items = [
    {
      num: "01",
      Icon: IcoSystem,
      title: "Dein Unternehmen als Gesamtsystem",
      sub: "Ich optimiere nicht nur deine Website – sondern deinen gesamten Ablauf",
      desc: "Statt einzelne Probleme isoliert zu lösen, analysiere ich dein Unternehmen ganzheitlich: Wo verlierst du Anfragen? Wo verschwendest du Zeit im Tagesgeschäft? Das Ergebnis ist kein Design-Projekt, sondern ein funktionierendes System aus Außenwirkung und internen Prozessen.",
      list: ["Analyse von Kundenverlust & Zeitverlust", "Website + Prozessoptimierung kombiniert", "Kein isoliertes Webdesign"],
    },
    {
      num: "02",
      Icon: IcoWrenchSpark,
      title: "Automatisierung, die wirklich zu deinem Alltag passt",
      sub: "Keine Tools zum Selbsteinrichten – sondern fertige Systeme",
      desc: "Du bekommst keine Standard-Software, die du selbst verstehen musst. Ich baue individuelle Automationen, die genau zu deinem Ablauf passen – von einfachen Workflows bis zu kompletten KI-Systemen. Ausgaben-Tracking, Angebotsautomatisierung, Lead-Verarbeitung.",
      list: ["Individuell statt Baukasten", "Sofort einsatzbereit", "Kein technisches Vorwissen nötig"],
    },
    {
      num: "03",
      Icon: IcoRocket,
      title: "Ergebnisse, die schnell sichtbar werden",
      sub: "Keine langen Projekte – sondern schnelle Umsetzung mit Wirkung",
      desc: "Du wartest nicht Monate auf Ergebnisse. Erste Systeme gehen oft innerhalb weniger Tage live, Websites innerhalb kurzer Zeit danach. Das Ziel ist nicht Perfektion im Konzept – sondern schnelle, funktionierende Resultate.",
      list: ["Schnelle Umsetzung statt Konzeptphasen", "Klare Zeitpläne", "Kontinuierliche Verbesserung"],
    },
    {
      num: "04",
      Icon: IcoUnlock,
      title: "Du verstehst jedes System, das du bekommst",
      sub: "Keine Blackbox. Keine Abhängigkeit.",
      desc: "Jede Lösung wird so gebaut und erklärt, dass du sie wirklich verstehst und nutzen kannst. Du weißt jederzeit, was passiert, warum es passiert und wie du es selbst steuern kannst.",
      list: ["Klare Erklärung ohne Fachsprache", "Dokumentation inklusive", "Nachhaltige Betreuung möglich"],
    },
  ];

  // Headline words for staggered reveal
  const headlineWords = ["Nicht", "einfach", "eine", "Website.", "Ein", "System", "für", "Wachstum."];

  return (
    <>
      {/* Inject keyframe CSS once */}
      <style>{ORB_KEYFRAMES}</style>

      {/* ── Wave divider: light → dark ─────────────────────────────── */}
      <div style={{ background: "var(--nc-navy)", marginTop: -2, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0 0 C240 80 480 80 720 40 C960 0 1200 0 1440 60 L1440 0 L0 0 Z" fill="#F5FAFA"/>
        </svg>
      </div>

      <section id="vorteile" style={{ background: "var(--nc-navy)", paddingBottom: 100, position: "relative", overflow: "hidden" }}>

        {/* ── Animated background orbs ──────────────────────────────── */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          {/* Orb 1 – large green */}
          <div style={{ position: "absolute", top: "8%", left: "15%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,139,120,0.13) 0%, transparent 65%)", animation: "ncOrbDrift 18s ease-in-out infinite" }} />
          {/* Orb 2 – medium blue */}
          <div style={{ position: "absolute", bottom: "12%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)", animation: "ncOrbDrift2 22s ease-in-out infinite" }} />
          {/* Orb 3 – small violet */}
          <div style={{ position: "absolute", top: "55%", left: "60%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)", animation: "ncOrbDrift3 14s ease-in-out infinite" }} />
          {/* Subtle dot-grid overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="nc-container" style={{ position: "relative" }}>

          {/* ── Header – animated two-column ─────────────────────────── */}
          <div className="nc-vt__header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 72, paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

            {/* Left: animated headline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", background: "rgba(61,139,120,0.12)", border: "1px solid rgba(61,139,120,0.25)", borderRadius: 100, marginBottom: 20 }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8EC5B5", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#8EC5B5" }}>Warum Northcode</span>
              </motion.div>

              <h2 style={{ color: "white", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", lineHeight: 1.2, fontWeight: 800, margin: 0, display: "flex", flexWrap: "wrap", gap: "0 10px" }}>
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    style={{ display: "inline-block", color: i >= 5 ? "#8EC5B5" : "white" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
            </motion.div>

            {/* Right: desc + metrics */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: "0 0 28px" }}>
                Die meisten Agenturen trennen Dinge, die zusammengehören: schöne Websites auf der einen Seite – Automatisierung auf der anderen. Northcode verbindet beides zu einem einzigen Ziel.
              </p>
              <motion.div
                className="nc-vt__metrics" style={{ display: "flex", gap: 32, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } } }}
              >
                {[{ val: "Mehr Kunden", lbl: "gewinnen" }, { val: "Weniger Zeit", lbl: "verlieren" }, { val: "Bessere", lbl: "Prozesse" }].map((m) => (
                  <motion.div
                    key={m.lbl}
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: 800, color: "white", lineHeight: 1.1 }}>{m.val}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 500, marginTop: 3 }}>{m.lbl}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── 4 items – scroll-triggered rows ──────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.028)" }}
                className="nc-vt__item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1fr",
                  gap: "0 48px",
                  padding: "44px 8px",
                  borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  alignItems: "start",
                  borderRadius: 6,
                  cursor: "default",
                  transition: "background-color 250ms ease",
                }}
              >
                {/* Icon + number */}
                <div className="nc-vt__icon-col" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingTop: 4 }}>
                  <motion.div
                    whileInView={{ scale: [0.7, 1.08, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8EC5B5" }}
                  >
                    <item.Icon />
                  </motion.div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,0.18)", letterSpacing: ".06em" }}>{item.num}</span>
                </div>

                {/* Title + sub */}
                <div className="nc-vt__title-col" style={{ paddingTop: 6 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#8EC5B5", letterSpacing: ".04em", marginBottom: 10, lineHeight: 1.4 }}>{item.sub}</div>
                  <h3 style={{ color: "white", fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.3, margin: 0 }}>{item.title}</h3>
                </div>

                {/* Desc + bullets */}
                <div className="nc-vt__body-col" style={{ paddingTop: 6 }}>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: "0 0 20px" }}>{item.desc}</p>
                  <motion.div
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
                  >
                    {item.list.map((l) => (
                      <motion.div
                        key={l}
                        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                        style={{ display: "flex", alignItems: "center", gap: 10 }}
                      >
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(61,139,120,0.18)", border: "1px solid rgba(61,139,120,0.3)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#8EC5B5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>{l}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom CTA strip ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="nc-vt__cta-strip" style={{ marginTop: 64, padding: "32px 40px", background: "rgba(255,255,255,0.04)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}
          >
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: 6 }}>Bereit, das richtige System zu bauen?</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>Kein Pitch. Kein Druck. Nur ein ehrliches Gespräch über das, was wirklich möglich ist.</div>
            </div>
            <motion.a
              href="https://calendly.com/maxsel-100/30min?month=2026-06"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
              className="nc-btn"
              style={{ background: "var(--nc-accent)", color: "white", padding: "13px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0 }}
            >
              Kostenloses Erstgespräch
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </motion.div>

        </div>
      </section>

      {/* ── Wave divider: dark → light ─────────────────────────────── */}
      <div style={{ background: "var(--nc-navy)", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0 72 C360 0 720 0 1080 48 C1260 64 1380 72 1440 72 L1440 72 L0 72 Z" fill="#F5FAFA"/>
        </svg>
      </div>
    </>
  );
}

// ─── Prozess ──────────────────────────────────────────────────────────────────
function Prozess() {
  const steps = [
    { icon: "💬", title: "Kostenloses Erstgespräch", desc: "Wir reden 30 Minuten: Was läuft gut, was kostet dich zu viel Zeit, wo verlierst du Kunden? Kein Pitch, kein Druck – nur ehrliche Analyse." },
    { icon: "🔍", title: "Sichtbarkeits- & Prozess-Audit", desc: "Ich schaue mir deinen Online-Auftritt und deine internen Abläufe an. Wo gibt es Quick Wins? Was lässt sich automatisieren? Was bringt am schnellsten Ergebnis?" },
    { icon: "⚡", title: "Umsetzung mit laufendem Feedback", desc: "Website, Landingpage oder Automatisierungssystem – du siehst den Fortschritt live. Korrekturen sind jederzeit möglich, keine langen Wartephasen." },
    { icon: "🚀", title: "Live-Gang & vollständige Übergabe", desc: "Pünktliche Lieferung, Einweisung in alle Systeme und dauerhafter Support. Du kannst alles selbst bedienen – und weißt genau, wie es funktioniert." },
  ];
  return (
    <section className="nc-section" id="prozess">
      <div className="nc-container">
        <div className="nc-section-header reveal">
          <div className="nc-label"><span />Vorgehen</div>
          <h2>Analyse zuerst. Dann die richtige Lösung.</h2>
          <p>Bevor ich etwas baue, verstehe ich, wo dein Unternehmen steht. Manche brauchen zuerst mehr Sichtbarkeit – andere sparen durch Automatisierung sofort 10 Stunden pro Woche.</p>
        </div>
        <div className="nc-prozess__steps">
          {steps.map((s, i) => (
            <div key={s.title} className={`nc-prozess__step reveal reveal-delay-${i + 1}`}>
              <div className="nc-prozess__circle">{s.icon}</div>
              <div className="nc-prozess__step-body">
                <h3>{s.title}</h3>
                <p style={{ fontSize: 14 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Über mich – Project Icon Helper ─────────────────────────────────────────
function UeberProjIcon({ type }: { type: string }) {
  if (type === "bot")     return (<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.8"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><path d="M12 3v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>);
  if (type === "table")   return (<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M14 2v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>);
  if (type === "users")   return (<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>);
  if (type === "monitor") return (<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>);
  if (type === "chat")    return (<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>);
  return (<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M3 9l1-6h16l1 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 9H3v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z" stroke="currentColor" strokeWidth="1.8"/><path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}

// ─── Über mich ────────────────────────────────────────────────────────────────
function UeberMich() {
  const cV = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const iV = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };
  const vV = { hidden: { opacity: 0, x: 36 }, visible: { opacity: 1, x: 0, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 } } };

  const story = [
    { num: "01", label: "Vergangenheit", text: "2015 bin ich mit meiner Familie aus Syrien nach Deutschland gekommen. Technik hat mich von Anfang an fasziniert – Mathematik, Systeme, wie Dinge ineinandergreifen. Schon in der Schule habe ich begonnen, mir selbst beizubringen, was mich wirklich interessiert." },
    { num: "02", label: "Entwicklung",   text: "Erste Projekte entstanden aus reiner Neugier: Automatisierungen für Bekannte, kleine Tools, erste Websites. Irgendwann wurde daraus mehr – echte Lösungen für Unternehmen. KI-Chatbots, Workflows und Webauftritte, die wirklich funktionieren." },
    { num: "03", label: "Heute",         text: "Mit 15 Jahren arbeite ich an echten Kundenprojekten – Webdesign, KI-Entwicklung und Prozessautomatisierung. Nicht primär um Geld zu verdienen, sondern um zu lernen, wie man Systeme baut, die für Menschen echten Mehrwert schaffen." },
  ];

  const projects = [
    { icon: "bot",     title: "KI Solar-Chatbot",     sub: "Voice AI · Lead-System" },
    { icon: "table",   title: "Telegram → Excel", sub: "Ausgaben-Automatisierung" },
    { icon: "users",   title: "Lead-Qualifizierung",   sub: "Call-Skripte & Filter" },
    { icon: "chat",    title: "Meeting-Workforce",      sub: "KI Multi-Agent System" },
    { icon: "monitor", title: "Webdesign-Projekte",     sub: "Für lokale Unternehmen" },
    { icon: "store",   title: "Pizza Vending",          sub: "Vertriebs- & Partnersite" },
  ];

  const techTags    = ["Webdesign & Landingpages", "KI-Chatbots & Voice AI", "Prozessautomatisierung", "Next.js / React", "n8n & Make", "SEO & Conversion"];
  const personalTags = ["Fußball (Bremer FV)", "Mathematik", "Geschichte", "Selbstständiges Lernen", "Neue Themen tief erkunden"];

  return (
    <section className="nc-section" id="ueber-mich">
      <div className="nc-container">

        {/* ── Grid: Story left · Portrait right (Visual DOM-first for mobile-top) ── */}
        <motion.div className="nc-ueber__grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={cV}>

          {/* Visual block */}
          <motion.div className="nc-ueber__visual" variants={vV}>
            <div className="nc-ueber__photo-wrap">
              {/* Desktop: full image · Mobile: portrait crop via CSS */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/esmail-about.jpg"
                alt="Esmail – Northcode Gründer"
                className="nc-ueber__photo-img"
              />
              <div className="nc-ueber__photo-footer">
                <div className="nc-ueber__nc-badge">North<span>code</span></div>
              </div>
            </div>
            <div className="nc-ueber__age-badge">
              <div className="nc-ueber__age-num">15</div>
              <div className="nc-ueber__age-lbl">Jahre jung</div>
            </div>
            <div className="nc-ueber__origin">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" style={{ color: "var(--nc-green)", flexShrink: 0 }}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20" stroke="currentColor" strokeWidth="1.8"/></svg>
              <div className="nc-ueber__origin-text"><strong>Esmail Altaher</strong> &ndash; Syrien &rarr; Deutschland, 2015</div>
            </div>
          </motion.div>

          {/* Story content */}
          <motion.div className="nc-ueber__content" variants={cV}>
            <motion.div variants={iV}><div className="nc-label"><span />&#220;ber mich</div></motion.div>
            <motion.h2 variants={iV}>Ein Builder.<br />Kein Theoretiker.</motion.h2>
            <motion.p className="nc-ueber__intro" variants={iV}>
              Ich bin Esmail, 15 Jahre alt. Ich baue Websites, KI-Systeme und Automatisierungen &ndash; nicht weil ich es studiert habe, sondern weil ich nie aufgeh&#246;rt habe, Dinge auszuprobieren.
            </motion.p>
            <div className="nc-ueber__story">
              {story.map((block, i) => (
                <motion.div key={block.num} className="nc-ueber__story-block" variants={iV}>
                  <div className="nc-ueber__story-line">
                    <div className="nc-ueber__story-num">{block.num}</div>
                    {i < story.length - 1 && <div className="nc-ueber__story-connector" />}
                  </div>
                  <div className="nc-ueber__story-body">
                    <div className="nc-ueber__story-label">{block.label}</div>
                    <p>{block.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Bottom: Projects · Skills · Closer ── */}
        <motion.div className="nc-ueber__bottom" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={cV}>
          <motion.div variants={iV}>
            <div className="nc-ueber__section-label">Projekt-Highlights</div>
            <div className="nc-ueber__projects">
              {projects.map((p) => (
                <CardContainer key={p.title} containerClassName="block" className="nc-ueber__project-card w-full">
                  <CardBody className="w-full flex items-start gap-3">
                    <CardItem translateZ={40} className="flex-shrink-0">
                      <div className="nc-ueber__project-icon"><UeberProjIcon type={p.icon} /></div>
                    </CardItem>
                    <CardItem translateZ={20} className="block">
                      <div className="nc-ueber__project-title">{p.title}</div>
                      <div className="nc-ueber__project-sub">{p.sub}</div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </motion.div>
          <motion.div variants={iV} className="nc-ueber__skills-row">
            <div>
              <div className="nc-ueber__section-label">Technische Schwerpunkte</div>
              <div className="nc-ueber__tags">{techTags.map((t) => <span key={t} className="nc-ueber__tag">{t}</span>)}</div>
            </div>
            <div>
              <div className="nc-ueber__section-label">Pers&#246;nlich</div>
              <div className="nc-ueber__tags">{personalTags.map((t) => <span key={t} className="nc-ueber__tag nc-ueber__tag--personal">{t}</span>)}</div>
            </div>
          </motion.div>
          <motion.div variants={iV} className="nc-ueber__closer">
            <blockquote className="nc-ueber__closer-quote">
              Northcode entwickelt Systeme f&#252;r Unternehmen, die Webdesign, KI und Automatisierung miteinander verbinden &ndash; um echte Gesch&#228;ftsprozesse zu verbessern.
            </blockquote>
            <a href="https://calendly.com/maxsel-100/30min?month=2026-06" target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-primary" style={{ flexShrink: 0 }}>Lass uns zusammenarbeiten <IcoArrow /></a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── Kontakt ──────────────────────────────────────────────────────────────────
function Kontakt() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => setFormState("success"), 1200);
  };

  return (
    <section className="nc-section nc-kontakt" id="kontakt">
      <div className="nc-container">
        <div className="nc-kontakt__inner">
          <div className="reveal">
            <div className="nc-label"><span />Kontakt</div>
            <h2>Erzähl mir, wo du Zeit verlierst – oder Kunden.</h2>
            <p>Ob du mehr Sichtbarkeit brauchst, manuelle Arbeit automatisieren willst oder beides: Lass uns 30 Minuten reden. Kostenlos, unverbindlich, direkt auf den Punkt.</p>
            <div className="nc-kontakt__channels">
              <a href="https://calendly.com/maxsel-100/30min?month=2026-06" target="_blank" rel="noopener noreferrer" className="nc-kontakt__channel">
                <div className="nc-kontakt__channel-icon blue"><IcoCalendar /></div>
                <div className="nc-kontakt__channel-text"><h4>Kostenlose Strategie-Session</h4><p>30 Min. via Calendly buchen – sofort Termin wählen</p></div>
              </a>
              <a href="https://wa.me/491786270048" target="_blank" rel="noopener noreferrer" className="nc-kontakt__channel">
                <div className="nc-kontakt__channel-icon green"><IcoPhone /></div>
                <div className="nc-kontakt__channel-text"><h4>WhatsApp-Nachricht</h4><p>Schnelle Rückmeldung, i.d.R. innerhalb von 2 Stunden</p></div>
              </a>
              <a href="mailto:northcodeesmail@gmail.com" className="nc-kontakt__channel">
                <div className="nc-kontakt__channel-icon indigo"><IcoMail /></div>
                <div className="nc-kontakt__channel-text"><h4>E-Mail</h4><p>northcodeesmail@gmail.com · Antwort innerhalb 24h</p></div>
              </a>
            </div>
          </div>

          <div className="nc-kontakt__form reveal reveal-delay-2">
            <h3>Nachricht schicken</h3>
            <p style={{ fontSize: 14, marginBottom: 24 }}>Füll das Formular aus – ich melde mich innerhalb von 24 Stunden.</p>
            {formState === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "var(--nc-navy)", marginBottom: 8 }}>Nachricht erhalten!</h3>
                <p>Ich melde mich innerhalb von 24 Stunden bei dir. Schau auch in deinen Spam-Ordner.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="nc-form-row">
                  <div className="nc-form-group">
                    <label htmlFor="nc-name">Dein Name *</label>
                    <input id="nc-name" type="text" placeholder="Max Mustermann" required />
                  </div>
                  <div className="nc-form-group">
                    <label htmlFor="nc-email">E-Mail-Adresse *</label>
                    <input id="nc-email" type="email" placeholder="max@firma.de" required />
                  </div>
                </div>
                <div className="nc-form-group">
                  <label htmlFor="nc-unternehmen">Unternehmen</label>
                  <input id="nc-unternehmen" type="text" placeholder="Mustermann GmbH" />
                </div>
                <div className="nc-form-group">
                  <label htmlFor="nc-service">Worum geht es?</label>
                  <select id="nc-service">
                    <option value="">Bitte wählen...</option>
                    <option>Neue Website / Redesign</option>
                    <option>Landingpage</option>
                    <option>KI-Chatbot</option>
                    <option>Automatisierungen</option>
                    <option>Business-System</option>
                    <option>Etwas anderes</option>
                  </select>
                </div>
                <div className="nc-form-group">
                  <label htmlFor="nc-nachricht">Deine Nachricht *</label>
                  <textarea id="nc-nachricht" placeholder="Erzähl mir von deinem Projekt, deinen Zielen und was du dir vorstellst..." required />
                </div>
                <button type="submit" className="nc-btn nc-btn-primary" style={{ width: "100%", justifyContent: "center" }}
                  disabled={formState === "loading"}>
                  {formState === "loading" ? "Wird gesendet..." : <><span>Nachricht abschicken</span> <IcoArrow /></>}
                </button>
                <p style={{ fontSize: 12, textAlign: "center", marginTop: 12 }}>Kein Spam. Keine Weitergabe deiner Daten. Ich melde mich persönlich.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="nc-cta-banner">
      <div className="nc-container reveal">
        <h2>Mehr Kunden. Weniger manuelle Arbeit. Beides zusammen.</h2>
        <p>In einem kostenlosen 30-Minuten-Gespräch finden wir heraus, was für dein Unternehmen am meisten bringt – mehr Sichtbarkeit, weniger Routineaufwand oder beides auf einmal.</p>
        <div className="nc-cta-banner__actions">
          <a href="https://calendly.com/maxsel-100/30min?month=2026-06" target="_blank" rel="noopener noreferrer" className="nc-btn nc-btn-white">
            Kostenlose Session buchen <IcoArrow />
          </a>
          <a href="#kontakt" className="nc-btn nc-btn-outline-white">Nachricht schicken</a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#ueber-mich", label: "Über mich" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  const seoLinks = [
    { href: "/ki-automatisierung-bremen",        label: "KI-Automatisierung Bremen" },
    { href: "/webdesign-bremen",                 label: "Webdesign Bremen" },
    { href: "/digitalisierung-bremen",           label: "Digitalisierung Bremen" },
    { href: "/unternehmenssysteme-bremen",       label: "Unternehmenssysteme Bremen" },
    { href: "/backend-entwicklung-bremen",       label: "Backend-Entwicklung Bremen" },
    { href: "/imagefilm-bremen",                 label: "Imagefilm Bremen" },
    { href: "/ki-beratung-oldenburg",            label: "KI-Beratung Oldenburg" },
    { href: "/webdesign-oldenburg",              label: "Webdesign Oldenburg" },
    { href: "/unternehmensvideo-oldenburg",      label: "Unternehmensvideo Oldenburg" },
    { href: "/landingpage-delmenhorst",          label: "Landingpage Delmenhorst" },
    { href: "/prozessautomatisierung-delmenhorst", label: "Prozessautomatisierung Delmenhorst" },
    { href: "/digitalisierung-ganderkesee",      label: "Digitalisierung Ganderkesee" },
  ];
  return (
    <footer>
      <div className="nc-container">
        <div className="nc-footer__inner">
          <a href="#" className="nc-footer__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-icon.png" alt="Northcode Logo" width="28" height="28"
              style={{ objectFit: "contain", display: "block", filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(120deg)", opacity: 0.85 }} />
            North<span>code</span>
          </a>
          <div className="nc-footer__links">
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
        </div>

        {/* SEO internal links – hidden visually, crawlable */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 24, paddingTop: 20 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Unsere Leistungen in Nordwest-Deutschland
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
            {seoLinks.map((l) => (
              <a key={l.href} href={l.href} style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#5BBFAA")}
                onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="nc-footer__bottom">
          <span>© {new Date().getFullYear()} Northcode by Esmail Altaher. Alle Rechte vorbehalten.</span>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="/impressum" style={{ fontSize: 13, color: "rgba(255,255,255,.55)", textDecoration: "none" }}>Impressum</a>
            <a href="/datenschutz" style={{ fontSize: 13, color: "rgba(255,255,255,.55)", textDecoration: "none" }}>Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float ───────────────────────────────────────────────────────────
function WAFloat() {
  return (
    <a href="https://wa.me/491786270048?text=Hallo%20Esmail%2C%20ich%20interessiere%20mich%20f%C3%BCr%20deine%20Leistungen."
      target="_blank" rel="noopener noreferrer" className="nc-wa-float" aria-label="WhatsApp kontaktieren">
      <IcoWA />
    </a>
  );
}

// ─── Mobile Circle Nav (shown only on ≤768 px via CSS) ───────────────────────
function MobileCircleNav() {
  const navItems = [
    { label: "Leistungen", icon: <Zap size={16} />,      href: "#leistungen"  },
    { label: "Analyse",    icon: <Search size={16} />,   href: "#analyse"     },
    { label: "Portfolio",  icon: <Briefcase size={16} />,href: "#portfolio"   },
    { label: "Über mich",  icon: <User size={16} />,     href: "#ueber-mich"  },
    { label: "Kontakt",    icon: <Mail size={16} />,      href: "#kontakt"     },
  ];

  return (
    <div className="nc-mobile-circle-nav">
      <CircleMenu items={navItems} />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function NorthcodePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useReveal();

  return (
    <div id="northcode-site">
      <Nav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <TrustBar />
      <Leistungen />
      <Analyse />
      <Portfolio />
      <Vorteile />
      <Prozess />
      <UeberMich />
      <Kontakt />
      <CTABanner />
      <Footer />
      <WAFloat />
      <MobileCircleNav />
    </div>
  );
}
