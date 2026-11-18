/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION FILE (portfolio.config.ts)
 * Tailored for: Jedrick T. Mariano
 * ==============================================================================
 * 
 * HOW TO UPDATE YOUR PORTFOLIO:
 * 1. To add or edit projects: modify the `projects` array below.
 * 2. To swap your resume: update `resume.pdfUrl` and `resume.fileName`.
 * 3. Add a thumbnail and a short MP4 under `public/assets/projects/` and reference
 *    both in previewMedia to use the shared hover zoom and playback template.
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
    video: string;
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
      id: "dentasync",
      title: "DentaSync",
      tagline: "Appointment scheduling, chair management, and dental charting for a three-branch dental practice.",
      category: "Web Applications",
      year: "2026",
      featured: true,
      description: "Staff can schedule visits, check in patients, and record exams and treatment notes. Patients can request appointments online and submit intake forms for the front desk to review.",
      architectureOverview: "A Next.js and TypeScript application uses Better Auth for staff sign-in and Drizzle ORM for database access. It runs on PGlite in local development and PostgreSQL in production.",
      keyMetrics: [
        { label: "Practice", value: "3 branches" },
        { label: "Scheduling", value: "Chair calendars" },
        { label: "Clinical records", value: "Dental charts" },
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better Auth", "PGlite"],
      previewMedia: {
        image: "/assets/projects/brightsmile.jpg",
        alt: "Bright Smile Dental Clinic homepage with a Book a visit button",
        video: "/assets/projects/dentasync.mp4",
      },
      demoUrl: "https://brightsmile.pro",
    },
    {
      id: "orgmanager",
      title: "OrgManager",
      tagline: "A management portal for member rosters, events, announcements, and organization finances.",
      category: "Web Applications",
      year: "2026",
      featured: true,
      description: "Members can view announcements and RSVP to events. Officers can manage the roster, review event proposals, record attendance, and track income and expenses in the finance ledger.",
      architectureOverview: "A React frontend built with Vite uses Axios to call a Laravel API. Laravel Sanctum protects the routes for organization data and operations.",
      keyMetrics: [
        { label: "Events", value: "RSVPs & attendance" },
        { label: "Finance", value: "Transaction ledger" },
        { label: "Oversight", value: "Activity logs" },
      ],
      technologies: ["React", "Laravel", "PHP", "Vite", "Tailwind CSS", "Laravel Sanctum"],
      previewMedia: {
        image: "/assets/projects/orgmanager.jpg",
        alt: "OrgManager sign-in page for Mapúa Game Consensus",
        video: "/assets/projects/orgmanager.mp4",
      },
      demoUrl: "https://orgmanager.vercel.app/",
    },
    {
      id: "click-ko",
      title: "Click K.O.",
      tagline: "A Java desktop boxing game where players dodge, block, and counterpunch through three opponents.",
      category: "Software Systems",
      year: "2026",
      featured: true,
      description: "Built as a group project, Click K.O. combines mouse-driven punches with keyboard controls for dodging, blocking, and super punches. Players advance through opponents and can customize their fighter and ring.",
      architectureOverview: "Java Swing handles input and screen rendering. A timer updates combat, while separate player and opponent classes track health, attacks, and sprite states.",
      keyMetrics: [
        { label: "Opponents", value: "3 standard fighters" },
        { label: "Platform", value: "Java desktop" },
      ],
      technologies: ["Java", "Swing", "Apache Ant"],
      previewMedia: {
        image: "/assets/projects/click-ko.jpg",
        alt: "Click K.O. boxing match showing both fighters and their health bars",
        video: "/assets/projects/click-ko.mp4",
      },
      githubUrl: "https://github.com/Jedrx-m/Final_Group_Proj",
    },
  ],
};
