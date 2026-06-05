import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative h-14 w-14">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="25" fill="none" stroke="currentColor" strokeWidth="3" className="text-border" />
              <motion.circle
                cx="28" cy="28" r="25"
                fill="none" stroke="currentColor" strokeWidth="3"
                className="text-gold"
                pathLength={pathLength}
                strokeLinecap="round"
                style={{ strokeDasharray: "1 1" } as React.CSSProperties}
              />
            </svg>
            <div className="absolute inset-1.5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-elegant group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
              <ArrowUp className="h-5 w-5" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
