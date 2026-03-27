import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={toggleDropdown} // toggle on click only
                className="hover:text-accent transition-all duration-200 flex items-center gap-1"
            >
                Categories ▼
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-secondary rounded shadow-lg overflow-hidden z-50">
                    <Link
                        to="/products?category=Desk"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Desks
                    </Link>
                    <Link
                        to="/products?category=Chairs"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Chairs
                    </Link>
                    <Link
                        to="/products?category=Keyboards"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Keyboards
                    </Link>
                    <Link
                        to="/products?category=Mouses"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Mouses
                    </Link>
                    <Link
                        to="/products?category=Headsets"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Headsets
                    </Link>
                    <Link
                        to="/products?category=Monitors"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Monitors
                    </Link>
                    <Link
                        to="/products?category=Controllers"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Controllers
                    </Link>
                    <Link
                        to="/products?category=Mouse Pads"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Mouse Pads  
                    </Link>
                    <Link
                        to="/products?category=RGBAccessories"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        RGB Accessories
                    </Link>
                    
                    <Link
                        to="/products?category=Setup"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Setups
                    </Link>
                    
                    <Link
                        to="/products?category=Console"
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                        Consoles
                    </Link>

                </div>
            )}
        </div>
    );
};

export default CategoriesDropdown;