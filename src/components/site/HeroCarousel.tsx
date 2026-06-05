import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";

const SLIDES = [
  {
    image: hero1,
    eyebrow: "Welcome to Acacia Crest",
    title: "Shaping Futures, One Student at a Time",
    description:
      "A premier senior school in Kenya where academic rigor meets character formation and lifelong friendships are forged.",
    cta: { label: "Apply for Admission", to: "/admissions/apply" },
  },
  {
    image: hero2,
    eyebrow: "Excellence in Tradition",
    title: "Pride, Discipline & Distinction",
    description:
      "Our students embody the highest standards of conduct, scholarship, and service — values that define an Acacia Crest education.",
    cta: { label: "Discover Our Story", to: "/about" },
  },
  {
    image: hero3,
    eyebrow: "A Vibrant Community",
    title: "Learn. Lead. Belong.",
    description:
      "From championship sports to award-winning clubs, every student finds their place — and their voice — at Acacia Crest.",
    cta: { label: "Explore Student Life", to: "/student-life" },
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      6500
    );
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >

          {/* IMAGE */}
          <motion.img
            src={slide.image}
            className="w-full h-full object-cover"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />

          {/* ================= NAVY OVERLAY (NEW) ================= */}
          <div className="absolute inset-0">
            {/* navy tint */}
            <div className="absolute inset-0 bg-[#0B1F3B]/35" />

            {/* readability gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/60" />

            {/* subtle vignette depth */}
            <div className="absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.4)]" />
          </div>

        </motion.div>
      </AnimatePresence>

      {/* ================= TEXT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center h-full">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl"
          >

            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-10 bg-gold/70" />
              <span className="text-gold uppercase tracking-[0.35em] text-[11px] font-semibold opacity-90">
                {slide.eyebrow}
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold leading-[1.02] text-white text-balance"
              initial={{ letterSpacing: "-0.02em" }}
              animate={{ letterSpacing: "0em" }}
              transition={{ duration: 1.2 }}
            >
              {slide.title}
            </motion.h1>

            {/* ACCENT LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-gold to-transparent mt-6"
            />

            {/* DESCRIPTION */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-white/75 max-w-xl leading-[1.7]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slide.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Link
                to={slide.cta.to}
                className="group inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
              >
                {slide.cta.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition"
              >
                Virtual Tour
                <span className="w-5 h-[1px] bg-white/40 hover:w-8 transition-all" />
              </Link>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= CONTROLS ================= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">

        {/* PREV */}
        <button
          onClick={() =>
            setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
          }
          className="p-2 rounded-full bg-white/10 backdrop-blur hover:bg-gold hover:text-gold-foreground transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* DOTS */}
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-10 bg-gold"
                  : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* NEXT */}
        <button
          onClick={() =>
            setIndex((i) => (i + 1) % SLIDES.length)
          }
          className="p-2 rounded-full bg-white/10 backdrop-blur hover:bg-gold hover:text-gold-foreground transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

      </div>
    </section>
  );
}