
import React, { useEffect, useRef } from 'react';

const achievements = [
  {
    id: 1,
    title: 'Excellence in Real Estate',
    description: 'Recognized for our commitment to quality and innovation in property development.',
    year: '2023',
    award: 'Best Developer Award',
    image: 'https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2234&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Sustainable Development',
    description: 'Leading the industry with eco-friendly building practices and energy-efficient designs.',
    year: '2022',
    award: 'Green Building Award',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop'
  }
];

const WeAreProud = () => {
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
    <section 
      ref={sectionRef} 
      className="py-20 md:py-28 bg-secondary"
    >
      <div className="container-custom">
        <div 
          ref={(el) => (elementsRef.current[0] = el)} 
          className="reveal-animation text-center mb-16"
        >
          <p className="subheading text-black/60">RECOGNITION</p>
          <h2 className="heading-lg">We Are Proud</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {achievements.map((item, index) => (
            <div 
              key={item.id}
              ref={(el) => (elementsRef.current[index + 1] = el)} 
              className="reveal-animation bg-white rounded-lg overflow-hidden shadow-lg"
              style={{ transitionDelay: `${index * 0.2 + 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="heading-sm">{item.title}</h3>
                  <div className="text-right">
                    <p className="text-xl font-bold">{item.year}</p>
                    <p className="text-sm text-black/60">{item.award}</p>
                  </div>
                </div>
                <p className="body-md text-black/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[3] = el)} 
          className="reveal-animation text-center mt-12"
          style={{ transitionDelay: '0.6s' }}
        >
          <a 
            href="/about" 
            className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-opacity-80 transition-all duration-300"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeAreProud;
