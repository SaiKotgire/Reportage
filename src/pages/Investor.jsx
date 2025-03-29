
import React, { useEffect, useRef } from 'react';

const Investor = () => {
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
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2670&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">Investor Relations</h1>
            <p className="body-lg">Discover investment opportunities and access information about our financial performance.</p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[0] = el)} 
            className="reveal-animation text-center mb-16"
          >
            <p className="subheading text-black/60">WHY INVEST WITH US</p>
            <h2 className="heading-lg">Investment Highlights</h2>
            <p className="body-md max-w-3xl mx-auto text-black/70 mt-4">
              Reportage Properties offers compelling investment opportunities with attractive returns in one of the world's most dynamic real estate markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strong Track Record",
                description: "With over X successful projects delivered and Y projects under development, we have established a proven track record of creating value for our investors.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              },
              {
                title: "Prime Locations",
                description: "Our properties are strategically located in high-demand areas across Dubai and Abu Dhabi, ensuring strong rental yields and capital appreciation potential.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              },
              {
                title: "Attractive Returns",
                description: "Our investors typically enjoy returns ranging from X% to Y% annually, outperforming many alternative investment options in the market.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              }
            ].map((item, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[1 + index] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="bg-white rounded-lg p-8 shadow-md h-full">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-black/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[4] = el)} 
            className="reveal-animation text-center mb-16"
          >
            <p className="subheading text-black/60">OUR PERFORMANCE</p>
            <h2 className="heading-lg">Financial Highlights</h2>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[5] = el)} 
            className="reveal-animation"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <p className="text-black/60 mb-2">Total Assets</p>
                    <p className="text-4xl font-bold">AED 2.8B</p>
                  </div>
                  <div className="text-center">
                    <p className="text-black/60 mb-2">Annual Revenue</p>
                    <p className="text-4xl font-bold">AED 950M</p>
                  </div>
                  <div className="text-center">
                    <p className="text-black/60 mb-2">Projects Value</p>
                    <p className="text-4xl font-bold">AED 5.2B</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-bold mb-6">Financial Growth (2019-2023)</h3>
                <div className="h-60 w-full bg-gray-200 rounded-lg flex items-end justify-around p-4">
                  {[35, 45, 60, 75, 90].map((height, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-12 bg-black rounded-t-sm transition-all duration-1000" 
                        style={{ 
                          height: `${height}%`,
                          opacity: elementsRef.current[5]?.classList.contains('revealed') ? 1 : 0,
                          transform: elementsRef.current[5]?.classList.contains('revealed') ? 'scaleY(1)' : 'scaleY(0)',
                          transformOrigin: 'bottom'
                        }}
                      ></div>
                      <p className="mt-2 text-sm">{2019 + index}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[6] = el)} 
            className="reveal-animation text-center mt-8"
            style={{ transitionDelay: '0.3s' }}
          >
            <a 
              href="#" 
              className="inline-block px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Download Annual Report
            </a>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[7] = el)} 
            className="reveal-animation text-center mb-16"
          >
            <p className="subheading text-black/60">OPPORTUNITIES</p>
            <h2 className="heading-lg">Investment Options</h2>
            <p className="body-md max-w-3xl mx-auto text-black/70 mt-4">
              We offer a range of investment opportunities to suit different investor profiles and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Direct Property Investment",
                description: "Purchase individual properties or units in our developments for rental income and capital appreciation.",
                features: [
                  "Ownership of physical assets",
                  "Potential for rental yields of 5-8% annually",
                  "Long-term capital appreciation",
                  "Flexible exit options"
                ],
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop"
              },
              {
                title: "Project Investment",
                description: "Invest in specific development projects from planning to completion, with profit sharing upon project delivery.",
                features: [
                  "Higher potential returns (10-15%)",
                  "Shorter investment horizon (2-4 years)",
                  "Developer-managed process",
                  "Diversification across multiple units"
                ],
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
              }
            ].map((option, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[8 + index] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: `${index * 0.2 + 0.2}s` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                    <p className="text-black/70 mb-6">{option.description}</p>
                    
                    <h4 className="font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="mr-3 flex-shrink-0 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="/contact" 
                      className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Relations Contact */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                ref={(el) => (elementsRef.current[10] = el)} 
                className="reveal-animation"
              >
                <p className="subheading opacity-60">GET IN TOUCH</p>
                <h2 className="heading-lg mb-6">Investor Relations Contact</h2>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[11] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="body-md opacity-80 mb-8">
                  Our investor relations team is available to answer your questions, provide additional information, and assist you in exploring investment opportunities with Reportage Properties.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="mr-4 flex-shrink-0 mt-1 opacity-60" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="opacity-80">+971 2 885 5528</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="mr-4 flex-shrink-0 mt-1 opacity-60" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="opacity-80">investors@reportageuae.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[12] = el)} 
                className="reveal-animation mt-8"
                style={{ transitionDelay: '0.3s' }}
              >
                <a 
                  href="/contact" 
                  className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300"
                >
                  Contact Investor Relations
                </a>
              </div>
            </div>
            
            <div 
              ref={(el) => (elementsRef.current[13] = el)} 
              className="reveal-animation"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Request Investor Information</h3>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>
                  
                  <div>
                    <select 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    >
                      <option value="" className="text-black">Investment Interest *</option>
                      <option value="direct-property" className="text-black">Direct Property Investment</option>
                      <option value="project-investment" className="text-black">Project Investment</option>
                      <option value="other" className="text-black">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <textarea 
                      placeholder="Additional Information" 
                      rows="4" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-white text-black rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Request Information
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Investor;
