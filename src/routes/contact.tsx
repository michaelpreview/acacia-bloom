import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Acacia Crest Senior School" },
      {
        name: "description",
        content:
          "Visit, call, write or send an inquiry — we'd love to hear from you.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        title="We'd love to hear from you"
        eyebrow="Contact"
        description="Whether you're a prospective parent, current family, alumni or partner — reach out and our team will respond promptly."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-navy">
                Get in touch
              </h2>
              <p className="text-muted-foreground mt-2">
                Our admissions and front office team is available Monday–Friday,
                8:00am–5:00pm, and Saturday 9:00am–1:00pm.
              </p>
            </div>

            {[
              {
                icon: MapPin,
                title: "Visit Us",
                body: "Acacia Crest Senior School, Kenya",
              },
              {
                icon: Phone,
                title: "Call Us",
                body: "+254 717 770 767 | +254 020 238 2656",
              },
              {
                icon: Mail,
                title: "Write to Us",
                body: "acaciacrest@gmail.com",
              },
              {
                icon: Clock,
                title: "Office Hours",
                body: "Mon–Fri 8am–5pm · Sat 9am–1pm",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-elegant space-y-5"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-navy">
                Send an inquiry
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                We aim to reply within one business day.
              </p>
            </div>

            {sent ? (
              <div className="bg-gold/20 text-navy p-6 rounded-2xl">
                <div className="font-display text-xl font-bold">
                  Thank you!
                </div>
                <p className="text-sm mt-1">
                  Your inquiry has been received. Our team will respond
                  shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="First name" name="first" required />
                  <Field label="Last name" name="last" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    I'm inquiring about
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-gold focus:outline-none">
                    <option>Admissions</option>
                    <option>Campus visit</option>
                    <option>Fees & bursaries</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold hover:bg-primary/90 transition inline-flex items-center justify-center gap-2 shadow-elegant"
                >
                  Send inquiry
                  <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant"
          >
            <div className="px-8 py-6 border-b border-border">
              <h2 className="font-display text-3xl font-bold text-navy">
                Find Us
              </h2>
              <p className="text-muted-foreground mt-2">
                Visit our beautiful campus and experience the Acacia Crest
                community firsthand.
              </p>
            </div>

            <iframe
              title="Acacia Crest Senior School Map"
              src="https://www.google.com/maps?q=Acacia+Crest+Senior+School,+Kenya&t=k&z=18&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-navy mb-2"
      >
        {label}
        {required && " *"}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-gold focus:outline-none"
      />
    </div>
  );
}