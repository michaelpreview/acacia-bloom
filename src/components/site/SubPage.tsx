import { PageHeader } from "@/components/site/PageHeader";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export type Section = { heading?: string; body?: string; bullets?: string[] };
export type Highlight = { title: string; description: string };
export type Stat = { value: string; label: string };
export type Faq = { q: string; a: string };
export type CTA = { label: string; to: string };

export function SubPage({
  title,
  eyebrow,
  description,
  breadcrumb,
  intro,
  sections,
  highlights,
  stats,
  faqs,
  callout,
  cta,
  children,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
  intro?: string;
  sections?: Section[];
  highlights?: Highlight[];
  stats?: Stat[];
  faqs?: Faq[];
  callout?: { title: string; body: string };
  cta?: CTA;
  children?: ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} eyebrow={eyebrow} description={description} breadcrumb={breadcrumb} />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-14">
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-display text-navy/90 leading-snug text-balance"
          >
            {intro}
          </motion.p>
        )}

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-y border-border py-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-navy">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <h3 className="font-display text-xl font-semibold text-navy mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{h.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {sections && sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {s.heading && <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">{s.heading}</h2>}
            {s.body && <p className="text-foreground/80 leading-relaxed text-[17px]">{s.body}</p>}
            {s.bullets && (
              <ul className="mt-4 space-y-2.5">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-foreground/85">
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {callout && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-hero text-white p-8 md:p-10 shadow-elegant"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-balance">{callout.title}</h3>
            <p className="text-white/85 leading-relaxed">{callout.body}</p>
          </motion.div>
        )}

        {faqs && faqs.length > 0 && (
          <div className="space-y-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">Frequently asked</h2>
            {faqs.map((f, i) => (
              <details key={i} className="group border border-border rounded-xl bg-card p-5 shadow-card">
                <summary className="font-semibold text-navy cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-gold group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        )}

        {cta && (
          <div className="pt-4">
            <Link
              to={cta.to}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-card hover:bg-primary/90 transition group"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        )}

        {children}
      </section>
    </>
  );
}
