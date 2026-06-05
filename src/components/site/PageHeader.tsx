import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png"; // Change path if necessary

export function PageHeader({
  title,
  eyebrow,
  description,
  breadcrumb,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,200,80,0.3), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-6">
            <Link
              to="/"
              className="hover:text-gold flex items-center gap-1"
            >
              <Home className="h-3 w-3" />
              Home
            </Link>

            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-gold">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-gold">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid lg:grid-cols-[1fr_220px] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow && (
              <div className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-semibold">
                {eyebrow}
              </div>
            )}

            <h1 className="font-display text-4xl md:text-6xl font-bold text-balance max-w-4xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>

          {/* Logo on the right side of the gradient header */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-44 xl:w-52 h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}