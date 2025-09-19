import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Categories, Product } from "../datasets/dataset1";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Star, Eye, CheckCircle } from 'lucide-react';

const ProductList = () => {

  const INITIAL_COUNT = 8; // load 2 hàng đầu
  const LOAD_MORE = 8;

  const [renderCount, setRenderCount] = useState(INITIAL_COUNT);
  const [visibleProducts, setVisibleProducts] = useState(
    Product.slice(0, INITIAL_COUNT)
  );
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);

  const sentinelRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    setVisibleProducts(Product.slice(0, renderCount));
  }, [renderCount]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    let observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e.isIntersecting) return;
        if (isLoading || renderCount >= Product.length) return;

        setIsLoading(true);
        setTimeout(() => {
          setRenderCount((prev) =>
            Math.min(prev + LOAD_MORE, Product.length)
          );
          setIsLoading(false);
        }, 400);
      },
      {
        root: null,
        rootMargin: "300px",
        threshold: 0.1,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [isLoading, renderCount]);

  return (
    <div className="bg-gray-50 min-h-screen -z-20">
      {/* Header cố định */}
      <div className="fixed top-0 z-50 w-full">
        <Header currentTab={2} />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 pt-32"
      >
        {/* Tag nhỏ phía trên */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full border border-blue-200"
        >
          <span className="text-blue-600 font-medium">Danh mục sản phẩm</span>
        </motion.div>

        {/* Tiêu đề chính */}
        <h2 className="mb-6 text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
          Đã được kiểm chứng bởi chuyên gia
        </h2>

        {/* Mô tả */}
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Mọi thiết bị bạn thấy ở đây đều đã được tôi kiểm tra nghiêm ngặt qua hơn 15 năm chơi chuyên nghiệp. Đây không chỉ là những lời khuyên, mà còn là những sản phẩm đã được chứng minh hiệu quả.
        </p>
      </motion.div>



      {/* Grid sản phẩm */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 pl-10 pr-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {visibleProducts.map((item, index) => {
          const categoryName =
            Categories.find((c) => c.id === item.category)?.name || "Unknown";

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition relative overflow-hidden"
            >
              {/* Badge Pro Choice */}
              <div className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-md shadow">
                Pro Choice
              </div>

              {/* Category label */}
              <div className="absolute top-3 right-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-md">
                {categoryName}
              </div>

              {/* Image Wrapper */}
              <div className="relative">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />

                {/* Overlay chỉ nằm trên ảnh */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center pb-5 justify-end text-white opacity-0 group-hover:opacity-100 transition">
                  <button className="px-4 py-2 bg-white text-black rounded-lg font-semibold shadow">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </span>

                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.description ||
                    "Sản phẩm cầu lông chất lượng cao, được nhiều vận động viên tin dùng."}
                </p>

                <p className="font-bold text-indigo-600">
                  {item.price.toLocaleString("vi-VN")} đ
                </p>

                <div className="flex justify-between mt-3 text-sm text-gray-500">
                  <span>Tồn kho: {item.quantity}</span>
                  <span>⭐ Pro Tested</span>
                </div>
              </div>
              <p
                className="italic text-sm text-center text-gray-700 px-4 pb-3 
                relative max-h-0 opacity-0 overflow-hidden 
                  transition-all duration-300 
                group-hover:max-h-12 group-hover:opacity-100
                before:content-['|'] before:absolute before:left-2 before:mx-2 "
              >
                Perfect balance and power for aggressive gameplay
              </p>


            </motion.div>

          );
        })}
      </motion.div>

      {/* Sentinel */}
      <div
        ref={sentinelRef}
        className="mt-6 flex justify-center items-center h-12 text-sm text-gray-500"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span>Đang tải...</span>
          </div>
        ) : renderCount < Product.length ? (
          <span>Kéo xuống để xem thêm</span>
        ) : (
          <span>Đã hiển thị tất cả sản phẩm</span>
        )}
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
