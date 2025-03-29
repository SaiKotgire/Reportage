
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedImageGallery from '../components/AnimatedImageGallery';
import ProjectContactForm from '../components/ProjectContactForm';
import PageHeroSlider from '../components/PageHeroSlider';

const communities = [
  {
    id: 1,
    name: 'Dubai Land',
    description: 'A vibrant community with modern lifestyle amenities',
    longDescription: 'Dubai Land is an expansive mixed-use development area in Dubai, featuring residential communities, commercial spaces, entertainment venues, and leisure facilities. Known for its lush green landscapes and modern infrastructure, it offers a perfect blend of urban and suburban living. The area hosts numerous attractions including sports facilities, theme parks, and shopping centers, making it a self-contained district for families and professionals alike.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop'
    ],
    amenities: ['Parks and Gardens', 'Schools and Universities', 'Shopping Centers', 'Sports Facilities', 'Medical Clinics', 'Entertainment Venues'],
    projects: ['Rukan Lofts', 'Park View', 'Green Valley'],
    location: {
      lat: 25.0657,
      lng: 55.2244
    }
  },
  {
    id: 2,
    name: 'Yas Island',
    description: 'An iconic destination with world-class entertainment',
    longDescription: 'Yas Island is a premier leisure and entertainment destination in Abu Dhabi, featuring world-class attractions such as Ferrari World, Yas Waterworld, and Warner Bros. World. The island is also home to the Yas Marina Circuit, which hosts the Formula 1 Etihad Airways Abu Dhabi Grand Prix. With its stunning waterfront setting, luxury hotels, and upscale residences, Yas Island offers a unique lifestyle that combines excitement and relaxation in a breathtaking setting.',
    image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=2670&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523467827732-b8f15ffad3ac?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581888517319-5402addd2c56?q=80&w=2670&auto=format&fit=crop'
    ],
    amenities: ['Theme Parks', 'Beach Access', 'Shopping Mall', 'Golf Course', 'Marina', 'Concert Arena'],
    projects: ['Yas Acres', 'Mayan', "Water's Edge"],
    location: {
      lat: 24.4979,
      lng: 54.6068
    }
  },
  {
    id: 3,
    name: 'Al Reem Island',
    description: 'A prestigious waterfront community in Abu Dhabi',
    longDescription: 'Al Reem Island is a residential, commercial, and business development on a natural island adjacent to Abu Dhabi city. With its stunning waterfront views, modern architecture, and upscale amenities, it has become one of the most sought-after addresses in the UAE capital. The island features high-rise luxury apartments, office towers, schools, medical facilities, retail outlets, and lush parks, offering residents a complete urban lifestyle in a picturesque setting.',
    image: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2670&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=2670&auto=format&fit=crop'
    ],
    amenities: ['Waterfront Promenade', 'International Schools', 'Shopping Malls', 'Fine Dining', 'Health Clubs', 'Cultural Venues'],
    projects: ['Sky Tower', 'Sun Tower', 'Gate Towers'],
    location: {
      lat: 24.4979,
      lng: 54.4079
    }
  },
  {
    id: 4,
    name: 'Business Bay',
    description: 'A dynamic business hub in the heart of Dubai',
    longDescription: 'Business Bay is a prestigious commercial and residential district in the heart of Dubai, often referred to as the "Manhattan of the Middle East." This thriving community stretches along the Dubai Water Canal, offering stunning waterfront views and a vibrant urban atmosphere. With its impressive skyscrapers, luxury residences, five-star hotels, and extensive retail options, Business Bay represents the perfect blend of work and lifestyle. Its strategic location provides easy access to key destinations including Downtown Dubai and the Dubai International Financial Centre.',
    image: 'https://images.unsplash.com/photo-1582658241783-0ce9ad528b13?q=80&w=2670&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582658241783-0ce9ad528b13?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512699355324-40ea26333a2d?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601629665203-f9f2b8d3be93?q=80&w=2572&auto=format&fit=crop'
    ],
    amenities: ['Dubai Water Canal', 'Corporate Towers', 'Luxury Hotels', 'Fitness Centers', 'Gourmet Restaurants', 'Designer Retail'],
    projects: ['Executive Towers', 'The Opus', 'Marquise Square'],
    location: {
      lat: 25.1864,
      lng: 55.2769
    }
  }
];

const CommunityDetail = () => {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);
  const [contentVisible, setContentVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const foundCommunity = communities.find(item => item.id === parseInt(id));
    if (foundCommunity) {
      setCommunity(foundCommunity);
      
      // Delay showing content for animation
      setTimeout(() => {
        setContentVisible(true);
      }, 1000);
    }
  }, [id]);

  if (!community) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-lg mb-4">Community Not Found</h2>
          <p className="body-md mb-8">The community you're looking for doesn't exist or has been moved.</p>
          <Link to="/communities" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Back to Communities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Full screen slider */}
      <PageHeroSlider 
        images={community.gallery} 
        title={community.name} 
        subtitle="FEATURED COMMUNITY"
        description={community.description}
      />

      {/* Content Sections with staggered animations */}
      <section className={`py-20 transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md mb-6 font-serif text-orange-500">About {community.name}</h2>
              <p className="body-md mb-10 reveal-animation" style={{transitionDelay: "0.2s"}}>
                {community.longDescription}
              </p>

              <div className="mb-12 reveal-animation" style={{transitionDelay: "0.4s"}}>
                <h2 className="heading-md mb-6 font-serif text-orange-500">Gallery</h2>
                <AnimatedImageGallery images={community.gallery} title={community.name} />
              </div>
              
              <div className="mb-12 reveal-animation" style={{transitionDelay: "0.6s"}}>
                <h2 className="heading-md mb-6 font-serif text-orange-500">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {community.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 mr-3">
                        <path d="M16.6668 5L7.50016 14.1667L3.3335 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-12 reveal-animation" style={{transitionDelay: "0.8s"}}>
                <h2 className="heading-md mb-6 font-serif text-orange-500">Our Projects in {community.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {community.projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
                      <h3 className="text-xl font-serif mb-2">{project}</h3>
                      <Link 
                        to="/projects"
                        className="text-sm font-medium border-b border-black pb-1 hover:border-b-2 transition-all"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="reveal-animation" style={{transitionDelay: "1s"}}>
                <h2 className="heading-md mb-6 font-serif text-orange-500">Location</h2>
                <div className="h-[400px] bg-gray-200 rounded-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600">Interactive map showing {community.name} location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 reveal-animation" style={{transitionDelay: "1.2s"}}>
              <ProjectContactForm projectTitle={community.name} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityDetail;
