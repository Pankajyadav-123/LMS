import React, { useState, useEffect } from 'react';
import {  CheckCircle } from 'lucide-react';

const AboutPage = () => {
  

  const stats = [
    { label: 'Active Students', value: '50K+' },
    { label: 'Total Courses', value: '1,200+' },
    { label: 'Expert Instructors', value: '300+' },
    { label: 'Success Stories', value: '10K+' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
     

      {/* Hero Section */}
      <section className="py-20 bg-blue-50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Empowering Minds <span className="text-blue-600 dark:text-blue-400">Everywhere.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We believe that quality education is a fundamental right. Our platform 
            bridges the gap between world-class experts and eager learners.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Founded in 2024, our mission is to create a seamless, interactive, 
              and affordable learning environment. We don't just host videos; 
              we build communities where knowledge thrives.
            </p>
            <ul className="space-y-3">
              {['Interactive Quizzes', 'Certified Instructors', 'Lifetime Access'].map((item) => (
                <li key={item} className="flex items-center text-slate-700 dark:text-slate-300">
                  <CheckCircle size={18} className="text-green-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gray-200 dark:bg-slate-700 h-64 rounded-lg flex items-center justify-center border border-gray-100 dark:border-slate-600">
              <span className="text-gray-400 dark:text-slate-500">Feature Image / Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Static Background) */}
      <section className="bg-blue-600 dark:bg-blue-700 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-blue-100 opacity-80 uppercase text-xs tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Cards */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard title="Inclusion" desc="Learning opportunities for everyone, regardless of location." />
            <ValueCard title="Innovation" desc="Using AI and modern pedagogy to make learning stickier." />
            <ValueCard title="Integrity" desc="Verified experts ensuring high-quality, honest content." />
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ title, desc }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400">{desc}</p>
  </div>
);

export default AboutPage;