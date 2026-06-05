import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/about/values")({
  head: () => ({
    meta: [
      { title: "Core Values — Acacia Crest Senior School" },
      { name: "description", content: "Five values that define how learners, staff and parents show up every day." },
      { property: "og:title", content: "Core Values — Acacia Crest" },
      { property: "og:description", content: "Five values that define how learners, staff and parents show up every day." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Core Values"
      eyebrow="How We Live"
      description="Five values that define how learners, staff and parents show up every day."
      breadcrumb={[{"label":"About","to":"/about"},{"label":"Core Values"}]}
      highlights={[{"title":"Excellence","description":"We pursue our best in every classroom, every match and every quiet act of preparation."},{"title":"Integrity","description":"We do what is right when it costs us — honesty in academic work, honesty in life."},{"title":"Respect","description":"We treat every person — student, staff, support team and visitor — with dignity."},{"title":"Responsibility","description":"We own our learning, our choices, our environment and our community."},{"title":"Service","description":"Leadership is service. We use our gifts to lift others, on and off campus."}]}
    />
  );
}
