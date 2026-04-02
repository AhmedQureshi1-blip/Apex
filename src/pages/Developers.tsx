import { Code, Book, Terminal, FileCode, Package, Webhook } from 'lucide-react';

export default function Developers() {
  const codeExample = `import { Apexcify } from '@apexcify/sdk';

const client = new Apexcify({
  apiKey: 'your_api_key'
});

const response = await client.ai.analyze({
  data: yourData,
  model: 'advanced-v1'
});

console.log(response);`;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Developer Resources
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to integrate Apexcify into your applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white">Quick Start</h2>
            <p className="text-lg text-gray-400">
              Get started with Apexcify in minutes. Our SDK supports multiple programming languages and frameworks.
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{codeExample}</code>
              </pre>
            </div>
            <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
              View Full Documentation
            </button>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: <Book className="w-6 h-6" />,
                title: 'Documentation',
                description: 'Comprehensive guides and API references',
                link: 'Read Docs',
              },
              {
                icon: <Terminal className="w-6 h-6" />,
                title: 'CLI Tools',
                description: 'Powerful command-line tools for development',
                link: 'Install CLI',
              },
              {
                icon: <FileCode className="w-6 h-6" />,
                title: 'Code Examples',
                description: 'Sample projects and code snippets',
                link: 'Browse Examples',
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: 'SDKs & Libraries',
                description: 'Official SDKs for popular languages',
                link: 'View SDKs',
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-400 mb-3">{resource.description}</p>
                    <span className="text-white group-hover:underline">{resource.link} →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { method: 'POST', endpoint: '/api/v1/analyze', description: 'Analyze data with AI' },
              { method: 'GET', endpoint: '/api/v1/models', description: 'List available models' },
              { method: 'POST', endpoint: '/api/v1/workflows', description: 'Create workflow' },
              { method: 'GET', endpoint: '/api/v1/analytics', description: 'Get analytics data' },
              { method: 'PUT', endpoint: '/api/v1/settings', description: 'Update settings' },
              { method: 'DELETE', endpoint: '/api/v1/data/:id', description: 'Delete data entry' },
            ].map((endpoint, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-3 py-1 text-xs font-semibold rounded ${
                    endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                    endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                    endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <code className="text-sm text-gray-300 block mb-2">{endpoint.endpoint}</code>
                <p className="text-sm text-gray-500">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-12 text-center">
          <Webhook className="w-16 h-16 mx-auto mb-6 text-gray-400" />
          <h2 className="text-3xl font-bold text-white mb-4">Webhooks & Events</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Set up webhooks to receive real-time notifications about events in your Apexcify account
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
            Configure Webhooks
          </button>
        </div>
      </div>
    </div>
  );
}
