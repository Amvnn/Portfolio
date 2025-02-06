import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 animate-gradient" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      {/* Glass card */}
      <div className="relative px-6 py-12 md:px-12 backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 max-w-3xl mx-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100 mb-6">
          Hi, I'm Aman
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Entrepreneur | Backend Developer | Ethical Hacker
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold backdrop-blur-sm transition-all">
            Explore My Work
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 font-semibold transition-all">
            Download Resume
          </button>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {[
            { Icon: Github, href: '#' },
            { Icon: Linkedin, href: '#' },
            { Icon: Twitter, href: '#' },
            { Icon: Mail, href: '#' }
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </div>
    </div>
  );
}