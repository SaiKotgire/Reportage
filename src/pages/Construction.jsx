
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const updates = [
  {
    id: 1,
    title: 'Rukan Lofts',
    date: 'June 15, 2023',
    status: '85% Complete',
    description: 'Construction is progressing well with façade work nearly complete and interior finishing underway.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Alexis Tower',
    date: 'May 30, 2023',
    status: '60% Complete',
    description: 'Structural work has been completed and MEP installation is in progress.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Diva',
    date: 'April 25, 2023',
    status: '95% Complete',
    description: 'Final finishing touches and landscaping are underway with handover scheduled for next month.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Oracle Tower',
    date: 'March 10, 2023',
    status: '40% Complete',
    description: 'Core structure is rising with floor slabs completed up to the 20th floor.',
    image: 'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b9?q=80&w=2670&auto=format&fit=crop'
  }
];

const Construction = () => {
  const pageRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [visibleUpdates, setVisibleUpdates] = useState(updates);
  const elementsRef = useRef([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
  }, [visibleUpdates]);

  return (
    <main ref={pageRef} className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">Construction Updates</h1>
            <p className="body-lg">Stay informed about the progress of our ongoing projects across the UAE.</p>
          </div>
        </div>
      </section>

      {/* Updates Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Project Progress</h2>
            <p className="body-md max-w-3xl mx-auto">
              Track the development of our projects with regular construction updates and milestones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {updates.map((update, index) => (
              <div 
                key={update.id}
                ref={(el) => (elementsRef.current[index] = el)} 
                className="reveal-animation bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={update.image} 
                    alt={update.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-black/60">{update.date}</span>
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">{update.status}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{update.title}</h3>
                  <p className="text-black/70 mb-6">{update.description}</p>
                  <Link 
                    to={`/construction/${update.id}`}
                    className="inline-flex items-center text-sm font-medium"
                  >
                    <span className="mr-2 border-b border-black pb-1 transition-all hover:border-b-2">See Full Update</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.16666 7H12.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 1.16669L12.8333 7.00002L7 12.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Subscribe to Construction Updates</h2>
            <p className="body-md mb-8 text-black/70">
              Receive regular updates on the construction progress of your property investment.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-black/50"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Construction;
