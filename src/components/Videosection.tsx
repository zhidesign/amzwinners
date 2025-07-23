import CTAButton from './CTAButton'
import { useState } from 'react'
import Overlay from './Overlay'
import FormYoutube from './FormYoutube'
import validator from 'validator'

export default function Videosection() {

    const [showSignup, setShowSignup] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const isValidEmail = validator.isEmail(formData.email);
      const isValidPhone = validator.isMobilePhone(formData.phone);

      const fakePatterns = [
      /^1234567890$/, // 1234567890
      /^(\d)\1{9}$/, // Same digit repeated (1111111111)
      /^123/, // Starts with 123
      /^555/, // Starts with 555 (often fake in movies)
      /^000/, // Starts with 000
      ];

      const isFakePhone = fakePatterns.some(pattern => pattern.test(formData.phone));

      if (!isValidEmail || !isValidPhone || isFakePhone) {
        setError("Input a valid email and/or phone #");
        return;
      }
      setError("");
      setHasAccess(true);
      setShowSignup(false);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);

        const response = await fetch("https://formspree.io/f/mvgrelbe", {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
          }
        }); 
      }
      catch (error) {
        console.log("Error with FormSpree", error);
      }
      
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
                      src="https://www.youtube.com/embed/KCOieD4cFpE?si=ZdNIWO4X1z0YcKXz" 
                      title="How to Start and Scale your Amazon Business"  
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    />
                    {!hasAccess && <Overlay handleOverlayClick={handleOverlayClick} /> }
                  </div>
                </div>

                {showSignup &&  <FormYoutube handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleClose={handleClose} error={error} name={formData.name} email={formData.email} phone={formData.phone} />}
                
                <CTAButton />
                </>
                

    )
}