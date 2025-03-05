import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
      
      const slides = [
        {
          image: '/images/carousel/carousel-1.jpg',
          title: 'Organic Food Is Good For Health',
        },
        {
          image: '/images/carousel/carousel-2.jpg',
          title: 'Natural Food Is Always Healthy',
        }
      ];
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prevSlide) => 
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
          );
        }, 5000); // Change slide every 5 seconds
    
        return () => clearInterval(timer);
      }, [slides.length]);
    
      const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
      };
    
      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
      };
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-opacity-30">
              <div className="container mx-auto px-4 h-full">
                <div className="flex items-center h-full">
                  <div className="w-full md:w-2/3 text-white">
                    <h1 className="text-4xl md:text-6xl text-black font-bold mb-8 animate-slideInDown">
                      {slide.title}
                    </h1>
                    <div className="flex gap-4">
                      <Link 
                        href="/products"
                        className="bg-[#3cb815] hover:bg-[#2f9010] text-white px-8 py-3 rounded-full transition-colors duration-300"
                      >
                        Products
                      </Link>
                      <Link 
                        href="/services"
                        className="bg-[#f65005] hover:bg-[#d94604] text-white px-8 py-3 rounded-full transition-colors duration-300"
                      >
                        Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}

export default HeroSection