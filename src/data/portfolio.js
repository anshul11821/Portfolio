export const personalInfo = {
  name: "Anshul Chutani",
  title: "Full Stack Developer | React.js · LangGraph · LangChain | Building AI-Powered Web Apps | AWS Certified",
  email: "anshulchutani37@gmail.com",
  phone: "+918708469017",
  linkedin: "https://www.linkedin.com/in/anshul-chutani-06625a214/",
  github: "https://github.com/anshul11821",
  summary:
    "Full Stack Developer with 2.5+ years of experience building performant React.js applications. Delivered a 35% render improvement and 25% load time reduction on a production engineering platform. Proficient in Redux, REST APIs, Socket.IO, and Three.js. Currently building agentic AI systems using LangChain and LangGraph, with hands-on experience integrating LLM-powered workflows into React frontends. AWS Certified Cloud Practitioner.",
};

export const experiences = [
  {
    role: "Software Engineer",
    company: "Universal Technical Systems",
    location: "Gurugram, Haryana",
    period: "Jan 2024 – Present",
    highlights: [
      "Improved React.js rendering performance by 35% using lazy loading, React.memo, and useCallback to eliminate redundant re-renders across complex component trees.",
      "Reduced page load time by 25% by memoizing expensive Three.js 3D computations with useMemo, improving responsiveness on data-heavy engineering views.",
      "Architected a reusable component library with Redux state management, improving codebase maintainability by 30% and streamlining REST API integration.",
      "Maintained .NET MVC and Web APIs to support scalable backend processing and ensure reliable data delivery to frontend consumers.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Universal Technical Systems",
    location: "Gurugram, Haryana",
    period: "Jun 2023 – Dec 2023",
    highlights: [
      "Built and maintained user-facing features using React.js and JavaScript (ES6+); improved cross-browser compatibility and REST API integration across the platform.",
      "Developed reusable component libraries to enforce consistent design patterns and reduce UI development time across the team.",
    ],
  },
];

export const projects = [
  {
    title: "Agentic Research Assistant",
    description:
      "A multi-step agentic AI system with stateful agent workflows, conditional branching, and a real-time React frontend displaying reasoning.",
    highlights: [
      "Built a multi-step agentic AI system using LangGraph to define stateful agent workflows — each node handles a distinct task (search, summarize, validate) with conditional branching logic.",
      "Used LangChain for tool integration, prompt chaining, and conversation memory, enabling the agent to maintain context across multi-turn research sessions.",
      "Exposed the agent pipeline via a FastAPI backend and built a React.js frontend with streaming responses, allowing users to observe agent reasoning step-by-step in real time.",
    ],
    tags: ["LangGraph", "LangChain", "React.js", "FastAPI", "OpenAI API"],
    link: null,
  },
  {
    title: "Advanced Spring Design Tool",
    description:
      "A browser-based engineering simulation tool with real-time 3D spring visualization, interactive analytics, and CAD drawing support.",
    highlights: [
      "Built a browser-based engineering simulation tool with real-time 3D spring visualization (Three.js), interactive analytics (Chart.js), and CAD drawing support via DXF-Viewer.",
      "Designed a fully modular component architecture enabling extensibility for new spring types and parameter configurations without structural refactoring.",
    ],
    tags: ["React.js", "Three.js", "Chart.js", "DXF-Viewer", ".NET"],
    link: null,
  },
  {
    title: "Collaborative Code Editor",
    description:
      "A real-time collaborative code editor with multi-file workspace, open-tab management, per-user active file tracking, and typing indicators using React.js and Socket.IO events.",
    highlights: [
      "Engineered seamless file-system synchronization and low-latency code updates across sessions.",
      "Designed a modern and efficient UI using the Monaco Editor and utility-first CSS libraries.",
      "Enhanced reliability and maintainability by optimizing component architecture, event handling, and user session management.",
    ],
    tags: ["React", "Monaco Editor", "Socket.IO", "Node.js"],
    link: "https://realtime-code-editor-n4g7.onrender.com/",
  },
  {
    title: "UTS Admin Panel",
    description:
      "Re-engineered the organization’s outdated Visual Basic 6 & ASP admin panel using Next.js to replace legacy ActiveX-based systems.",
    highlights: [
      "Developed a scalable, secure, and responsive web application with improved workflow automation.",
      "Improved security protocols and user experience by leveraging modern web standards.",
      "Future-proofed the application to enhance maintainability and performance.",
    ],
    tags: ["Next.js", "Modern Web Standards", "Workflow Automation", "Security"],
    link: null,
  },
];

export const skills = {
  Frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "Redux", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  "AI / Agents": ["LangChain", "LangGraph", "Agentic AI", "LLM APIs (OpenAI)", "RAG", "Prompt Engineering", "CrewAI"],
  "Backend & APIs": ["Node.js", "Express.js", "FastAPI", ".NET MVC", "REST APIs", "Socket.IO"],
  Visualization: ["Three.js", "Chart.js", "Monaco Editor", "DXF-Viewer"],
  "Databases & Cloud": ["MySQL", "MongoDB", "AWS", "Git", "Docker", "Vercel"],
};

export const education = {
  degree: "Bachelor of Technology (CSE)",
  university: "The NorthCap University",
  year: "2020 - 2024",
  gpa: "7.79/10",
};

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    period: "07/2022 – 08/2022",
    description: "Gained expertise in AWS service models, pricing, and cloud databases.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
