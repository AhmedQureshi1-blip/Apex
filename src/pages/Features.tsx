import { useState } from 'react';
import { Sparkles, Brain, Workflow, BarChart3, Lock, Zap } from 'lucide-react';
import aiModelImage from '../assets/4154d2147a930bbc6c126aaf69913f248633aebd.png';
import Lightbox from '../components/Lightbox';

export default function Features() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [aiModelImage, aiModelImage, aiModelImage];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Powerful AI Features
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make Apexcify the future of intelligent automation
          </p>
        </div>

        <div className="space-y-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">AI-Powered Intelligence</h2>
              </div>
              <p className="text-lg text-gray-400">
                Leverage advanced machine learning algorithms to automate complex decision-making processes and gain insights from your data like never before.
              </p>
              <ul className="space-y-3">
                {['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Deep Learning Models'].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                Explore AI Solutions
              </button>
            </div>
            <div className="relative animate-fade-in">
              <img
                src={aiModelImage}
                alt="AI Intelligence"
                className="w-full h-auto rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openLightbox(0)}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in lg:order-1">
              <img
                src={aiModelImage}
                alt="Workflow Automation"
                className="w-full h-auto rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openLightbox(1)}
              />
            </div>
            <div className="space-y-6 animate-fade-in-up lg:order-2">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Seamless Automation</h2>
              </div>
              <p className="text-lg text-gray-400">
                Streamline your operations with intelligent workflow automation that adapts to your business needs and scales effortlessly.
              </p>
              <ul className="space-y-3">
                {['Custom Workflow Builder', 'Smart Task Scheduling', 'Process Optimization', 'Real-time Monitoring'].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Advanced Analytics',
                description: 'Real-time insights and predictive analytics to drive data-driven decisions',
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: 'Enterprise Security',
                description: 'Bank-level encryption and compliance with global security standards',
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Smart Integration',
                description: 'Connect with 100+ tools and platforms through our unified API',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
        />
      )}
    </div>
  );
}
