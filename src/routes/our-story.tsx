import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";
import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  ShieldCheck,
  Scale,
  Crown,
  Telescope,
  Target,
  Compass,
  Sprout,
} from "lucide-react";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Acacia Crest Senior School" },
      {
        name: "description",
        content:
          "Shaping young men of grit, confidence and purpose through academic excellence and holistic growth.",
      },
      {
        property: "og:title",
        content: "Our Story — Acacia Crest",
      },
      {
        property: "og:description",
        content:
          "Shaping young men of grit, confidence and purpose through academic excellence and holistic growth.",
      },
    ],
  }),
  component: Page,
});

// ─── Values ────────────────────────────────────────────────────────────────

const values: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Knowledge",
    description:
      "We cultivate a deep love of learning, encouraging every student to question, explore and build a solid intellectual foundation that lasts a lifetime.",
    icon: BookMarked,
  },
  {
    title: "Integrity",
    description:
      "We hold honesty and transparency as non-negotiable. Students learn to stand by their word, own their mistakes and act rightly even when no one is watching.",
    icon: ShieldCheck,
  },
  {
    title: "Ethics",
    description:
      "Sound moral judgement guides everything we do. We equip students with the frameworks to navigate complex situations with fairness and compassion.",
    icon: Scale,
  },
  {
    title: "Leadership",
    description:
      "True leaders serve before they command. Through responsibility, teamwork and example, we develop students who inspire those around them.",
    icon: Crown,
  },
  {
    title: "Vision",
    description:
      "We nurture forward-thinking young men who can see beyond the present, set bold goals and pursue them with clarity and perseverance.",
    icon: Telescope,
  },
];

// ─── Values Grid ────────────────────────────────────────────────────────────

function ValuesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.14_85)]">
          What We Stand For
        </p>
        <h2 className="mt-2 text-3xl font-bold text-[oklch(0.25_0.07_260)]">
          Our Core Values
        </h2>
      </div>

      {/* 5 values: 3 on first row, 2 centred on second */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <ValueCard
            key={value.title}
            value={value}
            // Centre the last two cards when on a 3-col grid
            className={
              index === 5
                ? "lg:col-start-1 lg:col-end-2 lg:mx-auto lg:w-full"
                : index === 5
                  ? "lg:col-start-2 lg:col-end-4 lg:mx-auto lg:w-1/2"
                  : ""
            }
          />
        ))}
      </div>
    </section>
  );
}

function ValueCard({
  value,
  className = "",
}: {
  value: (typeof values)[number];
  className?: string;
}) {
  const Icon = value.icon;

  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-2xl border border-[oklch(0.25_0.07_260/0.10)] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.14_85/0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
        {/* Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[oklch(0.78_0.14_85/0.35)] bg-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon
            size={42}
            strokeWidth={2}
            className="text-[oklch(0.25_0.07_260)]"
          />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-semibold leading-tight text-[oklch(0.25_0.07_260)]">
          {value.title}
        </h3>

        {/* Divider */}
        <div className="my-4 h-0.5 w-12 rounded-full bg-[oklch(0.78_0.14_85)] transition-all duration-500 group-hover:w-20" />

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-600">
          {value.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 origin-center scale-x-0 bg-[oklch(0.78_0.14_85)] transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}

// ─── Mission & Vision ───────────────────────────────────────────────────────

const pillars: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Our Vision",
    body: "To be the leading provider of good quality education.",
    icon: Target,
  },
  {
    title: "Our Mission",
    body: "To assist students acquire the best academic knowledge, spiritual wisdom and a positive approach to life by providing excellent academic tuition, world-class facilities and spiritual wealth — enabling them to set and pursue their goals with confidence.",
    icon: Compass,
  },
];

function MissionVision() {
  return (
    <section className="bg-[oklch(0.97_0.02_260)] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.14_85)]">
            Purpose &amp; Direction
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[oklch(0.25_0.07_260)]">
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl border border-[oklch(0.25_0.07_260/0.10)] bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.14_85/0.10),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[oklch(0.78_0.14_85/0.35)] bg-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon
                      size={32}
                      strokeWidth={2}
                      className="text-[oklch(0.25_0.07_260)]"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-[oklch(0.25_0.07_260)]">
                    {pillar.title}
                  </h3>

                  <div className="my-3 h-0.5 w-10 rounded-full bg-[oklch(0.78_0.14_85)] transition-all duration-500 group-hover:w-16" />

                  <p className="text-sm leading-relaxed text-slate-600">
                    {pillar.body}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 origin-center scale-x-0 bg-[oklch(0.78_0.14_85)] transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Story Section ──────────────────────────────────────────────────────────

const enrichmentPrograms = [
  "Various Sports Clubs",
  "Culinary Arts",
  "Scouts",
  "Music",
  "Debate",
  "Journalism",
  "Coding & Web Design",
  "The President's Award – Kenya (PA-K)",
];

function OurStorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.14_85)]">
          Who We Are
        </p>
        <h2 className="mt-2 text-3xl font-bold text-[oklch(0.25_0.07_260)]">
          Our Story
        </h2>
      </div>

      <div className="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-slate-600">
        <p>
          We believe in the holistic growth of a person. At Acacia Crest Senior
          School we have made it our business to see that our young men grow
          into fine, confident individuals made of grit and purpose. We mentor
          them to develop beyond academics by exposing them to diverse
          opportunities and learning experiences through our enrichment
          programmes.
        </p>
        <p>
          Through these programmes, students grow existing skills, discover new
          ones, thrive in co-curricular activities and find healthy outlets from
          the pressures of academic life — all in a well-guided, structured
          environment.
        </p>
      </div>

      {/* Enrichment programmes */}
      <div className="mx-auto mt-10 max-w-4xl">
        <div className="mb-4 flex items-center gap-3">
          <Sprout
            size={20}
            strokeWidth={2}
            className="text-[oklch(0.78_0.14_85)]"
          />
          <span className="text-sm font-semibold uppercase tracking-wider text-[oklch(0.25_0.07_260)]">
            Enrichment Programmes
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {enrichmentPrograms.map((program) => (
            <div
              key={program}
              className="group flex items-center gap-2 rounded-xl border border-[oklch(0.25_0.07_260/0.08)] bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(0.78_0.14_85/0.40)] hover:shadow-md"
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.78_0.14_85)] transition-transform duration-300 group-hover:scale-125" />
              <span className="text-xs font-medium text-[oklch(0.25_0.07_260)]">
                {program}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <p className="mx-auto mt-10 max-w-4xl text-base leading-relaxed text-slate-600">
        Our state-of-the-art facilities, small classroom sizes, trained
        teachers, accessible management team, dynamic teamwork and homely
        atmosphere all come together to create an environment that is genuinely
        conducive to learning and growing.
      </p>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

function Page() {
  return (
    <>
      <SubPage
        title="Our Story"
        eyebrow="Acacia Crest Senior School"
        description="Shaping young men of grit, confidence and purpose through academic excellence and holistic growth."
        breadcrumb={[{ label: "Our Story" }]}
        intro={undefined}
        highlights={undefined}
      />

      <OurStorySection />
      <MissionVision />
      <ValuesGrid />
    </>
  );
}