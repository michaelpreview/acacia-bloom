import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/about/vision")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Acacia Crest Senior School" },
      { name: "description", content: "A clear vision and a focused mission that shape every decision we make." },
      { property: "og:title", content: "Vision & Mission — Acacia Crest" },
      { property: "og:description", content: "A clear vision and a focused mission that shape every decision we make." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Vision & Mission"
      eyebrow="Our North Star"
      description="A clear vision and a focused mission that shape every decision we make."
      breadcrumb={[{"label":"About","to":"/about"},{"label":"Vision & Mission"}]}
      highlights={[{"title":"Vision","description":"To raise a generation of confident, principled, globally minded leaders rooted in Kenyan values."},{"title":"Mission","description":"Deliver outstanding senior education that develops the whole learner — mind, character, body and service."}]}
      sections={[{"heading":"What this means in practice","bullets":["Every learner has a personalised pathway and a mentor","Academic standards are demanding but supported","Service, sport and the arts are taken as seriously as exams","Parents are treated as full partners in their child’s growth"]}]}
    />
  );
}
