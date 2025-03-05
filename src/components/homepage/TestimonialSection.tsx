"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperInstance } from 'swiper';
import TestimonialCard from './TestimonialCard';
import SectionTitle from '../common/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        image: '/images/testimonials/testimonial-1.jpg',
        name: 'Client Name',
        profession: 'Profession',
        comment: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
    },
    {
        id: 2,
        image: '/images/testimonials/testimonial-2.jpg',
        name: 'Client Name',
        profession: 'Profession',
        comment: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
    },
    {
        id: 3,
        image: '/images/testimonials/testimonial-3.jpg',
        name: 'Client Name',
        profession: 'Profession',
        comment: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
    },
    {
        id: 4,
        image: '/images/testimonials/testimonial-4.jpg',
        name: 'Client Name',
        profession: 'Profession',
        comment: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
    },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section className="bg-gray-100 bg-icon-pattern py-24 mb-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-[500px] mx-auto mb-10">
          <SectionTitle 
            title="Customer Review"
            description="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
            className="text-center"
          />
        </div>

        {/* Testimonial Slider */}
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16 !pt-4" // Add padding bottom for navigation buttons
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard 
                  {...testimonial} 
                  isActive={index === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => swiper?.slidePrev()}
              className="w-12 h-12 rounded-full border-2 border-[#3cb815] flex items-center justify-center hover:bg-[#3cb815] hover:text-white transition-colors"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => swiper?.slideNext()}
              className="w-12 h-12 rounded-full border-2 border-[#3cb815] flex items-center justify-center hover:bg-[#3cb815] hover:text-white transition-colors"
            >
              <span className="sr-only">Next</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;