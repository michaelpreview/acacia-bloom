import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Acacia Crest Senior School" },
      { name: "description", content: "Terms governing the use of this website and school services." },
      { property: "og:title", content: "Terms & Conditions — Acacia Crest" },
      { property: "og:description", content: "Terms governing the use of this website and school services." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Terms & Conditions"
      eyebrow="Legal"
      description="Terms governing the use of this website and school services."
      breadcrumb={[{"label":"Legal"},{"label":"Terms"}]}
      sections={[{"heading":"Use of this website","body":"Content on this site is provided for information about Acacia Crest. While we keep it up to date, the school may make changes without notice."},{"heading":"Intellectual property","body":"All text, images and branding on this site belong to Acacia Crest unless otherwise credited."},{"heading":"Liability","body":"The school is not liable for losses arising from third-party links or content shared by users on external platforms."}]}
    />
  );
}
