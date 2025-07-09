
import React, { useState, useEffect } from 'react'
import CTAButton from './CTAButton'
import Header from './Header'
import Headline from './Headline'
import Videosection from './Videosection'
import Slideshow from './Slideshow'
import FAQ from './FAQ'
import Testimonials from './Testimonials'
import Closing from './Closing'
import Footer from './Footer'
import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';


const VSLPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  const [viewerCount, setViewerCount] = useState(847);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // // Viewer count effect
  // useEffect(() => {
  //   const viewerTimer = setInterval(() => {
  //     setViewerCount(prev => prev + Math.floor(Math.random() * 3) - 1);
  //   }, 5000);

  //   return () => clearInterval(viewerTimer);
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b bg-black via-black to-gray-900 text-white">

      {/* Header with urgency bar */}
      <Header />

      {/* OVERACHING DIV */}
      <div className="container mt-[2rem] mx-auto px-4 py-8 max-w-6xl">
        {/* Main Headline */}
        <Headline />

        {/* Video Section */}
        <Videosection />

        {/* Social Proof Section */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-center mb-16">
            Real People with <span className="text-foreground">Real Results</span>
          </h2>
          <Slideshow />
        </div>
        
        {/* Testimonials Section*/}
        <Testimonials />

        {/* Accordion Section*/}
        <div className="mt-48">
          <FAQ/>
        </div>

        <Closing />

        {/* Footer Disclaimer */}
        <Footer/>
        
      </div>
    </div>
  );
};

export default VSLPage;
