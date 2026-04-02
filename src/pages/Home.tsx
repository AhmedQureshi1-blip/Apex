import { Zap, Shield, TrendingUp, Code, Cpu, Globe } from 'lucide-react';
import aiModel from '../assets/AI_Model.png';

export default function Home() {
  return (
    <div className="relative">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="px-2 py-0.5 bg-white text-black text-xs font-semibold rounded-full">NEW</span>
              <span className="text-sm text-gray-300">Latest integration just arrived</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Revolutionize Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                Workflow with AI
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl">
              Experience cutting-edge solutions designed to elevate productivity and deliver results like never before.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in">
            <img
              src={aiModel}
              alt="AI Model"
              className="w-full h-auto max-w-lg object-contain hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to transform your business with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description: 'Process data at unprecedented speeds with our optimized AI algorithms',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security with 99.9% uptime guarantee',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Scalable Solutions',
                description: 'Grow seamlessly from startup to enterprise without limitations',
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Easy Integration',
                description: 'Simple APIs and SDKs for seamless integration with your stack',
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: 'Advanced AI',
                description: 'Cutting-edge machine learning models for superior results',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Reach',
                description: 'Deploy worldwide with our distributed infrastructure',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of companies already using Apexcify Technologies
          </p>
          <button className="px-12 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
