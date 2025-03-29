
import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const pageRef = useRef(null);
  const elementsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    alert('Thank you for your message. We will get back to you soon!');
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
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
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2574&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">Contact Us</h1>
            <p className="body-lg">Get in touch with our team for any inquiries or to schedule a consultation.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Visit Us",
                content: ["Reportage Properties LLC", "Villa No. 43, Qader Street,", "Al Bateen, Abu Dhabi, UAE"],
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              },
              {
                title: "Call Us",
                content: ["+971 2 882 9001", "+971 50 712 1133"],
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              },
              {
                title: "Email Us",
                content: ["info@reportageuae.com", "sales@reportageuae.com"],
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              }
            ].map((item, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[index] = el)} 
                className="reveal-animation text-center"
                style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
              >
                <div className="bg-white rounded-lg shadow-md p-8 h-full">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <div className="text-black/70">
                    {item.content.map((line, idx) => (
                      <p key={idx} className="mb-2">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div 
                ref={(el) => (elementsRef.current[3] = el)} 
                className="reveal-animation"
              >
                <p className="subheading text-black/60">GET IN TOUCH</p>
                <h2 className="heading-lg mb-6">Send Us a Message</h2>
              </div>
              
              <div 
                ref={(el) => (elementsRef.current[4] = el)} 
                className="reveal-animation"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="body-md text-black/70 mb-8">
                  We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div 
              ref={(el) => (elementsRef.current[5] = el)} 
              className="reveal-animation"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="h-full rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.1722239597793!2d54.35659531536178!3d24.476076584234382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e655fe3bb7b45%3A0xc9a80a61bb123cf4!2sAl%20Bateen%2C%20Abu%20Dhabi%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2suk!4v1652434232992!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '500px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reportage Properties Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[6] = el)} 
            className="reveal-animation text-center mb-12"
          >
            <h2 className="heading-lg">Office Hours</h2>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[7] = el)} 
            className="reveal-animation max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4 text-center">Abu Dhabi Office</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-medium">9:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4 text-center">Dubai Office</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-medium">9:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[8] = el)} 
            className="reveal-animation text-center mb-12"
          >
            <p className="subheading text-black/60">ANSWERS</p>
            <h2 className="heading-lg">Frequently Asked Questions</h2>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[9] = el)} 
            className="reveal-animation max-w-3xl mx-auto space-y-6"
            style={{ transitionDelay: '0.2s' }}
          >
            {[
              {
                question: "How can I schedule a viewing for a property?",
                answer: "You can schedule a property viewing by contacting our sales team directly, filling out the contact form on our website, or calling our office. We offer both in-person and virtual property tours."
              },
              {
                question: "What payment options are available for property purchases?",
                answer: "We offer a variety of payment plans to suit different needs, including standard installment plans, post-handover payment plans, and customized payment solutions. Our sales team can provide detailed information based on the specific property you're interested in."
              },
              {
                question: "Do you offer property management services?",
                answer: "Yes, we provide comprehensive property management services for investors, including tenant sourcing, rent collection, maintenance coordination, and periodic property inspections."
              },
              {
                question: "Are there any service charges for your properties?",
                answer: "Yes, there are service charges that cover maintenance of common areas, security, and other building services. The exact amount varies by property and is calculated per square foot. Details are provided in the property information package."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-black/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
