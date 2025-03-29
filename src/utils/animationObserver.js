
// Animation observer for scroll-triggered animations
export const setupAnimationObserver = () => {
  // Add loaded class to body after a delay to ensure backgrounds load first
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500); // Increased delay to ensure backgrounds load first

  // Set up intersection observer for reveal animations
  if ('IntersectionObserver' in window) {
    const revealAnimations = document.querySelectorAll('.reveal-animation');
    
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    revealAnimations.forEach(animation => {
      animationObserver.observe(animation);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('.reveal-animation').forEach(element => {
      element.classList.add('revealed');
    });
  }
};

// Call this function in component useEffects
export const activateAnimations = () => {
  // Text animation for headings - delayed to ensure backgrounds load first
  const animateHeadings = () => {
    const headings = document.querySelectorAll('h1.heading-xl, h2.heading-lg');
    headings.forEach((heading, index) => {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300 * index + 800); // Increased delay for text elements
    });
  };
  
  // Staggered reveal for elements with reveal-animation class
  setTimeout(() => {
    const revealElements = document.querySelectorAll('.reveal-animation');
    revealElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('revealed');
      }, 200 * index + 300);
    });
    
    // Animate headings separately for better effect
    animateHeadings();
  }, 800); // Delay animation start to ensure backgrounds load first
};

// Function to add animation classes to elements when they become visible
export const addScrollTriggeredAnimations = () => {
  const elements = document.querySelectorAll('.scroll-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
};
