
import React, { useEffect, useRef, useState } from 'react';

const Sell = () => {
  const pageRef = useRef(null);
  const elementsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    bedrooms: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    // Show a success message
    alert('Thank you for submitting your property details. Our team will contact you soon!');
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      location: '',
      bedrooms: '',
      message: ''
    });
  };

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
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2670&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">Sell With Us</h1>
            <p className="body-lg">Partner with Reportage Properties to sell your property quickly and at the best possible price.</p>
          </div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="py-20">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[0] = el)} 
            className="reveal-animation text-center mb-16"
          >
            <p className="subheading text-black/60">YOUR TRUSTED PARTNER</p>
            <h2 className="heading-lg">Why Sell With Us</h2>
            <p className="body-md max-w-3xl mx-auto text-black/70 mt-4">
              Reportage Properties offers a comprehensive property selling service backed by years of experience and market expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Expertise",
                description: "Our team of experienced professionals has in-depth knowledge of the UAE real estate market, ensuring your property is priced correctly for a quick and profitable sale.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              },
              {
                title: "Wide Network",
                description: "With a vast network of potential buyers, including local and international investors, we can connect your property with the right buyer quickly.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              },
              {
                title: "Marketing Power",
                description: "We employ cutting-edge marketing strategies, including professional photography, virtual tours, and targeted online and offline advertising to showcase your property to potential buyers.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              }
            ].map((feature, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[1 + index] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="bg-white rounded-lg p-8 shadow-md h-full">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-black/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[4] = el)} 
            className="reveal-animation text-center mb-16"
          >
            <p className="subheading text-black/60">HOW IT WORKS</p>
            <h2 className="heading-lg">Our Selling Process</h2>
            <p className="body-md max-w-3xl mx-auto text-black/70 mt-4">
              We've streamlined the selling process to make it as easy and stress-free as possible for our clients.
            </p>
          </div>
          
          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-black/10 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  title: "Property Valuation",
                  description: "Our experts conduct a thorough assessment of your property to determine its market value, considering factors such as location, condition, size, and current market trends.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                },
                {
                  title: "Marketing Strategy",
                  description: "We develop a customized marketing plan for your property, including professional photography, virtual tours, floor plans, and targeted advertising campaigns.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                },
                {
                  title: "Buyer Screening",
                  description: "We carefully screen potential buyers to ensure they are serious and financially qualified, saving you time and effort in the selling process.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                },
                {
                  title: "Negotiation & Closing",
                  description: "Our experienced team handles all negotiations to secure the best possible price and terms for your property, and guides you through the closing process.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative"
                >
                  <div 
                    ref={(el) => (elementsRef.current[5 + index * 2] = el)} 
                    className={`reveal-animation md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}
                    style={{ transitionDelay: `${index * 0.2 + 0.2}s` }}
                  >
                    <div className={`bg-white p-6 md:p-8 rounded-lg shadow-md ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-black/70">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className={`hidden md:flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
                    <div 
                      ref={(el) => (elementsRef.current[6 + index * 2] = el)} 
                      className="reveal-animation relative"
                      style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
                    >
                      <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center z-10 relative">
                        {step.icon}
                      </div>
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-black/10" style={{ 
                        left: index % 2 === 0 ? '100%' : 'auto', 
                        right: index % 2 === 1 ? '100%' : 'auto' 
                      }}></div>
                    </div>
                  </div>
                  
                  {/* Mobile step number */}
                  <div className="md:hidden flex items-center space-x-4 mb-2">
                    <div 
                      ref={(el) => (elementsRef.current[6 + index * 2] = el)} 
                      className="reveal-animation w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0"
                      style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
                    >
                      <span>{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sell Your Property Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div 
                ref={(el) => (elementsRef.current[13] = el)} 
                className="reveal-animation"
              >
                <p className="subheading text-black/60">PARTNER WITH US</p>
                <h2 className="heading-lg mb-6">Sell Your Property</h2>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[14] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="body-md text-black/70 mb-8">
                  Interested in selling your property with Reportage Properties? Fill out the form and our team will contact you to discuss your property and our selling services in detail.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">Property Type *</label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                      >
                        <option value="">Select Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Land">Land</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                        placeholder="e.g., Dubai Marina, Al Reem Island"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                    >
                      <option value="">Select Number of Bedrooms</option>
                      <option value="Studio">Studio</option>
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4">4 Bedrooms</option>
                      <option value="5+">5+ Bedrooms</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                      placeholder="Please provide any additional details about your property (size, features, condition, etc.)"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Submit Property Details
                  </button>
                </form>
              </div>
            </div>
            
            <div>
              <div 
                ref={(el) => (elementsRef.current[15] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: '0.3s' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1543227513-1c2c350c0d10?q=80&w=2574&auto=format&fit=crop" 
                  alt="Selling Property" 
                  className="rounded-lg shadow-lg w-full h-auto mb-10"
                />
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[16] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2">What documents do I need to sell my property?</h4>
                      <p className="text-black/70">To sell your property, you'll need your title deed, NOC from the developer (if applicable), copy of your ID/passport, and service charge clearance certificate.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">How long will it take to sell my property?</h4>
                      <p className="text-black/70">The timeline varies depending on market conditions, property type, location, and pricing strategy. Our team works diligently to sell your property as quickly as possible while securing the best price.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">What are your commission rates?</h4>
                      <p className="text-black/70">Our commission rates are competitive and in line with industry standards. We provide a transparent fee structure that we'll discuss with you during our initial consultation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[17] = el)} 
            className="reveal-animation text-center mb-16"
          >
            <p className="subheading opacity-60">SUCCESS STORIES</p>
            <h2 className="heading-lg">Client Testimonials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team at Reportage Properties made selling my apartment a seamless experience. Their market knowledge and negotiation skills helped me secure a price above my expectations.",
                author: "Sarah A.",
                property: "2BR Apartment, Dubai Marina"
              },
              {
                quote: "I was impressed by the professional marketing approach and the quality of potential buyers they brought to view my villa. Sold within just three weeks!",
                author: "Mohammed K.",
                property: "4BR Villa, Arabian Ranches"
              },
              {
                quote: "After struggling to sell my property for months with another agency, Reportage Properties sold it within 45 days. Their expertise and dedication made all the difference.",
                author: "John T.",
                property: "Office Space, Business Bay"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[18 + index] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg h-full">
                  <svg className="text-white/30 mb-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M11.9998 10.0001C11.9998 7.89008 13.3025 6.00001 14.9998 6.00001C15.9998 6.00001 16.9998 7.00004 16.9998 8.00004C16.9998 9.00004 16.0873 10.0001 14.9998 10.0001C14.9998 10.0001 15.9998 10.0001 15.9998 12.0001C15.9998 14.0001 14.9998 16.0001 11.9998 16.0001C8.99976 16.0001 7.99976 14.0001 7.99976 12.0001C7.99976 10.0001 8.99976 6.00001 11.9998 6.00001M4.99976 10.0001C4.99976 7.89008 6.30249 6.00001 7.99976 6.00001C8.99976 6.00001 9.99976 7.00004 9.99976 8.00004C9.99976 9.00004 9.08726 10.0001 7.99976 10.0001C7.99976 10.0001 8.99976 10.0001 8.99976 12.0001C8.99976 14.0001 7.99976 16.0001 4.99976 16.0001C1.99976 16.0001 0.999756 14.0001 0.999756 12.0001C0.999756 10.0001 1.99976 6.00001 4.99976 6.00001"></path>
                  </svg>
                  
                  <p className="opacity-90 mb-6">{testimonial.quote}</p>
                  
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="opacity-60 text-sm">{testimonial.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sell;
