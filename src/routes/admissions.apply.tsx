import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/admissions/apply")({
  head: () => ({
    meta: [
      { title: "How to Apply — Acacia Crest Senior School" },
      { name: "description", content: "Four clear steps from first enquiry to confirmed place." },
      { property: "og:title", content: "How to Apply — Acacia Crest" },
      { property: "og:description", content: "Four clear steps from first enquiry to confirmed place." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="How to Apply"
      eyebrow="Step by Step"
      description="Four clear steps from first enquiry to confirmed place."
      breadcrumb={[{"label":"Admissions","to":"/admissions"},{"label":"Apply"}]}
      sections={[{"heading":"1. Enquire","body":"Submit the enquiry form on our Contact page or call the admissions office. We send back the application pack within one working day."},{"heading":"2. Apply","body":"Complete the application form and return it with the application fee, the last two school reports, a copy of the birth certificate and the learner’s assessment report."},{"heading":"3. Assess & Interview","body":"Shortlisted learners sit a short assessment and attend a short interview with a member of senior leadership. Parents are invited to a separate conversation."},{"heading":"4. Offer & Place","body":"Successful applicants receive a written offer. The place is confirmed on payment of the first-term fees by the date stated in the letter."}]}
      cta={{"label":"Contact the admissions office","to":"/contact"}}
    />
  );
}
