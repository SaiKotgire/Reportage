
import React, { useEffect, useRef } from 'react';

const OurPassion = () => {
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
      className="py-20 md:py-28 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2670&auto=format&fit=crop)' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            ref={(el) => (elementsRef.current[0] = el)} 
            className="reveal-animation"
          >
            <p className="subheading opacity-80">OUR COMMITMENT</p>
            <h2 className="heading-lg mb-8">Our Passion</h2>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[1] = el)} 
            className="reveal-animation"
            style={{ transitionDelay: '0.2s' }}
          >
            <p className="body-lg mb-10 opacity-90">
              At Reportage Properties, our passion is to create exceptional living spaces that enrich lives and build communities. We combine architectural excellence with functionality to deliver properties that stand the test of time.
            </p>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[2] = el)} 
            className="reveal-animation grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Living</h3>
              <p className="opacity-80">Creating spaces that inspire and elevate everyday experiences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Security</h3>
              <p className="opacity-80">Building with integrity and delivering on our promises.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Care</h3>
              <p className="opacity-80">Putting our clients at the center of everything we do.</p>
            </div>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[3] = el)} 
            className="reveal-animation mt-12"
            style={{ transitionDelay: '0.6s' }}
          >
            <a 
              href="/about" 
              className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPassion;
