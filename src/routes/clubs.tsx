import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SubPage } from "@/components/site/SubPage";

import presidentsAward from "@/assets/presidents-award.webp";
import scouts from "@/assets/scouts.webp";
import music from "@/assets/music.webp";
import christianUnion from "@/assets/christian-union.webp";
import ycs from "@/assets/ycs.webp";
import stJohns from "@/assets/st-johns.webp";
import entrepreneurship from "@/assets/entrepreneurship.webp";
import coding from "@/assets/coding.webp";
import scienceClub from "@/assets/science-club.webp";
import art from "@/assets/art.webp";
import mathematics from "@/assets/mathematics.webp";
import journalism from "@/assets/journalism.webp";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Clubs & Societies — Acacia Crest Senior School" },
      {
        name: "description",
        content:
          "Discover the wide range of clubs and societies that enrich life at Acacia Crest beyond the classroom.",
      },
      {
        property: "og:title",
        content: "Clubs & Societies — Acacia Crest",
      },
      {
        property: "og:description",
        content:
          "Discover the wide range of clubs and societies that enrich life at Acacia Crest beyond the classroom.",
      },
    ],
  }),
  component: Page,
});

const clubs = [
  {
    title: "The President's Award – Kenya",
    description:
      "A nationally recognised programme challenging students to grow through adventurous journeys, community service, skills development and physical activity.",
    image: presidentsAward,
  },
  {
    title: "Scouts",
    description:
      "Building leadership, resilience and teamwork through camping, survival skills and community projects.",
    image: scouts,
  },
  {
    title: "Music",
    description:
      "Choir, instruments and solo performance nurturing talent across genres.",
    image: music,
  },
  {
    title: "Christian Union",
    description:
      "A vibrant fellowship offering devotionals, worship and outreach activities.",
    image: christianUnion,
  },
  {
    title: "YCS",
    description:
      "Young Christian Students developing reflection and leadership through See-Judge-Act.",
    image: ycs,
  },
  {
    title: "St. John's Ambulance",
    description:
      "First aid training and emergency response skills for real-world readiness.",
    image: stJohns,
  },
  {
    title: "Entrepreneurship",
    description:
      "Students run mini-businesses and learn real-world financial literacy.",
    image: entrepreneurship,
  },
  {
    title: "Coding",
    description:
      "Web, apps, robotics and AI projects turning ideas into solutions.",
    image: coding,
  },
  {
    title: "Science Club",
    description:
      "Experiments and STEM competitions beyond the classroom.",
    image: scienceClub,
  },
  {
    title: "Art",
    description:
      "Painting, sculpture and creative expression through visual arts.",
    image: art,
  },
  {
    title: "Mathematics",
    description:
      "Problem solving, olympiads and analytical thinking challenges.",
    image: mathematics,
  },
  {
    title: "Journalism",
    description:
      "School newspaper, reporting and storytelling with integrity.",
    image: journalism,
  },
];

function ClubsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
      {clubs.map((club) => (
        <ClubCard key={club.title} club={club} />
      ))}
    </div>
  );
}

function ClubCard({
  club,
}: {
  club: (typeof clubs)[number];
}) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <div
      className="relative h-64 sm:h-72 md:h-80 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => {
        if (!isTouch) setFlipped(true);
      }}
      onMouseLeave={() => {
        if (!isTouch) setFlipped(false);
      }}
    >
      {/* FLIP WRAPPER */}
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ───── FRONT ───── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-[oklch(0.25_0.07_260/0.10)] shadow-sm"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={club.image}
            alt={club.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-lg font-semibold text-white drop-shadow">
              {club.title}
            </h3>
          </div>
        </div>

        {/* ───── BACK ───── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-[oklch(0.25_0.07_260/0.10)] shadow-sm"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={club.image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover scale-110 blur-sm"
          />

          <div className="absolute inset-0 bg-[oklch(0.25_0.07_260/0.72)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.14_85/0.22),transparent_60%)]" />

          <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              {club.title}
            </h3>

            <div className="my-4 h-0.5 w-16 rounded-full bg-[oklch(0.78_0.14_85)]" />

            <p className="text-sm leading-relaxed text-white/80">
              {club.description}
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[oklch(0.78_0.14_85)]" />
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <SubPage
        title="Clubs & Societies"
        eyebrow="Beyond the Classroom"
        description="Discover the wide range of clubs and societies that enrich life at Acacia Crest beyond the classroom."
        breadcrumb={[{ label: "Clubs & Societies" }]}
      />

      <ClubsGrid />
    </>
  );
}