export const personalInfo = {
  name: "Ujjwal Sharma",
  title: "Data Engineer | Full Stack Developer",
  tagline: "Transforming data into insights, and ideas into scalable solutions",
  email: "epitome_courtly.0i@icloud.com",
  linkedin: "https://www.linkedin.com/in/ujjwal-sharma-77bb43306",
  github: "https://github.com/Uj1797",
  location: "New Delhi, India",
};

export const experiences = [
  {
    id: 1,
    company: "BytePanda Technologies",
    role: "Software Development Engineer | Full Stack",
    period: "03/2025 – Present",
    location: "Gurugram",
    type: "current",
    project: "Pharmaceutical Research Platform",
    client: "Bliss GVS Pharma Limited",
    highlights: [
      "Delivered production ready solutions using Frappe + React, leading end to end development of research platform",
      "Designed intuitive UI/UX workflows and user journeys tailored to pharmaceutical research operations",
      "Built and structured scalable DocTypes, data models, and linked workflows to support complex research tracking",
      "Engineered backend logic with server scripts, API endpoints, validations, and role based permissions",
      "Developed clean, modular React components with smooth API integration and reusable architecture",
      "Created detailed analytics dashboards, reports, and data views for research visibility",
      "Managed continuous improvements debugging, performance tuning, and deployment",
    ],
    technologies: ["React", "Frappe", "Python", "PostgreSQL", "REST API"],
  },
  {
    id: 2,
    company: "Nirjai Technologies & SourceEase",
    role: "Data Engineer",
    period: "04/2024 – 03/2025",
    location: "New Delhi",
    type: "past",
    projects: [
      {
        name: "Functional Modifications and Backend Optimization",
        client: "Mankind Pharma's Pathkind Labs",
        highlights: [
          "Managed the Pathkind Labs database ensuring high availability and stable operations",
          "Delivered 38 Change Requests in a quarter, consistently meeting timelines and quality standards",
          "Reduced key procedure execution times from 25-30 seconds to under 2 seconds through targeted tuning",
          "Conducted performance testing with JMeter and used Python for SQL parsing and insight generation",
          "Resolved critical production issues through RCA and eliminated major deadlocks",
        ],
      },
      {
        name: "Healthtech Platform",
        client: "HDU Healthcare",
        highlights: [
          "Collaborated with clients to translate business requirements into a comprehensive data model",
          "Designed and implemented scalable database architecture for efficient data management",
          "Developed and optimized PostgreSQL stored procedures and functions for business needs",
          "Wrote Python scripts to integrate databases with existing data sources",
        ],
      },
      {
        name: "Tax Consultancy Platform",
        client: "Tax Helpline",
        highlights: [
          "Defined database schema for income tax return filing, tax consultancy and inquiries",
          "Implemented business logic to align with all compliance criteria for Indian tax filing stages",
          "Ensured proper API integration with database tables and queries for accurate data retrieval",
        ],
      },
      {
        name: "Babysitter Mobile Application",
        client: "MaPa aur Hum",
        highlights: [
          "Developed and optimized backend logic within the database to support mobile application functionality",
          "Designed and implemented database functions and views to efficiently fetch and access various KPIs",
          "Contributed to the creation of in app dashboards by providing structured data and performance insights",
        ],
      },
      {
        name: "Sourcing within Tech Domain",
        client: "SourceEase | UrJobMart",
        highlights: [
          "Oversaw end-to-end database administration, including query design, optimization, and maintenance",
          "Designed and delivered real-time dashboards that provided actionable business insights",
          "Conducted technical assessment calls, evaluating candidates' skills and matching talent",
          "Built dynamic dashboards in Apache Superset to deliver insights and track organizational metrics",
        ],
      },
    ],
    technologies: ["PostgreSQL", "Python", "Apache Superset", "JMeter", "SQL"],
  },
  {
    id: 3,
    company: "KEETUP & Co.",
    role: "Data Science Intern & Business Analyst",
    period: "10/2023 – 03/2024",
    location: "Gurugram",
    type: "past",
    highlights: [
      "Managed database operations, optimized SQL queries to extract insights from production data",
      "Led data preprocessing and EDA, contributing to a machine learning model that optimized production costs, achieving a 5.81% reduction",
      "Worked with spreadsheets, leveraging Macros, Pivot Tables, and MIS techniques for data visualization",
      "Assisted in stakeholder reporting, client negotiations, and marketing strategies, driving an 18.74% revenue increase by Q1 2024",
    ],
    technologies: ["SQL", "Python", "Excel", "Power BI", "Machine Learning"],
  },
];

