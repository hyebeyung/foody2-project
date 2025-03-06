"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faSearch, faShoppingBag, faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import DropdownMenu from './DropdownMenu';
import { productMenuItems, knowledgeMenuItems } from '../../../constants/homepage';
import { ROUTES } from '@/constants/routes';
import LoginModal from '@/components/auth/LoginModal';


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            {/* Top bar - sẽ ẩn khi scroll */}
            <div className={`border-b border-[#d1d4da] px-12 transition-all duration-300 overflow-hidden ${
                isScrolled 
                ? 'h-0 transform -translate-y-full opacity-0' 
                : 'h-[44px] transform translate-y-0 opacity-100'
            }`}>
                <div className='flex gap-5 py-3.5'>
                    <small className='flex text-sm '>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 me-2 self-center" />
                        123 Street, New York, USA
                    </small>
                    <small className='flex text-sm'>
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 me-2 self-center" />
                        info@example.com
                    </small>
                    <div className='flex gap-3 flex-1 justify-end'>
                        <small className='text-sm'>Follow us:</small>
                        <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 ml-2 self-center cursor-pointer hover:text-[#3cb815] transition-colors" />
                        <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 ml-2 self-center cursor-pointer hover:text-[#3cb815] transition-colors" />
                        <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 ml-2 self-center cursor-pointer hover:text-[#3cb815] transition-colors" />
                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 ml-2 self-center cursor-pointer hover:text-[#3cb815] transition-colors" />
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className={`flex px-12 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'}`}>
                <div className='flex'>
                    <Link href="#" className='text-[40px]'>
                        <h1 className='font-bold text-[#3cb815]'>F
                            <span className='text-[#f65005]'>oo</span>
                            dy
                        </h1>
                    </Link>
                </div>
                <div className='flex-1'>
                    <ul className='flex justify-end'>
                        <li className='py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.HOME}>Trang chủ</Link>
                        </li>
                        <li className='py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.ABOUT}>Giới thiệu</Link>
                        </li>
                        <li className='group relative py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.PRODUCTS}>Sản phẩm 
                            <FontAwesomeIcon icon={faAngleDown} className='w-4 h-4 inline-block ml-1'/></Link>
                            <DropdownMenu items={productMenuItems} />
                        </li>
                        <li className='group relative py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href="#">Kiến thức 
                            <FontAwesomeIcon icon={faAngleDown} className='w-4 h-4 inline-block ml-1'/></Link>
                            <DropdownMenu items={knowledgeMenuItems} />
                        </li>
                        <li className='py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.CONTACT}>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex gap-3 ml-[24px]'>
                    <Link href="#" className='self-center'>
                        <FontAwesomeIcon icon={faSearch} className="bg-white w-8 h-8 p-2 rounded-full hover:bg-[#3cb815] hover:text-white transition-all" />
                    </Link>
                    <Link href="/gio-hang" className='self-center'>
                        <FontAwesomeIcon icon={faShoppingBag} className="bg-white w-8 h-8 p-2 rounded-full hover:bg-[#3cb815] hover:text-white transition-all"/>
                    </Link>
                    <Link href="#" className='self-center' onClick={() => setLoginModalOpen(true)}>
                        <FontAwesomeIcon icon={faUser} className="bg-white w-8 h-8 p-2 rounded-full hover:bg-[#3cb815] hover:text-white transition-all"/>
                    </Link>

                    <LoginModal 
                        open={loginModalOpen}
                        onClose={() => setLoginModalOpen(false)}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;