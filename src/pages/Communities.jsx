
import React, { useEffect, useRef } from 'react';

const communities = [
  {
    id: 1,
    name: 'Dubai Land',
    description: 'A vibrant community with modern lifestyle amenities',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Yas Island',
    description: 'An iconic destination with world-class entertainment',
    image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Al Reem Island',
    description: 'A prestigious waterfront community in Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Business Bay',
    description: 'A dynamic business hub in the heart of Dubai',
    image: 'https://images.unsplash.com/photo-1582658241783-0ce9ad528b13?q=80&w=2670&auto=format&fit=crop'
  }
];

const Communities = () => {
  const pageRef = useRef(null);
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
  }, []);

  return (
    <main ref={pageRef} className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2670&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">Our Communities</h1>
            <p className="body-lg">Discover exceptional living experiences in our carefully selected communities across the UAE.</p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Exclusive Neighborhoods</h2>
            <p className="body-md max-w-3xl mx-auto">Reportage Properties has established a presence in some of the most prestigious communities in the UAE, offering unparalleled lifestyle experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communities.map((community, index) => (
              <div 
                key={community.id}
                ref={(el) => (elementsRef.current[index] = el)} 
                className="reveal-animation relative h-[400px] rounded-lg overflow-hidden group"
                style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
              >
                <img 
                  src={community.image} 
                  alt={community.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="heading-sm mb-2">{community.name}</h3>
                  <p className="body-sm mb-4 opacity-90">{community.description}</p>
                  <a 
                    href={`/communities/${community.id}`}
                    className="inline-flex items-center text-sm font-medium"
                  >
                    <span className="mr-2 border-b border-white pb-1 transition-all hover:border-b-2">Explore Community</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.16666 7H12.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 1.16669L12.8333 7.00002L7 12.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Find Your Ideal Property</h2>
          <p className="body-lg max-w-3xl mx-auto mb-10">
            Explore our portfolio of properties in these exceptional communities.
          </p>
          <a 
            href="/projects" 
            className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </section>
    </main>
  );
};

export default Communities;
