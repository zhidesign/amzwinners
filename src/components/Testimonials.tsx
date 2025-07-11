export default function Testimonials() {
    return (
        <div className="flex flex-col items-center justify-center mt-28 ">
            <div className='mb-16'>
                <h1 className="lg:text-4xl text-[1.3rem]  text-center font-bold">What the <span className="text-[rgb(255,163,0)] underline">Inner Circle</span> is saying</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem]">

            <div className="bg-gradient-to-r from-[rgb(255,203,47)] to-[rgb(255,149,0)] p-4 rounded-lg shadow-md">
                    <iframe 
                      className="w-full h-[35rem]"
                      src="https://www.youtube.com/embed/ayjZIIoXTfM" 
                      title="How to Start and Scale your Amazon Business"  
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    />
            </div>

            <div className="bg-gradient-to-l from-[rgb(255,203,47)] to-[rgb(255,149,0)] p-4 rounded-lg shadow-md">
                    <iframe 
                      className="w-full h-[35rem]"
                      src="https://www.youtube.com/embed/NuCFQE9M7lw" 
                      title="How to Start and Scale your Amazon Business"  
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    />
            </div>

            <div className="bg-gradient-to-l from-[rgb(255,203,47)] to-[rgb(255,149,0)] p-4 rounded-lg shadow-md">
                    <iframe 
                      className="w-full h-[35rem]"
                      src="https://www.youtube.com/embed/EF3YgelYJSk" 
                      title="How to Start and Scale your Amazon Business"  
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    />
            </div>

            <div className="bg-gradient-to-l from-[rgb(255,203,47)] to-[rgb(255,149,0)] p-4 rounded-lg shadow-md">
                    <iframe 
                      className="w-full h-[35rem]"
                      src="https://www.youtube.com/embed/wrmi_Fi4ENw" 
                      title="How to Start and Scale your Amazon Business"  
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    />
            </div>

            </div>

        </div>
    )
}