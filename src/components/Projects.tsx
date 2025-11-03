import React from "react";
import {
  ExternalLink,
  Github,
  Globe,
  Users,
  Cloud,
  FolderOpen,
  Zap,
  Play,
  CreditCard,
  Chrome,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const Projects: React.FC = () => {
  const mainProjects = [
    {
      title: "Finance Flow",
      description:
        "A modern, full-stack personal finance management application. Track income, expenses, budget goals, and savings with an intuitive interface featuring real-time analytics, multi-account support, and smart currency conversion.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Express",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/kudala-bharani/Finanace-Flow-Updated",
      demoUrl: "https://youtu.be/XwP5doPNARk",
      liveUrl: "https://finance-flow-frontend-o34t.onrender.com/",
      icon: CreditCard,
      color: "blue",
      highlights: [
        "Dashboard & Analytics",
        "Multi-Account Support",
        "Budget Goals",
        "Currency Conversion",
      ],
      buttons: ["live", "demo", "code"],
    },
    {
      title: "GPREC Quiz Application",
      description:
        "A customized online quiz app with strong anti-cheating security, time-limited assessments, and automatic scoring. Features tab-switching prevention, copy/paste disable, and calculates best three scores out of five quizzes.",
      technologies: [
        "Spring Boot",
        "Spring JPA",
        "H2 Database",
        "HTML",
        "CSS",
        "JavaScript",
        "Thymeleaf",
      ],
      githubUrl: "https://github.com/kudala-bharani/GPREC-QUIZ",
      demoUrl: "#",
      icon: Zap,
      color: "green",
      highlights: [
        "Anti-Cheating Security",
        "Automatic Scoring",
        "Time Limits",
        "Section Notice Boards",
      ],
      buttons: ["code", "demo"],
    },
  ];

  const smallProjects = [
    {
      title: "Cover Letter Extension",
      description:
        "A Chrome extension that generates tailored, downloadable PDF cover letters using Google Gemini API. Simply save your API key and profile, paste a job posting, and get an instant professional cover letter.",
      technologies: ["Chrome API", "JavaScript", "HTML", "CSS", "Gemini API"],
      githubUrl: "https://github.com/kudala-bharani/cover-letter-extension",
      demoUrl: "https://www.youtube.com/watch?v=aHkdsF7GmhE",
      liveUrl:
        "https://chromewebstore.google.com/detail/cover-letter-generator/biahiggabhkbbdnoabfjlbeljojgjohl",
      icon: Chrome,
      color: "purple",
      highlights: ["AI Generation", "PDF Export", "Privacy-First"],
      buttons: ["live", "demo", "code"],
    },
    {
      title: "Vignana Peetham Website",
      description:
        "A comprehensive responsive website for an orphanage supporting orphan boys. Features modern design, donation system, and volunteer management.",
      technologies: ["HTML", "CSS", "Python", "Responsive Design"],
      githubUrl: "https://github.com/kudala-bharani/Vignana-Peetham",
      demoUrl: "#",
      icon: Users,
      color: "orange",
      highlights: [
        "Responsive Design",
        "Donation Integration",
        "Content Management",
      ],
      buttons: ["code", "demo"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      green: "from-green-50 to-green-100 border-green-200",
      cyan: "from-cyan-50 to-cyan-100 border-cyan-200",
      purple: "from-purple-50 to-purple-100 border-purple-200",
      orange: "from-orange-50 to-orange-100 border-orange-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconBgColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      cyan: "bg-cyan-100 text-cyan-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getButtonColor = (color: string) => {
    const colorMap = {
      blue: "hover:bg-blue-600",
      green: "hover:bg-green-600",
      cyan: "hover:bg-cyan-600",
      purple: "hover:bg-purple-600",
      orange: "hover:bg-orange-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const renderButtons = (project: any) => {
    return (
      <div className="flex gap-2 flex-wrap">
        {project.buttons.map((buttonType: string, btnIndex: number) => {
          let href = "#";
          let icon = <Github size={16} />;
          let label = "Code";

          if (buttonType === "code") {
            href = project.githubUrl || "#";
            icon = <Github size={16} />;
            label = "Code";
          } else if (buttonType === "demo") {
            href = project.demoUrl || "#";
            icon = <Play size={16} />;
            label = "Demo";
          } else if (buttonType === "live") {
            href = project.liveUrl || "#";
            icon = <ExternalLink size={16} />;
            label = "Live";
          }

          return (
            <a
              key={btnIndex}
              href={href}
              className={`flex items-center gap-2 bg-slate-700 text-white px-3 py-2 rounded-lg font-medium transition-all duration-200 ${getButtonColor(
                project.color
              )} hover:scale-105 flex-1 justify-center text-sm`}
            >
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${getColorClasses(
                  project.color
                )} p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg ${getIconBgColor(
                      project.color
                    )} group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="bg-white/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-slate-700 border border-white/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 border border-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {renderButtons(project)}
              </div>
            );
          })}

          {/* Third position with two smaller boxes */}
          <div className="flex flex-col gap-4">
            {smallProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${getColorClasses(
                    project.color
                  )} p-4 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group flex-1`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`p-2 rounded-lg ${getIconBgColor(
                        project.color
                      )} group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-700 mb-3 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.highlights
                        .slice(0, 2)
                        .map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-md text-xs font-medium text-slate-700 border border-white/50"
                          >
                            {highlight}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-medium text-slate-700 border border-white/50"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>

                  {renderButtons(project)}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <SpotlightCard
            className="bg-white p-8 rounded-2xl border border-slate-200"
            spotlightColor="rgba(255, 193, 7, 0.15)"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FolderOpen className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">
                More Projects Coming Soon
              </h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-6">
              I'm constantly working on new projects and exploring innovative
              technologies. Check back soon for more exciting developments!
            </p>
            <a
              href="https://github.com/kudala-bharani"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-slate-800 hover:scale-105"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
