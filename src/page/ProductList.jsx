import { useInView, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Header from "../component/Header";
import { Clothers, Product } from "../datasets/dataset1";
import { Star, Eye } from "lucide-react";
import Footer from "../component/Footer";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export function ProductList() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const [sliderRef] = useKeenSlider({
        mode: "free", 
        slides: {
            perView: 5,
            spacing: 16,
        },
    });
    return (
        <div className="bg-gray-50 min-h-screen -z-20">
            {/* Header cố định */}
            <div className="fixed top-0 z-50 w-full">
                <Header currentTab={2} />
            </div>
            {/* Banner */}
            <div className="relative pt-16"> {/* để tránh đè lên header */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-[600px] overflow-hidden relative"
                >
                    <img
                        src="/Product-image/Banner.jpg" alt="Banner"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Section chính */}
            <section
                id="products"
                className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
                ref={ref}
            >
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000" />

                <div className="container mx-auto px-4 relative">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                        }
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        {/* Tag nhỏ */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full border border-blue-200"
                        >
                            <span className="text-blue-600 font-medium">Danh mục phụ kiện</span>
                        </motion.div>

                        {/* Tiêu đề */}
                        <h2 className="mb-6 text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
                            Đã được kiểm chứng bởi chuyên gia
                        </h2>

                        {/* Mô tả */}
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            Mọi thiết bị bạn thấy ở đây đều đã được tôi kiểm tra nghiêm ngặt qua hơn 15 năm chơi chuyên nghiệp. Đây không chỉ là những lời khuyên, mà còn là những sản phẩm đã được chứng minh hiệu quả.
                        </p>
                    </motion.div>

                    {/* Grid sản phẩm */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {Product.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0, rotateX: 0 }
                                        : { opacity: 0, y: 100, rotateX: -15 }
                                }
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                onMouseEnter={() => setHoveredProduct(index)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                className="group bg-white rounded-2xl shadow hover:shadow-xl relative overflow-hidden"

                            >
                                <div className="overflow-hidden group cursor-pointer transform-gpu h-full">
                                    {/* Hình ảnh sản phẩm */}
                                    <motion.div
                                        className="relative overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                                            />

                                            {/* Overlay khi hover */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={
                                                    hoveredProduct === index ? { opacity: 1 } : { opacity: 0 }
                                                }
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-4 text-white text-sm font-medium"
                                            >
                                                <button className="px-4 py-2 bg-white text-black rounded-lg font-semibold shadow">
                                                    <span className="flex items-center gap-2">
                                                        <Eye className="w-4 h-4" />
                                                        View Details
                                                    </span>

                                                </button>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Nội dung */}
                                    <div className="p-6 relative">
                                        <motion.div
                                            animate={{ y: hoveredProduct === index ? -5 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                                                    {product.name}
                                                </h3>
                                            </div>

                                            <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                                                {product.description}
                                            </p>

                                            {/* Expertise + Rating */}
                                            <div className="mb-4">
                                                {/* Dòng 1: Giá */}
                                                <p className="text-sm font-medium text-blue-600 mb-2">
                                                    {product.price.toLocaleString("vi-VN")} đ
                                                </p>

                                                {/* Dòng 2: Tồn kho bên trái - Rating bên phải */}
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-600">Tồn kho: {product.quantity}</span>
                                                    <div className="flex items-center space-x-1">
                                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                        <span className="text-sm text-gray-500">Pro Tested</span>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* Testimonial */}
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={
                                                    hoveredProduct === index
                                                        ? { opacity: 1, height: "auto" }
                                                        : { opacity: 0, height: 0 }
                                                }
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <blockquote className="text-sm italic text-gray-500 border-l-2 border-blue-300 pl-3 mt-3">
                                                    "{product.testimonial}"
                                                </blockquote>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }} // chỉ chạy 1 lần khi vào tầm nhìn
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12"
                        >
                            {/* Tag nhỏ */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-yellow-100 to-red-100 rounded-full border border-yellow-300"
                            >
                                <span className="text-yellow-600 font-medium">Áo đấu cho đội của bạn</span>
                            </motion.div>

                            {/* Tiêu đề */}
                            <h2 className="mb-6 text-3xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
                                Khám phá bộ sưu tập mới nhất
                            </h2>

                            {/* Mô tả */}
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                                Những mẫu áo đấu chính hãng từ các câu lạc bộ và đội tuyển hàng đầu thế giới.
                                Mỗi sản phẩm đều được lựa chọn kỹ lưỡng để mang lại trải nghiệm tốt nhất cho bạn.
                            </p>
                        </motion.div>
                        {/* Slider */}
                        <div ref={sliderRef} className="keen-slider">
                            {Clothers.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className="keen-slider__slide mx-1 cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: index * 0.1,
                                    }}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div className="bg-white rounded-2xl shadow overflow-hidden h-full">
                                        <motion.div
                                            whileHover={{
                                                y: -10,
                                                scale: 1.03,
                                                boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full"
                                        >
                                            <div className="relative h-68 overflow-hidden">
                                                <motion.img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.08 }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                                                <span className="text-sm text-gray-500">
                                                    Mã SP: {item.productCode}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Modal hiển thị chi tiết */}
                        <AnimatePresence>
                            {selectedItem && (
                                <motion.div
                                    className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedItem(null)}
                                >
                                    <motion.div
                                        className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
                                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={(e) => e.stopPropagation()} // tránh đóng khi bấm trong modal
                                    >
                                        <img
                                            src={selectedItem.image}
                                            alt={selectedItem.name}
                                            className="w-full h-102 object-cover rounded-lg mb-4"
                                        />
                                        <h3 className="text-xl font-bold mb-2">{selectedItem.name}</h3>
                                        <p className="text-gray-500 mb-2">
                                            Mã SP: {selectedItem.productCode}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {selectedItem.description || "Chưa có mô tả chi tiết..."}
                                        </p>

                                        {/* nút đóng */}
                                        <button
                                            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1"
                                            onClick={() => setSelectedItem(null)}
                                        >
                                            ✕
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>


                </div>
            </section >
            <div className="relative z-10">
                <Footer />
            </div>
        </div >
    );
}
