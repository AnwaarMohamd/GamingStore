import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { clearCart } from '@/features/cart/cartSlice';
import { showToast } from '@/features/ui/uiSlice';
import Layout from '@/components/Layout/Layout';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        dispatch(clearCart());
        dispatch(showToast('Checkout successful!'));
        navigate('/');
    };

    if (items.length === 0)
        return (
            <Layout>
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold">No items to checkout</h2>
                </div>
            </Layout>
        );

    return (
        <Layout>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6 bg-purple-400 bg-clip-text text-transparent">Checkout</h1>
                <div className="bg-secondary p-6 rounded-lg flex flex-col gap-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex justify-between">
                            <span>{item.title} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="flex justify-between font-bold mt-4">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
                <button
                    onClick={handleCheckout}
                    className="mt-6 bg-accent hover:bg-indigo-600 px-6 py-3 rounded-lg transition-colors"
                >
                    Confirm Payment
                </button>
            </div>
        </Layout>
    );
};

export default Checkout;