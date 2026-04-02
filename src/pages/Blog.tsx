import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI', 'Technology', 'Tutorials', 'Updates', 'Case Studies'];

  const articles = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how artificial intelligence is transforming business operations and driving unprecedented efficiency gains.',
      category: 'AI',
      date: 'Mar 20, 2026',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Getting Started with Apexcify API',
      excerpt: 'A comprehensive guide to integrating Apexcify into your applications with practical examples.',
      category: 'Tutorials',
      date: 'Mar 18, 2026',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Machine Learning Best Practices',
      excerpt: 'Learn the essential practices for building robust and scalable machine learning systems.',
      category: 'Technology',
      date: 'Mar 15, 2026',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Case Study: Fortune 500 Success',
      excerpt: 'How a Fortune 500 company increased productivity by 300% using Apexcify AI solutions.',
      category: 'Case Studies',
      date: 'Mar 12, 2026',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'New Features: Advanced Analytics',
      excerpt: 'Explore the latest analytics features that provide deeper insights into your data.',
      category: 'Updates',
      date: 'Mar 10, 2026',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/8850709/pexels-photo-8850709.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Understanding Neural Networks',
      excerpt: 'A deep dive into how neural networks work and their applications in modern AI.',
      category: 'AI',
      date: 'Mar 8, 2026',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from the world of AI
          </p>
        </div>

        <div className="mb-12 animate-fade-in-up">
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
