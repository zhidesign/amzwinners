import CTAButton from './CTAButton'
import { useState } from 'react'
import Overlay from './Overlay'
import FormYoutube from './FormYoutube'
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

    const handleClose = () => {
      setHasAccess(false);
      setShowSignup(false);
    }

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
                </div>

                {showSignup &&  <FormYoutube handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleClose={handleClose} name={formData.name} email={formData.email} phone={formData.phone} />}
                
                <CTAButton />
                </>
                

    )
}