import React from 'react';
import { Code2, Palette, Users } from 'lucide-react';

const competencies = [
  {
    icon: Code2,
    title: 'Technical Excellence',
    description: 'Proficient in modern web technologies and best practices'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Effective communication and collaborative problem-solving'
  },
  {
    icon: Palette,
    title: 'Design Thinking',
    description: 'Creating intuitive and visually appealing user experiences'
  }
];

export default function About() {
  return (
    <div className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Bio Section */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20"
          />
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-200 leading-relaxed">
            Driven by a passion for backend development and problem-solving, I am a Computer Science Engineering student at
 Chandigarh University with hands-on experience in C++ and the MERN stack. My practical experience includes leading the
 development of a campus-focused online printing platform, where I utilized Node.js, Express.js, and MongoDB to build a robust
 solution. I am passionate about creating efficient and impactful solutions.
 I aim to contribute to challenging projects where I can continue to grow as a developer and make meaningful contributions to
 innovative backend architectures.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid gap-6">
          {competencies.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all"
            >
              <item.icon className="text-white mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}