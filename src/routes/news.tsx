import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";
import boychildImage from "@/assets/boychild.webp";

export const Route = createFileRoute("/news")({
  head: () => ({
    title: "School News — Acacia Crest Senior School",
    meta: [
      {
        name: "description",
        content:
          "Stories from the classrooms, fields and stages of Acacia Crest.",
      },
      {
        property: "og:title",
        content: "School News — Acacia Crest",
      },
      {
        property: "og:description",
        content:
          "Stories from the classrooms, fields and stages of Acacia Crest.",
      },
    ],
  }),
  component: Page,
});

const FLIPBOOK_URL = "https://heyzine.com/flip-book/3e6861b2f4.html";

function FlipbookPreview() {
  return (
    <a
      href={FLIPBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      aria-label="Open the Acacia Crest Gazette flipbook"
    >
      {/* Cover image */}
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={boychildImage}
          alt="Acacia Crest Gazette cover"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />

      {/* Centre open button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-emerald-700"
          >
            <path
              d="M2 6.5C2 5.119 3.119 4 4.5 4H11v16H4.5A2.5 2.5 0 0 1 2 17.5v-11Z"
              fill="currentColor"
              fillOpacity=".15"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M22 6.5C22 5.119 20.881 4 19.5 4H13v16h6.5A2.5 2.5 0 0 0 22 17.5v-11Z"
              fill="currentColor"
              fillOpacity=".15"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M11 4v16M13 4v16"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>


      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4 text-left">

        <p className="text-lg font-bold text-white">
          The Boychild
        </p>
      </div>
    </a>
  );
}

function Page() {
  return (
    <>
      <SubPage
        title="School News"
        eyebrow="What's New"
        description="Stories from the classrooms, fields and stages of Acacia Crest."
        breadcrumb={[{ label: "News" }]}
      />

      <section className="bg-stone-50 py-1 sm:py-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">
              Latest Edition
            </p>

            <h2 className="text-3xl font-bold text-stone-800 sm:text-4xl">
              The Acacia Crest Blog
            </h2>

            <p className="mt-3 text-stone-500">
              Flip through our termly articles — packed with stories,
              achievements, results, and community highlights.
            </p>
          </div>

          <FlipbookPreview />

        </div>
      </section>
    </>
  );
}