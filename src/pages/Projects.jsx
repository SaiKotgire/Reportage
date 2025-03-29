
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeroSlider from '../components/PageHeroSlider';

const projects = [
  {
    id: 1,
    title: 'Rukan Lofts',
    location: 'Dubai Land, Dubai',
    status: 'Completed',
    type: 'Residential',
    description: 'Luxury loft apartments in the heart of Dubai Land.',
    image: 'https://images.unsplash.com/photo-1565315868834-9d4db14779cb?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Alexis Tower',
    location: 'Al Reem Island, Abu Dhabi',
    status: 'Under Construction',
    type: 'Mixed Use',
    description: 'A stunning mixed-use tower featuring residential and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1603512279363-1a336175b679?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Diva',
    location: 'Yas Island, Abu Dhabi',
    status: 'Completed',
    type: 'Residential',
    description: 'Exclusive waterfront residences on Yas Island.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Oracle Tower',
    location: 'Business Bay, Dubai',
    status: 'Upcoming',
    type: 'Commercial',
    description: 'State-of-the-art office spaces in Business Bay.',
    image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2674&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Verve Villas',
    location: 'Saadiyat Island, Abu Dhabi',
    status: 'Completed',
    type: 'Residential',
    description: 'Luxurious beachfront villas with panoramic views.',
    image: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Leonardo Residences',
    location: 'Downtown Dubai',
    status: 'Under Construction',
    type: 'Residential',
    description: 'Sophisticated apartments in the heart of Downtown Dubai.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
  }
];

// Hero slider content for the Projects page
const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop',
    subtitle: 'EXPLORE OUR',
    title: 'EXCEPTIONAL PROJECTS',
    description: 'Discover our diverse portfolio of exceptional properties across the UAE.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1565315868834-9d4db14779cb?q=80&w=2670&auto=format&fit=crop',
    subtitle: 'LUXURY',
    title: 'RESIDENTIAL DEVELOPMENTS',
    description: 'Premium living spaces designed for comfort and elegance.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2670&auto=format&fit=crop',
    subtitle: 'ICONIC',
    title: 'ARCHITECTURAL LANDMARKS',
    description: 'Innovative designs that redefine urban landscapes.',
  },
];

const Projects = () => {
  const pageRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const elementsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.type.toLowerCase() === filter || project.status.toLowerCase() === filter));
    }
  }, [filter]);

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
  }, [visibleProjects]);

  return (
    <main ref={pageRef} className="overflow-hidden">
      {/* Using PageHeroSlider instead of static hero section */}
      <PageHeroSlider slides={heroSlides} />

      <section className="py-12 bg-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'all' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('residential')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'residential' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Residential
            </button>
            <button 
              onClick={() => setFilter('commercial')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'commercial' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Commercial
            </button>
            <button 
              onClick={() => setFilter('mixed use')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'mixed use' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Mixed Use
            </button>
            <button 
              onClick={() => setFilter('completed')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'completed' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Completed
            </button>
            <button 
              onClick={() => setFilter('under construction')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'under construction' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Under Construction
            </button>
            <button 
              onClick={() => setFilter('upcoming')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'upcoming' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Upcoming
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div 
                key={project.id}
                ref={(el) => (elementsRef.current[index] = el)} 
                className="reveal-animation project-card group relative overflow-hidden rounded-lg shadow-md h-[400px]"
                style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="absolute top-4 left-4 z-10">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'Under Construction' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <p className="text-sm font-medium opacity-80">{project.type}</p>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:translate-y-0 transform transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 opacity-80">{project.location}</p>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
                    {project.description}
                  </p>
                  <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center"
                    >
                      <span className="mr-2 text-base font-medium border-b border-white pb-1">
                        View Project
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Find Your Perfect Property?</h2>
          <p className="body-lg max-w-3xl mx-auto mb-10">
            Contact our sales team today to learn more about our projects and available units.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Projects;
