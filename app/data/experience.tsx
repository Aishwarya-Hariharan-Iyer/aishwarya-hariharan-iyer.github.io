"use client";

import { motion } from "framer-motion";
import type { JSX } from "react";

export interface Experience {
  title: string;
  company: string;
  duration: string;
  content: JSX.Element;
  skills: string[];
  category?: "Professional" | "Extracurricular";
}

const bullet = "text-lg text-neutral-900 leading-relaxed";

export const experiences: Experience[] = [
  {
    title: "💻 External Head of Tech",
    company: "Google Developer Student Club NUS (GDSC NUS)",
    duration: "Aug 2024 – Present",
    category: "Extracurricular",
    skills: ["Product Management", "Leadership", "Web Development"],
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Led the Project Resilience Collective, managing product and engineering
          development.
        </li>
        <li className={bullet}>
          Built a CRM system for a peer-driven mental health charity.
        </li>
      </motion.ul>
    ),
  },

  {
    title: "💡 Research Intern",
    company: "Amrita Vishwa Vidyapeetham",
    duration: "Jun 2024 – Aug 2024",
    category: "Professional",
    skills: [
      "Machine Learning",
      "Signal Processing",
      "Transformers",
      "Python",
      "Scientific Writing",
    ],
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Developed AI models to predict dementia from speech signals and
          deployed them in an application.
        </li>
        <li className={bullet}>
          Analysed gender-based differences in model performance.
        </li>
        <li className={bullet}>
          Applied feature selection and dimensionality reduction techniques.
        </li>
        <li className={bullet}>
          Implemented BiLSTM, Conformer, autoencoder, and CNN-based models;
          explored multimodal learning.
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🤝 Orbital Student Adviser",
    company: "School of Computing, National University of Singapore",
    duration: "May 2023 – Aug 2024",
    category: "Professional",
    skills: ["Mentorship", "Technical Evaluation", "Communication"],
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Mentored 26 student teams across web, mobile, and AI projects.
        </li>
        <li className={bullet}>
          Evaluated technical milestones and delivered structured feedback.
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🧮 QRC Assistant",
    company: "Quantitative Reasoning and Computation Clinic, NUS College",
    duration: "Aug 2023 – May 2024",
    category: "Professional",
    skills: ["Agent-based Modelling", "NetLogo", "Tutoring"],
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Built agent-based models in NetLogo for interdisciplinary science
          courses.
        </li>
        <li className={bullet}>
          Supported students in quantitative reasoning and computational
          problem-solving.
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🤖 Internal Head of Tech",
    company: "Google Developer Student Club NUS (GDSC NUS)",
    duration: "Aug 2023 – Aug 2024",
    category: "Extracurricular",
    skills: ["React", "Web Development", "Workshops", "Leadership"],
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Led technical workshops supporting the Tech-for-Good mission.
        </li>
        <li className={bullet}>
          Maintained and extended the DSC website; built the Hack4Good platform.
        </li>
        <li className={bullet}>
          Initiated internal projects to upskill junior developers.
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🧑‍🏫 Head Coordinator",
    company: "NUSC Peer Mentorship Programme, NUS College",
    duration: "May 2023 – May 2024",
    category: "Extracurricular",
    skills: ["Leadership", "Programme Coordination", "Budgeting"],
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Led coordinators and peer mentors supporting freshman transition.
        </li>
        <li className={bullet}>
          Oversaw logistics, budgeting, and academic study-plan reviews.
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🏛️ President",
    company: "NUS Art of Living",
    duration: "May 2023 – Jun 2024",
    category: "Extracurricular",
    skills: ["Community Leadership", "Event Management", "Wellbeing"],
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Led yoga and meditation initiatives promoting campus wellbeing.
        </li>
        <li className={bullet}>
          Organised events focused on mental and physical health.
        </li>
      </motion.ul>
    ),
  },

  {
    title: "📊 Intern Data Analyst",
    company: "Capgemini Invent",
    duration: "May 2023 – Aug 2023",
    category: "Professional",
    skills: ["Machine Learning", "Python", "Plotly", "Dash", "PostgreSQL"],
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Built ML solutions for failure prediction, anomaly detection, and
          optimisation.
        </li>
        <li className={bullet}>
          Developed dashboards and pipelines for predictive maintenance.
        </li>
      </motion.ul>
    ),
  },

  {
  title: "🎙️ Co-Chair Of TIPS",
  company: "Technical Interview Preparation in Summer (TIPS), NUS",
  duration: "May 2023 – Aug 2023",
  category: "Extracurricular",
  skills: [
    "Course Management",
    "Cross-functional Leadership",
    "Communication",
    "Stakeholder Management",
  ],
  content: (
    <motion.ul className="list-disc list-inside space-y-2">
      <li className={bullet}>
        Co-chaired the organizing team of Technical Interview Preparation in
        Summer (TIPS) 2023, a career preparation programme for freshmen.
      </li>
      <li className={bullet}>
        Planned lessons, arranged course logistics, facilitated panel
        discussions, and liaised with students and industry professionals.
      </li>
      <li className={bullet}>
        Coordinated a diverse team to deliver a structured and impactful learning
        experience.
      </li>
    </motion.ul>
  ),
},

