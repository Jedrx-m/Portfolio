/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION FILE (portfolio.config.ts)
 * Tailored for: Jedrick T. Mariano
 * ==============================================================================
 * 
 * HOW TO UPDATE YOUR PORTFOLIO:
 * 1. To add or edit projects: modify the `projects` array below.
 * 2. To swap your resume: update `resume.pdfUrl` and `resume.fileName`.
 * 3. To update images: place files in `/src/assets/images/` and reference them.
 * 
 * You only need to touch this single file to keep your entire site up to date!
 */

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Web Applications' | 'Network Engineering' | 'Software Systems';
  year: string;
  featured: boolean;
  description: string;
  architectureOverview: string;
  keyMetrics: { label: string; value: string }[];
  technologies: string[];
  previewMedia: {
    image: string;
    alt: string;
    caption?: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface TrainingItem {
  title: string;
  institution: string;
  period: string;
  details: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    nickname: string;
    initials: string;
    title: string;
    subtitle: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    status: string;
    school: string;
    degree: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
  resume: {
    fileName: string;
    pdfUrl: string;
    lastUpdated: string;
    professionalSummary: string;
    skillCategories: SkillCategory[];
    experience: ExperienceItem[];
    technicalTraining: TrainingItem[];
    education: {
      degree: string;
      school: string;
      location: string;
      graduationYear: string;
      coursework: string;
    }[];
    certifications: {
      title: string;
      issuer: string;
      date: string;
    }[];
    organizations: {
      role: string;
      name: string;
      period: string;
    }[];
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  projects: ProjectItem[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Jedrick T. Mariano",
    nickname: "Jed",
    initials: "JM",
    title: "Information Technology & Cybersecurity",
    subtitle: "Web Development · Cisco Networking · Cloud Infrastructure",
    tagline: "Building secure web applications, configuring robust networks, and exploring cloud systems.",
    bio: "Information Technology student at Mapúa University majoring in Cybersecurity. Experienced in full-stack web development with React & TypeScript, database architecture with Supabase/PostgreSQL, Cisco enterprise routing & switching, and systems programming in C++ & Java.",
    location: "Antipolo, Philippines",
    email: "jedmariano09@gmail.com",
    phone: "(+63) 9312114024",
    status: "Open for technical internships, cybersecurity roles & software projects",
    school: "Mapúa University (Makati, Philippines)",
    degree: "B.S. in Information Technology, Cybersecurity Track",
    social: {
      github: "https://github.com/Jedrx-m",
      linkedin: "https://linkedin.com/in/jedrickmariano",
    },
  },

  resume: {
    fileName: "Mariano_Jedrick_Resume.pdf",
    pdfUrl: "/assets/aistudio/Mariano__Jedrick_Resume.docx_dbfe9f56.pdf",
    lastUpdated: "November 2026",
    professionalSummary:
      "Information Technology student at Mapúa University, majoring in cybersecurity, with practical experience in software development, web development, and network configuration. Skilled in C++, Java, and JavaScript/TypeScript, and experienced in supporting business operations and customer service. Dependable, detail-oriented, and eager to build a career in cybersecurity, cloud computing, and software development.",
    skillCategories: [
      {
        name: "Programming & Web Frameworks",
        skills: ["TypeScript", "React", "JavaScript", "C++", "Java", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        name: "IT Infrastructure & Security",
        skills: ["Cisco Packet Tracer", "VLANs & Access Control Lists", "OSPF Routing", "Network Security", "Computer Hardware", "OS Installation"],
      },
      {
        name: "Databases & Cloud Tools",
        skills: ["Supabase", "PostgreSQL", "Git & GitHub", "Hostinger Deployment", "REST APIs", "Cloud Fundamentals"],
      },
      {
        name: "Professional & Leadership",
        skills: ["Team Collaboration", "Task Coordination", "Agile Project Work", "Problem-Solving", "Customer Service"],
      },
    ],
    experience: [
      {
        period: "March 2021 — August 2024",
        role: "Business Operations & Cashier",
        company: "SAM-JU Korean Store",
        location: "Antipolo, Philippines",
        summary: "Supported high-volume retail operations, digital point-of-sale management, and daily backend administrative tasks.",
        achievements: [
          "Handled cashiering and customer service while supporting daily business operations with zero cash discrepancies.",
          "Assisted with backend administrative tasks and ensured accurate, secure processing of customer transactions.",
          "Strengthened time management, teamwork, and client-facing communication in a fast-paced retail environment.",
        ],
        skills: ["Operations", "Customer Relations", "Inventory Tracking", "Point of Sale"],
      },
    ],
    technicalTraining: [
      {
        title: "Cisco CCNA Training",
        institution: "Cisco Networking Academy, Mapúa Tech School of IT",
        period: "August 2025 — June 2026",
        details: [
          "Enterprise Networking, Security, and Automation (December 2025 to June 2026)",
          "Switching, Routing, and Wireless Essentials (August 2025 to November 2025)",
          "Finished Cisco Packet Tracer labs covering switching, routing, wireless, and network security",
          "Set up VLANs, access control lists (ACLs), and OSPF routing in simulated enterprise networks",
        ],
        skills: ["CCNA", "Packet Tracer", "OSPF", "VLANs", "ACLs", "Network Security"],
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Information Technology, Cybersecurity Track",
        school: "Mapúa University",
        location: "Makati, Philippines",
        graduationYear: "Expected 2028",
        coursework: "Cybersecurity, Information Security and Assurance, Networking Fundamentals (Cisco), Artificial Intelligence, Data Structures & Algorithms",
      },
    ],
    certifications: [
      {
        title: "Generative AI for Everyone",
        issuer: "DeepLearning.AI (Coursera)",
        date: "September 2026",
      },
      {
        title: "Foundations of Agile Project Management",
        issuer: "Google (Coursera)",
        date: "September 2026",
      },
      {
        title: "Cisco Networking Academy (NetAcad) Course Certificates",
        issuer: "Cisco Networking Academy",
        date: "June 2026",
      },
      {
        title: "Data Warehouse Concepts, Design, and Data Integration",
        issuer: "University of Colorado System (Coursera)",
        date: "December 2025",
      },
      {
        title: "Data Structures",
        issuer: "University of California (Coursera)",
        date: "July 2025",
      },
    ],
    organizations: [
      {
        role: "Member",
        name: "Amazon Web Services Student Builder Group, Arcus",
        period: "2026 — Present",
      },
      {
        role: "Member",
        name: "Google Developer Groups on Campus, Mapúa University",
        period: "2025 — 2026",
      },
    ],
  },

  stats: [
    {
      label: "Mapúa University",
      value: "BS IT",
      subtext: "Cybersecurity Track (Class of 2028)",
    },
    {
      label: "Technical Badges",
      value: "28+",
      subtext: "Coursera & Cisco verified credentials",
    },
    {
      label: "Cisco CCNA Labs",
      value: "100%",
      subtext: "Enterprise VLANs, ACLs & OSPF configured",
    },
    {
      label: "Tech Community",
      value: "AWS & GDG",
      subtext: "Active student builder group member",
    },
  ],

  projects: [
    {
      id: "brightsmile-dental-management",
      title: "BrightSmile Dental Management System",
      tagline: "Full-stack medical booking, patient records, and role-based access control platform.",
      category: "Web Applications",
      year: "2026",
      featured: true,
      description: "A comprehensive clinical web application built for dental clinics to manage appointments, electronic patient records, medical history, and staff scheduling. Features end-to-end user authentication and role-based access controls to guarantee medical privacy.",
      architectureOverview: "Developed with React and TypeScript on the frontend, interfaced with Supabase for PostgreSQL database storage and secure session management. Deployed to production under a custom domain registered via Hostinger, utilizing Git and GitHub for collaborative version control.",
      keyMetrics: [
        { label: "Database Engine", value: "Supabase / Postgres" },
        { label: "Deployment", value: "Hostinger Production" },
        { label: "Role Control", value: "Admin & Patient" },
      ],
      technologies: ["TypeScript", "React", "Supabase", "PostgreSQL", "Hostinger", "Git", "GitHub"],
      previewMedia: {
        image: "/src/assets/images/project_cloud_mesh_1794235188918.jpg",
        alt: "BrightSmile Dental Management System dashboard interface with patient booking records",
        caption: "Interactive clinic dashboard with patient appointment booking, real-time records, and role-based access control.",
      },
      demoUrl: "https://github.com/Jedrx-m",
      githubUrl: "https://github.com/Jedrx-m",
    },
    {
      id: "cisco-enterprise-networking",
      title: "Cisco Enterprise Network Topology & ACL Suite",
      tagline: "Enterprise-grade VLAN architecture, OSPF multi-area routing, and security policies.",
      category: "Network Engineering",
      year: "2025 — 2026",
      featured: true,
      description: "Designed, simulated, and stress-tested enterprise network configurations within Cisco Packet Tracer. Implemented departmental VLAN segmentation, inter-VLAN routing, dynamic OSPF routing, wireless access controllers, and restrictive Access Control Lists (ACLs) to mitigate unauthorized traffic.",
      architectureOverview: "Employs hierarchical network design (Core, Distribution, and Access layers). Configured with DHCP relay, port security, STP (Spanning Tree Protocol) loop prevention, and standard/extended ACL filters for secure campus connectivity.",
      keyMetrics: [
        { label: "Network Protocol", value: "OSPF Routing" },
        { label: "Security", value: "Extended ACLs & VLANs" },
        { label: "Simulation", value: "Cisco Packet Tracer" },
      ],
      technologies: ["Cisco CCNA", "Packet Tracer", "VLANs", "OSPF", "ACLs", "Switching & Routing"],
      previewMedia: {
        image: "/src/assets/images/project_k8s_sentinel_1794235190318.jpg",
        alt: "Cisco Enterprise Network Topology diagram with switches, routers, and secure VLAN partitions",
        caption: "Simulated multi-tier enterprise network infrastructure with automated routing and access control policies.",
      },
      demoUrl: "https://github.com/Jedrx-m",
      githubUrl: "https://github.com/Jedrx-m",
    },
    {
      id: "java-real-estate-system",
      title: "Java Real-Estate & Property Management Engine",
      tagline: "Object-oriented property catalog, client buyer transactions, and data structures.",
      category: "Software Systems",
      year: "2025",
      featured: true,
      description: "An object-oriented software system facilitating real-estate listings, buyer eligibility algorithms, mortgage amortization schedules, and transaction logging. Implemented with clean encapsulation and efficient data structures for fast record retrieval.",
      architectureOverview: "Architected using core Java, leveraging inheritance, polymorphism, and collections framework (ArrayLists, HashMaps) for property matching. Includes persistent file I/O for saving client portfolios and property states.",
      keyMetrics: [
        { label: "Language", value: "Java Core" },
        { label: "Architecture", value: "OOP & Data Structures" },
        { label: "Features", value: "Buyer Matching & Calc" },
      ],
      technologies: ["Java", "OOP", "Data Structures", "Algorithms", "File I/O"],
      previewMedia: {
        image: "/src/assets/images/project_fintech_engine_1794235189942.jpg",
        alt: "Java Real-Estate Software management system with property listings and transaction computation",
        caption: "Object-oriented property evaluation engine with automated financial calculations.",
      },
      demoUrl: "https://github.com/Jedrx-m",
      githubUrl: "https://github.com/Jedrx-m",
    },
    {
      id: "cpp-pos-cashiering-suite",
      title: "C++ POS Cashiering & Computation System",
      tagline: "High-speed console transaction processing, inventory deduction, and math suite.",
      category: "Software Systems",
      year: "2024",
      featured: false,
      description: "A robust terminal-based point-of-sale and cashiering application developed in C++. Features dynamic item pricing, automated tax/discount calculations, inventory decrement algorithms, and an integrated calculator module.",
      architectureOverview: "Written in modular C++ with robust input validation, pointer arrays, file storage serialization, and defensive memory management to prevent buffer overflows during receipt generation.",
      keyMetrics: [
        { label: "Language", value: "Modern C++" },
        { label: "Throughput", value: "Zero Memory Leaks" },
        { label: "Validation", value: "Defensive Parsing" },
      ],
      technologies: ["C++", "Pointers", "Algorithms", "Console UX", "Data Structures"],
      previewMedia: {
        image: "/src/assets/images/project_ai_pipeline_1794235189695.jpg",
        alt: "C++ Cashiering and mathematical computation terminal interface",
        caption: "High-performance POS system with automated transaction calculation and inventory control.",
      },
      demoUrl: "https://github.com/Jedrx-m",
      githubUrl: "https://github.com/Jedrx-m",
    },
  ],
};
