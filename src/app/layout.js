import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata = {
  title: "Anshul Chutani | Frontend Engineer",
  description:
    "Frontend Engineer with advanced expertise in React.js, JavaScript, and modern UI frameworks. Building scalable, performant, and beautiful web applications.",
  keywords: ["Frontend Engineer", "React.js", "Next.js", "JavaScript", "Three.js", "Portfolio"],
  authors: [{ name: "Anshul Chutani" }],
  openGraph: {
    title: "Anshul Chutani | Frontend Engineer",
    description:
      "Frontend Engineer with advanced expertise in React.js, JavaScript, and modern UI frameworks.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
