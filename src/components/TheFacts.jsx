
import React, { useEffect, useRef, useState } from 'react';

const factData = [
  { id: 1, number: '7,896+', label: 'SOLD UNITS' },
  { id: 2, number: '20+', label: 'PROJECTS' },
  { id: 3, number: '15+', label: 'AWARDS' },
  { id: 4, number: '98%', label: 'SATISFIED CLIENTS' },
];

const TheFacts = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-black text-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="subheading opacity-60">OUR ACHIEVEMENTS</p>
          <h2 className="heading-lg">The Facts</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {factData.map((fact, index) => (
            <div 
              key={fact.id} 
              className={`text-center transform transition-all duration-700 ease-expo-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
            >
              <h3 className="heading-lg mb-2">{fact.number}</h3>
              <p className="subheading opacity-60">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheFacts;
