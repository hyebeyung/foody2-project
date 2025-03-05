// app/homepage/page.tsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import ProductSection from '@/components/homepage/ProductSection';
import VisitSection from '@/components/homepage/VisitSection';
import TestimonialSection from '@/components/homepage/TestimonialSection';
import BlogSection from '@/components/homepage/BlogSection';
import HeroSection from '@/components/homepage/HeroSection';

const HomePage = () => {
  return (
    <>
    {/* Hero section */}
    <HeroSection  />
    

     {/* About section */}
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image column */}
            <div className="relative fadeIn">
                <div className="relative overflow-hidden p-5 pe-0">
                <Image
                    src="/images/about/about.jpg"
                    alt="About Us"
                    width={600}
                    height={400}
                    className="w-full rounded-lg z-10"
                />
                </div>
                <div className="before:content-[''] before:absolute before:top-0 before:left-[-20px] before:w-full before:h-full before:bg-[repeating-radial-gradient(#FFFFFF,#EEEEEE_5px,transparent_5px,transparent_10px)] before:bg-[length:20px_20px] before:transform before:skew-y-6 before:-z-10"></div>
            </div>

            {/* Content column */}
            <div className="fadeIn">
                <h1 className="text-4xl font-bold mb-6">
                Best Organic Fruits And Vegetables
                </h1>
                <p className="text-gray-600 mb-6">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                
                {/* Features list */}
                <div className="space-y-4 mb-8">
                <p className="flex items-center text-gray-600">
                    <span className="text-[#3cb815] mr-3">✓</span>
                    Tempor erat elitr rebum at clita
                </p>
                <p className="flex items-center text-gray-600">
                    <span className="text-[#3cb815] mr-3">✓</span>
                    Aliqu diam amet diam et eos
                </p>
                <p className="flex items-center text-gray-600">
                    <span className="text-[#3cb815] mr-3">✓</span>
                    Clita duo justo magna dolore erat amet
                </p>
                </div>

                {/* CTA Button */}
                <Link 
                    href="/about"
                    className="inline-block bg-[#3cb815] hover:bg-[#2f9010] text-white px-8 py-3 rounded-full transition-colors duration-300"
                >
                Read More
                </Link>
            </div>
            </div>
        </div>
    </section>
      
    <section className="bg-[#F7F8FC] bg-icon-pattern bg-center bg-repeat bg-contain mt-20 py-24">
        <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mx-auto mb-16 wow fadeInUp max-w-[500px]">
            <h1 className="text-4xl font-bold mb-4">Our Features</h1>
            <p className="text-gray-600">
                Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
            </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="wow fadeInUp" data-wow-delay="0.1s">
                <div className="bg-white text-center h-full p-8 xl:p-10 rounded-lg">
                <Image
                    src="/images/icons/icon-1.png"
                    alt="Natural Process"
                    width={80}
                    height={80}
                    className="mx-auto mb-6"
                />
                <h4 className="text-xl font-semibold mb-4">Natural Process</h4>
                <p className="text-gray-600 mb-6">
                    Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                </p>
                <Link 
                    href="#" 
                    className="inline-block border-2 border-[#3cb815] text-[#3cb815] hover:bg-[#3cb815] hover:text-white py-2 px-6 rounded-full transition-colors duration-300"
                >
                    Read More
                </Link>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="wow fadeInUp" data-wow-delay="0.3s">
                <div className="bg-white text-center h-full p-8 xl:p-10 rounded-lg">
                <Image
                    src="/images/icons/icon-2.png"
                    alt="Organic Products"
                    width={80}
                    height={80}
                    className="mx-auto mb-6"
                />
                <h4 className="text-xl font-semibold mb-4">Organic Products</h4>
                <p className="text-gray-600 mb-6">
                    Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                </p>
                <Link 
                    href="#" 
                    className="inline-block border-2 border-[#3cb815] text-[#3cb815] hover:bg-[#3cb815] hover:text-white py-2 px-6 rounded-full transition-colors duration-300"
                >
                    Read More
                </Link>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="wow fadeInUp" data-wow-delay="0.5s">
                <div className="bg-white text-center h-full p-8 xl:p-10 rounded-lg">
                <Image
                    src="/images/icons/icon-3.png"
                    alt="Biologically Safe"
                    width={80}
                    height={80}
                    className="mx-auto mb-6"
                />
                <h4 className="text-xl font-semibold mb-4">Biologically Safe</h4>
                <p className="text-gray-600 mb-6">
                    Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                </p>
                <Link 
                    href="#" 
                    className="inline-block border-2 border-[#3cb815] text-[#3cb815] hover:bg-[#3cb815] hover:text-white py-2 px-6 rounded-full transition-colors duration-300"
                >
                    Read More
                </Link>
                </div>
            </div>
            </div>
        </div>
    </section>

    <ProductSection />
    <VisitSection />
    <TestimonialSection />
    <BlogSection />
    </>
  );
};

export default HomePage;