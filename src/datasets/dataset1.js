export const Categories = [
    { id: '1', name: 'Giày cầu lông' },
    { id: '2', name: 'Bao vợt cầu lông' },
    { id: '3', name: 'Phụ kiện cầu lông' },
    { id: '4', name: 'Quần áo cầu lông' },
];

export const Brands = [
    { id: '1', name: 'Yonex' },
    { id: '2', name: 'Victor' },
    { id: '3', name: 'Lining' },
    { id: '4', name: 'Mizuno' },
    { id: '5', name: 'Adidas' },
    { id: '6', name: 'Kamito' },
    { id: '7', name: 'other' },
];

// bổ sung description, mô tả, thông số => bảng mô tả, thông số riêng
export const Product = [
    // Giày cầu lông
    {
        id: '1', productCode: 'FSM0001', name: 'Giày cầu lông Yonex SHB 470CR', image: ['https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-yonex-shb-470cr-trang-vang-noi-dia-trung_1750885178.webp'], price: 1570000, quantity: 20, description: '', brand: '1', category: '1',
    },
    { id: '2', productCode: 'FSM0002', name: 'Giày cầu lông Victor A610', image: ['https://cdn.shopvnb.com/uploads/san_pham/giay-cau-long-victor-a610-vang-2.webp'], price: 1790000, quantity: 10, description: '', brand: '2', category: '1' },
    { id: '3', productCode: 'FSM0003', name: 'Giày cầu lông Lining AYTP', image: ['https://cdn.shopvnb.com/uploads/san_pham/giay-cau-long-lining-aytp-012-1-1.webp'], price: 1650000, quantity: 8, description: '', brand: '3', category: '1' },
    { id: '4', productCode: 'FSM0004', name: 'Giày cầu lông Mizuno Wave Fang', image: ['https://cdn.shopvnb.com/uploads/san_pham/giay-cau-long-mizuno-wave-fang-rx2-trang-den-3.webp'], price: 1890000, quantity: 6, description: '', brand: '4', category: '1' },
    { id: '5', productCode: 'FSM0005', name: 'Giày cầu lông Kamito Skyfire', image: ['https://giaykamito.com/wp-content/uploads/2023/11/giay-cau-long-kamito-tm-legend-cam-1-min.jpg'], price: 1450000, quantity: 12, description: '', brand: '6', category: '1' },
    { id: '6', productCode: 'FSM0006', name: 'Giày cầu lông Adidas Adizero', image: ['https://cdn.shopvnb.com/uploads/san_pham/giay-cau-long-adidas-adizero-fastcourt-tokyo-m-red-chinh-hang-1.webp'], price: 1990000, quantity: 5, description: '', brand: '5', category: '1' },

    // Bao vợt cầu lông
    { id: '7', productCode: 'FSM0007', name: 'Bao vợt Yonex 3 ngăn', image: ['https://via.placeholder.com/300x300'], price: 970000, quantity: 15, description: '', brand: '1', category: '2' },
    { id: '8', productCode: 'FSM0008', name: 'Bao vợt Victor Tour Pro', image: ['https://via.placeholder.com/300x300'], price: 850000, quantity: 20, description: '', brand: '2', category: '2' },
    { id: '9', productCode: 'FSM0009', name: 'Bao vợt Lining X700', image: ['https://via.placeholder.com/300x300'], price: 900000, quantity: 17, description: '', brand: '3', category: '2' },
    { id: '10', productCode: 'FSM0010', name: 'Bao vợt Kamito Classic', image: ['https://via.placeholder.com/300x300'], price: 780000, quantity: 8, description: '', brand: '6', category: '2' },
    { id: '11', productCode: 'FSM0011', name: 'Bao vợt Mizuno Double Pro', image: ['https://via.placeholder.com/300x300'], price: 920000, quantity: 12, description: '', brand: '4', category: '2' },
    { id: '12', productCode: 'FSM0012', name: 'Bao vợt Adidas SportBag', image: ['https://via.placeholder.com/300x300'], price: 990000, quantity: 9, description: '', brand: '5', category: '2' },

    // Phụ kiện cầu lông
    { id: '13', productCode: 'FSM0013', name: 'Cuốn cán vợt Yonex AC102', image: ['https://via.placeholder.com/300x300'], price: 20000, quantity: 50, description: '', brand: '1', category: '3' },
    { id: '14', productCode: 'FSM0014', name: 'Dây đan Victor VS-890', image: ['https://via.placeholder.com/300x300'], price: 50000, quantity: 30, description: '', brand: '2', category: '3' },
    { id: '15', productCode: 'FSM0015', name: 'Vớ cầu lông Kamito Elite', image: ['https://via.placeholder.com/300x300'], price: 25000, quantity: 40, description: '', brand: '6', category: '3' },
    { id: '16', productCode: 'FSM0016', name: 'Mút tay cầm Lining XT', image: ['https://via.placeholder.com/300x300'], price: 15000, quantity: 60, description: '', brand: '3', category: '3' },
    { id: '17', productCode: 'FSM0017', name: 'Túi cầu lông Mizuno Mesh', image: ['https://via.placeholder.com/300x300'], price: 30000, quantity: 25, description: '', brand: '4', category: '3' },
    { id: '18', productCode: 'FSM0018', name: 'Bọc cán vợt Adidas', image: ['https://via.placeholder.com/300x300'], price: 22000, quantity: 35, description: '', brand: '5', category: '3' },

    // Quần áo cầu lông
    { id: '19', productCode: 'FSM0019', name: 'Áo Yonex Men 1030', image: ['https://via.placeholder.com/300x300'], price: 115000, quantity: 10, description: '', brand: '1', category: '4' },
    { id: '20', productCode: 'FSM0020', name: 'Quần cầu lông Victor Short', image: ['https://via.placeholder.com/300x300'], price: 95000, quantity: 8, description: '', brand: '2', category: '4' },
    { id: '21', productCode: 'FSM0021', name: 'Áo Lining Pro Dry', image: ['https://via.placeholder.com/300x300'], price: 109000, quantity: 14, description: '', brand: '3', category: '4' },
    { id: '22', productCode: 'FSM0022', name: 'Áo Mizuno SpeedDry', image: ['https://via.placeholder.com/300x300'], price: 120000, quantity: 7, description: '', brand: '4', category: '4' },
    { id: '23', productCode: 'FSM0023', name: 'Áo Kamito Legend', image: ['https://via.placeholder.com/300x300'], price: 89000, quantity: 9, description: '', brand: '6', category: '4' },
    { id: '24', productCode: 'FSM0024', name: 'Bộ đồ cầu lông Adidas Set', image: ['https://via.placeholder.com/300x300'], price: 135000, quantity: 6, description: '', brand: '5', category: '4' },

    // Bổ sung thêm vài sản phẩm ngẫu nhiên
    { id: '25', productCode: 'FSM0025', name: 'Giày cầu lông Yonex SHB Comfort', image: ['https://via.placeholder.com/300x300'], price: 168000, quantity: 12, description: '', brand: '1', category: '1' },
    { id: '26', productCode: 'FSM0026', name: 'Bao vợt cầu lông Yonex Pro Series', image: ['https://via.placeholder.com/300x300'], price: 95000, quantity: 10, description: '', brand: '1', category: '2' },
    { id: '27', productCode: 'FSM0027', name: 'Cuốn cán cầu lông Victor Comfort', image: ['https://via.placeholder.com/300x300'], price: 18000, quantity: 28, description: '', brand: '2', category: '3' },
    { id: '28', productCode: 'FSM0028', name: 'Áo cầu lông Lining Premium', image: ['https://via.placeholder.com/300x300'], price: 125000, quantity: 11, description: '', brand: '3', category: '4' },
    { id: '29', productCode: 'FSM0029', name: 'Vớ cầu lông Adidas Elite', image: ['https://via.placeholder.com/300x300'], price: 29000, quantity: 20, description: '', brand: '5', category: '3' },
    { id: '30', productCode: 'FSM0030', name: 'Giày cầu lông Kamito Blaze', image: ['https://via.placeholder.com/300x300'], price: 149000, quantity: 10, description: '', brand: '6', category: '1' },
];

export const ShoeSize = [
    { id: '1', size: '36' },
    { id: '2', size: '37' },
    { id: '3', size: '38' },
    { id: '4', size: '39' },
    { id: '5', size: '40' },
    { id: '6', size: '41' },
    { id: '7', size: '42' },
    { id: '8', size: '43' },
    { id: '9', size: '44' },
    { id: '10', size: '45' },
];

export const ProductSize = [
    { id: '1', product: '1', sizeId: '1', stockQuantity: 4 },
    { id: '2', product: '1', sizeId: '2', stockQuantity: 3 },
    { id: '3', product: '1', sizeId: '3', stockQuantity: 2 },
    { id: '4', product: '1', sizeId: '4', stockQuantity: 1 },
    { id: '5', product: '1', sizeId: '5', stockQuantity: 0 },
    { id: '6', product: '1', sizeId: '6', stockQuantity: 0 },
    { id: '7', product: '1', sizeId: '7', stockQuantity: 5 },
    { id: '8', product: '1', sizeId: '8', stockQuantity: 3 },
    { id: '9', product: '1', sizeId: '9', stockQuantity: 2 },
];
