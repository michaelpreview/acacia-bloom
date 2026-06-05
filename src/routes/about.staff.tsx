import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/about/staff")({
  head: () => ({
    meta: [
      { title: "Staff Directory — Acacia Crest Senior School" },
      { name: "description", content: "A qualified, caring teaching team and a dedicated support staff." },
      { property: "og:title", content: "Staff Directory — Acacia Crest" },
      { property: "og:description", content: "A qualified, caring teaching team and a dedicated support staff." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Staff Directory"
      eyebrow="Our People"
      description="A qualified, caring teaching team and a dedicated support staff."
      breadcrumb={[{"label":"About","to":"/about"},{"label":"Staff"}]}
      stats={[{"value":"60+","label":"Teaching staff"},{"value":"1:12","label":"Teacher ratio"},{"value":"100%","label":"TSC-registered"},{"value":"40+","label":"Support staff"}]}
      sections={[{"heading":"Faculties","bullets":["Mathematics & Sciences (Biology, Chemistry, Physics, Mathematics, Computer Science)","Languages & Humanities (English, Kiswahili, History, Geography, CRE, IRE)","Arts, Sports & Pathway electives","Guidance, Counselling & Pastoral Care"]},{"heading":"How to reach a teacher","body":"Parents may request a meeting with any subject teacher or Head of Department through the school office or parent portal. We respond within two working days."}]}
      cta={{"label":"Contact the office","to":"/contact"}}
    />
  );
}
