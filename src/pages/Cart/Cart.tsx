import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/store';
import { removeFromCart } from '@/features/cart/cartSlice';
import { formatPrice } from '@/utils/formatPrice';
import Navbar from '@/components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <><Navbar />

            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6 text-purple-400">
                    <FaShoppingCart className='inline-block' /> Cart
                </h1>
                {cartItems.length === 0 && <p>Your cart is empty</p>}

                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-2 border-b">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />

                        <div className="flex-1 ml-4">
                            <p className="font-bold">{item.title}</p>
                            <p>{formatPrice(item.price)}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>

                        <button
                            className="text-red-500"
                            onClick={() => dispatch(removeFromCart(item.id))}
                        >
                            Remove
                        </button>
                    </div>
                ))}

                {cartItems.length > 0 && (
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => navigate('/checkout')}
                            className="bg-accent px-6 py-2 rounded-lg"
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;