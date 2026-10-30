export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  desktopCols: string; // for 12-col bento
  isConcept?: boolean;
  link?: string;
  github?: string;
}

export interface JournalItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  noteType: string;
  excerpt: string;
  image: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  aspect: string;
  rotation: string;
}

export const PERSONAL_INFO = {
  name: "Tushar",
  age: 19,
  location: "Mumbai, India",
  eyebrow: "CREATIVE DEVELOPER & DESIGNER",
  shortIntro:
    "I'm Tushar, a web developer and UI/UX designer passionate about creating modern digital experiences through clean code, thoughtful design, and creative interactions.",
  roles: [
    "Web Developer",
    "UI/UX Designer",
    "Creative Developer",
    "AI/ML Enthusiast",
  ],
  heroDescription:
    "Crafting modern digital experiences through thoughtful design, clean code, and creative interactions.",
  aboutHeading: "Curiosity drives everything I create.",
  aboutDescription:
    "I'm Tushar, a 19-year-old AI/ML engineering student with a strong interest in web development and UI/UX design. I enjoy turning ideas into functional digital experiences, exploring new technologies, and continuously improving my creative and technical skills.",
  email: "tushar.portfolio.contact@gmail.com", // Centralized configurable email
  availability: "Open to opportunities",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    dribbble: "https://dribbble.com",
  },
  skills: [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "WordPress",
    "Python",
  ],
  stats: [
    {
      num: "01",
      value: "4+",
      metric: "Featured Projects",
      label: "Projects & Experiments",
      desc: "Built and designed with modern frontend techniques and intuitive user flows.",
    },
    {
      num: "02",
      value: "8+",
      metric: "Technologies & Tools",
      label: "Tools & Technologies",
      desc: "From modern web frameworks and styling libraries to Figma design systems.",
    },
    {
      num: "03",
      value: "2",
      metric: "Creative Disciplines",
      label: "Development & Design",
      desc: "Bridging the gap between engineering precision and aesthetic sensitivity.",
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "kicksvault",
    number: "01",
    title: "KicksVault",
    category: "E-commerce Website",
    type: "Frontend Development",
    description:
      "A sneaker-focused digital storefront featuring product collections, organized product listings, and a bold visual shopping experience.",
    technologies: ["HTML", "CSS", "Figma"],
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1600&q=80",
    desktopCols: "lg:col-span-7",
    isConcept: false,
    link: "#",
    github: "#",
  },
  {
    id: "eventra",
    number: "02",
    title: "Eventra",
    category: "Event Management Platform",
    type: "UI/UX Design",
    description:
      "An event management platform concept designed to simplify event discovery, registration, and administration through separate user and admin experiences.",
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
    desktopCols: "lg:col-span-5",
    isConcept: true,
    link: "#",
  },
  {
    id: "booksouls",
    number: "03",
    title: "Booksouls",
    category: "Book Website",
    type: "Frontend Development",
    description:
      "A book-themed website concept featuring a clean landing page, blog section, and about page with a focus on typography and visual presentation.",
    technologies: ["HTML", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80",
    desktopCols: "lg:col-span-5",
    isConcept: true,
    link: "#",
  },
  {
    id: "ocms",
    number: "04",
    title: "Online Content Management System",
    category: "Web Application",
    type: "UI/UX Design",
    description:
      "An online content management system concept with structured content workflows and a complaint management module for submitting, assigning, tracking, and resolving complaints.",
    technologies: ["UI/UX Design", "Wireframing", "Requirements Analysis"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    desktopCols: "lg:col-span-7",
    isConcept: true,
    link: "#",
  },
];

export const JOURNAL_ITEMS: JournalItem[] = [
  {
    id: "journal-1",
    title: "The Art of Building Better User Interfaces",
    category: "Design Systems & UX",
    readTime: "5 min read",
    noteType: "Design Exploration",
    excerpt:
      "Exploring how visual rhythm, negative space, and deliberate typography establish intuitive hierarchy and emotional resonance in digital products.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "journal-2",
    title: "My Journey into Frontend Development",
    category: "Web Engineering",
    readTime: "4 min read",
    noteType: "Learning Note",
    excerpt:
      "Reflecting on moving from static layouts to interactive component architectures with React, Next.js, and modern CSS approaches.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "journal-3",
    title: "Learning Through Real-World Projects",
    category: "Process & Practice",
    readTime: "6 min read",
    noteType: "Case Study Note",
    excerpt:
      "How conceptualizing projects like KicksVault and Eventra helped bridge theoretical UI principles with practical implementation realities.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "journal-4",
    title: "Exploring the Intersection of AI and Design",
    category: "Creative Technology",
    readTime: "5 min read",
    noteType: "Research Note",
    excerpt:
      "Investigating how generative models and machine learning concepts can augment creative developer workflows without sacrificing craft.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  },
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: "exp-1",
    title: "Modern UI Dashboard Concept",
    subtitle: "Dark Mode Analytics Interface",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-square",
    rotation: "-rotate-2",
  },
  {
    id: "exp-2",
    title: "Abstract 3D Digital Composition",
    subtitle: "Fluid Forms & Spatial Dynamics",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-square",
    rotation: "rotate-3",
  },
  {
    id: "exp-3",
    title: "Minimal Website Interface",
    subtitle: "Editorial Layout & Micro-interactions",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-square",
    rotation: "-rotate-3",
  },
  {
    id: "exp-4",
    title: "Creative Typography Poster",
    subtitle: "Serif Geometry & Contrast Studies",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-square",
    rotation: "rotate-2",
  },
  {
    id: "exp-5",
    title: "Futuristic Technology Visual",
    subtitle: "Neural Patterns & Spatial Audio UI",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-square",
    rotation: "-rotate-1",
  },
  {
    id: "exp-6",
    title: "Experimental Web Design",
    subtitle: "Fluid Grid & Kinetic Aesthetics",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-square",
    rotation: "rotate-3",
  },
];

