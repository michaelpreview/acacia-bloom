import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

import img1 from "@/assets/hero1.webp";
import img2 from "@/assets/hero2.webp";
import img3 from "@/assets/hero3.webp";
import img4 from "@/assets/headteacher.webp";

export const Route = createFileRoute("/gallery")({
  component: Page,
});

const IMAGES: string[] = [img1, img2, img3, img4];

/* ---------- APPLE STYLE MASONRY CARD ---------- */
function MasonryCard({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease: [0.25, 0.1, 0.25, 1], // Apple-like easing
      }}
      className="
        relative w-full cursor-pointer overflow-hidden bg-white shadow-sm
        mb-0 sm:mb-5
        rounded-none sm:rounded-3xl
      "
      style={{
        border: "1px solid oklch(0.25 0.07 260 / 0.12)",
      }}
    >
      <img
        src={src}
        className="
          w-full

          /* 📱 MOBILE: full image visible */
          h-[42vh] object-contain

          /* 🖥️ DESKTOP: cinematic crop */
          sm:h-auto sm:object-cover

          transition duration-700 hover:scale-105
        "
      />
    </motion.div>
  );
}

/* ---------- PAGE ---------- */
function Page() {
  const [selected, setSelected] = useState<number | null>(null);

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % IMAGES.length);
  };

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + IMAGES.length) % IMAGES.length);
  };

  /* lock scroll */
  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <>
      <SubPage
        title="Photo Gallery"
        eyebrow="Life in Pictures"
        description="A glimpse of life at Acacia Crest — classrooms, fields, stages and community."
        breadcrumb={[{ label: "Gallery" }]}
      />

      {/* SECTION */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="container mx-auto px-0 sm:px-6">

          {/* HEADER */}
          <div className="mb-6 sm:mb-10 px-4 sm:px-6 text-center">

            {/* 🟡 GOLD SUBTITLE */}
            <div className="flex justify-center mb-3">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm"
                style={{
                  borderColor: "oklch(0.78 0.14 85)",
                  color: "oklch(0.78 0.14 85)",
                }}
              >
                <Camera size={14} />
                Capturing Memories
              </div>
            </div>

            {/* 🔵 NAVY TITLE */}
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold"
              style={{ color: "oklch(0.25 0.07 260)" }}
            >
              Explore Our Campus Life
            </h2>

            <p
              className="mx-auto mt-3 max-w-2xl text-sm sm:text-base"
              style={{ color: "oklch(0.25 0.07 260 / 0.75)" }}
            >
              Every photograph tells a story of growth, excellence, friendship
              and discovery at Acacia Crest Senior School.
            </p>
          </div>

          {/* MASONRY (TRUE COLUMN LAYOUT) */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5 sm:space-y-0">
            {IMAGES.map((src, index) => (
              <MasonryCard
                key={index}
                src={src}
                index={index}
                onClick={() => setSelected(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">

            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 text-white"
            >
              <X size={26} />
            </button>

            {/* PREV */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white"
            >
              <ChevronLeft size={34} />
            </button>

            {/* NEXT */}
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white"
            >
              <ChevronRight size={34} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={selected}
              src={IMAGES[selected]}
              initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              className="max-h-[85vh] w-full max-w-5xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}