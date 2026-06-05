import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/news/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Recognition — Acacia Crest Senior School" },
      { name: "description", content: "Highlights from learners, teams and staff who have earned recognition." },
      { property: "og:title", content: "Awards & Recognition — Acacia Crest" },
      { property: "og:description", content: "Highlights from learners, teams and staff who have earned recognition." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Awards & Recognition"
      eyebrow="Excellence Honoured"
      description="Highlights from learners, teams and staff who have earned recognition."
      breadcrumb={[{"label":"News","to":"/news"},{"label":"Awards"}]}
      sections={[{"heading":"Recent recognitions","bullets":["County-level honours in Science Congress","Regional medals in athletics and football","Drama Festival shortlists and adjudicator awards","KCSE top performers featured in the local press"]}]}
    />
  );
}
