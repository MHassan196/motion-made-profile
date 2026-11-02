// All portfolio content — extracted from https://mhassan-portfolio.vercel.app
// Update CONTACT_EMAIL to route contact-form submissions to your inbox.

export const CONTACT_EMAIL = "";

export const profile = {
  name: "Muhammad Hassan",
  firstName: "Muhammad",
  lastName: "Hassan",
  role: "Full Stack Developer",
  tagline: "Welcome to my portfolio",
  about:
    "Decisive Full Stack Developer with 2+ years of experience in designing and developing robust web applications from concept to deployment. Proficient in both front-end and back-end technologies, with a strong focus on building scalable, user-centric solutions and staying up to date with modern development practices and emerging technologies.",
  cvUrl: "/cv/Muhammad-Hassan-CV.pdf",
  socials: {
    github: "https://github.com/MHassan196",
    linkedin:
      "https://www.linkedin.com/in/muhammad-hassan-khatri-8b9ba5248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    facebook: "https://www.facebook.com/muhammedhassan.khatri/",
  },
};

export const rotatingRoles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Backend Engineer",
  "MERN Specialist",
  "UI Craftsman",
];

export interface SkillGroup {
  title: string;
  blurb: string;
  skills: { name: string; icon: string; color: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that feel alive",
    skills: [
      { name: "React Js", icon: "react", color: "#61DAFB" },
      { name: "NextJs", icon: "nextdotjs", color: "#94a3b8" },
      { name: "Redux", icon: "redux", color: "#8B5CF6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Typescript", icon: "typescript", color: "#4C8FE0" },
      { name: "Material UI", icon: "mui", color: "#3D9BFF" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#22D3EE" },
      { name: "GSAP", icon: "gsap", color: "#0AE448" },
      { name: "Framer Motion", icon: "framer", color: "#66A3FF" },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs that scale",
    skills: [
      { name: "Node Js", icon: "nodedotjs", color: "#5FA04E" },
      { name: "Express Js", icon: "express", color: "#94a3b8" },
      { name: "PHP", icon: "php", color: "#8B93D6" },
      { name: "MySQL", icon: "mysql", color: "#5C8FCB" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "postgresql", color: "#699ECA" },
      { name: "Convex", icon: "convex", color: "#F1554C" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
    ],
  },
  {
    title: "Others",
    blurb: "Tools of the trade",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#94a3b8" },
      { name: "Wordpress", icon: "wordpress", color: "#6BA6CE" },
      { name: "Vercel", icon: "vercel", color: "#94a3b8" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
    ],
  },
];

export type ProjectType = "Static" | "Dynamic";

export interface Project {
  title: string;
  description: string;
  type: ProjectType;
  tags: string[];
  thumbnail: string;
  gallery: string[];
  liveAppLink?: string;
  githubLink?: string;
  githubLink2?: string;
}

const g = (slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/images/gallery/${slug}-${i + 1}.webp`);

export const projects: Project[] = [
  {
    title: "DiabMart",
    description:
      "DiabMart - An E-commerce Platform for Diabetic Products: A comprehensive online marketplace dedicated to diabetic-friendly products. Features include user authentication, product browsing, detailed product pages, shopping cart, and secure checkout. Built with Next.js, React.js, JavaScript, Custom SCSS, Bootstrap and integrated with a Node.js backend for seamless data management and user experience.",
    type: "Dynamic",
    tags: ["NextJS", "ReactJS", "JavaScript", "Bootstrap", "Stripe", "Strapi CMS", "NodeJS", "ExpressJS"],
    thumbnail: "/images/projects/diabmart.webp",
    gallery: g("diabmart", 5),
    liveAppLink: "https://diabmart.com",
  },
  {
    title: "Hospital Management System",
    description:
      "A comprehensive Hospital Management System built to streamline healthcare operations. Features include patient registration, appointment scheduling, medical records management, doctor and staff management, billing and invoicing, and real-time notifications. The system provides role-based access for administrators, doctors, nurses, and receptionists with a modern, responsive interface.",
    type: "Dynamic",
    tags: ["NextJS", "Convex", "Tailwind CSS", "Shadcn UI", "Javascript", "ReactJS"],
    thumbnail: "/images/projects/hospital.webp",
    gallery: g("hospital", 5),
  },
  {
    title: "Inspection Verification Platform",
    description:
      "A role-based inspection verification platform designed for banks with support for Islamic banking contract types. The system features comprehensive role management including Super Admin, Admins, Bank Managers, and Bank Users. Each role has specific permissions and dashboards. Includes a separate mobile application for inspectors to conduct on-site verifications, submit reports, and upload evidence. Supports various Islamic banking contracts including Murabaha, Ijarah, Mudarabah, and Musharakah with detailed compliance tracking.",
    type: "Dynamic",
    tags: ["NextJS", "ReactJS", "Javascript", "NodeJS", "ExpressJS", "PostgreSQL", "Tailwind CSS", "Shadcn UI", "Role-Based Access"],
    thumbnail: "/images/projects/inspection.webp",
    gallery: g("inspection", 5),
  },
  {
    title: "Mailbox",
    description:
      "Mailbox App – A Next.js and React.js-based email client with Material UI, integrated with a Node.js API for seamless IMAP communication. Users can configure their IMAP settings, manage emails across Inbox, Sent, Trash, and Spam, send and reply to emails, move messages between folders, star emails, and perform bulk actions like marking emails as read/unread or starred. Trash emails can also be permanently deleted.",
    type: "Dynamic",
    tags: ["NextJS", "ReactJS", "TypeScript", "Material UI", "React Quill", "NodeJS", "ExpressJS"],
    thumbnail: "/images/projects/mailbox.webp",
    gallery: g("mailbox", 5),
  },
  {
    title: "Learning Management System UI",
    description:
      "Learning Management System (LMS) – A Next.js, TypeScript, and Material UI-based LMS with distinct dashboards for Admin, Parent, Student, and Teacher roles. Features include class management, assignments, mock tests, file sharing, and progress tracking. Played a key role in frontend development and API integration.",
    type: "Dynamic",
    tags: ["NextJS", "ReactJS", "TypeScript", "Material UI"],
    thumbnail: "/images/projects/lms.webp",
    gallery: g("lms", 5),
  },
  {
    title: "AI Based Data Entry Automation",
    description:
      "The AI-based Data Entry Automation web app simplifies data entry tasks by utilizing OCR and Deep Learning technologies. Users can upload various file types, including PDFs, Word documents, and images, containing tabular or handwritten data. Once uploaded, the app automatically extracts the data using advanced algorithms and stores it securely in the database. Through the user dashboard, individuals have convenient access to their data, enabling them to read, update, and delete entries as needed. Additionally, users can customize data fields according to their preferences and save the modified data directly to the database for future reference. By harnessing AI technologies, the Data Entry Automation app enhances efficiency and accuracy in data management, offering a streamlined solution for users' data entry needs.",
    type: "Dynamic",
    tags: ["ReactJS", "Python", "Django", "MongoDB", "mongoose", "HTML CSS", "JavaScript", "OCR", "Deep Learning"],
    thumbnail: "/images/projects/ai-data-entry.webp",
    gallery: g("ai-data-entry", 5),
    githubLink: "https://github.com/MHassan196/DEA_Frontend",
    githubLink2: "https://github.com/MHassan196/DEA_Backend",
  },
  {
    title: "CollabEZ Landing Page",
    description:
      "Welcome to collabEZ, your one-stop solution for innovative web development, mobile app creation, logo design, and marketing services. We collaborate closely with you to bring your vision to life with precision and creativity.",
    type: "Static",
    tags: ["NextJS", "ReactJS", "Typescript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/projects/collabez-landing.webp",
    gallery: g("collabez-landing", 5),
    liveAppLink: "https://collabez.ae/",
  },
  {
    title: "SAAS Landing Page",
    description:
      "SaaS Landing Page – A modern, responsive, and visually engaging frontend built with Next.js, React.js, and Tailwind CSS. Showcases key features, pricing, testimonials, and a call-to-action to drive user engagement. Optimized for performance, SEO, and seamless user experience.",
    type: "Static",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/projects/saas-landing.webp",
    gallery: g("saas-landing", 5),
    githubLink: "https://github.com/MHassan196/saas-landing-page",
    liveAppLink: "https://saas-landing-page-psi-jade.vercel.app/",
  },
  {
    title: "App Landing Page",
    description:
      "Application Landing Page – A sleek, responsive, and user-friendly frontend built with React.js, and Tailwind CSS. Highlights the app's features, benefits, and call-to-action sections to enhance user engagement. Optimized for performance, accessibility, and SEO.",
    type: "Static",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/projects/app-landing.webp",
    gallery: g("app-landing", 5),
    githubLink: "https://github.com/MHassan196/app-landing-page",
    liveAppLink: "https://app-landing-page-taupe.vercel.app/",
  },
  {
    title: "Marketing Landing Page",
    description:
      "Marketing Landing Page – A high-converting, responsive, and visually appealing frontend built with React.js, and Tailwind CSS. Showcases marketing services, key features, client testimonials, and compelling CTAs to drive engagement and conversions. Optimized for SEO and performance.",
    type: "Static",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/projects/marketing-landing.webp",
    gallery: g("marketing-landing", 5),
    githubLink: "https://github.com/MHassan196/marketing-landing-page",
    liveAppLink: "https://marketing-landing-page-iota.vercel.app/",
  },
  {
    title: "Interior Design Landing Page",
    description:
      "Interior Design Landing Page – A stylish, responsive, and visually captivating frontend built with React.js, and Tailwind CSS. Showcases design portfolios, services, client testimonials, and a strong call-to-action. Optimized for performance, SEO, and user engagement.",
    type: "Static",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/projects/interior-landing.webp",
    gallery: g("interior-landing", 5),
    githubLink: "https://github.com/MHassan196/design-landing-page",
    liveAppLink: "https://design-landing-page-mu.vercel.app/",
  },
  {
    title: "CollabEZ - Let's Create Extraordinary",
    description:
      "Welcome to collabEZ, your one-stop solution for innovative web development, mobile app creation, logo design, and marketing services. We collaborate closely with you to bring your vision to life with precision and creativity.",
    type: "Static",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "GSAP", "HTML CSS", "vite", "heroicons"],
    thumbnail: "/images/projects/collabez-create.webp",
    gallery: g("collabez-create", 5),
    githubLink: "https://github.com/threedev3/collabez-full",
    liveAppLink: "https://collabez.vercel.app/",
  },
  {
    title: "Cravio - Unveiling Delicious Delights",
    description:
      "Cravio is a stylish and user-friendly static web application for food delivery. Serving as a standalone restaurant platform, Cravio offers an enticing user interface where customers can explore its menu offerings. Users have the option to add desired items to their cart, review the billing details, provide address information, and smoothly proceed to checkout. With its captivating design and intuitive features, Cravio provides customers with a seamless and enjoyable experience as they order food online directly from the restaurant's menu.",
    type: "Static",
    tags: ["ReactJS", "JavaScript", "HTML", "CSS", "Redux", "vite", "react-icons"],
    thumbnail: "/images/projects/cravio.webp",
    gallery: g("cravio", 5),
    githubLink: "https://github.com/MHassan196/cravio",
    liveAppLink: "https://cravio.vercel.app/",
  },
  {
    title: "Conversify",
    description:
      "Conversify is an intelligent chatbot web application that utilizes Google's Gemini API to fetch precise responses for user queries. It's adept at understanding natural language, enabling seamless interactions. The app offers real-time updates to ensure the information provided is current. Its intuitive interface fosters an engaging user experience, facilitating easy access to a diverse range of topics.",
    type: "Static",
    tags: ["ReactJS", "HTML", "CSS", "JavaScript", "Google Gemini API", "Font Awesome icons"],
    thumbnail: "/images/projects/conversify.webp",
    gallery: g("conversify", 3),
    githubLink: "https://github.com/MHassan196/conversify",
    liveAppLink: "https://conversify-five.vercel.app/",
  },
  {
    title: "Insights Blog",
    description:
      "Insights Blog is a versatile full-stack web application designed to foster a community centered around insightful content. Administrators wield comprehensive control, empowered to create, edit, and delete posts, users, and comments. Meanwhile, users can immerse themselves in the rich variety of blogs, sharing their thoughts through comments and expressing appreciation via likes. The platform prioritizes security and convenience with JWT token authentication and OAuth integration through Firebase, offering users a seamless and secure experience.",
    type: "Dynamic",
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "JavaScript", "Redux", "Flowbite React", "Tailwind CSS", "Firebase", "Google OAuth"],
    thumbnail: "/images/projects/insights-blog.webp",
    gallery: g("insights-blog", 5),
    githubLink: "https://github.com/MHassan196/insights-blog",
  },
  {
    title: "MERN Authentication App",
    description:
      "The MERN Authentication App offers users a comprehensive platform for managing their accounts securely. Users can register with their email and password, and login to access personalized profiles. Profile updates, including name, address, and profile picture changes, are supported. In case of a forgotten password, users can initiate the recovery process. An OTP is sent to their registered email address for verification. Upon successful verification, users are directed to a password reset page where they can securely update their password. Built on the MERN stack, ensuring robust functionality and security.",
    type: "Dynamic",
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Zustand", "HTML CSS", "Tailwind CSS", "formik", "react-hot-toast", "jsonwebtoken", "mongoose"],
    thumbnail: "/images/projects/mern-auth.webp",
    gallery: g("mern-auth", 5),
    githubLink: "https://github.com/MHassan196/authentication-app",
  },
  {
    title: "MERN Quiz App",
    description:
      "The MERN Quiz App offers users an interactive platform for testing their knowledge across various topics. Users are presented with questions, each accompanied by three to four options, and they must select the correct answer. Upon completing the quiz, users receive immediate feedback regarding their performance. The app calculates the total points based on the number of correct answers. Built on the MERN stack, this app ensures a seamless user experience with an entertaining and educational way to assess knowledge.",
    type: "Dynamic",
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "mongoose", "Redux", "HTML CSS", "JavaScript"],
    thumbnail: "/images/projects/mern-quiz.webp",
    gallery: g("mern-quiz", 4),
    githubLink: "https://github.com/MHassan196/quiz-app",
    githubLink2: "https://github.com/MHassan196/quiz-app-backend",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  logo?: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "Octopus Digital Networks",
    period: "Aug 2022 – Oct 2022",
    logo: "/images/companies/octopus.jpg",
    description:
      "During my frontend developer internship, I worked on developing user interfaces with HTML, CSS, and JavaScript, utilizing frameworks like React and overcoming technical challenges.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "ReactJS", "Redux", "Figma"],
  },
  {
    role: "Full Stack Developer",
    company: "CollabEZ",
    period: "Jun 2024 – Present",
    logo: "/images/companies/collabez.png",
    description:
      "Developed and maintained full-stack web applications using ReactJS and NextJS for the frontend, and Node.js with Express.js for the backend. Integrated RESTful APIs and implemented database solutions to ensure seamless data flow and functionality.",
    skills: [
      "ReactJS",
      "NextJS",
      "Javascript",
      "Typescript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Git/GitHub",
      "GSAP",
      "Framer Motion",
      "API Integration",
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  description: string;
}

export const education: Education[] = [
  {
    institution: "Sir Syed University of Engineering & Technology",
    degree: "Bachelor of Science – Software Engineering",
    period: "2020 – 2024",
    grade: "3.63 CGPA",
    description:
      "I've successfully completed my Bachelor's in Software Engineering from Sir Syed University of Engineering & Technology, gaining valuable skills in programming and software development. Looking forward to applying my knowledge in practical projects.",
  },
  {
    institution: "D.J. Sindh Govt. Science College",
    degree: "HSC – Pre Engineering",
    period: "2017 – 2019",
    grade: "77.7%",
    description:
      "I completed my class HSC education at D.J. Sindh Govt. Science College, where I studied Science with Pre Engineering.",
  },
  {
    institution: "H.M. Public School",
    degree: "SSC – Bio Science",
    period: "2017",
    grade: "84.82%",
    description:
      "I completed my class 10 education at H.M. Public School, where I studied Bio Science.",
  },
];

export const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 17, suffix: "", label: "Projects Built" },
  { value: 23, suffix: "+", label: "Technologies" },
  { value: 3.63, suffix: "", label: "CGPA", decimals: 2 },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
