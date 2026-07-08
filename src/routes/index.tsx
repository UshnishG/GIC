import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Users,
  Wallet,
  Cpu,
  Globe2,
  Handshake,
  Briefcase,
  FlaskConical,
  Lightbulb,
  BadgeCheck,
  Sparkles,
  Scale,
  Target,
  Network,
  Building2,
  TrendingUp,
  Layers,
  ShieldCheck,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Plus,
  Minus,
  Calendar,
  CheckCircle2,
  MapPin,
  Asterisk,
} from "lucide-react";
import { Reveal } from "@/components/gic/Reveal";
import { Nav } from "@/components/gic/Nav";
import { Countdown } from "@/components/gic/Countdown";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <TopStrip />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Principles />
      <Offerings />
      <WhoCanApply />
      <WhyJoin />
      <Journey />
      <Launch />
      <Apply />
      <Benefits />
      <Mentors />
      <Partners />
      <Stories />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* ================= TOP STRIP ================= */
function TopStrip() {
  return (
    <div className="border-b-2 border-ink bg-ink">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-1.5 sm:px-6">
        <div className="mono flex min-w-0 items-center gap-2 text-[9px] uppercase tracking-widest text-paper sm:text-[10px]">
          <span className="inline-block h-1.5 w-1.5 shrink-0 bg-mustard animate-blink" />
          <span className="truncate">Live · GIC / IEEE Computer Society</span>
        </div>
        <div className="mono hidden text-[10px] uppercase tracking-widest text-paper/60 lg:block">
          Inaugural Launch · AICSSYC 2026 · Oct 8 – 11 · Applications Open Soon
        </div>
        <div className="mono text-[9px] uppercase tracking-widest text-paper/60 sm:text-[10px]">
          v1.0 / 2026
        </div>
      </div>
    </div>
  );
}

