
import React, { useEffect, useRef } from 'react';

const Services = () => {
  const pageRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

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
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">Our Services</h1>
            <p className="body-lg">Comprehensive real estate solutions tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p 
              ref={(el) => (elementsRef.current[0] = el)} 
              className="reveal-animation subheading text-black/60"
            >
              WHAT WE OFFER
            </p>
            <h2 
              ref={(el) => (elementsRef.current[1] = el)} 
              className="reveal-animation heading-lg"
              style={{ transitionDelay: '0.1s' }}
            >
              Comprehensive Real Estate Services
            </h2>
            <p 
              ref={(el) => (elementsRef.current[2] = el)} 
              className="reveal-animation body-md max-w-3xl mx-auto text-black/70 mt-4"
              style={{ transitionDelay: '0.2s' }}
            >
              At Reportage Properties, we offer a comprehensive range of real estate services designed to meet all your property needs, from development to investment and management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Property Development",
                description: "We create exceptional residential and commercial properties that combine innovative design, quality construction, and prime locations to deliver outstanding value.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
                image: "https://images.unsplash.com/photo-1565315868834-9d4db14779cb?q=80&w=2670&auto=format&fit=crop"
              },
              {
                title: "Investment Opportunities",
                description: "We offer lucrative investment opportunities in high-potential properties, providing detailed market analysis and strategic advice to optimize returns.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
              },
              {
                title: "Property Management",
                description: "Our property management services ensure your investment is well-maintained and optimized for maximum value and returns.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
                image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2669&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[3 + index] = el)} 
                className="reveal-animation group"
                style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                      {service.icon}
                    </div>
                    <h3 className="heading-sm mb-4">{service.title}</h3>
                    <p className="text-black/70 mb-6">{service.description}</p>
                    <a 
                      href={`/services/${index + 1}`}
                      className="inline-flex items-center text-sm font-medium"
                    >
                      <span className="mr-2 border-b border-black pb-1 transition-all group-hover:border-b-2">Learn More</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16666 7H12.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 1.16669L12.8333 7.00002L7 12.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Development Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div 
              ref={(el) => (elementsRef.current[6] = el)} 
              className="reveal-animation"
            >
              <img 
                src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2667&auto=format&fit=crop" 
                alt="Property Development" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <div 
                ref={(el) => (elementsRef.current[7] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="subheading text-black/60">OUR EXPERTISE</p>
                <h2 className="heading-lg mb-6">Property Development</h2>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[8] = el)} 
                className="reveal-animation space-y-6"
                style={{ transitionDelay: '0.3s' }}
              >
                <p className="body-md text-black/70">
                  Our property development services encompass the entire process from land acquisition to project completion. We focus on creating exceptional properties that stand out in terms of design, quality, and value.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Residential developments including apartments, villas, and townhouses",
                    "Commercial properties including office spaces and retail outlets",
                    "Mixed-use developments that combine residential and commercial elements",
                    "Master-planned communities with comprehensive amenities"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="mr-3 flex-shrink-0 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[9] = el)} 
                className="reveal-animation mt-8"
                style={{ transitionDelay: '0.4s' }}
              >
                <a 
                  href="/projects" 
                  className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  Explore Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div 
                ref={(el) => (elementsRef.current[10] = el)} 
                className="reveal-animation"
              >
                <p className="subheading text-black/60">GROW YOUR WEALTH</p>
                <h2 className="heading-lg mb-6">Investment Opportunities</h2>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[11] = el)} 
                className="reveal-animation space-y-6"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="body-md text-black/70">
                  We offer a range of investment opportunities in high-potential properties across the UAE. Our team provides comprehensive market analysis and strategic advice to help you make informed investment decisions.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Off-plan property investments with attractive payment plans",
                    "Ready properties with immediate rental income potential",
                    "Strategic investments in emerging neighborhoods",
                    "Portfolio diversification options across different property types"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="mr-3 flex-shrink-0 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[12] = el)} 
                className="reveal-animation mt-8"
                style={{ transitionDelay: '0.3s' }}
              >
                <a 
                  href="/investor" 
                  className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  Investor Relations
                </a>
              </div>
            </div>
            
            <div 
              ref={(el) => (elementsRef.current[13] = el)} 
              className="reveal-animation order-1 md:order-2"
              style={{ transitionDelay: '0.2s' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2602&auto=format&fit=crop" 
                alt="Investment Opportunities" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Management Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div 
              ref={(el) => (elementsRef.current[14] = el)} 
              className="reveal-animation"
            >
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop" 
                alt="Property Management" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <div 
                ref={(el) => (elementsRef.current[15] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="subheading text-black/60">HASSLE-FREE OWNERSHIP</p>
                <h2 className="heading-lg mb-6">Property Management</h2>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[16] = el)} 
                className="reveal-animation space-y-6"
                style={{ transitionDelay: '0.3s' }}
              >
                <p className="body-md text-black/70">
                  Our property management services ensure your investment is well-maintained and optimized for maximum value and returns. We handle all aspects of property management so you can enjoy a hassle-free ownership experience.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Tenant screening and management",
                    "Rent collection and financial reporting",
                    "Property maintenance and repairs",
                    "Regular property inspections and market evaluations"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="mr-3 flex-shrink-0 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[17] = el)} 
                className="reveal-animation mt-8"
                style={{ transitionDelay: '0.4s' }}
              >
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  Contact Us for Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 
            ref={(el) => (elementsRef.current[18] = el)} 
            className="reveal-animation heading-lg mb-6"
          >
            Ready to Work With Us?
          </h2>
          <p 
            ref={(el) => (elementsRef.current[19] = el)} 
            className="reveal-animation body-lg max-w-3xl mx-auto mb-10"
            style={{ transitionDelay: '0.2s' }}
          >
            Contact our team today to discuss your real estate needs and how we can help you achieve your goals.
          </p>
          <div 
            ref={(el) => (elementsRef.current[20] = el)} 
            className="reveal-animation"
            style={{ transitionDelay: '0.3s' }}
          >
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
