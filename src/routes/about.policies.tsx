import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/about/policies")({
  head: () => ({
    meta: [
      { title: "School Policies — Acacia Crest Senior School" },
      { name: "description", content: "The published policies that govern life, learning and safety at Acacia Crest." },
      { property: "og:title", content: "School Policies — Acacia Crest" },
      { property: "og:description", content: "The published policies that govern life, learning and safety at Acacia Crest." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="School Policies"
      eyebrow="How We Operate"
      description="The published policies that govern life, learning and safety at Acacia Crest."
      breadcrumb={[{"label":"About","to":"/about"},{"label":"Policies"}]}
      highlights={[{"title":"Safeguarding & Child Protection","description":"A zero-tolerance framework for any form of abuse, with clear reporting pathways."},{"title":"Academic Honesty","description":"Standards for original work, assessment integrity and consequences for breaches."},{"title":"Behaviour & Discipline","description":"A restorative, escalation-based approach that protects learning and dignity."},{"title":"Anti-Bullying","description":"Active prevention, fast investigation and trained mentors at every year group."},{"title":"Health & Safety","description":"Risk assessments, fire drills, first aid and supervised activities at all times."},{"title":"Data Protection","description":"Compliant with Kenya’s Data Protection Act, 2019."}]}
      cta={{"label":"Read the full policies","to":"/resources"}}
    />
  );
}
