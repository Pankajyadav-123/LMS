import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'; // Using lucide-react for icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 mt-5">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Lume</h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Empowering learners worldwide with accessible, high-quality education. Join our community and start your journey today.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="hover:text-blue-500 cursor-pointer" />
              <Twitter size={20} className="hover:text-blue-400 cursor-pointer" />
              <Instagram size={20} className="hover:text-pink-500 cursor-pointer" />
              <Linkedin size={20} className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links - Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Top Categories</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="hover:underline cursor-pointer">Web Development</li>
              <li className="hover:underline cursor-pointer">Data Science</li>
              <li className="hover:underline cursor-pointer">Business & Marketing</li>
              <li className="hover:underline cursor-pointer">UI/UX Design</li>
            </ul>
          </div>

          {/* Quick Links - Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Become an Instructor</li>
              <li className="hover:underline cursor-pointer">Student Success</li>
              <li className="hover:underline cursor-pointer">Terms & Privacy</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Subscribe to get the latest course updates.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-4 py-2 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} EduFlow LMS. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-blue-500 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-blue-500 cursor-pointer">Terms of Service</span>
            <span className="hover:text-blue-500 cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;