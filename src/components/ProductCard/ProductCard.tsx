import React from 'react';
import { Product } from '@/types/Products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/features/cart/cartSlice';
import { toggleFavorite } from '@/features/favorites/favoritesSlice';
import { RootState, AppDispatch } from '@/app/store/store';
import { showToast } from '@/features/ui/uiSlice';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { removeProduct } from '@/features/products/productsSlice';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const isFavorite = favorites.includes(product.id);
    const user = useSelector((state: RootState) => state.auth.user);

    const handleAddToCart = () => {
        if (!user) return navigate('/login', { state: { from: `/products/${product.id}` } });
        dispatch(addToCart({ ...product, quantity: 1 }));
        dispatch(showToast('Added to cart!'));
    };

    const handleToggleFavorite = () => {
        if (!user) return navigate('/login', { state: { from: `/products/${product.id}` } });
        dispatch(toggleFavorite(product.id));
    };

    const goToDetails = () => {
        navigate(`/products/${product.id}`);
    };

    const handleDelete = () => {
    dispatch(removeProduct(product.id));
};

    return (
        <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 relative">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-3 flex flex-col gap-2">
                <h2 className="font-bold text-md">{product.title}</h2>
                <p className="text-green-400 font-semibold text-sm">${product.price}</p>
                <div className="flex justify-between items-center mt-2 gap-2">
                    <button
                        onClick={handleAddToCart}
                        className="bg-accent hover:bg-indigo-600 px-3 py-1.5 text-sm rounded transition-colors"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={goToDetails}
                        className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 text-sm rounded transition-colors"
                    >
                        View Details
                    </button>
                    <div className="flex gap-1">
                        <button onClick={handleToggleFavorite} className="text-red-500 text-lg p-1">
                            <FaHeart fill={isFavorite ? 'red' : 'white'} />
                        </button>
                        <button className="text-gray-200 hover:text-danger text-lg p-1" onClick={handleDelete}>
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;