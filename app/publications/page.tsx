
import { PublicationGrid } from "@/components/ui/publication-grid";
import { PageHeader } from "../components/layout/page-header";
import { PageLayout } from "../components/layout/page-layout";
import { publicationsData } from "../data/publications";

export default function PublicationsPage() {
  return (
    <PageLayout
      padded={false}
      imageLeft="/background/aish-papers.png"
      imageRight="/background/aish-lab.png"
    >
      <PageHeader
        title="Publications"
        subtitle="Books, conferences, journals, posters, and science communication."
      />

      <PublicationGrid items={publicationsData} />
    </PageLayout>
  );
}
