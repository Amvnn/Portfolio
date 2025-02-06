import React, { useState } from 'react';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-pink-900 to-rose-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {[
                  { icon: Github, label: 'GitHub', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { icon: Twitter, label: 'Twitter', href: '#' },
                  { icon: Mail, label: 'Email', href: 'mailto:contact@example.com' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors group"
                  >
                    <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400">
          <p>© 2024 John Doe. Built with ❤️ using React & TailwindCSS</p>
        </footer>
      </div>
    </div>
  );
}