import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-t from-gray-900 to-secondary text-white mt-16">
            <section className="container mx-auto py-16 grid md:grid-cols-3 gap-10 px-4 md:px-0">
                {/* About */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 border-b-2 border-accent inline-block pb-1">About GameHub</h2>
                    <p className="mt-2 text-gray-300 leading-relaxed">
                        GameHub <FaGamepad className=' inline-block' size={25}/> is your ultimate gaming gear destination. We bring the latest and greatest
                        gaming products to enhance your gaming experience.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 border-b-2 border-accent inline-block pb-1">Quick Links</h2>
                    <ul className="space-y-3 mt-2">
                        <li>
                            <Link to="/products" className="hover:text-accent transition-colors duration-200">Products</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-accent transition-colors duration-200">About Us</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-accent transition-colors duration-200">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 border-b-2 border-accent inline-block pb-1">Contact Us</h2>
                    <p className="text-gray-300 mt-2">Email: <a href="mailto:support@gamehub.com" className="hover:text-accent transition-colors duration-200">support@gamehub.com</a></p>
                    <p className="text-gray-300 mt-1">Phone: <a href="tel:+20123456789" className="hover:text-accent transition-colors duration-200">+20 123 456 789</a></p>
                    <div className="flex gap-5 mt-5">
                        <a href="#" className="hover:text-accent transition-colors duration-200">Facebook</a>
                        <a href="#" className="hover:text-accent transition-colors duration-200">Twitter</a>
                        <a href="#" className="hover:text-accent transition-colors duration-200">Instagram</a>
                    </div>
                </div>
            </section>

            {/* Bottom */}
            <div className="bg-gray-900 py-5 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} GameHub. All rights reserved.
            </div>
        </footer>
    );
};