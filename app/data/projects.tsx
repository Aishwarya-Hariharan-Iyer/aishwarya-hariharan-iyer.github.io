export type PortfolioItem = {
  type: "project" | "publication";
  name: string;
  desc: string;
  details: string;
  tools: string[];
  imgSrc?: string;
  link?: string;
  citation?: string;
};


export const portfolioData: PortfolioItem[] = [
  /* ===================== PROJECTS ===================== */

  {
    type: "project",
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
    imgSrc: "/gec.png",
  },

  {
    type: "project",
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
    imgSrc: "/suhii.png",
  },

  {
    type: "project",
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
    imgSrc: "/eeg.png",
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
    imgSrc: "/justyap.png",
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
    imgSrc: "/jarvis.png",
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
    imgSrc: "/dyswiz.png",
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
    imgSrc: "/adsome.png",
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
    imgSrc: "/modplanus.png",
  },

  /* ===================== PUBLICATIONS ===================== */

  {
    type: "publication",
    name: "Gamified Screening for Developmental Dyslexia Among Young Readers",
    desc: "IEEE Conference Publication (INOCON 2024)",
    imgSrc: "/gamified-screening.png",
    details:
      "Proposed and evaluated a gamified prototype for early dyslexia screening incorporating multimodal assessment strategies.",
    tools: [
      "Unity",
      "Game-Based Learning",
      "Dyslexia Screening",
      "HCI",
      "Educational Technology",
    ],
    citation:
      "Iyer AH, Iyer GN. Gamified screening for developmental dyslexia among young readers. INOCON 2024, IEEE.",
  },

  {
    type: "publication",
    name: "Dementia Detection Using Machine Learning in Males and Females",
    desc: "Best Paper Award – Global AI Summit 2024",
    imgSrc: "/dementia-detection.png",
    details:
      "Analysed gender-based differences in dementia detection using ML models with a focus on feature importance and interpretability.",
    tools: [
      "Machine Learning",
      "Explainable AI",
      "Healthcare AI",
      "Signal Processing",
    ],
    citation:
      "Iyer AH et al. Dementia detection using machine learning in males and females. Global AI Summit 2024, IEEE.",
  },

  {
    type: "publication",
    name: "Automated Identification and Analysis of Plant Traits",
    desc: "Presented at IISc Biennial Lake Symposium",
    imgSrc: "/lake2024.png",
    details:
      "Applied CNNs and explainability frameworks to automate plant trait identification for ecosystem health research, supported by a web-based prototype.",
    tools: [
      "CNN",
      "Computer Vision",
      "Explainable AI",
      "Environmental Research",
    ],
    citation:
      "Iyer AH, Widyawati J. Automated identification and analysis of plant traits. IISc Lake Symposium 2024.",
  },

  {
    type: "publication",
    name: "Agent-Based Modelling of Urban Heat Island",
    desc: "Poster – ASCB Cell Bio 2024",
    imgSrc: "/netlogo.png",
    details:
      "Developed a NetLogo-based agent simulation model for teaching interdisciplinary concepts related to urban heat islands.",
    tools: [
      "NetLogo",
      "Agent-Based Modelling",
      "Climate Modelling",
      "Education",
    ],
    citation:
      "Loo YL, Iyer AH. Agent-based modelling of urban heat island. ASCB Cell Bio 2024.",
  },
];
