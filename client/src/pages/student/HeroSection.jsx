import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Users, Award, ArrowRight } from "lucide-react";
import hero from "@/assets/hero1.png";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Professional LMS hero image
  const heroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop&q=80";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/course/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/30" />
      
      {/* Decorative Animated Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] lg:min-h-auto py-8 lg:py-12 gap-6 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-3 lg:space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 border border-blue-200 dark:border-blue-700/50 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-900 dark:text-blue-100">#1 Learning Platform</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
              We Help You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient">
                Build
              </span>
              <br />
              Your Dream Career
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Expert-led courses. Learn at your own pace, gain real-world skills, and achieve your goals.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0 group">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10 text-sm border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/40 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                />
              </div>
              <Button type="submit" size="sm" className="h-10 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg group">
                Search
                <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Explore Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 pt-2">
              <Button 
                // navigate to the searchable catalogue rather than the simple list
                onClick={() => navigate('/course/search')}
                size="sm"
                className="h-10 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg text-sm"
              >
                Explore Courses
              </Button>
              <Button 
                onClick={() => navigate('/my-learning')} 
                size="sm"
                className="h-10 px-6 bg-white hover:bg-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 text-blue-600 dark:text-white border-2 border-blue-600 dark:border-blue-500 font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg text-sm"
              >
                My Learning
              </Button>
            </div>

            {/* Stats Grid - Prominent Display */}
            <div className="grid grid-cols-3 gap-2 pt-3 lg:pt-4">
              <div className="flex flex-col items-center p-2 rounded-lg backdrop-blur-sm bg-white/60 dark:bg-gray-700/60 border border-blue-200 dark:border-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-blue-100 dark:bg-blue-600 rounded-lg mb-1 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-blue-700 dark:text-white" />
                </div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">500+</p>
                <p className="text-xs text-gray-600 dark:text-gray-200">Courses</p>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg backdrop-blur-sm bg-white/60 dark:bg-gray-700/60 border border-purple-200 dark:border-purple-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-purple-100 dark:bg-purple-600 rounded-lg mb-1 flex-shrink-0">
                  <Users className="w-5 h-5 text-purple-700 dark:text-white" />
                </div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">10K+</p>
                <p className="text-xs text-gray-600 dark:text-gray-200">Students</p>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg backdrop-blur-sm bg-white/60 dark:bg-gray-700/60 border border-green-200 dark:border-green-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-green-100 dark:bg-green-600 rounded-lg mb-1 flex-shrink-0">
                  <Award className="w-5 h-5 text-green-700 dark:text-white" />
                </div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">50+</p>
                <p className="text-xs text-gray-600 dark:text-gray-200">Instructors</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative group w-full max-w-sm lg:max-w-md">
              {/* Decorative elements behind image */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-3xl blur-3xl opacity-30 dark:opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-500 dark:to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30" />
              <img
                src={hero}
                alt="Online learning illustration"
                className="relative w-full object-cover rounded-2xl drop-shadow-2xl dark:drop-shadow-xl group-hover:scale-105 transition-transform duration-500 h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
