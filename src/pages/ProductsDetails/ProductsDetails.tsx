import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { addToCart } from '@/features/cart/cartSlice';
import { showToast } from '@/features/ui/uiSlice';
import Layout from '@/components/Layout/Layout';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector((state: RootState) =>
        state.products.products.find((p) => p.id === id)
    );

    if (!product) return <Layout><div className="text-center py-20">Product not found.</div></Layout>;

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: 1 }));
        dispatch(showToast('Added to cart!'));
    };

    return (
        <Layout>
            <div className="container mx-auto py-8 flex flex-col md:flex-row items-center gap-8">

                {/* الصورة */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-w-sm h-100 object-contain rounded-lg"
                    />
                </div>

                {/* التفاصيل */}
                <div className="md:w-1/2 flex flex-col justify-center items-start gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        {product.title}
                    </h1>

                    <p className="text-lg font-semibold text-green-400">
                        ${product.price}
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        {product.description}
                    </p>

                    <button
                        onClick={handleAddToCart}
                        className="bg-accent hover:bg-indigo-600 transition-colors px-6 py-2 rounded-lg mt-2"
                    >
                        Add to Cart
                    </button>
                </div>

            </div>
        </Layout>
    );
};

export default ProductDetails;