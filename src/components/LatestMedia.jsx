
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mediaItems = [
  {
    id: 1,
    title: 'Reportage Properties launches new residential project in Dubai',
    date: 'May 15, 2023',
    category: 'Press Release',
    image: 'https://images.unsplash.com/photo-1606744837616-55f292b43384?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'CEO Interview: The Future of Real Estate in UAE',
    date: 'April 22, 2023',
    category: 'Interview',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2636&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Reportage Properties Wins Best Developer Award 2023',
    date: 'March 10, 2023',
    category: 'Award',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'New Sustainable Development Initiative Announced',
    date: 'February 5, 2023',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1558036117-15f0fe0f2250?q=80&w=2670&auto=format&fit=crop'
  }
];

const LatestMedia = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons);
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className={`transform transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="subheading text-black/60">STAY UPDATED</p>
            <h2 className="heading-lg">Latest Media Center</h2>
          </div>
          
          <div className={`flex space-x-3 mt-6 md:mt-0 transform transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.2s' }}>
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                canScrollLeft 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              } transition-all duration-300`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                canScrollRight 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              } transition-all duration-300`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto pb-8 hide-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="pl-[max(2rem,calc((100vw-1400px)/2+2rem))] flex space-x-6">
          {mediaItems.map((item, index) => (
            <div 
              key={item.id}
              className={`min-w-[300px] md:min-w-[400px] flex-shrink-0 transform transition-all duration-700 ease-expo-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="bg-white rounded-lg overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-black/60 mr-4">{item.date}</span>
                    <span className="text-xs px-3 py-1 bg-secondary rounded-full">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                  <a 
                    href={`/media/${item.id}`}
                    className="inline-flex items-center text-sm font-medium"
                  >
                    <span className="mr-2 border-b border-black pb-1 transition-all hover:border-b-2">Read More</span>
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
      
      <div className="container-custom mt-8">
        <div className={`text-center transform transition-all duration-700 ease-expo-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '0.7s' }}>
          <a 
            href="/media" 
            className="inline-block px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestMedia;
