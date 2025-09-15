import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Categories, Product } from "../datasets/dataset1";
import Header from "../component/Header";

const ProductList = () => {
  const INITIAL_COUNT = 8; // load 2 hàng đầu
  const LOAD_MORE = 8;

  const [renderCount, setRenderCount] = useState(INITIAL_COUNT);
  const [visibleProducts, setVisibleProducts] = useState(
    Product.slice(0, INITIAL_COUNT)
  );
  const [isLoading, setIsLoading] = useState(false);

  const sentinelRef = useRef(null);

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
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* Header cố định */}
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>

      <h1 className="text-3xl font-bold mb-8 mt-20 text-center">
        BadmintonPro
      </h1>

      {/* Grid sản phẩm */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
                    View Details
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
    </div>
  );
};

export default ProductList;
