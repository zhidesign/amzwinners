export default function Testimonials() {
    return (
        <div className="flex flex-col items-center justify-center mt-28 ">
            <div className='mb-16'>
                <h1 className="text-5xl text-center font-bold">See what the <span className="text-[rgb(255,163,0)] underline">Inner Circle</span> is saying</h1>
            </div>

            <div className="grid grid-cols-2 gap-20">

            <div className="bg-gradient-to-r from-[rgb(255,203,47)] to-[rgb(255,149,0)] p-4 rounded-lg shadow-md">
                <video 
                src="./image/first_testimonial.mov" 
                controls 
                className="max-h-[45rem] rounded-md"
                />
            </div>

            <div className="bg-gradient-to-l from-[rgb(255,203,47)] to-[rgb(255,149,0)] p-4 rounded-lg shadow-md">
                <video 
                src="./image/second_testimonial.mov" 
                controls 
                className=" max-h-[45rem] rounded-md"
                />
            </div>

            </div>

        </div>
    )
}