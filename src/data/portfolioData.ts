export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemStatement?: string;
  implementedFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  isRepoVerified: boolean;
  type: 'full-stack' | 'backend' | 'research' | 'dashboard';
  highlights?: string[];
  scadaMetrics?: { label: string; value: string; status: 'normal' | 'warning' | 'optimal' }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  description: string;
  credentialUrl?: string;
  isUrlVerified: boolean;
}

export interface HackathonActivity {
  id: string;
  name: string;
  year: string;
  role: string;
  projectName?: string;
  details: string;
  results: string;
  credentialUrl?: string;
  isVerifiedResult: boolean;
}

export interface PortfolioData {
  profile: {
    name: string;
    degree: string;
    university: string;
    cgpa: string;
    location: string;
    email: string;
    headline: string;
    summary: string;
    aboutLong: string;
    resumeUrl: string;
    targetRoles: string[];
    links: {
      github: string;
      linkedin: string;
      leetcode: string;
      codechef: string;
      emailMailto: string;
      hrRepo: string;
    };
  };
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  hackathons: HackathonActivity[];
  education: {
    degree: string;
    university: string;
    location: string;
    cgpa: string;
    coreSubjects: string[];
    highlights: string[];
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Abhishek Asundi",
    degree: "B.Tech in Computer Science and Engineering",
    university: "SRM University",
    cgpa: "8.9 / 10",
    location: "Chennai, India",
    email: "shek9949@gmail.com",
    headline: "Computer Science & Engineering Student | SRM University",
    summary: "I am a Computer Science and Engineering student at SRM University with a strong foundation in programming, software development, databases, and problem-solving. I enjoy building practical applications, exploring technologies, and developing software solutions for real-world problems.",
    aboutLong: "My core technical interests lie in software engineering, backend systems, full-stack development, database architecture, and practical machine learning applications. Throughout my academic journey at SRM University, I have focused on mastering object-oriented design, algorithm optimization, and robust software principles. I am eager to apply my problem-solving skills to real-world production engineering projects.",
    resumeUrl: "https://drive.google.com/file/d/1ic3zvKaThZU9Wh-au976-Z9-Tgt64KMR/view?usp=drivesdk",
    targetRoles: [
      "Software Engineer",
      "Associate Software Engineer",
      "Programmer Analyst",
      "Backend Developer",
      "Full-Stack Developer"
    ],
    links: {
      github: "https://github.com/Shek9949",
      linkedin: "https://www.linkedin.com/in/abhi-shek-40b342338/",
      leetcode: "https://leetcode.com/u/abhishek939/",
      codechef: "https://www.codechef.com/users/army_elf_53",
      emailMailto: "mailto:shek9949@gmail.com",
      hrRepo: "https://github.com/Shek9949/HR-management"
    }
  },

