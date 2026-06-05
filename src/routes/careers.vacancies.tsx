import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/careers/vacancies")({
  head: () => ({
    meta: [
      { title: "Current Vacancies — Acacia Crest Senior School" },
      { name: "description", content: "Current openings and how to apply." },
      { property: "og:title", content: "Current Vacancies — Acacia Crest" },
      { property: "og:description", content: "Current openings and how to apply." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Current Vacancies"
      eyebrow="Open Roles"
      description="Current openings and how to apply."
      breadcrumb={[{"label":"Careers","to":"/careers"},{"label":"Vacancies"}]}
      sections={[{"heading":"How to apply","body":"Send a CV, cover letter, copies of academic certificates and TSC number (where applicable) to hr@acaciacrest.sc.ke. Quote the role title in the subject line."},{"heading":"What we look for","bullets":["Strong subject knowledge and proven classroom impact","Genuine warmth and high expectations for every learner","Willingness to coach, mentor and contribute beyond the timetable","Integrity, professionalism and a growth mindset"]},{"heading":"Open application","body":"We accept open applications throughout the year. Strong candidates are kept on file and contacted as vacancies open."}]}
    />
  );
}
