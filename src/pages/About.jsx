
import React, { useEffect, useRef } from 'react';

const About = () => {
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
      <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">About Us</h1>
            <p className="body-lg">Reportage Properties is a leading real estate developer committed to excellence, innovation, and sustainability.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div 
                ref={(el) => (elementsRef.current[0] = el)} 
                className="reveal-animation"
              >
                <p className="subheading text-black/60">OUR STORY</p>
                <h2 className="heading-lg mb-6">
                  Building the Future of Real Estate Since 2014
                </h2>
              </div>

              <div 
                ref={(el) => (elementsRef.current[1] = el)} 
                className="reveal-animation space-y-6"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="body-md text-black/70">
                  Reportage Properties was established with a vision to transform the real estate landscape in the UAE. Since our inception in 2014, we have been committed to creating exceptional residential and commercial spaces that blend innovative design, quality construction, and strategic locations.
                </p>
                <p className="body-md text-black/70">
                  Our journey began with a single project in Abu Dhabi, and today, we proudly manage a diverse portfolio of developments across the UAE, each reflecting our dedication to excellence and customer satisfaction.
                </p>
                <p className="body-md text-black/70">
                  As we continue to grow and evolve, our focus remains on delivering properties that not only meet but exceed the expectations of our clients, while contributing to the dynamic development of the UAE's real estate sector.
                </p>
              </div>
            </div>

            <div 
              ref={(el) => (elementsRef.current[2] = el)} 
              className="reveal-animation grid grid-cols-2 gap-4"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2574&auto=format&fit=crop" 
                  alt="Reportage History" 
                  className="rounded-lg h-72 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop" 
                  alt="Reportage History" 
                  className="rounded-lg h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-10">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop" 
                  alt="Reportage History" 
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                  alt="Reportage History" 
                  className="rounded-lg h-72 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p 
              ref={(el) => (elementsRef.current[3] = el)} 
              className="reveal-animation subheading text-black/60"
            >
              OUR PURPOSE
            </p>
            <h2 
              ref={(el) => (elementsRef.current[4] = el)} 
              className="reveal-animation heading-lg"
              style={{ transitionDelay: '0.1s' }}
            >
              Vision & Mission
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div 
              ref={(el) => (elementsRef.current[5] = el)} 
              className="reveal-animation bg-white p-10 rounded-lg shadow-md"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-black/70 leading-relaxed">
                To be the most trusted and innovative real estate developer in the UAE, creating properties that enhance the quality of life for our clients while contributing to the sustainable development of communities.
              </p>
            </div>
            
            <div 
              ref={(el) => (elementsRef.current[6] = el)} 
              className="reveal-animation bg-white p-10 rounded-lg shadow-md"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-black/70 leading-relaxed">
                To deliver exceptional real estate projects that exceed customer expectations through commitment to quality, innovation, and customer service. We strive to create lasting value for our clients, partners, and communities while maintaining the highest standards of integrity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p 
              ref={(el) => (elementsRef.current[7] = el)} 
              className="reveal-animation subheading text-black/60"
            >
              GUIDING PRINCIPLES
            </p>
            <h2 
              ref={(el) => (elementsRef.current[8] = el)} 
              className="reveal-animation heading-lg"
              style={{ transitionDelay: '0.1s' }}
            >
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
                title: "Integrity",
                description: "We conduct our business with the highest ethical standards, honesty, and transparency."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>,
                title: "Innovation",
                description: "We continually seek new and better ways to create value and improve our services and products."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>,
                title: "Sustainability",
                description: "We embrace environmentally responsible practices in all aspects of our operations."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
                title: "Customer Focus",
                description: "We put our clients at the center of everything we do, striving to exceed their expectations."
              }
            ].map((value, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[9 + index] = el)} 
                className="reveal-animation text-center p-6"
                style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-black/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p 
              ref={(el) => (elementsRef.current[13] = el)} 
              className="reveal-animation subheading text-black/60"
            >
              THE PEOPLE BEHIND OUR SUCCESS
            </p>
            <h2 
              ref={(el) => (elementsRef.current[14] = el)} 
              className="reveal-animation heading-lg"
              style={{ transitionDelay: '0.1s' }}
            >
              Leadership Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Anderson",
                position: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
              },
              {
                name: "Sarah Johnson",
                position: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
              },
              {
                name: "David Chen",
                position: "Chief Financial Officer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[15 + index] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-72 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-black/60 mb-4">{member.position}</p>
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            Join Us on Our Journey
          </h2>
          <p 
            ref={(el) => (elementsRef.current[19] = el)} 
            className="reveal-animation body-lg max-w-3xl mx-auto mb-10"
            style={{ transitionDelay: '0.2s' }}
          >
            Discover the difference of working with a developer who puts quality, innovation, and customer satisfaction first.
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
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
