import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/legal/child-protection")({
  head: () => ({
    meta: [
      { title: "Child Protection Policy — Acacia Crest Senior School" },
      { name: "description", content: "Our published safeguarding standards and reporting pathways." },
      { property: "og:title", content: "Child Protection Policy — Acacia Crest" },
      { property: "og:description", content: "Our published safeguarding standards and reporting pathways." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Child Protection Policy"
      eyebrow="Safeguarding"
      description="Our published safeguarding standards and reporting pathways."
      breadcrumb={[{"label":"Legal"},{"label":"Child Protection"}]}
      sections={[{"heading":"Our standard","body":"Acacia Crest operates a zero-tolerance policy on any form of abuse, neglect or exploitation. The welfare of the child is paramount."},{"heading":"Reporting concerns","bullets":["Speak to the Designated Safeguarding Lead or any teacher you trust","Email safeguarding@acaciacrest.sc.ke","In an emergency, call the Principal’s office or local authorities"]},{"heading":"Our promise","body":"Every concern is taken seriously, investigated promptly and handled with discretion."}]}
    />
  );
}
