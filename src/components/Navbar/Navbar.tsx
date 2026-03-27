import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { logout } from '@/features/auth/authSlice';
import CategoriesDropdown from '@/components/CategoriesDropdown/CategoriesDropdown';
import { FaShoppingCart, FaUser, FaGamepad, FaHeart } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.auth.user);
    const cartItems = useSelector((state: RootState) => state.cart.items);

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

                {/* Links */}
                <div className="flex items-center gap-6 text-sm font-medium">

                    <Link
                        to="/products"
                        className="hover:text-accent transition-all duration-200"
                    >
                        Products
                    </Link>
                    <CategoriesDropdown />


                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="relative flex items-center gap-2 hover:text-accent transition"
                    >
                        <FaShoppingCart />

                        Cart

                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-3 bg-accent text-xs px-2 py-0.5 rounded-full text-white">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                    <Link to="/favorites" className="relative">
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
                        <>
                            <Link
                                to="/login"
                                className="hover:text-accent transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="bg-accent px-4 py-2 rounded-lg hover:opacity-90 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;