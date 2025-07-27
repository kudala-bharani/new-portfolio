import React from 'react';
import { GraduationCap, Award, Heart, Target, Users } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science and a drive for continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SpotlightCard 
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200"
              spotlightColor="rgba(0, 98, 255, 0.15)"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Current Education</h3>
              </div>
              <p className="text-slate-700 mb-2">
                <strong>Master's in Computer Science</strong><br />
                Northern Arizona University
              </p>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-500" size={16} />
                <span className="text-sm font-medium text-slate-600">GPA: 4.0/4.0</span>
              </div>
            </SpotlightCard>

            <SpotlightCard 
              className="bg-gradient-to-br from-slate-50 to-green-50 p-6 rounded-xl border border-slate-200"
              spotlightColor="rgba(0, 255, 47, 0.15)"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Bachelor's Degree</h3>
              </div>
              <p className="text-slate-700 mb-2">
                <strong>B.Tech in Computer Science</strong><br />
                G Pulla Reddy Engineering College
              </p>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-500" size={16} />
                <span className="text-sm font-medium text-slate-600">CGPA: 8.05/10</span>
              </div>
            </SpotlightCard>
          </div>

          <div className="space-y-6">
            <SpotlightCard 
              className="bg-gradient-to-br from-slate-50 to-cyan-50 p-6 rounded-xl border border-slate-200"
              spotlightColor="rgba(6, 182, 212, 0.15)"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Heart className="text-cyan-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">What I Love</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                I'm passionate about web development, digital creativity, and building responsive user-friendly interfaces. 
                I enjoy the challenge of turning complex problems into simple, beautiful solutions.
              </p>
            </SpotlightCard>

            <SpotlightCard 
              className="bg-gradient-to-br from-slate-50 to-purple-50 p-6 rounded-xl border border-slate-200"
              spotlightColor="rgba(156, 49, 255, 0.15)"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">My Focus</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Currently focused on mastering full-stack development, exploring new technologies, 
                and contributing to meaningful projects that make a difference in people's lives.
              </p>
            </SpotlightCard>
          </div>
        </div>

        <div className="mt-16 text-center">
          <SpotlightCard 
            className="bg-white p-8 rounded-2xl border border-slate-200"
            spotlightColor="rgba(255, 193, 7, 0.15)"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">Ready to Collaborate?</h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              I'm always excited to work on new projects and learn from experienced developers. 
              Let's create something amazing together!
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default About;