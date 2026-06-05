import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life — Acacia Crest Senior School" },
      { name: "description", content: "Vibrant, structured days where character, friendships and passions are formed." },
      { property: "og:title", content: "Student Life — Acacia Crest" },
      { property: "og:description", content: "Vibrant, structured days where character, friendships and passions are formed." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Student Life"
      eyebrow="Beyond the Classroom"
      description="Vibrant, structured days where character, friendships and passions are formed."
      breadcrumb={[{"label":"Student Life"}]} />
  );
}
