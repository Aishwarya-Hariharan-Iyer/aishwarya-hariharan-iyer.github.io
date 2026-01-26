import { Timeline } from "@/components/ui/education-timeline";
import { educations } from "../data/education";
import { PageHeader } from "../components/layout/page-header";
import { PageLayout } from "../components/layout/page-layout";

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

function renderNotes(
  notes: { category: "academics" | "extracurricular"; text: string }[],
  category: "academics" | "extracurricular"
) {
  return (
    <ul className="space-y-2 text-sm text-neutral-700">
      {notes
        .filter((n) => n.category === category)
        .map((n, i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              className={
                category === "academics"
                  ? "text-cyan-400 shrink-0 pt-[2px]"
                  : "text-violet-400 shrink-0 pt-[2px]"
              }
            >
              ▸
            </span>
            <span className="leading-relaxed">{n.text}</span>
          </li>
        ))}
    </ul>
  );
}



/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */


export default function EducationPage() {
  const timelineData = educations.map((edu) => ({
    title: edu.title,
    period: edu.period,
    location: edu.location,
    academics: renderNotes(edu.notes, "academics"),
    extracurriculars: renderNotes(edu.notes, "extracurricular"),
  }));

  return (
    <PageLayout padded={false} imageLeft="/background/aish-graduation.png" imageRight="/background/aish-exams.png">
      <PageHeader
        title="Education"
        subtitle="Academic journey and extracurricular involvement."
      />
      <Timeline data={timelineData} />
    </PageLayout>
  );
}
