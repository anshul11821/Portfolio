import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

export const metadata = {
  title: "Anshul Chutani | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React.js, LangGraph, and AI agent integration. Building scalable, performant, and beautiful web applications.",
  keywords: ["Full Stack Developer", "React.js", "LangGraph", "LangChain", "Node.js", "AI Agents"],
  authors: [{ name: "Anshul Chutani" }],
  openGraph: {
    title: "Anshul Chutani | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, LangGraph, and AI agent integration.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

