export type EducationSection = {
  title: string;
  items: string[];
};

export type Education = {
  title: string;
  category: string;
  src: string;
  sections: {
    academics: EducationSection;
    activities: EducationSection;
  };
};

export const educations: Education[] = [
  {
    title: "National University of Singapore",
    category:
      "Bachelor of Computing, Computer Science (Hons.) & University Scholars Programme",
    src: "/aish-usp.jpg",
    sections: {
      academics: {
        title: "Academic Milestones",
        items: [
          "GPA: 4.68/5.00; Expected Graduation: May 2025",
          "Dr Goh Keng Swee Scholarship by Association of Banks in Singapore",
          "Certificate of Distinction in the AI Focus Area",
          "Dean’s List AY 23/24 Sem 1",
          "Dean’s List AY 23/24 Sem 2",
          "USP Honor Roll AY 22/23 Sem 1",
          "USP Senior Honor Roll AY 23/24 Sem 1",
        ],
      },
      activities: {
        title: "Notable Activities",
        items: [
          "External Head of Tech, Google Developer Student Club NUS",
          "Internal Head of Tech, Google Developer Student Club NUS",
          "Head Coordinator, NUSC Peer Mentorship Programme",
          "President, NUS Art of Living",
          "Co-Chair, Technical Interview Preparation in Summer (TIPS) 2023",
          "Contributor to Source Academy & Cinnabot (NUSC Tech Directorate)",
          "Published author in USP PLAYSET! Magazine",
        ],
      },
    },
  },

  {
    title: "City Composite PU College",
    category: "Pre-University Education (Grades XI and XII)",
    src: "/aish-avenger.jpg",
    sections: {
      academics: {
        title: "Academic Milestones",
        items: [
          "Grade XII: 100% (600/600)",
          "Grade XI: 99.5% (597/600)",
          "TOEFL iBT: 120/120",
          "AP Scholar with Honor (Biology, Chemistry, Physics C)",
          "SAT: 1570/1600 (Essay 7/6/7)",
          "SAT Subject Tests: Biology, Math II, Physics – 800/800",
          "SAT India Top Performer 2021",
        ],
      },
      activities: {
        title: "Notable Activities",
        items: [
          "Authored poetry book *Cobwebs Of The Cosmos* (2020)",
          "Presented dengue ecology research at LAKE 2020",
          "Third author, first-prize paper on Sacred Groves (LAKE 2020)",
          "Founded a digital magazine during the pandemic",
          "Member, Commonwealth Students’ Welfare Group of India",
          "Participant, Asian Youth Interaction Session – UN Food Systems Summit",
        ],
      },
    },
  },

  {
    title: "Presidency School Bangalore South",
    category: "CBSE Education (Up to Grade X)",
    src: "/aish-republic.jpg",
    sections: {
      academics: {
        title: "Academic Milestones",
        items: [
          "National Rank III, State Rank II, City Rank I (AISSE Grade X)",
          "Grade X: 99.4% (497/500)",
          "Grade IX: 99%",
          "Invited by Govt. of India to Republic Day Parade 2020 (PM’s Box)",
          "Special Student of the School Award",
        ],
      },
      activities: {
        title: "Notable Activities",
        items: [
          "Sahyadri Young Ecologist Award 2018 (IISc – LAKE Conference)",
          "Authored poetry book *Incandescence* (2018)",
          "Gold Award – Queen’s Commonwealth Essay Competition 2018",
          "Best & Outstanding Delegate – PRESMUN 2018, 2019",
        ],
      },
    },
  },
];
