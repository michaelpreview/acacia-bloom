import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoAsset from "@/assets/logo.png";
import { cn } from "@/lib/utils";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/our-story",
    children: [
      { label: "Our Story", to: "/our-story" },
      { label: "Our Staff", to: "/about/staff" },
      { label: "Curriculum", to: "/academics" },
      { label: "Gallery", to: "/gallery" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    label: "Programmes",
    to: "/facilities",
    children: [
      { label: "Facilities", to: "/facilities" },
      { label: "Clubs", to: "/clubs" },
    ],
  },
  { label: "News", to: "/news" },
  {
    label: "Resources",
    to: "/resources/calendar",
    children: [
      { label: "School Calendar", to: "/resources/calendar" },
      { label: "FAQs", to: "/resources/faq" },
    ],
  },

  { label: "Contact Us", to: "/contact" },
];

function isActive(pathname: string, to: string, item?: NavItem) {
  if (to === "/") return pathname === "/";
  if (pathname === to || pathname.startsWith(to + "/")) return true;
  if (item?.children?.some((c) => pathname === c.to || pathname.startsWith(c.to + "/")))
    return true;
  return false;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-card border-b border-border"
          : "bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group min-w-0">
          <div className="relative h-14  items-center justify-center shrink-0 overflow-hidden transition-transform group-hover:scale-105">
            <img
              src={logoAsset}
              alt="Acacia Crest Senior School crest"
              className="h-12 w-12 object-contain"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-display font-bold text-navy text-[19px] tracking-tight truncate">
              Acacia Crest
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
              Senior School · Kenya
            </span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = isActive(pathname, item.to, item);
            return (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium inline-flex items-center gap-1 rounded-md transition-colors",
                    active ? "text-primary" : "text-foreground/80 hover:text-primary",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
                  )}
                  <span
                    className={cn(
                      "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gold origin-left transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-1 group-hover:translate-y-0">
                    <div className="min-w-[220px] rounded-xl border border-border bg-popover shadow-elegant p-2">
                      {item.children.map((c) => {
                        const cActive = pathname === c.to || pathname.startsWith(c.to + "/");
                        return (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-lg transition-colors",
                              cActive
                                ? "bg-accent text-accent-foreground font-semibold"
                                : "hover:bg-accent hover:text-accent-foreground",
                            )}
                          >
                            {c.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/admissions/apply"
            className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:bg-primary/90 transition shadow-card"
          >
            Apply Now
          </Link>
        </div>

        <button
          className="lg:hidden p-2 relative"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
              className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto"
            >
              {NAV.map((item) => {
                const active = isActive(pathname, item.to, item);
                return (
                  <motion.div
                    key={item.label}
                    variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                  >
                    {item.children ? (
                      <details className="group">
                        <summary
                          className={cn(
                            "flex items-center justify-between py-2 px-3 rounded-lg hover:bg-accent cursor-pointer text-sm font-medium",
                            active && "text-primary",
                          )}
                        >
                          <Link to={item.to}>{item.label}</Link>
                          <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
                        </summary>
                        <div className="ml-4 pl-3 border-l border-border space-y-1 mt-1">
                          {item.children.map((c) => {
                            const cActive = pathname === c.to || pathname.startsWith(c.to + "/");
                            return (
                              <Link
                                key={c.to}
                                to={c.to}
                                className={cn(
                                  "block py-1.5 px-3 text-sm rounded",
                                  cActive
                                    ? "text-primary font-semibold"
                                    : "text-muted-foreground hover:text-primary",
                                )}
                              >
                                {c.label}
                              </Link>
                            );
                          })}
                        </div>
                      </details>
                    ) : (
                      <Link
                        to={item.to}
                        className={cn(
                          "block py-2 px-3 rounded-lg text-sm font-medium",
                          active ? "text-primary bg-accent" : "hover:bg-accent",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              <motion.div variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                <Link
                  to="/admissions/apply"
                  className="block text-center mt-4 rounded-full bg-primary text-primary-foreground py-3 font-semibold"
                >
                  Apply Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
