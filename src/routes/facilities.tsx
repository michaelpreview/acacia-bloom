import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  FlaskConical,
  Trophy,
  Laptop,
  Theater,
  Library,
  Dumbbell,
  HeartPulse,
  House,
} from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Acacia Crest Senior School" },
      {
        name: "description",
        content:
          "A secure, modern campus designed around teaching, sport, service and rest.",
      },
      {
        property: "og:title",
        content: "Facilities — Acacia Crest",
      },
      {
        property: "og:description",
        content:
          "A secure, modern campus designed around teaching, sport, service and rest.",
      },
    ],
  }),
  component: Page,
});

const facilities: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Small Size Classrooms",
    description:
      "Intimate, bright classrooms capped at small group sizes ensure every student gets direct attention. Projector-equipped and cross-ventilated for year-round comfort.",
    icon: BookOpen,
  },
  {
    title: "Fully Equipped Laboratories",
    description:
      "Dedicated labs for Biology, Chemistry and Physics, each fitted with modern apparatus, fume cupboards and full technician support for safe, hands-on science.",
    icon: FlaskConical,
  },
  {
    title: "Sports",
    description:
      "Full-size football pitch, basketball and volleyball courts, an athletics track, and indoor games hall give students room to train, compete and unwind every day.",
    icon: Trophy,
  },
  {
    title: "Technology Centre",
    description:
      "High-speed fibre internet, modern workstations, a dedicated coding room and maker-space tools prepare students for a digital-first world.",
    icon: Laptop,
  },
  {
    title: "Modern Theatre",
    description:
      "A fully-fitted performing arts theatre with professional staging, lighting rigs and acoustic panels, hosting drama, debates, assemblies and visiting speakers.",
    icon: Theater,
  },
  {
    title: "Resource Centre",
    description:
      "Over 12,000 volumes alongside digital research databases, silent study zones and group reading bays — the academic heart of the campus.",
    icon: Library,
  },
  {
    title: "Fully Equipped Gym",
    description:
      "Cardio machines, free weights, resistance stations and a dedicated stretch zone, supervised by qualified fitness instructors for student wellness.",
    icon: Dumbbell,
  },
  {
    title: "Sanatorium",
    description:
      "An on-campus medical unit staffed by qualified nurses around the clock, with a sick bay, consultation rooms and emergency response protocols.",
    icon: HeartPulse,
  },
  {
    title: "Hostels",
    description:
      "Comfortable single-sex dormitories with houseparents in residence, dedicated prep rooms, secure lockers and 24-hour security patrols for a safe home away from home.",
    icon: House,
  },
];

function FacilitiesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard
            key={facility.title}
            facility={facility}
          />
        ))}
      </div>
    </section>
  );
}

function FacilityCard({
  facility,
}: {
  facility: (typeof facilities)[number];
}) {
  const Icon = facility.icon;

  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl border border-[oklch(0.25_0.07_260/0.10)] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
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
          {facility.title}
        </h3>

        {/* Divider */}
        <div className="my-4 h-0.5 w-12 rounded-full bg-[oklch(0.78_0.14_85)] transition-all duration-500 group-hover:w-20" />

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-600">
          {facility.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 origin-center scale-x-0 bg-[oklch(0.78_0.14_85)] transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}

function Page() {
  return (
    <>
      <SubPage
        title="Facilities"
        eyebrow="Built for Learning"
        description="A secure, modern campus designed around teaching, sport, service and rest."
        breadcrumb={[{ label: "Facilities" }]}
        intro={undefined}
        highlights={undefined}
      />

      <FacilitiesGrid />
    </>
  );
}