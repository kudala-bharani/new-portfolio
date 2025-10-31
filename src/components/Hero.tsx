import React from 'react';
import { Download, Mail, ArrowRight, MapPin, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fadeIn">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            BK
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Bharani Kumar Reddy
            <span className="block text-cyan-600">Kudala</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <GraduationCap size={20} />
              <span>Master's Student at NAU</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Arizona, USA</span>
            </div>
          </div>
          <p className="text-xl sm:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer passionate about creating
            <span className="text-cyan-600 font-semibold"> beautiful, responsive </span>
            and user-friendly web experiences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/KUDALA_BHARANI_KUMAR_REDDY_RESUME.pdf"
            download
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-slate-800 hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-cyan-700 hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            Contact Me
          </button>
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:scale-105"
          >
            View My Work
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-slate-600 border border-slate-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;