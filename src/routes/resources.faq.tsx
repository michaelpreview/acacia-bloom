import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, ArrowRight, HelpCircle } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/resources/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Acacia Crest Senior School" },
      { name: "description", content: "Answers to the most common questions about admissions, academics, boarding, fees, uniform, transport and student life at Acacia Crest." },
      { property: "og:title", content: "FAQs — Acacia Crest" },
      { property: "og:description", content: "Quick answers about admissions, academics, boarding, fees and life at Acacia Crest." },
    ],
  }),
  component: Page,
});

type QA = { q: string; a: string };
type Group = { category: string; items: QA[] };

const FAQS: Group[] = [
  {
    category: "Admissions",
    items: [
      { q: "When can my child join Acacia Crest?", a: "New learners join at the start of any term subject to availability. We recommend applying at least one term in advance — early applicants are also considered first for boarding places and bursaries." },
      { q: "Is there an entrance assessment?", a: "Yes. Applicants sit a short, pathway-appropriate assessment in English, Mathematics and a general reasoning paper. It is designed to gauge readiness — not pre-coached preparation." },
      { q: "What documents do I need to apply?", a: "Birth certificate, the most recent two report forms, a passport-size photo, a leaving certificate from the current school, and the completed application form. International applicants also submit a passport copy." },
      { q: "Do you offer bursaries or scholarships?", a: "A limited number of needs-and-merit bursaries are awarded each year. Apply through the admissions office at the time of application." },
    ],
  },
  {
    category: "Academics",
    items: [
      { q: "Which curriculum do you follow?", a: "We deliver the Kenyan Competency-Based Curriculum (CBC) for Grades 7–12, with pathway specialisation from Grade 10 in STEM, Social Sciences and Arts & Sports Science." },
      { q: "Can my child switch pathways later?", a: "Pathway switching is possible at the end of Grade 10, in consultation with the Dean of Studies, the learner and parents." },
      { q: "How do you support gifted learners?", a: "Stretch sets in Mathematics and Sciences, an Olympiad squad, university-style research projects in Grade 12, and a mentorship pairing with alumni in chosen fields." },
      { q: "What if my child needs learning support?", a: "Our Inclusion team reviews each request individually before offering a place. Where we can serve a learner well, we put a tailored support plan in place from day one." },
    ],
  },
  {
    category: "Boarding & Day Life",
    items: [
      { q: "Do you offer both day and boarding?", a: "Yes. Boarding is single-sex with dedicated houseparents and a 1:8 night-pastoral ratio. Day learners follow the same timetable and have full access to all facilities." },
      { q: "How often can boarders go home?", a: "Boarders are home for half-term breaks and the end of each term. Approved family visits are welcome on Sundays after chapel." },
      { q: "What's in the boarding day?", a: "Wake-up at 6:00 AM, morning prep, breakfast, full school day, sports, supervised evening prep, dinner, devotions, lights out by 10:00 PM. Sundays are lighter — chapel, family time and personal study." },
    ],
  },
  {
    category: "Fees & Payments",
    items: [
      { q: "What does the fee cover?", a: "Tuition, learning resources, exam registration, basic medical cover on campus, all sports and core clubs, and three meals a day for boarders. Optional extras (international trips, specialist music tuition) are billed separately." },
      { q: "What payment plans do you offer?", a: "Termly payment is standard. Annual upfront payment attracts a small discount. Quarterly instalments are available on application." },
      { q: "Is there a sibling discount?", a: "Yes — a 10% discount on the second child and 15% on the third when concurrently enrolled." },
    ],
  },
  {
    category: "Uniform, Transport & Daily Life",
    items: [
      { q: "Where do we buy the uniform?", a: "From the official school outfitter on campus. A complete uniform pack is available, plus seasonal sportswear and house colours." },
      { q: "Do you run school transport?", a: "Yes — branded buses cover the main residential routes across the city, with onboard supervisors. The route map and fees are published each term." },
      { q: "What about phones and devices?", a: "Smartphones are not permitted during the school day. Boarders hand devices to houseparents on arrival. Personal laptops are allowed from Grade 11 with a signed acceptable-use policy." },
      { q: "How do you handle medical care?", a: "A qualified nurse is on campus during school hours and resident in the boarding houses overnight. We partner with a nearby hospital for emergencies." },
    ],
  },
  {
    category: "Communication",
    items: [
      { q: "How will I hear from the school?", a: "Weekly newsletter by email, termly parent meetings, and instant updates via our parent portal. Form tutors are reachable by email; appointments can be booked for in-person meetings." },
      { q: "Who do I contact if I have a concern?", a: "Start with your child's form tutor. Pastoral concerns escalate to the Head of House, and academic matters to the Dean of Studies. Serious safeguarding concerns go directly to the Designated Safeguarding Lead." },
    ],
  },
];

function Page() {
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const q = query.trim().toLowerCase();
  const filtered = FAQS.map((g) => ({
    ...g,
    items: g.items.filter((it) => !q || it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        eyebrow="Quick Answers"
        description="The questions parents and learners ask us most often — organised by topic. Can't find what you need? Get in touch and we'll help."
        breadcrumb={[{ label: "Resources", to: "/resources" }, { label: "FAQs" }]}
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <Reveal>
          <div className="relative mb-12">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search questions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-full border border-border bg-card shadow-card focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
            />
          </div>
        </Reveal>

        {filtered.length === 0 && (
          <Reveal>
            <div className="text-center py-16 text-muted-foreground">
              <HelpCircle className="h-10 w-10 mx-auto mb-3 text-gold" />
              No questions match your search. Try a different keyword or <Link to="/contact" className="text-primary underline">contact us</Link>.
            </div>
          </Reveal>
        )}

        <div className="space-y-12">
          {filtered.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.05}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-5 flex items-center gap-3">
                  <span className="h-1.5 w-8 rounded-full bg-gold" /> {group.category}
                </h2>
                <div className="space-y-3">
                  {group.items.map((it, i) => {
                    const key = `${group.category}-${i}`;
                    const open = openKey === key;
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.35, delay: i * 0.04 }}
                        className="border border-border rounded-2xl bg-card shadow-card overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenKey(open ? null : key)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-accent/40 transition"
                          aria-expanded={open}
                        >
                          <span className="font-semibold text-navy text-[15px] md:text-base">{it.q}</span>
                          <motion.span
                            animate={{ rotate: open ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-gold shrink-0"
                          >
                            <Plus className="h-5 w-5" />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{it.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 rounded-3xl bg-gradient-to-br from-navy to-navy/80 text-white p-8 md:p-10 text-center shadow-elegant">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Still have a question?</h3>
            <p className="text-white/80 max-w-xl mx-auto mb-6">Our admissions team is happy to help — by email, phone, or in person on campus.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 font-semibold hover:bg-gold/90 transition group">
              Contact Us <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