{
  title: "🏛️ Vice President",
  company: "NUS Art of Living",
  duration: "May 2023 – Aug 2023",
  category: "Extracurricular",
  skills: [
    "Leadership",
    "Community Outreach",
    "Event Management",
    "Creative Problem Solving",
    "Communication",
    "Yoga",
    "Meditation",
  ],
  content: (
    <motion.ul className="list-disc list-inside space-y-2">
      <li className={bullet}>
        Managed a team facilitating regular wellbeing sessions on campus.
      </li>
      <li className={bullet}>
        Planned and executed large-scale events such as Yogathon 2023, awarded
        the Community Impact Award at the NUS Achievement Awards.
      </li>
      <li className={bullet}>
        Oversaw administrative and managerial operations to ensure smooth
        functioning of the organisation.
      </li>
    </motion.ul>
  ),
},

{
  title: "🧑‍💼 Peer Mentor",
  company: "NUS University Scholars Programme",
  duration: "May 2022 – May 2023",
  category: "Extracurricular",
  skills: ["Peer Mentoring", "Academic Advising", "Communication"],
  content: (
    <motion.ul className="list-disc list-inside space-y-2">
      <li className={bullet}>
        Mentored Year 1 students to ease their transition from high school to
        university life.
      </li>
      <li className={bullet}>
        Provided guidance on academic pathways, university opportunities, and
        personal development.
      </li>
    </motion.ul>
  ),
},

{
  title: "🛠️ Software Developer Intern",
  company: "Ashok Leyland",
  duration: "Jun 2022 – Jul 2022",
  category: "Professional",
  skills: [
    "Automation",
    "Python",
    "Testing",
    "Business Analysis",
    "Software Design",
  ],
  content: (
    <motion.ul className="list-disc list-inside space-y-2">
      <li className={bullet}>
        Developed an automation tool to generate reports, saving 8–10 man-days of
        manual effort.
      </li>
      <li className={bullet}>
        Collaborated with the Business Analytics team to design a user-friendly
        solution for non-technical users.
      </li>
      <li className={bullet}>
        Gained hands-on experience in software product design and development.
      </li>
    </motion.ul>
  ),
},

{
  title: "🗂️ Program Head",
  company: "NUS Art of Living",
  duration: "May 2022 – May 2023",
  category: "Extracurricular",
  skills: [
    "Leadership",
    "Event Planning",
    "Community Outreach",
    "Design",
  ],
  content: (
    <motion.ul className="list-disc list-inside space-y-2">
      <li className={bullet}>
        Planned and organised campus events promoting wellbeing initiatives.
      </li>
      <li className={bullet}>
        Collaborated with team members to ensure smooth execution of programmes.
      </li>
      <li className={bullet}>
        Designed posters and promotional material for event publicity.
      </li>
    </motion.ul>
  ),
},

{
  title: "🔍 Research Intern",
  company: "Amrita Vishwa Vidyapeetham",
  duration: "Jun 2020 – Sep 2020",
  category: "Professional",
  skills: [
    "MATLAB",
    "Mathematical Modelling",
    "Scientific Writing",
    "Computational Thinking",
  ],
  content: (
    <motion.ul className="list-disc list-inside space-y-2">
      <li className={bullet}>
        Applied computational biology and mathematical modelling techniques to
        analyse the spread of COVID-19.
      </li>
      <li className={bullet}>
        Co-authored a first-prize–winning paper at the LAKE 2020 conference
        organised by the Indian Institute of Science.
      </li>
      <li className={bullet}>
        Developed strong foundations in scientific writing and computational
        research.
      </li>
    </motion.ul>
  ),
},

{
  title: "🔬 Research Intern",
  company:
    "CEiBa – Centre for Studies in Ethnobiology, Biodiversity & Sustainability",
  duration: "May 2020 – Aug 2020",
  category: "Professional",
  skills: [
    "Literature Review",
    "Secondary Data Analysis",
    "Research Methods",
    "Microsoft Office",
  ],
  content: (
    <motion.ul className="list-disc list-inside space-y-2">
      <li className={bullet}>
        Conducted literature reviews and secondary data analysis on nutraceutical
        properties of wild food crops.
      </li>
      <li className={bullet}>
        Contributed to research addressing food insecurity and sustainability in
        tribal agricultural practices.
      </li>
    </motion.ul>
  ),
},
  
];
