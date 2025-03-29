
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Rukan Lofts',
    location: 'Dubai Land, Dubai',
    image: 'https://images.unsplash.com/photo-1565315868834-9d4db14779cb?q=80&w=2670&auto=format&fit=crop',
    category: 'RESIDENTIAL',
  },
  {
    id: 2,
    title: 'Alexis Tower',
    location: 'Al Reem Island, Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1603512279363-1a336175b679?q=80&w=2670&auto=format&fit=crop',
    category: 'MIXED USE',
  },
  {
    id: 3,
    title: 'Diva',
    location: 'Yas Island, Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop',
    category: 'RESIDENTIAL',
  }
];

const DiscoverProjects = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div 
            ref={(el) => (elementsRef.current[0] = el)} 
            className="reveal-animation"
          >
            <p className="subheading text-black/60">PORTFOLIO</p>
            <h2 className="heading-lg mb-6 md:mb-0">Discover Our Projects</h2>
          </div>
          <div 
            ref={(el) => (elementsRef.current[1] = el)} 
            className="reveal-animation"
            style={{ transitionDelay: '0.2s' }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center group"
            >
              <span className="mr-2 text-lg font-medium border-b border-black pb-1 transition-all group-hover:border-b-2">
                View All Projects
              </span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => (elementsRef.current[index + 2] = el)} 
              className="reveal-animation project-card group relative h-[400px] md:h-[500px] overflow-hidden rounded-lg"
              style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-card-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
              <div className="absolute inset-0 bg-black opacity-0 project-card-overlay transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
                <p className="subheading mb-2 opacity-80">{project.category}</p>
                <h3 className="heading-sm mb-2 group-hover:translate-y-0 transform transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="body-sm mb-6 opacity-80">{project.location}</p>
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center mt-2"
                  >
                    <span className="mr-2 text-base font-medium border-b border-white pb-1">
                      Explore Project
                    </span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverProjects;
