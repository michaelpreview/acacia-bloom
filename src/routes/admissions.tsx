import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Acacia Crest Senior School" },
      { name: "description", content: "A transparent, merit-based process — open year-round, subject to availability." },
      { property: "og:title", content: "Admissions — Acacia Crest" },
      { property: "og:description", content: "A transparent, merit-based process — open year-round, subject to availability." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Admissions"
      eyebrow="Join Acacia Crest"
      description="A transparent, merit-based process — open year-round, subject to availability."
      breadcrumb={[{"label":"Admissions"}]}
      intro="We welcome learners and families who share our commitment to academic excellence, character and service."
      highlights={[{"title":"Open year-round","description":"Applications accepted any term, subject to spaces. Early application is encouraged."},{"title":"Merit-based","description":"Decisions consider academic record, pathway fit and an interview."},{"title":"Boarding & day","description":"Choose between full-board placement or day scholarship."},{"title":"Financial aid","description":"A limited number of bursaries are offered each year on need and merit."}]}
      cta={{"label":"Start your application","to":"/admissions/apply"}}
    />
  );
}
