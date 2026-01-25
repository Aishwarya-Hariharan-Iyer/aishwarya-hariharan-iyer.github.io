import { PortfolioGrid } from "@/components/ui/portfolio-grid";
import { portfolioData } from "../data/projects";
import { PageHeader } from "../components/layout/page-header";
import { PageLayout } from "../components/layout/page-layout";

export default function ProjectsPage() {
  return (
    <PageLayout padded={false} imageLeft="/aish-rock-hat.png" imageRight="/aish-victory-sign.png">
      <PageHeader
        title="Projects & Publications"
        subtitle="AI, NLP, EEG, climate research, and explainable systems."
      />
      <PortfolioGrid items={portfolioData} />
    </PageLayout>
  );
}
