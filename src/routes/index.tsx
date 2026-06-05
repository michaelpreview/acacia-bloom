import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, Users, Sparkles, BookOpen, Heart, ArrowRight, Calendar, Newspaper, MapPin } from "lucide-react";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import award from "@/assets/award.webp";
import teacher from "@/assets/headteacher.webp";
import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acacia Crest Senior School — Shaping Futures" },
      { name: "description", content: "Acacia Crest Senior School, Kenya — a premier senior school offering rigorous academics, holistic education and award-winning student programs." },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "20+", label: "Years of Excellence" },
  { value: "98%", label: "University Placement" },
  { value: "40+", label: "Clubs & Societies" },
  { value: "25+", label: "Sports Disciplines" },
];

const PILLARS = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "A rigorous, future-ready curriculum delivered by passionate, qualified educators." },
  { icon: Heart, title: "Character & Values", desc: "Building principled leaders rooted in integrity, respect, and responsibility." },
  { icon: Trophy, title: "Sports & Co-curricular", desc: "Championship-level sports and 40+ clubs to discover every student's talent." },
  { icon: Sparkles, title: "Holistic Growth", desc: "Programs that nurture mind, body and spirit — from arts to community service." },
];

const NEWS = [
  { tag: "Achievement", title: "Acacia Crest sweeps Regional Science Fair", date: "May 22, 2026", image: award },
  { tag: "Sports", title: "Basketball team crowned County Champions", date: "May 15, 2026", image: hero1 },
  { tag: "Music", title: "Choir advances to National Music Festival finals", date: "May 8, 2026", image: hero2 },
];

const EVENTS = [
  { day: "12", month: "JUN", title: "Open Day & Campus Tour", location: "Main Campus", time: "9:00 AM" },
  { day: "20", month: "JUN", title: "Parents' Consultative Day", location: "Auditorium", time: "10:00 AM" },
  { day: "05", month: "JUL", title: "Inter-House Sports Day", location: "Sports Complex", time: "8:00 AM" },
];

function Home() {
  return (
    <div>
      <HeroCarousel />

      {/* Welcome */}
      <section id="welcome" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Welcome Message</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy text-balance leading-tight">From the Principal's Desk</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">At Acacia Crest Senior School, we believe every child carries a unique spark — and our job is to fan that spark into a flame. For over two decades, we have shaped confident, compassionate, and curious young people who go on to lead in their universities, communities and careers.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Our approach blends academic rigour with character formation, sports, the arts and service. Whether your son is destined for the lab, the pitch, the stage or the boardroom — Acacia Crest is where futures take shape.</p>
            <Link to="/our-story" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all">Read more about us <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <img src={teacher} alt="Principal" className="rounded-3xl shadow-elegant aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-gold text-gold-foreground rounded-2xl p-5 shadow-elegant max-w-[240px]">
              <div className="font-display text-2xl font-bold">"Shaping Futures"</div>
              <div className="text-xs uppercase tracking-wider mt-1 opacity-80">Our promise to every student</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-gold">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">Why Acacia Crest</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy text-balance">An education built on four pillars</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-card border border-border rounded-3xl p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <p.icon className="h-7 w-7 text-gold-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3 flex items-center gap-2"><Newspaper className="h-3 w-3" /> Latest News</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">What's happening on campus</h2>
            </div>
            <Link to="/news" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">All news <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {NEWS.map((n, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-gold/20 text-navy px-3 py-1 rounded-full font-semibold uppercase tracking-wider">{n.tag}</span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy mt-4 group-hover:text-primary transition-colors">{n.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <div className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3 flex items-center gap-2"><Calendar className="h-3 w-3" /> Upcoming Events</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Save the date</h2>
            <p className="text-muted-foreground mt-4">Stay close to campus life. Visit, attend, and celebrate with the Acacia Crest community.</p>
          </div>
          <div className="space-y-4">
            {EVENTS.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-5 flex items-center gap-6 shadow-card hover:shadow-elegant hover:border-gold transition-all">
                <div className="bg-gradient-hero text-white rounded-xl p-4 text-center min-w-[80px]">
                  <div className="font-display text-3xl font-bold leading-none">{e.day}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gold mt-1">{e.month}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-navy">{e.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-2">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</span>
                    <span>{e.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life mosaic */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">Life at Acacia Crest</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">More than a school — a second home</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[hero3, hero2, hero1, teacher].map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group overflow-hidden rounded-2xl aspect-square">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">Explore the gallery <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 50%)" }} />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <Users className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl font-bold text-balance">Join the Acacia Crest family</h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Admissions are open. Schedule a campus visit, meet our team, and see why families across Kenya choose Acacia Crest.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/admissions/apply" className="bg-gold text-gold-foreground px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition shadow-elegant">Apply Now</Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">Book a Visit</Link>
          </div>
        </div>
      </section>
    </div>
  );
}