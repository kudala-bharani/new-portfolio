import React, { useRef } from 'react';
import { 
  Code, 
  Database, 
  Palette, 
  Settings, 
  Globe, 
  Zap,
  FileCode,
  Coffee,
  Terminal,
  Server,
  Layers,
  Smartphone,
  GitBranch,
  Github,
  Figma,
  Play,
  Monitor,
  Atom,
  Workflow,
  Cloud,
  Video,
  Brush,
  PenTool,
  Layout
} from 'lucide-react';

// SpotlightCard component that wraps existing content
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.1)" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
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

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C', icon: FileCode },
        { name: 'Java', icon: Coffee },
        { name: 'Python', icon: Terminal },
        { name: 'SQL', icon: Database },
        { name: 'HTML', icon: Globe },
        { name: 'CSS', icon: Palette },
        { name: 'JavaScript', icon: Atom }
      ],
      color: 'blue',
      spotlightColor: 'rgba(0, 98, 255, 0.15)'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: Github },
        { name: 'Figma', icon: Figma },
        { name: 'Replit', icon: Play },
        { name: 'Eclipse', icon: Monitor },
        { name: 'Visual Studio', icon: Code }
      ],
      color: 'green',
      spotlightColor: 'rgba(0, 255, 47, 0.15)'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'React', icon: Atom },
        { name: 'Node.js', icon: Server },
        { name: 'Express', icon: Workflow },
        { name: 'MongoDB', icon: Database },
        { name: 'REST APIs', icon: Cloud },
        { name: 'Responsive Design', icon: Smartphone }
      ],
      color: 'cyan',
      spotlightColor: 'rgba(6, 182, 212, 0.15)'
    },
    {
      title: 'Creative Skills',
      icon: Palette,
      skills: [
        { name: 'Video Editing', icon: Video },
        { name: 'Digital Art', icon: Brush },
        { name: 'Content Writing', icon: PenTool },
        { name: 'UI/UX Design', icon: Layout }
      ],
      color: 'purple',
      spotlightColor: 'rgba(156, 49, 255, 0.15)'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-800',
      green: 'from-green-50 to-green-100 border-green-200 text-green-800',
      cyan: 'from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-800',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-800'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconBgColor = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      cyan: 'bg-cyan-100 text-cyan-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getSkillIconColor = (color: string) => {
    const colorMap = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      cyan: 'text-cyan-500',
      purple: 'text-purple-500'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <SpotlightCard
                key={index}
                className={`bg-gradient-to-br ${getColorClasses(category.color)} p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300`}
                spotlightColor={category.spotlightColor}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${getIconBgColor(category.color)}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skillIndex}
                        className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-slate-700 border border-white/50 hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
                      >
                        <SkillIcon size={14} className={getSkillIconColor(category.color)} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <SpotlightCard 
            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200"
            spotlightColor="rgba(255, 193, 7, 0.15)"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">Always Learning</h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring advanced React patterns, cloud technologies, and machine learning integration.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;