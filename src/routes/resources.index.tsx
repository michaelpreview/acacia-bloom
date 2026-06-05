import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Downloads & Resources — Acacia Crest Senior School" },
      { name: "description", content: "Key documents and references for parents and learners." },
      { property: "og:title", content: "Downloads & Resources — Acacia Crest" },
      { property: "og:description", content: "Key documents and references for parents and learners." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Downloads & Resources"
      eyebrow="Helpful Files"
      description="Key documents and references for parents and learners."
      breadcrumb={[{"label":"Resources"}]}
      highlights={[{"title":"School Handbook","description":"Everything parents need to know about life and learning at Acacia Crest."},{"title":"Term Dates","description":"Official term dates and key calendar events for the academic year."},{"title":"Uniform Guidelines","description":"Required items, suppliers and grooming standards."},{"title":"Application Form","description":"Downloadable admissions pack — also available on request."}]}
    />
  );
}
