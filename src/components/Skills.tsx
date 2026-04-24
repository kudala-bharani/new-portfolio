<<<<<<< HEAD
import React, { useRef } from "react";
import { Zap, CheckCircle2 } from "lucide-react";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.1)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  const beforeStyles = `
    .card-spotlight {
      position: relative;
      overflow: hidden;
    }

    .card-spotlight::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 1;
    }

    .card-spotlight:hover::before {
      opacity: 1;
    }

    .card-spotlight > * {
      position: relative;
      z-index: 2;
    }
  `;

  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = beforeStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

type CategoryColor = "purple" | "blue" | "cyan" | "green" | "orange" | "rose";

const Skills: React.FC = () => {
  const skillCategories: {
    title: string;
    skills: string[];
    color: CategoryColor;
    spotlightColor: string;
  }[] = [
    {
      title: "💻 Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL"],
      color: "blue",
      spotlightColor: "rgba(0, 98, 255, 0.15)",
    },
    {
      title: "🎨 Frontend",
      skills: [
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
        "Component-Based Architecture",
      ],
      color: "cyan",
      spotlightColor: "rgba(6, 182, 212, 0.15)",
    },
    {
      title: "⚙️ Backend & APIs",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "API Design",
        "Authentication (JWT, OAuth 2.0)",
        "Middleware Architecture",
        "Server-Side Rendering",
        "API Documentation (Swagger/OpenAPI)",
      ],
      color: "green",
      spotlightColor: "rgba(0, 255, 47, 0.15)",
    },
    {
      title: "🗄️ Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Prisma ORM",
        "Relational Schema Design",
        "Query Optimization",
        "Indexing",
        "Redis (Caching)",
      ],
      color: "purple",
      spotlightColor: "rgba(156, 49, 255, 0.15)",
    },
    {
      title: "🧠 AI / ML",
      skills: [
        "RAG Systems",
        "LLM APIs",
        "Prompt Engineering",
        "Vector Search",
        "Semantic Embeddings (HuggingFace)",
        "OpenRouter",
      ],
      color: "rose",
      spotlightColor: "rgba(244, 63, 94, 0.12)",
    },
    {
      title: "☁️ Cloud & Infrastructure",
      skills: [
        "Vercel",
        "Railway",
        "AWS (basics)",
        "Linux",
        "Environment Configuration",
      ],
      color: "blue",
      spotlightColor: "rgba(0, 98, 255, 0.15)",
    },
    {
      title: "🚀 DevOps & CI/CD",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Docker (Basics)",
        "Deployment Automation",
      ],
      color: "cyan",
      spotlightColor: "rgba(6, 182, 212, 0.15)",
    },
    {
      title: "🔒 Security & Compliance",
      skills: [
        "Row-Level Security",
        "OAuth 2.0",
        "Secure Coding Practices",
        "Input Validation",
        "Access Control",
      ],
      color: "green",
      spotlightColor: "rgba(0, 255, 47, 0.15)",
    },
    {
      title: "🔧 Tools & Automation",
      skills: [
        "Postman",
        "n8n Workflows",
        "AI Agents",
        "Chrome Extensions",
        "Figma",
        "WordPress",
      ],
      color: "orange",
      spotlightColor: "rgba(251, 146, 60, 0.15)",
    },
    {
      title: "📋 Software Engineering Practices",
      skills: [
        "Agile/Scrum",
        "Test-Driven Development (TDD)",
        "Unit Testing (Jest)",
        "Code Reviews",
        "Debugging",
        "Performance Optimization",
        "System Design",
      ],
      color: "purple",
      spotlightColor: "rgba(156, 49, 255, 0.15)",
    },
  ];

  const getColorClasses = (color: CategoryColor) => {
    const colorMap: Record<CategoryColor, string> = {
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-800",
      green: "from-green-50 to-green-100 border-green-200 text-green-800",
      cyan: "from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-800",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-800",
      orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-800",
      rose: "from-rose-50 to-rose-100 border-rose-200 text-rose-800",
    };
    return colorMap[color];
  };

  const getSkillIconColor = (color: CategoryColor) => {
    const colorMap: Record<CategoryColor, string> = {
      blue: "text-blue-500",
      green: "text-green-500",
      cyan: "text-cyan-500",
      purple: "text-purple-500",
      orange: "text-orange-500",
      rose: "text-rose-500",
    };
    return colorMap[color];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, secure, and modern
            applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SpotlightCard
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(
                category.color,
              )} p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300`}
              spotlightColor={category.spotlightColor}
            >
              <h3 className="text-xl font-semibold text-slate-900 leading-snug mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-slate-700 border border-white/50 hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className={getSkillIconColor(category.color)}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <SpotlightCard
            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200"
            spotlightColor="rgba(255, 193, 7, 0.15)"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">
                Always Learning
              </h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              Continuously learning and adapting to new technologies,
              frameworks, and best practices to build robust, scalable, and
              maintainable software solutions.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
=======
import React, { useRef } from "react";
import { Zap, CheckCircle2 } from "lucide-react";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.1)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  const beforeStyles = `
    .card-spotlight {
      position: relative;
      overflow: hidden;
    }
    
    .card-spotlight::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 1;
    }
    
    .card-spotlight:hover::before {
      opacity: 1;
    }
    
    .card-spotlight > * {
      position: relative;
      z-index: 2;
    }
  `;

  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = beforeStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

type CategoryColor = "purple" | "blue" | "cyan" | "green" | "orange" | "rose";

const Skills: React.FC = () => {
  const skillCategories: {
    title: string;
    skills: string[];
    color: CategoryColor;
    spotlightColor: string;
  }[] = [
    {
      title: "🧠 AI & Machine Learning",
      skills: [
        "RAG Systems",
        "LLM APIs",
        "Vector Search",
        "Embeddings",
        "Prompt Engineering",
        "AI Agents",
      ],
      color: "purple",
      spotlightColor: "rgba(156, 49, 255, 0.15)",
    },
    {
      title: "💻 Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      color: "blue",
      spotlightColor: "rgba(0, 98, 255, 0.15)",
    },
    {
      title: "⚙️ Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "API Design",
      ],
      color: "cyan",
      spotlightColor: "rgba(6, 182, 212, 0.15)",
    },
    {
      title: "🗄️ Databases & Storage",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Relational Database Design",
        "pgvector",
      ],
      color: "green",
      spotlightColor: "rgba(0, 255, 47, 0.15)",
    },
    {
      title: "🔧 Tools & Automation",
      skills: [
        "Git",
        "GitHub",
        "n8n Workflows",
        "AI Automations",
        "Figma",
        "WordPress",
        "Chrome Extensions",
      ],
      color: "orange",
      spotlightColor: "rgba(251, 146, 60, 0.15)",
    },
    {
      title: "🎨 Design & UX",
      skills: [
        "UI/UX Design",
        "Wireframing",
        "User Flows",
        "Information Architecture",
      ],
      color: "rose",
      spotlightColor: "rgba(244, 63, 94, 0.12)",
    },
  ];

  const getColorClasses = (color: CategoryColor) => {
    const colorMap: Record<CategoryColor, string> = {
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-800",
      green: "from-green-50 to-green-100 border-green-200 text-green-800",
      cyan: "from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-800",
      purple:
        "from-purple-50 to-purple-100 border-purple-200 text-purple-800",
      orange:
        "from-orange-50 to-orange-100 border-orange-200 text-orange-800",
      rose: "from-rose-50 to-rose-100 border-rose-200 text-rose-800",
    };
    return colorMap[color];
  };

  const getSkillIconColor = (color: CategoryColor) => {
    const colorMap: Record<CategoryColor, string> = {
      blue: "text-blue-500",
      green: "text-green-500",
      cyan: "text-cyan-500",
      purple: "text-purple-500",
      orange: "text-orange-500",
      rose: "text-rose-500",
    };
    return colorMap[color];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From AI-powered apps and full-stack delivery to tooling, data, and
            product design
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SpotlightCard
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(
                category.color
              )} p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300`}
              spotlightColor={category.spotlightColor}
            >
              <h3 className="text-xl font-semibold text-slate-900 leading-snug mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-slate-700 border border-white/50 hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className={getSkillIconColor(category.color)}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <SpotlightCard
            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200"
            spotlightColor="rgba(255, 193, 7, 0.15)"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">
                Always Learning
              </h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              I keep up with evolving AI tooling, RAG patterns, and product
              craft—shipping features that are reliable, usable, and easy to
              maintain.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
>>>>>>> dd1dbfaf7f5d97087b7809583f813b94dc2265c0
