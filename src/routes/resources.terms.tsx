import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/resources/terms")({
  head: () => ({
    meta: [
      { title: "Term Dates — Acacia Crest Senior School" },
      { name: "description", content: "Official opening, closing and break dates for the academic year." },
      { property: "og:title", content: "Term Dates — Acacia Crest" },
      { property: "og:description", content: "Official opening, closing and break dates for the academic year." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Term Dates"
      eyebrow="Plan the Year"
      description="Official opening, closing and break dates for the academic year."
      breadcrumb={[{"label":"Resources","to":"/resources"},{"label":"Term Dates"}]}
      sections={[{"heading":"Current academic year","bullets":["Term 1: opening early January, closing early April","Term 2: opening early May, closing late August","Term 3: opening early September, closing late November"]},{"heading":"Mid-term breaks","body":"Each term has a one-week mid-term break, typically falling around the midpoint. Exact dates are confirmed in the term-opening circular."}]}
    />
  );
}
