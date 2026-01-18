export const SHINOBI_DATA = {
    profile: {
        name: "Harsh Jalindre",
        rank: "Jonin (Software Engineer)",
        tagline: "Mastering high-speed Lightning Release (Golang/C++) and intricate Genjutsu Interfaces (React/TypeScript).",
        email: "hjalindre33@gmail.com",
        linkedin: "https://linkedin.com/in/harsh-jalindre-b96b1a217",
        location: "Pune, Maharashtra"
    },
    skills: [
        { name: "React / Next.js / TS", level: "Sanin Level", value: 95, type: "lightning" },
        { name: "Node.js / Python / PHP", level: "Jonin Level", value: 90, type: "fire" },
        { name: "Go (Golang) / C++", level: "Jonin Level", value: 80, type: "lightning" },
        { name: "Databases (SQL/NoSQL)", level: "Chunin Level", value: 80, type: "earth" },
        { name: "AWS (SQS/SNS/Lambda)", level: "Genin Level", value: 60, type: "fire" },
    ],
    missions: [
        {
            date: "Aug 2025 - Present",
            rank: "Software Engineer (Jonin)",
            village: "Prescient Technologies",
            tasks: [
                "Engineering enterprise solutions for BigTincan using React, Node.js, and TypeScript.",
                "Optimizing high-concurrency data modules with Go and C++.",
                "Architecting event-driven systems via AWS SQS/SNS to decouple heavy content-syncing tasks."
            ]
        },
        {
            date: "Sep 2024 - Jun 2025",
            rank: "Software Developer (Chunin)",
            village: "Plus91 Technologies",
            tasks: [
                "Spearheaded Healthcare/Lab applications using React, Laravel, and PHP.",
                "Implemented HL7 integration standards for medical system interoperability.",
                "Refactored legacy codebases to improve maintainability and UX."
            ]
        },
        {
            date: "Dec 2022 - Sep 2024",
            rank: "Software Developer (Chunin)",
            village: "TechLeaper Systems",
            tasks: [
                "Developed School ERP and Scholarship platforms using Next.js and Node.js.",
                "Integrated WhatsApp, Email, and SMS APIs for automated user notifications.",
                "Managed MySQL and MSSQL administration for high availability."
            ]
        },
        {
            date: "Nov 2021 - Dec 2022",
            rank: "Software Developer (Genin)",
            village: "Spero Healthcare Innovation",
            tasks: [
                "Engineered the 108 Emergency App and healthcare management systems.",
                "Created RESTful APIs with Express.js and managed PostgreSQL/MySQL data.",
                "Streamlined deployment pipelines using Git and team collaborations."
            ]
        }
    ],
    projects: [
        {
            title: "Bigtincan Content Hub",
            desc: "Architected a unified AI-driven content engine for Fortune 500 clients, leveraging Go microservices and serverless AWS Lambda transformations.",
            tags: ["Golang", "React", "AWS SQS", "Python", "Symfony"],
            color: "orange",
            forbidden: true
        },
        {
            title: "Placement Portal",
            desc: "Designed a full-stack job application portal with real-time status updates via WhatsApp and SMTP integration.",
            tags: ["Node.js", "React", "Express", "MySQL"],
            color: "blue",
            forbidden: false
        },
        {
            title: "Healthcare Management App",
            desc: "Built a secure cross-platform system for pharmacy inventory and digital fee transactions via Payment Gateway APIs.",
            tags: ["Laravel", "React", "Redux", "MySQL"],
            color: "green",
            forbidden: false
        }
    ]
};