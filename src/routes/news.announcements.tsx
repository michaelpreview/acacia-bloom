import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/site/SubPage";

export const Route = createFileRoute("/news/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — Acacia Crest Senior School" },
      { name: "description", content: "Official school announcements for parents, learners and the public." },
      { property: "og:title", content: "Announcements — Acacia Crest" },
      { property: "og:description", content: "Official school announcements for parents, learners and the public." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      title="Announcements"
      eyebrow="Official Notices"
      description="Official school announcements for parents, learners and the public."
      breadcrumb={[{"label":"News","to":"/news"},{"label":"Announcements"}]}
      sections={[{"heading":"Where to look","body":"Announcements are posted here, sent via the parent portal and — for urgent items — by SMS."},{"heading":"Typical announcements","bullets":["Term opening and closing arrangements","Examination schedules and parent consultation days","Sports fixtures and trip notices","Public-holiday and weather-related changes"]}]}
    />
  );
}
