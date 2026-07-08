import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const TARGET = new Date("2026-10-08T09:00:00Z").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms / 3600000) % 24),
    m: Math.floor((ms / 60000) % 60),
    s: Math.floor((ms / 1000) % 60),
  };
}

function Digit({ value }: { value: number }) {
  const str = String(value).padStart(2, "0");
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-3 h-[64px] sm:h-[72px]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={str}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl tabular-nums text-ink sm:text-4xl"
        >
          {str}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  const items: [string, number][] = [
    ["DAYS", t.d],
    ["HRS", t.h],
    ["MIN", t.m],
    ["SEC", t.s],
  ];
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {items.map(([label, v]) => (
        <motion.div
          key={label}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="brut-border bg-paper"
        >
          <div className="border-b-2 border-ink bg-ink py-1 text-center">
            <span className="mono text-[10px] font-bold uppercase tracking-widest text-paper">
              {label}
            </span>
          </div>
          <Digit value={v} />
        </motion.div>
      ))}
    </div>
  );
}
