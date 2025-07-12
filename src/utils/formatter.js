export const formatPrice = (price) => {
    const formater = new Intl.NumberFormat('vi-VN');
    return formater.format(price);
}