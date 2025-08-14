import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import {ChartNoAxesCombined, ChartNoAxesColumnIncreasing, Receipt } from 'lucide-react';

export default function FAQ() {

    const ImageCard = ({url}) => (
      <img
        src={url}
        className="w-60 h-72 object-contain rounded-lg shadow-lg border border-gray"
      />
    )

    return (
         <>
         <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
            <div>
                <div>
                    <h2 className="text-2xl font-bold text-center mb-8 leading-[2.2rem]">
                    Why Selling on 
                    <span className="relative inline-block z-10 mx-2 underline text-yellow-400 sm:text-white sm:no-underline ">
                    Amazon is the Best Business
                    <img
                        src="/underline.svg"
                        className="absolute -bottom-2 left-0 w-full z-[-1] h-2 hidden sm:block"
                        alt="underline"
                    />
                    </span> 
                    for Beginners
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto text-md mb-[2rem] md:mb-[0rem]">
                <div className="space-y-6">
                <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between w-full text-left font-medium">
                    <div className="flex items-center gap-3 mx-auto text-center">
                    <ChartNoAxesCombined className="text-yellow-400" />
                    <span>Reason #1: Instant Access to millions of buyers</span>
                    </div>
                </AccordionTrigger>
                    <AccordionContent className='text-[0.8rem] text-gray-300/90'>
                    Amazon already has 310+ million active customers who trust the platform with their credit cards on file. 
                    You’re not building traffic or trying to convince people to buy — your products show up where people are already searching. 
                    No need for complicated marketing funnels or paid ads to get started.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>
                    <div className='flex gap-3 mx-auto'>
                        <ChartNoAxesColumnIncreasing className="text-yellow-400"/>
                        <span>Reason #2: Low Risks, High Rewards</span>
                    </div>
                    </AccordionTrigger>
                    <AccordionContent className='text-[0.8rem] text-gray-300/90'>
                    With just $1–5K in startup capital, you can launch a business that earns 30–40% profit margins. 
                    Compare that to traditional businesses requiring $50K+ or dropshipping’s razor-thin 5–10% margins. 
                    Plus, everyday products continue selling through economic downturns.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>
                    <div className='flex gap-3 mx-auto'>
                        <Receipt className="text-yellow-400"/>
                        <span>Reason #3: Infinite Scalability</span>
                    </div>
                    </AccordionTrigger>
                    <AccordionContent className='text-[0.8rem] text-gray-300/90'>
                    Once your first product takes off, you can expand infinitely — add more products, enter new niches, or even sell globally. 
                    Amazon handles the heavy lifting: warehousing, fulfillment, customer service, and payments. 
                    That means you can scale to $10K/month and beyond without hiring a team or burning out.
                    </AccordionContent>
                </AccordionItem>
                </div>
                </Accordion>
            </div>

        <div className="inline-grid grid-cols-2 gap-3">
            <ImageCard url="./image/photo1.jpg"/>
            <ImageCard url="./image/photo2.jpg"/>
            <ImageCard url="./image/photo3.jpg"/>
            <ImageCard url="./image/photo4.jpg"/>
        </div>

        </div>
        </>
    )
}