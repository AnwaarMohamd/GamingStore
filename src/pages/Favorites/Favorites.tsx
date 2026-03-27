import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import Layout from '@/components/Layout/Layout';
import ProductCard from '@/components/ProductCard/ProductCard';

const Favorites: React.FC = () => {
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const products = useSelector((state: RootState) => state.products.products);

    const favoriteProducts = products.filter(p =>
        favorites.includes(p.id)
    );

    return (
        <Layout>
            <section className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6">
                    My Favorites
                </h1>

                {favoriteProducts.length === 0 ? (
                    <p className="text-gray-400">No favorites yet</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {favoriteProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Favorites;