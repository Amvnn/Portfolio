import React, { useState } from 'react';
import { Award, Calendar, X, Download } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  downloadUrl: string;
}

const certificates: Certificate[] = [
  {
    title: "Advanced React & Redux",
    issuer: "Udemy",
    date: "2023",
    description: "Mastery in advanced React patterns, Redux architecture, and modern web development practices",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    downloadUrl: "#"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2023",
    description: "Comprehensive training in user interface design principles and user experience best practices",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
    downloadUrl: "#"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
    description: "Foundation in cloud computing concepts and AWS services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    downloadUrl: "#"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-purple-900 to-pink-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="text-white shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-300">{cert.issuer}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-300">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedCert(null)} />
            <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
              
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
              <p className="text-gray-300 mb-4">{selectedCert.issuer} • {selectedCert.date}</p>
              <p className="text-gray-300 mb-6">{selectedCert.description}</p>
              
              <a
                href={selectedCert.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
              >
                <Download size={20} />
                Download Certificate
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}