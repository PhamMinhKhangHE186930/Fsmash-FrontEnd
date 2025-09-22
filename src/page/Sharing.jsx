import React from 'react'
import { motion, useTransform } from 'framer-motion'
import { ArrowRightIcon, BoltIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import Header from '../component/Header';

const Sharing = () => {

    const workoutTips = [
        {
            phase: "Khởi động",
            icon: <BoltIcon className="w-6 h-6" />,
            duration: "10-15 phút",
            tips: [
                "Bắt đầu với cardio nhẹ để tăng nhịp tim từ từ",
                "Kéo giãn động để chuẩn bị cho cơ và khớp",
                "Các động tác thể thao ở cường độ thấp",
                "Chuẩn bị tinh thần và các bài tập tập trung"
            ],
            effectiveness: "Giảm nguy cơ chấn thương 40% và cải thiện hiệu suất 15%"
        },
        {
            phase: "Làm nguội",
            icon: <ClockIcon className="w-6 h-6" />,
            duration: "10-15 phút",
            tips: [
                "Giảm dần cường độ để nhịp tim trở lại bình thường",
                "Kéo giãn tĩnh để cải thiện độ linh hoạt",
                "Bài tập thở sâu để phục hồi",
                "Bổ sung nước và dinh dưỡng"
            ],
            effectiveness: "Tăng tốc độ phục hồi và giảm đau cơ 30%"
        },
        {
            phase: "Kéo giãn",
            icon: <i className="fa-solid fa-bullseye" />,
            duration: "15-20 phút",
            tips: [
                "Giữ mỗi động tác kéo giãn trong ít nhất 15-30 giây",
                "Tập trung vào các nhóm cơ chính được sử dụng trong cầu lông",
                "Bao gồm khả năng di chuyển của vai, cổ tay và mắt cá chân",
                "Tính nhất quán là chìa khóa - thói quen kéo giãn hàng ngày"
            ],
            effectiveness: "Cải thiện độ linh hoạt 25% và ngăn ngừa 60% chấn thương do sử dụng quá mức"
        }
    ];
    const sportsAccessories = [
        {
            category: "Tăng cường vợt",
            purpose: "Cảm giác & Kiểm soát",
            accessories: [
                "Quấn cán vợt (Grip Tape)",
                "Overgrip",
                "Bột chống trượt (Grip Powder)",
                "Giảm chấn dây (String Dampener)"
            ],
            benefits: "Giúp cầm vợt chắc chắn, tăng khả năng kiểm soát và hạn chế trơn trượt khi ra mồ hôi"
        },
        {
            category: "Phòng tránh chấn thương",
            purpose: "Hỗ trợ & Bảo vệ",
            accessories: [
                "Băng quấn đàn hồi (Rubber Bandage)",
                "Băng cổ tay (Wristband)",
                "Đai bảo vệ gối (Knee Support)",
                "Đai cổ chân (Ankle Brace)",
                "Băng cơ dán (Kinesio Tape)"
            ],
            benefits: "Giảm nguy cơ chấn thương, bảo vệ khớp và hỗ trợ vận động trong thi đấu cường độ cao"
        },
        {
            category: "Phụ kiện thi đấu",
            purpose: "Thoải mái & Tập trung",
            accessories: [
                "Khăn thể thao",
                "Băng đô trán (Headband)",
                "Băng tay (Armband)",
                "Băng thấm mồ hôi (Sweatband)"
            ],
            benefits: "Giúp thấm hút mồ hôi, giữ cơ thể khô ráo, tăng sự tập trung và thoải mái trong trận đấu"
        },
        {
            category: "Dụng cụ cần thiết trên sân",
            purpose: "Hiệu suất & Chuẩn bị",
            accessories: [
                "Tất thể thao trắng (Sports Socks)",
                "Giày cầu lông",
                "Cầu lông (Shuttlecock)",
                "Túi đựng vợt & phụ kiện",
                "Bình nước thể thao"
            ],
            benefits: "Đảm bảo di chuyển linh hoạt, sử dụng đúng dụng cụ và duy trì thể lực trong suốt trận đấu"
        }
    ];

    return (
        <div className='pb-20'>
            <div className='sticky top-0 z-50 w-full'>
                <Header currentTab={3}/>
            </div>
            <motion.div
                className="fixed inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 -z-10"
                animate={{
                    background: [
                        "linear-gradient(45deg, #f0f9ff, #f0fdf4, #fefce8)",
                        "linear-gradient(135deg, #eff6ff, #ecfdf5, #fffbeb)",
                        "linear-gradient(225deg, #f0f9ff, #f0fdf4, #fefce8)"
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="container mx-auto px-6 relative z-10 pt-10"
            >
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-6 bg-blue-100 text-blue-800 px-6 py-2 rounded-full w-2/12 mx-auto">
                        Chia sẻ kiến thức
                    </div>
                    <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                        Những kiến thức và thực tiễn tốt nhất
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                        Là một cựu vận động viên chuyên nghiệp, tôi đam mê chia sẻ những kiến thức có thể nâng cao trình độ của bạn.
                        Dưới đây là những kiến thức thiết yếu về hiệu quả tập luyện và tối ưu hóa đào tạo.
                    </p>
                </motion.div>
                {/* Workout Effectiveness Tips */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-gray-900 text-xl font-semibold">
                            Tập luyện hiệu quả: The Three Pillars
                        </h3>
                        {/* <motion.div
                            className="hidden lg:block"
                            whileHover={{ scale: 1.05 }}
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1630225760711-ac8eaa0c8947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd2FybXVwJTIwc3RyZXRjaGluZyUyMHJvdXRpbmV8ZW58MXx8fHwxNzU3ODM1ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Training effectiveness demonstration"
                                className="w-32 h-32 object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div> */}
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {workoutTips.map((tip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            // onHoverStart={() => setHoveredCard(index)}
                            // onHoverEnd={() => setHoveredCard(null)}
                            >
                                <div className="rounded-xl overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm p-4">
                                    <div className="pb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <motion.div
                                                className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                {tip.icon}
                                            </motion.div>
                                            <div className="bg-blue-100 text-blue-700 border-blue-200 border-2 py-0 px-2 rounded-lg text-xs font-semibold">
                                                {tip.duration}
                                            </div>
                                        </div>
                                        <div className="text-gray-900">{tip.phase}</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-3">
                                            {tip.tips.map((item, tipIndex) => (
                                                <motion.div
                                                    key={tipIndex}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: tipIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600 leading-relaxed">{item}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <motion.div
                                            className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100"
                                            // animate={{
                                            //     scale: hoveredCard === index ? 1.02 : 1,
                                            //     boxShadow: hoveredCard === index ? "0 10px 25px rgba(34, 197, 94, 0.2)" : "0 0 0 rgba(34, 197, 94, 0)"
                                            // }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="text-green-800 font-medium">{tip.effectiveness}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                {/* Sports Accessories Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h3 className="text-gray-900 mb-4 text-xl font-semibold">
                                Vai trò của Phụ kiện Thể thao
                            </h3>
                            <p className="text-gray-600 max-w-2xl leading-relaxed">
                                Phụ kiện thể thao chất lượng là yếu tố thiết yếu cho hiệu suất tối ưu và phòng ngừa chấn thương. Trang bị phù hợp sẽ nâng cao sự thoải mái, khả năng kiểm soát và sự tự tin của bạn trên sân.
                            </p>
                        </div>
                        <motion.div
                            className="hidden lg:block"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1708312604109-16c0be9326cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBlcXVpcG1lbnQlMjBhY2Nlc3NvcmllcyUyMGdyaXB8ZW58MXx8fHwxNzU3ODQ4MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Badminton equipment and accessories"
                                className="w-40 h-40 object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sportsAccessories.map((accessory, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="rounded-xl overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 p-4">
                                    <div className="pb-4">
                                        <div className="w-fit mb-3 bg-indigo-100 text-indigo-800 py-0 px-2 rounded-lg font-semibold text-sm">
                                            {accessory.category}
                                        </div>
                                        <p className="text-gray-900 mb-2">{accessory.purpose}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            {accessory.accessories.map((item, accessoryIndex) => (
                                                <motion.div
                                                    key={accessoryIndex}
                                                    className="flex items-center gap-2"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: accessoryIndex * 0.05 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <ArrowRightIcon className="w-4 h-4 text-indigo-500" />
                                                    <span className="text-gray-600">{item}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                                            <p className="text-indigo-800 font-medium">{accessory.benefits}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Sharing