"use client";

import { motion } from "framer-motion";
import type { JSX } from "react";

export interface Experience {
  title: string;
  company: string;
  duration: string;
  professional: boolean;
  content: JSX.Element;
}

const bullet = "text-lg text-neutral-900 leading-relaxed";
const skills = "text-lg text-neutral-700 font-medium";

export const experiences: Experience[] = [
  {
    title: "💻 External Head of Tech",
    company: "Google Developer Student Club NUS (GDSC NUS)",
    duration: "Aug 2024 – Present",
    professional: false,
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Led the Project Resilience Collective, managing product and engineering
          development.
        </li>
        <li className={bullet}>
          Built a CRM system for a peer-driven mental health charity.
        </li>
        <li className={skills}>
          Skills: Product Management · Leadership · Web Development
        </li>
      </motion.ul>
    ),
  },

  {
    title: "💡 Research Intern",
    company: "Amrita Vishwa Vidyapeetham",
    duration: "Jun 2024 – Aug 2024",
    professional: true,
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
        <li className={skills}>
          Skills: Machine Learning · Signal Processing · Transformers · Python ·
          Scientific Writing
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🤝 Orbital Student Adviser",
    company: "School of Computing, National University of Singapore",
    duration: "May 2023 – Aug 2024",
    professional: true,
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Mentored 26 student teams across web, mobile, and AI projects.
        </li>
        <li className={bullet}>
          Evaluated technical milestones and delivered structured feedback.
        </li>
        <li className={skills}>
          Skills: Mentorship · Technical Evaluation · Communication
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🧮 QRC Assistant",
    company: "Quantitative Reasoning and Computation Clinic, NUS College",
    duration: "Aug 2023 – May 2024",
    professional: true,
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
        <li className={skills}>
          Skills: Agent-based Modelling · NetLogo · Tutoring
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🤖 Internal Head of Tech",
    company: "Google Developer Student Club NUS (GDSC NUS)",
    duration: "Aug 2023 – Aug 2024",
    professional: false,
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
        <li className={skills}>
          Skills: React · Web Development · Workshops · Leadership
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🧑‍🏫 Head Coordinator",
    company: "NUSC Peer Mentorship Programme, NUS College",
    duration: "May 2023 – May 2024",
    professional: false,
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Led coordinators and peer mentors supporting freshman transition.
        </li>
        <li className={bullet}>
          Oversaw logistics, budgeting, and academic study-plan reviews.
        </li>
        <li className={skills}>
          Skills: Leadership · Programme Coordination · Budgeting
        </li>
      </motion.ul>
    ),
  },

  {
    title: "🏛️ President",
    company: "NUS Art of Living",
    duration: "May 2023 – Jun 2024",
    professional: false,
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Led yoga and meditation initiatives promoting campus wellbeing.
        </li>
        <li className={bullet}>
          Organised events focused on mental and physical health.
        </li>
        <li className={skills}>
          Skills: Community Leadership · Event Management · Wellbeing
        </li>
      </motion.ul>
    ),
  },

  {
    title: "📊 Intern Data Analyst",
    company: "Capgemini Invent",
    duration: "May 2023 – Aug 2023",
    professional: true,
    content: (
      <motion.ul className="list-disc list-inside space-y-2">
        <li className={bullet}>
          Built ML solutions for failure prediction, anomaly detection, and
          optimisation.
        </li>
        <li className={bullet}>
          Developed dashboards and pipelines for predictive maintenance.
        </li>
        <li className={skills}>
          Skills: Machine Learning · Python · Plotly · Dash · PostgreSQL
        </li>
      </motion.ul>
    ),
  },
];
