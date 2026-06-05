import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/resources/uniform")({
  head: () => ({
    meta: [
      { title: "Uniform Guidelines — Acacia Crest Senior School" },
      { name: "description", content: "Required uniform, sports kit and grooming standards." },
      { property: "og:title", content: "Uniform Guidelines — Acacia Crest" },
      { property: "og:description", content: "Required uniform, sports kit and grooming standards." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Uniform Guidelines"
      eyebrow="Smart, Simple, Consistent"
      description="Required uniform, sports kit and grooming standards."
      breadcrumb={[{"label":"Resources","to":"/resources"},{"label":"Uniform"}]}
      sections={[{"heading":"School uniform","bullets":["School blazer with badge","White shirt and school tie","Grey trousers (boys) / pleated grey skirt (girls)","Black leather shoes and school socks","School jumper or sweater (optional in cold weather)"]},{"heading":"Sports kit","bullets":["School-branded games top","Shorts and tracksuit","Sports shoes (predominantly white)","House colours t-shirt"]},{"heading":"Grooming","body":"Hair must be neat and natural. Religious head coverings are welcomed in school colours. No jewellery beyond a wristwatch and a single pair of small studs."}]}
    />
  );
}
