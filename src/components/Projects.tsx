import React from 'react';
import { ExternalLink, Github, Globe, Users, Cloud, FolderOpen, Zap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Vignana Peetham Website',
      description: 'A comprehensive responsive website for an NGO supporting orphan boys. Features modern design, donation system, and volunteer management.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Users,
      color: 'blue',
      highlights: ['Responsive Design', 'Donation Integration', 'Content Management']
    },
    {
      title: 'GPREC Quiz Application',
      description: 'An interactive quiz platform designed for college internal competitions. Features real-time scoring, admin panel, and student dashboard.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Zap,
      color: 'green',
      highlights: ['Real-time Scoring', 'Admin Panel', 'Student Analytics']
    },
    {
      title: 'Weather Forecast Website',
      description: 'A dynamic weather application providing live weather updates and 5-day forecasts with location detection and beautiful UI.',
      technologies: ['JavaScript', 'Weather API', 'Geolocation', 'CSS3'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Cloud,
      color: 'cyan',
      highlights: ['Live Weather Data', 'Location Detection', '5-Day Forecast']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 border-blue-200',
      green: 'from-green-50 to-green-100 border-green-200',
      cyan: 'from-cyan-50 to-cyan-100 border-cyan-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconBgColor = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      cyan: 'bg-cyan-100 text-cyan-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getButtonColor = (color: string) => {
    const colorMap = {
      blue: 'hover:bg-blue-600',
      green: 'hover:bg-green-600',
      cyan: 'hover:bg-cyan-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my work demonstrating technical skills and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${getColorClasses(project.color)} p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${getIconBgColor(project.color)} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
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
                  <h4 className="font-semibold text-slate-900 mb-2">Technologies:</h4>
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

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className={`flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 ${getButtonColor(project.color)} hover:scale-105 flex-1 justify-center`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className={`flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 ${getButtonColor(project.color)} hover:scale-105 flex-1 justify-center`}
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <SpotlightCard 
            className="bg-white p-8 rounded-2xl border border-slate-200"
            spotlightColor="rgba(255, 193, 7, 0.15)"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FolderOpen className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">More Projects Coming Soon</h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-6">
              I'm constantly working on new projects and exploring innovative technologies. 
              Check back soon for more exciting developments!
            </p>
            <a
              href="https://github.com/bharanikumar"
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