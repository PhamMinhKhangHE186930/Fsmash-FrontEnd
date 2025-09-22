import React from 'react'
import Header from '../component/Header'
import { motion } from 'framer-motion'


const businessInfo = [
    {
        category: "Vị trí và thời gian",
        items: [
            { label: "Địa chỉ", value: "Khu Công Nghệ Cao Hòa Lạc, km 29, Đại lộ, Thăng Long, Hà Nội" },
            { label: "Thành phố", value: "Hà Nội" },
            { label: "Lịch làm việc", value: "Thứ Hai - Thứ Sáu: 9:00 Sáng - 7:00 Tối" },
            { label: "Liên hệ khẩn cấp", value: "Có sẵn cho nhu cầu phụ kiện khẩn cấp" },
        ]
    },
    {
        category: "Dịch vụ có sẵn",
        items: [
            { label: "Tư vấn thiết bị", value: "Tư vấn và đề xuất phụ kiện phù hợp với cá nhân" }
        ]
    }
]

const socialPlatforms = [
    {
        platform: "Facebook",
        icon: <i className="fa-brands fa-facebook-f w-5 h-5"></i>,
        handle: "FSmash - Phụ kiện thể thao",
        content: "Mẹo và đánh giá trang bị hàng ngày",
        color: "from-blue-600 to-blue-700",
        link: "https://www.facebook.com/profile.php?id=61580859515889"
    },
    {
        platform: "Zalo",
        icon: <img width="48" height="48" src="https://img.icons8.com/color/48/zalo.png" alt="zalo" />,
        handle: "039 876 2538 - Nguyễn Trung Đức",
        content: "Liên hệ tư vấn và mua hàng",
        color: "",
        link: "https://zalo.me/0398762538"
    },
    {
        platform: "Email",
        icon: <i className="fa-solid fa-envelope"></i>,
        handle: "Nguyễn Trung Đức",
        content: "Liên hệ tư vấn, hợp tác",
        color: "from-green-500 to-green-600",
    },
];

const Contact = () => {
    return (
        <div>
            <div className='sticky top-0 z-50 w-full'>
                <Header currentTab={4} />
            </div>
            {/* Animated background elements */}
            <motion.div
                className="fixed inset-0 opacity-30"
            >
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>
            {/* Business Information & Social Media */}
            <div className='grid md:grid-cols-2 gap-12 pt-10 px-6'>
                {/* Business Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className='flex items-center gap-4 pb-10'>
                        <img
                            className='rounded-2xl w-20 h-20 object-cover'
                            alt='bussiness image'
                            src='https://diendantuyensinh24h.com/uploads/photos/shares/dai-hoc/dai-hoc-khu-vuc-ha-noi/dai-hoc-FPT/dai-hoc-FPT2.jpg'
                        />
                        <div>
                            <h1 className='font-bold text-lg'>Thông tin dự án</h1>
                            <p>Giải pháp phụ kiện thông minh cho người chơi cầu lông hằng ngày</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {businessInfo.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="rounded-xl border-0 shadow-lg bg-white/90 backdrop-blur-sm p-6">
                                <div>
                                    <div className="flex items-center gap-2 text-gray-900">
                                        <div className="bg-indigo-100 text-indigo-800 px-2 rounded-md font-medium">{section.category}</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={itemIndex}
                                            className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 last:border-0"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="text-gray-700 font-medium">{item.label}:</span>
                                            <span className="text-gray-600 sm:text-right sm:max-w-xs">{item.value}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className='flex items-center gap-4 pb-10'>
                        <img
                            className='rounded-2xl w-20 h-20 object-cover'
                            alt='follow image'
                            src='https://image.vietnamnews.vn/uploadvnnews/Article/2021/11/9/184769_minh.jpg'
                        />
                        <div>
                            <h1 className='font-bold text-lg'>Theo dõi và liên hệ</h1>
                            <p>Cập nhật thông tin chi tiết về trang bị và phụ kiện thể thao</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        {socialPlatforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => (platform?.link ? window.open(platform.link) : null)}
                            >
                                <div className="rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm cursor-pointer">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 bg-gradient-to-br ${platform.color} rounded-lg text-white`}>
                                                    {platform.icon}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900">{platform.platform}</div>
                                                    <div className="text-gray-600">{platform.handle}</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium text-gray-900">{platform.followers}</div>
                                                <div className="text-gray-600">Truy cập</div>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-gray-600">{platform.content}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact