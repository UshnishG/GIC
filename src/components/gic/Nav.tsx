import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "01 · About" },
  { href: "#principles", label: "02 · Principles" },
  { href: "#offerings", label: "03 · Offerings" },
  { href: "#journey", label: "04 · Journey" },
  { href: "#launch", label: "05 · Launch" },
  { href: "#apply", label: "06 · Apply" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 border-ink bg-paper transition-shadow ${
        scrolled ? "shadow-[0_4px_0_0_var(--ink)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center border-2 border-ink bg-ink text-paper mono text-sm font-bold">
            G/
          </div>
          <div className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-sm">GIC</span>
            <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
              IEEE·CS / est. 2026
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono px-3 py-2 text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href="#apply"
            className="brut-border brut-shadow brut-hover mono inline-flex items-center gap-2 bg-brick px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-paper"
          >
            Apply → Pitch
          </a>
        </div>

        <button
          className="brut-border p-2 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-ink bg-paper xl:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="mono border-b border-ink/20 py-3 text-xs uppercase tracking-widest last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="brut-border mono mt-3 bg-brick px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-paper"
            >
              Apply → Pitch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
