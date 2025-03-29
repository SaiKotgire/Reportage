
import React, { useEffect, useRef, useState } from 'react';

const careerListings = [
  {
    id: 1,
    title: "Senior Property Consultant",
    department: "Sales",
    location: "Abu Dhabi",
    type: "Full Time",
    description: "We are looking for an experienced Senior Property Consultant to join our growing sales team in Abu Dhabi. The ideal candidate will have a proven track record in luxury real estate sales and excellent communication skills."
  },
  {
    id: 2,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Dubai",
    type: "Full Time",
    description: "We are seeking a talented Marketing Manager with experience in real estate to develop and implement marketing strategies for our properties and brand."
  },
  {
    id: 3,
    title: "Project Architect",
    department: "Development",
    location: "Abu Dhabi",
    type: "Full Time",
    description: "We are looking for a creative and experienced Project Architect to join our development team. The successful candidate will be responsible for designing innovative and sustainable real estate projects."
  },
  {
    id: 4,
    title: "Property Manager",
    department: "Property Management",
    location: "Dubai",
    type: "Full Time",
    description: "We are seeking an experienced Property Manager to oversee our portfolio of properties in Dubai. The ideal candidate will have excellent organizational and customer service skills."
  }
];

const Career = () => {
  const pageRef = useRef(null);
  const elementsRef = useRef([]);
  const [activeJob, setActiveJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Application submitted:', formData);
    // Show a success message
    alert('Thank you for your application. We will review it and get back to you soon!');
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      resume: null
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
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">Careers</h1>
            <p className="body-lg">Join our team and be part of shaping the future of real estate in the UAE.</p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div 
                ref={(el) => (elementsRef.current[0] = el)} 
                className="reveal-animation"
              >
                <p className="subheading text-black/60">JOIN OUR TEAM</p>
                <h2 className="heading-lg mb-6">Why Work With Us</h2>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[1] = el)} 
                className="reveal-animation space-y-6"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="body-md text-black/70">
                  At Reportage Properties, we believe that our people are our greatest asset. We provide a dynamic, collaborative work environment where talented individuals can thrive, grow, and make a meaningful impact on the real estate industry.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Competitive salary and benefits package",
                    "Opportunities for professional growth and development",
                    "Work on exciting, innovative real estate projects",
                    "Collaborative and inclusive work culture",
                    "Recognition and rewards for exceptional performance"
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
            </div>
            
            <div 
              ref={(el) => (elementsRef.current[2] = el)} 
              className="reveal-animation"
              style={{ transitionDelay: '0.3s' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                alt="Team at Reportage Properties" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[3] = el)} 
            className="reveal-animation text-center mb-12"
          >
            <p className="subheading text-black/60">OPPORTUNITIES</p>
            <h2 className="heading-lg">Current Openings</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerListings.map((job, index) => (
              <div
                key={job.id}
                ref={(el) => (elementsRef.current[4 + index] = el)} 
                className="reveal-animation cursor-pointer"
                style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
                onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
              >
                <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${activeJob === job.id ? 'ring-2 ring-black' : 'hover:shadow-lg'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-black/70">{job.department} | {job.location}</p>
                    </div>
                    <span className="px-3 py-1 bg-black text-white text-xs rounded-full">{job.type}</span>
                  </div>
                  
                  <p className="text-black/70 mb-4">{job.description}</p>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${activeJob === job.id ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="pt-4 border-t border-gray-200 mt-4">
                      <p className="font-medium mb-2">Requirements:</p>
                      <ul className="list-disc list-inside text-black/70 space-y-1">
                        <li>Minimum 3-5 years of relevant experience</li>
                        <li>Bachelor's degree in a related field</li>
                        <li>Excellent communication and interpersonal skills</li>
                        <li>Strong analytical and problem-solving abilities</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <button 
                      className="text-sm font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveJob(activeJob === job.id ? null : job.id);
                      }}
                    >
                      {activeJob === job.id ? 'Show Less' : 'Show More'}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={`ml-1 transition-transform duration-300 ${activeJob === job.id ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    
                    <a 
                      href="#apply-form" 
                      className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById('position').value = job.title;
                        setFormData(prev => ({ ...prev, position: job.title }));
                      }}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[8] = el)} 
            className="reveal-animation text-center mb-12"
          >
            <p className="subheading text-black/60">APPLY NOW</p>
            <h2 className="heading-lg">Join Our Team</h2>
            <p className="body-md max-w-3xl mx-auto text-black/70 mt-4">
              Interested in joining Reportage Properties? Fill out the application form below and we'll get back to you soon.
            </p>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[9] = el)} 
            className="reveal-animation max-w-3xl mx-auto"
            style={{ transitionDelay: '0.2s' }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">Position Applied For *</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                  placeholder="Tell us why you'd like to join our team and what you can bring to the role."
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">Resume/CV (PDF) *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
