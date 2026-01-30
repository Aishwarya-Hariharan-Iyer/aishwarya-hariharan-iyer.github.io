export type PortfolioItem = {
  type: "project" | "study";
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
    name: "ModPlaNUS",
    desc: "Plan Your University Journey",
    details:
      "Developed a React + Firebase web app to help students plan academic semesters while automatically checking prerequisites, restrictions, and graduation requirements.",
    tools: [
      "React",
      "Firebase",
      "JavaScript",
      "Web Development",
      "Testing",
    ],
    imgSrc: "/projects/modplanus.png",
    link: "https://modplanus.netlify.app/",
  },
];
