"use client";

import { Timeline } from "@/components/ui/timeline";
import { experiences } from "../data/experience";
import { PageHeader } from "../components/layout/page-header";
import { PageLayout } from "../components/layout/page-layout";

export default function ExperiencePage() {
  return (
    <PageLayout padded={false}>
      <PageHeader
        title="Experience"
        subtitle="Professional, research, and leadership roles."
      />
      <Timeline data={experiences} />
    </PageLayout>
  );
}
