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
                        <div className='section'>
                            {/* background animation and color */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 -z-10"
                                animate={{
                                    background: [
                                        "linear-gradient(45deg, #f0f9ff, #f0fdf4, #fefce8)",
                                        "linear-gradient(135deg, #eff6ff, #ecfdf5, #fffbeb)",
                                        "linear-gradient(225deg, #f0f9ff, #f0fdf4, #fefce8)"
                                    ]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* content */}
                            <div className='grid md:grid-cols-12 gap-4 items-center relative z-10 h-dvh'>
                                <div className='md:col-span-7 flex flex-col items-center text-center'>
                                    <motion.div
                                        className='text-center md:text-left w-2/3'
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="inline-block mb-4 px-4 py-2 bg-blue-500 rounded-full"
                                        >
                                            <span className="text-white text-xl font-normal">Chào mừng đến với FSmash</span>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ type: 'tween', duration: 0.8, delay: 0.4, ease: 'linear' }}
                                        >
                                            <motion.h1
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="mb-6 bg-gradient-to-r from-black via-blue-600 to-green-600 bg-clip-text text-transparent text-lg"
                                            >
                                                FSmash – Phụ kiện cầu lông chất lượng cho mọi trận đấu
                                            </motion.h1>
                                            <div className="text-lg text-gray-700">
                                                <TypewriterComponent
                                                    options={{
                                                        strings: "Một thương hiệu phụ kiện cầu lông giá rẻ – chất lượng – tiện lợi, tập trung vào đối tượng sinh viên, người chơi phong trào tại Hà Nội. Sản phẩm chính là quấn cán vợt (grip tape), kèm combo phụ kiện (tất, khăn, áo thể thao, băng cổ tay, cầu lông), bán qua kênh online (Shopee, TikTok Shop) và trực tiếp tại sân.",
                                                        autoStart: true,
                                                        loop: false,
                                                        delay: 10,
                                                        cursor: '',
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <div className='md:col-span-5 flex justify-center'>
                                    <motion.img
                                        className="w-[300px] md:w-[400px] h-[450px] md:h-[540px] rounded-3xl object-cover"
                                        src='https://images.unsplash.com/photo-1564227050211-b6061acd4158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjByYWNrZXQlMjBzaHV0dGxlY29ja3xlbnwxfHx8fDE3NTczMjY5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                                        alt='banner'
                                        initial={{ opacity: 0, x: 60 }}
                                        animate={{ opacity: 1, x: 0, transition: { duration: 1.25, ease: 'easeInOut' } }}
                                        whileHover={{ scale: 1.04, transition: { duration: 0.45, ease: 'easeInOut' } }}
                                        transition={{ duration: 0.45, ease: 'easeInOut' }} // transition for leave hover image
                                        style={{ perspective: 2000 }}
                                    />
                                </div>
                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="col-span-12 flex flex-col items-center absolute bottom-10 left-1/2 -translate-x-1/2 group cursor-pointer"
                                >
                                    <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                                        Scroll to explore
                                    </span>
                                    <div className="w-6 h-10 border-2 border-gray-400 group-hover:border-blue-400 rounded-full flex justify-center transition-colors">
                                        <motion.div
                                            animate={{ y: [0, 12, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-1 h-3 bg-gray-400 group-hover:bg-blue-400 rounded-full mt-2 transition-colors"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                        <div className='section'>
                            <div className='grid md:grid-cols-12 gap-4 items-center relative z-10 h-[600px]'>
                                <div className='md:col-span-5 flex justify-center'>
                                    <motion.img
                                        className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-3xl object-cover"
                                        src='https://images.wallpaperscraft.com/image/single/shuttlecock_badminton_cover_206634_1600x900.jpg'
                                        alt='banner'
                                        initial={{ opacity: 0, x: 60 }}
                                        animate={{ opacity: 1, x: 0, transition: { duration: 1.25, ease: 'easeInOut' } }}
                                        whileHover={{ scale: 1.04, transition: { duration: 0.45, ease: 'easeInOut' } }}
                                        style={{ perspective: 2000 }}
                                    />
                                </div>
                                <div className='md:col-span-7 flex flex-col items-center text-center'>
                                    <motion.div
                                        className='text-center md:text-left w-2/3'
                                    >
                                        {/* <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="inline-block mb-4 px-4 py-2 bg-blue-500 rounded-full"
                                        >
                                            <span className="text-white text-xl font-normal">Chào mừng đến với FSmash</span>
                                        </motion.div> */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ type: 'tween', duration: 0.8, delay: 0.4, ease: 'linear' }}
                                        >
                                            <motion.h1
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="mb-6 bg-gradient-to-r from-black via-blue-600 to-green-600 bg-clip-text text-transparent text-3xl"
                                            >
                                                Câu chuyện đằng sau thương hiệu FSmash
                                            </motion.h1>
                                            {/* <motion.h1
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="mb-6 bg-gradient-to-r from-black via-blue-600 to-green-600 bg-clip-text text-transparent text-lg"
                                            >
                                                FSmash ra đời từ niềm đam mê cầu lông và mong muốn mang đến những phụ kiện giá rẻ – chất lượng – tiện lợi cho sinh viên và người chơi phong trào tại Hà Nội.
                                            </motion.h1> */}
                                            <div className="text-lg text-gray-700">
                                                <TypewriterComponent
                                                    options={{
                                                        strings: "FSmash ra đời từ niềm đam mê cầu lông và mong muốn mang đến những phụ kiện giá rẻ – chất lượng – tiện lợi cho sinh viên và người chơi phong trào tại Hà Nội. <br/><br/>Trong khi thị trường hiện tại bị chia nhỏ: hàng giá rẻ thì kém chất lượng, nhanh hỏng; hàng chính hãng thì quá đắt đỏ và khó tiếp cận, đặc biệt với sinh viên. Nhóm chúng tôi – gồm những người am hiểu cầu lông, có kinh nghiệm kinh doanh và giảng dạy – quyết định xây dựng một thương hiệu phụ kiện vừa túi tiền nhưng vẫn đảm bảo chất lượng.",
                                                        autoStart: true,
                                                        loop: false,
                                                        delay: 10,
                                                        cursor: '',
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className='section fp-auto-height'>
                            <div className='h-64 flex justify-center items-center'>
                                <h1>Footer</h1>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
            {/* <Banner />
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
            </div> */}

        </div >
    )
}

export default HomeScreen