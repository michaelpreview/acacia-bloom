import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/legal/health-safety")({
  head: () => ({
    meta: [
      { title: "Health & Safety Policy — Acacia Crest Senior School" },
      { name: "description", content: "How we keep learners and staff safe on campus and on trips." },
      { property: "og:title", content: "Health & Safety Policy — Acacia Crest" },
      { property: "og:description", content: "How we keep learners and staff safe on campus and on trips." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Health & Safety Policy"
      eyebrow="Safe Spaces"
      description="How we keep learners and staff safe on campus and on trips."
      breadcrumb={[{"label":"Legal"},{"label":"Health & Safety"}]}
      sections={[{"heading":"On campus","bullets":["Trained first-aid staff and a campus sanatorium","Fire drills each term and clearly marked exits","Risk assessments for labs, sports and trips","24-hour security and controlled access"]},{"heading":"Off campus","body":"Every external trip is risk-assessed, ratio-staffed, insured and approved by senior leadership before departure."}]}
    />
  );
}
