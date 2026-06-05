import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Acacia Crest Senior School" },
      { name: "description", content: "A rigorous CBC senior curriculum across three Kenyan pathways." },
      { property: "og:title", content: "Academics — Acacia Crest" },
      { property: "og:description", content: "A rigorous CBC senior curriculum across three Kenyan pathways." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Academics"
      eyebrow="Curriculum"
      description="A rigorous CBC senior curriculum across three Kenyan pathways."
      breadcrumb={[{"label":"Academics"}]}
      intro="Acacia Crest delivers the Kenyan Senior School curriculum with depth, choice and strong university preparation."
      highlights={[{"title":"STEM Pathway","description":"For learners pursuing engineering, medicine, computing, data and the pure sciences."},{"title":"Social Sciences Pathway","description":"For learners interested in law, business, economics, public policy and the humanities."},{"title":"Arts & Sports Science Pathway","description":"For learners with vocations in creative arts, performance, design and sports science."}]}
      sections={[{"heading":"How we teach","bullets":["Concept-first lessons with regular formative checks","Project work that connects subjects to the real world","Mandatory practicals in all sciences","Reading, writing and speaking embedded in every subject"]}]}
      cta={{"label":"See subjects offered","to":"/academics/subjects"}}
    />
  );
}
