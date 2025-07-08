
import React, { useState, useEffect } from 'react'
import CTAButton from './CTAButton'
import Header from './Header'
import Headline from './Headline'
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
        <div className="mb-12">
          <Card className="bg-black border-red-500 border-2 p-4 shadow-2xl">
            <div className="relative aspect-video bg-gray-900 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-gray-800 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-lg"></div>
              <div className="text-center z-10">
                <div className="bg-red-600 rounded-full p-6 mb-4 group-hover:bg-red-500 transition-colors mx-auto w-fit">
                  <Play size={48} className="text-white fill-white" />
                </div>
                <p className="text-2xl font-bold mb-2">Click To Watch The Presentation</p>
                <p className="text-gray-400">Duration: 37 minutes • Best viewed with headphones</p>
              </div>
              
              {/* Fake video overlay */}
              <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded text-sm font-bold">
                🔴 LIVE
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-sm">
                HD Quality
              </div>
            </div>
          </Card>
          <CTAButton />
        </div>

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
