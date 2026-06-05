import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logoAsset from "@/assets/logo.png";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/AcaciaCrestSeniorSchool",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/acaciacrest_schools/",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://x.com/Acaciaschools2",
    label: "X",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCuUk1KnI2E-f5UKLik-wsqg",
    label: "YouTube",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-4">
              <img src={logoAsset} alt="Acacia Crest Senior School" className="h-14 w-auto" />
              <div>
                <h3 className="font-display text-2xl text-gold">Acacia Crest</h3>
                <p className="text-sm text-navy-foreground/70">Shaping Futures</p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-navy-foreground/75">
              A leading Kenyan senior school building principled, future-ready leaders through
              academic excellence and holistic growth.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-navy-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:px-4">
            <h4 className="mb-4 font-display text-lg text-gold">Explore</h4>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                ["About", "/about"],
                ["Admissions", "/admissions"],
                ["Academics", "/academics"],
                ["Student Life", "/student-life"],
                ["Gallery", "/gallery"],
                ["News", "/news"],
                ["Calendar", "/resources/calendar"],
                ["FAQs", "/resources/faq"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-navy-foreground/70 transition hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg text-gold">Get in Touch</h4>

            <ul className="space-y-3 text-sm text-navy-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Acacia Crest Senior School, Kenya</span>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>+254 717 770 767</span> |
                <span>+254 020 238 2656</span>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>acaciacrest@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-navy-foreground/60 md:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Acacia Crest Senior School. All rights reserved.</p>

          <div className="flex gap-5">
            <Link to="/legal/privacy" className="transition hover:text-gold">
              Privacy
            </Link>

            <Link to="/legal/terms" className="transition hover:text-gold">
              Terms
            </Link>

            <Link to="/legal/cookies" className="transition hover:text-gold">
              Cookies
            </Link>

            <Link to="/legal/child-protection" className="transition hover:text-gold">
              Child Protection
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
