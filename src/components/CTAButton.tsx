import { Button } from '@/components/ui/button';

export default function CTAButton() {
    return (
        <div className='my-[4rem] flex justify-center'>
            <a href="https://calendly.com/amazonmike2006/30min" target="_blank">
                <Button variant="gradient" size='custom'>
                <span className="relative z-10 ">🚀 Book a Free Call</span>
                {/* Hover background gradient */}
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-green-400 to-green-600 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"></span>
                </Button>
                </a>
        </div>
    )
}