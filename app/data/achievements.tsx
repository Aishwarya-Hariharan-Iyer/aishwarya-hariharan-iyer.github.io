// data/achievements.ts
export interface Achievement {
  title: string;
  description?: string;
  year?: string;
  href?: string;
  image?: string;
  category:
    | "Academic Excellence"
    | "Research & Publications"
    | "Scholarships"
    | "Leadership"
    | "Community Impact"
    | "Awards";
}

export const achievements: Achievement[] = [
  {
    title: "SoC Outstanding Computing Project Prize",
    description:
      "Awarded for the Final Year Project on detecting abnormal brain activity using EEG signals.",
    year: "2025",
    category: "Awards",
  },
  {
    title: "Best Paper Award – Global AI Summit",
    description:
      "Received for research on machine learning approaches for dementia detection.",
    year: "2024",
    category: "Research & Publications",
  },
  {
    title: "Dr Goh Keng Swee Scholarship",
    description:
      "Prestigious undergraduate scholarship awarded by the Association of Banks in Singapore.",
    category: "Scholarships",
  },
  {
    title: "President’s Honour Roll",
    description:
      "Recognised for excellence in intellectual and leadership qualities.",
    category: "Academic Excellence",
  },
  {
    title: "NUS Achievement Award (Merit)",
    description:
      "Recognised community impact through Yogathon 2023.",
    year: "2023",
    category: "Community Impact",
  },
  {
    title: "Sahyadri Young Ecologist Award",
    description:
      "Awarded for research presented at the Biennial Lake Conference by IISc.",
    category: "Research & Publications",
  },
];
