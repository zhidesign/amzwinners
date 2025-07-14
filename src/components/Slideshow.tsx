import { useState, useEffect, useRef } from 'react';

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

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const scrollContainerRef = useRef(null);

    // Detect screen size and device type
    useEffect(() => {
        const detectScreenSize = () => {
            const smallScreen = window.innerWidth < 640; // sm breakpoint
            const mobileDevice = 'ontouchstart' in window && window.innerWidth < 768;
            
            setIsSmallScreen(smallScreen);
            setIsMobile(mobileDevice);
        };
        
        detectScreenSize();
        window.addEventListener('resize', detectScreenSize);
        
        return () => window.removeEventListener('resize', detectScreenSize);
    }, []);

    // Auto-scroll for button navigation (small screens only)
    useEffect(() => {
        if (isSmallScreen && !isMobile && isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
            
            return () => clearInterval(interval);
        }
    }, [isSmallScreen, isMobile, isAutoPlaying, images.length]);

    // Handle manual navigation for desktop
    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
    };

    const nextSlide = () => {
        goToSlide((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        goToSlide((currentIndex - 1 + images.length) % images.length);
    };

    // Scroll to specific image on mobile
    const scrollToImage = (index) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = index * container.clientWidth;
            container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
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

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden">
                    {/* Full Desktop: Infinite scroll animation */}
                    {!isSmallScreen && !isMobile ? (
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
                    ) : !isMobile ? (
                        /* Small Desktop: Controlled slideshow with buttons */
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div 
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                                        width: `${images.length * 100}%`
                                    }}
                                >
                                    {images.map((image, index) => (
                                        <div key={image.id} className="flex-shrink-0 flex justify-center" style={{ width: `${100 / images.length}%` }}>
                                            <img
                                                src={image.url}
                                                alt={image.alt}
                                                className="w-60 h-96 object-contain rounded-lg shadow-lg border border-gray-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Navigation buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                                aria-label="Previous image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                                aria-label="Next image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            {/* Dots indicator */}
                            <div className="flex justify-center mt-4 space-x-2 py-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                            index === currentIndex
                                                ? 'bg-orange-500 scale-125'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Mobile: Scroll snap functionality */
                        <div 
                            ref={scrollContainerRef}
                            className="overflow-x-auto flex snap-x snap-mandatory scroll-smooth scrollbar-hide"
                        >
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

                {/* Mobile: Navigation hint */}
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