export type EducationNoteCategory = "academics" | "extracurricular";

export type EducationNote = {
  category: EducationNoteCategory;
  text: string;
};

export type Education = {
  title: string;
  category: string;
  src: string;
  period: string;
  location: string;
  notes: EducationNote[];
};


export const educations: Education[] = [
  {
    title: "National University of Singapore",
    category:
      "Bachelor of Computing, Computer Science (Hons.) & University Scholars Programme",
    src: "/aish-usp.jpg",
    period: "2021 – 2025",
    location: "Singapore",
    notes: [
      // Academics
      { category: "academics", text: "GPA: 4.68/5.00; Expected Graduation: May 2025" },
      { category: "academics", text: "Dr Goh Keng Swee Scholarship by Association of Banks in Singapore" },
      { category: "academics", text: "Certificate of Distinction in the AI Focus Area" },
      { category: "academics", text: "Dean’s List AY 23/24 Sem 1" },
      { category: "academics", text: "Dean’s List AY 23/24 Sem 2" },
      { category: "academics", text: "USP Honor Roll AY 22/23 Sem 1" },
      { category: "academics", text: "USP Senior Honor Roll AY 23/24 Sem 1" },

      // Extracurricular
      { category: "extracurricular", text: "External Head of Tech, Google Developer Student Club NUS" },
      { category: "extracurricular", text: "Internal Head of Tech, Google Developer Student Club NUS" },
      { category: "extracurricular", text: "Head Coordinator, NUSC Peer Mentorship Programme" },
      { category: "extracurricular", text: "President, NUS Art of Living" },
      { category: "extracurricular", text: "Co-Chair, Technical Interview Preparation in Summer (TIPS) 2023" },
      { category: "extracurricular", text: "Contributor to Source Academy & Cinnabot (NUSC Tech Directorate)" },
      { category: "extracurricular", text: "Published author in USP PLAYSET! Magazine" },
    ],
  },

  {
    title: "City Composite PU College",
    category: "Pre-University Education (Grades XI and XII)",
    src: "/aish-avenger.jpg",
    period: "2019 – 2021",
    location: "Bangalore, India",
    notes: [
      // Academics
      { category: "academics", text: "Grade XII: 100% (600/600)" },
      { category: "academics", text: "Grade XI: 99.5% (597/600)" },
      { category: "academics", text: "TOEFL iBT: 120/120" },
      { category: "academics", text: "AP Scholar with Honor (Biology, Chemistry, Physics C)" },
      { category: "academics", text: "SAT: 1570/1600 (Essay 7/6/7)" },
      { category: "academics", text: "SAT Subject Tests: Biology, Math II, Physics – 800/800" },
      { category: "academics", text: "SAT India Top Performer 2021" },

      // Extracurricular
      { category: "extracurricular", text: "Authored poetry book *Cobwebs Of The Cosmos* (2020)" },
      { category: "extracurricular", text: "Presented dengue ecology research at LAKE 2020" },
      { category: "extracurricular", text: "Third author, first-prize paper on Sacred Groves (LAKE 2020)" },
      { category: "extracurricular", text: "Founded a digital magazine during the pandemic" },
      { category: "extracurricular", text: "Member, Commonwealth Students’ Welfare Group of India" },
      { category: "extracurricular", text: "Participant, Asian Youth Interaction Session – UN Food Systems Summit" },
    ],
  },

  {
    title: "Presidency School Bangalore South",
    category: "CBSE Education (Up to Grade X)",
    src: "/aish-republic.jpg",
    period: "Up to 2019",
    location: "Bangalore, India",
    notes: [
      // Academics
      { category: "academics", text: "National Rank III, State Rank II, City Rank I (AISSE Grade X)" },
      { category: "academics", text: "Grade X: 99.4% (497/500)" },
      { category: "academics", text: "Grade IX: 99%" },
      { category: "academics", text: "Invited by Govt. of India to Republic Day Parade 2020 (PM’s Box)" },
      { category: "academics", text: "Special Student of the School Award" },

      // Extracurricular
      { category: "extracurricular", text: "Sahyadri Young Ecologist Award 2018 (IISc – LAKE Conference)" },
      { category: "extracurricular", text: "Authored poetry book *Incandescence* (2018)" },
      { category: "extracurricular", text: "Gold Award – Queen’s Commonwealth Essay Competition 2018" },
      { category: "extracurricular", text: "Best & Outstanding Delegate – PRESMUN 2018, 2019" },
    ],
  },
];
