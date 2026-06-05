import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources/calendar")({
  head: () => ({
    meta: [
      { title: "School Calendar — Acacia Crest Senior School" },
      { name: "description", content: "Term dates, exams, parent events, Kenyan public holidays, Christmas and Easter for the Acacia Crest academic year." },
      { property: "og:title", content: "School Calendar — Acacia Crest" },
      { property: "og:description", content: "Term dates, exams, parent events and Kenyan public holidays." },
    ],
  }),
  component: Page,
});

type EventItem = { date: string; title: string; type: string; location?: string; time?: string };

const YEAR = 2026;

const EVENTS: EventItem[] = [
  { date: "2026-01-01", title: "New Year's Day", type: "Public Holiday" },
  { date: "2026-03-20", title: "Eid al-Fitr (observed)", type: "Public Holiday" },
  { date: "2026-04-03", title: "Good Friday", type: "Public Holiday" },
  { date: "2026-04-05", title: "Easter Sunday", type: "Public Holiday" },
  { date: "2026-04-06", title: "Easter Monday", type: "Public Holiday" },
  { date: "2026-05-01", title: "Labour Day", type: "Public Holiday" },
  { date: "2026-05-27", title: "Eid al-Adha (observed)", type: "Public Holiday" },
  { date: "2026-06-01", title: "Madaraka Day", type: "Public Holiday" },
  { date: "2026-10-10", title: "Utamaduni Day", type: "Public Holiday" },
  { date: "2026-10-20", title: "Mashujaa Day", type: "Public Holiday" },
  { date: "2026-12-12", title: "Jamhuri Day", type: "Public Holiday" },
  { date: "2026-12-25", title: "Christmas Day", type: "Public Holiday" },
  { date: "2026-12-26", title: "Boxing Day", type: "Public Holiday" },
];

const TYPE_DOT: Record<string, string> = {
  "Public Holiday": "bg-emerald-500",
};

