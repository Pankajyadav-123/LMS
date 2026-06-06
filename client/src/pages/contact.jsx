import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Sun, Moon, MessageSquare } from 'lucide-react';

const ContactPage = () => {
 
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'support', message: '' });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent! Our team will get back to you shortly.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
     

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have questions about a course or need technical assistance? Our team of educators and support staff are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            <ContactInfoCard 
              icon={<Mail className="text-blue-500" />} 
              title="Email Us" 
              detail="support@eduflow.com" 
              sub="Response within 24 hours"
            />
            <ContactInfoCard 
              icon={<Phone className="text-green-500" />} 
              title="Call Us" 
              detail="+1 (555) 000-1234" 
              sub="Mon-Fri, 9am - 6pm EST"
            />
            <ContactInfoCard 
              icon={<MapPin className="text-red-500" />} 
              title="Visit Us" 
              detail="123 Learning Lane" 
              sub="Silicon Valley, CA 94025"
            />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" name="name" required onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" name="email" required onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Inquiry Type</label>
                <select 
                  name="subject" onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                  <option value="support">Student Support</option>
                  <option value="instructor">Become an Instructor</option>
                  <option value="billing">Billing/Refunds</option>
                  <option value="enterprise">Enterprise Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  name="message" rows="5" required onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section Shortcut */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            Looking for immediate answers? 
            <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold ml-2 hover:underline">Check our Help Center</a>
          </p>
        </div>
      </main>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, detail, sub }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1">
    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">{icon}</div>
    <div>
      <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-700 dark:text-slate-300 font-medium">{detail}</p>
      <p className="text-sm text-slate-500 dark:text-slate-500">{sub}</p>
    </div>
  </div>
);

export default ContactPage;