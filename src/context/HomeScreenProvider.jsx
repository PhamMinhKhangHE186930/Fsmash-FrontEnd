import React, { createContext, useEffect, useState } from 'react'
import { Brands, Categories, Product } from '../datasets/dataset1';

export const HomeScreenContext = createContext();

function HomeScreenProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            setCategories(Categories);
            setBrands(Brands);
            setProducts(Product);
        }
        fetchCategories();
    }, [])

    return (
        <HomeScreenContext.Provider value={{
            categories, brands, products,
            setCategories
        }}>
            {children}
        </HomeScreenContext.Provider>
    )
}

export default HomeScreenProvider