
import React, { useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import WhoWeAre from '../components/WhoWeAre';
import TheFacts from '../components/TheFacts';
import DiscoverProjects from '../components/DiscoverProjects';
import WeAreProud from '../components/WeAreProud';
import LatestMedia from '../components/LatestMedia';
import OurPassion from '../components/OurPassion';
import ContactUs from '../components/ContactUs';
import { setupAnimationObserver, activateAnimations } from '../utils/animationObserver';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set up animation observer for scroll-triggered animations
    setupAnimationObserver();
    
    // Activate animations with proper timing
    activateAnimations();
  }, []);

  return (
    <main className="overflow-hidden">
      <HeroSlider />
      <WhoWeAre />
      <TheFacts />
      <DiscoverProjects />
      <WeAreProud />
      <LatestMedia />
      <OurPassion />
      <ContactUs />
    </main>
  );
};

export default Home;
