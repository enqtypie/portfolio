export type Project = {
  title: string;
  period: string;
  role: string;
  description: string;
  technologies?: string[];
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "NagaSabot: Lip Movement Recognition Web App",
    period: "2024-2025",
    role: "Lead Web Developer",
    description:
      "Developed as a thesis project, NagaSabot is a machine learning–powered web application that recognizes lip movements and converts them into text, specifically for the Bicol-Naga dialect. Led frontend development using Angular, HTML, CSS, and TypeScript to build an intuitive and responsive interface. Integrated machine learning models for real-time lip-reading functionality, contributing to regional accessibility and language-focused AI applications.",
    technologies: ["Angular", "HTML", "CSS", "TypeScript", "Machine Learning", "AI"],
    link: "https://nagasabotv0-quvx.onrender.com",
    imageSrc: "/NagaSabot.png",
    imageAlt: "NagaSabot project preview",
  },
  {
    title: "HerbaLens: Mobile Herb Recognition App",
    period: "2022-2023",
    role: "UI/UX Designer & Frontend Developer",
    description:
      "Developed as a major project for our Software Engineering course, HerbaLens is a mobile app that identifies and provides information on herbs native to the Albay region. Led the UI/UX design and Frontend development to ensure a user-friendly experience and built the frontend using XML and CSS in Android Studio. Collaborated with the team to implement camera-based recognition and real-time herb data display.",
    technologies: ["Android Studio", "XML", "CSS", "Camera API"],
    link: undefined,
    imageSrc: "/HerbaLens.png",
    imageAlt: "HerbaLens project preview",
  },
  {
    title: "LaBUyo: Mobile Ecommerce App",
    period: "2023-2024",
    role: "UI/UX Designer (Figma)",
    description:
      "Created as a course requirement for Human-Computer Interaction, LaBUyo is a mobile e-commerce app prototype designed exclusively for Bicol University students. The platform showcases and facilitates the sale of university-branded merchandise and certified student-produced products. Designed the full interactive prototype using Figma, focusing on user experience, intuitive navigation, and mobile responsiveness tailored to the student demographic.",
    technologies: ["Figma", "Prototyping", "UI/UX Design"],
    link: undefined,
    imageSrc: "/LaBUyo.png",
    imageAlt: "LaBUyo project preview",
  },
  {
    title: "Supply Management System",
    period: "2023-2024",
    role: "Frontend Developer, UI/UX Designer, Documentation Lead",
    description:
      "Contributed to the development of a supply management system to streamline inventory and procurement processes. Designed intuitive user interfaces using modern UI/UX practices and built responsive frontend components with Angular, HTML, CSS, and TypeScript. Also handled documentation, including user guides and development logs, to support team coordination.",
    technologies: ["Angular", "HTML", "CSS", "TypeScript", "UI/UX Design", "Documentation"],
    link: undefined,
    imageSrc: "/SMS.jpg",
    imageAlt: "Supply Management System project preview",
  },
  {
    title: "Human Resource Information System",
    period: "2023-2024",
    role: "Frontend Developer and UI/UX Intern",
    description:
      "Developed web interfaces for an HRIS using Angular, HTML, Tailwind CSS, and TypeScript during an internship at Quanby Solutions Inc. Learned GitHub for version control and collaborated in daily Agile meetings. Contributed to a team-focused workflow to build user-friendly features for HR management.",
    technologies: ["Angular", "HTML", "Tailwind CSS", "TypeScript", "GitHub", "Agile"],
    link: undefined,
    imageSrc: "/HRIS.png",
    imageAlt: "HRIS project preview",
  },
];


