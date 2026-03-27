import React, { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        title: "HyperX Cloud II",
        subtitle: "Immersive Gaming Headset",
        image:
            "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1200",
        offer: "Up to 30% OFF",
    },
    {
        id: 2,
        title: "Mechanical RGB Keyboard",
        subtitle: "Pro Gaming Performance",
        image:
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200",
        offer: "New Arrival",
    },
    {
        id: 3,
        title: "Ultra Wide Gaming Monitor",
        subtitle: "240Hz Smooth Experience",
        image:
            "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200",
        offer: "Limited Offer",
    },
];

const NewArrivals = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const slide = slides[index];

    return (
        <div className="relative rounded-2xl overflow-hidden mb-10 h-[320px]">

            {/* background image */}
            <img
                src={slide.image}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

            {/* content */}
            <div className="relative z-10 p-10 text-white max-w-lg">

                <span className="bg-red-500 px-4 py-1 rounded-full text-sm">
                    {slide.offer}
                </span>

                <h2 className="text-4xl font-bold mt-4">
                    {slide.title}
                </h2>

                <p className="text-gray-300 mt-2">
                    {slide.subtitle}
                </p>

                <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold">
                    Discover
                </button>

            </div>

            {/* dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewArrivals;