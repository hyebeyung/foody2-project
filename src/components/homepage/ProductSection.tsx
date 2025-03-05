"use client"
import { useState } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import SectionTitle from '../common/SectionTitle';

const products = [
  {
    id: 1,
    image: '/images/products/product-1.jpg',
    title: 'Fresh Tomato',
    price: 19.00,
    oldPrice: 29.00,
  },
  {
    id: 2,
    image: '/images/products/product-2.jpg',
    title: 'Fresh Tomato',
    price: 19.00,
    oldPrice: 29.00,
  },
  {
    id: 3,
    image: '/images/products/product-3.jpg',
    title: 'Fresh Tomato',
    price: 19.00,
    oldPrice: 29.00,
  },
  {
    id: 4,
    image: '/images/products/product-4.jpg',
    title: 'Fresh Tomato',
    price: 19.00,
    oldPrice: 29.00,
  },
  {
    id: 5,
    image: '/images/products/product-5.jpg',
    title: 'Fresh Tomato',
    price: 19.00,
    oldPrice: 29.00,
  },
  {
    id: 6,
    image: '/images/products/product-6.jpg',
    title: 'Fresh Tomato',
    price: 19.00,
    oldPrice: 29.00,
  },
  {
    id: 7,
    image: '/images/products/product-7.jpg',
    title: 'Fresh Tomato',
    price: 19.00,
    oldPrice: 29.00,
  },
  {
    id: 8,
    image: '/images/products/product-8.jpg',
    title: 'Fresh Tomato',
    price: 19.00,
    oldPrice: 29.00,
  },
  // Thêm các sản phẩm khác
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState('vegetable');

  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
          {/* Header */}
          <div className="lg:max-w-[500px] mb-8 lg:mb-0">
            <SectionTitle 
              title="Our Products"
              description="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
              className="text-start"
            />
          </div>

          {/* Tabs */}
          <div className="wow slideInRight" data-wow-delay="0.1s">
            <div className="flex gap-2">
              <button 
                className={`px-6 py-2 rounded-full border-2 border-[#3cb815] transition-colors
                  ${activeTab === 'vegetable' ? 'bg-[#3cb815] text-white' : 'text-[#3cb815] hover:bg-[#3cb815] hover:text-white'}`}
                onClick={() => setActiveTab('vegetable')}
              >
                Vegetable
              </button>
              <button 
                className={`px-6 py-2 rounded-full border-2 border-[#3cb815] transition-colors
                  ${activeTab === 'fruits' ? 'bg-[#3cb815] text-white' : 'text-[#3cb815] hover:bg-[#3cb815] hover:text-white'}`}
                onClick={() => setActiveTab('fruits')}
              >
                Fruits
              </button>
              <button 
                className={`px-6 py-2 rounded-full border-2 border-[#3cb815] transition-colors
                  ${activeTab === 'fresh' ? 'bg-[#3cb815] text-white' : 'text-[#3cb815] hover:bg-[#3cb815] hover:text-white'}`}
                onClick={() => setActiveTab('fresh')}
              >
                Fresh
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              delay={0.1 + (index * 0.2)}
            />
          ))}
        </div>

        {/* Browse More Button */}
        <div className="text-center mt-12 wow fadeInUp" data-wow-delay="0.1s">
          <Link 
            href="/products" 
            className="bg-[#3cb815] hover:bg-[#2f9010] text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            Browse More Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;