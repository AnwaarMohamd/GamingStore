import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { logout } from '@/features/auth/authSlice';
import CategoriesDropdown from '@/components/CategoriesDropdown/CategoriesDropdown';
import { FaShoppingCart, FaUser, FaGamepad, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.auth.user);
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-secondary/80 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold flex items-center gap-2 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent"
                >
                    <FaGamepad className='text-accent' size={32}/> GameHub
                </Link>

                {/* Hamburger for mobile */}
                <button
                    className="sm:hidden text-xl text-gray-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Links */}
                <div className={`flex flex-col sm:flex-row sm:items-center gap-6 text-sm font-medium absolute sm:static top-full left-0 w-full sm:w-auto bg-secondary/95 sm:bg-transparent p-4 sm:p-0 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} sm:flex`}>
                    <Link
                        to="/"
                        className="hover:text-accent transition-all duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="hover:text-accent transition-all duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Products
                    </Link>

                    <CategoriesDropdown />

                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="relative flex items-center gap-2 hover:text-accent transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaShoppingCart />
                        Cart
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-3 bg-accent text-xs px-2 py-0.5 rounded-full text-white">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    <Link
                        to="/favorites"
                        className="relative"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaHeart className='text-gray-300 hover:text-accent transition' size={16}/>
                    </Link>

                    {user ? (
                        <>
                            <div className="flex items-center gap-2 text-gray-300">
                                <FaUser />
                                {user.name}
                            </div>

                            <button
                                onClick={handleLogout}
                                className="bg-danger px-4 py-2 rounded-lg hover:opacity-80 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-accent px-4 py-2 rounded-lg hover:opacity-90 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;