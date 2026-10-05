import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  FileText,
  Check,
  Building,
  Globe,
  Award,
  ChevronRight,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  X,
  FileCheck,
  Target,
  Users,
  Layers,
  Sparkles,
  HelpCircle,
  Calendar,
  Clock,
  Briefcase,
  Zap,
  BookOpen,
  Compass,
  Cpu,
  Gift,
  DollarSign,
  TrendingUp,
  Sliders,
  Calculator,
  Plane,
  ShieldCheck,
  Activity,
  Gauge,
  Terminal,
  Coins,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

export function Index() {
  const [isDossierModalOpen, setIsDossierModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#F9F8F5] text-[#1C1917] font-sans antialiased selection:bg-[#002855] selection:text-white">
      {/* Telemetry Bar */}
      <MastheadLedger onOpenDossier={() => setIsDossierModalOpen(true)} />

      {/* Institutional Navigation Header */}
      <Navbar onOpenDossier={() => setIsDossierModalOpen(true)} scrollToSection={scrollToSection} />

      {/* Hero Section & Term Sheet Specification */}
      <HeroSection
        onOpenDossier={() => setIsDossierModalOpen(true)}
      />

      {/* 1. MARQUEE TICKER */}
      <MarqueeTicker />

      {/* 2. INTERACTIVE ADD-ON 1: TRACK EXPLORER */}
      <TrackExplorerSection onOpenDossier={() => setIsDossierModalOpen(true)} />

      {/* 3. INTERACTIVE ADD-ON 2: COHORT TIER & BENEFIT CALCULATOR */}
      <CohortTierCalculatorSection onOpenDossier={() => setIsDossierModalOpen(true)} />

      {/* 4. INTERACTIVE ADD-ON 3: 12-WEEK SPRINT SCRUBBER */}
      <SprintScrubberSection />

      {/* 5. SECTION 01: ABOUT GIC & THE TWO GAPS THESIS */}
      <AboutTwoGapsSection />

      {/* 6. VISION, MISSION & 5 STRATEGIC OBJECTIVES */}
      <VisionMissionObjectivesSection />

      {/* 7. TIMELINE: 2025 → 2026 (04 MILESTONES) */}
      <TimelineMilestonesSection />

      {/* 8. SECTION 01-B: WHAT MAKES GIC DIFFERENT & FOCUS AREAS */}
      <WhatMakesGicDifferentSection />

      {/* 9. SECTION 02: CORE PRINCIPLES — THE RULES OF THE HOUSE */}
      <CorePrinciplesSection />

      {/* 10. SECTION 03: WHAT GIC OFFERS — FULL STACK */}
      <FullStackOfferingsSection />

      {/* 11. SECTION 04: WHO CAN APPLY — EVERY KIND OF BUILDER */}
      <WhoCanApplySection />

      {/* 12. SECTION 05: WHY JOIN GIC — EIGHT REASONS */}
      <WhyJoinGicSection />

      {/* 13. SECTION 06: INCUBATION JOURNEY — STRUCTURED PATHWAY */}
      <IncubationJourneySection />

      {/* 14. SECTION 07: LAUNCH @ AICSSYC 2026 */}
      <LaunchAicssycSection onOpenDossier={() => setIsDossierModalOpen(true)} />

      {/* 15. SECTION 08: STARTUP PITCH PROCESS & TIMELINE */}
      <PitchProcessTimelineSection onOpenDossier={() => setIsDossierModalOpen(true)} />

      {/* 16. SECTION 09: BENEFITS — EVERYTHING A FOUNDER NEEDS */}
      <FounderBenefitsSection />

      {/* 17. SECTION 10: MENTORS & ADVISORY BOARD */}
      <MentorsAdvisorsSection />

      {/* 18. SECTION 12: INSTITUTIONAL & CAPITAL PARTNERS */}
      <VenturePartnersSection />

      {/* 19. SECTION 14: FREQUENTLY ASKED QUESTIONS */}
      <FaqAccordionSection openIndex={openFaqIndex} setOpenIndex={setOpenFaqIndex} />

      {/* FORMAL INTAKE DOSSIER FORM */}
      <DossierIntakeSection />

      {/* 20. SECTION 15: CORPORATE FOOTER */}
      <Footer scrollToSection={scrollToSection} />

      {/* Application Dossier Modal */}
      {isDossierModalOpen && (
        <DossierModal onClose={() => setIsDossierModalOpen(false)} />
      )}
    </div>
  );
}

