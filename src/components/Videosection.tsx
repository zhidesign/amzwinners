import CTAButton from './CTAButton'

export default function Videosection() {
    return (
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group cursor-pointer hover:bg-gray-800 transition-colors">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/NrV-84fa50E" 
                      title="How to Start and Scale your Amazon Business"  
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    />
                  </div>
                  <CTAButton />
                </div>
    )
}