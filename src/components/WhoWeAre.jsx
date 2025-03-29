
import React, { useEffect, useRef } from 'react';

const WhoWeAre = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div 
              ref={(el) => (elementsRef.current[0] = el)} 
              className="reveal-animation"
              style={{ transitionDelay: '0.1s' }}
            >
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2574&auto=format&fit=crop"
                alt="Luxury Property"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div 
              ref={(el) => (elementsRef.current[1] = el)} 
              className="reveal-animation absolute -bottom-10 -right-10 md:-right-20"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="bg-white p-6 md:p-10 shadow-xl rounded-lg max-w-xs">
                <p className="subheading text-black/60">ESTABLISHED IN</p>
                <p className="heading-lg">2014</p>
                <p className="body-sm mt-4 text-black/70">
                  With a decade of excellence in the UAE real estate market
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Text content */}
          <div>
            <div 
              ref={(el) => (elementsRef.current[2] = el)} 
              className="reveal-animation"
              style={{ transitionDelay: '0.2s' }}
            >
              <p className="subheading text-black/60">WHO WE ARE</p>
              <h2 className="heading-lg mb-6">
                A Leading Real Estate Developer in UAE
              </h2>
            </div>

            <div 
              ref={(el) => (elementsRef.current[3] = el)} 
              className="reveal-animation space-y-6"
              style={{ transitionDelay: '0.4s' }}
            >
              <p className="body-md text-black/70">
                Reportage Properties is one of the leading real estate developers in the UAE, with a portfolio of projects spread across prime locations in Abu Dhabi and Dubai.
              </p>
              <p className="body-md text-black/70">
                We specialize in creating distinctive, high-quality residential communities that offer exceptional value and superior living experiences.
              </p>
              <p className="body-md text-black/70">
                Our mission is to deliver innovative and sustainable developments that exceed customer expectations and contribute to the growth of the UAE's real estate sector.
              </p>
            </div>

            <div 
              ref={(el) => (elementsRef.current[4] = el)} 
              className="reveal-animation mt-8"
              style={{ transitionDelay: '0.6s' }}
            >
              <a 
                href="/about" 
                className="inline-flex items-center group"
              >
                <span className="mr-2 text-lg font-medium border-b border-black pb-1 transition-all group-hover:border-b-2">
                  Learn More
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
