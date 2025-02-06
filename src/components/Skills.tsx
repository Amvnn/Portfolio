import React from 'react';
import { Code, Figma, Palette, Brain, Users, Laptop } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 'Expert', icon: Code },
      { name: 'CSS3/Sass', level: 'Expert', icon: Code },
      { name: 'JavaScript', level: 'Expert', icon: Code },
      { name: 'React.js', level: 'Expert', icon: Code },
      { name: 'TypeScript', level: 'Advanced', icon: Code },
      { name: 'Next.js', level: 'Advanced', icon: Code },
    ]
  },
  {
    title: 'Design Tools',
    skills: [
      { name: 'Figma', level: 'Advanced', icon: Figma },
      { name: 'Adobe XD', level: 'Intermediate', icon: Palette },
      { name: 'Photoshop', level: 'Intermediate', icon: Palette },
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 'Expert', icon: Brain },
      { name: 'Team Leadership', level: 'Advanced', icon: Users },
      { name: 'Communication', level: 'Expert', icon: Users },
      { name: 'Project Management', level: 'Advanced', icon: Laptop },
    ]
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <skill.icon className="text-white mb-3 w-8 h-8" />
                    <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-2xl">
                      <span className="text-white font-medium">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}