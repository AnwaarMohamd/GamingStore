import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/features/products/productsSlice';
import { RootState, AppDispatch } from '@/app/store/store';
import ProductCard from '@/components/ProductCard/ProductCard';
import Layout from '@/components/Layout/Layout';
import NewArrivals from '@/components/NewArrivals/NewArrivals';
import { Footer } from '@/components/Footer/Footer';

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, isLoading } = useSelector((state: RootState) => state.products);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <Layout>
            <section className="container mx-auto py-8">
                <NewArrivals />

                <h1 className="text-3xl font-bold mb-6 bg-purple-400 bg-clip-text text-transparent">Featured Gaming Products</h1>

                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <div key={idx} className="h-80 bg-gray-800 animate-pulse rounded-lg" />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {currentProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-6">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`px-4 py-2 rounded-md ${currentPage === idx + 1
                                                ? 'bg-accent text-white'
                                                : 'bg-gray-700 text-white'
                                            }`}
                                        onClick={() => setCurrentPage(idx + 1)}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </section>
            <Footer />
        </Layout>
    );
};

export default Home;