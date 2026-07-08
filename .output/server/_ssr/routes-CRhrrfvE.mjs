import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as ArrowUpRight, C as Earth, D as Briefcase, E as Calendar, O as BadgeCheck, S as FlaskConical, T as CircleCheck, _ as Linkedin, a as TrendingUp, b as Handshake, c as ShieldCheck, d as Plus, f as Network, g as Mail, h as MapPin, i as Twitter, j as ArrowRight, k as Asterisk, l as Scale, m as Menu, n as Wallet, o as Target, p as Minus, r as Users, s as Sparkles, t as X, u as Rocket, v as Lightbulb, w as Cpu, x as Github, y as Layers } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRhrrfvE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var variants = {
	hidden: {
		opacity: 0,
		y: 28
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.16,
				1,
				.3,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "0px 0px -10% 0px"
		},
		variants,
		transition: { delay },
		children
	});
}
var links = [
	{
		href: "#about",
		label: "01 · About"
	},
	{
		href: "#principles",
		label: "02 · Principles"
	},
	{
		href: "#offerings",
		label: "03 · Offerings"
	},
	{
		href: "#journey",
		label: "04 · Journey"
	},
	{
		href: "#launch",
		label: "05 · Launch"
	},
	{
		href: "#apply",
		label: "06 · Apply"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 border-b-2 border-ink bg-paper transition-shadow ${scrolled ? "shadow-[0_4px_0_0_var(--ink)]" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center border-2 border-ink bg-ink text-paper mono text-sm font-bold",
						children: "G/"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm",
							children: "GIC"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "IEEE·CS / est. 2026"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 xl:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "mono px-3 py-2 text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-2 xl:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#apply",
						className: "brut-border brut-shadow brut-hover mono inline-flex items-center gap-2 bg-brick px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-paper",
						children: "Apply → Pitch"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "brut-border p-2 xl:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t-2 border-ink bg-paper xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1400px] flex-col px-4 py-3 sm:px-6",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "mono border-b border-ink/20 py-3 text-xs uppercase tracking-widest last:border-0",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#apply",
					onClick: () => setOpen(false),
					className: "brut-border mono mt-3 bg-brick px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-paper",
					children: "Apply → Pitch"
				})]
			})
		})]
	});
}
var TARGET = (/* @__PURE__ */ new Date("2026-10-08T09:00:00Z")).getTime();
function diff() {
	const ms = Math.max(0, TARGET - Date.now());
	return {
		d: Math.floor(ms / 864e5),
		h: Math.floor(ms / 36e5 % 24),
		m: Math.floor(ms / 6e4 % 60),
		s: Math.floor(ms / 1e3 % 60)
	};
}
function Digit({ value }) {
	const str = String(value).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative flex items-center justify-center overflow-hidden py-3 h-[64px] sm:h-[72px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "popLayout",
			initial: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					y: "-100%",
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				exit: {
					y: "100%",
					opacity: 0
				},
				transition: {
					duration: .35,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "font-display text-3xl tabular-nums text-ink sm:text-4xl",
				children: str
			}, str)
		})
	});
}
function Countdown() {
	const [t, setT] = (0, import_react.useState)({
		d: 0,
		h: 0,
		m: 0,
		s: 0
	});
	(0, import_react.useEffect)(() => {
		setT(diff());
		const id = setInterval(() => setT(diff()), 1e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2 sm:gap-3",
		children: [
			["DAYS", t.d],
			["HRS", t.h],
			["MIN", t.m],
			["SEC", t.s]
		].map(([label, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			whileHover: { y: -3 },
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20
			},
			className: "brut-border bg-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b-2 border-ink bg-ink py-1 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mono text-[10px] font-bold uppercase tracking-widest text-paper",
					children: label
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Digit, { value: v })]
		}, label))
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Principles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Offerings, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoCanApply, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyJoin, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Launch, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apply, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mentors, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partners, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function TopStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b-2 border-ink bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-1.5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mono flex min-w-0 items-center gap-2 text-[9px] uppercase tracking-widest text-paper sm:text-[10px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 shrink-0 bg-mustard animate-blink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: "Live · GIC / IEEE Computer Society"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono hidden text-[10px] uppercase tracking-widest text-paper/60 lg:block",
					children: "Inaugural Launch · AICSSYC 2026 · Oct 8 – 11 · Applications Open Soon"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-[9px] uppercase tracking-widest text-paper/60 sm:text-[10px]",
					children: "v1.0 / 2026"
				})
			]
		})
	});
}
function AnimatedHeading() {
	const lines = [
		"Global",
		"Incubation",
		"Centre"
	];
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setTick((t) => t + 1), 5500);
		return () => clearInterval(id);
	}, []);
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: .12,
				delayChildren: .05
			}
		}
	};
	const word = {
		hidden: {
			y: "110%",
			rotate: 4
		},
		visible: {
			y: 0,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 90,
				damping: 12,
				mass: .8
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "mt-6 font-display text-[15vw] leading-[0.88] xs:text-[13vw] sm:mt-8 sm:text-[11vw] md:text-[7vw] lg:text-[6.2vw] xl:text-[5.6vw] 2xl:text-[80px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
			className: "block overflow-hidden",
			variants: container,
			initial: "hidden",
			animate: "visible",
			children: [lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: `block ${line === "Centre" ? "relative inline-block" : ""}`,
					variants: word,
					children: line === "Centre" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10 px-3 text-paper",
						children: "Centre"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-0 z-0 bg-brick",
						"aria-hidden": true
					})] }) : line
				})
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "relative top-2 ml-2 inline-block text-brick",
				variants: {
					hidden: {
						scale: 0,
						rotate: -180
					},
					visible: {
						scale: 1,
						rotate: 0,
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 10,
							delay: .5
						}
					}
				},
				children: "."
			})]
		}, tick)
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b-2 border-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute right-[5%] top-20 hidden animate-float lg:right-[26%] lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid h-24 w-24 place-items-center brut-border bg-mustard animate-wobble lg:h-28 lg:w-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "animate-spin-slow font-display text-xs uppercase tracking-[0.2em]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 100 100",
							className: "h-20 w-20 lg:h-24 lg:w-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								id: "c",
								d: "M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								className: "mono",
								fontSize: "10.5",
								letterSpacing: "2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
									href: "#c",
									children: "AICSSYC · 2026 · OCT 8 – 11 · GIC · LAUNCH · "
								})
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, { className: "absolute h-5 w-5 lg:h-6 lg:w-6" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] grid-cols-12 gap-0 px-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "relative col-span-12 hidden border-r-2 border-ink px-2 py-8 md:col-span-1 md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono sticky top-32 origin-top-left rotate-180 text-[10px] uppercase tracking-[0.3em] text-ink [writing-mode:vertical-rl]",
							children: "IEEE·CS / Global Incubation Centre / File №001"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 border-b-2 border-ink px-4 pb-10 pt-12 sm:px-8 sm:pt-16 md:col-span-8 md:border-b-0 md:border-r-2 md:pt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mono flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest sm:gap-3 sm:text-[11px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "brut-border bg-mustard px-2 py-1",
										children: "№ 001"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Global Incubation Centre" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "/ IEEE Computer Society"
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedHeading, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .16,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mono mt-8 max-w-2xl border-l-4 border-ink pl-4 text-[11px] uppercase tracking-widest sm:mt-10 sm:text-sm",
									children: "Innovating Ideas / Empowering Entrepreneurs / Creating Global Impact"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .22,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#apply",
										className: "brut-border brut-shadow brut-hover mono inline-flex items-center gap-2 bg-ink px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-paper sm:px-6 sm:py-4",
										children: ["Apply to Pitch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#about",
										className: "brut-border brut-hover mono inline-flex items-center gap-2 bg-paper px-5 py-3.5 text-xs font-bold uppercase tracking-widest sm:px-6 sm:py-4",
										children: ["Explore GIC ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid max-w-sm grid-cols-3 border-2 border-ink sm:max-w-2xl sm:mt-14",
									children: [
										["50+", "Mentors"],
										["30+", "Partners"],
										["∞", "Ambition"]
									].map(([n, l], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `px-3 py-4 sm:px-4 sm:py-5 ${i < 2 ? "border-r-2 border-ink" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl sm:text-2xl md:text-4xl",
											children: n
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono mt-1 text-[8px] uppercase tracking-widest text-muted-foreground sm:text-[9px] md:text-[10px]",
											children: l
										})]
									}, l))
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 flex flex-col border-t-2 border-ink md:col-span-3 md:border-t-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b-2 border-ink bg-ink px-4 py-3 sm:px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mono text-[10px] uppercase tracking-widest text-paper",
									children: "Index / Contents"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "flex-1",
								children: [
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
									"Contact"
								].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "mono flex items-center justify-between gap-3 border-b border-ink/30 px-4 py-2.5 text-[10px] uppercase tracking-widest last:border-0 sm:px-6 sm:py-3 sm:text-[11px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: String(i + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex-1",
											children: t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "→"
										})
									]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t-2 border-ink bg-mustard px-4 py-3 sm:px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mono flex items-center justify-between text-[10px] uppercase tracking-widest",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-brick animate-blink" }), " Applications Open"]
									})]
								})
							})
						]
					})
				]
			})
		]
	});
}
function Marquee() {
	const words = [
		"Innovate",
		"Incubate",
		"Iterate",
		"Ideate",
		"Invest",
		"Impact",
		"Ignite",
		"Inspire"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-b-2 border-ink bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max animate-marquee gap-8 py-4",
			children: [
				...words,
				...words,
				...words
			].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mono flex items-center gap-8 text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-xl uppercase tracking-tight sm:text-2xl",
					children: [w, "."]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, { className: "h-4 w-4 text-mustard animate-spin-slow" })]
			}, i))
		})
	});
}
function About() {
	const objectives = [
		["Foster Innovation", "Encourage the development of innovative products, technologies, and solutions addressing real-world challenges."],
		["Support Entrepreneurs", "Provide structured mentorship, technical guidance, and training to help founders build sustainable ventures."],
		["Accelerate Startup Growth", "Incubation programs from idea validation through product development, market readiness, and scaling."],
		["Bridge Academia & Industry", "Facilitate collaboration among universities, researchers, corporations, and startups."],
		["Enable Global Collaboration", "International partnerships giving startups access to global markets, expertise, and opportunities."],
		["Promote Commercialization", "Transform academic research and technological innovations into commercially viable products."],
		["Connect with Investors", "Engage with investors, VC firms, angel networks, and strategic partners."],
		["Build a Sustainable Ecosystem", "Cultivate innovation, collaboration, ethics, and long-term impact across the founder journey."]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "about",
		number: "01",
		eyebrow: "About / File №001",
		title: "Where transformative ideas become global ventures.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-12 gap-4 lg:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "col-span-12 lg:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "brut-border bg-paper p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed sm:text-xl",
							children: [
								"The ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Global Incubation Centre (GIC)" }),
								" is an initiative of the",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "IEEE Computer Society" }),
								", established to nurture the next generation of innovators, entrepreneurs, researchers, and technology leaders. It serves as a collaborative ecosystem where transformative ideas evolve into scalable products and globally competitive ventures."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Whether you are a student with a breakthrough concept, a researcher developing cutting-edge technology, or an entrepreneur building the next disruptive startup — GIC provides the platform to accelerate your journey."
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .08,
					className: "col-span-12 lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid h-full grid-rows-2 gap-4 lg:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Founded",
							value: "2026",
							note: "Under IEEE·CS charter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Scope",
							value: "Global",
							note: "Remote-first, borderless",
							accent: true
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-12 gap-4 lg:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "col-span-12 md:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigCard, {
						tag: "Vision",
						icon: Target,
						accent: "cobalt",
						children: "To become a globally recognized incubation ecosystem that empowers innovators to develop transformative technologies, build sustainable enterprises, and create meaningful societal impact."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .08,
					className: "col-span-12 md:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigCard, {
						tag: "Mission",
						icon: Rocket,
						accent: "brick",
						children: "Foster innovation-driven entrepreneurship, support early-stage startups through structured incubation, connect innovators with mentors, industry experts, investors, and academic leaders — and accelerate the commercialization of research and emerging technologies."
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 border-t-2 border-ink pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mono mb-6 flex items-center gap-3 text-[11px] uppercase tracking-widest",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brut-border bg-ink px-2 py-1 text-paper",
							children: "Objectives"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-ink" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "01 → 08"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-0 border-2 border-ink sm:grid-cols-2 lg:grid-cols-4",
					children: objectives.map(([t, d], i) => {
						const isLastCol_lg = (i + 1) % 4 === 0;
						const isLastCol_sm = i % 2 !== 0;
						const isLastRow_lg = i >= 4;
						const isLastRow_sm = i >= 6;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 4 * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: [
									"h-full p-5 sm:p-6",
									!isLastCol_sm ? "border-b-2 border-ink sm:border-b-0 sm:border-r-2" : "border-b-2 border-ink",
									!isLastCol_lg ? "lg:border-r-2" : "lg:border-r-0",
									!isLastRow_sm ? "sm:border-b-2" : "sm:border-b-0",
									!isLastRow_lg ? "lg:border-b-2" : "lg:border-b-0",
									i === objectives.length - 1 ? "border-b-0" : ""
								].join(" "),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mono text-[10px] uppercase tracking-widest text-brick",
										children: ["Obj / ", String(i + 1).padStart(2, "0")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-base sm:text-lg",
										children: t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: d
									})
								]
							})
						}, t);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 brut-border bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b-2 border-ink bg-ink px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mono text-[10px] uppercase tracking-widest text-paper",
						children: "Timeline / 2025 → 2026"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mono text-[10px] uppercase tracking-widest text-paper/60",
						children: "04 milestones"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-4",
					children: [
						[
							"Q4·2025",
							"Concept & Charter",
							"Framework ratified under IEEE·CS."
						],
						[
							"Q1·2026",
							"Mentor Onboarding",
							"Global advisory panel confirmed."
						],
						[
							"Q2·2026",
							"Applications Open",
							"Startups worldwide invited to apply."
						],
						[
							"AICSSYC·2026",
							"Official Launch",
							"Inaugural cohort unveiled."
						]
					].map(([w, t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `h-full p-5 sm:p-6 ${i < 3 ? "border-b-2 border-ink md:border-b-0 md:border-r-2" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-[10px] uppercase tracking-widest text-brick",
									children: w
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 font-display text-lg",
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm text-muted-foreground",
									children: d
								})
							]
						})
					}, i))
				})]
			})
		]
	});
}
function Principles() {
	const items = [
		{
			icon: Lightbulb,
			t: "Innovation First",
			d: "Every transformative venture begins with bold ideas supported by rigorous innovation."
		},
		{
			icon: Rocket,
			t: "Entrepreneur-Centric",
			d: "Our programs are designed around the needs, aspirations, and growth of founders."
		},
		{
			icon: Earth,
			t: "Global Perspective",
			d: "Innovation transcends borders. We encourage international collaboration and market access."
		},
		{
			icon: Handshake,
			t: "Collaboration > Competition",
			d: "Meaningful innovation flourishes through multidisciplinary collaboration and shared expertise."
		},
		{
			icon: ShieldCheck,
			t: "Integrity & Ethics",
			d: "Guided by transparency, fairness, accountability, and ethical technology development."
		},
		{
			icon: Users,
			t: "Inclusivity",
			d: "Innovators from diverse backgrounds and disciplines — equal opportunities for all."
		},
		{
			icon: Sparkles,
			t: "Continuous Learning",
			d: "Entrepreneurship is a journey of lifelong learning, adaptation, and resilience."
		},
		{
			icon: TrendingUp,
			t: "Sustainable Impact",
			d: "Ventures that create lasting economic, technological, environmental, and societal value."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "principles",
		number: "02",
		eyebrow: "Core Principles",
		title: "The rules of the house.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 border-2 border-ink sm:grid-cols-2 lg:grid-cols-4",
			children: items.map((it, i) => {
				const isLastCol_lg = (i + 1) % 4 === 0;
				const isLastCol_sm = i % 2 !== 0;
				const isLastRow_lg = i >= 4;
				const isLastRow_sm = i >= 6;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: [
							"group relative h-full bg-paper p-6 transition-colors hover:bg-mustard",
							!isLastCol_sm ? "border-b-2 border-ink sm:border-b-0 sm:border-r-2" : "border-b-2 border-ink",
							!isLastCol_lg ? "lg:border-r-2" : "lg:border-r-0",
							!isLastRow_sm ? "sm:border-b-2" : "sm:border-b-0",
							!isLastRow_lg ? "lg:border-b-2" : "lg:border-b-0",
							i === items.length - 1 ? "border-b-0" : ""
						].join(" "),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mono text-[10px] uppercase tracking-widest text-brick",
								children: ["Rule / ", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid h-10 w-10 place-items-center border-2 border-ink bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 font-display text-lg",
								children: it.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: it.d
							})
						]
					})
				}, it.t);
			})
		})
	});
}
function Offerings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "offerings",
		number: "03",
		eyebrow: "What GIC Offers",
		title: "A full stack for the modern founder.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: [
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
				"International Collaboration"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * .03,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brut-border brut-hover flex items-center gap-4 bg-paper p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono grid h-10 w-10 shrink-0 place-items-center border-2 border-ink bg-ink text-paper text-xs",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-sm sm:text-base",
								children: t
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-auto h-4 w-4 shrink-0 text-muted-foreground" })
					]
				})
			}, t))
		})
	});
}
function WhoCanApply() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "who",
		number: "04",
		eyebrow: "Who Can Apply",
		title: "Built for every kind of builder.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
			children: [
				{
					icon: Users,
					t: "Students"
				},
				{
					icon: Rocket,
					t: "Tech Entrepreneurs"
				},
				{
					icon: FlaskConical,
					t: "Researchers"
				},
				{
					icon: Sparkles,
					t: "Social Innovators"
				},
				{
					icon: BadgeCheck,
					t: "Faculty Members"
				},
				{
					icon: Cpu,
					t: "Deep-Tech Founders"
				},
				{
					icon: Briefcase,
					t: "Early-Stage Startups"
				},
				{
					icon: Network,
					t: "AI & Emerging Tech"
				},
				{
					icon: Lightbulb,
					t: "Individual Innovators"
				}
			].map((it, i) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `brut-border brut-hover flex flex-col justify-between gap-6 p-5 sm:p-6 ${[
							"bg-paper",
							"bg-mustard",
							"bg-paper",
							"bg-paper",
							"bg-brick text-paper",
							"bg-paper",
							"bg-mustard",
							"bg-paper",
							"bg-paper"
						][i]}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mono text-[10px] uppercase tracking-widest opacity-70",
							children: ["Applicant / ", String(i + 1).padStart(2, "0")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
							className: "h-6 w-6",
							strokeWidth: 2.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-display text-lg sm:text-xl",
							children: it.t
						})] })]
					})
				}, it.t);
			})
		})
	});
}
function WhyJoin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "why",
		number: "05",
		eyebrow: "Why Join GIC",
		title: "Eight reasons founders choose us.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "brut-border divide-y-2 divide-ink bg-paper",
			children: [
				{
					t: "Build with Experienced Mentors",
					d: "Learn directly from founders, operators, and IEEE leaders who've done it before."
				},
				{
					t: "Validate with Industry Experts",
					d: "Test ideas and products with domain specialists across sectors."
				},
				{
					t: "Access Strategic Partnerships",
					d: "Plug into universities, corporations, and IEEE ecosystem partners."
				},
				{
					t: "Strengthen Tech Capabilities",
					d: "Deepen engineering, architecture, and R&D through expert consultation."
				},
				{
					t: "Connect with Investors",
					d: "Curated introductions to VCs, angels, and corporate funds."
				},
				{
					t: "Accelerate Product Development",
					d: "Move from prototype to MVP to market with structured milestones."
				},
				{
					t: "Gain Global Visibility",
					d: "Showcase at national and international IEEE platforms and demo days."
				},
				{
					t: "Join an Innovation Community",
					d: "A thriving, borderless network of technology founders."
				}
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 8 * .03,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group p-5 transition-colors hover:bg-ink hover:text-paper sm:p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono shrink-0 text-xs uppercase tracking-widest",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg sm:text-2xl",
									children: it.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-paper/70 sm:mt-0 sm:hidden",
									children: it.d
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden text-sm leading-relaxed text-muted-foreground group-hover:text-paper/70 sm:block sm:max-w-[280px] sm:shrink-0 md:max-w-xs lg:max-w-sm",
								children: it.d
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "hidden h-5 w-5 shrink-0 sm:block" })
						]
					})
				})
			}, it.t))
		})
	});
}
function Journey() {
	const stages = [
		{
			title: "Idea",
			note: "Concept & problem definition",
			icon: Lightbulb
		},
		{
			title: "Validation",
			note: "Market research & user interviews",
			icon: Target
		},
		{
			title: "Prototype",
			note: "Build & test early solution",
			icon: FlaskConical
		},
		{
			title: "MVP",
			note: "Minimum viable product launch",
			icon: Rocket
		},
		{
			title: "Mentorship",
			note: "Guidance from domain experts",
			icon: Users
		},
		{
			title: "Market Entry",
			note: "Pilot customers & GTM",
			icon: TrendingUp
		},
		{
			title: "Investment",
			note: "Funding & investor connect",
			icon: Wallet
		},
		{
			title: "Global Expansion",
			note: "Scale across borders",
			icon: Earth
		}
	];
	const containerRef = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	const viewportRef = (0, import_react.useRef)(null);
	const [distance, setDistance] = (0, import_react.useState)(0);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		id: "journey",
		className: "relative h-[240vh] border-b-2 border-ink sm:h-[280vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 flex h-screen flex-col overflow-hidden bg-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-4 px-4 pt-12 sm:px-6 sm:pt-16 md:pt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "Section / 06"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "brut-border bg-mustard px-2 py-1",
								children: "Incubation Journey"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 md:col-span-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl leading-[0.95] sm:text-3xl lg:text-5xl",
							children: "A structured pathway, from spark to global scale."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mono mt-3 max-w-3xl border-l-4 border-ink pl-4 text-[11px] uppercase tracking-widest sm:text-xs md:mt-4",
							children: "Every startup follows a structured pathway supported by domain experts, industry mentors, researchers, and strategic partners."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: viewportRef,
					className: "relative mt-5 flex-1 overflow-hidden sm:mt-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						ref: trackRef,
						style: { x },
						className: "flex h-full items-center px-4 sm:px-6",
						children: stages.map((s, i) => {
							const Icon = s.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mr-3 flex h-[240px] w-[80vw] shrink-0 flex-col border-2 border-ink bg-paper p-4 last:mr-0 sm:mr-4 sm:h-[280px] sm:w-[50vw] md:w-[34vw] lg:w-[24vw] xl:w-[20vw]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full bg-brick" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-start justify-between sm:mt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mono text-[10px] uppercase tracking-widest text-brick",
											children: ["Stage / ", String(i + 1).padStart(2, "0")]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-8 w-8 place-items-center border-2 border-ink bg-mustard",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10 mt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl leading-[0.95] sm:text-2xl lg:text-3xl",
											children: s.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono mt-2 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]",
											children: s.note
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-4 right-4 font-display text-5xl leading-none text-ink/[0.08] sm:text-7xl",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex items-center justify-between border-t-2 border-ink pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono text-[10px] uppercase tracking-widest text-muted-foreground",
											children: i < stages.length - 1 ? "→ Next" : "★ Scale"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-6 w-6 place-items-center border-2 border-ink bg-ink font-display text-[10px] text-paper",
											children: i + 1
										})]
									})
								]
							}, s.title);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 bg-ink/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { width: progressWidth },
						className: "h-full bg-brick"
					})
				})
			]
		})
	});
}
function Launch() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "launch",
		number: "07",
		eyebrow: "Launch @ AICSSYC 2026",
		title: "A new era begins in public.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "brut-border relative overflow-hidden bg-ink text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 dot-grid",
				style: { opacity: .2 }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid grid-cols-1 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b-2 border-paper/20 p-8 sm:p-12 lg:border-b-0 lg:border-r-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mono inline-flex items-center gap-2 bg-mustard px-2 py-1 text-[10px] uppercase tracking-widest text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }), " Inaugural Edition"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-6 font-display text-3xl leading-[0.9] sm:text-4xl lg:text-5xl",
							children: [
								"Where ideas become",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-mustard",
									children: "innovations"
								}),
								",",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"and innovations create",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brick",
									children: "global impact"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base",
							children: "The inaugural edition of the Global Incubation Centre marks a defining milestone for innovation-driven entrepreneurship within the IEEE Computer Society ecosystem. During AICSSYC 2026, GIC officially opens applications for incubation and invites entrepreneurs, researchers, and innovators to pitch their ideas before an expert panel."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#apply",
								className: "brut-border mono inline-flex items-center gap-2 bg-brick px-5 py-3 text-xs font-bold uppercase tracking-widest text-paper hover:bg-paper hover:text-ink",
								children: ["Reserve Your Spot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "brut-border mono inline-flex items-center gap-2 bg-paper px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink",
								children: "Partner With Us"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-[10px] uppercase tracking-widest text-paper/60",
							children: "Countdown to Launch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 border-t-2 border-paper/20 pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-[10px] uppercase tracking-widest text-paper/60",
									children: "Event"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-2xl",
									children: "AICSSYC · 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono mt-2 text-xs text-paper/60",
									children: "Oct 8 – 11, 2026 · Live Panel + Global Broadcast"
								})
							]
						})
					]
				})]
			})]
		})
	});
}
function Apply() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "apply",
		number: "08",
		eyebrow: "Startup Pitch",
		title: "Apply. Pitch. Get incubated.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-0 border-2 border-ink md:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					icon: BadgeCheck,
					title: "Eligibility",
					items: [
						"Early-stage startups & student founders",
						"Researchers with commercializable IP",
						"Solo founders or teams (≤5)",
						"Global applicants welcome"
					]
				},
				{
					icon: Scale,
					title: "Evaluation",
					items: [
						"Innovation & technical depth",
						"Market opportunity & scalability",
						"Team strength & execution",
						"Social & economic impact"
					]
				},
				{
					icon: Layers,
					title: "Selection",
					items: [
						"Online application & screening",
						"Shortlist announcement",
						"Live pitch to expert panel",
						"Incubation offer & onboarding"
					]
				},
				{
					icon: Calendar,
					title: "Dates",
					items: [
						"Applications open — Q2·2026",
						"Deadline — 15 Sep 2026",
						"Shortlist — 30 Sep 2026",
						"Pitch Day — AICSSYC·2026"
					]
				}
			].map((c, i) => {
				const isLastCol_md = i % 2 !== 0;
				const isLastCol_lg = i === 3;
				const isLastRow_md = i >= 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: [
							"h-full bg-paper p-6 sm:p-7",
							i < 3 ? "border-b-2 border-ink" : "",
							!isLastCol_md ? "md:border-r-2 md:border-ink" : "",
							!isLastRow_md ? "md:border-b-2" : "md:border-b-0",
							"lg:border-b-0",
							!isLastCol_lg ? "lg:border-r-2" : "lg:border-r-0"
						].join(" "),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center border-2 border-ink bg-mustard",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mono text-[10px] uppercase tracking-widest text-muted-foreground",
									children: ["Step / ", String(i + 1).padStart(2, "0")]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-xl",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5",
								children: c.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-brick" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
								}, it))
							})
						]
					})
				}, c.title);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .15,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brut-border brut-shadow mt-8 flex flex-col gap-5 bg-brick p-6 text-paper sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-2xl sm:text-3xl",
					children: "Ready to pitch your startup?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono mt-2 text-xs uppercase tracking-widest",
					children: "Applications open globally · Free to apply"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "brut-border mono inline-flex w-full items-center justify-center gap-2 bg-paper px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink sm:w-auto sm:py-3",
					children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		})]
	});
}
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		number: "09",
		eyebrow: "Benefits",
		title: "Everything a founder actually needs.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
			children: [
				"1:1 Mentorship",
				"Investor Connect",
				"Networking",
				"Workspace Access",
				"Product Validation",
				"Technical Support",
				"Legal & IP Guidance",
				"Branding",
				"Go-to-Market Strategy"
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * .04,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brut-border brut-hover flex items-center justify-between gap-3 bg-paper px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm sm:text-base",
						children: it
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mono text-xs text-muted-foreground",
						children: String(i + 1).padStart(2, "0")
					})]
				})
			}, it))
		})
	});
}
function Mentors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "mentors",
		number: "10",
		eyebrow: "Mentors & Advisory Board",
		title: "Operators. Investors. Researchers.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					name: "Dr. Anika Rao",
					role: "AI Research Lead",
					org: "IEEE·CS"
				},
				{
					name: "Marcus Vinter",
					role: "Partner",
					org: "Northwind Ventures"
				},
				{
					name: "Priya Shankar",
					role: "Founder & CEO",
					org: "OrbitLabs"
				},
				{
					name: "Kenji Watanabe",
					role: "Chief Scientist",
					org: "Kaimon Robotics"
				},
				{
					name: "Elena Duarte",
					role: "Product Advisor",
					org: "ex-Stripe"
				},
				{
					name: "Samuel Okafor",
					role: "GTM Advisor",
					org: "Andela / Alt"
				}
			].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brut-border brut-hover bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between border-b-2 border-ink bg-ink px-5 py-3 text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mono text-[10px] uppercase tracking-widest",
							children: ["Advisor / ", String(i + 1).padStart(2, "0")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-[10px] uppercase tracking-widest text-mustard",
							children: "Active"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 place-items-center border-2 border-ink bg-mustard font-display text-xl",
								children: p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 font-display text-lg leading-tight",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mono mt-2 text-xs uppercase tracking-widest text-muted-foreground",
								children: [
									p.role,
									" / ",
									p.org
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex items-center gap-2 border-t-2 border-ink pt-4",
								children: [
									Linkedin,
									Twitter,
									Github
								].map((Icon, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "grid h-8 w-8 place-items-center border-2 border-ink hover:bg-ink hover:text-paper",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
								}, k))
							})
						]
					})]
				})
			}, p.name))
		})
	});
}
function Partners() {
	const logos = [
		"IEEE·CS",
		"Nexora VC",
		"AtlasLabs",
		"Quantum Foundry",
		"Northwind",
		"OrbitLabs",
		"Helios AI",
		"Vertex Uni",
		"Kaimon",
		"Prism Capital",
		"Meridian",
		"Alt Ventures"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		number: "11",
		eyebrow: "Partners",
		title: "A global network of universities, industries & investors.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "brut-border overflow-hidden bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-marquee",
				children: [...logos, ...logos].map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono flex h-24 w-56 shrink-0 items-center justify-center border-r-2 border-ink px-6 font-display text-lg uppercase tracking-wide",
					children: name
				}, i))
			})
		})
	});
}
function Stories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		number: "12",
		eyebrow: "Success Stories",
		title: "Built for real-world impact.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [
				{
					q: "GIC turned our lab prototype into a funded product in under a year.",
					n: "Aarav Mehta",
					r: "Founder, NeuroSense",
					m: [
						"$2.4M Seed",
						"12 Countries",
						"3× Revenue"
					]
				},
				{
					q: "The mentor network is unmatched — every intro moved the needle.",
					n: "Lina Park",
					r: "CEO, VoltGrid",
					m: [
						"Series A",
						"F-500 Pilot",
						"40+ Team"
					]
				},
				{
					q: "From pitch to pilot in 90 days. That's what IEEE-backed delivers.",
					n: "Diego Alvarez",
					r: "Founder, AeroKite",
					m: [
						"FAA Cert",
						"$1.1M ARR",
						"3 Continents"
					]
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brut-border flex h-full flex-col bg-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b-2 border-ink bg-mustard px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mono text-[10px] uppercase tracking-widest",
								children: ["Case / ", String(i + 1).padStart(2, "0")]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-5xl leading-none text-brick",
									children: "\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-base leading-relaxed",
									children: s.q
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-base",
										children: s.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mono mt-1 text-xs uppercase tracking-widest text-muted-foreground",
										children: s.r
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 border-t-2 border-ink",
							children: s.m.map((m, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `p-3 text-center ${k < 2 ? "border-r-2 border-ink" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-[10px] uppercase tracking-widest",
									children: m
								})
							}, m))
						})
					]
				})
			}, s.n))
		})
	});
}
function FAQ() {
	const items = [
		{
			q: "Who can apply to GIC?",
			a: "Early-stage founders, student entrepreneurs, researchers, and small teams from anywhere in the world with a technology-driven idea, prototype, or product."
		},
		{
			q: "Is there any equity or fee involved?",
			a: "Applying is free. Terms of incubation, if any equity component is applicable, will be transparently shared with selected startups."
		},
		{
			q: "What does the incubation include?",
			a: "Mentorship, technical resources, workspace access, investor connections, GTM support, and IEEE ecosystem exposure."
		},
		{
			q: "Where will the pitching event take place?",
			a: "The inaugural pitch and launch will take place at AICSSYC 2026, followed by continued incubation programs online and on-site."
		},
		{
			q: "Can international teams participate?",
			a: "Yes — GIC is designed as a global platform. Remote-first participation is fully supported."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "faq",
		number: "13",
		eyebrow: "FAQ",
		title: "Answers, up front.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "brut-border divide-y-2 divide-ink bg-paper",
			children: items.map((it, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(isOpen ? null : i),
					className: `grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 p-5 text-left transition-colors sm:p-6 ${isOpen ? "bg-ink text-paper" : "hover:bg-mustard"}`,
					"aria-expanded": isOpen,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-xs uppercase tracking-widest opacity-70",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base sm:text-xl",
							children: it.q
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 shrink-0 place-items-center border-2 border-current",
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: false,
					animate: {
						height: isOpen ? "auto" : 0,
						opacity: isOpen ? 1 : 0
					},
					transition: {
						duration: .35,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border-t-2 border-ink bg-paper px-5 py-5 text-sm leading-relaxed text-muted-foreground sm:px-6",
						children: it.a
					})
				})] }, it.q);
			})
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		number: "14",
		eyebrow: "Contact",
		title: "Let's build the future — together.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-12 gap-4 lg:gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "col-span-12 lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brut-border flex h-full flex-col bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b-2 border-ink bg-ink px-6 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-[10px] uppercase tracking-widest text-paper",
							children: "Direct Contact"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: Mail,
									label: "Email",
									value: "gic@ieee-cs.org"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: MapPin,
									label: "HQ",
									value: "IEEE Computer Society · Global"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: Calendar,
									label: "Launch",
									value: "AICSSYC · 2026"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex items-center gap-2 border-t-2 border-ink pt-6",
							children: [
								Linkedin,
								Twitter,
								Github
							].map((Icon, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "brut-border brut-hover grid h-10 w-10 place-items-center bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, k))
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				className: "col-span-12 lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						alert("Thanks — we'll be in touch.");
					},
					className: "brut-border bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b-2 border-ink bg-ink px-6 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-[10px] uppercase tracking-widest text-paper",
							children: "Application Form / v1.0"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full Name",
										name: "name",
										placeholder: "Ada Lovelace"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email",
										placeholder: "you@company.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Organization",
										name: "org",
										placeholder: "Your startup or institution"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Interest",
										name: "interest",
										placeholder: "Founder / Investor / Partner"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mono mb-1.5 block text-[10px] uppercase tracking-widest",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 5,
									placeholder: "Tell us about your idea, startup, or collaboration…",
									className: "brut-border w-full bg-paper px-4 py-3 text-sm outline-none focus:bg-mustard"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "brut-border brut-shadow brut-hover mono mt-6 inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-paper",
								children: ["Send Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})]
				})
			})]
		})
	});
}
function ContactRow({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 shrink-0 place-items-center border-2 border-ink bg-mustard",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mono text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-sm sm:text-base",
			children: value
		})] })]
	});
}
function Field({ label, name, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "mono mb-1.5 block text-[10px] uppercase tracking-widest",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		placeholder,
		className: "brut-border w-full bg-paper px-4 py-3 text-sm outline-none focus:bg-mustard"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t-2 border-ink bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 shrink-0 place-items-center border-2 border-paper bg-mustard text-ink mono text-sm font-bold",
								children: "G/"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg",
								children: "GIC"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mono text-[10px] uppercase tracking-widest text-paper/60",
								children: "IEEE·CS / Global Incubation Centre"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mono mt-6 max-w-md text-xs uppercase leading-relaxed tracking-widest text-paper/70 sm:text-sm",
							children: "Innovating Ideas / Empowering Entrepreneurs / Creating Global Impact."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Explore",
						links: [
							"About",
							"Principles",
							"Journey",
							"Offerings"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Program",
						links: [
							"Apply",
							"Mentors",
							"Partners",
							"Success Stories"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Company",
						links: [
							"Contact",
							"Privacy Policy",
							"Terms",
							"IEEE.org"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mono mt-12 flex flex-col items-start justify-between gap-3 border-t-2 border-paper/20 pt-6 text-[10px] uppercase tracking-widest text-paper/60 sm:mt-14 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "© 2026 GIC · IEEE Computer Society. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4 sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-paper",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-paper",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-paper",
							children: "Code of Conduct"
						})
					]
				})]
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:col-span-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mono text-[10px] uppercase tracking-widest text-mustard",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-2.5",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#",
				className: "font-display text-sm hover:text-mustard",
				children: l
			}) }, l))
		})]
	});
}
function Section({ id, number, eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "border-b-2 border-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 grid grid-cols-12 items-end gap-4 sm:mb-14 lg:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: ["Section / ", number]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brut-border bg-mustard px-2 py-1",
							children: eyebrow
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "col-span-12 font-display text-3xl leading-[0.95] sm:text-4xl md:col-span-9 lg:text-5xl xl:text-6xl",
					children: title
				})]
			}) }), children]
		})
	});
}
function BigCard({ tag, icon: Icon, accent, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `brut-border ${accent === "brick" ? "brut-shadow-brick" : "brut-shadow-cobalt"} h-full bg-paper p-6 sm:p-8`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-[10px] uppercase tracking-widest text-brick",
					children: tag
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 place-items-center border-2 border-ink bg-ink text-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 font-display text-2xl sm:text-3xl",
				children: tag
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children
			})
		]
	});
}
function StatCard({ label, value, note, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `brut-border h-full p-5 sm:p-6 ${accent ? "bg-brick text-paper" : "bg-mustard"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mono text-[10px] uppercase tracking-widest opacity-70",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 font-display text-4xl sm:text-5xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mono mt-3 text-[10px] uppercase tracking-widest opacity-70",
				children: note
			})
		]
	});
}
//#endregion
export { Index as component };
