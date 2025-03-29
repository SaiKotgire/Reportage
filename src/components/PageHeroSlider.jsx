
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PageHeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Auto-play functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide]);

  // Reset timer when manually changing slides
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
  };

  const handlePrev = () => {
    prevSlide();
    resetTimer();
  };

  const handleNext = () => {
    nextSlide();
    resetTimer();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container-custom h-full flex items-center relative z-20">
            <div className="text-white max-w-3xl px-4 md:px-0">
              <div className="overflow-hidden mb-2">
                <p 
                  className={`text-sm font-medium tracking-wider uppercase transform ${
                    index === currentSlide ? 'animate-text-reveal' : 'translate-y-full'
                  }`}
                  style={{ 
                    animationDelay: '0.3s',
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  {slide.subtitle}
                </p>
              </div>
              <div className="overflow-hidden mb-4">
                <h1 
                  className={`heading-xl transform ${
                    index === currentSlide ? 'animate-text-reveal' : 'translate-y-full'
                  }`}
                  style={{ 
                    animationDelay: '0.5s',
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  {slide.title}
                </h1>
              </div>
              <div className="overflow-hidden">
                <p 
                  className={`body-lg transform ${
                    index === currentSlide ? 'animate-text-reveal' : 'translate-y-full'
                  }`}
                  style={{ 
                    animationDelay: '0.7s',
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="absolute bottom-10 left-0 right-0 z-20 container-custom flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageHeroSlider;
