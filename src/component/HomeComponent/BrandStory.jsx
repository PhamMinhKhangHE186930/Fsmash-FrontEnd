import React from 'react'
import { motion } from 'framer-motion'
import TypewriterComponent from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const BrandStory = () => {
    return (
        <div className='grid md:grid-cols-12 gap-4 items-center relative z-10 h-[600px]'>
            <div className='md:col-span-5 flex justify-center'>
                <motion.img
                    className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-3xl object-cover"
                    src='https://images.wallpaperscraft.com/image/single/shuttlecock_badminton_cover_206634_1600x900.jpg'
                    alt='banner'
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1.25, ease: 'easeInOut' } }}
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
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'tween', duration: 0.8, delay: 0.4, ease: 'linear' }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="mb-6 bg-gradient-to-r from-black via-blue-600 to-green-600 bg-clip-text text-transparent text-3xl"
                        >
                            Câu chuyện đằng sau thương hiệu FSmash
                        </motion.h1>
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
    )
}

export default BrandStory