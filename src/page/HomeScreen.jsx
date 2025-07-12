import React, { useContext } from 'react'
import HomeScreenProvider, { HomeScreenContext } from '../context/HomeScreenProvider'
import Header from '../component/Header'
import Banner from '../component/Banner'
import { Navigation, Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatPrice } from '../utils/formatter';

function HomeScreen() {
    const {
        categories, brands, products,
        setCategories
    } = useContext(HomeScreenContext);
    return (
        <div>
            <Header />
            <Banner />
            <div>
                <div className='my-3 border-b-4 border-orange-500 max-w-screen-sm mx-auto'>
                    <p className='text-orange-500 uppercase font-bold text-3xl text-center'>Sản phẩm mới</p>
                </div>
                <div className='w-10/12 mx-auto'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation={true}
                        simulateTouch={false}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {products.map(product => (
                            <SwiperSlide>
                                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img class="p-8 rounded-t-lg w-full aspect-square" src={product.image} alt="product image" />
                                    </a>
                                    <div class="px-5 pb-5">
                                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>

                                        <div class="flex items-center justify-between">
                                            <span class="text-lg font-semibold text-red-700 dark:text-white">{formatPrice(product.price)} đ</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default HomeScreen