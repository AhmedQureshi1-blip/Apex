import { Users, Target, Heart, Award, Mail, MapPin } from 'lucide-react';

export default function Company() {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Michael Chen', role: 'CTO', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Emily Rodriguez', role: 'Head of AI', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'David Kim', role: 'VP Engineering', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Lisa Wang', role: 'Head of Design', image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'James Brown', role: 'VP Sales', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About Apexcify
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're on a mission to democratize AI and make it accessible to businesses of all sizes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white">Our Story</h2>
            <p className="text-lg text-gray-400">
              Founded in 2020, Apexcify Technologies was born from a simple belief: artificial intelligence should empower everyone, not just tech giants.
            </p>
            <p className="text-lg text-gray-400">
              Today, we serve thousands of companies worldwide, from startups to Fortune 500 enterprises, helping them harness the power of AI to transform their operations and achieve unprecedented growth.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Companies</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-4xl font-bold text-white mb-2">2M+</div>
                <div className="text-gray-400">API Calls/Day</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Countries</div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Our Mission',
                description: 'To make AI accessible and practical for businesses worldwide, driving innovation and growth through intelligent automation.',
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Our Values',
                description: 'Innovation, transparency, and customer success are at the heart of everything we do.',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Our Vision',
                description: 'A future where every business can leverage AI to achieve its full potential and create meaningful impact.',
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">
              Passionate experts dedicated to building the future of AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl">
            <Users className="w-12 h-12 text-gray-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-lg text-gray-400 mb-6">
              We're always looking for talented individuals to join our mission. Explore our open positions.
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
              View Careers
            </button>
          </div>

          <div className="p-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl">
            <Mail className="w-12 h-12 text-gray-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
            <p className="text-lg text-gray-400 mb-6">
              Have questions? We'd love to hear from you. Contact our team today.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>contact@apexcify.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