export const education = {
  degree: "Masters of Computer Application",
  institution: "Kalinga Institute of Industrial Technology",
  period: "07/2023 – 07/2025",
  cgpa: "8.92",
  location: "Bhubaneswar, India",
};

export const skills = {
  techStack: ["React", "Next.js", "Frappe Framework", "TailwindCSS", "PostgreSQL"],
  dataScience: ["Jupyter", "Data Wrangling", "Data Visualization", "Power BI", "Apache Superset", "Data Preprocessing", "EDA", "Data Extraction", "ETL", "Pandas", "Sklearn"],
  databases: ["SQL", "CRUD Operations", "Subqueries", "Stored Procedure", "User Defined Function", "Indexing", "Performance Testing", "Query Optimization"],
  genAI: ["Langchain", "Llama 3", "Streamlit", "GrokAPI", "OpenAI API"],
  programmingLanguages: ["Python", "JavaScript", "Dart"],
};

export const certificates = [
  { name: "IBM Data Science Professional Certification", issuer: "IBM", color: "#0066ff" },
  { name: "IBM Applied Data Science Specialization", issuer: "IBM", color: "#0066ff" },
  { name: "Microsoft Power BI Analyst Certifications", issuer: "Microsoft", color: "#00a4ef" },
  { name: "Macquarie University Excel Skills for Business: Essentials", issuer: "Macquarie", color: "#6b21a8" },
  { name: "Meta Front End Developer Professional Certification", issuer: "Meta", color: "#0668e1" },
  { name: "Amazon AWS Fundamentals Specialization", issuer: "Amazon", color: "#ff9900" },
  { name: "Microsoft Career Essentials in Generative AI", issuer: "Microsoft", color: "#00a4ef" },
  { name: "Tata Group: Data Visualization Job Sim Certification", issuer: "Tata", color: "#486aaf" },
  { name: "Google Cybersecurity Professional Certification", issuer: "Google", color: "#4285f4" },
];

// Skill categories for constellation visualization
export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    color: "#00d4ff",
    shape: "I",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TailwindCSS", icon: "SiTailwindcss" },
      { name: "JavaScript", icon: "SiJavascript" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    color: "#a855f7",
    shape: "O",
    skills: [
      { name: "Python", icon: "SiPython" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Frappe", icon: "SiPython" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    color: "#00ff88",
    shape: "T",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MariaDB", icon: "SiMariadb" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "SQL", icon: "FaDatabase" },
    ],
  },
  {
    id: "datascience",
    name: "Data Science",
    color: "#ff7b00",
    shape: "S",
    skills: [
      { name: "Pandas", icon: "SiPandas" },
      { name: "NumPy", icon: "SiNumpy" },
      { name: "Sklearn", icon: "SiScikitlearn" },
      { name: "Jupyter", icon: "SiJupyter" },
    ],
  },
  {
    id: "genai",
    name: "GenAI",
    color: "#ff006e",
    shape: "Z",
    skills: [
      { name: "OpenAI", icon: "SiOpenai" },
      { name: "Langchain", icon: "FaLink" },
      { name: "Llama", icon: "SiMeta" },
      { name: "Streamlit", icon: "SiStreamlit" },
    ],
  },
  {
    id: "analytics",
    name: "Analytics",
    color: "#ffd600",
    shape: "L",
    skills: [
      { name: "Power BI", icon: "FaChartBar" },
      { name: "Apache Superset", icon: "SiApache" },
      { name: "Tableau", icon: "SiTableau" },
      { name: "Excel", icon: "FaFileExcel" },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    color: "#3b82f6",
    shape: "J",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Linux", icon: "SiLinux" },
      { name: "AWS", icon: "FaAws" },
    ],
  },
];
