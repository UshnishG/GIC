import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createRootRouteWithContext, d as Scripts, f as HeadContent, g as createFileRoute, h as Outlet, m as createRouter, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { _ as ArrowRight, a as ShieldCheck, c as Layers, d as ExternalLink, f as Cpu, g as Award, h as ChevronRight, i as Shield, l as Globe, m as CircleCheck, n as Users, o as Plane, p as Coins, r as Sparkles, s as Mail, t as X, u as FileCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-lh4bTtTF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Hr5rz0Cb.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Global Incubation Committee (GIC) — IEEE Computer Society" },
			{
				name: "description",
				content: "The Global Incubation Committee by IEEE Computer Society — empowering innovators, accelerating startups, and building the future. Launching at AICSSYC 2026."
			},
			{
				name: "author",
				content: "IEEE Computer Society"
			},
			{
				property: "og:title",
				content: "Global Incubation Committee (GIC) — IEEE Computer Society"
			},
			{
				property: "og:description",
				content: "The Global Incubation Committee by IEEE Computer Society — empowering innovators, accelerating startups, and building the future. Launching at AICSSYC 2026."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Global Incubation Committee (GIC) — IEEE Computer Society"
			},
			{
				name: "twitter:description",
				content: "The Global Incubation Committee by IEEE Computer Society — empowering innovators, accelerating startups, and building the future. Launching at AICSSYC 2026."
			},
			{
				property: "og:image",
				content: "/og-image.jpg"
			},
			{
				name: "twitter:image",
				content: "/og-image.jpg"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/logo.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var Route = createFileRoute("/")({ component: Index });
function Index() {
	const [isDossierModalOpen, setIsDossierModalOpen] = (0, import_react.useState)(false);
	const [openFaqIndex, setOpenFaqIndex] = (0, import_react.useState)(0);
	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-[#F9F8F5] text-[#1C1917] font-sans antialiased selection:bg-[#002855] selection:text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MastheadLedger, { onOpenDossier: () => setIsDossierModalOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {
				onOpenDossier: () => setIsDossierModalOpen(true),
				scrollToSection
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, { onOpenDossier: () => setIsDossierModalOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeTicker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackExplorerSection, { onOpenDossier: () => setIsDossierModalOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CohortTierCalculatorSection, { onOpenDossier: () => setIsDossierModalOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprintScrubberSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutTwoGapsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionMissionObjectivesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineMilestonesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatMakesGicDifferentSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorePrinciplesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullStackOfferingsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoCanApplySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyJoinGicSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncubationJourneySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaunchAicssycSection, { onOpenDossier: () => setIsDossierModalOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PitchProcessTimelineSection, { onOpenDossier: () => setIsDossierModalOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderBenefitsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MentorsAdvisorsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvaluationMatrixSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VenturePartnersSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GovernanceCharterSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAccordionSection, {
				openIndex: openFaqIndex,
				setOpenIndex: setOpenFaqIndex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierIntakeSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { scrollToSection }),
			isDossierModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierModal, { onClose: () => setIsDossierModalOpen(false) })
		]
	});
}
function MastheadLedger({ onOpenDossier }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-[#E5E2DA] bg-[#002855] text-white py-2.5 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between text-xs mono",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-[#9E2A2B] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-wider uppercase font-medium",
						children: "LIVE · GIC / IEEE COMPUTER SOCIETY | V1.0 / 2026"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center gap-6 text-[#E5E2DA]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#FAF9F5] font-bold tracking-wide",
						children: "SYS.LIVE: AICSSYC 2026 ONGOING // COHORT 01 DEMO DAY LIVE // COHORT 02 ROLLING INTAKE"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onOpenDossier,
					className: "hover:underline flex items-center gap-1 text-[#FFFFFF] font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "APPLY TO PITCH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
				})
			]
		})
	});
}
function LogoIcon({ size = "md" }) {
	const [hasError, setHasError] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${{
			sm: "h-8 w-8 text-lg",
			md: "h-10 w-10 text-xl",
			lg: "h-12 w-12 text-2xl"
		}[size]} bg-[#002855] text-white flex items-center justify-center font-serif font-bold border-[0.5px] border-[#001A38]/30 shrink-0 overflow-hidden`,
		children: !hasError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "IEEE Logo",
			className: `${{
				sm: "h-6 w-6",
				md: "h-7 w-7",
				lg: "h-9 w-9"
			}[size]} object-contain`,
			onError: () => setHasError(true)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "G" })
	});
}
function Navbar({ onOpenDossier, scrollToSection }) {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-[#E5E2DA] bg-[#F9F8F5] sticky top-0 z-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3.5 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoIcon, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans font-extrabold text-base sm:text-lg text-[#002855] leading-tight tracking-tight uppercase whitespace-nowrap",
							children: "GLOBAL INCUBATION COMMITTEE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-[11px] tracking-widest text-[#57534E] uppercase font-semibold whitespace-nowrap",
							children: "IEEE Computer Society"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden xl:flex items-center gap-3.5 text-[11px] font-semibold uppercase tracking-wider text-[#57534E] shrink-0",
					children: [
						{
							label: "Tracks",
							id: "tracks"
						},
						{
							label: "Tiers",
							id: "tiers"
						},
						{
							label: "Sprint",
							id: "sprint"
						},
						{
							label: "About",
							id: "about"
						},
						{
							label: "Principles",
							id: "principles"
						},
						{
							label: "Journey",
							id: "journey"
						},
						{
							label: "Timeline",
							id: "pitch-process"
						},
						{
							label: "Evaluation",
							id: "evaluation"
						},
						{
							label: "Governance",
							id: "governance"
						},
						{
							label: "FAQ",
							id: "faq"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollToSection(item.id),
						className: "hover:text-[#002855] transition-colors py-1 whitespace-nowrap",
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onOpenDossier,
						className: "btn-tactile-primary bg-[#002855] text-white hover:bg-[#001D40] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border border-[#001A38] active:translate-y-0.5 whitespace-nowrap",
						children: "Apply to Pitch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMobileMenuOpen(!mobileMenuOpen),
						className: "xl:hidden p-2 text-[#002855] border border-[#E5E2DA] hover:bg-[#F4F2EC] active:translate-y-0.5 transition-all",
						"aria-label": "Toggle Navigation",
						children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-5 w-5" })
					})]
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "xl:hidden border-t border-[#E5E2DA] bg-[#F9F8F5] px-4 py-4 space-y-2",
			children: [
				{
					label: "Track Explorer",
					id: "tracks"
				},
				{
					label: "Cohort Tiers & Calc",
					id: "tiers"
				},
				{
					label: "12-Week Sprint Scrubber",
					id: "sprint"
				},
				{
					label: "About GIC & Dual Gaps",
					id: "about"
				},
				{
					label: "Vision & Objectives",
					id: "vision"
				},
				{
					label: "Timeline 2025-2026",
					id: "timeline"
				},
				{
					label: "What Makes GIC Different",
					id: "different"
				},
				{
					label: "Core Principles",
					id: "principles"
				},
				{
					label: "Full Stack Offerings",
					id: "offerings"
				},
				{
					label: "Incubation Journey",
					id: "journey"
				},
				{
					label: "Launch @ AICSSYC 2026",
					id: "showcase"
				},
				{
					label: "Pitch Process & Timeline (Sec 08)",
					id: "pitch-process"
				},
				{
					label: "Founder Benefits (Sec 09)",
					id: "benefits"
				},
				{
					label: "Mentors & Advisors (Sec 10)",
					id: "mentors"
				},
				{
					label: "Evaluation Matrix (Sec 11)",
					id: "evaluation"
				},
				{
					label: "Institutional Partners (Sec 12)",
					id: "partners"
				},
				{
					label: "Governance & IP Charter (Sec 13)",
					id: "governance"
				},
				{
					label: "FAQ (Sec 14)",
					id: "faq"
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setMobileMenuOpen(false);
					scrollToSection(item.id);
				},
				className: "block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-[#002855] border-b border-[#E5E2DA]",
				children: item.label
			}, item.id))
		})]
	});
}
function MarqueeTicker() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-[#E5E2DA] bg-[#002855] text-white py-2.5 overflow-hidden mono text-xs uppercase tracking-widest",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex whitespace-nowrap animate-marquee gap-8",
			children: [
				"SYS.LIVE: AICSSYC 2026 ONGOING // COHORT 01 DEMO DAY LIVE // COHORT 02 ROLLING INTAKE",
				"INVEST.",
				"IMPACT.",
				"IGNITE.",
				"INSPIRE.",
				"INNOVATE.",
				"INCUBATE.",
				"HARDWARE + SOFTWARE + HYBRID SYSTEMS.",
				"70-80% GLOBAL POPULATION MANDATE.",
				"IEEE COMPUTER SOCIETY.",
				"AICSSYC 2026 DEMO DAY."
			].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#9E2A2B]",
					children: "★"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: text.startsWith("SYS.LIVE") ? "text-[#FAF9F5] font-bold bg-[#9E2A2B]/40 px-2 py-0.5 border border-[#9E2A2B]" : "",
					children: text
				})]
			}, i))
		})
	});
}
function InstitutionalAccreditationSeal({ size = "md", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative ${{
			sm: "w-20 h-20",
			md: "w-28 h-28 sm:w-32 sm:h-32",
			lg: "w-36 h-36 sm:w-44 sm:h-44"
		}[size]} shrink-0 select-none group cursor-pointer ${className}`,
		title: "IEEE Computer Society · AICSSYC 2026 Accredited Incubation Specification",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 200",
			className: "w-full h-full animate-spin-slow transition-transform duration-700 group-hover:[animation-duration:8s]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					id: "seal-text-path",
					d: "M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "94",
					fill: "none",
					stroke: "#002855",
					strokeWidth: "1.5",
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "82",
					fill: "none",
					stroke: "#E5E2DA",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					className: "font-mono text-[10px] font-bold fill-[#002855] tracking-[0.22em] uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
						href: "#seal-text-path",
						startOffset: "0%",
						children: "★ IEEE COMPUTER SOCIETY ★ AICSSYC 2026 ★ GIC INCUBATION ★"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-3.5 sm:inset-4 rounded-full bg-[#FAF9F5] border-2 border-[#002855] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,40,85,0.12)] flex flex-col items-center justify-center p-2 text-center overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_8px_20px_rgba(0,40,85,0.2)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-1 rounded-full border border-dashed border-[#9E2A2B]/40 pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[7px] sm:text-[8px] font-extrabold text-[#9E2A2B] tracking-wider uppercase z-10 leading-none",
					children: "ACCREDITED"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-sm sm:text-base font-bold text-[#002855] leading-none my-0.5 z-10",
					children: "IEEE·CS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[6.5px] sm:text-[7.5px] text-[#57534E] uppercase tracking-widest z-10 leading-none",
					children: "0% EQUITY"
				})
			]
		})]
	});
}
function HeroSection({ onOpenDossier }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 lg:py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-between gap-4 mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mono text-[10px] bg-[#9E2A2B] text-white px-2 py-0.5 font-bold",
									children: "№ 001"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GLOBAL INCUBATION COMMITTEE / IEEE COMPUTER SOCIETY" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif tracking-[-0.03em] text-4xl sm:text-5xl lg:text-6xl xl:text-[4.15rem] text-[#002855] leading-[1.06] font-normal mb-6",
							children: ["Accelerating breakthrough engineering into ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-[#001428]",
								children: "scalable ventures."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-[#57534E] leading-relaxed mb-8 max-w-2xl font-normal font-sans",
							children: "An official global technology incubator providing non-dilutive grant capital, tier-1 mentorship, and technical scaling pathways for engineering founders under the IEEE Computer Society."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: onOpenDossier,
								className: "btn-tactile-primary bg-[#002855] text-white hover:bg-[#001D40] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-center border border-[#001A38] active:translate-y-0.5 transition-all flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Apply to Pitch" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstitutionalAccreditationSeal, { size: "sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[10px] text-[#57534E] leading-tight",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#002855] block",
										children: "OFFICIAL SEAL OF AUDIT"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AICSSYC 2026 · IEEE·CS" })]
								})]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 pt-6 border-t border-[#E5E2DA]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono tabular-nums text-[10px] font-bold text-[#57534E] uppercase tracking-widest mb-3",
							children: "// INSTITUTIONAL AUDIT LEDGER"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#FFFFFF] p-3 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums text-[10px] text-[#57534E]",
										children: "GOVERNING BODY"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-[#002855] mt-0.5 text-xs",
										children: "IEEE Computer Society"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#FFFFFF] p-3 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums text-[10px] text-[#57534E]",
										children: "CONVENTION"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-[#002855] mt-0.5 text-xs",
										children: "AICSSYC 2026"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#FFFFFF] p-3 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums text-[10px] text-[#57534E]",
										children: "COHORT CAPACITY"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-[#002855] mt-0.5 text-xs",
										children: "Top 10 Global Teams"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#FFFFFF] p-3 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums text-[10px] text-[#57534E]",
										children: "EQUITY OBLIGATION"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-[#9E2A2B] mt-0.5 text-xs",
										children: "0.0% Non-Dilutive"
									})]
								})
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "term-sheet-card p-6 border border-[#E5E2DA]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-[#002855] pb-4 mb-4 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-7 w-7 bg-[#002855] text-white flex items-center justify-center font-bold text-xs shadow-[0_1px_3px_rgba(0,40,85,0.3)]",
										children: "CS"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-sans font-bold text-base text-[#002855] leading-tight",
										children: "Executive Term Sheet"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums text-[10px] text-[#57534E] tracking-wider",
										children: "COHORT SPECIFICATION LEDGER"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums text-[10px] font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 px-2 py-0.5",
									children: "REF: GIC-2026-C1"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "divide-y divide-[#E5E2DA] text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3 flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-semibold text-[#1C1917]",
												children: "Non-Dilutive Grant Pool"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums text-[10px] text-[#57534E]",
												children: "Stage 1 Capital Grant"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-bold text-sm sm:text-base text-[#002855]",
												children: "₹50,000+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono tabular-nums text-[10px] text-[#9E2A2B] font-bold",
												children: "[NON-DILUTIVE]"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3 flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-semibold text-[#1C1917]",
												children: "Equity Requirement"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums text-[10px] text-[#57534E]",
												children: "Retained Founder Equity"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-bold text-sm sm:text-base text-[#9E2A2B]",
												children: "0.0%"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono tabular-nums text-[10px] text-[#57534E]",
												children: "[100% OWNERSHIP]"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3 flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-semibold text-[#1C1917]",
												children: "Accelerated Build Sprint"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums text-[10px] text-[#57534E]",
												children: "Hybrid Virtual + On-Site"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-bold text-sm sm:text-base text-[#002855]",
												children: "12 Weeks"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono tabular-nums text-[10px] text-[#57534E]",
												children: "[VERIFIED SPRINT]"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3 flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-semibold text-[#1C1917]",
												children: "AICSSYC Main Stage Showcase"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums text-[10px] text-[#57534E]",
												children: "Demo Day (Oct 8–11)"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-bold text-xs sm:text-sm text-[#002855]",
												children: "Main Stage Pitch"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono tabular-nums text-[10px] text-[#9E2A2B] font-bold",
												children: "[INSTITUTIONAL]"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3 flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-semibold text-[#1C1917]",
												children: "Enterprise Compute Credits"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums text-[10px] text-[#57534E]",
												children: "AWS, GCP, Supabase, LLMs"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono tabular-nums font-bold text-sm sm:text-base text-[#002855]",
												children: "₹100,000+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono tabular-nums text-[10px] text-[#57534E]",
												children: "[TIER-1 CREDIT]"
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 pt-4 bg-[#FAF9F6] border border-[#E5E2DA] p-3.5 flex items-start gap-2.5 text-[11px] text-[#57534E] leading-relaxed box-embossed-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "h-4 w-4 text-[#002855] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-[#002855]",
									children: "Audited Guarantee:"
								}), " Accepted teams retain full rights to proprietary software, patents, and system IP. Stage 1 grants require zero warrants or advisory shares."] })]
							})
						]
					})
				})]
			})
		})
	});
}
function TrackExplorerSection({ onOpenDossier }) {
	const [activeTrack, setActiveTrack] = (0, import_react.useState)("hardware");
	const current = {
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
				{
					label: "Target BOM Unit Cost",
					value: "≤ $12.50 / node"
				},
				{
					label: "Off-Grid Battery Life",
					value: "≥ 72 Hours continuous"
				},
				{
					label: "Field MTBF Reliability",
					value: "≥ 10,000 Op-Hours"
				},
				{
					label: "Enclosure Ingress Rating",
					value: "IP67 Dust & Water sealed"
				}
			],
			tags: [
				"Edge ML",
				"LoRaWAN",
				"NRF52 / ESP32",
				"Custom Multi-Layer PCB",
				"Solar Harvesting"
			],
			icon: Cpu
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
				{
					label: "Cold-Start Latency (2G)",
					value: "< 180ms on 2G edge"
				},
				{
					label: "Offline Sync Integrity",
					value: "100% Conflict-Free (CRDTs)"
				},
				{
					label: "Bundle Size Footprint",
					value: "≤ 8.5 MB total APK/WASM"
				},
				{
					label: "Data Leakage Security",
					value: "Zero-Knowledge Local Storage"
				}
			],
			tags: [
				"CRDTs",
				"SQLite WASM",
				"PWA Offline",
				"Embedded LLMs",
				"Zero-Knowledge"
			],
			icon: Globe
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
				{
					label: "Telemetry Roundtrip Sync",
					value: "< 900ms sensor-to-cloud"
				},
				{
					label: "Autonomous Node Failover",
					value: "100% Local Survivability"
				},
				{
					label: "Ingestion Throughput",
					value: "≥ 1,500 Events / sec"
				},
				{
					label: "Compliance Standard",
					value: "IEEE RF & Power Safety Certified"
				}
			],
			tags: [
				"Hardware-in-the-Loop",
				"Embedded Linux",
				"MQTT / gRPC",
				"AI Accelerators",
				"Micro-Grids"
			],
			icon: Layers
		}
	}[activeTrack];
	const IconComponent = current.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tracks",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E2DA] gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#9E2A2B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INTERACTIVE SPECIFICATION // 01" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002855] font-normal leading-tight",
							children: "Track Explorer: Solving for the 70–80%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#57534E] mt-2 max-w-2xl font-sans",
							children: "GIC provides differentiated hardware labs, non-dilutive capital grants, and technical validation benchmarks tailored to your engineering architecture."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mono text-xs font-bold text-[#002855] bg-[#F9F8F5] border border-[#E5E2DA] px-3 py-1.5 shrink-0 self-start md:self-auto",
						children: "MANDATE: NON-TRIVIAL ENGINEERING"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8",
					children: [
						{
							id: "hardware",
							label: "01. Hardware & IoT",
							icon: Cpu,
							sub: "Edge Sensors & Custom PCBs"
						},
						{
							id: "software",
							label: "02. Software Platforms",
							icon: Globe,
							sub: "Offline-First & Resilient AI"
						},
						{
							id: "hybrid",
							label: "03. Hybrid Systems",
							icon: Layers,
							sub: "Cyber-Physical & Telemetry"
						}
					].map((tab) => {
						const TabIcon = tab.icon;
						const isSelected = activeTrack === tab.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTrack(tab.id),
							className: `p-4 text-left border transition-all duration-200 flex items-start gap-3.5 relative ${isSelected ? "bg-[#002855] text-white border-[#001D40] shadow-[0_4px_16px_rgba(0,40,85,0.18)] translate-y-[-2px]" : "bg-[#F9F8F5] text-[#002855] border-[#E5E2DA] hover:bg-[#F4F2EC] active:translate-y-0.5"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `p-2 border shrink-0 ${isSelected ? "bg-white/10 border-white/20 text-white" : "bg-white border-[#E5E2DA] text-[#002855]"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabIcon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `font-sans font-bold text-sm sm:text-base ${isSelected ? "text-white" : "text-[#002855]"}`,
									children: tab.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `font-mono text-[11px] mt-0.5 ${isSelected ? "text-[#E5E2DA]/80" : "text-[#57534E]"}`,
									children: tab.sub
								})] }),
								isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2 right-2 h-2 w-2 rounded-full bg-[#9E2A2B] animate-pulse" })
							]
						}, tab.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-[#FAF9F5] border border-[#E5E2DA] p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,40,85,0.04)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 px-2.5 py-0.5 uppercase",
										children: current.badge
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[10px] text-[#57534E] tabular-nums",
										children: ["SPEC CODE: GIC-TRK-", current.id.toUpperCase()]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "h-7 w-7 text-[#002855]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl sm:text-3xl text-[#002855] font-normal",
										children: current.title
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans font-semibold text-xs sm:text-sm text-[#002855] mb-4",
									children: current.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#FFFFFF] border border-[#E5E2DA] p-4 mb-6 box-embossed-paper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-[10px] font-bold text-[#9E2A2B] uppercase mb-1 flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "70–80% UNDERSERVED POPULATION MANDATE" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#57534E] leading-relaxed",
										children: current.focusThesis
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] font-bold text-[#57534E] uppercase mb-2",
									children: "// KEY ARCHITECTURAL PROTOCOLS & STACKS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: current.tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[11px] text-[#002855] bg-white border border-[#E5E2DA] px-2.5 py-1 font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
										children: ["#", tag]
									}, i))
								})] })
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 pt-6 border-t border-[#E5E2DA]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: onOpenDossier,
									className: "btn-tactile-primary bg-[#002855] text-white hover:bg-[#001D40] px-5 py-3 text-xs font-bold uppercase tracking-wider border border-[#001A38] active:translate-y-0.5 inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Apply for ",
										current.title,
										" Track"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] font-bold text-[#57534E] uppercase",
												children: "PROTOTYPE GRANT ALLOCATION"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 px-2 py-0.5",
												children: "NON-DILUTIVE"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-xl sm:text-2xl font-bold text-[#002855] tabular-nums mt-1",
											children: current.grantAllocation
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[11px] text-[#57534E] mt-1",
											children: current.grantSubtext
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] font-bold text-[#57534E] uppercase mb-1",
											children: "TEST LAB & SANDBOX FACILITY"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-sans font-bold text-sm sm:text-base text-[#002855] mt-1",
											children: current.testLab
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] text-[#9E2A2B] font-semibold mt-1",
											children: "[100% INCLUDED UNDER IEEE COMPUTER SOCIETY]"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] font-bold text-[#002855] uppercase tracking-wider mb-3 pb-2 border-b border-[#E5E2DA]",
										children: "// QUANTIFIABLE ENGINEERING BENCHMARKS (SLA)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
										children: current.benchmarks.map((bm, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2.5 bg-[#FAF9F6] border border-[#E5E2DA]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono text-[10px] text-[#57534E]",
												children: bm.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono font-bold text-[#002855] text-xs sm:text-sm tabular-nums mt-0.5",
												children: bm.value
											})]
										}, i))
									})]
								})
							]
						})]
					})
				})
			]
		})
	});
}
function CohortTierCalculatorSection({ onOpenDossier }) {
	const [selectedTier, setSelectedTier] = (0, import_react.useState)("top10");
	const [teamSize, setTeamSize] = (0, import_react.useState)(3);
	const isTop10 = selectedTier === "top10";
	const travelStipendPerMember = isTop10 ? 35e3 : 0;
	const computeValue = isTop10 ? 1e5 : 5e4;
	const cashGrant = isTop10 ? 2e5 : 5e4;
	const totalTravel = travelStipendPerMember * teamSize;
	const estimatedTotalPackage = cashGrant + computeValue + totalTravel + (isTop10 ? 15e4 : 5e4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tiers",
		className: "py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E2DA] gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#9E2A2B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INTERACTIVE CALCULATOR // 02" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002855] font-normal leading-tight",
						children: "Cohort Tier & Benefit Calculator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#57534E] mt-2 max-w-2xl font-sans",
						children: "Compare non-dilutive benefits between the General Incubation Cohort and the Top 10 Finalist Delegation pitching live at AICSSYC 2026."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 bg-[#FFFFFF] border border-[#E5E2DA] p-1 self-start md:self-auto shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelectedTier("top10"),
						className: `px-4 py-2 text-xs font-bold uppercase font-mono transition-all ${isTop10 ? "bg-[#002855] text-white shadow-sm" : "text-[#57534E] hover:text-[#002855]"}`,
						children: "★ Top 10 Delegation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelectedTier("general"),
						className: `px-4 py-2 text-xs font-bold uppercase font-mono transition-all ${!isTop10 ? "bg-[#002855] text-white shadow-sm" : "text-[#57534E] hover:text-[#002855]"}`,
						children: "General Cohort (8–12)"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 bg-[#FFFFFF] border border-[#E5E2DA] p-6 sm:p-8 term-sheet-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-[#002855] pb-4 mb-6 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] text-[#9E2A2B] font-bold uppercase",
								children: "FINANCIAL LEDGER ESTIMATE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl text-[#002855] font-normal",
								children: isTop10 ? "Top 10 Finalist Package" : "General Cohort Package"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs font-bold text-[#002855] bg-[#F9F8F5] border border-[#E5E2DA] px-2.5 py-1",
								children: isTop10 ? "STAGE 1+2 VIP" : "STAGE 1 STANDARD"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 bg-[#FAF9F6] border border-[#E5E2DA] p-4 box-embossed-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "font-mono text-xs font-bold text-[#002855] uppercase flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Founding Team Size" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-sm font-bold text-[#9E2A2B] bg-white border border-[#E5E2DA] px-2.5 py-0.5 tabular-nums",
										children: [
											teamSize,
											" ",
											teamSize === 1 ? "Member" : "Founders"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "1",
									max: "5",
									step: "1",
									value: teamSize,
									onChange: (e) => setTeamSize(parseInt(e.target.value)),
									className: "w-full accent-[#002855] cursor-pointer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-mono text-[10px] text-[#57534E] mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1 Solo" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3 Typical" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5 Max Team" })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#002855] text-white p-6 mb-6 shadow-md border border-[#001D40] relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] text-[#E5E2DA]/80 uppercase tracking-widest",
									children: "TOTAL COLLECTIVE NON-DILUTIVE VALUE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-3xl sm:text-4xl font-extrabold text-white mt-1 tabular-nums",
									children: [
										"₹",
										estimatedTotalPackage.toLocaleString("en-IN"),
										"+"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[11px] text-[#E5E2DA]/90 mt-2 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#9E2A2B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0.0% Equity · Retain 100% Founder Ownership" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "divide-y divide-[#E5E2DA] font-mono text-xs mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-2.5 flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#57534E]",
										children: "Direct Capital Grant"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-[#002855] tabular-nums",
										children: ["₹", cashGrant.toLocaleString("en-IN")]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-2.5 flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#57534E]",
										children: "Compute & LLM Credits"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-[#002855] tabular-nums",
										children: ["₹", computeValue.toLocaleString("en-IN")]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-2.5 flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#57534E]",
										children: "Travel & On-Site Lodging"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#9E2A2B] tabular-nums",
										children: totalTravel > 0 ? `₹${totalTravel.toLocaleString("en-IN")} (100% Covered)` : "Virtual Stipend"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-2.5 flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#57534E]",
										children: "Dedicated Mentorship & Lab"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#002855] tabular-nums",
										children: isTop10 ? "₹1,50,000 (VIP EIR)" : "₹50,000 (Cohort)"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onOpenDossier,
							className: "btn-tactile-primary w-full bg-[#002855] text-white hover:bg-[#001D40] py-3 text-xs font-bold uppercase tracking-wider border border-[#001A38] active:translate-y-0.5 transition-all text-center",
							children: ["Apply for ", isTop10 ? "Top 10 Delegation" : "Cohort Intake"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 bg-[#FFFFFF] border border-[#E5E2DA] p-6 sm:p-8 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-xs font-bold text-[#002855] uppercase tracking-wider mb-6 pb-2 border-b border-[#E5E2DA] flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "// SIDE-BY-SIDE TIER SPECIFICATION MATRIX" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-[#9E2A2B]",
							children: "AICSSYC 2026"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `p-4 border transition-all ${isTop10 ? "bg-[#FAF9F6] border-[#002855]" : "bg-white border-[#E5E2DA]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-sans font-bold text-sm text-[#002855] flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-[#9E2A2B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cash Prize & Non-Dilutive Grant Pool" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-bold text-[#9E2A2B]",
										children: "[CAPITAL]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-2.5 border ${!isTop10 ? "bg-[#FAF9F5] border-[#002855] font-bold" : "bg-white border-[#E5E2DA]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-[#57534E]",
											children: "GENERAL COHORT"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[#002855] mt-0.5",
											children: "₹50,000 Stage 1 Grant"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-2.5 border ${isTop10 ? "bg-[#002855] text-white border-[#001D40] font-bold" : "bg-white border-[#E5E2DA]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: isTop10 ? "text-[#E5E2DA]/80 text-[10px]" : "text-[10px] text-[#57534E]",
											children: "TOP 10 DELEGATION"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: isTop10 ? "text-white mt-0.5" : "text-[#9E2A2B] mt-0.5 font-bold",
											children: "₹2,00,000 ($2,500 USD) Top Prize"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `p-4 border transition-all ${isTop10 ? "bg-[#FAF9F6] border-[#002855]" : "bg-white border-[#E5E2DA]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-sans font-bold text-sm text-[#002855] flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "h-4 w-4 text-[#002855]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Travel Allowance & Physical Convention Passes" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-bold text-[#002855]",
										children: "[TRAVEL]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-2.5 border ${!isTop10 ? "bg-[#FAF9F5] border-[#002855] font-bold" : "bg-white border-[#E5E2DA]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-[#57534E]",
											children: "GENERAL COHORT"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[#57534E] mt-0.5",
											children: "Virtual Access + Stipend"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-2.5 border ${isTop10 ? "bg-[#002855] text-white border-[#001D40] font-bold" : "bg-white border-[#E5E2DA]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: isTop10 ? "text-[#E5E2DA]/80 text-[10px]" : "text-[10px] text-[#57534E]",
											children: "TOP 10 DELEGATION"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: isTop10 ? "text-white mt-0.5" : "text-[#002855] mt-0.5 font-bold",
											children: "100% Travel + On-Site VIP Lodging"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `p-4 border transition-all ${isTop10 ? "bg-[#FAF9F6] border-[#002855]" : "bg-white border-[#E5E2DA]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-sans font-bold text-sm text-[#002855] flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#9E2A2B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AICSSYC 2026 Convention Stage Placement" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-bold text-[#9E2A2B]",
										children: "[EXPOSURE]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-2.5 border ${!isTop10 ? "bg-[#FAF9F5] border-[#002855] font-bold" : "bg-white border-[#E5E2DA]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-[#57534E]",
											children: "GENERAL COHORT"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[#57534E] mt-0.5",
											children: "Virtual Demo Room Showcase"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-2.5 border ${isTop10 ? "bg-[#002855] text-white border-[#001D40] font-bold" : "bg-white border-[#E5E2DA]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: isTop10 ? "text-[#E5E2DA]/80 text-[10px]" : "text-[10px] text-[#57534E]",
											children: "TOP 10 DELEGATION"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: isTop10 ? "text-white mt-0.5" : "text-[#002855] mt-0.5 font-bold",
											children: "Main Keynote Stage Live Pitch (10k+ Stream)"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `p-4 border transition-all ${isTop10 ? "bg-[#FAF9F6] border-[#002855]" : "bg-white border-[#E5E2DA]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-sans font-bold text-sm text-[#002855] flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-[#002855]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Advisory & Follow-on Venture Syndicate" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-bold text-[#002855]",
										children: "[SYNDICATE]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-2.5 border ${!isTop10 ? "bg-[#FAF9F5] border-[#002855] font-bold" : "bg-white border-[#E5E2DA]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-[#57534E]",
											children: "GENERAL COHORT"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[#57534E] mt-0.5",
											children: "Bi-Weekly Masterclasses"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-2.5 border ${isTop10 ? "bg-[#002855] text-white border-[#001D40] font-bold" : "bg-white border-[#E5E2DA]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: isTop10 ? "text-[#E5E2DA]/80 text-[10px]" : "text-[10px] text-[#57534E]",
											children: "TOP 10 DELEGATION"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: isTop10 ? "text-white mt-0.5" : "text-[#002855] mt-0.5 font-bold",
											children: "Dedicated EIR Fellow + Direct VC Introductions"
										})]
									})]
								})]
							})
						]
					})]
				})]
			})]
		})
	});
}
function SprintScrubberSection() {
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const steps = [
		{
			stepNumber: "01",
			timeline: "WEEKS 1–3",
			title: "Architectural Foundation & Threat Modeling",
			theme: "Defensible System Design, Component Audit & SASD Sign-off",
			description: "Founders define core engineering constraints, select defensible hardware/software primitives, conduct threat modeling, and formalize their System Architecture Specification Document (SASD).",
			mentors: [{
				name: "Dr. Anika Rao",
				role: "AI Research Lead",
				org: "IEEE Computer Society"
			}, {
				name: "Marcus Vinter",
				role: "General Partner",
				org: "Northwind Ventures"
			}],
			deliverables: [
				"System Architecture Specification Document (SASD)",
				"50 Target Underserved Community Field Interviews",
				"Non-Dilutive Grant Tranche 1 (25%) Disbursement",
				"Git Repository Lockdown & IP Protection Audit"
			],
			grantTranche: "Tranche 1: 25% Released Upon SASD Approval",
			milestoneSLA: "Core technical risk reduced & IP defense strategy locked"
		},
		{
			stepNumber: "02",
			timeline: "WEEKS 4–7",
			title: "Alpha Rapid Build & Field Telemetry",
			theme: "Hardware Prototyping, Resilient APIs & Synthetic Chaos Testing",
			description: "Teams execute on physical PCB assembly or deploy distributed offline-first cloud stacks. Lab trials are run under synthetic high-latency, packet-loss, and power-cycling test conditions.",
			mentors: [{
				name: "Kenji Watanabe",
				role: "Chief Scientist",
				org: "Kaimon Robotics"
			}, {
				name: "Elena Duarte",
				role: "Product Advisor",
				org: "Ex-Stripe Infrastructure"
			}],
			deliverables: [
				"Functional Alpha Device / Running MVP Codebase",
				"End-to-End Cloud Telemetry Pipeline Integration",
				"Safety & Radio Frequency (RF) Compliance Pre-Screen",
				"Non-Dilutive Grant Tranche 2 (35%) Disbursement"
			],
			grantTranche: "Tranche 2: 35% Released Upon Working Alpha Validation",
			milestoneSLA: "Continuous field test pass rate ≥ 98% with zero packet loss"
		},
		{
			stepNumber: "03",
			timeline: "WEEKS 8–10",
			title: "Go-To-Market & Unit Economics Stress Test",
			theme: "Commercial Modeling, Pilot Deployment & Investor Memorandum",
			description: "Validating customer acquisition economics, signing enterprise pilot LOIs, stress-testing BOM margins at scale, and preparing formal investment memos for syndicate partners.",
			mentors: [{
				name: "Samuel Okafor",
				role: "GTM Executive Advisor",
				org: "Andela / Alt Capital"
			}, {
				name: "Priya Shankar",
				role: "Founder & CEO",
				org: "OrbitLabs Distributed"
			}],
			deliverables: [
				"Audited Unit Economics & Scaled BOM Margin Model",
				"3 Signed Letters of Intent (LOIs) / Pilot Trial Agreements",
				"Formal Investor Memorandum & Pitch Deck V1",
				"Non-Dilutive Grant Tranche 3 (40%) Disbursement"
			],
			grantTranche: "Tranche 3: 40% Released Upon Commercial Pilot Validation",
			milestoneSLA: "Proof of customer traction & pilot deployment verified"
		},
		{
			stepNumber: "04",
			timeline: "DEMO DAY (OCT 8–11)",
			title: "AICSSYC 2026 Main Stage Pitch",
			theme: "Live Hardware & Software Demonstration Before VC Jury & Global Audience",
			description: "The cohort convenes live at AICSSYC 2026. The Top 10 teams pitch on the main keynote stage, undergo live technical Q&A before institutional VC leads, and compete for the ₹2,00,000 ($2,500) prize pool.",
			mentors: [{
				name: "IEEE CS Executive Secretariat",
				role: "Governing Panel",
				org: "Global Incubation Committee"
			}, {
				name: "Venture Capital Jury",
				role: "Lead Syndicate",
				org: "Northwind, Nexora & AtlasLabs"
			}],
			deliverables: [
				"AICSSYC 2026 Main Keynote Live Product Demonstration",
				"Prize Award Ceremony (Up to ₹2,00,000 / $2,500 USD)",
				"Institutional Follow-on Angel Syndicate Onboarding",
				"Official IEEE CS Incubation Charter & Post-Cohort Advisory"
			],
			grantTranche: "Top Award: ₹2,00,000 ($2,500 USD) Cash Prize + Institutional Syndication",
			milestoneSLA: "Broadcast to 10,000+ global engineering & venture leaders"
		}
	];
	const current = steps[activeStep];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sprint",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E2DA] gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#9E2A2B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INTERACTIVE TIMELINE // 03" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002855] font-normal leading-tight",
							children: "12-Week Sprint Scrubber"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#57534E] mt-2 max-w-2xl font-sans",
							children: "Scrub through the 12-week verified incubation pathway to inspect weekly deliverables, lead operator mentors, and capital tranche releases."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mono text-xs font-bold text-[#002855] bg-[#F9F8F5] border border-[#E5E2DA] px-3 py-1.5 shrink-0 self-start md:self-auto",
						children: "TIMELINE: 12 WEEKS TO MAIN STAGE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
						children: steps.map((s, idx) => {
							const isActive = activeStep === idx;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveStep(idx),
								className: `p-4 text-left border transition-all duration-200 relative ${isActive ? "bg-[#002855] text-white border-[#001D40] shadow-[0_4px_16px_rgba(0,40,85,0.18)] translate-y-[-2px]" : "bg-[#F9F8F5] text-[#002855] border-[#E5E2DA] hover:bg-[#F4F2EC] active:translate-y-0.5"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `font-mono text-xs font-bold ${isActive ? "text-[#E5E2DA]" : "text-[#9E2A2B]"}`,
											children: ["PHASE ", s.stepNumber]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-mono text-[10px] px-2 py-0.5 font-bold ${isActive ? "bg-white/20 text-white" : "bg-white text-[#002855] border border-[#E5E2DA]"}`,
											children: s.timeline
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `font-sans font-bold text-xs sm:text-sm line-clamp-2 ${isActive ? "text-white" : "text-[#002855]"}`,
										children: s.title
									}),
									isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-[#9E2A2B]" })
								]
							}, idx);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-[#FAF9F5] border border-[#E5E2DA] p-6 sm:p-10 shadow-[0_2px_12px_rgba(0,40,85,0.04)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 px-2.5 py-0.5 uppercase",
										children: [
											"STAGE ",
											current.stepNumber,
											" · ",
											current.timeline
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] text-[#57534E]",
										children: "VERIFIED SPRINT MILESTONE"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl sm:text-3xl text-[#002855] font-normal leading-tight",
									children: current.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-sans font-semibold text-xs sm:text-sm text-[#002855] mt-1 mb-4",
									children: current.theme
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-[#57534E] leading-relaxed",
									children: current.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] font-bold text-[#57534E] uppercase tracking-wider mb-3 pb-2 border-b border-[#E5E2DA]",
									children: "// LEAD OPERATOR MENTORS & ADVISORY FACULTY"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: current.mentors.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-9 w-9 bg-[#002855] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-sm",
											children: m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-sans font-bold text-xs text-[#002855]",
												children: m.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono text-[10px] text-[#9E2A2B] font-semibold",
												children: m.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono text-[9px] text-[#57534E]",
												children: m.org
											})
										] })]
									}, i))
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-[#FFFFFF] p-5 border border-[#E5E2DA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[10px] font-bold text-[#002855] uppercase tracking-wider mb-3 pb-2 border-b border-[#E5E2DA] flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STAGE DELIVERABLES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-[#9E2A2B] font-bold",
										children: "[VERIFIED CHECKLIST]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2.5 text-xs",
									children: current.deliverables.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-[#1C1917]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#002855] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "leading-snug font-sans",
											children: item
										})]
									}, i))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-[#FAF9F6] p-4 border border-[#E5E2DA] box-embossed-paper",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] font-bold text-[#9E2A2B] uppercase mb-1",
										children: "GRANT DISBURSEMENT TRANCHE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono font-bold text-xs text-[#002855]",
										children: current.grantTranche
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-[10px] text-[#57534E] mt-2 pt-2 border-t border-[#E5E2DA]/60",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-[#002855]",
												children: "Quality Benchmark SLA:"
											}),
											" ",
											current.milestoneSLA
										]
									})
								]
							})]
						})]
					})
				})
			]
		})
	});
}
function AboutTwoGapsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-3",
					children: "SECTION / 01 // ABOUT / FILE № 001"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-5xl text-[#002855] leading-tight mb-8 font-normal",
					children: "Most incubation programs stop the moment an idea becomes a prototype. GIC doesn’t."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#FAF9F6] border border-[#E5E2DA] p-8 sm:p-10 mb-10 text-sm sm:text-base text-[#57534E] leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-4",
						children: [
							"The ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Global Incubation Committee (GIC)" }),
							" is an initiative of the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "IEEE Computer Society" }),
							", built as an exclusive startup pitching competition for AICSSYC, followed by a dedicated incubation ecosystem to solve real problems for the 70–80% of the world's population who are typically underserved by mainstream innovation — marginalised communities, underserved regions, and overlooked markets."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Whether the solution is a hardware device, a software platform, or a hardware + software system, GIC provides the mentorship, technical guidance, and structured support to take it from a bold idea to a sustainable, scalable venture with genuine social impact." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-xs font-bold text-[#002855] uppercase tracking-widest mb-4",
							children: "// THE DUAL GAPS THESIS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#57534E] mb-6 leading-relaxed",
							children: "GIC exists to close two gaps at once: the gap between research and real-world impact, and the gap between prototype and startup — the exact point where most founders are left to fend for themselves. We stay with founders through both."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-[#E5E2DA] bg-[#FAF9F6] p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mono text-xs font-bold text-[#9E2A2B] uppercase mb-2",
										children: "[ GAP 01 ]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl text-[#002855] mb-3 font-normal",
										children: "Research to Real-World Impact"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm text-[#57534E] leading-relaxed",
										children: "Translating peer-reviewed technical research and academic breakthroughs into deployable software, hardware, and system architectures that solve pressing global challenges."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-[#E5E2DA] bg-[#FAF9F6] p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mono text-xs font-bold text-[#9E2A2B] uppercase mb-2",
										children: "[ GAP 02 ]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl text-[#002855] mb-3 font-normal",
										children: "Prototype to Sustainable Startup"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm text-[#57534E] leading-relaxed",
										children: "Providing structured mentorship, investor readiness, and go-to-market execution past the prototype stage, where most traditional accelerators abandon founders."
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border border-[#E5E2DA] bg-[#FFFFFF] text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xs font-bold text-[#002855]",
								children: "100% Social Impact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] text-[#57534E] mt-0.5 uppercase",
								children: "Underserved Population Focus"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border border-[#E5E2DA] bg-[#FFFFFF] text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xs font-bold text-[#002855]",
								children: "Hardware + Software"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] text-[#57534E] mt-0.5 uppercase",
								children: "Hybrid Systems Support"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border border-[#E5E2DA] bg-[#FFFFFF] text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xs font-bold text-[#9E2A2B]",
								children: "∞ Ambition"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] text-[#57534E] mt-0.5 uppercase",
								children: "Uncapped Scalability"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border border-[#E5E2DA] bg-[#FFFFFF] text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xs font-bold text-[#002855]",
								children: "Scope: Global"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] text-[#57534E] mt-0.5 uppercase",
								children: "International Intake"
							})]
						})
					]
				})
			]
		})
	});
}
function VisionMissionObjectivesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "vision",
		className: "py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "// STRATEGIC MANDATE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10",
					children: "Vision & Strategic Mandate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#FFFFFF] border border-[#E5E2DA] border-l-4 border-l-[#002855] p-8 mb-12 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-xs font-bold text-[#002855] uppercase mb-3",
						children: "[ GLOBAL VISION STATEMENT ]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "font-serif text-xl sm:text-2xl text-[#002855] leading-relaxed italic font-normal",
						children: "\"To become a globally recognized social enterprise incubation ecosystem that empowers innovators to build technologies and startups that create meaningful, lasting change for the majority of the world's population — not just its most privileged segment.\""
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#FFFFFF] border border-[#E5E2DA] p-8 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-xs font-bold text-[#002855] uppercase tracking-widest mb-6 border-b border-[#E5E2DA] pb-3",
						children: "MISSION DIRECTIVES // 01 → 05"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-[#E5E2DA]",
						children: [
							"Foster innovation-driven, socially conscious entrepreneurship.",
							"Support early-stage startups through structured, end-to-end incubation — from idea to prototype, and from prototype to startup.",
							"Connect innovators with mentors, industry experts, investors, and academic leaders who stay engaged through every stage.",
							"Accelerate the commercialization of research and emerging technologies, with priority given to solutions serving marginalised and underserved populations.",
							"Build an inclusive global community of entrepreneurs, researchers, and technology professionals working across hardware, software, and hybrid systems."
						].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-4 flex items-start gap-4 first:pt-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mono font-bold text-sm text-[#9E2A2B] bg-[#F9F8F5] px-2.5 py-1 border border-[#E5E2DA] shrink-0",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base text-[#1C1917] font-sans leading-relaxed pt-0.5",
								children: m
							})]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#002855] uppercase tracking-widest mb-6",
					children: "// INSTITUTIONAL OBJECTIVES LEDGER"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						{
							code: "OBJ / 01",
							title: "Foster Innovation",
							desc: "Encourage the development of innovative hardware, software, and hybrid solutions addressing real-world challenges for marginalised populations."
						},
						{
							code: "OBJ / 02",
							title: "Support Entrepreneurs, Fully",
							desc: "Provide structured mentorship and technical guidance that continues past the prototype stage, into company-building."
						},
						{
							code: "OBJ / 03",
							title: "Accelerate Startup Growth",
							desc: "Offer incubation from idea validation through product development, market readiness, and scaling."
						},
						{
							code: "OBJ / 04",
							title: "Bridge Academia and Industry",
							desc: "Facilitate collaboration among universities, researchers, corporations, government bodies, and startups."
						},
						{
							code: "OBJ / 05",
							title: "Enable Global Collaboration",
							desc: "Build international partnerships that give startups access to global markets, expertise, and networks."
						}
					].map((obj, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#FFFFFF] border border-[#E5E2DA] p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xs font-bold text-[#9E2A2B] mb-2",
								children: obj.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans font-bold text-base text-[#002855] mb-2",
								children: obj.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#57534E] leading-relaxed",
								children: obj.desc
							})
						]
					}, i))
				})] })
			]
		})
	});
}
function TimelineMilestonesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "timeline",
		className: "py-16 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-8 border-b border-[#002855] pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl sm:text-3xl text-[#002855]",
					children: "TIMELINE: 2025 → 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mono text-xs text-[#9E2A2B] font-bold",
					children: "04 MILESTONES"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: [
					{
						period: "Q4 · 2025",
						label: "Concept & Charter",
						detail: "Framework ratified under IEEE·CS."
					},
					{
						period: "Q1 · 2026",
						label: "Mentor Onboarding",
						detail: "Global advisory panel confirmed."
					},
					{
						period: "Q2 · 2026",
						label: "Applications Open",
						detail: "Startups worldwide invited to apply."
					},
					{
						period: "AICSSYC · 2026",
						label: "Official Launch",
						detail: "Inaugural cohort unveiled live."
					}
				].map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#F9F8F5] border border-[#E5E2DA] p-6 relative flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-xs font-bold text-[#9E2A2B] bg-[#FFFFFF] px-2.5 py-1 border border-[#E5E2DA] inline-block mb-3",
							children: m.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl font-bold text-[#002855] mb-2",
							children: m.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#57534E] leading-relaxed",
							children: m.detail
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 pt-3 border-t border-[#E5E2DA] mono text-[11px] text-[#57534E]",
						children: ["MILESTONE 0", idx + 1]
					})]
				}, idx))
			})]
		})
	});
}
function WhatMakesGicDifferentSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "different",
		className: "py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 01-B // DIFFERENTIATION"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-6",
					children: "We don't stop at the prototype."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-[#FFFFFF] border border-[#E5E2DA] p-8 mb-12 text-sm text-[#57534E] leading-relaxed",
					children: "Traditional incubation support often ends once a working prototype exists — leaving founders to figure out funding, business structure, go-to-market, and scaling on their own. GIC is built specifically to close that gap. This continuity is the core of what GIC offers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#FFFFFF] border border-[#E5E2DA] p-8 border-t-4 border-t-[#002855]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xs font-bold text-[#002855] mb-2",
								children: "STAGE 1 // IDEA → PROTOTYPE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans font-bold text-xl text-[#002855] mb-3",
								children: "Ideation & Technical Guidance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-[#57534E] leading-relaxed",
								children: "Ideation support, technical mentorship, validation, and hands-on prototyping guidance across hardware, software, and hardware+software systems."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#FFFFFF] border border-[#E5E2DA] p-8 border-t-4 border-t-[#9E2A2B]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xs font-bold text-[#9E2A2B] mb-2",
								children: "STAGE 2 // PROTOTYPE → STARTUP"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans font-bold text-xl text-[#002855] mb-3",
								children: "Venture Formation & GTM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-[#57534E] leading-relaxed",
								children: "Business strategy, investor readiness, legal/IP guidance, mentor-matching, and go-to-market support to turn a working prototype into a functioning company."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-3",
						children: "SOCIAL ENTERPRISE FOR THE 70–80%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#57534E] mb-6 leading-relaxed max-w-3xl",
						children: "GIC prioritizes ventures that address problems affecting the majority, not the minority — the populations most incubation ecosystems overlook. Solutions can be hardware-based, software-based, or a combination of both — GIC's mentorship and infrastructure support all three tracks equally."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-3",
						children: [
							"Underserved and marginalised communities",
							"Low-resource and rural settings",
							"Accessibility and inclusion challenges",
							"Public health, education, livelihood, and financial inclusion",
							"Climate and sustainability challenges affecting vulnerable populations"
						].map((domain, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mono text-xs text-[#002855] bg-[#FFFFFF] border border-[#E5E2DA] px-3.5 py-2 font-medium flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#9E2A2B] rounded-full shrink-0" }), domain]
						}, idx))
					})
				] })
			]
		})
	});
}
function CorePrinciplesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "principles",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 02 // CORE PRINCIPLES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-12",
					children: "The Rules of the House"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: [
						{
							code: "RULE / 01",
							title: "Impact First",
							desc: "Every venture we support must move the needle for the people it's built for."
						},
						{
							code: "RULE / 02",
							title: "Entrepreneur-Centric",
							desc: "Our support doesn't end at the prototype; it's designed around the founder's full journey."
						},
						{
							code: "RULE / 03",
							title: "Global Perspective",
							desc: "Innovation transcends borders; we encourage international collaboration and market access."
						},
						{
							code: "RULE / 04",
							title: "Collaboration Over Competition",
							desc: "Meaningful innovation flourishes through multidisciplinary collaboration."
						},
						{
							code: "RULE / 05",
							title: "Integrity & Ethics",
							desc: "Every initiative is guided by transparency, fairness, and accountability."
						},
						{
							code: "RULE / 06",
							title: "Inclusivity",
							desc: "We welcome innovators from diverse backgrounds, disciplines, and communities."
						},
						{
							code: "RULE / 07",
							title: "Continuous Learning",
							desc: "Entrepreneurship is a journey of lifelong learning and resilience."
						},
						{
							code: "RULE / 08",
							title: "Sustainable Impact",
							desc: "We back ventures that create lasting economic, technological, environmental, and societal value."
						}
					].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-[#F9F8F5] border border-[#E5E2DA] p-6 flex flex-col justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xs font-bold text-[#9E2A2B] mb-3",
								children: r.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans font-bold text-base text-[#002855] mb-2",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#57534E] leading-relaxed",
								children: r.desc
							})
						] })
					}, i))
				})
			]
		})
	});
}
function FullStackOfferingsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "offerings",
		className: "py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 03 // WHAT GIC OFFERS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10",
					children: "A Full Stack for the Modern Founder"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
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
						"Demo Days and Showcase Events"
					].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#FFFFFF] border border-[#E5E2DA] p-5 flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono font-bold text-xs text-[#9E2A2B] bg-[#F9F8F5] px-2 py-0.5 border border-[#E5E2DA] shrink-0",
							children: String(idx + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs sm:text-sm font-semibold text-[#002855] font-sans leading-snug",
							children: item
						})]
					}, idx))
				})
			]
		})
	});
}
function WhoCanApplySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 04 // ELIGIBILITY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10",
					children: "Built for Every Kind of Builder"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-5 gap-4",
					children: [
						"Students",
						"Technology Entrepreneurs",
						"Researchers",
						"Social Innovators",
						"Faculty Members",
						"Deep-Tech Founders",
						"Early-Stage Startups",
						"AI & Emerging Tech Startups",
						"Hardware / Hybrid Innovators",
						"Individual Innovators"
					].map((cat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#F9F8F5] border border-[#E5E2DA] p-5 text-center flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mono text-[10px] text-[#9E2A2B] font-bold mb-2",
							children: ["APPLICANT / 0", idx + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-sans font-bold text-xs sm:text-sm text-[#002855]",
							children: cat
						})]
					}, idx))
				})
			]
		})
	});
}
function WhyJoinGicSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 05 // WHY JOIN GIC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10",
					children: "Eight Reasons Founders Choose Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: [
						"Build with experienced mentors who stay with you past the prototype stage.",
						"Validate ideas using industry expertise.",
						"Access strategic partnerships and global networks.",
						"Strengthen both technical and business capabilities.",
						"Connect with investors and ecosystem leaders.",
						"Accelerate product development across hardware, software, and hybrid systems.",
						"Gain visibility through national and international platforms.",
						"Become part of a thriving, impact-driven innovation community."
					].map((r, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#FFFFFF] border border-[#E5E2DA] p-6 flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mono font-bold text-sm text-[#9E2A2B] bg-[#F9F8F5] px-3 py-1 border border-[#E5E2DA] shrink-0",
							children: ["0", idx + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#1C1917] font-sans leading-relaxed pt-0.5",
							children: r
						})]
					}, idx))
				})
			]
		})
	});
}
function IncubationJourneySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "journey",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
						children: "SECTION / 06 // INCUBATION JOURNEY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl sm:text-4xl text-[#002855] leading-tight font-normal",
						children: "A structured pathway, from spark to global scale."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-[#57534E] leading-relaxed",
						children: "Every startup follows this structured pathway — supported by domain experts, industry mentors, researchers, and strategic partners at every single stage, including the ones most incubators skip."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: [
					{
						stage: "STAGE / 01",
						title: "Idea",
						subtitle: "CONCEPT & PROBLEM DEFINITION",
						desc: "Refining core engineering hypothesis, mapping population impact scope, and establishing defensible technical benchmarks."
					},
					{
						stage: "STAGE / 02",
						title: "Validation",
						subtitle: "MARKET RESEARCH & USER INTERVIEWS",
						desc: "Conducting user interviews, customer discovery, field validation trials, and domain mapping in target underserved regions."
					},
					{
						stage: "STAGE / 03",
						title: "Prototype",
						subtitle: "BUILD & TEST EARLY SOLUTION",
						desc: "Hardware prototyping, software architecture deployment, compute credit integration, and iterative beta testing."
					},
					{
						stage: "STAGE / 04",
						title: "Launch & Scale",
						subtitle: "AICSSYC 2026 LIVE PITCH & ONBOARDING",
						desc: "Live pitch to VC panel at AICSSYC 2026, venture formation, and long-term ecosystem integration."
					}
				].map((st, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#F9F8F5] border border-[#E5E2DA] p-6 border-t-4 border-t-[#002855] flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-xs font-bold text-[#9E2A2B] mb-2",
							children: st.stage
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans font-bold text-xl text-[#002855] mb-1",
							children: st.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-[10px] text-[#57534E] font-semibold mb-3",
							children: st.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#57534E] leading-relaxed",
							children: st.desc
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 pt-4 border-t border-[#E5E2DA] flex items-center justify-between mono text-xs text-[#002855]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"STAGE ",
							i + 1,
							" OF 4"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-[#9E2A2B]" })]
					})]
				}, i))
			})]
		})
	});
}
function LaunchAicssycSection({ onOpenDossier }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "showcase",
		className: "py-20 border-b border-[#E5E2DA] bg-[#002855] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[#001D40] border border-[#001A38] p-8 sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-xs font-bold text-[#9E2A2B] bg-white px-2.5 py-1 inline-block uppercase mb-4",
						children: "SECTION / 07 // LAUNCH @ AICSSYC 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl sm:text-5xl text-white leading-tight mb-4 font-normal",
						children: "A new era begins in public. Where ideas become innovations, and innovations create global impact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#002855] border border-[#001A38] p-6 sm:p-8 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm sm:text-base text-[#E5E2DA]/90 leading-relaxed font-normal mb-4",
							children: "The inaugural edition of the Global Incubation Committee (GIC) marks a significant milestone in fostering social enterprise-driven, innovation-led entrepreneurship within the IEEE Computer Society ecosystem. GIC is an exclusive startup pitching competition for AICSSYC 2026. The top 10 teams will be called in to AICSSYC for pitching their ideas live before an expert panel, after which they will receive the dedicated incubation support they need."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 mono text-xs text-[#E5E2DA]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-[#9E2A2B] text-white px-3 py-1 font-bold",
									children: "Event: AICSSYC · 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-white text-[#002855] px-3 py-1 font-bold",
									children: "Oct 8 – 11, 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "border border-white px-3 py-1",
									children: "Format: Live Panel + Global Broadcast"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onOpenDossier,
							className: "btn-tactile-crimson bg-[#9E2A2B] text-white hover:bg-[#852324] px-6 py-3.5 text-xs font-bold uppercase tracking-wider border border-[#9E2A2B] active:translate-y-0.5 transition-all flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reserve Your Spot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#dossier",
							className: "btn-tactile-secondary bg-transparent text-white hover:bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider border border-white active:translate-y-0.5 transition-all",
							children: "Partner With Us"
						})]
					})
				]
			})
		})
	});
}
function PitchProcessTimelineSection({ onOpenDossier }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pitch-process",
		className: "py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 08 // PROCESS & TIMELINE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-4",
					children: "Startup Pitch Process & Official Schedule"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-[#FFFFFF] border-l-4 border-l-[#9E2A2B] border border-[#E5E2DA] p-4 sm:p-5 mb-10 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start sm:items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mono text-[10px] bg-[#9E2A2B] text-white px-2.5 py-1 font-bold uppercase tracking-wider shrink-0",
								children: "INTAKE STATUS NOTICE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm font-sans font-medium text-[#002855] leading-relaxed",
								children: "Cohort 01 closed on 15 Sep 2026 and is currently presenting live at AICSSYC (Oct 08–11). Submissions received below are queued for Cohort 02 review."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-[11px] text-[#9E2A2B] font-bold uppercase tracking-wider shrink-0 bg-[#FAF9F5] px-2.5 py-1 border border-[#E5E2DA]",
							children: "COHORT 02 ACTIVE INTAKE"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-xs font-bold text-[#9E2A2B] mb-2",
									children: "STEP / 01"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans font-bold text-base text-[#002855] mb-3",
									children: "ELIGIBILITY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "text-xs text-[#57534E] space-y-2 mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Early-stage startups & student founders" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Researchers with commercializable IP" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Solo founders or teams (≤ 5)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Global applicants welcome" })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-xs font-bold text-[#9E2A2B] mb-2",
									children: "STEP / 02"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans font-bold text-base text-[#002855] mb-3",
									children: "EVALUATION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "text-xs text-[#57534E] space-y-2 mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Innovation & technical depth" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Market opportunity & scalability" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Team strength & execution" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Social & economic impact" })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-xs font-bold text-[#9E2A2B] mb-2",
									children: "STEP / 03"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans font-bold text-base text-[#002855] mb-3",
									children: "SELECTION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "text-xs text-[#57534E] space-y-2 mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Online application & screening" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Shortlist announcement" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Live pitch to expert panel" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Incubation offer & onboarding" })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-xs font-bold text-[#9E2A2B] mb-2",
									children: "STEP / 04"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans font-bold text-base text-[#002855] mb-3",
									children: "OFFICIAL DATES"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "text-xs text-[#57534E] space-y-2 mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Cohort 01 Closed: 15 Sep 2026" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Demo Day: AICSSYC (Oct 8–11 Live)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Cohort 02 Applications: Open Rolling" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Cohort 02 Review: Ongoing" })
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#002855] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_8px_24px_rgba(0,40,85,0.15)] border border-[#001D40]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-xs text-[#9E2A2B] font-bold uppercase bg-white px-2 py-0.5 inline-block mb-1",
						children: "COHORT 02 ROLLING INTAKE · FREE TO APPLY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-serif text-xl sm:text-2xl text-white",
						children: "Queue your venture for Cohort 02 review."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onOpenDossier,
						className: "btn-tactile-crimson bg-[#9E2A2B] text-white hover:bg-[#852324] px-6 py-3.5 text-xs font-bold uppercase tracking-wider border border-[#9E2A2B] active:translate-y-0.5 transition-all whitespace-nowrap",
						children: "Apply for Cohort 02 →"
					})]
				})
			]
		})
	});
}
function FounderBenefitsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "benefits",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 09 // BENEFITS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-10",
					children: "Everything a Founder Actually Needs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							num: "01",
							label: "Prize Money up to ₹2,00,000 / $2,500"
						},
						{
							num: "02",
							label: "Travel Allowance (Top 10 Teams)"
						},
						{
							num: "03",
							label: "Exclusive Goodies (Top 10 Teams)"
						},
						{
							num: "04",
							label: "1:1 Mentorship"
						},
						{
							num: "05",
							label: "Investor Connect"
						},
						{
							num: "06",
							label: "Networking"
						},
						{
							num: "07",
							label: "Workspace Access"
						},
						{
							num: "08",
							label: "Product Validation"
						},
						{
							num: "09",
							label: "Technical Support"
						},
						{
							num: "10",
							label: "Legal & IP Guidance"
						},
						{
							num: "11",
							label: "Branding"
						},
						{
							num: "12",
							label: "Go-to-Market Strategy"
						}
					].map((b, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#F9F8F5] border border-[#E5E2DA] p-5 flex items-center gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono font-bold text-xs text-[#9E2A2B] bg-[#FFFFFF] px-2.5 py-1 border border-[#E5E2DA] shrink-0",
							children: b.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs sm:text-sm font-semibold text-[#002855] font-sans",
							children: b.label
						})]
					}, idx))
				})
			]
		})
	});
}
function MentorsAdvisorsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "mentors",
		className: "py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 10 // ADVISORS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-2",
					children: "Operators. Investors. Researchers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[#57534E] mb-10",
					children: "Dedicated mentors who stay engaged through every stage of your incubation journey."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						{
							name: "Dr. Anika Rao",
							title: "AI Research Lead",
							org: "IEEE·CS"
						},
						{
							name: "Marcus Vinter",
							title: "Partner",
							org: "Northwind Ventures"
						},
						{
							name: "Priya Shankar",
							title: "Founder & CEO",
							org: "OrbitLabs"
						},
						{
							name: "Kenji Watanabe",
							title: "Chief Scientist",
							org: "Kaimon Robotics"
						},
						{
							name: "Elena Duarte",
							title: "Product Advisor",
							org: "Ex-Stripe"
						},
						{
							name: "Samuel Okafor",
							title: "GTM Advisor",
							org: "Andela / Alt"
						}
					].map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#FFFFFF] border border-[#E5E2DA] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 bg-[#002855] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-[0_2px_4px_rgba(0,40,85,0.2)]",
								children: m.name.split(" ").map((n) => n[0]).join("")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans font-bold text-base text-[#002855]",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold text-[#9E2A2B] mt-0.5",
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[11px] text-[#57534E] mt-2",
								children: m.org
							})
						]
					}, idx))
				})
			]
		})
	});
}
function EvaluationMatrixSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "evaluation",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
							children: "SECTION / 11 // EVALUATION BENCHMARKS & SCORING MATRIX"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal leading-tight",
							children: "Evaluation Benchmarks & Scoring Matrix"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs sm:text-sm text-[#57534E] max-w-2xl leading-relaxed",
							children: "Every applicant is assessed across four weighted vectors by our academic and venture review boards. A composite score of 80/100 or higher qualifies ventures for final live pitch selection."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-[#E5E2DA] bg-[#F9F8F5] p-4 flex items-center gap-6 shrink-0 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] text-[#57534E] uppercase font-bold",
								children: "TOTAL SCORE MATRIX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xl font-bold text-[#002855]",
								children: "100% / 100 PTS"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-px bg-[#E5E2DA]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] text-[#9E2A2B] uppercase font-bold",
								children: "SHORTLIST CUTOFF"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-xl font-bold text-[#9E2A2B]",
								children: "≥ 80.0 PTS"
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10",
					children: [
						{
							code: "CRIT / 01",
							weight: "30%",
							title: "Problem Depth",
							tag: "POPULATION IMPACT & UNMET NEED",
							desc: "Clarity of problem framing and validation that the solution addresses the 70–80% underserved global majority. Evaluates empirical customer discovery, severity of pain point, and structural urgency.",
							metrics: [
								"Underserved population focus (70–80% mandate)",
								"Direct stakeholder field validation",
								"Economic & societal leverage magnitude"
							]
						},
						{
							code: "CRIT / 02",
							weight: "25%",
							title: "Technical Defensibility",
							tag: "ENGINEERING NOVELTY & MOAT",
							desc: "Novelty of IP, patentability, or proprietary deep-tech architecture across hardware, software, or hybrid layers. Assesses technical feasibility, architecture durability, and IEEE domain rigor.",
							metrics: [
								"Proprietary IP / algorithmic differentiation",
								"Hardware-software integration robustness",
								"IEEE domain engineering standard compliance"
							]
						},
						{
							code: "CRIT / 03",
							weight: "25%",
							title: "Execution & Feasibility",
							tag: "PROTOTYPE MATURITY & ROADMAP",
							desc: "Current prototype maturity, speed of iteration, unit economics, and bill-of-materials (BOM) cost realism in low-resource environments alongside realistic 12-week deployment milestones.",
							metrics: [
								"Working prototype / tangible MVP evidence",
								"Low-resource deployment economics & BOM",
								"Deliverable 12-week milestone sprint plan"
							]
						},
						{
							code: "CRIT / 04",
							weight: "20%",
							title: "Founder Commitment",
							tag: "TEAM DYNAMICS & COACHABILITY",
							desc: "Complementary technical domain expertise, coachability with venture mentors, long-term grit, and multidisciplinary alignment to scale the venture continuously past AICSSYC demo day.",
							metrics: [
								"Multidisciplinary technical capability",
								"Mentor receptiveness & rapid execution",
								"Full dedication to venture commercialization"
							]
						}
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#FAF9F5] border border-[#E5E2DA] p-6 flex flex-col justify-between hover:border-[#002855] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[#E5E2DA]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mono text-xs font-bold text-[#9E2A2B]",
									children: c.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mono text-xs font-bold bg-[#002855] text-white px-2.5 py-0.5",
									children: c.weight
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl text-[#002855] font-normal mb-1",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] font-bold text-[#57534E] uppercase tracking-wider mb-3",
								children: c.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#57534E] leading-relaxed mb-6 font-sans",
								children: c.desc
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-[10px] font-bold text-[#002855] uppercase tracking-wider mb-2 border-t border-[#E5E2DA] pt-3",
							children: "Assessment Benchmarks:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5 mono text-[11px] text-[#57534E]",
							children: c.metrics.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-1.5 leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#9E2A2B] font-bold",
									children: "✓"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m })]
							}, idx))
						})] })]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#FAF9F5] border border-[#E5E2DA] p-6 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mono text-xs font-bold text-[#002855] mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SCORING COMPOSITION LEDGER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WEIGHT DISTRIBUTION (100%)" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-4 w-full bg-[#E5E2DA] flex overflow-hidden border border-[#E5E2DA]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-[#002855] h-full text-[9px] text-white mono font-bold flex items-center justify-center",
									style: { width: "30%" },
									children: "30%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-[#003B7A] h-full text-[9px] text-white mono font-bold flex items-center justify-center border-l border-white/20",
									style: { width: "25%" },
									children: "25%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-[#9E2A2B] h-full text-[9px] text-white mono font-bold flex items-center justify-center border-l border-white/20",
									style: { width: "25%" },
									children: "25%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-[#BF3A3C] h-full text-[9px] text-white mono font-bold flex items-center justify-center border-l border-white/20",
									style: { width: "20%" },
									children: "20%"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 mono text-[10px] text-[#57534E]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 bg-[#002855] inline-block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Problem Depth (30%)" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 bg-[#003B7A] inline-block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Technical Defensibility (25%)" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 bg-[#9E2A2B] inline-block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Execution & Feasibility (25%)" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 bg-[#BF3A3C] inline-block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Founder Commitment (20%)" })]
								})
							]
						})
					]
				})
			]
		})
	});
}
function VenturePartnersSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "partners",
		className: "py-16 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mono text-xs font-bold text-[#57534E] uppercase tracking-widest text-center mb-8",
				children: "SECTION / 12 // INSTITUTIONAL & CAPITAL PARTNERS"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",
				children: [
					"IEEE·CS",
					"NEXORA VC",
					"ATLASLABS",
					"QUANTUM FOUNDRY",
					"NORTHWIND"
				].map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-5 border border-[#E5E2DA] bg-[#FFFFFF] text-center font-bold text-xs sm:text-sm tracking-wider text-[#002855] mono flex items-center justify-center min-h-[70px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
					children: p
				}, idx))
			})]
		})
	});
}
function GovernanceCharterSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "governance",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 13 // GOVERNANCE & FOUNDER IP CHARTER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal mb-4",
					children: "Governance & Founder IP Charter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs sm:text-sm text-[#57534E] max-w-3xl mb-12 leading-relaxed",
					children: "The IEEE Computer Society Global Incubation Committee operates under a strict founder-first charter designed to foster ethical engineering without predatory venture terms."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",
					children: [
						{
							icon: ShieldCheck,
							badge: "0% EQUITY DILUTION",
							title: "Zero Equity & Zero Governance Warrants",
							desc: "GIC operates as an institutional philanthropic incubator under IEEE Computer Society. We take 0% equity, 0% SAFE notes, 0% warrant rights, and zero governance board seats. The cap table remains 100% under founder sovereignty."
						},
						{
							icon: FileCheck,
							badge: "100% FOUNDER IP",
							title: "100% Founder-Retained Intellectual Property",
							desc: "Founders, student creators, and researchers retain 100% unconditional ownership of all source code, patents, CAD schematics, and algorithms. No co-licensing, assignment covenants, or exclusivity restrictions are ever imposed."
						},
						{
							icon: Coins,
							badge: "NON-DILUTIVE GRANTS",
							title: "Milestone-Based Grant Disbursement",
							desc: "Prize capital up to ₹2,00,000 / $2,500 and travel stipends are awarded as pure non-dilutive grants. Capital is disbursed directly against verified technical milestones with zero clawback clauses or debt conversion terms."
						},
						{
							icon: Award,
							badge: "INSTITUTIONAL INTEGRITY",
							title: "IEEE Code of Ethics & Unbiased Audit",
							desc: "All jury assessments, mentor introductions, and corporate partnerships are governed by the IEEE Code of Ethics and AICSSYC steering committee protocols, ensuring meritocratic, unbiased review without commercial conflicts of interest."
						}
					].map((clause, idx) => {
						const Icon = clause.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#FAF9F5] border border-[#E5E2DA] p-6 sm:p-8 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-24 h-24 bg-[#002855]/[0.02] rounded-bl-full pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3 mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-10 w-10 bg-[#002855] text-white flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mono text-[10px] font-bold text-[#9E2A2B] bg-[#FFFFFF] border border-[#E5E2DA] px-2.5 py-1 uppercase",
											children: clause.badge
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl text-[#002855] font-normal mb-3",
										children: clause.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans",
										children: clause.desc
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 pt-4 border-t border-[#E5E2DA] mono text-[11px] text-[#002855] font-semibold flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["CHARTER ARTICLE 13.0", idx + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#9E2A2B]",
										children: "RATIFIED 2026"
									})]
								})
							]
						}, idx);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-[#FAF9F5] border-2 border-[#002855] p-8 sm:p-10 relative shadow-[0_4px_16px_rgba(0,40,85,0.06)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-[10px] font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
									children: "// INSTITUTIONAL COVENANT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl sm:text-3xl text-[#002855] mb-3 font-normal",
									children: "Our Non-Dilutive Pledge to Engineering Founders"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-[#57534E] leading-relaxed",
									children: "\"We believe foundational breakthrough innovations addressing the world's most difficult problems should not be constrained by short-term predatory dilution. GIC exists solely to empower founders with grant capital, elite IEEE technical networks, and institutional credibility.\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap items-center gap-4 mono text-[11px] text-[#002855] font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "• 0% EQUITY GUARANTEE" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "• 100% IP RETENTION" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "• NON-DILUTIVE DISBURSEMENTS" })
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#FFFFFF] border border-[#E5E2DA] text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstitutionalAccreditationSeal, { size: "md" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-[10px] text-[#002855] font-bold mt-3",
									children: "IEEE COMPUTER SOCIETY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-[9px] text-[#57534E]",
									children: "SECRETARIAT CHARTER № 2026-GIC"
								})
							]
						})]
					})
				})
			]
		})
	});
}
function FaqAccordionSection({ openIndex, setOpenIndex }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-20 border-b border-[#E5E2DA] bg-[#F9F8F5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
					children: "SECTION / 14 // FREQUENTLY ASKED QUESTIONS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-normal text-[#002855]",
					children: "Programme Inquiries"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [
					{
						q: "Who can apply to GIC?",
						a: "Early-stage founders, student entrepreneurs, researchers, and small teams from anywhere in the world with a technology-driven idea, prototype, or product."
					},
					{
						q: "Is there any equity or fee involved?",
						a: "Free to apply with 0% equity taken. All accepted ventures retain 100% intellectual property ownership."
					},
					{
						q: "What does the incubation include?",
						a: "Structured support from prototype to startup, including 1:1 mentorship, investor readiness, technical consultation across hardware and software, travel allowance for the top 10 teams, and prize money up to ₹2,00,000 / $2,500."
					},
					{
						q: "Where will the pitching event take place?",
						a: "AICSSYC 2026 from October 8–11, 2026, featuring a live expert panel and global broadcast."
					},
					{
						q: "Can international teams participate?",
						a: "Yes, applicants worldwide are welcome to apply."
					}
				].map((faq, i) => {
					const isOpen = openIndex === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-[#E5E2DA] bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpenIndex(isOpen ? null : i),
							className: "w-full flex items-center justify-between p-5 text-left font-bold text-sm text-[#002855] hover:bg-[#F9F8F5] transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mono text-xs font-bold text-[#9E2A2B]",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans font-bold",
									children: faq.q
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-6 w-6 border border-[#E5E2DA] flex items-center justify-center text-xs font-mono shrink-0",
								children: isOpen ? "−" : "+"
							})]
						}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-5 pt-0 text-xs text-[#57534E] leading-relaxed border-t border-[#E5E2DA] bg-[#FAF9F6]",
							children: faq.a
						})]
					}, i);
				})
			})]
		})
	});
}
function DossierIntakeSection() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "dossier",
		className: "py-20 border-b border-[#E5E2DA] bg-[#FFFFFF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-[#002855] bg-[#F9F8F5] p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,40,85,0.06)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-[#E5E2DA] pb-6 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-xs font-bold text-[#9E2A2B] uppercase tracking-widest mb-2",
							children: "FORMAL INTAKE DOSSIER // COHORT 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl sm:text-4xl text-[#002855] font-normal",
							children: "Submit Venture Application"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs sm:text-sm text-[#57534E]",
							children: "Complete the preliminary technical intake dossier for review by the IEEE CS Venture Secretariat."
						})
					]
				}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-12 text-center bg-[#FFFFFF] border border-[#E5E2DA] p-8 box-embossed-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-12 w-12 text-[#002855] mx-auto mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl text-[#002855] mb-2 font-normal",
							children: "Dossier Registered"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-[#57534E] max-w-md mx-auto leading-relaxed",
							children: [
								"Your application dossier has been submitted to the IEEE CS Secretariat. Reference number: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["GIC-2026-INTK-", Math.floor(1e3 + Math.random() * 9e3)] }),
								". A formal receipt has been generated."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSubmitted(false),
							className: "mt-6 text-xs mono text-[#9E2A2B] underline",
							children: "Submit secondary intake dossier"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitted(true);
					},
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block mono text-xs font-bold text-[#002855] uppercase mb-2",
								children: "Primary Applicant Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								placeholder: "e.g. Dr. Alex Mercer",
								className: "w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block mono text-xs font-bold text-[#002855] uppercase mb-2",
								children: "Institutional / Corporate Email *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								placeholder: "name@institution.edu or founder@company.io",
								className: "w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block mono text-xs font-bold text-[#002855] uppercase mb-2",
								children: "Enterprise / Research Entity Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								placeholder: "e.g. QuantumGrid Systems Labs",
								className: "w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block mono text-xs font-bold text-[#002855] uppercase mb-2",
								children: "Technical Repository / Paper Link"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "url",
								placeholder: "https://github.com/... or paper URL",
								className: "w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block mono text-xs font-bold text-[#002855] uppercase mb-2",
							children: "Executive Abstract & Technical Problem Statement *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 4,
							placeholder: "Outline your systems architecture, defensible IP, and target population impact...",
							className: "w-full bg-[#FFFFFF] border border-[#E5E2DA] px-4 py-3 text-xs text-[#1C1917] focus:border-[#002855] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-tactile-primary w-full bg-[#002855] text-white hover:bg-[#001D40] px-6 py-4 text-xs font-bold uppercase tracking-wider border border-[#001A38] active:translate-y-0.5 transition-all",
							children: "Submit Intake Dossier to Secretariat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center text-[11px] mono text-[#57534E]",
							children: "No Intake Fee • IEEE Membership Not Mandatory for Preliminary Stage 1 Audit"
						})
					]
				})]
			})
		})
	});
}
function Footer({ scrollToSection }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "footer",
		className: "bg-[#002855] text-[#E5E2DA] text-xs py-12 border-t border-[#001A38]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 items-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoIcon, { size: "sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-sans font-extrabold text-sm text-white uppercase tracking-tight",
								children: "GIC // IEEE·CS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] text-[#E5E2DA]/70 uppercase font-semibold",
								children: "Global Incubation Committee"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mono text-[11px] text-[#E5E2DA]/80 leading-relaxed mb-4",
							children: "INNOVATING IDEAS / EMPOWERING ENTREPRENEURS / CREATING GLOBAL IMPACT."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstitutionalAccreditationSeal, { size: "sm" })
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono font-bold text-white uppercase mb-3",
						children: "EXPLORE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("tracks"),
								className: "hover:underline",
								children: "Tracks"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("tiers"),
								className: "hover:underline",
								children: "Tiers & Calculator"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("sprint"),
								className: "hover:underline",
								children: "12-Week Sprint"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("about"),
								className: "hover:underline",
								children: "About & Dual Gaps"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("principles"),
								className: "hover:underline",
								children: "Principles"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("journey"),
								className: "hover:underline",
								children: "Journey"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("offerings"),
								className: "hover:underline",
								children: "Offerings"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono font-bold text-white uppercase mb-3",
						children: "PROGRAMME"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("dossier"),
								className: "hover:underline",
								children: "Apply / Intake Dossier"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("pitch-process"),
								className: "hover:underline",
								children: "Pitch Process (Sec 08)"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("evaluation"),
								className: "hover:underline",
								children: "Scoring Matrix (Sec 11)"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("governance"),
								className: "hover:underline",
								children: "Governance Charter (Sec 13)"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("mentors"),
								className: "hover:underline",
								children: "Mentors & Advisors"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("partners"),
								className: "hover:underline",
								children: "Institutional Partners"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollToSection("faq"),
								className: "hover:underline",
								children: "Programme FAQ"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono font-bold text-white uppercase mb-3",
						children: "INSTITUTIONAL GOVERNANCE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 text-xs text-[#E5E2DA]/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => scrollToSection("governance"),
								className: "hover:underline text-left flex items-center gap-1.5 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3 w-3 text-[#9E2A2B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IP & Governance Protocol" })]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.ieee.org/security-privacy.html",
								target: "_blank",
								rel: "noreferrer",
								className: "hover:underline flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IEEE Privacy Policy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3 text-[#E5E2DA]/60" })]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.ieee.org/about/corporate/governance/p7-8.html",
								target: "_blank",
								rel: "noreferrer",
								className: "hover:underline flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IEEE Code of Ethics" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3 text-[#E5E2DA]/60" })]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:gic@aicssyc2026.org",
								className: "hover:underline flex items-center gap-1.5 text-[#E5E2DA]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3 text-[#9E2A2B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Secretariat Desk: gic@aicssyc2026.org" })]
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-6 border-t border-[#001D40] flex flex-col sm:flex-row items-center justify-between gap-4 mono text-[11px] text-[#E5E2DA]/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "© 2026 GIC · IEEE COMPUTER SOCIETY. ALL RIGHTS RESERVED." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollToSection("governance"),
							className: "hover:underline text-[#FAF9F5] font-semibold",
							children: "IP & GOVERNANCE PROTOCOL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.ieee.org/security-privacy.html",
							target: "_blank",
							rel: "noreferrer",
							className: "hover:underline",
							children: "IEEE PRIVACY POLICY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.ieee.org/about/corporate/governance/p7-8.html",
							target: "_blank",
							rel: "noreferrer",
							className: "hover:underline",
							children: "IEEE CODE OF ETHICS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:gic@aicssyc2026.org",
							className: "hover:underline text-[#FAF9F5] font-semibold",
							children: "SECRETARIAT DESK"
						})
					]
				})]
			})]
		})
	});
}
function DossierModal({ onClose }) {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002855]/60 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-[#F9F8F5] border border-[#002855] p-6 sm:p-8 max-w-lg w-full relative shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "absolute top-4 right-4 text-[#57534E] hover:text-[#002855]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-[#002855] mx-auto mb-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-xl font-bold text-[#002855] mb-2 font-normal",
						children: "Dossier Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#57534E]",
						children: "Your intake registration has been recorded under the IEEE CS Secretariat."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "btn-tactile-primary mt-6 w-full bg-[#002855] text-white py-2.5 text-xs font-bold uppercase active:translate-y-0.5",
						children: "Close Ledger Window"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs font-bold text-[#9E2A2B] uppercase mb-1",
					children: "FAST-TRACK DOSSIER INTAKE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-sans font-bold text-xl text-[#002855] mb-1",
					children: "Apply to Pitch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[#57534E] mb-6",
					children: "IEEE CS GIC Cohort 2026 • AICSSYC Oct 8–11"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitted(true);
					},
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block mono text-[11px] font-bold text-[#002855] uppercase mb-1",
							children: "Applicant Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "Full Name",
							className: "w-full bg-[#FFFFFF] border border-[#E5E2DA] px-3 py-2 text-xs text-[#1C1917] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block mono text-[11px] font-bold text-[#002855] uppercase mb-1",
							children: "Email Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "applicant@institution.org",
							className: "w-full bg-[#FFFFFF] border border-[#E5E2DA] px-3 py-2 text-xs text-[#1C1917] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block mono text-[11px] font-bold text-[#002855] uppercase mb-1",
							children: "Entity / Project Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "Project Name",
							className: "w-full bg-[#FFFFFF] border border-[#E5E2DA] px-3 py-2 text-xs text-[#1C1917] focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-tactile-primary w-full bg-[#002855] text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#001D40] active:translate-y-0.5 transition-all",
							children: "Submit Fast-Track Dossier"
						})
					]
				})
			] })]
		})
	});
}
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
