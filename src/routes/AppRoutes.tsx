import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Products from '@/pages/Products/Products';
import ProductDetails from '@/pages/ProductsDetails/ProductsDetails';
import Cart from '@/pages/Cart/Cart';
import Checkout from '@/pages/Checkout/Checkout';
import Login from '@/pages/Login/Login';
import Register from '@/pages/Register/Register';
import Favorites from '@/pages/Favorites/Favorites';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default AppRoutes;