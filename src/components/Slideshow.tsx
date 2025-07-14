import { useState, useEffect } from 'react';

export default function Slideshow() {
    const images = [
        {
            id: 1,
            url: "./image/austin.jpg",
            alt: "Austin success"
        },
        {
            id: 2,
            url: "./image/cortez.jpg",
            alt: "Cortez success"
        },
        {
            id: 3,
            url: "./image/onekday.jpg",
            alt: "One thousand dollar days"
        },
        {
            id: 4,
            url: "./image/gabriel.jpg",
            alt: "Gabriel success"
        },
        {
            id: 5,
            url: "./image/elliot.jpg",
            alt: "Elliot success"
        },
        {
            id: 6,
            url: "./image/packs.jpg",
            alt: "Multiple packs landed"
        },
        {
            id: 7,
            url: "./image/Terrell.jpg",
            alt: "Terrell success"
        },
        {
            id: 8,
            url: "./image/yousef.jpg",
            alt: "Yousef success"
        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const ImageCard = ({ image }) => (
        <div className="flex-shrink-0 mx-4">
            <img
                src={image.url}
                alt={image.alt}
                className="w-60 h-96 object-contain rounded-lg shadow-lg border border-gray-300"
            />
        </div>
    );

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden">
                    {/* Desktop: Infinite scrolling animation */}
                    {!isMobile ? (
                        <div 
                            className="flex animate-scroll"
                            style={{
                                width: `${images.length * 416}px`,
                                animation: 'scroll 160s linear infinite'
                            }}
                        >
                            {images.concat(images).map((image, index) => (
                                <ImageCard key={`${image.id}-${index}`} image={image} />
                            ))}
                        </div>
                    ) : (
                        /* Mobile: Scroll snap functionality */
                        <div className="overflow-x-auto flex snap-x snap-mandatory scroll-smooth scrollbar-hide">
                            {images.map((image) => (
                                <div key={image.id} className="min-w-full flex-shrink-0 snap-center flex items-center justify-center">
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full max-w-[280px] h-80 object-contain rounded-lg shadow-lg border border-gray-300"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile: Simplified indicator (optional) */}
                {isMobile && (
                    <div className="flex justify-center mt-4">
                        <span className="text-sm text-gray-600">
                            Swipe or scroll horizontally to navigate
                        </span>
                    </div>
                )}
            </div>

            <style>
                {`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${images.length * 416}px);
                    }
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                `}
            </style>
        </div>
    );
}