const TYPE_BADGE: Record<string, string> = {
  "Public Holiday": "bg-emerald-100 text-emerald-900",
};

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function fmtKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function Page() {
  const today = new Date();

  // Start on the current month if we're in YEAR, otherwise January
  const [month, setMonth] = useState(() =>
    today.getFullYear() === YEAR ? today.getMonth() : 0
  );
  const [selected, setSelected] = useState<string | null>(null);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, EventItem[]>();
    EVENTS.forEach((e) => {
      if (!map.has(e.date)) map.set(e.date, []);
      map.get(e.date)!.push(e);
    });
    return map;
  }, []);

  const daysInMonth = new Date(YEAR, month + 1, 0).getDate();
  const firstWeekday = new Date(YEAR, month, 1).getDay();

  const monthEvents = EVENTS.filter((e) => e.date.startsWith(`${YEAR}-${String(month + 1).padStart(2, "0")}`));
  const selectedEvents = selected ? eventsByDate.get(selected) ?? [] : [];

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const isToday = (d: number) =>
    today.getFullYear() === YEAR && today.getMonth() === month && today.getDate() === d;

  const go = (delta: number) => {
    setSelected(null);
    setMonth((m) => Math.max(0, Math.min(11, m + delta)));
  };

  return (
    <>
      <PageHeader
        title="School Calendar"
        eyebrow={`Academic Year ${YEAR}`}
        description="Term dates, exams, parent events and every Kenyan public holiday — click any highlighted day to see what's on."
        breadcrumb={[{ label: "Resources", to: "/resources" }, { label: "School Calendar" }]}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Calendar */}
          <Reveal>
            <div className="rounded-3xl bg-card border border-border shadow-card overflow-hidden">
              <div className="flex items-center justify-between p-6 bg-gradient-to-br from-navy to-navy/85 text-white">
                <button
                  onClick={() => go(-1)}
                  disabled={month === 0}
                  className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="text-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">{YEAR}</div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mt-1">{MONTHS[month]}</h2>
                </div>
                <button
                  onClick={() => go(1)}
                  disabled={month === 11}
                  className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  aria-label="Next month"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 md:p-6">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {WEEKDAYS.map((w) => (
                    <div key={w} className="text-center text-[11px] font-bold uppercase tracking-wider text-muted-foreground py-2">{w}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {cells.map((d, i) => {
                    if (d === null) return <div key={i} />;
                    const key = fmtKey(YEAR, month, d);
                    const dayEvents = eventsByDate.get(key) ?? [];
                    const isSel = selected === key;
                    const hasEvents = dayEvents.length > 0;
                    const todayCell = isToday(d);
                    const primary = dayEvents[0];
                    return (
                      <button
                        key={i}
                        onClick={() => setSelected(isSel ? null : key)}
                        className={cn(
                          "relative aspect-square rounded-xl border text-sm font-medium transition-all flex flex-col items-center justify-center p-1",
                          isSel
                            ? "border-gold bg-gold/10 ring-2 ring-gold/40"
                            : todayCell
                            ? "border-navy bg-navy text-white"
                            : hasEvents
                            ? "border-border bg-accent/40 hover:bg-accent"
                            : "border-transparent hover:bg-accent/30",
                        )}
                      >
                        <span className={cn(
                          "text-sm md:text-base font-bold",
                          todayCell && !isSel && "text-white",
                        )}>
                          {d}
                        </span>
                        {hasEvents && (
                          <div className="flex gap-0.5 mt-0.5">
                            {dayEvents.slice(0, 3).map((e, j) => (
                              <span
                                key={j}
                                className={cn(
                                  "h-1.5 w-1.5 rounded-full",
                                  todayCell && !isSel ? "bg-white/70" : (TYPE_DOT[e.type] ?? "bg-muted-foreground"),
                                )}
                              />
                            ))}
                          </div>
                        )}
                        {primary && (
                          <span className={cn(
                            "hidden md:block text-[9px] leading-tight truncate w-full px-1 mt-0.5",
                            todayCell && !isSel ? "text-white/70" : "text-muted-foreground",
                          )}>
                            {primary.title}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="border-t border-border p-4 flex flex-wrap gap-3 text-xs">
                {Object.entries(TYPE_DOT).map(([label, cls]) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <span className={cn("h-2 w-2 rounded-full", cls)} />
                    <span className="text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Side panel */}
          <Reveal delay={0.1}>
            <div className="space-y-6 lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                {selected && selectedEvents.length > 0 ? (
                  <motion.div
                    key={selected}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl bg-gradient-to-br from-gold/15 to-transparent border border-gold/40 p-6 shadow-card"
                  >
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-1">Selected</div>
                    <h3 className="font-display text-xl font-bold text-navy mb-4">
                      {new Date(selected + "T00:00:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
                    </h3>
                    <div className="space-y-3">
                      {selectedEvents.map((e, i) => (
                        <div key={i} className="bg-background/70 rounded-xl p-3">
                          <span className={cn("inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold mb-1", TYPE_BADGE[e.type] ?? "bg-muted")}>
                            {e.type}
                          </span>
                          <div className="font-semibold text-navy text-sm">{e.title}</div>
                          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-1">
                            {e.location && <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{e.location}</span>}
                            {e.time && <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{e.time}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-3xl bg-card border border-dashed border-border p-6 text-center"
                  >
                    <CalendarIcon className="h-8 w-8 text-gold mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click any highlighted date to see what's on.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Month list */}
              <div className="rounded-3xl bg-card border border-border shadow-card p-6">
                <h3 className="font-display text-lg font-bold text-navy mb-4">{MONTHS[month]} events</h3>
                {monthEvents.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No scheduled events this month.</p>
                ) : (
                  <ul className="space-y-3">
                    {monthEvents.map((e, i) => {
                      const day = Number(e.date.slice(-2));
                      return (
                        <li key={i}>
                          <button
                            onClick={() => setSelected(e.date)}
                            className="w-full flex gap-3 items-start text-left group"
                          >
                            <div className="bg-navy text-white rounded-lg p-2 min-w-[44px] text-center shrink-0">
                              <div className="text-[9px] uppercase tracking-widest text-gold">{MONTHS[month].slice(0, 3)}</div>
                              <div className="font-display text-lg font-bold leading-none mt-0.5">{day}</div>
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className={cn("h-1.5 w-1.5 rounded-full", TYPE_DOT[e.type] ?? "bg-muted")} />
                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{e.type}</span>
                              </div>
                              <div className="text-sm font-semibold text-navy group-hover:text-primary transition leading-snug">{e.title}</div>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-navy to-navy/80 text-white p-8 md:p-12 text-center shadow-elegant">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Planning a visit?</h3>
            <p className="text-white/80 max-w-xl mx-auto mb-6">Open days and admissions tours run throughout the year. We'd love to welcome your family to campus.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 font-semibold hover:bg-gold/90 transition group">
              Book a Visit <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}