import React from "react";
import { Calendar, MapPin, Award, Briefcase } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Quality of Life (Non-Profit)",
      period: "Apr 2026 - Present",
      location: "United States, Remote",
      description:
        "Led the redesign and development of a unified organizational website using Wix Studio, consolidating multiple legacy sites into a single platform.",
      highlights: [
        "Improved site structure and navigation, reducing content redundancy and improving user experience across multiple program areas",
        "Built dynamic, CMS-driven pages and modular components to enable scalable content management and easier updates",
        "Designed and integrated form-based workflows using Wix Forms, 123FormBuilder, and Zapier to automate data collection and internal processes",
        "Collaborated with cross-functional stakeholders to gather requirements, iterate on UI/UX improvements, and deliver features in an Agile environment",
        "Optimized website performance, improving load times and overall user experience while enhancing maintainability through structured design and continuous enhancements",
      ],
      color: "purple",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGEAzZ3G7_Q_A/company-logo_100_100/company-logo_100_100/0/1698417224819?e=1777507200&v=beta&t=JiXYsfTkXlFo0F4BqNvWU9PnSN4b-PHwBP_X_mYEVT8",
    },
    {
      title: "Teaching Assistant",
      company: "Northern Arizona University",
      period: "Jan 2025 - Dec 2025",
      location: "United States, On-site",
      description:
        "Facilitated lab sessions for Data Structures and Web Technologies courses, covering algorithms, data structures, complexity analysis, and full-stack development.",
      highlights: [
        "Facilitated lab sessions for 50+ students, covering algorithms, data structures, complexity analysis, and full-stack development",
        "Reviewed and graded 100+ code submissions, providing feedback on performance optimization, system design, and coding best practices",
        "Mentored students through debugging and design exercises, strengthening their understanding of scalable and maintainable software development",
      ],
      color: "yellow",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHJP4PaFNhQLg/company-logo_100_100/company-logo_100_100/0/1630661606732?e=1777507200&v=beta&t=uqqirco6t5VrGxzQdAfWH2BfE53h9cW1nhFAI5lIfKI",
    },
    {
      title: "Software Engineer Intern",
      company: "Slash Mark IT Solutions (OPC) Pvt. Ltd",
      period: "Sep 2023 - Aug 2024",
      location: "India, Remote",
      description:
        "Designed and developed RESTful APIs for scalable data processing, validation, and business logic implementation in production systems.",
      highlights: [
        "Designed and developed RESTful APIs for scalable data processing, validation, and business logic implementation in production systems",
        "Improved database performance by optimizing complex SQL queries, indexing strategies, and query execution for high-throughput endpoints",
        "Implemented end-to-end full-stack features by integrating frontend interfaces with backend services, ensuring efficient data flow and API communication",
        "Investigated and resolved production bugs, edge cases, and data inconsistencies, improving system stability, reliability, and data integrity",
      ],
      color: "blue",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQHXfoVtKI3JNA/company-logo_100_100/company-logo_100_100/0/1733159467008/slash_mark_logo?e=1777507200&v=beta&t=R5UtuC25SrRq5Q2RnMH9IjOu2rBCPvkFaoKbohTbsXI",
    },
    {
      title: "Technical Content Writer",
      company: "GeeksforGeeks",
      period: "Jan 2023 - Dec 2023",
      location: "India, Remote",
      description:
        "Authored multiple technical articles on programming concepts and problem-solving techniques.",
      highlights: [
        "Simplified complex topics in C, Java, and data structures for broad audiences",
        "Improved clarity and readability of educational developer content",
        "Strengthened core computer science foundations through technical writing",
      ],
      color: "green",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQFEl-c-MprDFQ/company-logo_100_100/company-logo_100_100/0/1735198653833/geeksforgeeks_logo?e=1777507200&v=beta&t=FGUoST1Ym5PA6WKmf4PQ2JUp4gLzuz1XwN95bDn8Ym4",
    },
    {
      title: "Salesforce Developer",
      company: "Salesforce",
      period: "Apr 2022 - Sep 2022",
      location: "India, Remote",
      description:
        "Participated in Salesforce development projects, gaining hands-on experience in CRM-based applications.",
      highlights: [
        "Completed the Developer Catalyst Program and earned super badges",
        "Customized workflows and implemented business logic within Salesforce",
        "Gained exposure to enterprise-level development practices and tools",
      ],
      color: "cyan",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHZ9xYomLW7zg/company-logo_100_100/company-logo_100_100/0/1630658255326/salesforce_logo?e=1777507200&v=beta&t=PBqpT0Jr-rld5K-CxdbR6vbKiIBAg0rsLnw__K0pDRI",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200",
      orange:
        "from-orange-50 to-orange-100 border-orange-200 hover:from-orange-100 hover:to-orange-200",
      green:
        "from-green-50 to-green-100 border-green-200 hover:from-green-100 hover:to-green-200",
      purple:
        "from-purple-50 to-purple-100 border-purple-200 hover:from-purple-100 hover:to-purple-200",
      yellow:
        "from-yellow-50 to-yellow-100 border-yellow-200 hover:from-yellow-100 hover:to-yellow-200",
      cyan: "from-cyan-50 to-cyan-100 border-cyan-200 hover:from-cyan-100 hover:to-cyan-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getAccentColor = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      orange: "text-orange-600",
      green: "text-green-600",
      purple: "text-purple-600",
      yellow: "text-yellow-700",
      cyan: "text-cyan-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getLogoColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 border-blue-300",
      orange: "bg-orange-100 border-orange-300",
      green: "bg-green-100 border-green-300",
      purple: "bg-purple-100 border-purple-300",
      yellow: "bg-yellow-100 border-yellow-300",
      cyan: "bg-cyan-100 border-cyan-300",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My journey through various roles has shaped me into a well-rounded
            developer
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-slate-300 to-slate-200"></div>

          {experiences.map((exp, index) => {
            return (
              <div key={index} className="relative mb-8 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-slate-300 rounded-full z-10"></div>

                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                  } md:w-1/2`}
                >
                  <div
                    className={`group bg-gradient-to-br ${getColorClasses(
                      exp.color,
                    )} p-4 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden`}
                  >
                    {/* Compact View - Always Visible */}
                    <div className="flex items-start gap-3 mb-3">
                      {/* Company Logo */}
                      <div
                        className={`w-12 h-12 rounded-lg border-2 ${getLogoColor(
                          exp.color,
                        )} flex items-center justify-center flex-shrink-0 overflow-hidden bg-white`}
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const fallback =
                              target.parentElement?.querySelector(
                                ".logo-fallback",
                              ) as HTMLDivElement;
                            if (fallback) {
                              target.style.display = "none";
                              fallback.style.display = "flex";
                            }
                          }}
                        />
                        <div className="text-xs font-bold text-slate-600 hidden logo-fallback items-center justify-center">
                          {exp.company.substring(0, 3).toUpperCase()}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                          {exp.title}
                        </h3>
                        <p
                          className={`text-base font-semibold ${getAccentColor(
                            exp.color,
                          )} mb-2`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <Award
                        className="text-yellow-500 flex-shrink-0"
                        size={18}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Complete description - always visible */}
                    <p className="text-sm text-slate-700 leading-relaxed text-justify mb-2">
                      {exp.description}
                    </p>

                    {/* Hover to see more text - visible only when not hovering */}
                    <div className="text-xs text-slate-500 text-center mb-2 group-hover:hidden transition-all duration-300">
                      <span className="md:hidden">
                        Click to see key highlights
                      </span>
                      <span className="hidden md:inline">
                        Hover to see key highlights
                      </span>
                    </div>

                    {/* Expanded Details - Visible only on hover */}
                    <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="pt-3">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-900">
                            Key Highlights:
                          </h4>
                          <ul className="space-y-1">
                            {exp.highlights.map((highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="text-sm text-slate-600 flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0 mt-2"></div>
                                <span className="text-justify">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <SpotlightCard
            className="bg-white p-6 rounded-2xl border border-slate-200"
            spotlightColor="rgba(255, 193, 7, 0.15)"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="text-yellow-500" size={28} />
              <h3 className="text-xl font-bold text-slate-900">What's Next?</h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto text-justify">
              I'm actively seeking new opportunities to apply my skills in
              challenging projects and continue growing as a developer. Let's
              build something amazing together!
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Experience;
