import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/resources/handbook")({
  head: () => ({
    meta: [
      { title: "School Handbook — Acacia Crest Senior School" },
      { name: "description", content: "The single reference for routines, expectations and policies." },
      { property: "og:title", content: "School Handbook — Acacia Crest" },
      { property: "og:description", content: "The single reference for routines, expectations and policies." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="School Handbook"
      eyebrow="For Parents & Learners"
      description="The single reference for routines, expectations and policies."
      breadcrumb={[{"label":"Resources","to":"/resources"},{"label":"Handbook"}]}
      sections={[{"heading":"What’s inside","bullets":["Daily routine and weekly timetable","Behaviour expectations and discipline procedure","Boarding and welfare guidelines","Communication channels and contact directory","Academic standards and homework policy"]},{"heading":"Getting a copy","body":"A printed handbook is issued at admission. A digital copy is sent to parents at the start of each academic year."}]}
    />
  );
}
