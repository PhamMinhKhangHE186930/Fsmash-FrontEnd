import React, { useContext } from 'react'
import HomeScreenProvider, { HomeScreenContext } from '../context/HomeScreenProvider'
import Header from '../component/Header'
import Banner from '../component/Banner'
import { Navigation, Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatPrice } from '../utils/formatter';
import { motion } from 'framer-motion'
import TypewriterComponent from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Footer from '../component/Footer';
import About from '../component/HomeComponent/About';
import BrandStory from '../component/HomeComponent/BrandStory';

function HomeScreen() {
    const {
        categories, brands, products,
        setCategories
    } = useContext(HomeScreenContext);

    return (
        <div>
            <div className='fixed top-0 z-50 w-full'>
                <Header />
            </div>
            <ReactFullpage
                render={() => (
                    <ReactFullpage.Wrapper>
                        {/* About section */}
                        <div className='section'>
                            <About />
                        </div>
                        {/* Brand Story section */}
                        <div className='section'>
                            <BrandStory />
                        </div>
                        {/* Footer section */}
                        <div className='section fp-auto-height'>
                            <Footer />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </div >
    )
}

export default HomeScreen