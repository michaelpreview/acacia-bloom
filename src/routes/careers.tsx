import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Working at Our School — Acacia Crest Senior School" },
      { name: "description", content: "Join a team committed to shaping futures." },
      { property: "og:title", content: "Working at Our School — Acacia Crest" },
      { property: "og:description", content: "Join a team committed to shaping futures." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Working at Our School"
      eyebrow="Careers"
      description="Join a team committed to shaping futures."
      breadcrumb={[{"label":"Careers"}]}
      intro="Acacia Crest is a school where serious educators do their best work — in a collegial culture with strong leadership and modern facilities."
      highlights={[{"title":"Professional growth","description":"Funded CPD, internal coaching and clear progression for teachers and support staff."},{"title":"Competitive package","description":"Market-aligned salary, statutory benefits and on-campus housing where available."},{"title":"A real team","description":"Collaborative departments, weekly planning time and protected teacher voice."},{"title":"Meaningful work","description":"Small class sizes, supportive parents and learners you will remember by name."}]}
      cta={{"label":"See current vacancies","to":"/careers/vacancies"}}
    />
  );
}
