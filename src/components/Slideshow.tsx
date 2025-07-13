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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle touch events for swiping
    const handleTouchStart = (e) => {
        setTouchEnd(null); // Reset touchEnd
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && currentIndex < images.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
        if (isRightSwipe && currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const ImageCard = ({ image }) => (
        <div className="flex-shrink-0 mx-4">
            <img
                src={image.url}
                alt={image.alt}
                className="w-60 h-96 object-contain rounded-lg shadow-lg border border-gray-300"
            />
        </div>
    );

    const MobileImageCard = ({ image }) => (
        <div className="w-full flex-shrink-0 px-4">
            <img
                src={image.url}
                alt={image.alt}
                className="w-full max-w-[80%] h-96 object-contain rounded-lg shadow-lg border border-gray-300 mx-auto"
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
                        /* Mobile: Static with swipe functionality */
                        <div 
                            className="flex transition-transform duration-300 ease-out select-none"
                            style={{
                                transform: `translateX(-${currentIndex * 100}vw)`
                            }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {images.map((image) => (
                                <MobileImageCard key={image.id} image={image} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile: Pagination dots */}
                {isMobile && (
                    <div className="flex justify-center mt-4 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
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
                `}
            </style>
        </div>
    );
}