  skills: [
    {
      category: "Programming Languages",
      iconName: "Code2",
      skills: [
        { name: "Java" },
        { name: "C++" },
        { name: "Python" }
      ]
    },
    {
      category: "Frontend Development",
      iconName: "Layout",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" }
      ]
    },
    {
      category: "Backend Development",
      iconName: "Server",
      skills: [
        { name: "Spring Boot" },
        { name: "Spring Security" }
      ]
    },
    {
      category: "Databases & Storage",
      iconName: "Database",
      skills: [
        { name: "MySQL" },
        { name: "SQL" }
      ]
    },
    {
      category: "CS Fundamentals",
      iconName: "BookOpen",
      skills: [
        { name: "Object-Oriented Programming (OOP)" },
        { name: "Data Structures & Algorithms (DSA)" },
        { name: "Database Management Systems (DBMS)" },
        { name: "Computer Networks" }
      ]
    },
    {
      category: "Developer Tools",
      iconName: "Wrench",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "MySQL Workbench" }
      ]
    },
    {
      category: "Areas of Interest",
      iconName: "Sparkles",
      skills: [
        { name: "Software Engineering" },
        { name: "Backend Development" },
        { name: "Full-Stack Development" },
        { name: "Artificial Intelligence" },
        { name: "Machine Learning" }
      ]
    }
  ],

  projects: [
    {
      id: "hr-management-system",
      title: "HR Management System",
      subtitle: "Employee & Organizational Workflow Management Software",
      description: "A comprehensive software application focused on organizing HR-related information, structuring employee records, and simplifying administrative management workflows.",
      problemStatement: "Organizations need a centralized, structured system to manage employee data, track departmental structures, and eliminate manual record keeping.",
      implementedFeatures: [
        "Centralized employee directory and profile tracking",
        "Role and departmental hierarchy management",
        "Structured data views with responsive UI interface",
        "Modular codebase structured in TypeScript and modern web standards",
        "Streamlined navigation for HR administrative tasks"
      ],
      techStack: ["TypeScript", "CSS", "JavaScript", "HTML"],
      githubUrl: "https://github.com/Shek9949/HR-management",
      isRepoVerified: true,
      type: "full-stack"
    },
    {
      id: "hospital-management-system",
      title: "Hospital Management System",
      subtitle: "Healthcare Operations & Patient Record Application",
      description: "An application designed to streamline hospital operations by centralizing patient information, doctor scheduling, department records, and medical appointments.",
      problemStatement: "Healthcare facilities struggle with fragmented appointment bookings and disconnected patient history records.",
      implementedFeatures: [
        "Patient registration and medical history management",
        "Doctor assignment and department scheduling",
        "Appointment tracking and status updates",
        "Structured database query management for quick data retrieval"
      ],
      techStack: ["Java", "MySQL", "SQL", "OOP Design"],
      githubUrl: "",
      isRepoVerified: false,
      type: "backend"
    },
    {
      id: "wind-turbine-fault-detection",
      title: "Wind Turbine Fault Detection and Monitoring",
      subtitle: "Academic SCADA Data Analysis & Early Anomaly Detection",
      description: "An academic research project investigating wind turbine SCADA (Supervisory Control and Data Acquisition) telemetry to identify abnormal operating behaviors and support early fault detection.",
      problemStatement: "Wind turbines experience costly downtime due to unpredicted mechanical wear; continuous SCADA data telemetry monitoring can flag early anomalies.",
      implementedFeatures: [
        "SCADA sensor data analysis and noise filtering",
        "Establishing healthy operating baseline parameters",
        "Sensor behavior anomaly signal evaluation",
        "Early fault detection research and telemetry visualization"
      ],
      techStack: ["Python", "SCADA Telemetry Analysis", "Data Science", "Anomaly Detection"],
      githubUrl: "",
      isRepoVerified: false,
      type: "dashboard",
      scadaMetrics: [
        { label: "Rotor Velocity Baseline", value: "14.8 RPM", status: "optimal" },
        { label: "Gearbox Temperature", value: "62.4 °C", status: "normal" },
        { label: "Vibration Spectral Anomaly", value: "0.024 RMS", status: "normal" },
        { label: "Generator Efficiency", value: "94.2 %", status: "optimal" }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-sap",
      title: "SAP Certification",
      issuer: "SAP",
      year: "2024 Verified Credential",
      description: "Enterprise software systems overview focusing on business processes, database integration, and structural software design principles.",
      credentialUrl: "https://drive.google.com/file/d/1X3B1XyG_r0fqW5Fjpl14ofCtdKNpFE4i/view?usp=drivesdk",
      isUrlVerified: true
    },
    {
      id: "cert-nptel-java",
      title: "NPTEL Java Certification",
      issuer: "NPTEL / IIT",
      year: "Verified Credential",
      description: "Comprehensive certification covering advanced Java concepts, Object-Oriented Design patterns, exception handling, multithreading, and standard library collections.",
      credentialUrl: "https://drive.google.com/file/d/1zG_mItZP9UZCRNUUVK02yQbdttffLkyc/view?usp=drivesdk",
      isUrlVerified: true
    },
    {
      id: "cert-azure-ai",
      title: "Artificial Intelligence on Microsoft Azure",
      issuer: "Coursera / Microsoft Azure",
      year: "Verified Credential",
      description: "Certification covering cloud-based machine learning models, Azure Cognitive Services, computer vision concepts, and AI model evaluation.",
      credentialUrl: "https://drive.google.com/file/d/1ACqIrH_2dS42EepDIG5myzGxEOjeY3L6/view?usp=drivesdk",
      isUrlVerified: true
    },
    {
      id: "cert-iot",
      title: "Internet of Things (IoT) Certification",
      issuer: "IoT Credential",
      year: "Verified Credential",
      description: "Coursework covering embedded hardware fundamentals, sensor communication protocols, microcontrollers, and IoT network telemetry.",
      credentialUrl: "https://drive.google.com/file/d/1N0ZfVcqhW9A859uHwCLqIJKbAKNQUflI/view?usp=drivesdk",
      isUrlVerified: true
    },
    {
      id: "cert-udemy-python",
      title: "Udemy Python Bootcamp",
      issuer: "Udemy",
      year: "Verified Credential",
      description: "Hands-on Python development bootcamp covering core syntax, data manipulation, modular programming, object-oriented principles, and scripting.",
      credentialUrl: "https://drive.google.com/file/d/1_RVsJHfswIxwWA-jtyami1kqVhkM7yaL/view?usp=drivesdk",
      isUrlVerified: true
    }
  ],

  hackathons: [
    {
      id: "hack-guidewire-2026",
      name: "Guidewire DEVTrails University Hackathon 2026",
      year: "2026",
      role: "Student Engineering Participant",
      projectName: "Software Design & Innovation Prototype",
      details: "Participated in Guidewire DEVTrails hackathon solving real-world software design and algorithmic challenges under rapid prototype constraints.",
      results: "Verified Certificate & Participation",
      credentialUrl: "https://drive.google.com/file/d/1ELXUeAbgdpofPRbeMWytcUYatGdNoyBt/view?usp=drivesdk",
      isVerifiedResult: true
    },
    {
      id: "hack-vit-2026",
      name: "VIT Hackathon 2026",
      year: "2026",
      role: "Student Developer",
      projectName: "Engineering Solution Prototype",
      details: "Competed in the annual VIT Hackathon, collaborating with peer developers to build innovative software solutions within tight timelines.",
      results: "Verified Certificate & Participation",
      credentialUrl: "https://drive.google.com/file/d/176OOxhQ_lxp8Lw4UdcP5PwJB4FPmSYo3/view?usp=drivesdk",
      isVerifiedResult: true
    }
  ],

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    university: "SRM University",
    location: "Chennai, India",
    cgpa: "8.9 / 10",
    coreSubjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
      "Operating Systems"
    ],
    highlights: [
      "Consistent academic excellence with CGPA of 8.9 / 10",
      "Active participant in technical competitive programming and hackathons",
      "Strong focus on backend development, databases, and problem solving"
    ]
  }
};
