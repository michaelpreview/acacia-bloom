import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Acacia Crest Senior School" },
      { name: "description", content: "How we collect, use and protect personal data." },
      { property: "og:title", content: "Privacy Policy — Acacia Crest" },
      { property: "og:description", content: "How we collect, use and protect personal data." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Privacy Policy"
      eyebrow="Legal"
      description="How we collect, use and protect personal data."
      breadcrumb={[{"label":"Legal"},{"label":"Privacy"}]}
      sections={[{"heading":"Our commitment","body":"Acacia Crest complies with Kenya’s Data Protection Act, 2019. We collect only the data we need to run the school and protect it with appropriate safeguards."},{"heading":"What we collect","bullets":["Learner academic, health and safeguarding records","Parent contact and billing information","Website analytics (anonymised)"]},{"heading":"Your rights","body":"You may request a copy of your data, ask for corrections or, where lawful, request deletion. Write to dpo@acaciacrest.sc.ke."}]}
    />
  );
}
