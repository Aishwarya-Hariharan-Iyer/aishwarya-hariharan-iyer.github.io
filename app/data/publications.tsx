export type PublicationItem = {
  type: "book" | "conference" | "poster" | "journal" | "article";
  name: string;
  desc: string;
  details: string;
  tools: string[];
  imgSrc?: string;
  link: string;
  citation?: string;
};


export const publicationsData: PublicationItem[] = [

  /* ===================== RESEARCH ===================== */

  {
    type: "conference",
    name: "Gamified Screening for Developmental Dyslexia Among Young Readers",
    desc: "IEEE Conference Publication (INOCON 2024)",
    imgSrc: "publications/gamified-screening.png",
    details:
      "Proposed and evaluated a gamified prototype for early dyslexia screening incorporating multimodal assessment strategies.",
    tools: [
      "Unity",
      "Game-Based Learning",
      "Dyslexia Screening",
      "HCI",
      "Educational Technology",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/10511545",
    citation:
      "Iyer AH, Iyer GN. Gamified screening for developmental dyslexia among young readers. INOCON 2024, IEEE.",
  },

  {
    type: "conference",
    name: "Dementia Detection Using Machine Learning in Males and Females",
    desc: "Best Paper Award – Global AI Summit 2024",
    imgSrc: "/publications/dementia-detection.png",
    details:
      "Analysed gender-based differences in dementia detection using ML models with a focus on feature importance and interpretability.",
    tools: [
      "Machine Learning",
      "Explainable AI",
      "Healthcare AI",
      "Signal Processing",
    ],
    link: "https://ieeexplore.ieee.org/document/10947948",
    citation:
      "Iyer AH et al. Dementia detection using machine learning in males and females. Global AI Summit 2024, IEEE.",
  },

  {
    type: "conference",
    name: "Automated Identification and Analysis of Plant Traits",
    desc: "Presented at IISc Biennial Lake Symposium",
    imgSrc: "/publications/lake2024.png",
    details:
      "Applied CNNs and explainability frameworks to automate plant trait identification for ecosystem health research, supported by a web-based prototype.",
    tools: [
      "CNN",
      "Computer Vision",
      "Explainable AI",
      "Environmental Research",
    ],
    link: "https://wgbis.ces.iisc.ac.in/energy/lake2024/",
    citation:
      "Iyer AH, Widyawati J. Automated identification and analysis of plant traits. IISc Lake Symposium 2024.",
  },

  {
    type: "poster",
    name: "Agent-Based Modelling of Urban Heat Island",
    desc: "Poster – ASCB Cell Bio 2024",
    imgSrc: "/publications/netlogo.png",
    details:
      "Developed a NetLogo-based agent simulation model for teaching interdisciplinary concepts related to urban heat islands.",
    tools: [
      "NetLogo",
      "Agent-Based Modelling",
      "Climate Modelling",
      "Education",
    ],
    link: "https://www.ascb.org/wp-content/uploads/2024/11/AbstractPDFs-Poster-ALLwTOC_sm.pdf",
    citation:
      "Loo YL, Iyer AH. Agent-based modelling of urban heat island. ASCB Cell Bio 2024.",
  },
  {
    type: "book",
    name: "Cobwebs of the Cosmos",
    desc: "Poetry Book · October 29, 2020",
    imgSrc: "/publications/cobwebs-of-the-cosmos.png", 
    details:
      "A poetry collection exploring interconnectedness between self, society, and the universe. Themes include self-discovery, environmental consciousness, and social causes, framed through the metaphor of cosmic entanglement.",
    tools: [
      "Poetry",
      "Creative Writing",
      "Environmental Themes",
      "Philosophy",
    ],
    link: "https://notionpress.com/author/aishwaryahiyer?srsltid=AfmBOooj1tkltE5oeVSCjS0GmEvw45lWScHp7qyHmIMxXEX4mCn0dRSQ", // replace with Amazon / publisher link if available
    citation:
      "Iyer AH. Cobwebs of the Cosmos. Poetry Collection, 2020.",
  },

  {
    type: "book",
    name: "Incandescence",
    desc: "Poetry Book · January 1, 2018",
    imgSrc: "/publications/incandescence.png", 
    details:
      "A collection of poems reflecting on spirituality, hope, struggle, and coming-of-age experiences, documenting a journey inward toward self-discovery.",
    tools: [
      "Poetry",
      "Creative Writing",
      "Spirituality",
      "Coming-of-Age",
    ],
    link: "https://notionpress.com/author/aishwaryahiyer?srsltid=AfmBOooj1tkltE5oeVSCjS0GmEvw45lWScHp7qyHmIMxXEX4mCn0dRSQ", // replace if published online
    citation:
      "Iyer AH. Incandescence. Poetry Collection, 2018.",
  },

  {
    type: "conference",
    name: "Analysing Dengue From an Ecological Perspective",
    desc: "Conference Paper · LAKE 2020 (IISc)",
    imgSrc: "/publications/lake2020.png", 
    details:
      "An ecological analysis examining correlations between rainfall patterns, green cover reduction, and dengue outbreaks in India from 2015–2019, presented at IISc’s LAKE 2020 conference.",
    tools: [
      "Ecological Analysis",
      "Public Health",
      "Environmental Data",
      "Urban Studies",
    ],
    link: "https://www.researchgate.net/publication/347974790_ANALYSING_DENGUE_FROM_AN_ECOLOGICAL_PERSPECTIVE",
    citation:
      "Iyer AH. Analysing dengue from an ecological perspective. LAKE 2020, Indian Institute of Science.",
  },

  {
    type: "article",
    name: "Artificial Intelligence: The New Normal",
    desc: "Science Communication · CEiBa Newsletter (2020)",
    imgSrc: "/publications/ceiba-ai.png", 
    details:
      "A science communication article introducing artificial intelligence concepts to a general audience, aiming to make complex scientific ideas accessible and engaging.",
    tools: [
      "Science Communication",
      "Artificial Intelligence",
      "Public Outreach",
      "Writing",
    ],
    link: "https://www.researchgate.net/publication/342916662_CEiBa_Newsletter_Volume_3_Issue_2_2020?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwcm9maWxlIiwicHJldmlvdXNQYWdlIjpudWxsLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19",
    citation:
      "Iyer AH. Artificial intelligence: The new normal. CEiBa Newsletter, Vol. 3, Issue 2, 2020.",
  },

  {
    type: "article",
    name: "Glimpses of Nature: Bees and Beats",
    desc: "Science Communication · CEiBa Newsletter",
    imgSrc: "/publications/ceiba-bees.png", 
    details:
      "A popular science article blending ecology and storytelling to communicate scientific ideas related to nature and biodiversity for a non-specialist audience.",
    tools: [
      "Science Communication",
      "Ecology",
      "Environmental Awareness",
      "Writing",
    ],
    link: "https://www.researchgate.net/publication/340645271_CEiBa_Newsletter_Volume_3_Issue_1_2020",
    citation:
      "Iyer AH. Glimpses of nature: Bees and beats. CEiBa Newsletter, Vol. 3, Issue 1.",
  },

  {
    type: "conference",
    name: "Understanding the Green Cover of My Neighbourhood",
    desc: "LAKE 2018 · Conference on Conservation and Sustainable Management of Riverine Ecosystems",
    imgSrc: "/publications/lake2018.png",
    details:
      "A field-based study examining urban green spaces as essential 'lung spaces' in rapidly urbanising cities. Focusing on Vijaya Bank Colony in South Bangalore, the research documents avenue tree diversity, public perception, ecological significance, key threats, and proposes practical conservation measures.",
    tools: [
      "Urban Ecology",
      "Field Research",
      "Environmental Conservation",
      "Science Communication",
    ],
    link: "https://www.researchgate.net/publication/344958581_UNDERSTANDING_THE_GREEN_COVER_OF_MY_NEIGHBOURHOOD",
    citation:
      "Iyer, A. H. (2018). Understanding the Green Cover of My Neighbourhood. Proceedings of LAKE 2018, Moodbidri, India."
  }


  ];
