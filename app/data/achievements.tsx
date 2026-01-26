// data/achievements.ts
export interface Achievement {
  title: string;
  description?: string;
  year?: string;
  image?: string;
  href?: string;
  category: "Awards" | "Honors" | "Recognitions";
}

export const achievements: Achievement[] = [
  {
    title: "Bachelor of Computing (Computer Science) with Honours (Highest Distinction)",
    description: "Graduated with highest distinction (first-class honours) in Computer Science.",
    year: "June, 2025",
    category: "Recognitions",
    image: "/achievements/bcomp-grad.png",
    href: "https://www.credential.net/81e0a27d-3562-4b9e-830c-603cd51b4688?username=aishwaryahariharaniyer367301",
  },
  {
    title: "University Scholars Programme (USP) & Turing Programme",
    description: "Admitted to and graduated from the prestigious University Scholars Programme and Turing Programme for exceptional academic, research and leadership potential.",
    year: "June, 2025",
    category: "Recognitions",
    image: "/achievements/usp-grad.png",
    href: "https://www.credential.net/fe1285af-da67-44fc-8177-158cfa7d8b93#acc.KSjm1Nsi",
  },
  {
    title: "SoC Outstanding Computing Project Prize",
    description:
      "Awarded for the Final Year Project on detecting abnormal brain activity using EEG signals.",
    year: "June, 2025",
    category: "Awards",
    image: "/achievements/soc-outstanding-prize.png",
    href: "https://credentials.nus.edu.sg/564eecc5-5604-4a88-8962-6ae641df75d2#acc.7miMsCYG",

  },
  {
    title: "Dean’s List (June, 2025)",
    description:
      "Recognised for being in the top 5% of the cohort for outstanding academic performance.",
    year: "June, 2025",
    category: "Honors",
    image: "/achievements/deans-list-june-25.png",
    href: "https://credentials.nus.edu.sg/6c201b24-fc6f-454e-bb52-840cfcfe9504#acc.PZ4TX7dJ",
  },
  {
    title: "Sung Kah Kay Memorial Prize",
    description:
      "Identifies the graduate as a leader in independent and interdisciplinary scholarship.",
    category: "Awards",
    year: "June, 2025",
    image: "/achievements/suh-kang-kay.png",
    href: "https://credentials.nus.edu.sg/a15248b2-135f-416b-97cc-c4cfcd629829#acc.PgNsDe67",
  },
  {
    title: "Syed Ahmad Khan AMU Memorial Prize",
    description:
      "Awarded for academic excellence, social service record, and commitment to South Asian studies.",
    category: "Awards",
    year: "June, 2025",
    image: "/achievements/syed-ahmed-khan.png",
    href: "https://credentials.nus.edu.sg/2f186e33-bc36-49da-b7b7-ee0267bfedb7#acc.O9uizm2C",
  },
  {
    title: "President’s Honour Roll",
    description:
      "Recognised for excellence in intellectual and leadership qualities.",
    category: "Honors",
    year: "June, 2025",
    image: "/achievements/presidents-honor-roll.png",
    href: "https://credentials.nus.edu.sg/dca6b0f1-286a-4f56-baf8-70734de10619#acc.B35ShD2p",
  },
  {
    title: "Best Project Award – CS3203",
    description:
      "Awarded for the project (Just Yap!) in the 26th School of Computing Term Project Showcase.",
    category: "Awards",
    year: "Apr, 2025",
    image: "/achievements/best-proj-award.png",
    href: "https://www.credential.net/ca6b18e5-09ee-4a8a-9383-db9fd5e42df8?username=aishwaryahariharaniyer367301",
  },
    {
    title: "Innovative Open-Source Excellence Award",
    description:
      "Awarded for the project (Just Yap!) in the 26th School of Computing Term Project Showcase.",
    category: "Awards",
    year: "Apr, 2025",
    image: "/achievements/innovative-proj-award.png",
    href: "https://www.credential.net/b55dd439-72d8-48d6-a99b-44070fbf4e6a?username=aishwaryahariharaniyer367301",
  },
    {
    title: "Video and Marketing Excellence Award",
    description:
      "Awarded for the best project (Just Yap!) in the 26th School of Computing Term Project Showcase.",
    category: "Awards",
    year: "Apr, 2025",
    image: "/achievements/video-marketing-proj-award.png",
    href: "https://www.credential.net/76f6454c-d26e-43b9-83b1-668fa668a157?username=aishwaryahariharaniyer367301",
  },
  {
    title: "Certificate of Distinction – Software Engineering Focus Area",
    description:
      "Awarded for meritorious performance in Software Engineering coursework.",
    category: "Recognitions",
    year: "Jan, 2025",
    image: "/achievements/swe-distinct.png",
    href: "https://credentials.nus.edu.sg/eb7a0eae-7993-4f7f-be66-8f36356f3b4a#acc.NhABkc3j",
  },
  {
    title: "Best Paper Award",
    description:
      "Awarded Best Paper in the Artificial Intelligence and Machine Learning session at the International Conference on Artificial Intelligence and Emerging Technology (AISUMMIT-2024).",
    category: "Awards",
    year: "Dec, 2024",
    image: "/achievements/best-paper-award.png",
    href: "https://www.credential.net/b4b8d765-2780-4de2-9eb7-a472bf441cdb?username=aishwaryahariharaniyer367301",
  },
  {
    title: "Dean’s List (June, 2024)",
    description:
      "Recognised for being in the top 5% of the cohort for outstanding academic performance.",
    year: "June, 2024",
    category: "Honors",
    image: "/achievements/deans-list-june-24.png",
    href: "https://credentials.nus.edu.sg/7d824a82-0227-4d26-bc07-987332b29cd7",
  },
  {
    title: "Certificate of Distinction – AI Focus Area",
    description:
      "Awarded for meritorious performance in AI coursework.",
    category: "Recognitions",
    year: "June, 2024",
    image: "/achievements/ai-distinct.png",
    href: "https://credentials.nus.edu.sg/e1a6a731-4474-4f54-baaa-0b3d85e98575#acc.cqPvGdoJ",
  },
  {
    title: "USP Senior Honour Roll",
    description:
      "Awarded for sustained excellence in intellectual and leadership contributions.",
    category: "Honors",
    year: "April, 2024",
    image: "/achievements/usp-senior-honor-roll.png",
    href: "https://credentials.nus.edu.sg/8f95c242-4426-46fd-9dce-7f273816cb89#acc.1OwbXigQ",
  },
  {
    title: "Dean’s List (Jan, 2024)",
    description:
      "Recognised for being in the top 5% of the cohort for outstanding academic performance.",
    year: "Jan, 2024",
    category: "Honors",
    image: "/achievements/deans-list-jan-24.png",
    href: "https://credentials.nus.edu.sg/267c08d4-b8d8-49bb-aafa-acad18e459f7#acc.i6CdeyRQ",
  },
  {
    title: "NUS Achievement Award (Merit)",
    description:
      "Recognised for community impact through Yogathon 2023.",
    year: "Oct, 2023",
    category: "Awards",
    image: "/achievements/nus-achievement-award.png",
    href: "https://credentials.nus.edu.sg/5d04adcc-2d95-470f-ab29-2bc552b822df#acc.eGtB3Xw4",
  },
  {
    title: "USP Honor Roll",
    description:
      "Recognised for excellence in intellectual and leadership contributions.",
    category: "Honors",
    year: "Oct, 2023",
    image: "/achievements/usp-honor-roll-oct-23.png",
    href: "https://credentials.nus.edu.sg/44159532-0ad4-47e6-8c7e-59a32264998c",
  },
  {
    title: "SoC Leadership Programme Certificate of Completion",
    description: "Selected for and successfully completed the SoC Leadership Programme offered by The Centre for Computing for Social Good and Philanthropy at School of Computing (SoC).",
    year: "May, 2023",
    category: "Recognitions",
    image: "/achievements/leadership-program.png",
    href: "https://www.credential.net/127e24f4-6574-4bc2-9883-5ef2e81f05c1?username=aishwaryahariharaniyer367301",
  },
  {
    title: "Orbital - Apollo 11 (Advanced)",
    description: "Completed the Orbital programme by building a full-stack web application at the advanced level.",
    year: "Aug, 2022",
    category: "Recognitions",
    image: "/achievements/orbital-cert.png",
    href: "https://credentials.nus.edu.sg/e7c594cd-544f-4f83-a3f9-c54d3155b8ad#acc.nFTMQRzu",
  },
  {
    title: "AI FOR EVERYONE (AI4E)",
    description: "Completed AI Singapore's AI FOR EVERYONE course.",
    year: "Nov, 2021",
    category: "Recognitions",
    image: "/achievements/ai-for-everyone.png",
    href: "https://www.credential.net/2aacfae0-6253-4c22-9d7a-136d74e0a957"
  },
  {
    title: "Dr Goh Keng Swee Scholarship",
    description: "Awarded the prestigious Dr Goh Keng Swee Scholarship for academic excellence and extracurricular achievements.",
    year: "Aug, 2021",
    category: "Recognitions",
    href: "https://www.credential.net/1c6f3f6d-B8e1-4f5e-9f3a-1e3f5b6c7d8e"
  },
  {
    title: "SAT Top Performer, India",
    description: "Achieved a top score of 1570/1600 in the SAT examination, ranking among the top performers in India.",
    year: "Jan, 2021",
    category: "Awards",
    href: "https://www.linkedin.com/in/aishwarya-h-iyer/",
  },
  {
    title: "AP Scholar (with Honor) Award",
    description: "Awarded by College Board for outstanding performance across multiple Advanced Placement examinations.",
    year: "Jan, 2020",
    category: "Awards",
    href: "https://www.linkedin.com/in/aishwarya-h-iyer/",
  },
  {
    title: "Republic Day Parade Invitee – PMO’s Box",
    description: "Invited by the Government of India to view the Republic Day Parade from the PMO's Box for academic merit.",
    year: "Jan, 2019",
    category: "Recognitions",
    href: "https://www.linkedin.com/in/aishwarya-h-iyer/",
  },
  {
    title: "National Rank 3 – CBSE Grade 10",
    year: "May, 2019",
    description: "Achieved All-India Rank 3 in the Grade 10 Board Examinations.",
    category: "Awards",
    href: "https://www.linkedin.com/in/aishwarya-h-iyer/",
  },
  {
    title: "Sahyadri Young Ecologist Award",
    description: "Awarded by the Indian Institute of Science (IISc) for research presented at the Biennial Lake Conference.",
    category: "Awards",
    year: "Nov, 2018",
    href: "https://www.linkedin.com/in/aishwarya-h-iyer/",
  },
];
