import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import  Icon  from '../components/Icon';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const recipientEmail = 'tcaiitropar@gmail.com';
    const subject = `TCA Website Contact: ${formData.name}`;
    const body = `You have a new message from the TCA IIT Ropar website contact form:
    
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };


  return (
    <div>
      <div className="relative py-24 text-center overflow-hidden">
          <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: `url(https://picsum.photos/seed/iit-ropar-contact/1920/1080)` }}
          >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
              <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-extrabold text-amber-400"
              >
                  Get In Touch
              </motion.h1>
              <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
              >
                  We'd love to hear from you. Reach out with questions, suggestions, or just to say hello!
              </motion.p>
          </div>
      </div>

      <SectionWrapper idName="contact-form">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-500 text-gray-900 font-bold py-3 rounded-md hover:bg-amber-400 transition-colors">Send Message</button>
            </form>
          </div>
          <div className="space-y-8">
             <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center"><Icon name="mail" className="w-5 h-5 mr-3 text-amber-400" /> <a href="mailto:tcaiitpr@gmail.com" className="hover:text-amber-300">tcaiitrpr@gmail.com</a></li>
                    <li className="flex items-start"><Icon name="map" className="w-5 h-5 mr-3 text-amber-400 mt-1" /> IIT Ropar, Rupnagar, Punjab, India - 140001</li>
                </ul>
                <div className="flex space-x-6 mt-6">
                    <a href="https://www.instagram.com/tca_iitropar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400"><Icon name="instagram" className="w-8 h-8"/></a>
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Our YouTube channel is coming soon. Stay tuned!'); }} className="text-gray-400 hover:text-amber-400 cursor-pointer"><Icon name="youtube" className="w-8 h-8"/></a>
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Our WhatsApp community is coming soon. Stay tuned!'); }} className="text-gray-400 hover:text-amber-400 cursor-pointer"><Icon name="whatsapp" className="w-8 h-8"/></a>
                </div>
            </div>
             <div className="rounded-lg overflow-hidden shadow-xl">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.37895493019!2d76.4732631156299!3d30.96827798156641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390554d4ffffffff%3A0x41b8b804ea57688!2sIndian%20Institute%20of%20Technology%20Ropar!5e0!3m2!1sen!2sin!4v1720542354966!5m2!1sen!2sin" 
                    width="100%" 
                    height="250" 
                    style={{ border: 'none' }}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="IIT Ropar Location"
                ></iframe>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;