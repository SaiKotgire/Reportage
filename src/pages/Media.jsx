
import React, { useEffect, useRef, useState } from 'react';

const mediaItems = [
  {
    id: 1,
    title: 'Reportage Properties launches new residential project in Dubai',
    date: 'May 15, 2023',
    category: 'Press Release',
    excerpt: 'Reportage Properties has announced the launch of its latest residential project in Dubai, offering luxury apartments with state-of-the-art amenities.',
    image: 'https://images.unsplash.com/photo-1606744837616-55f292b43384?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'CEO Interview: The Future of Real Estate in UAE',
    date: 'April 22, 2023',
    category: 'Interview',
    excerpt: 'In an exclusive interview, our CEO discusses the future of real estate in the UAE and Reportage Properties\' strategic vision for the coming years.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2636&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Reportage Properties Wins Best Developer Award 2023',
    date: 'March 10, 2023',
    category: 'Award',
    excerpt: 'Reportage Properties has been recognized as the Best Developer at the prestigious Real Estate Awards 2023, highlighting our commitment to excellence.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'New Sustainable Development Initiative Announced',
    date: 'February 5, 2023',
    category: 'News',
    excerpt: 'Reportage Properties announces a new initiative focusing on sustainable development practices across all our projects.',
    image: 'https://images.unsplash.com/photo-1558036117-15f0fe0f2250?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Reportage Properties Expands Portfolio with New Acquisition',
    date: 'January 18, 2023',
    category: 'Press Release',
    excerpt: 'Reportage Properties announces the acquisition of a prime land plot in Abu Dhabi, expanding our portfolio of development opportunities.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Q4 2022 Market Report: UAE Real Estate Trends',
    date: 'December 12, 2022',
    category: 'Report',
    excerpt: 'Our latest market report analyzes the trends and performance of the UAE real estate sector in Q4 2022 and provides outlook for 2023.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop'
  }
];

const Media = () => {
  const pageRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [visibleMedia, setVisibleMedia] = useState(mediaItems);
  const elementsRef = useRef([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (filter === 'all') {
      setVisibleMedia(mediaItems);
    } else {
      setVisibleMedia(mediaItems.filter(item => item.category.toLowerCase() === filter.toLowerCase()));
    }
  }, [filter]);
  
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
  }, [visibleMedia]);

  return (
    <main ref={pageRef} className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="heading-xl mb-4">Media Center</h1>
            <p className="body-lg">Stay updated with the latest news, press releases, and events from Reportage Properties.</p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'all' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              All News
            </button>
            <button 
              onClick={() => setFilter('press release')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'press release' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Press Releases
            </button>
            <button 
              onClick={() => setFilter('news')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'news' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              News
            </button>
            <button 
              onClick={() => setFilter('interview')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'interview' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Interviews
            </button>
            <button 
              onClick={() => setFilter('award')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'award' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Awards
            </button>
            <button 
              onClick={() => setFilter('report')} 
              className={`px-6 py-3 rounded-full transition-colors ${filter === 'report' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
            >
              Reports
            </button>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMedia.map((item, index) => (
              <div 
                key={item.id}
                ref={(el) => (elementsRef.current[index] = el)} 
                className="reveal-animation bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
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
                  <h3 className="text-xl font-serif font-bold mb-4 line-clamp-2">{item.title}</h3>
                  <p className="text-black/70 mb-6 line-clamp-3">{item.excerpt}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Subscribe to Our Newsletter</h2>
            <p className="body-md mb-8 text-black/70">
              Stay up to date with the latest news, updates, and insights from Reportage Properties.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-black/50"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Media;
