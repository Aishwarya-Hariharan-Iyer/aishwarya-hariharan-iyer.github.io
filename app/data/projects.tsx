export type PortfolioItem = {
  type: "project" | "study" | "hobby";
  name: string;
  desc: string;
  details: string;
  tools: string[];
  imgSrc?: string;
  link: string;
  citation?: string;
};


export const portfolioData: PortfolioItem[] = [
  /* ===================== PROJECTS ===================== */

  {
    type: "study",
    name: "Transforming Grammatical Error Correction (GEC)",
    desc: "Understand Context in Grammar Correction!",
    details:
      "Studied the role of cross-sentence context in grammatical error correction by fine-tuning SOTA transformer models on the WI-LOCNESS dataset. Demonstrated improvements in contextual coherence and error correction accuracy.",
    tools: [
      "Python",
      "NLP",
      "Transformers",
      "Tokenization",
      "Word Embeddings",
      "BiLSTM",
      "Error Analysis",
    ],
    imgSrc: "/projects/gec.png",
    link: "https://github.com/teekaytai/cs4248-project",
  },

  {
    type: "study",
    name: "A Tale Of Four Cities",
    desc: "Compare Surface Urban Heat in Cities!",
    details:
      "Applied ML models to analyse Surface Urban Heat Island Intensity (SUHII) trends across cities, incorporating meteorological, population, pollution, and 'feels-like' weather parameters.",
    tools: [
      "Python",
      "Machine Learning",
      "Google Earth Engine",
      "EarthEngine API",
      "JavaScript",
      "Climate Research",
    ],
    imgSrc: "/projects/suhii.png",
    link: "https://www.canva.com/design/DAGCkNVAOvw/VdNeo_QTfYQ4jl3KVMliqw/edit?utm_content=DAGCkNVAOvw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },

  {
    type: "study",
    name: "Detecting Abnormal Brain Activity Using EEG Signals",
    desc: "Explainable AI for EEG-based Seizure Detection",
    details:
      "Developed and evaluated ML, DL, and hybrid CNN-LSTM architectures for detecting abnormal EEG activity. Integrated explainability frameworks and built a user-facing application with LLM-based insights.",
    tools: [
      "Signal Processing",
      "CNN",
      "LSTM",
      "Explainability",
      "EEG",
      "TensorFlow",
      "PyTorch",
    ],
    imgSrc: "/projects/eeg.png",
    link: "https://drive.google.com/file/d/1O7bONvjyX7Jf6SBpRhtiw5SY3KQaKKku/view?usp=sharing"
  },

  {
    type: "project",
    name: "Just Yap!",
    desc: "AI-Powered Social Media Intelligence",
    details:
      "Built an AI-driven platform for analysing real-time social media complaints using sentiment analysis, ABSA, summarisation, forecasting, and explainability to support data-driven policymaking.",
    tools: [
      "NLP",
      "BERT",
      "RoBERTa",
      "ABSA",
      "Generative AI",
      "Data Visualisation",
    ],
    imgSrc: "/projects/justyap.png",
    link: "https://justyapp.vercel.app/",
  },

  {
    type: "project",
    name: "Jarvis",
    desc: "Intelligent Tutoring System Management Platform",
    details:
      "Developed a full-stack web application for managing Intelligent Tutoring Systems, supporting admins, tutors, and students with authentication, analytics, and testing pipelines.",
    tools: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Node.js",
      "E2E Testing",
      "Unit Testing",
    ],
    link: "https://github.com/Aishwarya-Hariharan-Iyer",
    imgSrc: "/projects/jarvis.png",
  },

  {
    type: "project",
    name: "Dyslexia Wizard",
    desc: "Gamified Screening for Dyslexia",
    details:
      "Designed a Unity-based prototype for gamified dyslexia screening in young readers, integrating oral, auditory, visual, and written assessment modalities.",
    tools: [
      "Unity",
      "C#",
      "Game Development",
      "NLP",
      "Machine Learning",
      "Research",
    ],
    imgSrc: "/projects/dyswiz.png",
    link: "https://drive.google.com/file/d/1n3tnuCNylm_eehB2EqU665BJ6Swjh4XV/view?usp=sharing",
  },

  {
    type: "project",
    name: "AdSome",
    desc: "Generate Customized Advertisements",
    details:
      "Built an advertisement generator that leverages sentiment analysis, keyword extraction, summarisation, and LLM APIs to tailor ads based on user preferences.",
    tools: [
      "Python",
      "LLM APIs",
      "Sentiment Analysis",
      "Text Summarisation",
      "NLP",
    ],
    imgSrc: "/projects/adsome.png",
    link: "https://drive.google.com/file/d/1ysfCDDH-t6sVFY2fEvEmzh8JNMkzJsJY/view?usp=sharing",
  },
  {
  type: "project",
  name: "Personal Portfolio (Archived)",
  desc: "Previous version of my personal portfolio website",
  details:
    "An earlier iteration of my personal portfolio showcasing selected projects, skills, and design explorations. This version has been archived and is no longer actively maintained, and is preserved as a reference for my past work and design evolution.",
  tools: [
    "React",
    "JavaScript",
    "Web Development",
    "UI/UX Design",
    "Responsive Design",
  ],
  imgSrc: "/projects/portfolio-archived.png",
  link: "https://aishwarya-h-iyer.netlify.app/",
  },
  {
    type: "project",
    name: "LeetCode Problems",
    desc: "Curated solutions to LeetCode problems",
    details:
      "A growing collection of solved LeetCode problems aimed at strengthening data structures and algorithms fundamentals. The repository focuses on clean, readable solutions with an emphasis on problem-solving patterns, edge cases, and optimization strategies, serving both as practice and a long-term reference.",
    tools: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "LeetCode",
      "Python",
      "JavaScript",
    ],
    imgSrc: "/projects/leetcode.png",
    link: "https://github.com/Aishwarya-Hariharan-Iyer/leetcode-problems",
  },
  {
    type: "project",
    name: "DevEnable",
    desc: "CLI-based project management tool for developers",
    details:
      "DevEnable is a desktop application designed to help software developers efficiently manage client projects from a single place. It allows users to view all projects at a glance, organize and tag tasks based on deadlines, and manage clients associated with each project. Optimized for fast keyboard-driven workflows, the application emphasizes productivity through a Command Line Interface (CLI), making it ideal for developers who prefer speed, structure, and minimal UI overhead.",
    tools: [
      "Java",
      "Command Line Interface (CLI)",
      "Software Engineering",
      "Object-Oriented Programming",
      "Project Management",
      "JUnit",
    ],
    imgSrc: "/projects/devenable.png",
    link: "https://github.com/AY2223S1-CS2103-F13-1/tp",
  },
  {
    type: "project",
    name: "Duke Aemon of Old",
    desc: "Archaic, narrative-driven task manager with a mysterious personality",
    details:
      "Duke Aemon of Old is a Java-based personal task manager that blends productivity with narrative. Framed as an ancient duke risen from centuries of silence, Aemon assists users in managing todos, deadlines, and events while responding in an archaic, witty, and occasionally sardonic voice. Beyond standard task tracking, the application subtly introduces a mystery-solving angle, hinting at Aemon’s forgotten past and the circumstances of his return. Built with both CLI and JavaFX GUI support, the project emphasizes clean software architecture, robust error handling, and immersive user interaction.",
    tools: [
      "Java",
      "Command Line Interface (CLI)",
      "Graphical User Interface (GUI)",
      "Object-Oriented Programming",
      "Gradle",
      "JUnit",    ],
    imgSrc: "/projects/duke-aemon.png",
    link: "https://github.com/Aishwarya-Hariharan-Iyer/Duke-Aemon",
  }
];
