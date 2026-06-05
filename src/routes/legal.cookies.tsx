import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Acacia Crest Senior School" },
      { name: "description", content: "The cookies this website uses and how to control them." },
      { property: "og:title", content: "Cookie Policy — Acacia Crest" },
      { property: "og:description", content: "The cookies this website uses and how to control them." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Cookie Policy"
      eyebrow="Legal"
      description="The cookies this website uses and how to control them."
      breadcrumb={[{"label":"Legal"},{"label":"Cookies"}]}
      sections={[{"heading":"Cookies we use","bullets":["Strictly necessary cookies for site function","Anonymised analytics to improve content","No advertising or third-party tracking cookies"]},{"heading":"Your choices","body":"You can clear or block cookies through your browser settings. Some features may not work if strictly necessary cookies are blocked."}]}
    />
  );
}
