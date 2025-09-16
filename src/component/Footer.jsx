import React from 'react'
import { motion } from 'framer-motion'
import TypewriterComponent from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <div>
            <motion.div
                className='absolute bg-blue-800 inset-0 -z-10 '
            />
            <div className='grid md:grid-cols-12 gap-4 text-white py-10 px-5'>
                <div className='md:col-span-4'>
                    <h1 className='text-xl'>FSmash</h1>
                    <br />
                    <p className='text-gray-300'>
                        Đối tác đáng tin cậy của bạn về thiết bị và phụ kiện cầu lông cao cấp. Nâng tầm trình độ chơi của bạn từ năm 2025.
                    </p>
                    <br />
                    <p className='text-gray-300 flex'>
                        <MapPinIcon className='size-6 mr-3' />
                        Khu Công Nghệ Cao Hòa Lạc, km 29, Đại lộ, Thăng Long, Hà Nội
                    </p>
                    <p className='text-gray-300 flex'>
                        <PhoneIcon className='size-6 mr-3' />
                        000-999-8888
                    </p>
                    <p className='text-gray-300 flex'>
                        <EnvelopeIcon className='size-6 mr-3' />
                        info@fpt.edu.vn
                    </p>
                </div>
                <div className='md:col-span-2 '>
                    <h1 className='text-xl'>Liên kết nhanh</h1>
                    <br />
                    <p className='text-gray-300 flex mb-3'>
                        Trang chủ
                    </p>
                    <p className='text-gray-300 flex mb-3'>
                        Sản phẩm
                    </p>
                    <p className='text-gray-300 flex mb-3'>
                        Giới thiệu
                    </p>
                    <p className='text-gray-300 flex mb-3'>
                        Liên hệ
                    </p>
                </div>
                <div className='md:col-span-2'>
                    <h1 className='text-xl'>Sản phẩm</h1>
                    <br />
                    <p className='text-gray-300 flex mb-3'>
                        Cuốn cán vợt
                    </p>
                    <p className='text-gray-300 flex mb-3'>
                        Băng cao su non
                    </p>
                    <p className='text-gray-300 flex mb-3'>
                        Quấn cốt
                    </p>
                    <p className='text-gray-300 flex mb-3'>
                        Băng cổ tay
                    </p>
                    <p className='text-gray-300 flex mb-3'>
                        Quả cầu lông
                    </p>
                </div>
                <div className='md:col-span-2'>
                    <h1 className='text-xl'>Dịch vụ</h1>
                </div>
                <div className='md:col-span-2'>
                    <h1 className='text-xl'>Hỗ trợ</h1>
                </div>
                <hr className='border-white col-span-12' />
                <div className='col-span-full'>
                    <p>
                        Built by students, for students
                    </p>
                </div>
                <hr className='border-white col-span-12' />
                <div className='col-span-full'>
                    <p className='text-white text-center'>
                        © 2025 FSmash. Bảo lưu mọi quyền | Chính sách bảo mật | Điều khoản dịch vụ | Liên hệ
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer