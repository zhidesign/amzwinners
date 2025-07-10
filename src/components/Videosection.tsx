import CTAButton from './CTAButton'
import { useState } from 'react'
import Overlay from './Overlay'
export default function Videosection() {

    const [showSignup, setShowSignup] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setHasAccess(true);
        setShowSignup(false);
    };

    const handleOverlayClick = () => {
        setShowSignup(true);
    };

    return (
                <>
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group cursor-pointer hover:bg-gray-800 transition-colors">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/NrV-84fa50E" 
                      title="How to Start and Scale your Amazon Business"  
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    />
                    {!hasAccess && <Overlay handleOverlayClick={handleOverlayClick} /> }
                  </div>
                  <CTAButton />
                </div>

                {showSignup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Sign Up to Watch</h2>
                        </div>

                        <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                            </label>
                            <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                            </label>
                            <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                            />
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <button
                            type="button"
                            onClick={handleSubmit}
                            className="flex-1 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-700"
                            >
                            Sign Up & Watch
                            </button>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                )}



                </>
                

    )
}