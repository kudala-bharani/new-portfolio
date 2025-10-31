import React, { useEffect, useRef } from 'react';
import { Download, Mail, ArrowRight, MapPin, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const isHoveringRef = useRef<boolean>(false);

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

  // Continuous auto-rotation animation
  useEffect(() => {
    const animate = () => {
      if (imageRef.current && !isHoveringRef.current) {
        const time = Date.now() * 0.001; // Get time in seconds
        const rotateX = Math.sin(time * 0.8) * 5; // Subtle vertical tilt
        const rotateY = Math.cos(time * 0.6) * 5; // Subtle horizontal tilt
        const shadowX = Math.cos(time * 0.6) * 15;
        const shadowY = Math.sin(time * 0.8) * 15;
        
        imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        imageRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.2)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Parallax tilt effect for the hero image on hover
  const handleImageMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    isHoveringRef.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5;  // -0.5..0.5
    const rotateX = -(relY * 15); // tilt up/down
    const rotateY = relX * 15;    // tilt left/right
    const shadowX = relX * 20; // shadow offset X
    const shadowY = relY * 20; // shadow offset Y
    const shadowBlur = 40; // shadow blur
    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    imageRef.current.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.3)`;
  };

  const handleImageLeave = () => {
    isHoveringRef.current = false;
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-8 sm:px-12 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fadeIn">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-slate-600 border border-slate-200 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for opportunities</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm <span className="text-cyan-600">Bharani Kudala</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-700 mb-6">
              Full-Stack Developer passionate about creating
              <span className="text-cyan-600 font-semibold"> beautiful, responsive </span>
              and user-friendly web experiences
            </p>
            
            <div className="flex items-center gap-4 text-slate-600 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} />
                <span>Master's Student at NAU</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Arizona, USA</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/KUDALA_BHARANI_KUMAR_REDDY_RESUME.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-800 hover:scale-105 shadow-lg"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-cyan-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-cyan-700 hover:scale-105 shadow-lg"
              >
                <Mail size={18} />
                Contact Me
              </button>
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:scale-105"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side - Image (rectangular with rounded edges + hover tilt) */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative w-auto">
              <div
                ref={imageRef}
                className="relative rounded-2xl overflow-hidden transition-all duration-100 will-change-transform"
                onMouseMove={handleImageMove}
                onMouseLeave={handleImageLeave}
              >
                <img
                  src="https://finance-flow-frontend-o34t.onrender.com/screenshots/creator/hero.jpg"
                  alt="Bharani Kudala"
                  className="w-[22rem] h-auto object-contain rounded-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;