/* ================= 1. FORMAL MASTHEAD LEDGER ================= */
function MastheadLedger({ onOpenDossier }: { onOpenDossier: () => void }) {
  return (
    <div className="border-b border-[#E5E2DA] bg-[#002855] text-white py-2.5 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-xs mono">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[#9E2A2B] animate-pulse" />
          <span className="tracking-wider uppercase font-medium">
            LIVE · GIC / IEEE COMPUTER SOCIETY | V1.0 / 2026
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[#E5E2DA]">
          <span>CONVENTION: AICSSYC 2026 · OCT 8–11</span>
          <span>•</span>
          <span className="text-[#E5E2DA] font-bold">STATUS: APPLICATIONS OPEN</span>
        </div>
        <button
          onClick={onOpenDossier}
          className="hover:underline flex items-center gap-1 text-[#FFFFFF] font-semibold"
        >
          <span>APPLY TO PITCH</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

/* ================= 2. INSTITUTIONAL NAVIGATION ================= */
function LogoIcon({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const [hasError, setHasError] = useState(false);

  const containerSizes = {
    sm: "h-8 w-8 text-lg",
    md: "h-10 w-10 text-xl",
    lg: "h-12 w-12 text-2xl",
  };

  const imgSizes = {
    sm: "h-6 w-6",
    md: "h-7 w-7",
    lg: "h-9 w-9",
  };

  return (
    <div className={`${containerSizes[size]} bg-[#002855] text-white flex items-center justify-center font-serif font-bold border-[0.5px] border-[#001A38]/30 shrink-0 overflow-hidden`}>
      {!hasError ? (
        <img
          src="/logo.png"
          alt="IEEE Logo"
          className={`${imgSizes[size]} object-contain`}
          onError={() => setHasError(true)}
        />
      ) : (
        <span>G</span>
      )}
    </div>
  );
}

function Navbar({ onOpenDossier, scrollToSection }: { onOpenDossier: () => void; scrollToSection: (id: string) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#E5E2DA] bg-[#F9F8F5] sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 py-4">
        {/* Institutional Lockup Logo */}
        <a href="#top" className="flex items-center gap-3.5 shrink-0">
          <LogoIcon size="md" />
          <div className="flex flex-col shrink-0">
            <span className="font-sans font-extrabold text-base sm:text-lg text-[#002855] leading-tight tracking-tight uppercase whitespace-nowrap">
              GLOBAL INCUBATION COMMITTEE
            </span>
            <span className="mono text-[11px] tracking-widest text-[#57534E] uppercase font-semibold whitespace-nowrap">
              IEEE Computer Society
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-[#57534E] shrink-0">
          {[
            { label: "Tracks", id: "tracks" },
            { label: "Tiers & Calc", id: "tiers" },
            { label: "12-Wk Sprint", id: "sprint" },
            { label: "About", id: "about" },
            { label: "Vision", id: "vision" },
            { label: "Principles", id: "principles" },
            { label: "Offerings", id: "offerings" },
            { label: "Journey", id: "journey" },
            { label: "Pitch Process", id: "pitch-process" },
            { label: "Benefits", id: "benefits" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#002855] transition-colors py-1 whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDossier}
            className="btn-tactile-primary bg-[#002855] text-white hover:bg-[#001D40] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border border-[#001A38] active:translate-y-0.5 whitespace-nowrap"
          >
            Apply to Pitch
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#002855] border border-[#E5E2DA] hover:bg-[#F4F2EC] active:translate-y-0.5 transition-all"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Layers className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#E5E2DA] bg-[#F9F8F5] px-4 py-4 space-y-2">
          {[
            { label: "Track Explorer", id: "tracks" },
            { label: "Cohort Tiers & Calc", id: "tiers" },
            { label: "12-Week Sprint Scrubber", id: "sprint" },
            { label: "About GIC & Dual Gaps", id: "about" },
            { label: "Vision & Objectives", id: "vision" },
            { label: "Timeline 2025-2026", id: "timeline" },
            { label: "What Makes GIC Different", id: "different" },
            { label: "Core Principles", id: "principles" },
            { label: "Full Stack Offerings", id: "offerings" },
            { label: "Incubation Journey", id: "journey" },
            { label: "Launch @ AICSSYC 2026", id: "showcase" },
            { label: "Pitch Process", id: "pitch-process" },
            { label: "Benefits", id: "benefits" },
            { label: "Mentors & Advisors", id: "mentors" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection(item.id);
              }}
              className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-[#002855] border-b border-[#E5E2DA]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ================= 1. MARQUEE TICKER ================= */
function MarqueeTicker() {
  return (
    <div className="border-y border-[#E5E2DA] bg-[#002855] text-white py-2.5 overflow-hidden mono text-xs uppercase tracking-widest">
      <div className="flex whitespace-nowrap animate-marquee gap-8">
        {[
          "INVEST.",
          "IMPACT.",
          "IGNITE.",
          "INSPIRE.",
          "INNOVATE.",
          "INCUBATE.",
          "HARDWARE + SOFTWARE + HYBRID SYSTEMS.",
          "70-80% GLOBAL POPULATION MANDATE.",
          "IEEE COMPUTER SOCIETY.",
          "AICSSYC 2026 DEMO DAY.",
        ].map((text, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="text-[#9E2A2B]">★</span>
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================= 0. INSTITUTIONAL ACCREDITATION SEAL ================= */
function InstitutionalAccreditationSeal({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dimensions = {
    sm: "w-20 h-20",
    md: "w-28 h-28 sm:w-32 sm:h-32",
    lg: "w-36 h-36 sm:w-44 sm:h-44",
  };

  return (
    <div
      className={`relative ${dimensions[size]} shrink-0 select-none group cursor-pointer ${className}`}
      title="IEEE Computer Society · AICSSYC 2026 Accredited Incubation Specification"
    >
      {/* Outer Rotating Text Ring */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-slow transition-transform duration-700 group-hover:[animation-duration:8s]"
      >
        <defs>
          <path
            id="seal-text-path"
            d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
          />
        </defs>
        <circle cx="100" cy="100" r="94" fill="none" stroke="#002855" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="#E5E2DA" strokeWidth="1" />
        <text className="font-mono text-[10px] font-bold fill-[#002855] tracking-[0.22em] uppercase">
          <textPath href="#seal-text-path" startOffset="0%">
            ★ IEEE COMPUTER SOCIETY ★ AICSSYC 2026 ★ GIC INCUBATION ★
          </textPath>
        </text>
      </svg>

      {/* Inner Embossed Seal Medallion with tactile lighting */}
      <div className="absolute inset-3.5 sm:inset-4 rounded-full bg-[#FAF9F5] border-2 border-[#002855] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,40,85,0.12)] flex flex-col items-center justify-center p-2 text-center overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_8px_20px_rgba(0,40,85,0.2)]">
        <div className="absolute inset-1 rounded-full border border-dashed border-[#9E2A2B]/40 pointer-events-none" />
        <span className="font-mono text-[7px] sm:text-[8px] font-extrabold text-[#9E2A2B] tracking-wider uppercase z-10 leading-none">
          ACCREDITED
        </span>
        <span className="font-serif text-sm sm:text-base font-bold text-[#002855] leading-none my-0.5 z-10">
          IEEE·CS
        </span>
        <span className="font-mono text-[6.5px] sm:text-[7.5px] text-[#57534E] uppercase tracking-widest z-10 leading-none">
          0% EQUITY
        </span>
      </div>
    </div>
  );
}

/* ================= HERO SECTION & AUDITED TERM SHEET ================= */
function HeroSection({
  onOpenDossier,
}: {
  onOpenDossier: () => void;
}) {
  return (
    <section className="py-16 lg:py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest flex items-center gap-2">
                  <span className="mono text-[10px] bg-[#9E2A2B] text-white px-2 py-0.5 font-bold">№ 001</span>
                  <span>GLOBAL INCUBATION COMMITTEE / IEEE COMPUTER SOCIETY</span>
                </div>
              </div>
              
              <h1 className="font-serif tracking-[-0.03em] text-4xl sm:text-5xl lg:text-6xl xl:text-[4.15rem] text-[#002855] leading-[1.06] font-normal mb-6">
                Accelerating breakthrough engineering into <span className="italic font-normal text-[#001428]">scalable ventures.</span>
              </h1>

              <p className="text-base text-[#57534E] leading-relaxed mb-8 max-w-2xl font-normal font-sans">
                An official global technology incubator providing non-dilutive grant capital, tier-1 mentorship, and technical scaling pathways for engineering founders under the IEEE Computer Society.
              </p>

              {/* Action Cluster + Embedded Rotating Accreditation Seal */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <button
                  onClick={onOpenDossier}
                  className="btn-tactile-primary bg-[#002855] text-white hover:bg-[#001D40] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-center border border-[#001A38] active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply to Pitch</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-3">
                  <InstitutionalAccreditationSeal size="sm" />
                  <div className="font-mono text-[10px] text-[#57534E] leading-tight">
                    <span className="font-bold text-[#002855] block">OFFICIAL SEAL OF AUDIT</span>
                    <span>AICSSYC 2026 · IEEE·CS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Audit Ledger Bar */}
            <div className="mt-12 pt-6 border-t border-[#E5E2DA]">
              <div className="font-mono tabular-nums text-[10px] font-bold text-[#57534E] uppercase tracking-widest mb-3">
                // INSTITUTIONAL AUDIT LEDGER
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#FFFFFF] p-3 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="font-mono tabular-nums text-[10px] text-[#57534E]">GOVERNING BODY</div>
                  <div className="font-bold text-[#002855] mt-0.5 text-xs">IEEE Computer Society</div>
                </div>
                <div className="bg-[#FFFFFF] p-3 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="font-mono tabular-nums text-[10px] text-[#57534E]">CONVENTION</div>
                  <div className="font-bold text-[#002855] mt-0.5 text-xs">AICSSYC 2026</div>
                </div>
                <div className="bg-[#FFFFFF] p-3 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="font-mono tabular-nums text-[10px] text-[#57534E]">COHORT CAPACITY</div>
                  <div className="font-bold text-[#002855] mt-0.5 text-xs">Top 10 Global Teams</div>
                </div>
                <div className="bg-[#FFFFFF] p-3 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="font-mono tabular-nums text-[10px] text-[#57534E]">EQUITY OBLIGATION</div>
                  <div className="font-bold text-[#9E2A2B] mt-0.5 text-xs">0.0% Non-Dilutive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Term Sheet Card with layered 3D depth, top-edge bevel, perspective tilt */}
          <div className="lg:col-span-5">
            <div className="term-sheet-card p-6 border border-[#E5E2DA]">
              <div className="border-b border-[#002855] pb-4 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 bg-[#002855] text-white flex items-center justify-center font-bold text-xs shadow-[0_1px_3px_rgba(0,40,85,0.3)]">
                    CS
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base text-[#002855] leading-tight">
                      Executive Term Sheet
                    </h3>
                    <div className="font-mono tabular-nums text-[10px] text-[#57534E] tracking-wider">COHORT SPECIFICATION LEDGER</div>
                  </div>
                </div>
                <span className="font-mono tabular-nums text-[10px] font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 px-2 py-0.5">
                  REF: GIC-2026-C1
                </span>
              </div>

              <div className="divide-y divide-[#E5E2DA] text-xs">
                <div className="py-3 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-mono tabular-nums font-semibold text-[#1C1917]">Non-Dilutive Grant Pool</span>
                    <span className="font-mono tabular-nums text-[10px] text-[#57534E]">Stage 1 Capital Grant</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono tabular-nums font-bold text-sm sm:text-base text-[#002855]">₹50,000+</span>
                    <div className="font-mono tabular-nums text-[10px] text-[#9E2A2B] font-bold">[NON-DILUTIVE]</div>
                  </div>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-mono tabular-nums font-semibold text-[#1C1917]">Equity Requirement</span>
                    <span className="font-mono tabular-nums text-[10px] text-[#57534E]">Retained Founder Equity</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono tabular-nums font-bold text-sm sm:text-base text-[#9E2A2B]">0.0%</span>
                    <div className="font-mono tabular-nums text-[10px] text-[#57534E]">[100% OWNERSHIP]</div>
                  </div>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-mono tabular-nums font-semibold text-[#1C1917]">Accelerated Build Sprint</span>
                    <span className="font-mono tabular-nums text-[10px] text-[#57534E]">Hybrid Virtual + On-Site</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono tabular-nums font-bold text-sm sm:text-base text-[#002855]">12 Weeks</span>
                    <div className="font-mono tabular-nums text-[10px] text-[#57534E]">[VERIFIED SPRINT]</div>
                  </div>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-mono tabular-nums font-semibold text-[#1C1917]">AICSSYC Main Stage Showcase</span>
                    <span className="font-mono tabular-nums text-[10px] text-[#57534E]">Demo Day (Oct 8–11)</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono tabular-nums font-bold text-xs sm:text-sm text-[#002855]">Main Stage Pitch</span>
                    <div className="font-mono tabular-nums text-[10px] text-[#9E2A2B] font-bold">[INSTITUTIONAL]</div>
                  </div>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-mono tabular-nums font-semibold text-[#1C1917]">Enterprise Compute Credits</span>
                    <span className="font-mono tabular-nums text-[10px] text-[#57534E]">AWS, GCP, Supabase, LLMs</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono tabular-nums font-bold text-sm sm:text-base text-[#002855]">₹100,000+</span>
                    <div className="font-mono tabular-nums text-[10px] text-[#57534E]">[TIER-1 CREDIT]</div>
                  </div>
                </div>
              </div>

              {/* Audit Guarantee Box with recessed inset shadow embossed effect */}
              <div className="mt-5 pt-4 bg-[#FAF9F6] border border-[#E5E2DA] p-3.5 flex items-start gap-2.5 text-[11px] text-[#57534E] leading-relaxed box-embossed-paper">
                <FileCheck className="h-4 w-4 text-[#002855] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#002855]">Audited Guarantee:</strong> Accepted teams retain full rights to proprietary software, patents, and system IP. Stage 1 grants require zero warrants or advisory shares.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= ADD-ON 1: TRACK EXPLORER ================= */
function TrackExplorerSection({ onOpenDossier }: { onOpenDossier: () => void }) {
  const [activeTrack, setActiveTrack] = useState<"hardware" | "software" | "hybrid">("hardware");

  const trackData = {
    hardware: {
      id: "hardware",
      badge: "TRACK // 01 · PHYSICAL EDGE",
      title: "Hardware & IoT Systems",
      subtitle: "Low-Power Edge Sensors, Telemetry & Ruggedized Hardware",
      focusThesis: "Designed for the 70–80% majority in rural & underserved regions without stable high-speed cellular coverage or continuous grid power.",
      grantAllocation: "₹75,000 Direct Component Grant",
      grantSubtext: "Non-dilutive hardware subvention + ₹1,00,000 test lab equipment quota",
      testLab: "IEEE Advanced Hardware Fabrication & Rapid PCB Assembly Labs (SMT Lines)",
      benchmarks: [
        { label: "Target BOM Unit Cost", value: "≤ $12.50 / node" },
        { label: "Off-Grid Battery Life", value: "≥ 72 Hours continuous" },
        { label: "Field MTBF Reliability", value: "≥ 10,000 Op-Hours" },
        { label: "Enclosure Ingress Rating", value: "IP67 Dust & Water sealed" },
      ],
      tags: ["Edge ML", "LoRaWAN", "NRF52 / ESP32", "Custom Multi-Layer PCB", "Solar Harvesting"],
      icon: Cpu,
    },
    software: {
      id: "software",
      badge: "TRACK // 02 · DISTRIBUTED ARCHITECTURE",
      title: "Software Platforms",
      subtitle: "Offline-First Resilient Apps, Data Sync & Local AI",
      focusThesis: "Architecting software that operates flawlessly under intermittent connectivity, severe memory constraints, and high synthetic latency.",
      grantAllocation: "₹50,000 Cloud Infrastructure Grant",
      grantSubtext: "Non-dilutive token & compute grant + $5,000 LLM API credits",
      testLab: "Distributed Edge Cloud Sandbox & High-Latency Synthetic Chaos Matrix",
      benchmarks: [
        { label: "Cold-Start Latency (2G)", value: "< 180ms on 2G edge" },
        { label: "Offline Sync Integrity", value: "100% Conflict-Free (CRDTs)" },
        { label: "Bundle Size Footprint", value: "≤ 8.5 MB total APK/WASM" },
        { label: "Data Leakage Security", value: "Zero-Knowledge Local Storage" },
      ],
      tags: ["CRDTs", "SQLite WASM", "PWA Offline", "Embedded LLMs", "Zero-Knowledge"],
      icon: Globe,
    },
    hybrid: {
      id: "hybrid",
      badge: "TRACK // 03 · CYBER-PHYSICAL",
      title: "Hybrid Systems",
      subtitle: "Hardware-Accelerated Intelligence & Micro-Grid Telemetry",
      focusThesis: "Bridging physical sensor transducers with real-time distributed intelligence to power regional agricultural, health, and energy utilities.",
      grantAllocation: "₹1,25,00,0 Full-Stack Capital Grant",
      grantSubtext: "Non-dilutive integrated grant + Dedicated AWS/GCP Hardware Lab Credits",
      testLab: "Cyber-Physical Integration Chambers & Micro-Grid Simulation Bed (HIL)",
      benchmarks: [
        { label: "Telemetry Roundtrip Sync", value: "< 900ms sensor-to-cloud" },
        { label: "Autonomous Node Failover", value: "100% Local Survivability" },
        { label: "Ingestion Throughput", value: "≥ 1,500 Events / sec" },
        { label: "Compliance Standard", value: "IEEE RF & Power Safety Certified" },
      ],
      tags: ["Hardware-in-the-Loop", "Embedded Linux", "MQTT / gRPC", "AI Accelerators", "Micro-Grids"],
      icon: Layers,
    },
  };

  const current = trackData[activeTrack];
  const IconComponent = current.icon;

  return (
    <section id="tracks" className="py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E2DA] gap-4">
          <div>
            <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9E2A2B]" />
              <span>INTERACTIVE SPECIFICATION // 01</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002855] font-normal leading-tight">
              Track Explorer: Solving for the 70–80%
            </h2>
            <p className="text-sm text-[#57534E] mt-2 max-w-2xl font-sans">
              GIC provides differentiated hardware labs, non-dilutive capital grants, and technical validation benchmarks tailored to your engineering architecture.
            </p>
          </div>

          <span className="mono text-xs font-bold text-[#002855] bg-[#F9F8F5] border border-[#E5E2DA] px-3 py-1.5 shrink-0 self-start md:self-auto">
            MANDATE: NON-TRIVIAL ENGINEERING
          </span>
        </div>

        {/* 3-Track Segmented Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { id: "hardware", label: "01. Hardware & IoT", icon: Cpu, sub: "Edge Sensors & Custom PCBs" },
            { id: "software", label: "02. Software Platforms", icon: Globe, sub: "Offline-First & Resilient AI" },
            { id: "hybrid", label: "03. Hybrid Systems", icon: Layers, sub: "Cyber-Physical & Telemetry" },
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isSelected = activeTrack === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTrack(tab.id as any)}
                className={`p-4 text-left border transition-all duration-200 flex items-start gap-3.5 relative ${
                  isSelected
                    ? "bg-[#002855] text-white border-[#001D40] shadow-[0_4px_16px_rgba(0,40,85,0.18)] translate-y-[-2px]"
                    : "bg-[#F9F8F5] text-[#002855] border-[#E5E2DA] hover:bg-[#F4F2EC] active:translate-y-0.5"
                }`}
              >
                <div className={`p-2 border shrink-0 ${isSelected ? "bg-white/10 border-white/20 text-white" : "bg-white border-[#E5E2DA] text-[#002855]"}`}>
                  <TabIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className={`font-sans font-bold text-sm sm:text-base ${isSelected ? "text-white" : "text-[#002855]"}`}>
                    {tab.label}
                  </div>
                  <div className={`font-mono text-[11px] mt-0.5 ${isSelected ? "text-[#E5E2DA]/80" : "text-[#57534E]"}`}>
                    {tab.sub}
                  </div>
                </div>
                {isSelected && (
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#9E2A2B] animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Track Specification Board */}
        <div className="bg-[#FAF9F5] border border-[#E5E2DA] p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,40,85,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Thesis & Architectural Scope */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 px-2.5 py-0.5 uppercase">
                    {current.badge}
                  </span>
                  <span className="font-mono text-[10px] text-[#57534E] tabular-nums">
                    SPEC CODE: GIC-TRK-{current.id.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <IconComponent className="h-7 w-7 text-[#002855]" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#002855] font-normal">
                    {current.title}
                  </h3>
                </div>

                <p className="font-sans font-semibold text-xs sm:text-sm text-[#002855] mb-4">
                  {current.subtitle}
                </p>

                <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-4 mb-6 box-embossed-paper">
                  <div className="font-mono text-[10px] font-bold text-[#9E2A2B] uppercase mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>70–80% UNDERSERVED POPULATION MANDATE</span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {current.focusThesis}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[10px] font-bold text-[#57534E] uppercase mb-2">
                    // KEY ARCHITECTURAL PROTOCOLS & STACKS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] text-[#002855] bg-white border border-[#E5E2DA] px-2.5 py-1 font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E2DA]">
                <button
                  onClick={onOpenDossier}
                  className="btn-tactile-primary bg-[#002855] text-white hover:bg-[#001D40] px-5 py-3 text-xs font-bold uppercase tracking-wider border border-[#001A38] active:translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Apply for {current.title} Track</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Lab Allocations & Benchmark Cards */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Grant Allocation Card */}
              <div className="bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] font-bold text-[#57534E] uppercase">
                    PROTOTYPE GRANT ALLOCATION
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 px-2 py-0.5">
                    NON-DILUTIVE
                  </span>
                </div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#002855] tabular-nums mt-1">
                  {current.grantAllocation}
                </div>
                <div className="font-mono text-[11px] text-[#57534E] mt-1">
                  {current.grantSubtext}
                </div>
              </div>

              {/* Lab Allocation Card */}
              <div className="bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <div className="font-mono text-[10px] font-bold text-[#57534E] uppercase mb-1">
                  TEST LAB & SANDBOX FACILITY
                </div>
                <div className="font-sans font-bold text-sm sm:text-base text-[#002855] mt-1">
                  {current.testLab}
                </div>
                <div className="font-mono text-[10px] text-[#9E2A2B] font-semibold mt-1">
                  [100% INCLUDED UNDER IEEE COMPUTER SOCIETY]
                </div>
              </div>

              {/* Verified Benchmarks Grid */}
              <div className="bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <div className="font-mono text-[10px] font-bold text-[#002855] uppercase tracking-wider mb-3 pb-2 border-b border-[#E5E2DA]">
                  // QUANTIFIABLE ENGINEERING BENCHMARKS (SLA)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {current.benchmarks.map((bm, i) => (
                    <div key={i} className="p-2.5 bg-[#FAF9F6] border border-[#E5E2DA]">
                      <div className="font-mono text-[10px] text-[#57534E]">{bm.label}</div>
                      <div className="font-mono font-bold text-[#002855] text-xs sm:text-sm tabular-nums mt-0.5">
                        {bm.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= ADD-ON 2: COHORT TIER & BENEFIT CALCULATOR ================= */
function CohortTierCalculatorSection({ onOpenDossier }: { onOpenDossier: () => void }) {
  const [selectedTier, setSelectedTier] = useState<"top10" | "general">("top10");
  const [teamSize, setTeamSize] = useState<number>(3);

  const isTop10 = selectedTier === "top10";

  // Dynamic calculations based on team size
  const travelStipendPerMember = isTop10 ? 35000 : 0;
  const computeValue = isTop10 ? 100000 : 50000;
  const cashGrant = isTop10 ? 200000 : 50000;
  const totalTravel = travelStipendPerMember * teamSize;
  const estimatedTotalPackage = cashGrant + computeValue + totalTravel + (isTop10 ? 150000 : 50000);

  return (
    <section id="tiers" className="py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E2DA] gap-4">
          <div>
            <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9E2A2B]" />
              <span>INTERACTIVE CALCULATOR // 02</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002855] font-normal leading-tight">
              Cohort Tier & Benefit Calculator
            </h2>
            <p className="text-sm text-[#57534E] mt-2 max-w-2xl font-sans">
              Compare non-dilutive benefits between the General Incubation Cohort and the Top 10 Finalist Delegation pitching live at AICSSYC 2026.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FFFFFF] border border-[#E5E2DA] p-1 self-start md:self-auto shadow-sm">
            <button
              onClick={() => setSelectedTier("top10")}
              className={`px-4 py-2 text-xs font-bold uppercase font-mono transition-all ${
                isTop10
                  ? "bg-[#002855] text-white shadow-sm"
                  : "text-[#57534E] hover:text-[#002855]"
              }`}
            >
              ★ Top 10 Delegation
            </button>
            <button
              onClick={() => setSelectedTier("general")}
              className={`px-4 py-2 text-xs font-bold uppercase font-mono transition-all ${
                !isTop10
                  ? "bg-[#002855] text-white shadow-sm"
                  : "text-[#57534E] hover:text-[#002855]"
              }`}
            >
              General Cohort (8–12)
            </button>
          </div>
        </div>

        {/* Dynamic Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Parameters & Live Totals */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E5E2DA] p-6 sm:p-8 term-sheet-card">
            
            <div className="border-b border-[#002855] pb-4 mb-6 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] text-[#9E2A2B] font-bold uppercase">
                  FINANCIAL LEDGER ESTIMATE
                </div>
                <h3 className="font-serif text-2xl text-[#002855] font-normal">
                  {isTop10 ? "Top 10 Finalist Package" : "General Cohort Package"}
                </h3>
              </div>
              <span className="font-mono text-xs font-bold text-[#002855] bg-[#F9F8F5] border border-[#E5E2DA] px-2.5 py-1">
                {isTop10 ? "STAGE 1+2 VIP" : "STAGE 1 STANDARD"}
              </span>
            </div>

            {/* Team Size Slider */}
            <div className="mb-6 bg-[#FAF9F6] border border-[#E5E2DA] p-4 box-embossed-paper">
              <div className="flex justify-between items-center mb-2">
                <label className="font-mono text-xs font-bold text-[#002855] uppercase flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  <span>Founding Team Size</span>
                </label>
                <span className="font-mono text-sm font-bold text-[#9E2A2B] bg-white border border-[#E5E2DA] px-2.5 py-0.5 tabular-nums">
                  {teamSize} {teamSize === 1 ? "Member" : "Founders"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full accent-[#002855] cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#57534E] mt-1">
                <span>1 Solo</span>
                <span>2</span>
                <span>3 Typical</span>
                <span>4</span>
                <span>5 Max Team</span>
              </div>
            </div>

            {/* Total Estimated Value Display */}
            <div className="bg-[#002855] text-white p-6 mb-6 shadow-md border border-[#001D40] relative overflow-hidden">
              <div className="font-mono text-[10px] text-[#E5E2DA]/80 uppercase tracking-widest">
                TOTAL COLLECTIVE NON-DILUTIVE VALUE
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mt-1 tabular-nums">
                ₹{estimatedTotalPackage.toLocaleString("en-IN")}+
              </div>
              <div className="font-mono text-[11px] text-[#E5E2DA]/90 mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#9E2A2B]" />
                <span>0.0% Equity · Retain 100% Founder Ownership</span>
              </div>
            </div>

            {/* Breakdown List */}
            <div className="divide-y divide-[#E5E2DA] font-mono text-xs mb-6">
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#57534E]">Direct Capital Grant</span>
                <span className="font-bold text-[#002855] tabular-nums">₹{cashGrant.toLocaleString("en-IN")}</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#57534E]">Compute & LLM Credits</span>
                <span className="font-bold text-[#002855] tabular-nums">₹{computeValue.toLocaleString("en-IN")}</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#57534E]">Travel & On-Site Lodging</span>
                <span className="font-bold text-[#9E2A2B] tabular-nums">
                  {totalTravel > 0 ? `₹${totalTravel.toLocaleString("en-IN")} (100% Covered)` : "Virtual Stipend"}
                </span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#57534E]">Dedicated Mentorship & Lab</span>
                <span className="font-bold text-[#002855] tabular-nums">{isTop10 ? "₹1,50,000 (VIP EIR)" : "₹50,000 (Cohort)"}</span>
              </div>
            </div>

            <button
              onClick={onOpenDossier}
              className="btn-tactile-primary w-full bg-[#002855] text-white hover:bg-[#001D40] py-3 text-xs font-bold uppercase tracking-wider border border-[#001A38] active:translate-y-0.5 transition-all text-center"
            >
              Apply for {isTop10 ? "Top 10 Delegation" : "Cohort Intake"}
            </button>

          </div>

          {/* Right Column: Comparison Matrix Table */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E5E2DA] p-6 sm:p-8 shadow-sm">
            <div className="font-mono text-xs font-bold text-[#002855] uppercase tracking-wider mb-6 pb-2 border-b border-[#E5E2DA] flex justify-between items-center">
              <span>// SIDE-BY-SIDE TIER SPECIFICATION MATRIX</span>
              <span className="font-mono text-[10px] text-[#9E2A2B]">AICSSYC 2026</span>
            </div>

            <div className="space-y-4">
              
              {/* Row 1: Cash Prize */}
              <div className={`p-4 border transition-all ${isTop10 ? "bg-[#FAF9F6] border-[#002855]" : "bg-white border-[#E5E2DA]"}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-sans font-bold text-sm text-[#002855] flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#9E2A2B]" />
                    <span>Cash Prize & Non-Dilutive Grant Pool</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#9E2A2B]">[CAPITAL]</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mt-2">
                  <div className={`p-2.5 border ${!isTop10 ? "bg-[#FAF9F5] border-[#002855] font-bold" : "bg-white border-[#E5E2DA]"}`}>
                    <div className="text-[10px] text-[#57534E]">GENERAL COHORT</div>
                    <div className="text-[#002855] mt-0.5">₹50,000 Stage 1 Grant</div>
                  </div>
                  <div className={`p-2.5 border ${isTop10 ? "bg-[#002855] text-white border-[#001D40] font-bold" : "bg-white border-[#E5E2DA]"}`}>
                    <div className={isTop10 ? "text-[#E5E2DA]/80 text-[10px]" : "text-[10px] text-[#57534E]"}>TOP 10 DELEGATION</div>
                    <div className={isTop10 ? "text-white mt-0.5" : "text-[#9E2A2B] mt-0.5 font-bold"}>
                      ₹2,00,000 ($2,500 USD) Top Prize
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Travel Allowance */}
              <div className={`p-4 border transition-all ${isTop10 ? "bg-[#FAF9F6] border-[#002855]" : "bg-white border-[#E5E2DA]"}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-sans font-bold text-sm text-[#002855] flex items-center gap-2">
                    <Plane className="h-4 w-4 text-[#002855]" />
                    <span>Travel Allowance & Physical Convention Passes</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#002855]">[TRAVEL]</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mt-2">
                  <div className={`p-2.5 border ${!isTop10 ? "bg-[#FAF9F5] border-[#002855] font-bold" : "bg-white border-[#E5E2DA]"}`}>
                    <div className="text-[10px] text-[#57534E]">GENERAL COHORT</div>
                    <div className="text-[#57534E] mt-0.5">Virtual Access + Stipend</div>
                  </div>
                  <div className={`p-2.5 border ${isTop10 ? "bg-[#002855] text-white border-[#001D40] font-bold" : "bg-white border-[#E5E2DA]"}`}>
                    <div className={isTop10 ? "text-[#E5E2DA]/80 text-[10px]" : "text-[10px] text-[#57534E]"}>TOP 10 DELEGATION</div>
                    <div className={isTop10 ? "text-white mt-0.5" : "text-[#002855] mt-0.5 font-bold"}>
                      100% Travel + On-Site VIP Lodging
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Keynote Stage Placement */}
              <div className={`p-4 border transition-all ${isTop10 ? "bg-[#FAF9F6] border-[#002855]" : "bg-white border-[#E5E2DA]"}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-sans font-bold text-sm text-[#002855] flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#9E2A2B]" />
                    <span>AICSSYC 2026 Convention Stage Placement</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#9E2A2B]">[EXPOSURE]</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mt-2">
                  <div className={`p-2.5 border ${!isTop10 ? "bg-[#FAF9F5] border-[#002855] font-bold" : "bg-white border-[#E5E2DA]"}`}>
                    <div className="text-[10px] text-[#57534E]">GENERAL COHORT</div>
                    <div className="text-[#57534E] mt-0.5">Virtual Demo Room Showcase</div>
                  </div>
                  <div className={`p-2.5 border ${isTop10 ? "bg-[#002855] text-white border-[#001D40] font-bold" : "bg-white border-[#E5E2DA]"}`}>
                    <div className={isTop10 ? "text-[#E5E2DA]/80 text-[10px]" : "text-[10px] text-[#57534E]"}>TOP 10 DELEGATION</div>
                    <div className={isTop10 ? "text-white mt-0.5" : "text-[#002855] mt-0.5 font-bold"}>
                      Main Keynote Stage Live Pitch (10k+ Stream)
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: 1:1 Operator & VC Syndicate Matching */}
              <div className={`p-4 border transition-all ${isTop10 ? "bg-[#FAF9F6] border-[#002855]" : "bg-white border-[#E5E2DA]"}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-sans font-bold text-sm text-[#002855] flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#002855]" />
                    <span>Advisory & Follow-on Venture Syndicate</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#002855]">[SYNDICATE]</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mt-2">
                  <div className={`p-2.5 border ${!isTop10 ? "bg-[#FAF9F5] border-[#002855] font-bold" : "bg-white border-[#E5E2DA]"}`}>
                    <div className="text-[10px] text-[#57534E]">GENERAL COHORT</div>
                    <div className="text-[#57534E] mt-0.5">Bi-Weekly Masterclasses</div>
                  </div>
                  <div className={`p-2.5 border ${isTop10 ? "bg-[#002855] text-white border-[#001D40] font-bold" : "bg-white border-[#E5E2DA]"}`}>
                    <div className={isTop10 ? "text-[#E5E2DA]/80 text-[10px]" : "text-[10px] text-[#57534E]"}>TOP 10 DELEGATION</div>
                    <div className={isTop10 ? "text-white mt-0.5" : "text-[#002855] mt-0.5 font-bold"}>
                      Dedicated EIR Fellow + Direct VC Introductions
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= ADD-ON 3: 12-WEEK SPRINT SCRUBBER ================= */
function SprintScrubberSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      stepNumber: "01",
      timeline: "WEEKS 1–3",
      title: "Architectural Foundation & Threat Modeling",
      theme: "Defensible System Design, Component Audit & SASD Sign-off",
      description:
        "Founders define core engineering constraints, select defensible hardware/software primitives, conduct threat modeling, and formalize their System Architecture Specification Document (SASD).",
      mentors: [
        { name: "Dr. Anika Rao", role: "AI Research Lead", org: "IEEE Computer Society" },
        { name: "Marcus Vinter", role: "General Partner", org: "Northwind Ventures" },
      ],
      deliverables: [
        "System Architecture Specification Document (SASD)",
        "50 Target Underserved Community Field Interviews",
        "Non-Dilutive Grant Tranche 1 (25%) Disbursement",
        "Git Repository Lockdown & IP Protection Audit",
      ],
      grantTranche: "Tranche 1: 25% Released Upon SASD Approval",
      milestoneSLA: "Core technical risk reduced & IP defense strategy locked",
    },
    {
      stepNumber: "02",
      timeline: "WEEKS 4–7",
      title: "Alpha Rapid Build & Field Telemetry",
      theme: "Hardware Prototyping, Resilient APIs & Synthetic Chaos Testing",
      description:
        "Teams execute on physical PCB assembly or deploy distributed offline-first cloud stacks. Lab trials are run under synthetic high-latency, packet-loss, and power-cycling test conditions.",
      mentors: [
        { name: "Kenji Watanabe", role: "Chief Scientist", org: "Kaimon Robotics" },
        { name: "Elena Duarte", role: "Product Advisor", org: "Ex-Stripe Infrastructure" },
      ],
      deliverables: [
        "Functional Alpha Device / Running MVP Codebase",
        "End-to-End Cloud Telemetry Pipeline Integration",
        "Safety & Radio Frequency (RF) Compliance Pre-Screen",
        "Non-Dilutive Grant Tranche 2 (35%) Disbursement",
      ],
      grantTranche: "Tranche 2: 35% Released Upon Working Alpha Validation",
      milestoneSLA: "Continuous field test pass rate ≥ 98% with zero packet loss",
    },
    {
      stepNumber: "03",
      timeline: "WEEKS 8–10",
      title: "Go-To-Market & Unit Economics Stress Test",
      theme: "Commercial Modeling, Pilot Deployment & Investor Memorandum",
      description:
        "Validating customer acquisition economics, signing enterprise pilot LOIs, stress-testing BOM margins at scale, and preparing formal investment memos for syndicate partners.",
      mentors: [
        { name: "Samuel Okafor", role: "GTM Executive Advisor", org: "Andela / Alt Capital" },
        { name: "Priya Shankar", role: "Founder & CEO", org: "OrbitLabs Distributed" },
      ],
      deliverables: [
        "Audited Unit Economics & Scaled BOM Margin Model",
        "3 Signed Letters of Intent (LOIs) / Pilot Trial Agreements",
        "Formal Investor Memorandum & Pitch Deck V1",
        "Non-Dilutive Grant Tranche 3 (40%) Disbursement",
      ],
      grantTranche: "Tranche 3: 40% Released Upon Commercial Pilot Validation",
      milestoneSLA: "Proof of customer traction & pilot deployment verified",
    },
    {
      stepNumber: "04",
      timeline: "DEMO DAY (OCT 8–11)",
      title: "AICSSYC 2026 Main Stage Pitch",
      theme: "Live Hardware & Software Demonstration Before VC Jury & Global Audience",
      description:
        "The cohort convenes live at AICSSYC 2026. The Top 10 teams pitch on the main keynote stage, undergo live technical Q&A before institutional VC leads, and compete for the ₹2,00,000 ($2,500) prize pool.",
      mentors: [
        { name: "IEEE CS Executive Secretariat", role: "Governing Panel", org: "Global Incubation Committee" },
        { name: "Venture Capital Jury", role: "Lead Syndicate", org: "Northwind, Nexora & AtlasLabs" },
      ],
      deliverables: [
        "AICSSYC 2026 Main Keynote Live Product Demonstration",
        "Prize Award Ceremony (Up to ₹2,00,000 / $2,500 USD)",
        "Institutional Follow-on Angel Syndicate Onboarding",
        "Official IEEE CS Incubation Charter & Post-Cohort Advisory",
      ],
      grantTranche: "Top Award: ₹2,00,000 ($2,500 USD) Cash Prize + Institutional Syndication",
      milestoneSLA: "Broadcast to 10,000+ global engineering & venture leaders",
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="sprint" className="py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E2DA] gap-4">
          <div>
            <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9E2A2B]" />
              <span>INTERACTIVE TIMELINE // 03</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002855] font-normal leading-tight">
              12-Week Sprint Scrubber
            </h2>
            <p className="text-sm text-[#57534E] mt-2 max-w-2xl font-sans">
              Scrub through the 12-week verified incubation pathway to inspect weekly deliverables, lead operator mentors, and capital tranche releases.
            </p>
          </div>

          <span className="mono text-xs font-bold text-[#002855] bg-[#F9F8F5] border border-[#E5E2DA] px-3 py-1.5 shrink-0 self-start md:self-auto">
            TIMELINE: 12 WEEKS TO MAIN STAGE
          </span>
        </div>

        {/* Interactive Step Scrubber Track */}
        <div className="mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 text-left border transition-all duration-200 relative ${
                    isActive
                      ? "bg-[#002855] text-white border-[#001D40] shadow-[0_4px_16px_rgba(0,40,85,0.18)] translate-y-[-2px]"
                      : "bg-[#F9F8F5] text-[#002855] border-[#E5E2DA] hover:bg-[#F4F2EC] active:translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isActive ? "text-[#E5E2DA]" : "text-[#9E2A2B]"}`}>
                      PHASE {s.stepNumber}
                    </span>
                    <span className={`font-mono text-[10px] px-2 py-0.5 font-bold ${isActive ? "bg-white/20 text-white" : "bg-white text-[#002855] border border-[#E5E2DA]"}`}>
                      {s.timeline}
                    </span>
                  </div>
                  <div className={`font-sans font-bold text-xs sm:text-sm line-clamp-2 ${isActive ? "text-white" : "text-[#002855]"}`}>
                    {s.title}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#9E2A2B]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Stage Viewport Card */}
        <div className="bg-[#FAF9F5] border border-[#E5E2DA] p-6 sm:p-10 shadow-[0_2px_12px_rgba(0,40,85,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Theme & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 px-2.5 py-0.5 uppercase">
                    STAGE {current.stepNumber} · {current.timeline}
                  </span>
                  <span className="font-mono text-[11px] text-[#57534E]">VERIFIED SPRINT MILESTONE</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-[#002855] font-normal leading-tight">
                  {current.title}
                </h3>
                
                <div className="font-sans font-semibold text-xs sm:text-sm text-[#002855] mt-1 mb-4">
                  {current.theme}
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Lead Mentors Block */}
              <div className="bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <div className="font-mono text-[10px] font-bold text-[#57534E] uppercase tracking-wider mb-3 pb-2 border-b border-[#E5E2DA]">
                  // LEAD OPERATOR MENTORS & ADVISORY FACULTY
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {current.mentors.map((m, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-9 w-9 bg-[#002855] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-sm">
                        {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-sans font-bold text-xs text-[#002855]">{m.name}</div>
                        <div className="font-mono text-[10px] text-[#9E2A2B] font-semibold">{m.role}</div>
                        <div className="font-mono text-[9px] text-[#57534E]">{m.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Deliverables Checklist & Tranche Details */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Deliverables Checklist */}
              <div className="bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <div className="font-mono text-[10px] font-bold text-[#002855] uppercase tracking-wider mb-3 pb-2 border-b border-[#E5E2DA] flex justify-between items-center">
                  <span>STAGE DELIVERABLES</span>
                  <span className="font-mono text-[10px] text-[#9E2A2B] font-bold">[VERIFIED CHECKLIST]</span>
                </div>
                
                <ul className="space-y-2.5 text-xs">
                  {current.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#1C1917]">
                      <CheckCircle2 className="h-4 w-4 text-[#002855] shrink-0 mt-0.5" />
                      <span className="leading-snug font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capital Tranche & SLA Card */}
              <div className="bg-[#FAF9F6] p-4 border border-[#E5E2DA] box-embossed-paper">
                <div className="font-mono text-[10px] font-bold text-[#9E2A2B] uppercase mb-1">
                  GRANT DISBURSEMENT TRANCHE
                </div>
                <div className="font-mono font-bold text-xs text-[#002855]">
                  {current.grantTranche}
                </div>
                <div className="font-mono text-[10px] text-[#57534E] mt-2 pt-2 border-t border-[#E5E2DA]/60">
                  <strong className="text-[#002855]">Quality Benchmark SLA:</strong> {current.milestoneSLA}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= 2. SECTION 01: ABOUT GIC & THE TWO GAPS THESIS ================= */
function AboutTwoGapsSection() {
  return (
    <section id="about" className="py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-3">
          SECTION / 01 // ABOUT / FILE № 001
        </div>
        
        <h2 className="font-serif text-3xl sm:text-5xl text-[#002855] leading-tight mb-8 font-normal">
          Most incubation programs stop the moment an idea becomes a prototype. GIC doesn’t.
        </h2>

        {/* Lead Narrative */}
        <div className="bg-[#FAF9F6] border border-[#E5E2DA] p-8 sm:p-10 mb-10 text-sm sm:text-base text-[#57534E] leading-relaxed">
          <p className="mb-4">
            The <strong>Global Incubation Committee (GIC)</strong> is an initiative of the <strong>IEEE Computer Society</strong>, built as an exclusive startup pitching competition for AICSSYC, followed by a dedicated incubation ecosystem to solve real problems for the 70–80% of the world's population who are typically underserved by mainstream innovation — marginalised communities, underserved regions, and overlooked markets.
          </p>
          <p>
            Whether the solution is a hardware device, a software platform, or a hardware + software system, GIC provides the mentorship, technical guidance, and structured support to take it from a bold idea to a sustainable, scalable venture with genuine social impact.
          </p>
        </div>

        {/* Dual Gaps Breakdown */}
        <div className="mb-10">
          <div className="mono text-xs font-bold text-[#002855] uppercase tracking-widest mb-4">
            // THE DUAL GAPS THESIS
          </div>
          <p className="text-sm text-[#57534E] mb-6 leading-relaxed">
            GIC exists to close two gaps at once: the gap between research and real-world impact, and the gap between prototype and startup — the exact point where most founders are left to fend for themselves. We stay with founders through both.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#E5E2DA] bg-[#FAF9F6] p-8">
              <div className="mono text-xs font-bold text-[#9E2A2B] uppercase mb-2">[ GAP 01 ]</div>
              <h3 className="font-serif text-2xl text-[#002855] mb-3 font-normal">Research to Real-World Impact</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Translating peer-reviewed technical research and academic breakthroughs into deployable software, hardware, and system architectures that solve pressing global challenges.
              </p>
            </div>

            <div className="border border-[#E5E2DA] bg-[#FAF9F6] p-8">
              <div className="mono text-xs font-bold text-[#9E2A2B] uppercase mb-2">[ GAP 02 ]</div>
              <h3 className="font-serif text-2xl text-[#002855] mb-3 font-normal">Prototype to Sustainable Startup</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Providing structured mentorship, investor readiness, and go-to-market execution past the prototype stage, where most traditional accelerators abandon founders.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Scope Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 border border-[#E5E2DA] bg-[#FFFFFF] text-center">
            <div className="mono text-xs font-bold text-[#002855]">100% Social Impact</div>
            <div className="mono text-[10px] text-[#57534E] mt-0.5 uppercase">Underserved Population Focus</div>
          </div>
          <div className="p-4 border border-[#E5E2DA] bg-[#FFFFFF] text-center">
            <div className="mono text-xs font-bold text-[#002855]">Hardware + Software</div>
            <div className="mono text-[10px] text-[#57534E] mt-0.5 uppercase">Hybrid Systems Support</div>
          </div>
          <div className="p-4 border border-[#E5E2DA] bg-[#FFFFFF] text-center">
            <div className="mono text-xs font-bold text-[#9E2A2B]">∞ Ambition</div>
            <div className="mono text-[10px] text-[#57534E] mt-0.5 uppercase">Uncapped Scalability</div>
          </div>
          <div className="p-4 border border-[#E5E2DA] bg-[#FFFFFF] text-center">
            <div className="mono text-xs font-bold text-[#002855]">Scope: Global</div>
            <div className="mono text-[10px] text-[#57534E] mt-0.5 uppercase">International Intake</div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= 3. VISION, MISSION & 5 STRATEGIC OBJECTIVES ================= */
function VisionMissionObjectivesSection() {
  const missionList = [
    "Foster innovation-driven, socially conscious entrepreneurship.",
    "Support early-stage startups through structured, end-to-end incubation — from idea to prototype, and from prototype to startup.",
    "Connect innovators with mentors, industry experts, investors, and academic leaders who stay engaged through every stage.",
    "Accelerate the commercialization of research and emerging technologies, with priority given to solutions serving marginalised and underserved populations.",
    "Build an inclusive global community of entrepreneurs, researchers, and technology professionals working across hardware, software, and hybrid systems.",
  ];

  const objectivesList = [
    { code: "OBJ / 01", title: "Foster Innovation", desc: "Encourage the development of innovative hardware, software, and hybrid solutions addressing real-world challenges for marginalised populations." },
    { code: "OBJ / 02", title: "Support Entrepreneurs, Fully", desc: "Provide structured mentorship and technical guidance that continues past the prototype stage, into company-building." },
    { code: "OBJ / 03", title: "Accelerate Startup Growth", desc: "Offer incubation from idea validation through product development, market readiness, and scaling." },
    { code: "OBJ / 04", title: "Bridge Academia and Industry", desc: "Facilitate collaboration among universities, researchers, corporations, government bodies, and startups." },
    { code: "OBJ / 05", title: "Enable Global Collaboration", desc: "Build international partnerships that give startups access to global markets, expertise, and networks." },
  ];

  return (
    <section id="vision" className="py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          // STRATEGIC MANDATE
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10">
          Vision & Strategic Mandate
        </h2>

        {/* Vision Blockquote */}
        <div className="bg-[#FFFFFF] border border-[#E5E2DA] border-l-4 border-l-[#002855] p-8 mb-12 shadow-sm">
          <div className="mono text-xs font-bold text-[#002855] uppercase mb-3">[ GLOBAL VISION STATEMENT ]</div>
          <blockquote className="font-serif text-xl sm:text-2xl text-[#002855] leading-relaxed italic font-normal">
            "To become a globally recognized social enterprise incubation ecosystem that empowers innovators to build technologies and startups that create meaningful, lasting change for the majority of the world's population — not just its most privileged segment."
          </blockquote>
        </div>

        {/* Mission List (01-05) */}
        <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-8 mb-12">
          <div className="mono text-xs font-bold text-[#002855] uppercase tracking-widest mb-6 border-b border-[#E5E2DA] pb-3">
            MISSION DIRECTIVES // 01 → 05
          </div>

          <div className="divide-y divide-[#E5E2DA]">
            {missionList.map((m, i) => (
              <div key={i} className="py-4 flex items-start gap-4 first:pt-0 last:pb-0">
                <span className="mono font-bold text-sm text-[#9E2A2B] bg-[#F9F8F5] px-2.5 py-1 border border-[#E5E2DA] shrink-0">
                  0{i + 1}
                </span>
                <p className="text-sm sm:text-base text-[#1C1917] font-sans leading-relaxed pt-0.5">
                  {m}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Institutional Objectives Ledger */}
        <div>
          <div className="mono text-xs font-bold text-[#002855] uppercase tracking-widest mb-6">
            // INSTITUTIONAL OBJECTIVES LEDGER
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectivesList.map((obj, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#E5E2DA] p-6">
                <div className="mono text-xs font-bold text-[#9E2A2B] mb-2">{obj.code}</div>
                <h3 className="font-sans font-bold text-base text-[#002855] mb-2">{obj.title}</h3>
                <p className="text-xs text-[#57534E] leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= 4. TIMELINE: 2025 → 2026 (04 MILESTONES) ================= */
function TimelineMilestonesSection() {
  const milestones = [
    { period: "Q4 · 2025", label: "Concept & Charter", detail: "Framework ratified under IEEE·CS." },
    { period: "Q1 · 2026", label: "Mentor Onboarding", detail: "Global advisory panel confirmed." },
    { period: "Q2 · 2026", label: "Applications Open", detail: "Startups worldwide invited to apply." },
    { period: "AICSSYC · 2026", label: "Official Launch", detail: "Inaugural cohort unveiled live." },
  ];

  return (
    <section id="timeline" className="py-16 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8 border-b border-[#002855] pb-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#002855]">TIMELINE: 2025 → 2026</h2>
          <span className="mono text-xs text-[#9E2A2B] font-bold">04 MILESTONES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-[#F9F8F5] border border-[#E5E2DA] p-6 relative flex flex-col justify-between">
              <div>
                <span className="mono text-xs font-bold text-[#9E2A2B] bg-[#FFFFFF] px-2.5 py-1 border border-[#E5E2DA] inline-block mb-3">
                  {m.period}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#002855] mb-2">{m.label}</h3>
                <p className="text-xs text-[#57534E] leading-relaxed">{m.detail}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E5E2DA] mono text-[11px] text-[#57534E]">
                MILESTONE 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 5. SECTION 01-B: WHAT MAKES GIC DIFFERENT ================= */
function WhatMakesGicDifferentSection() {
  const priorityDomains = [
    "Underserved and marginalised communities",
    "Low-resource and rural settings",
    "Accessibility and inclusion challenges",
    "Public health, education, livelihood, and financial inclusion",
    "Climate and sustainability challenges affecting vulnerable populations",
  ];

  return (
    <section id="different" className="py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          SECTION / 01-B // DIFFERENTIATION
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-6">
          We don't stop at the prototype.
        </h2>

        <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-8 mb-12 text-sm text-[#57534E] leading-relaxed">
          Traditional incubation support often ends once a working prototype exists — leaving founders to figure out funding, business structure, go-to-market, and scaling on their own. GIC is built specifically to close that gap. This continuity is the core of what GIC offers.
        </div>

        {/* Two-Stage Continuity Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-8 border-t-4 border-t-[#002855]">
            <div className="mono text-xs font-bold text-[#002855] mb-2">STAGE 1 // IDEA → PROTOTYPE</div>
            <h3 className="font-sans font-bold text-xl text-[#002855] mb-3">Ideation & Technical Guidance</h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Ideation support, technical mentorship, validation, and hands-on prototyping guidance across hardware, software, and hardware+software systems.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-8 border-t-4 border-t-[#9E2A2B]">
            <div className="mono text-xs font-bold text-[#9E2A2B] mb-2">STAGE 2 // PROTOTYPE → STARTUP</div>
            <h3 className="font-sans font-bold text-xl text-[#002855] mb-3">Venture Formation & GTM</h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Business strategy, investor readiness, legal/IP guidance, mentor-matching, and go-to-market support to turn a working prototype into a functioning company.
            </p>
          </div>
        </div>

        {/* Priority Domains */}
        <div>
          <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-3">
            SOCIAL ENTERPRISE FOR THE 70–80%
          </div>
          <p className="text-sm text-[#57534E] mb-6 leading-relaxed max-w-3xl">
            GIC prioritizes ventures that address problems affecting the majority, not the minority — the populations most incubation ecosystems overlook. Solutions can be hardware-based, software-based, or a combination of both — GIC's mentorship and infrastructure support all three tracks equally.
          </p>

          <div className="flex flex-wrap gap-3">
            {priorityDomains.map((domain, idx) => (
              <span key={idx} className="mono text-xs text-[#002855] bg-[#FFFFFF] border border-[#E5E2DA] px-3.5 py-2 font-medium flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#9E2A2B] rounded-full shrink-0" />
                {domain}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= 6. SECTION 02: CORE PRINCIPLES ================= */
function CorePrinciplesSection() {
  const rules = [
    { code: "RULE / 01", title: "Impact First", desc: "Every venture we support must move the needle for the people it's built for." },
    { code: "RULE / 02", title: "Entrepreneur-Centric", desc: "Our support doesn't end at the prototype; it's designed around the founder's full journey." },
    { code: "RULE / 03", title: "Global Perspective", desc: "Innovation transcends borders; we encourage international collaboration and market access." },
    { code: "RULE / 04", title: "Collaboration Over Competition", desc: "Meaningful innovation flourishes through multidisciplinary collaboration." },
    { code: "RULE / 05", title: "Integrity & Ethics", desc: "Every initiative is guided by transparency, fairness, and accountability." },
    { code: "RULE / 06", title: "Inclusivity", desc: "We welcome innovators from diverse backgrounds, disciplines, and communities." },
    { code: "RULE / 07", title: "Continuous Learning", desc: "Entrepreneurship is a journey of lifelong learning and resilience." },
    { code: "RULE / 08", title: "Sustainable Impact", desc: "We back ventures that create lasting economic, technological, environmental, and societal value." },
  ];

  return (
    <section id="principles" className="py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          SECTION / 02 // CORE PRINCIPLES
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-12">
          The Rules of the House
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((r, i) => (
            <div key={i} className="bg-[#F9F8F5] border border-[#E5E2DA] p-6 flex flex-col justify-between">
              <div>
                <div className="mono text-xs font-bold text-[#9E2A2B] mb-3">{r.code}</div>
                <h3 className="font-sans font-bold text-base text-[#002855] mb-2">{r.title}</h3>
                <p className="text-xs text-[#57534E] leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= 7. SECTION 03: WHAT GIC OFFERS — FULL STACK ================= */
function FullStackOfferingsSection() {
  const provisions = [
    "Structured Startup Incubation (idea → prototype → startup)",
    "Business Strategy Development",
    "Expert Mentorship through prototyping & company-building",
    "Investor Readiness Programs",
    "Technical Consultation across hardware, software, & hybrid systems",
    "Startup Pitch Opportunities",
    "Product Validation",
    "Networking with Global Experts",
    "Research Commercialization Support",
    "Access to Innovation Ecosystems",
    "Industry Collaboration",
    "Workshops and Bootcamps",
    "Intellectual Property Guidance",
    "Demo Days and Showcase Events",
  ];

  return (
    <section id="offerings" className="py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          SECTION / 03 // WHAT GIC OFFERS
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10">
          A Full Stack for the Modern Founder
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {provisions.map((item, idx) => (
            <div key={idx} className="bg-[#FFFFFF] border border-[#E5E2DA] p-5 flex items-start gap-3">
              <span className="mono font-bold text-xs text-[#9E2A2B] bg-[#F9F8F5] px-2 py-0.5 border border-[#E5E2DA] shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#002855] font-sans leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= 8. SECTION 04: WHO CAN APPLY ================= */
function WhoCanApplySection() {
  const categories = [
    "Students",
    "Technology Entrepreneurs",
    "Researchers",
    "Social Innovators",
    "Faculty Members",
    "Deep-Tech Founders",
    "Early-Stage Startups",
    "AI & Emerging Tech Startups",
    "Hardware / Hybrid Innovators",
    "Individual Innovators",
  ];

  return (
    <section className="py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          SECTION / 04 // ELIGIBILITY
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10">
          Built for Every Kind of Builder
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-[#F9F8F5] border border-[#E5E2DA] p-5 text-center flex flex-col justify-between">
              <div className="mono text-[10px] text-[#9E2A2B] font-bold mb-2">APPLICANT / 0{idx + 1}</div>
              <div className="font-sans font-bold text-xs sm:text-sm text-[#002855]">{cat}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= 9. SECTION 05: WHY JOIN GIC ================= */
function WhyJoinGicSection() {
  const reasons = [
    "Build with experienced mentors who stay with you past the prototype stage.",
    "Validate ideas using industry expertise.",
    "Access strategic partnerships and global networks.",
    "Strengthen both technical and business capabilities.",
    "Connect with investors and ecosystem leaders.",
    "Accelerate product development across hardware, software, and hybrid systems.",
    "Gain visibility through national and international platforms.",
    "Become part of a thriving, impact-driven innovation community.",
  ];

  return (
    <section className="py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          SECTION / 05 // WHY JOIN GIC
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10">
          Eight Reasons Founders Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, idx) => (
            <div key={idx} className="bg-[#FFFFFF] border border-[#E5E2DA] p-6 flex items-start gap-4">
              <span className="mono font-bold text-sm text-[#9E2A2B] bg-[#F9F8F5] px-3 py-1 border border-[#E5E2DA] shrink-0">
                0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-[#1C1917] font-sans leading-relaxed pt-0.5">
                {r}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= 10. SECTION 06: INCUBATION JOURNEY ================= */
function IncubationJourneySection() {
  const stages = [
    {
      stage: "STAGE / 01",
      title: "Idea",
      subtitle: "CONCEPT & PROBLEM DEFINITION",
      desc: "Refining core engineering hypothesis, mapping population impact scope, and establishing defensible technical benchmarks.",
    },
    {
      stage: "STAGE / 02",
      title: "Validation",
      subtitle: "MARKET RESEARCH & USER INTERVIEWS",
      desc: "Conducting user interviews, customer discovery, field validation trials, and domain mapping in target underserved regions.",
    },
    {
      stage: "STAGE / 03",
      title: "Prototype",
      subtitle: "BUILD & TEST EARLY SOLUTION",
      desc: "Hardware prototyping, software architecture deployment, compute credit integration, and iterative beta testing.",
    },
    {
      stage: "STAGE / 04",
      title: "Launch & Scale",
      subtitle: "AICSSYC 2026 LIVE PITCH & ONBOARDING",
      desc: "Live pitch to VC panel at AICSSYC 2026, venture formation, and long-term ecosystem integration.",
    },
  ];

  return (
    <section id="journey" className="py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="max-w-3xl mb-12">
          <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
            SECTION / 06 // INCUBATION JOURNEY
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] leading-tight font-normal">
            A structured pathway, from spark to global scale.
          </h2>
          <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
            Every startup follows this structured pathway — supported by domain experts, industry mentors, researchers, and strategic partners at every single stage, including the ones most incubators skip.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((st, i) => (
            <div key={i} className="bg-[#F9F8F5] border border-[#E5E2DA] p-6 border-t-4 border-t-[#002855] flex flex-col justify-between">
              <div>
                <div className="mono text-xs font-bold text-[#9E2A2B] mb-2">{st.stage}</div>
                <h3 className="font-sans font-bold text-xl text-[#002855] mb-1">{st.title}</h3>
                <div className="mono text-[10px] text-[#57534E] font-semibold mb-3">{st.subtitle}</div>
                <p className="text-xs text-[#57534E] leading-relaxed">{st.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E2DA] flex items-center justify-between mono text-xs text-[#002855]">
                <span>STAGE {i + 1} OF 4</span>
                <ChevronRight className="h-4 w-4 text-[#9E2A2B]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= 11. SECTION 07: LAUNCH @ AICSSYC 2026 ================= */
function LaunchAicssycSection({ onOpenDossier }: { onOpenDossier: () => void }) {
  return (
    <section id="showcase" className="py-20 border-b border-[#E5E2DA] bg-[#002855] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="bg-[#001D40] border border-[#001A38] p-8 sm:p-12">
          <div className="mono text-xs font-bold text-[#9E2A2B] bg-white px-2.5 py-1 inline-block uppercase mb-4">
            SECTION / 07 // LAUNCH @ AICSSYC 2026
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight mb-4 font-normal">
            A new era begins in public. Where ideas become innovations, and innovations create global impact.
          </h2>

          <div className="bg-[#002855] border border-[#001A38] p-6 sm:p-8 mb-8">
            <p className="text-sm sm:text-base text-[#E5E2DA]/90 leading-relaxed font-normal mb-4">
              The inaugural edition of the Global Incubation Committee (GIC) marks a significant milestone in fostering social enterprise-driven, innovation-led entrepreneurship within the IEEE Computer Society ecosystem. GIC is an exclusive startup pitching competition for AICSSYC 2026. The top 10 teams will be called in to AICSSYC for pitching their ideas live before an expert panel, after which they will receive the dedicated incubation support they need.
            </p>
            
            <div className="flex flex-wrap gap-4 mono text-xs text-[#E5E2DA]">
              <span className="bg-[#9E2A2B] text-white px-3 py-1 font-bold">Event: AICSSYC · 2026</span>
              <span className="bg-white text-[#002855] px-3 py-1 font-bold">Oct 8 – 11, 2026</span>
              <span className="border border-white px-3 py-1">Format: Live Panel + Global Broadcast</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenDossier}
              className="btn-tactile-crimson bg-[#9E2A2B] text-white hover:bg-[#852324] px-6 py-3.5 text-xs font-bold uppercase tracking-wider border border-[#9E2A2B] active:translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>Reserve Your Spot</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#dossier"
              className="btn-tactile-secondary bg-transparent text-white hover:bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider border border-white active:translate-y-0.5 transition-all"
            >
              Partner With Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= 12. SECTION 08: STARTUP PITCH PROCESS & TIMELINE ================= */
function PitchProcessTimelineSection({ onOpenDossier }: { onOpenDossier: () => void }) {
  return (
    <section id="pitch-process" className="py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          SECTION / 08 // PROCESS & TIMELINE
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10">
          Startup Pitch Process & Official Schedule
        </h2>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="mono text-xs font-bold text-[#9E2A2B] mb-2">STEP / 01</div>
            <h3 className="font-sans font-bold text-base text-[#002855] mb-3">ELIGIBILITY</h3>
            <ul className="text-xs text-[#57534E] space-y-2 mono">
              <li>• Early-stage startups & student founders</li>
              <li>• Researchers with commercializable IP</li>
              <li>• Solo founders or teams (≤ 5)</li>
              <li>• Global applicants welcome</li>
            </ul>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="mono text-xs font-bold text-[#9E2A2B] mb-2">STEP / 02</div>
            <h3 className="font-sans font-bold text-base text-[#002855] mb-3">EVALUATION</h3>
            <ul className="text-xs text-[#57534E] space-y-2 mono">
              <li>• Innovation & technical depth</li>
              <li>• Market opportunity & scalability</li>
              <li>• Team strength & execution</li>
              <li>• Social & economic impact</li>
            </ul>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="mono text-xs font-bold text-[#9E2A2B] mb-2">STEP / 03</div>
            <h3 className="font-sans font-bold text-base text-[#002855] mb-3">SELECTION</h3>
            <ul className="text-xs text-[#57534E] space-y-2 mono">
              <li>• Online application & screening</li>
              <li>• Shortlist announcement</li>
              <li>• Live pitch to expert panel</li>
              <li>• Incubation offer & onboarding</li>
            </ul>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="mono text-xs font-bold text-[#9E2A2B] mb-2">STEP / 04</div>
            <h3 className="font-sans font-bold text-base text-[#002855] mb-3">OFFICIAL DATES</h3>
            <ul className="text-xs text-[#57534E] space-y-2 mono">
              <li>• Applications open: Q2 · 2026</li>
              <li>• Deadline: 15 Sep 2026</li>
              <li>• Shortlist: 30 Sep 2026</li>
              <li>• Pitch Day: AICSSYC 2026 (Oct 8–11)</li>
            </ul>
          </div>
        </div>

        {/* Callout Banner */}
        <div className="bg-[#002855] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_8px_24px_rgba(0,40,85,0.15)] border border-[#001D40]">
          <div>
            <div className="mono text-xs text-[#9E2A2B] font-bold uppercase bg-white px-2 py-0.5 inline-block mb-1">
              APPLICATIONS OPEN GLOBALLY · FREE TO APPLY
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-white">Ready to pitch your startup?</h4>
          </div>
          <button
            onClick={onOpenDossier}
            className="btn-tactile-crimson bg-[#9E2A2B] text-white hover:bg-[#852324] px-6 py-3.5 text-xs font-bold uppercase tracking-wider border border-[#9E2A2B] active:translate-y-0.5 transition-all whitespace-nowrap"
          >
            Apply Now →
          </button>
        </div>

      </div>
    </section>
  );
}

/* ================= 13. SECTION 09: BENEFITS ================= */
function FounderBenefitsSection() {
  const benefits = [
    { num: "01", label: "Prize Money up to ₹2,00,000 / $2,500" },
    { num: "02", label: "Travel Allowance (Top 10 Teams)" },
    { num: "03", label: "Exclusive Goodies (Top 10 Teams)" },
    { num: "04", label: "1:1 Mentorship" },
    { num: "05", label: "Investor Connect" },
    { num: "06", label: "Networking" },
    { num: "07", label: "Workspace Access" },
    { num: "08", label: "Product Validation" },
    { num: "09", label: "Technical Support" },
    { num: "10", label: "Legal & IP Guidance" },
    { num: "11", label: "Branding" },
    { num: "12", label: "Go-to-Market Strategy" },
  ];

  return (
    <section id="benefits" className="py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          SECTION / 09 // BENEFITS
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10">
          Everything a Founder Actually Needs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-[#F9F8F5] border border-[#E5E2DA] p-5 flex items-center gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <span className="mono font-bold text-xs text-[#9E2A2B] bg-[#FFFFFF] px-2.5 py-1 border border-[#E5E2DA] shrink-0">
                {b.num}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#002855] font-sans">
                {b.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= 14. SECTION 10: MENTORS & ADVISORY BOARD ================= */
function MentorsAdvisorsSection() {
  const mentors = [
    { name: "Dr. Anika Rao", title: "AI Research Lead", org: "IEEE·CS" },
    { name: "Marcus Vinter", title: "Partner", org: "Northwind Ventures" },
    { name: "Priya Shankar", title: "Founder & CEO", org: "OrbitLabs" },
    { name: "Kenji Watanabe", title: "Chief Scientist", org: "Kaimon Robotics" },
    { name: "Elena Duarte", title: "Product Advisor", org: "Ex-Stripe" },
    { name: "Samuel Okafor", title: "GTM Advisor", org: "Andela / Alt" },
  ];

  return (
    <section id="mentors" className="py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
          SECTION / 10 // ADVISORS
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-2">
          Operators. Investors. Researchers.
        </h2>
        <p className="text-xs text-[#57534E] mb-10">Dedicated mentors who stay engaged through every stage of your incubation journey.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((m, idx) => (
            <div key={idx} className="bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <div className="h-10 w-10 bg-[#002855] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-[0_2px_4px_rgba(0,40,85,0.2)]">
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-sans font-bold text-base text-[#002855]">{m.name}</h3>
              <div className="text-xs font-semibold text-[#9E2A2B] mt-0.5">{m.title}</div>
              <div className="mono text-[11px] text-[#57534E] mt-2">{m.org}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= 15. SECTION 12: INSTITUTIONAL PARTNERS ================= */
function VenturePartnersSection() {
  const partners = [
    "IEEE·CS",
    "NEXORA VC",
    "ATLASLABS",
    "QUANTUM FOUNDRY",
    "NORTHWIND",
  ];

  return (
    <section id="partners" className="py-16 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mono text-xs font-bold text-[#57534E] uppercase tracking-widest text-center mb-8">
          SECTION / 12 // INSTITUTIONAL & CAPITAL PARTNERS
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="p-5 border border-[#E5E2DA] bg-[#F9F8F5] text-center font-bold text-xs sm:text-sm tracking-wider text-[#002855] mono flex items-center justify-center min-h-[70px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 16. SECTION 14: FREQUENTLY ASKED QUESTIONS ================= */
function FaqAccordionSection({
  openIndex,
  setOpenIndex,
}: {
  openIndex: number | null;
  setOpenIndex: (idx: number | null) => void;
}) {
  const faqs = [
    {
      q: "Who can apply to GIC?",
      a: "Early-stage founders, student entrepreneurs, researchers, and small teams from anywhere in the world with a technology-driven idea, prototype, or product.",
    },
    {
      q: "Is there any equity or fee involved?",
      a: "Free to apply with 0% equity taken. All accepted ventures retain 100% intellectual property ownership.",
    },
    {
      q: "What does the incubation include?",
      a: "Structured support from prototype to startup, including 1:1 mentorship, investor readiness, technical consultation across hardware and software, travel allowance for the top 10 teams, and prize money up to ₹2,00,000 / $2,500.",
    },
    {
      q: "Where will the pitching event take place?",
      a: "AICSSYC 2026 from October 8–11, 2026, featuring a live expert panel and global broadcast.",
    },
    {
      q: "Can international teams participate?",
      a: "Yes, applicants worldwide are welcome to apply.",
    },
  ];

  return (
    <section id="faq" className="py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
            SECTION / 14 // FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#002855]">Programme Inquiries</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border border-[#E5E2DA] bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-[#002855] hover:bg-[#F9F8F5] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs font-bold text-[#9E2A2B]">0{i + 1}</span>
                    <span className="font-sans font-bold">{faq.q}</span>
                  </div>
                  <div className="h-6 w-6 border border-[#E5E2DA] flex items-center justify-center text-xs font-mono shrink-0">
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-[#57534E] leading-relaxed border-t border-[#E5E2DA] bg-[#FAF9F6]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ================= INTAKE DOSSIER FORM ================= */
function DossierIntakeSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="dossier" className="py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="border border-[#002855] bg-[#F9F8F5] p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,40,85,0.06)]">
          
          <div className="border-b border-[#E5E2DA] pb-6 mb-8">
            <div className="mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2">
              FORMAL INTAKE DOSSIER // COHORT 2026
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002855] font-normal">
              Submit Venture Application
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#57534E]">
              Complete the preliminary technical intake dossier for review by the IEEE CS Venture Secretariat.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center bg-[#FFFFFF] border border-[#E5E2DA] p-8 box-embossed-paper">
              <CheckCircle2 className="h-12 w-12 text-[#002855] mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-[#002855] mb-2 font-normal">Dossier Registered</h3>
              <p className="text-xs text-[#57534E] max-w-md mx-auto leading-relaxed">
                Your application dossier has been submitted to the IEEE CS Secretariat. Reference number: <strong>GIC-2026-INTK-{Math.floor(1000 + Math.random() * 9000)}</strong>. A formal receipt has been generated.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs mono text-[#9E2A2B] underline"
              >
                Submit secondary intake dossier
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mono text-xs font-bold text-[#002855] uppercase mb-2">
                    Primary Applicant Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Alex Mercer"
                    className="w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                  />
                </div>

                <div>
                  <label className="block mono text-xs font-bold text-[#002855] uppercase mb-2">
                    Institutional / Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@institution.edu or founder@company.io"
                    className="w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mono text-xs font-bold text-[#002855] uppercase mb-2">
                    Enterprise / Research Entity Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. QuantumGrid Systems Labs"
                    className="w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                  />
                </div>

                <div>
                  <label className="block mono text-xs font-bold text-[#002855] uppercase mb-2">
                    Technical Repository / Paper Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/... or paper URL"
                    className="w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                  />
                </div>
              </div>

              <div>
                <label className="block mono text-xs font-bold text-[#002855] uppercase mb-2">
                  Executive Abstract & Technical Problem Statement *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your systems architecture, defensible IP, and target population impact..."
                  className="w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                />
              </div>

              <button
                type="submit"
                className="btn-tactile-primary w-full bg-[#002855] text-white hover:bg-[#001D40] px-6 py-4 text-xs font-bold uppercase tracking-wider border border-[#001A38] active:translate-y-0.5 transition-all"
              >
                Submit Intake Dossier to Secretariat
              </button>

              <div className="text-center text-[11px] mono text-[#57534E]">
                No Intake Fee • IEEE Membership Not Mandatory for Preliminary Stage 1 Audit
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}

/* ================= 17. SECTION 15: CORPORATE FOOTER ================= */
function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <footer id="footer" className="bg-[#002855] text-[#E5E2DA] text-xs py-12 border-t border-[#001A38]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 items-start">
          
          {/* Brand Block */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <LogoIcon size="sm" />
              <div>
                <div className="font-sans font-extrabold text-sm text-white uppercase tracking-tight">
                  GIC // IEEE·CS
                </div>
                <div className="mono text-[10px] text-[#E5E2DA]/70 uppercase font-semibold">
                  Global Incubation Committee
                </div>
              </div>
            </div>
            <p className="mono text-[11px] text-[#E5E2DA]/80 leading-relaxed mb-4">
              INNOVATING IDEAS / EMPOWERING ENTREPRENEURS / CREATING GLOBAL IMPACT.
            </p>
            <div className="pt-2">
              <InstitutionalAccreditationSeal size="sm" />
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <div className="mono font-bold text-white uppercase mb-3">EXPLORE</div>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => scrollToSection("tracks")} className="hover:underline">Tracks</button></li>
              <li><button onClick={() => scrollToSection("tiers")} className="hover:underline">Tiers & Calculator</button></li>
              <li><button onClick={() => scrollToSection("sprint")} className="hover:underline">12-Week Sprint</button></li>
              <li><button onClick={() => scrollToSection("about")} className="hover:underline">About</button></li>
              <li><button onClick={() => scrollToSection("principles")} className="hover:underline">Principles</button></li>
              <li><button onClick={() => scrollToSection("journey")} className="hover:underline">Journey</button></li>
              <li><button onClick={() => scrollToSection("offerings")} className="hover:underline">Offerings</button></li>
            </ul>
          </div>

          {/* PROGRAM */}
          <div>
            <div className="mono font-bold text-white uppercase mb-3">PROGRAMME</div>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => scrollToSection("dossier")} className="hover:underline">Apply</button></li>
              <li><button onClick={() => scrollToSection("mentors")} className="hover:underline">Mentors</button></li>
              <li><button onClick={() => scrollToSection("partners")} className="hover:underline">Partners</button></li>
              <li><button onClick={() => scrollToSection("benefits")} className="hover:underline">Success Stories</button></li>
            </ul>
          </div>

          {/* COMPANY & LEGAL */}
          <div>
            <div className="mono font-bold text-white uppercase mb-3">COMPANY & LEGAL</div>
            <div className="space-y-1.5 text-xs text-[#E5E2DA]/80">
              <div>Contact: <a href="mailto:gic@aicssyc2026.org" className="underline">gic@aicssyc2026.org</a></div>
              <div><a href="https://computer.org" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">IEEE.org <ExternalLink className="h-3 w-3" /></a></div>
              <div>Privacy Policy & Terms</div>
              <div>Code of Conduct</div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-6 border-t border-[#001D40] flex flex-col sm:flex-row items-center justify-between gap-4 mono text-[11px] text-[#E5E2DA]/70">
          <div>© 2026 GIC · IEEE COMPUTER SOCIETY. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">PRIVACY</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">TERMS</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">CODE OF CONDUCT</span>
            <span>•</span>
            <span className="bg-white text-[#002855] px-1.5 py-0.5 font-bold text-[10px]">ROBOTS.TXT</span>
            <span className="bg-white text-[#002855] px-1.5 py-0.5 font-bold text-[10px]">LLMS.TXT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= DOSSIER MODAL ================= */
function DossierModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002855]/60 backdrop-blur-sm">
      <div className="bg-[#F9F8F5] border border-[#002855] p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#57534E] hover:text-[#002855]"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="h-10 w-10 text-[#002855] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#002855] mb-2 font-normal">Dossier Received</h3>
            <p className="text-xs text-[#57534E]">
              Your intake registration has been recorded under the IEEE CS Secretariat.
            </p>
            <button
              onClick={onClose}
              className="btn-tactile-primary mt-6 w-full bg-[#002855] text-white py-2.5 text-xs font-bold uppercase active:translate-y-0.5"
            >
              Close Ledger Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mono text-xs font-bold text-[#9E2A2B] uppercase mb-1">
              FAST-TRACK DOSSIER INTAKE
            </div>
            <h3 className="font-sans font-bold text-xl text-[#002855] mb-1">Apply to Pitch</h3>
            <p className="text-xs text-[#57534E] mb-6">IEEE CS GIC Cohort 2026 • AICSSYC Oct 8–11</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block mono text-[11px] font-bold text-[#002855] uppercase mb-1">Applicant Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full bg-[#FFFFFF] border border-[#E5E2DA] px-3 py-2 text-xs text-[#1C1917] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                />
              </div>

              <div>
                <label className="block mono text-[11px] font-bold text-[#002855] uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="applicant@institution.org"
                  className="w-full bg-[#FFFFFF] border border-[#E5E2DA] px-3 py-2 text-xs text-[#1C1917] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                />
              </div>

              <div>
                <label className="block mono text-[11px] font-bold text-[#002855] uppercase mb-1">Entity / Project Name</label>
                <input
                  type="text"
                  required
                  placeholder="Project Name"
                  className="w-full bg-[#FFFFFF] border border-[#E5E2DA] px-3 py-2 text-xs text-[#1C1917] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                />
              </div>

              <button
                type="submit"
                className="btn-tactile-primary w-full bg-[#002855] text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#001D40] active:translate-y-0.5 transition-all"
              >
                Submit Fast-Track Dossier
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