/* ================= ANIMATED HEADING ================= */
function AnimatedHeading() {
  const lines = ["Global", "Incubation", "Centre"];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 5500);
    return () => clearInterval(id);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const word = {
    hidden: { y: "110%", rotate: 4 },
    visible: {
      y: 0,
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 90, damping: 12, mass: 0.8 },
    },
  };

  const dot = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 10, delay: 0.5 },
    },
  };

  return (
    <h1 className="mt-6 font-display text-[15vw] leading-[0.88] xs:text-[13vw] sm:mt-8 sm:text-[11vw] md:text-[7vw] lg:text-[6.2vw] xl:text-[5.6vw] 2xl:text-[80px]">
      <motion.span
        key={tick}
        className="block overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className={`block ${line === "Centre" ? "relative inline-block" : ""}`}
              variants={word}
            >
              {line === "Centre" ? (
                <>
                  <span className="relative z-10 px-3 text-paper">Centre</span>
                  <span className="absolute inset-0 z-0 bg-brick" aria-hidden />
                </>
              ) : (
                line
              )}
            </motion.span>
          </span>
        ))}
        <motion.span
          className="relative top-2 ml-2 inline-block text-brick"
          variants={dot}
        >
          .
        </motion.span>
      </motion.span>
    </h1>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      {/* Floating rotating stamp */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-20 hidden animate-float lg:right-[26%] lg:block"
      >
        <div className="relative grid h-24 w-24 place-items-center brut-border bg-mustard animate-wobble lg:h-28 lg:w-28">
          <span className="animate-spin-slow font-display text-xs uppercase tracking-[0.2em]">
            <svg viewBox="0 0 100 100" className="h-20 w-20 lg:h-24 lg:w-24">
              <defs>
                <path id="c" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
              </defs>
              <text className="mono" fontSize="10.5" letterSpacing="2">
                <textPath href="#c">AICSSYC · 2026 · OCT 8 – 11 · GIC · LAUNCH · </textPath>
              </text>
            </svg>
          </span>
          <Asterisk className="absolute h-5 w-5 lg:h-6 lg:w-6" />
        </div>
      </div>
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-0 px-0">

        {/* LEFT: label column — decorative, hidden on small screens */}
        <aside className="relative col-span-12 hidden border-r-2 border-ink px-2 py-8 md:col-span-1 md:block">
          <div className="mono sticky top-32 origin-top-left rotate-180 text-[10px] uppercase tracking-[0.3em] text-ink [writing-mode:vertical-rl]">
            IEEE·CS / Global Incubation Centre / File №001
          </div>
        </aside>

        {/* MAIN */}
        <div className="col-span-12 border-b-2 border-ink px-4 pb-10 pt-12 sm:px-8 sm:pt-16 md:col-span-8 md:border-b-0 md:border-r-2 md:pt-20">
          <Reveal>
            <div className="mono flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest sm:gap-3 sm:text-[11px]">
              <span className="brut-border bg-mustard px-2 py-1">№ 001</span>
              <span>Global Incubation Centre</span>
              <span className="text-muted-foreground">/ IEEE Computer Society</span>
            </div>
          </Reveal>

          <AnimatedHeading />

          <Reveal delay={0.16}>
            <p className="mono mt-8 max-w-2xl border-l-4 border-ink pl-4 text-[11px] uppercase tracking-widest sm:mt-10 sm:text-sm">
              Innovating Ideas / Empowering Entrepreneurs / Creating Global Impact
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#apply"
                className="brut-border brut-shadow brut-hover mono inline-flex items-center gap-2 bg-ink px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-paper sm:px-6 sm:py-4"
              >
                Apply to Pitch <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="brut-border brut-hover mono inline-flex items-center gap-2 bg-paper px-5 py-3.5 text-xs font-bold uppercase tracking-widest sm:px-6 sm:py-4"
              >
                Explore GIC <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid max-w-sm grid-cols-3 border-2 border-ink sm:max-w-2xl sm:mt-14">
              {[
                ["50+", "Mentors"],
                ["30+", "Partners"],
                ["∞", "Ambition"],
              ].map(([n, l], i) => (
                <div
                  key={l}
                  className={`px-3 py-4 sm:px-4 sm:py-5 ${i < 2 ? "border-r-2 border-ink" : ""}`}
                >
                  <div className="font-display text-xl sm:text-2xl md:text-4xl">{n}</div>
                  <div className="mono mt-1 text-[8px] uppercase tracking-widest text-muted-foreground sm:text-[9px] md:text-[10px]">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT: index card — hidden on mobile, shown as sidebar on md+ */}
        <div className="col-span-12 flex flex-col border-t-2 border-ink md:col-span-3 md:border-t-0">
          <div className="border-b-2 border-ink bg-ink px-4 py-3 sm:px-6">
            <span className="mono text-[10px] uppercase tracking-widest text-paper">
              Index / Contents
            </span>
          </div>
          <ol className="flex-1">
            {[
              "About",
              "Core Principles",
              "What We Offer",
              "Who Can Apply",
              "Why Join GIC",
              "Incubation Journey",
              "Launch @ AICSSYC",
              "Apply to Pitch",
              "Benefits",
              "Mentors",
              "Partners",
              "Success Stories",
              "FAQ",
              "Contact",
            ].map((t, i) => (
              <li
                key={t}
                className="mono flex items-center justify-between gap-3 border-b border-ink/30 px-4 py-2.5 text-[10px] uppercase tracking-widest last:border-0 sm:px-6 sm:py-3 sm:text-[11px]"
              >
                <span className="text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{t}</span>
                <span className="text-muted-foreground">→</span>
              </li>
            ))}
          </ol>
          <div className="border-t-2 border-ink bg-mustard px-4 py-3 sm:px-6">
            <div className="mono flex items-center justify-between text-[10px] uppercase tracking-widest">
              <span>Status</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-brick animate-blink" /> Applications Open
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= MARQUEE ================= */
function Marquee() {
  const words = [
    "Innovate",
    "Incubate",
    "Iterate",
    "Ideate",
    "Invest",
    "Impact",
    "Ignite",
    "Inspire",
  ];
  const line = [...words, ...words, ...words];
  return (
    <div className="overflow-hidden border-b-2 border-ink bg-ink">
      <div className="flex w-max animate-marquee gap-8 py-4">
        {line.map((w, i) => (
          <div key={i} className="mono flex items-center gap-8 text-paper">
            <span className="font-display text-xl uppercase tracking-tight sm:text-2xl">
              {w}.
            </span>
            <Asterisk className="h-4 w-4 text-mustard animate-spin-slow" />
          </div>
        ))}

      </div>
    </div>
  );
}

/* ================= ABOUT ================= */
function About() {
  const objectives = [
    ["Foster Innovation", "Encourage the development of innovative products, technologies, and solutions addressing real-world challenges."],
    ["Support Entrepreneurs", "Provide structured mentorship, technical guidance, and training to help founders build sustainable ventures."],
    ["Accelerate Startup Growth", "Incubation programs from idea validation through product development, market readiness, and scaling."],
    ["Bridge Academia & Industry", "Facilitate collaboration among universities, researchers, corporations, and startups."],
    ["Enable Global Collaboration", "International partnerships giving startups access to global markets, expertise, and opportunities."],
    ["Promote Commercialization", "Transform academic research and technological innovations into commercially viable products."],
    ["Connect with Investors", "Engage with investors, VC firms, angel networks, and strategic partners."],
    ["Build a Sustainable Ecosystem", "Cultivate innovation, collaboration, ethics, and long-term impact across the founder journey."],
  ];
  return (
    <Section id="about" number="01" eyebrow="About / File №001" title="Where transformative ideas become global ventures.">
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        <Reveal className="col-span-12 lg:col-span-8">
          <div className="brut-border bg-paper p-6 sm:p-8">
            <p className="text-lg leading-relaxed sm:text-xl">
              The <strong>Global Incubation Centre (GIC)</strong> is an initiative of the{" "}
              <strong>IEEE Computer Society</strong>, established to nurture the next
              generation of innovators, entrepreneurs, researchers, and technology leaders.
              It serves as a collaborative ecosystem where transformative ideas evolve into
              scalable products and globally competitive ventures.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you are a student with a breakthrough concept, a researcher developing
              cutting-edge technology, or an entrepreneur building the next disruptive
              startup — GIC provides the platform to accelerate your journey.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="col-span-12 lg:col-span-4">
          <div className="grid h-full grid-rows-2 gap-4 lg:gap-6">
            <StatCard label="Founded" value="2026" note="Under IEEE·CS charter" />
            <StatCard label="Scope" value="Global" note="Remote-first, borderless" accent />
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-4 lg:gap-6">
        <Reveal className="col-span-12 md:col-span-6">
          <BigCard tag="Vision" icon={Target} accent="cobalt">
            To become a globally recognized incubation ecosystem that empowers innovators to
            develop transformative technologies, build sustainable enterprises, and create
            meaningful societal impact.
          </BigCard>
        </Reveal>
        <Reveal delay={0.08} className="col-span-12 md:col-span-6">
          <BigCard tag="Mission" icon={Rocket} accent="brick">
            Foster innovation-driven entrepreneurship, support early-stage startups through
            structured incubation, connect innovators with mentors, industry experts,
            investors, and academic leaders — and accelerate the commercialization of
            research and emerging technologies.
          </BigCard>
        </Reveal>
      </div>

      <div className="mt-12 border-t-2 border-ink pt-8">
        <div className="mono mb-6 flex items-center gap-3 text-[11px] uppercase tracking-widest">
          <span className="brut-border bg-ink px-2 py-1 text-paper">Objectives</span>
          <span className="h-px flex-1 bg-ink" />
          <span className="text-muted-foreground">01 → 08</span>
        </div>
        <div className="grid grid-cols-1 gap-0 border-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map(([t, d], i) => {
            const isLastCol_lg = (i + 1) % 4 === 0;
            const isLastCol_sm = i % 2 !== 0;
            const isLastRow_lg = i >= 4;
            const isLastRow_sm = i >= 6;
            return (
              <Reveal key={t} delay={(i % 4) * 0.05}>
                <div
                  className={[
                    "h-full p-5 sm:p-6",
                    /* right borders */
                    !isLastCol_sm ? "border-b-2 border-ink sm:border-b-0 sm:border-r-2" : "border-b-2 border-ink",
                    !isLastCol_lg ? "lg:border-r-2" : "lg:border-r-0",
                    /* bottom borders */
                    !isLastRow_sm ? "sm:border-b-2" : "sm:border-b-0",
                    !isLastRow_lg ? "lg:border-b-2" : "lg:border-b-0",
                    /* last item overall — no bottom border */
                    i === objectives.length - 1 ? "border-b-0" : "",
                  ].join(" ")}
                >
                  <div className="mono text-[10px] uppercase tracking-widest text-brick">
                    Obj / {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 font-display text-base sm:text-lg">{t}</div>
                  <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-12 brut-border bg-paper">
        <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-5 py-3">
          <span className="mono text-[10px] uppercase tracking-widest text-paper">
            Timeline / 2025 → 2026
          </span>
          <span className="mono text-[10px] uppercase tracking-widest text-paper/60">
            04 milestones
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {[
            ["Q4·2025", "Concept & Charter", "Framework ratified under IEEE·CS."],
            ["Q1·2026", "Mentor Onboarding", "Global advisory panel confirmed."],
            ["Q2·2026", "Applications Open", "Startups worldwide invited to apply."],
            ["AICSSYC·2026", "Official Launch", "Inaugural cohort unveiled."],
          ].map(([w, t, d], i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
            >
              <div
                className={`h-full p-5 sm:p-6 ${
                  i < 3 ? "border-b-2 border-ink md:border-b-0 md:border-r-2" : ""
                }`}
              >
                <div className="mono text-[10px] uppercase tracking-widest text-brick">{w}</div>
                <div className="mt-3 font-display text-lg">{t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ================= PRINCIPLES ================= */
function Principles() {
  const items = [
    { icon: Lightbulb, t: "Innovation First", d: "Every transformative venture begins with bold ideas supported by rigorous innovation." },
    { icon: Rocket, t: "Entrepreneur-Centric", d: "Our programs are designed around the needs, aspirations, and growth of founders." },
    { icon: Globe2, t: "Global Perspective", d: "Innovation transcends borders. We encourage international collaboration and market access." },
    { icon: Handshake, t: "Collaboration > Competition", d: "Meaningful innovation flourishes through multidisciplinary collaboration and shared expertise." },
    { icon: ShieldCheck, t: "Integrity & Ethics", d: "Guided by transparency, fairness, accountability, and ethical technology development." },
    { icon: Users, t: "Inclusivity", d: "Innovators from diverse backgrounds and disciplines — equal opportunities for all." },
    { icon: Sparkles, t: "Continuous Learning", d: "Entrepreneurship is a journey of lifelong learning, adaptation, and resilience." },
    { icon: TrendingUp, t: "Sustainable Impact", d: "Ventures that create lasting economic, technological, environmental, and societal value." },
  ];
  return (
    <Section id="principles" number="02" eyebrow="Core Principles" title="The rules of the house.">
      <div className="grid grid-cols-1 border-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => {
          const isLastCol_lg = (i + 1) % 4 === 0;
          const isLastCol_sm = i % 2 !== 0;
          const isLastRow_lg = i >= 4;
          const isLastRow_sm = i >= 6;
          return (
            <Reveal key={it.t} delay={(i % 4) * 0.05}>
              <div
                className={[
                  "group relative h-full bg-paper p-6 transition-colors hover:bg-mustard",
                  /* right borders */
                  !isLastCol_sm ? "border-b-2 border-ink sm:border-b-0 sm:border-r-2" : "border-b-2 border-ink",
                  !isLastCol_lg ? "lg:border-r-2" : "lg:border-r-0",
                  /* bottom borders */
                  !isLastRow_sm ? "sm:border-b-2" : "sm:border-b-0",
                  !isLastRow_lg ? "lg:border-b-2" : "lg:border-b-0",
                  i === items.length - 1 ? "border-b-0" : "",
                ].join(" ")}
              >
                <div className="mono text-[10px] uppercase tracking-widest text-brick">
                  Rule / {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 grid h-10 w-10 place-items-center border-2 border-ink bg-paper">
                  <it.icon className="h-4 w-4" />
                </div>
                <div className="mt-5 font-display text-lg">{it.t}</div>
                <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.d}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ================= OFFERINGS ================= */
function Offerings() {
  const items = [
    "Structured Startup Incubation",
    "Business Strategy Development",
    "Expert Mentorship",
    "Investor Readiness Programs",
    "Technical Consultation",
    "Startup Pitch Opportunities",
    "Product Validation",
    "Networking with Global Experts",
    "Research Commercialization Support",
    "Access to Innovation Ecosystems",
    "Industry Collaboration",
    "Workshops and Bootcamps",
    "Intellectual Property Guidance",
    "Demo Days & Showcase Events",
    "International Collaboration",
  ];
  return (
    <Section
      id="offerings"
      number="03"
      eyebrow="What GIC Offers"
      title="A full stack for the modern founder."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t} delay={(i % 3) * 0.03}>
            <div className="brut-border brut-hover flex items-center gap-4 bg-paper p-4">
              <div className="mono grid h-10 w-10 shrink-0 place-items-center border-2 border-ink bg-ink text-paper text-xs">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <div className="font-display text-sm sm:text-base">{t}</div>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================= WHO CAN APPLY ================= */
function WhoCanApply() {
  const who = [
    { icon: Users, t: "Students" },
    { icon: Rocket, t: "Tech Entrepreneurs" },
    { icon: FlaskConical, t: "Researchers" },
    { icon: Sparkles, t: "Social Innovators" },
    { icon: BadgeCheck, t: "Faculty Members" },
    { icon: Cpu, t: "Deep-Tech Founders" },
    { icon: Briefcase, t: "Early-Stage Startups" },
    { icon: Network, t: "AI & Emerging Tech" },
    { icon: Lightbulb, t: "Individual Innovators" },
  ];
  return (
    <Section id="who" number="04" eyebrow="Who Can Apply" title="Built for every kind of builder.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {who.map((it, i) => {
          const accents = ["bg-paper", "bg-mustard", "bg-paper", "bg-paper", "bg-brick text-paper", "bg-paper", "bg-mustard", "bg-paper", "bg-paper"];
          return (
            <Reveal key={it.t} delay={(i % 3) * 0.05}>
              <div className={`brut-border brut-hover flex flex-col justify-between gap-6 p-5 sm:p-6 ${accents[i]}`}>
                <div className="mono text-[10px] uppercase tracking-widest opacity-70">
                  Applicant / {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <it.icon className="h-6 w-6" strokeWidth={2.5} />
                  <div className="mt-4 font-display text-lg sm:text-xl">{it.t}</div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ================= WHY JOIN ================= */
function WhyJoin() {
  const items = [
    { t: "Build with Experienced Mentors", d: "Learn directly from founders, operators, and IEEE leaders who've done it before." },
    { t: "Validate with Industry Experts", d: "Test ideas and products with domain specialists across sectors." },
    { t: "Access Strategic Partnerships", d: "Plug into universities, corporations, and IEEE ecosystem partners." },
    { t: "Strengthen Tech Capabilities", d: "Deepen engineering, architecture, and R&D through expert consultation." },
    { t: "Connect with Investors", d: "Curated introductions to VCs, angels, and corporate funds." },
    { t: "Accelerate Product Development", d: "Move from prototype to MVP to market with structured milestones." },
    { t: "Gain Global Visibility", d: "Showcase at national and international IEEE platforms and demo days." },
    { t: "Join an Innovation Community", d: "A thriving, borderless network of technology founders." },
  ];
  return (
    <Section id="why" number="05" eyebrow="Why Join GIC" title="Eight reasons founders choose us.">
      <div className="brut-border divide-y-2 divide-ink bg-paper">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={(i % 8) * 0.03}>
            <div className="group p-5 transition-colors hover:bg-ink hover:text-paper sm:p-6">
              <div className="flex items-start gap-4">
                <div className="mono shrink-0 text-xs uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-lg sm:text-2xl">{it.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-paper/70 sm:mt-0 sm:hidden">
                    {it.d}
                  </div>
                </div>
                <div className="hidden text-sm leading-relaxed text-muted-foreground group-hover:text-paper/70 sm:block sm:max-w-[280px] sm:shrink-0 md:max-w-xs lg:max-w-sm">
                  {it.d}
                </div>
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 sm:block" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================= JOURNEY ================= */
function Journey() {
  const stages = [
    { title: "Idea", note: "Concept & problem definition", icon: Lightbulb },
    { title: "Validation", note: "Market research & user interviews", icon: Target },
    { title: "Prototype", note: "Build & test early solution", icon: FlaskConical },
    { title: "MVP", note: "Minimum viable product launch", icon: Rocket },
    { title: "Mentorship", note: "Guidance from domain experts", icon: Users },
    { title: "Market Entry", note: "Pilot customers & GTM", icon: TrendingUp },
    { title: "Investment", note: "Funding & investor connect", icon: Wallet },
    { title: "Global Expansion", note: "Scale across borders", icon: Globe2 },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      const viewW = viewportRef.current.clientWidth;
      setDistance(Math.max(0, trackW - viewW));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      id="journey"
      className="relative h-[240vh] border-b-2 border-ink sm:h-[280vh]"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-paper">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-4 px-4 pt-12 sm:px-6 sm:pt-16 md:pt-20">
          <div className="col-span-12 md:col-span-3">
            <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Section / 06
            </div>
            <div className="mono mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest">
              <span className="brut-border bg-mustard px-2 py-1">Incubation Journey</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-2xl leading-[0.95] sm:text-3xl lg:text-5xl">
              A structured pathway, from spark to global scale.
            </h2>
            <p className="mono mt-3 max-w-3xl border-l-4 border-ink pl-4 text-[11px] uppercase tracking-widest sm:text-xs md:mt-4">
              Every startup follows a structured pathway supported by domain experts, industry
              mentors, researchers, and strategic partners.
            </p>
          </div>
        </div>

        <div ref={viewportRef} className="relative mt-5 flex-1 overflow-hidden sm:mt-7">
          <motion.div ref={trackRef} style={{ x }} className="flex h-full items-center px-4 sm:px-6">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="relative mr-3 flex h-[240px] w-[80vw] shrink-0 flex-col border-2 border-ink bg-paper p-4 last:mr-0 sm:mr-4 sm:h-[280px] sm:w-[50vw] md:w-[34vw] lg:w-[24vw] xl:w-[20vw]"
                >
                  <div className="h-1.5 w-full bg-brick" />
                  <div className="mt-3 flex items-start justify-between sm:mt-4">
                    <div className="mono text-[10px] uppercase tracking-widest text-brick">
                      Stage / {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="grid h-8 w-8 place-items-center border-2 border-ink bg-mustard">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-3">
                    <div className="font-display text-xl leading-[0.95] sm:text-2xl lg:text-3xl">
                      {s.title}
                    </div>
                    <div className="mono mt-2 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">
                      {s.note}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 font-display text-5xl leading-none text-ink/[0.08] sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t-2 border-ink pt-3">
                    <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {i < stages.length - 1 ? "→ Next" : "★ Scale"}
                    </div>
                    <div className="grid h-6 w-6 place-items-center border-2 border-ink bg-ink font-display text-[10px] text-paper">
                      {i + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="h-2 bg-ink/10">
          <motion.div style={{ width: progressWidth }} className="h-full bg-brick" />
        </div>
      </div>
    </div>
  );
}

/* ================= LAUNCH ================= */
function Launch() {
  return (
    <Section id="launch" number="07" eyebrow="Launch @ AICSSYC 2026" title="A new era begins in public.">
      <div className="brut-border relative overflow-hidden bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 dot-grid" style={{ opacity: 0.2 }} />
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b-2 border-paper/20 p-8 sm:p-12 lg:border-b-0 lg:border-r-2">
            <div className="mono inline-flex items-center gap-2 bg-mustard px-2 py-1 text-[10px] uppercase tracking-widest text-ink">
              <Calendar className="h-3 w-3" /> Inaugural Edition
            </div>
            <h3 className="mt-6 font-display text-3xl leading-[0.9] sm:text-4xl lg:text-5xl">
              Where ideas become
              <br />
              <span className="text-mustard">innovations</span>,
              <br />
              and innovations create
              <br />
              <span className="text-brick">global impact</span>.
            </h3>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base">
              The inaugural edition of the Global Incubation Centre marks a defining
              milestone for innovation-driven entrepreneurship within the IEEE Computer
              Society ecosystem. During AICSSYC 2026, GIC officially opens applications
              for incubation and invites entrepreneurs, researchers, and innovators to
              pitch their ideas before an expert panel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="brut-border mono inline-flex items-center gap-2 bg-brick px-5 py-3 text-xs font-bold uppercase tracking-widest text-paper hover:bg-paper hover:text-ink"
              >
                Reserve Your Spot <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="brut-border mono inline-flex items-center gap-2 bg-paper px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink"
              >
                Partner With Us
              </a>
            </div>
          </div>
          <div className="p-8 sm:p-12">
            <div className="mono text-[10px] uppercase tracking-widest text-paper/60">
              Countdown to Launch
            </div>
            <div className="mt-4">
              <Countdown />
            </div>
            <div className="mt-8 border-t-2 border-paper/20 pt-6">
              <div className="mono text-[10px] uppercase tracking-widest text-paper/60">
                Event
              </div>
              <div className="mt-2 font-display text-2xl">AICSSYC · 2026</div>
              <div className="mono mt-2 text-xs text-paper/60">
                Oct 8 – 11, 2026 · Live Panel + Global Broadcast
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ================= APPLY ================= */
function Apply() {
  const cols = [
    { icon: BadgeCheck, title: "Eligibility", items: ["Early-stage startups & student founders", "Researchers with commercializable IP", "Solo founders or teams (≤5)", "Global applicants welcome"] },
    { icon: Scale, title: "Evaluation", items: ["Innovation & technical depth", "Market opportunity & scalability", "Team strength & execution", "Social & economic impact"] },
    { icon: Layers, title: "Selection", items: ["Online application & screening", "Shortlist announcement", "Live pitch to expert panel", "Incubation offer & onboarding"] },
    { icon: Calendar, title: "Dates", items: ["Applications open — Q2·2026", "Deadline — 15 Sep 2026", "Shortlist — 30 Sep 2026", "Pitch Day — AICSSYC·2026"] },
  ];
  return (
    <Section id="apply" number="08" eyebrow="Startup Pitch" title="Apply. Pitch. Get incubated.">
      <div className="grid grid-cols-1 gap-0 border-2 border-ink md:grid-cols-2 lg:grid-cols-4">
        {cols.map((c, i) => {
          const isLastCol_md = i % 2 !== 0;
          const isLastCol_lg = i === 3;
          const isLastRow_md = i >= 2;
          return (
            <Reveal key={c.title} delay={i * 0.06}>
              <div
                className={[
                  "h-full bg-paper p-6 sm:p-7",
                  /* mobile: all have bottom border except last */
                  i < 3 ? "border-b-2 border-ink" : "",
                  /* md: 2-col grid */
                  !isLastCol_md ? "md:border-r-2 md:border-ink" : "",
                  !isLastRow_md ? "md:border-b-2" : "md:border-b-0",
                  /* lg: 4-col grid — override */
                  "lg:border-b-0",
                  !isLastCol_lg ? "lg:border-r-2" : "lg:border-r-0",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center border-2 border-ink bg-mustard">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Step / {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl">{c.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15}>
        <div className="brut-border brut-shadow mt-8 flex flex-col gap-5 bg-brick p-6 text-paper sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-8">
          <div>
            <div className="font-display text-2xl sm:text-3xl">Ready to pitch your startup?</div>
            <div className="mono mt-2 text-xs uppercase tracking-widest">
              Applications open globally · Free to apply
            </div>
          </div>
          <a
            href="#contact"
            className="brut-border mono inline-flex w-full items-center justify-center gap-2 bg-paper px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink sm:w-auto sm:py-3"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

/* ================= BENEFITS ================= */
function Benefits() {
  const items = [
    "1:1 Mentorship",
    "Investor Connect",
    "Networking",
    "Workspace Access",
    "Product Validation",
    "Technical Support",
    "Legal & IP Guidance",
    "Branding",
    "Go-to-Market Strategy",
  ];
  return (
    <Section number="09" eyebrow="Benefits" title="Everything a founder actually needs.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it} delay={(i % 3) * 0.04}>
            <div className="brut-border brut-hover flex items-center justify-between gap-3 bg-paper px-5 py-4">
              <span className="font-display text-sm sm:text-base">{it}</span>
              <span className="mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================= MENTORS ================= */
function Mentors() {
  const people = [
    { name: "Dr. Anika Rao", role: "AI Research Lead", org: "IEEE·CS" },
    { name: "Marcus Vinter", role: "Partner", org: "Northwind Ventures" },
    { name: "Priya Shankar", role: "Founder & CEO", org: "OrbitLabs" },
    { name: "Kenji Watanabe", role: "Chief Scientist", org: "Kaimon Robotics" },
    { name: "Elena Duarte", role: "Product Advisor", org: "ex-Stripe" },
    { name: "Samuel Okafor", role: "GTM Advisor", org: "Andela / Alt" },
  ];
  return (
    <Section id="mentors" number="10" eyebrow="Mentors & Advisory Board" title="Operators. Investors. Researchers.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.05}>
            <div className="brut-border brut-hover bg-paper">
              <div className="flex items-start justify-between border-b-2 border-ink bg-ink px-5 py-3 text-paper">
                <span className="mono text-[10px] uppercase tracking-widest">
                  Advisor / {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mono text-[10px] uppercase tracking-widest text-mustard">
                  Active
                </span>
              </div>
              <div className="p-5">
                <div className="grid h-14 w-14 place-items-center border-2 border-ink bg-mustard font-display text-xl">
                  {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="mt-5 font-display text-lg leading-tight">{p.name}</div>
                <div className="mono mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {p.role} / {p.org}
                </div>
                <div className="mt-5 flex items-center gap-2 border-t-2 border-ink pt-4">
                  {[Linkedin, Twitter, Github].map((Icon, k) => (
                    <a key={k} href="#" className="grid h-8 w-8 place-items-center border-2 border-ink hover:bg-ink hover:text-paper">
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================= PARTNERS ================= */
function Partners() {
  const logos = [
    "IEEE·CS", "Nexora VC", "AtlasLabs", "Quantum Foundry", "Northwind", "OrbitLabs",
    "Helios AI", "Vertex Uni", "Kaimon", "Prism Capital", "Meridian", "Alt Ventures",
  ];
  const line = [...logos, ...logos];
  return (
    <Section number="11" eyebrow="Partners" title="A global network of universities, industries & investors.">
      <div className="brut-border overflow-hidden bg-paper">
        <div className="flex w-max animate-marquee">
          {line.map((name, i) => (
            <div
              key={i}
              className="mono flex h-24 w-56 shrink-0 items-center justify-center border-r-2 border-ink px-6 font-display text-lg uppercase tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ================= STORIES ================= */
function Stories() {
  const items = [
    { q: "GIC turned our lab prototype into a funded product in under a year.", n: "Aarav Mehta", r: "Founder, NeuroSense", m: ["$2.4M Seed", "12 Countries", "3× Revenue"] },
    { q: "The mentor network is unmatched — every intro moved the needle.", n: "Lina Park", r: "CEO, VoltGrid", m: ["Series A", "F-500 Pilot", "40+ Team"] },
    { q: "From pitch to pilot in 90 days. That's what IEEE-backed delivers.", n: "Diego Alvarez", r: "Founder, AeroKite", m: ["FAA Cert", "$1.1M ARR", "3 Continents"] },
  ];
  return (
    <Section number="12" eyebrow="Success Stories" title="Built for real-world impact.">
      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="brut-border flex h-full flex-col bg-paper">
              <div className="border-b-2 border-ink bg-mustard px-5 py-3">
                <span className="mono text-[10px] uppercase tracking-widest">
                  Case / {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="font-display text-5xl leading-none text-brick">"</div>
                <p className="mt-2 text-base leading-relaxed">{s.q}</p>
                <div className="mt-6">
                  <div className="font-display text-base">{s.n}</div>
                  <div className="mono mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.r}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 border-t-2 border-ink">
                {s.m.map((m, k) => (
                  <div key={m} className={`p-3 text-center ${k < 2 ? "border-r-2 border-ink" : ""}`}>
                    <div className="mono text-[10px] uppercase tracking-widest">{m}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================= FAQ ================= */
function FAQ() {
  const items = [
    { q: "Who can apply to GIC?", a: "Early-stage founders, student entrepreneurs, researchers, and small teams from anywhere in the world with a technology-driven idea, prototype, or product." },
    { q: "Is there any equity or fee involved?", a: "Applying is free. Terms of incubation, if any equity component is applicable, will be transparently shared with selected startups." },
    { q: "What does the incubation include?", a: "Mentorship, technical resources, workspace access, investor connections, GTM support, and IEEE ecosystem exposure." },
    { q: "Where will the pitching event take place?", a: "The inaugural pitch and launch will take place at AICSSYC 2026, followed by continued incubation programs online and on-site." },
    { q: "Can international teams participate?", a: "Yes — GIC is designed as a global platform. Remote-first participation is fully supported." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" number="13" eyebrow="FAQ" title="Answers, up front.">
      <div className="brut-border divide-y-2 divide-ink bg-paper">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className={`grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 p-5 text-left transition-colors sm:p-6 ${
                  isOpen ? "bg-ink text-paper" : "hover:bg-mustard"
                }`}
                aria-expanded={isOpen}
              >
                <span className="mono text-xs uppercase tracking-widest opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base sm:text-xl">{it.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center border-2 border-current">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="border-t-2 border-ink bg-paper px-5 py-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                  {it.a}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <Section id="contact" number="14" eyebrow="Contact" title="Let's build the future — together.">
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        <Reveal className="col-span-12 lg:col-span-5">
          <div className="brut-border flex h-full flex-col bg-paper">
            <div className="border-b-2 border-ink bg-ink px-6 py-3">
              <span className="mono text-[10px] uppercase tracking-widest text-paper">
                Direct Contact
              </span>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="space-y-5">
                <ContactRow icon={Mail} label="Email" value="gic@ieee-cs.org" />
                <ContactRow icon={MapPin} label="HQ" value="IEEE Computer Society · Global" />
                <ContactRow icon={Calendar} label="Launch" value="AICSSYC · 2026" />
              </div>
              <div className="mt-8 flex items-center gap-2 border-t-2 border-ink pt-6">
                {[Linkedin, Twitter, Github].map((Icon, k) => (
                  <a key={k} href="#" className="brut-border brut-hover grid h-10 w-10 place-items-center bg-paper">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="col-span-12 lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch."); }}
            className="brut-border bg-paper"
          >
            <div className="border-b-2 border-ink bg-ink px-6 py-3">
              <span className="mono text-[10px] uppercase tracking-widest text-paper">
                Application Form / v1.0
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Ada Lovelace" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Organization" name="org" placeholder="Your startup or institution" />
                <Field label="Interest" name="interest" placeholder="Founder / Investor / Partner" />
              </div>
              <div className="mt-5">
                <label className="mono mb-1.5 block text-[10px] uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your idea, startup, or collaboration…"
                  className="brut-border w-full bg-paper px-4 py-3 text-sm outline-none focus:bg-mustard"
                />
              </div>
              <button
                type="submit"
                className="brut-border brut-shadow brut-hover mono mt-6 inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-paper"
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center border-2 border-ink bg-mustard">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="font-display text-sm sm:text-base">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string; }) {
  return (
    <div>
      <label htmlFor={name} className="mono mb-1.5 block text-[10px] uppercase tracking-widest">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="brut-border w-full bg-paper px-4 py-3 text-sm outline-none focus:bg-mustard"
      />
    </div>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center border-2 border-paper bg-mustard text-ink mono text-sm font-bold">
                G/
              </div>
              <div>
                <div className="font-display text-lg">GIC</div>
                <div className="mono text-[10px] uppercase tracking-widest text-paper/60">
                  IEEE·CS / Global Incubation Centre
                </div>
              </div>
            </div>
            <p className="mono mt-6 max-w-md text-xs uppercase leading-relaxed tracking-widest text-paper/70 sm:text-sm">
              Innovating Ideas / Empowering Entrepreneurs / Creating Global Impact.
            </p>
          </div>
          <FooterCol title="Explore" links={["About", "Principles", "Journey", "Offerings"]} />
          <FooterCol title="Program" links={["Apply", "Mentors", "Partners", "Success Stories"]} />
          <FooterCol title="Company" links={["Contact", "Privacy Policy", "Terms", "IEEE.org"]} />
        </div>
        <div className="mono mt-12 flex flex-col items-start justify-between gap-3 border-t-2 border-paper/20 pt-6 text-[10px] uppercase tracking-widest text-paper/60 sm:mt-14 sm:flex-row sm:items-center">
          <div>© 2026 GIC · IEEE Computer Society. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-paper">Privacy</a>
            <a href="#" className="hover:text-paper">Terms</a>
            <a href="#" className="hover:text-paper">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="mono text-[10px] uppercase tracking-widest text-mustard">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="font-display text-sm hover:text-mustard">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================= SHARED ================= */
function Section({
  id,
  number,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  number: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <Reveal>
          <div className="mb-10 grid grid-cols-12 items-end gap-4 sm:mb-14 lg:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Section / {number}
              </div>
              <div className="mono mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest">
                <span className="brut-border bg-mustard px-2 py-1">{eyebrow}</span>
              </div>
            </div>
            <h2 className="col-span-12 font-display text-3xl leading-[0.95] sm:text-4xl md:col-span-9 lg:text-5xl xl:text-6xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function BigCard({ tag, icon: Icon, accent, children }: { tag: string; icon: React.ElementType; accent: "brick" | "cobalt"; children: React.ReactNode; }) {
  const shadow = accent === "brick" ? "brut-shadow-brick" : "brut-shadow-cobalt";
  return (
    <div className={`brut-border ${shadow} h-full bg-paper p-6 sm:p-8`}>
      <div className="flex items-center justify-between">
        <div className="mono text-[10px] uppercase tracking-widest text-brick">{tag}</div>
        <div className="grid h-10 w-10 place-items-center border-2 border-ink bg-ink text-paper">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-6 font-display text-2xl sm:text-3xl">{tag}</div>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

function StatCard({ label, value, note, accent }: { label: string; value: string; note: string; accent?: boolean }) {
  return (
    <div className={`brut-border h-full p-5 sm:p-6 ${accent ? "bg-brick text-paper" : "bg-mustard"}`}>
      <div className="mono text-[10px] uppercase tracking-widest opacity-70">{label}</div>
      <div className="mt-3 font-display text-4xl sm:text-5xl">{value}</div>
      <div className="mono mt-3 text-[10px] uppercase tracking-widest opacity-70">{note}</div>
    </div>
  );
}
