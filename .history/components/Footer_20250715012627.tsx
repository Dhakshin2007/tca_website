import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Icon from './Icon';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-amber-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/">
                <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-gray-400 text-sm">Mana Telugu – Mana Samskruthi – Mana IIT Ropar</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/tca_iitropar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400"><Icon name="instagram" /></a>
              <a href="#" onClick={(e) => {e.preventDefault(); alert("Our YouTube channel is coming soon. Stay tuned!");}} className="text-gray-400 hover:text-amber-400 cursor-pointer"><Icon name="youtube" /></a>
              <a href="#" onClick={(e) => {e.preventDefault(); alert("Our WhatsApp community is coming soon. Stay tuned!");}} className="text-gray-400 hover:text-amber-400 cursor-pointer"><Icon name="whatsapp" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start text-gray-400">
                <Icon name="mail" className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:tcaiitropar@gmail.com" className="hover:text-amber-400">tcaiitropar@gmail.com</a>
              </li>
              <li className="flex items-start text-gray-400">
                <Icon name="map" className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>IIT Ropar, Rupnagar, Punjab, India - 140001</span>
                <span className="ml-2 text-xs text-gray-500">(Near Chandigarh)</span>
              </li>
              <li className="flex items-start text-gray-400">
                <Icon name="map" className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Website Established on 13th July 2025 at 17:00Pm</span>
              </li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold text-gray-200">Join Us</h3>
            <p className="mt-4 text-sm text-gray-400">Subscribe to our newsletter for the latest updates on events and activities.</p>
             <form className="mt-4 flex">
                <input type="email" placeholder="Your Email" className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm" />
                <button type="submit" className="bg-amber-500 text-gray-900 px-4 py-2 rounded-r-md font-semibold hover:bg-amber-600 transition-colors">Go</button>
             </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Telugu Cultural Association, IIT Ropar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;