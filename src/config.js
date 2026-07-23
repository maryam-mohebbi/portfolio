// ============================================
// PORTFOLIO CONFIGURATION FILE
// ============================================


const portfolioData = {
  // ============================================
  // PERSONAL INFORMATION
  // ============================================
  personal: {
    name: "Maryam Mohebi",
    title: "AI Engineer & LLM Specialist",
    tagline: "Building intelligent systems with LLMs, RAG, and fine-tuning",
    
    // photo
    photo: "./image/main.png",
    
    // summary 
    summary: [
      "I'm an AI Engineer passionate about building intelligent systems that solve real-world problems. My journey into AI wasn't straightforward - I started with a background in IT Engineering and network administration, where I discovered my love for problem-solving and technology. After working in administration and product management, I realized I wanted to create the technical solutions myself, not just manage them. That led me to pursue a Master's in Data Science in Berlin, where I fell in love with machine learning and AI.",

      "Right now, most of my energy goes into VoyaLang (voyalang.com), an AI-powered IELTS writing tutor I founded and built end to end. It gives learners per-criterion band scores, line-by-line corrections, and target-band rewrites in about 30 seconds, and it's live with real users. Building it solo, from the LLM assessment pipelines to the backend, the two frontends, and the deployment, has been the clearest test yet of what I care about: turning research-grade AI into a reliable product people actually depend on.",

      "Today, I specialize in Large Language Models, RAG systems, and fine-tuning techniques. I'm fascinated by how we can make AI systems more intelligent, efficient, and practical for real applications. Whether it's reducing compute costs through smart fine-tuning or building multi-agent systems that can reason and act autonomously, I love pushing the boundaries of what's possible with AI.",

      "What drives me is continuous learning and solving complex technical challenges. My expertise has evolved from foundational web development to architecting production AI systems. I specialize in fine-tuning open-source models like LLaMA, Qwen, Gemma, and Mixtral using LoRA and QLoRA techniques, while integrating frontier models like GPT and Claude for production applications. I'm deeply interested in the engineering behind these systems: optimizing inference, implementing efficient RAG pipelines, and building robust AI architectures. I believe the best solutions come from understanding both the technical depth and the real-world impact of what we build."
    ].join("\n\n"),
    
    email: "dev[at]mohebi.me",
    location: "Berlin, Germany",
    github: "github.com/maryam-mohebbi",
    linkedin: "linkedin.com/in/maryam-mohebi/",
    
    // Social Links
    socialLinks: {
      email: "mailto:dev@mohebi.me",
      linkedin: "https://www.linkedin.com/in/maryam-mohebi/",
      github: "https://github.com/maryam-mohebbi"
    }
  },

  // ============================================
  // WORK EXPERIENCE
  // ============================================
  workExperience: [
      {
      title: "Founder & AI Engineer",
      company: "VoyaLang",
      location: "Berlin, Germany",
      period: "Mar 2026 - Present",
      current: true,
      achievements: [
        "Founded and built VoyaLang (voyalang.com), a live AI-powered IELTS writing tutor that delivers per-criterion band scores, line-by-line error correction, and target-band rewrites in about 30 seconds, with real users",
        "Built task-specific and chart-type-specific LLM pipelines calibrated to the official IELTS band descriptors, validated against 50 human-graded essays across 5 frontier models to within 0.5 band of the examiner reference",
        "Developed chart-aware Task 1 assessment across all 7 visual types (line graphs, bar charts, pie charts, tables, maps, process diagrams, and mixed) over a library of 1,400+ practice topics",
        "Engineered the full production stack solo: async FastAPI + PostgreSQL backend with 222 REST endpoints, two Next.js frontends, Dockerized deployment, and a Caddy reverse proxy with automatic TLS across staging and production",
        "Implemented a GDPR-compliant data layer with consent management, self-service account deletion, automated data-retention sweeps, and audit logging",
        "Built operational tooling: an admin console with per-request LLM cost tracking, capture-based LLM debugging, runtime configuration without redeploys, and Sentry monitoring across all deployables",
        "Built a custom blog CMS with a block-based article builder, scheduled publishing, no-redeploy public rendering, and LLM-generated social renditions for Instagram, Telegram, and LinkedIn",
        "Integrated consent-gated product analytics end to end (GA4 with server-side Measurement Protocol) plus automated lifecycle email sequences, referrals, and Google sign-in",
        "Established CI quality gates with 4,000+ backend tests, database-migration CI, Lighthouse CI, frontend test suites, and Maestro end-to-end UI flows, all wired into GitHub Actions"
      ]
    },
    {
      title: "AI Engineer & LLM Specialist",
      company: "Independent AI Development & Consulting",
      location: "Berlin, Germany",
      period: "Mar 2025 - Mar 2026",
      current: false,
      achievements: [
        "Designed and deployed production-grade AI applications using frontier and open-source models",
        "Built retrieval-augmented generation (RAG) pipelines using FAISS and vector DBs, enabling domain-specific Q&A",
        "Fine-tuned LLMs with LoRA/QLoRA + HuggingFace PEFT, reducing compute costs by 40% while maintaining accuracy",
        "Developed autonomous multi-agent systems for workflow automation and real-time decision-making",
        "Delivered enterprise-grade knowledge assistants integrated with REST APIs and Docker/Kubernetes",
        "Benchmarked 20+ LLMs to identify optimal trade-offs between cost, speed, and accuracy",
        "Published reproducible fine-tuning pipelines to support rapid experimentation",
        "Created multimodal customer support agents handling text, audio, and images",
        "Engineered AI programmer translating Python to optimized C++, achieving runtime performance boosts"
      ]
    },
    {
      title: "Research Assistant",
      company: "Berliner Hochschule für Technik",
      location: "Berlin, Germany",
      period: "Apr 2023 - Mar 2025",
      current: false,
      achievements: [
        "Researched synthetic data generation methods for healthcare & privacy-preserving ML in partnership with Charité",
        "Evaluated models with 50+ metrics covering fidelity, utility, statistical similarity, and privacy",
        "Built and published a Python package for data generation and evaluation pipelines",
        "Applied fairness & explainability techniques (SHAP, causal inference) for model transparency",
        "Designed REST APIs with FastAPI/Flask, containerized with Docker/Kubernetes",
        "Led feature engineering, hyperparameter tuning (Optuna), and model optimization",
        "Managed large-scale tabular datasets with advanced preprocessing and ETL workflows",
        "Delivered interactive demos, internal documentation, and academic presentations"
      ]
    },
    {
      title: "React Developer",
      company: "Freelancer",
      location: "Remote",
      period: "Oct 2021 - Oct 2023",
      current: false,
      achievements: [
        "Delivered multiple responsive web apps using React, JavaScript, and REST APIs",
        "Implemented reusable UI components and optimized rendering performance",
        "Managed source control with Git/GitHub, ensuring clean versioning and CI/CD pipelines",
        "Deployed apps on cloud platforms and integrated third-party APIs"
      ]
    },
    {
      title: "Product Owner",
      company: "Pars Parva System",
      location: "Tehran, Iran",
      period: "Jan 2020 - Oct 2022",
      current: false,
      achievements: [
        "Product Owner for internal administration systems",
        "Analyzed user needs, defined requirements, and designed an automation solution to streamline administrative, finance, and customer-facing processes",
        "Bridge between technical and non-technical stakeholders, ensuring operational processes are aligned with customer needs"
      ]
    },
    {
      title: "Director of Administration",
      company: "Pars Parva System",
      location: "Tehran, Iran",
      period: "Apr 2016 - Oct 2022",
      current: false,
      achievements: [
        "Rapidly promoted from Administrative Assistant → Supervisor → Director within 6 months",
        "Led both administrative and finance teams, managing payroll, tax compliance, and financial reporting",
        "Oversaw critical IT-adjacent tasks including domain registrations, software license management, and vendor coordination",
        "Built and maintained business reports (sales, purchases, customer satisfaction), enabling data-driven strategic planning",
        "Applied data analysis and visualization to optimize financial forecasting and decision-making"
      ]
    },
    {
        title: "Network Administrator",
        company: "Tehran Aseman Cargo Agency",
        location: "Tehran, Iran",
        period: "Nov 2014 - Mar 2016",
        current: false,
        achievements: [
          "Managed Active Directory infrastructure ensuring high availability and security",
          "Installed, configured, and maintained MDaemon mail server for enterprise operations",
          "Designed and maintained network infrastructure (LAN, switches, routers)",
          "Delivered full-range IT support: hardware, software, and network troubleshooting",
          "Implemented security policies and monitoring to safeguard company data"
        ]
      }
  ],
  

  // ============================================
  // EDUCATION
  // ============================================
  education: [
    {
      degree: "M.Sc. Data Science",
      school: "Berliner Hochschule für Technik",
      location: "Berlin, Germany",
      period: "Oct 2022 - Feb 2025",
      gpa: "1.52",
      details: [
        "Thesis: Empirical Comparison of Tabular Synthetic Data Generation Methods for Electronic Health Records",
        "Relevant Coursework: Machine Learning, Deep Learning, Recommendation Systems, Neural Networks, Mathematics, Statistics, Visualization, Business Intelligence"
      ]
    },
    {
      degree: "B.Sc. Information Technology",
      school: "Azad University of Parand",
      location: "Tehran, Iran",
      period: "Oct 2009 - Jan 2013",
      gpa: "1.9",
      details: [
        "Relevant Coursework: IT infrastructures, Networking, Business Management, Software Management"
      ]
    }
  ],

  // ============================================
  // SKILLS
  // ============================================
  skills: {
    "AI & LLM": [
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
      "Embedding-based Search",
      "LoRA/QLoRA Fine-tuning",
      "HuggingFace PEFT",
      "Multi-Agent Systems",
      "Agentic Workflows",
      "GPT",
      "Claude",
      "Gemini",
      "LLaMA",
      "Qwen",
      "Gemma",
      "Mixtral",
      "StarCoder",
      "Whisper"
    ],
    "Machine Learning & Data Science": [
      "Synthetic Data Generation",
      "Tabular ML",
      "Model Evaluation",
      "Statistical Modeling",
      "Mathematical Modeling",
      "Causal Inference",
      "Fairness & Explainability",
      "Deep Learning",
      "Neural Networks",
      "Hyperparameter Optimization",
      "Multi-Objective Optimization",
      "A/B Testing",
      "Recommendation Systems",
      "Time Series Forecasting",
      "Feature Engineering",
      "Pattern Recognition"
    ],
    "Programming & Development": [
      "Python",
      "SQL",
      "PostgreSQL",
      "JavaScript",
      "React",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "ETL",
      "Code Documentation",
      "Unit Testing",
      "Git",
      "GitHub",
      "GitHub Actions"
    ],
    "Deployment & Infrastructure": [
      "REST APIs",
      "Flask",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Cloud Platforms",
      "Caddy",
      "CI/CD",
      "GitHub Actions",
      "Sentry"
    ],
    "Soft Skills": [
      "Communication",
      "Collaboration",
      "Problem-Solving",
      "Reliability",
      "Fast Learning",
      "Leadership"
    ]
  },

  // ============================================
  // LANGUAGES
  // ============================================
  languages: [
    { name: "English", level: "Professional Proficiency" },
    { name: "Farsi", level: "Native" },
    { name: "German", level: "A1" }
  ],

  // ============================================
  // FEATURED PROJECTS
  // ============================================
  projects: [
    // Example format:
    // {
    //   name: "Project Name",
    //   description: "Brief description",
    //   technologies: ["Python", "PyTorch", "FastAPI"],
    //   github: "https://github.com/username/repo",
    //   demo: "https://demo-link.com" // optional
    // }
  ]
};

// Don't modify below this line
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}

