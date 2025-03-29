
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedImageGallery from '../components/AnimatedImageGallery';
import PageHeroSlider from '../components/PageHeroSlider';

const updates = [
  {
    id: 1,
    title: 'Rukan Lofts',
    date: 'June 15, 2023',
    status: '85% Complete',
    description: 'Construction is progressing well with façade work nearly complete and interior finishing underway.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop',
    detailedDescription: 'The Rukan Lofts project is making excellent progress with all structural work now complete. Façade installation is at 95% completion with final elements being installed on the east and north elevations. Interior fit-out is progressing well with drywall installation complete on all residential floors, and painting underway from floors 1-15. Kitchen and bathroom fixture installation has begun on the lower floors. MEP systems are being tested floor by floor with commissioning scheduled to begin next month. The landscaping of common areas has commenced with irrigation systems now in place.',
    galleryImages: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582679118582-3be583aae3ad?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Alexis Tower',
    date: 'May 30, 2023',
    status: '60% Complete',
    description: 'Structural work has been completed and MEP installation is in progress.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2670&auto=format&fit=crop',
    detailedDescription: 'The Alexis Tower project has reached a significant milestone with the completion of the main structural elements. The core and shell work is now complete up to the 35th floor. Curtain wall installation has begun and is currently at the 15th floor level. MEP rough-ins are progressing well, with plumbing and electrical work advancing floor by floor. The main mechanical rooms are now equipped, and elevator installation has commenced with two service elevators already operational for construction use. Interior partitioning is underway on the lower 10 floors.',
    galleryImages: [
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Diva',
    date: 'April 25, 2023',
    status: '95% Complete',
    description: 'Final finishing touches and landscaping are underway with handover scheduled for next month.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop',
    detailedDescription: 'The Diva project is in its final stages with all major construction work now complete. Final inspections by regulatory authorities are scheduled for next week. Interior finishing touches are being applied, including the installation of light fixtures, door hardware, and final coat of paint in common areas. Landscaping is 80% complete with planting of mature trees and shrubs now underway. Swimming pool tiling and waterproofing is complete, with water treatment systems now being tested. The resident clubhouse interior design elements are being installed. The project remains on schedule for handover to owners next month.',
    galleryImages: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'Oracle Tower',
    date: 'March 10, 2023',
    status: '40% Complete',
    description: 'Core structure is rising with floor slabs completed up to the 20th floor.',
    image: 'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b9?q=80&w=2670&auto=format&fit=crop',
    detailedDescription: 'The Oracle Tower project is making steady progress with structural work as the main focus at this stage. Concrete pouring for floor slabs has reached the 20th floor, with formwork now proceeding to floors 21-22. The central core containing elevators and services has progressed to the 23rd floor. Basement levels are now complete with waterproofing finished and tested. MEP rough-in work has begun on the lower floors. Curtain wall production is underway off-site with installation expected to commence next month, starting from the 3rd floor. Project management reports that the timeline remains on schedule despite minor delays due to material delivery.',
    galleryImages: [
      'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b9?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2670&auto=format&fit=crop'
    ]
  }
];

const ConstructionDetail = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState(null);
  const [contentVisible, setContentVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const foundUpdate = updates.find(item => item.id === parseInt(id));
    if (foundUpdate) {
      setUpdate(foundUpdate);
      
      // Delay showing content for animation
      setTimeout(() => {
        setContentVisible(true);
      }, 1000);
    }
  }, [id]);

  if (!update) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-lg mb-4">Construction Update Not Found</h2>
          <p className="body-md mb-8">The construction update you're looking for doesn't exist or has been moved.</p>
          <Link to="/construction" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Back to Updates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Full screen slider */}
      <PageHeroSlider 
        images={update.galleryImages} 
        title={update.title} 
        subtitle="CONSTRUCTION UPDATE"
        description={update.description}
      />

      {/* Detail Section with staggered animations */}
      <section className={`py-20 transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="reveal-animation" style={{transitionDelay: "0.2s"}}>
                <h2 className="heading-md mb-6 font-serif text-orange-500">Construction Progress</h2>
                <p className="body-md mb-8">
                  {update.detailedDescription}
                </p>
              </div>

              <div className="mt-12 reveal-animation" style={{transitionDelay: "0.4s"}}>
                <h2 className="heading-md mb-6 font-serif text-orange-500">Progress Gallery</h2>
                <AnimatedImageGallery images={update.galleryImages} title={update.title} />
              </div>
            </div>

            <div className="reveal-animation" style={{transitionDelay: "0.6s"}}>
              <div className="bg-gray-100 p-8 rounded-lg sticky top-24">
                <h3 className="heading-sm mb-6 font-serif text-orange-500">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-black/60">Project</p>
                    <p className="font-serif text-lg">{update.title}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-black/60">Last Updated</p>
                    <p>{update.date}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-black/60">Status</p>
                    <p>{update.status}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/construction"
                    className="inline-flex items-center text-sm font-medium"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M12.8333 7H1.16666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 12.8334L1.16667 7.00002L7 1.16669" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="border-b border-black pb-1 transition-all hover:border-b-2">Back to All Updates</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConstructionDetail;
