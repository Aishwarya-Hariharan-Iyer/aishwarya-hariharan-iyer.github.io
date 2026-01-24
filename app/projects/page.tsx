import { PortfolioGrid } from "@/components/ui/portfolio-grid";
import { portfolioData } from "../data/projects";
import { Navbar } from "../components/ui/navbar";

export const metadata = {
  title: "Projects & Publications",
  description:
    "Selected projects and publications spanning AI, NLP, EEG, climate research, and explainable systems.",
};

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen py-24 px-6 bg-white">
        {/* Header */}
        <header className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900">
            Education
          </h2>
          <p className="mt-4 max-w-md text-neutral-600">
            A timeline of academic achievements and extracurricular involvement.
          </p>
        </header>

      {/* Grid */}
      <div className="w-full">
        <div className="absolute top-0 left-0 w-full z-30">
            <Navbar />
        </div>
        <PortfolioGrid items={portfolioData} />
      </div>
    </section>
  );
}
