export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
  status?: 'normal' | 'warning' | 'optimal';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  objective?: string;
  problemStatement?: string;
  implementedFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  isRepoVerified: boolean;
  type: 'backend' | 'ml' | 'hpc' | 'full-stack' | 'research' | 'dashboard';
  highlights?: string[];
  metrics?: ProjectMetric[];
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
      id: "carwashpro-management-system",
      title: "CarWashPro: Multi-Branch Car Wash Management System",
      subtitle: "Multi-Branch Backend & Enterprise Vehicle Service Management Platform",
      description: "Designed and built a backend application from scratch, handling system design, database modelling, API development, validation, and testing for multi-branch car wash operations.",
      problemStatement: "Multi-branch automotive service centers face challenges in synchronizing cross-branch operations, enforcing secure role-based access, ensuring soft deletion for transaction audits, and maintaining data consistency across high-volume booking workflows.",
      implementedFeatures: [
        "Designed and built a backend application from scratch, handling system design, database modelling, API development, validation, and testing.",
        "Implemented secure authentication and authorization using JWT and Spring Security with stateless session management and role-based access control.",
        "Developed Vehicle Management and Service Catalog modules with CRUD operations, soft deletion, ownership validation, duplicate prevention, and centralized exception handling.",
        "Used AI coding tools to accelerate development and improve code quality, with Git for version control and Postman for end-to-end API testing."
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "Spring Data JPA",
        "Hibernate",
        "MySQL",
        "REST APIs",
        "Git",
        "Postman"
      ],
      githubUrl: "",
      isRepoVerified: false,
      type: "backend",
      highlights: [
        "Stateless JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "Soft Deletion & Ownership Validation",
        "Centralized Exception Handling"
      ],
      metrics: [
        { label: "Security & Auth", value: "JWT + Spring Security", detail: "Stateless RBAC", status: "optimal" },
        { label: "Database ORM", value: "Hibernate / JPA", detail: "MySQL Relational Model", status: "optimal" },
        { label: "Data Integrity", value: "Soft Deletes", detail: "Duplicate Prevention", status: "optimal" },
        { label: "Testing Suite", value: "Postman & Git", detail: "End-to-End REST Testing", status: "optimal" }
      ]
    },
    {
      id: "stress-detection-system",
      title: "Stress Detection System: Multimodal Wearable Signal Classification",
      subtitle: "Multimodal Wearable Physiological Signal Classification & Machine Learning Pipeline",
      description: "A machine learning and physiological signal processing pipeline to ingest, clean, normalize, and classify multimodal telemetry from wearable sensors to accurately identify human stress states.",
      problemStatement: "Accurately identifying human stress levels from wearable device telemetry requires filtering high-noise physiological signals and generalizing predictive classifiers across diverse, unseen individuals.",
      implementedFeatures: [
        "Developed a data processing pipeline to ingest, clean, normalize, and process multimodal physiological signals from wearable devices, including heart rate (HR), electrodermal activity (EDA), blood volume pulse (BVP), skin temperature, and accelerometer data.",
        "Trained and evaluated ten machine learning classifiers, achieving approximately 84% accuracy under standard evaluation and 72% under subject-independent cross-validation.",
        "Applied Principal Component Analysis (PCA) for feature analysis and identified predictive physiological signals to inform model selection and classification efficiency."
      ],
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Signal Processing",
        "Feature Engineering"
      ],
      githubUrl: "",
      isRepoVerified: false,
      type: "ml",
      highlights: [
        "84% Standard Evaluation Accuracy",
        "72% Subject-Independent CV",
        "10 Machine Learning Classifiers",
        "5 Multimodal Sensor Signals (HR, EDA, BVP, TEMP, ACC)"
      ],
      metrics: [
        { label: "Standard Accuracy", value: "~84%", detail: "Benchmark Evaluation", status: "optimal" },
        { label: "Cross-Validation", value: "72%", detail: "Subject-Independent CV", status: "optimal" },
        { label: "Classifiers Tested", value: "10 Models", detail: "Scikit-learn Suite", status: "optimal" },
        { label: "Sensor Modalities", value: "5 Signals", detail: "HR, EDA, BVP, TEMP, ACC", status: "optimal" }
      ]
    },
    {
      id: "genome-sequence-alignment-framework",
      title: "Performance-Aware Adaptive Genome Sequence Alignment Framework for Multicore CPUs",
      subtitle: "Adaptive High-Performance Parallel DNA Sequence Alignment on Multicore CPUs",
      description: "An adaptive high-performance DNA sequence alignment framework integrating parallel dynamic programming, tiled matrix computation, wavefront scheduling, OpenMP multithreading, and banded alignment.",
      objective: "To investigate how adaptive algorithm selection and multicore CPU parallelism can improve DNA sequence alignment performance while maintaining correctness.",
      problemStatement: "Exact DNA sequence alignment is computationally intensive; scaling dynamic programming across multicore CPUs demands dependency-aware wavefront scheduling and adaptive algorithm selection based on sequence characteristics and thread availability.",
      implementedFeatures: [
        "Developed an adaptive DNA sequence alignment framework integrating sequential dynamic programming, tiled computation, wavefront scheduling, OpenMP multithreading, and banded alignment.",
        "Implemented tile-based matrix computation with dependency-aware scheduling to enable parallel execution across multiple CPU threads while preserving alignment correctness.",
        "Designed workload-aware strategy selection using sequence characteristics, estimated difference rates, workload size, and available threads.",
        "Evaluated performance using real chromosome X reference data and controlled synthetic query sequences, measuring execution time, speedup, thread utilization, and computational workload.",
        "Developed benchmarking and visualization workflows to examine tile-level execution timelines, workload distribution, and scalability across thread counts."
      ],
      techStack: [
        "C++",
        "OpenMP",
        "Dynamic Programming",
        "Parallel Computing",
        "High-Performance Computing (HPC)",
        "Python",
        "Matplotlib"
      ],
      githubUrl: "",
      isRepoVerified: false,
      type: "hpc",
      highlights: [
        "Real Chromosome X Reference Data",
        "Tile-Based Wavefront Scheduling",
        "Workload-Aware Adaptive Selection",
        "OpenMP Multithreading Scalability"
      ],
      metrics: [
        { label: "Dataset Evaluated", value: "Chromosome X", detail: "Real Reference Genomic Data", status: "optimal" },
        { label: "Parallel Framework", value: "OpenMP Multicore", detail: "Wavefront Dependency Scheduling", status: "optimal" },
        { label: "Algorithm Strategy", value: "Adaptive DP", detail: "Banded & Tiled Alignment", status: "optimal" },
        { label: "Benchmarking", value: "Python & Matplotlib", detail: "Tile Execution Timelines", status: "optimal" }
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
