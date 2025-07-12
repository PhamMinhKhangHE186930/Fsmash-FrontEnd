import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Banner() {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
        >
            <SwiperSlide>
                <img className='h-2/3 w-screen'
                    src='https://cdn.shopvnb.com/img/1920x640/uploads/slider/banner-sale-12_1695182579.webp' alt='Banner 1'
                />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-2/3 w-screen'
                    src='https://cdn.shopvnb.com/img/1920x640/uploads/slider/astrox88-sd-key-visual-2880x1120-_1718650445.webp' alt='Banner 2' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-2/3 w-screen'
                    src='https://cdn.shopvnb.com/img/1920x640/uploads/slider/thiet-ke-chua-co-ten-12_1727137763.webp' alt='Banner 3' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-2/3 w-screen'
                    src='https://cdn.shopvnb.com/img/1920x640/uploads/slider/65z3ltd-launch-website_1695177820.webp' alt='Banner 4' />
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner