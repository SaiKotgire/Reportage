import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Building, ExternalLink, Check } from 'lucide-react';
import ProjectMap from '../components/ProjectMap';
import ProjectContactForm from '../components/ProjectContactForm';

// This data would normally come from an API
const projects = [
  {
    id: 1,
    title: 'Rukan Lofts',
    location: 'Dubai Land, Dubai',
    coordinates: [55.2307, 25.1399], // Dubai Land coordinates
    status: 'Completed',
    type: 'Residential',
    description: 'Luxury loft apartments in the heart of Dubai Land.',
    fullDescription: 'Rukan Lofts offers an exceptional living experience with modern architecture and premium amenities. Located in the thriving Dubai Land area, these luxury loft apartments combine contemporary design with comfort and convenience. Each unit features high ceilings, spacious layouts, and premium finishes throughout.',
    details: {
      bedrooms: '1-3',
      area: '800-1,600 sq ft',
      price: 'Starting from AED 950,000',
      completion: 'Completed in 2022',
      developer: 'Rukan Properties',
      amenities: ['Swimming Pool', 'Fitness Center', 'Children\'s Play Area', 'Landscaped Gardens', '24/7 Security', 'Covered Parking']
    },
    unitTypes: [
      {
        name: '1 Bedroom Loft',
        area: '800 sq ft',
        price: 'AED 950,000',
        image: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: '2 Bedroom Apartment',
        area: '1,200 sq ft',
        price: 'AED 1,250,000',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: '3 Bedroom Penthouse',
        area: '1,600 sq ft',
        price: 'AED 1,800,000',
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1565315868834-9d4db14779cb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop'
    ],
    exterior: [
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop'
    ],
    interior: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1565315868834-9d4db14779cb?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Alexis Tower',
    location: 'Al Reem Island, Abu Dhabi',
    coordinates: [54.4000, 24.4949], // Al Reem Island coordinates
    status: 'Under Construction',
    type: 'Mixed Use',
    description: 'A stunning mixed-use tower featuring residential and commercial spaces.',
    fullDescription: 'Alexis Tower is a prestigious mixed-use development in Al Reem Island that seamlessly blends residential luxury with commercial convenience. This architectural marvel offers panoramic views of the Arabian Gulf and the Abu Dhabi skyline. The thoughtfully designed spaces cater to both living and business needs, creating a vibrant community hub.',
    details: {
      bedrooms: 'Studio-4',
      area: '600-3,000 sq ft',
      price: 'Starting from AED 1,200,000',
      completion: 'Expected Q4 2024',
      developer: 'Alexis Development Group',
      amenities: ['Infinity Pool', 'Business Center', 'Sky Lounge', 'Smart Home Technology', 'Private Beach Access', 'Concierge Service']
    },
    unitTypes: [
      {
        name: 'Studio Apartment',
        area: '600 sq ft',
        price: 'AED 1,200,000',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: '2 Bedroom Apartment',
        area: '1,500 sq ft',
        price: 'AED 2,200,000',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: '4 Bedroom Penthouse',
        area: '3,000 sq ft',
        price: 'AED 4,500,000',
        image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2067&auto=format&fit=crop'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1603512279363-1a336175b679?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2670&auto=format&fit=crop'
    ],
    exterior: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574691820183-ab30fec5e0b0?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577427027403-1aa0b5acde4c?q=80&w=2067&auto=format&fit=crop'
    ],
    interior: [
      'https://images.unsplash.com/photo-1580237072353-751a8a8dd82c?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600697395553-b8e75d2cb33d?q=80&w=2069&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2070&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1603512279363-1a336175b679?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Diva',
    location: 'Yas Island, Abu Dhabi',
    status: 'Completed',
    type: 'Residential',
    description: 'Exclusive waterfront residences on Yas Island.',
    fullDescription: 'Diva is an exclusive residential project that redefines waterfront living on Yas Island. Each residence is crafted with meticulous attention to detail, offering a perfect blend of luxury and comfort. The strategic location provides easy access to Yas Island\'s world-class attractions while maintaining a private sanctuary for residents.',
    details: {
      bedrooms: '2-5',
      area: '1,200-4,500 sq ft',
      price: 'Starting from AED 2,500,000',
      completion: 'Completed in 2023',
      developer: 'Yas Development Corporation',
      amenities: ['Private Beach', 'Marina Berths', 'Tennis Courts', 'Spa and Wellness Center', 'Gourmet Restaurants', 'Children\'s Playground']
    },
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565315868834-9d4db14779cb?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2674&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Oracle Tower',
    location: 'Business Bay, Dubai',
    status: 'Upcoming',
    type: 'Commercial',
    description: 'State-of-the-art office spaces in Business Bay.',
    fullDescription: "Oracle Tower represents the future of commercial real estate in Dubai's Business Bay. This innovative commercial development offers cutting-edge office spaces designed for modern businesses. The tower's striking architecture and premium facilities create an inspiring environment for companies to thrive and grow in Dubai's dynamic business landscape.",
    details: {
      offices: 'Various sizes',
      area: '800-10,000 sq ft',
      price: 'Starting from AED 1,800,000',
      completion: 'Expected Q2 2025',
      developer: 'Oracle Commercial Properties',
      amenities: ['Conference Center', 'Rooftop Terrace', 'High-speed Elevators', 'Smart Building Systems', 'Underground Parking', 'Retail Spaces']
    },
    gallery: [
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2674&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603512279363-1a336175b679?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2674&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Verve Villas',
    location: 'Saadiyat Island, Abu Dhabi',
    status: 'Completed',
    type: 'Residential',
    description: 'Luxurious beachfront villas with panoramic views.',
    fullDescription: 'Verve Villas on Saadiyat Island offers an unparalleled living experience where luxury meets natural beauty. These exquisite beachfront villas feature expansive living spaces with floor-to-ceiling windows that frame breathtaking panoramic views of the Arabian Gulf. The architecture harmoniously blends with the pristine surroundings, creating homes of exceptional beauty and comfort.',
    details: {
      bedrooms: '4-6',
      area: '5,000-12,000 sq ft',
      price: 'Starting from AED 15,000,000',
      completion: 'Completed in 2021',
      developer: 'Saadiyat Luxury Developments',
      amenities: ['Private Beach Access', 'Infinity Pools', 'Indoor Theaters', 'Smart Home Systems', 'Landscaped Gardens', 'Private Gym']
    },
    gallery: [
      'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565315868834-9d4db14779cb?q=80&w=2670&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Leonardo Residences',
    location: 'Downtown Dubai',
    status: 'Under Construction',
    type: 'Residential',
    description: 'Sophisticated apartments in the heart of Downtown Dubai.',
    fullDescription: 'Leonardo Residences brings sophisticated living to the vibrant heart of Downtown Dubai. These elegantly designed apartments offer contemporary luxury with stunning views of the Burj Khalifa and Dubai Fountain. The development\'s prime location provides residents with immediate access to the area\'s renowned shopping, dining, and entertainment offerings.',
    details: {
      bedrooms: '1-3',
      area: '750-2,200 sq ft',
      price: 'Starting from AED 1,500,000',
      completion: 'Expected Q3 2024',
      developer: 'Downtown Development Group',
      amenities: ['Observation Deck', 'Fitness Center', 'Temperature-controlled Pool', 'Children\'s Play Area', 'Resident Lounge', 'Security Services']
    },
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2674&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603512279363-1a336175b679?q=80&w=2670&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id, 10));
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  }, [project]);

  if (!project) {
    return (
      <main className="pt-24 pb-20">
        <div className="container-custom">
          <div className="text-center py-20">
            <h1 className="heading-xl mb-6">Project Not Found</h1>
            <p className="body-lg mb-10">The project you're looking for doesn't exist.</p>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-opacity-90 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main ref={sectionRef} className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${project.gallery[0]})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container-custom h-full flex items-end pb-16 relative z-10">
          <div className="text-white max-w-3xl">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>
            <h1 className="heading-xl mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="inline-flex items-center gap-2">
                <MapPin size={18} />
                <span>{project.location}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Building size={18} />
                <span>{project.type}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Calendar size={18} />
                <span>{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div 
            ref={(el) => (elementsRef.current[0] = el)}
            className="reveal-animation"
          >
            <h2 className="heading-lg mb-10 text-center">Project Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="body-lg mb-10 text-gray-700">
                  {project.fullDescription}
                </p>
                <div className={`text-sm font-medium px-4 py-2 rounded-full inline-block ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'Under Construction' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="heading-sm mb-6">Project Details</h3>
                  <div className="space-y-4">
                    {project.details.bedrooms && (
                      <div className="flex justify-between pb-3 border-b border-gray-200">
                        <span className="font-medium">Bedrooms</span>
                        <span>{project.details.bedrooms}</span>
                      </div>
                    )}
                    <div className="flex justify-between pb-3 border-b border-gray-200">
                      <span className="font-medium">Area</span>
                      <span>{project.details.area}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-200">
                      <span className="font-medium">Price</span>
                      <span>{project.details.price}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-200">
                      <span className="font-medium">Completion</span>
                      <span>{project.details.completion}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-200">
                      <span className="font-medium">Developer</span>
                      <span>{project.details.developer}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div
            ref={(el) => (elementsRef.current[1] = el)}
            className="reveal-animation"
          >
            <h2 className="heading-lg mb-10 text-center">Project Location</h2>
            <div className="mb-10">
              <ProjectMap location={{ coordinates: project.coordinates }} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Transportation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>5 min to metro station</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Direct highway access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>25 min to airport</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Nearby Amenities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Shopping malls & supermarkets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Restaurants & cafes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>International schools</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Lifestyle</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Beach access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Parks & recreational areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Medical facilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Section */}
      {project.exterior && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div
              ref={(el) => (elementsRef.current[2] = el)}
              className="reveal-animation"
            >
              <h2 className="heading-lg mb-10 text-center">Exterior Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.exterior.map((image, index) => (
                  <div key={index} className="image-hover-zoom rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                    <img 
                      src={image} 
                      alt={`${project.title} - Exterior ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="my-10 p-8 bg-gray-50 rounded-lg">
                <h3 className="heading-sm mb-4">Architectural Features</h3>
                <p className="body-md mb-6">
                  {project.title} features stunning architectural elements that blend modern aesthetics with practical functionality. 
                  The building's exterior is designed to maximize natural light while providing energy efficiency.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Contemporary façade design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Energy-efficient windows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Landscaped entrance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Private balconies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Outdoor recreational spaces</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Smart building technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Interior Section */}
      {project.interior && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div
              ref={(el) => (elementsRef.current[3] = el)}
              className="reveal-animation"
            >
              <h2 className="heading-lg mb-10 text-center">Interior Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.interior.map((image, index) => (
                  <div key={index} className="image-hover-zoom rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                    <img 
                      src={image} 
                      alt={`${project.title} - Interior ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="my-10 p-8 bg-white rounded-lg shadow-md">
                <h3 className="heading-sm mb-4">Interior Features</h3>
                <p className="body-md mb-6">
                  The interiors at {project.title} are designed with attention to detail, offering residents 
                  premium finishes and thoughtful layouts for maximum comfort and luxury.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Premium flooring options</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Designer kitchen fixtures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Integrated smart home systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Spacious living areas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Luxury bathroom finishes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Built-in wardrobes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div
            ref={(el) => (elementsRef.current[4] = el)}
            className="reveal-animation"
          >
            <h2 className="heading-lg mb-10 text-center">Building Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {project.details.amenities.map((amenity, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Check size={20} className="text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{amenity}</h3>
                  <p className="text-gray-600">
                    Enjoy premium {amenity.toLowerCase()} facilities designed for your comfort and convenience.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unit Types Section */}
      {project.unitTypes && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div
              ref={(el) => (elementsRef.current[5] = el)}
              className="reveal-animation"
            >
              <h2 className="heading-lg mb-10 text-center">Available Unit Types</h2>
              {project.unitTypes.map((unit, index) => (
                <div key={index} className="mb-10 bg-white rounded-lg shadow-md p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="image-hover-zoom rounded-lg overflow-hidden">
                      <img 
                        src={unit.image} 
                        alt={unit.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="heading-md mb-4">{unit.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Area</p>
                          <p className="text-xl font-bold">{unit.area}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Starting Price</p>
                          <p className="text-xl font-bold">{unit.price}</p>
                        </div>
                      </div>
                      <p className="body-md mb-6">
                        This elegant {unit.name.toLowerCase()} offers modern living spaces with premium finishes and thoughtful design.
                      </p>
                      <a 
                        href="#contact-form" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-opacity-80 transition-all duration-300"
                      >
                        Request Details
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg">Ready for Living</h2>
            <p className="body-lg mt-4 max-w-2xl mx-auto text-gray-300">
              Interested in making {project.title} your new home? Contact us today to schedule a viewing or learn more about availability.
            </p>
          </div>
          <ProjectContactForm projectTitle={project.title} />
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
