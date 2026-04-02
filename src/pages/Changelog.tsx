import { Plus, Zap, Bug, AlertCircle } from 'lucide-react';

export default function Changelog() {
  const updates = [
    {
      version: 'v2.5.0',
      date: 'March 25, 2026',
      badge: 'Latest',
      changes: [
        { type: 'feature', text: 'Advanced neural network models for improved accuracy' },
        { type: 'feature', text: 'Real-time collaboration features' },
        { type: 'improvement', text: 'Enhanced API response times by 40%' },
        { type: 'fix', text: 'Fixed memory leak in data processing pipeline' },
      ],
    },
    {
      version: 'v2.4.0',
      date: 'March 10, 2026',
      changes: [
        { type: 'feature', text: 'New analytics dashboard with custom widgets' },
        { type: 'feature', text: 'Webhook support for real-time notifications' },
        { type: 'improvement', text: 'Improved error handling and logging' },
        { type: 'fix', text: 'Resolved authentication issues with SSO' },
      ],
    },
    {
      version: 'v2.3.0',
      date: 'February 20, 2026',
      changes: [
        { type: 'feature', text: 'Multi-language support for 10+ languages' },
        { type: 'feature', text: 'Batch processing for large datasets' },
        { type: 'improvement', text: 'Updated UI with improved accessibility' },
        { type: 'fix', text: 'Fixed data export formatting issues' },
      ],
    },
    {
      version: 'v2.2.0',
      date: 'February 5, 2026',
      changes: [
        { type: 'feature', text: 'Custom workflow builder with drag-and-drop' },
        { type: 'improvement', text: 'Optimized database queries for better performance' },
        { type: 'fix', text: 'Resolved timezone handling bugs' },
      ],
    },
    {
      version: 'v2.1.0',
      date: 'January 15, 2026',
      changes: [
        { type: 'feature', text: 'AI model versioning and rollback capabilities' },
        { type: 'feature', text: 'Enhanced security with 2FA support' },
        { type: 'improvement', text: 'Reduced API latency by 30%' },
        { type: 'fix', text: 'Fixed pagination issues in data views' },
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return <Plus className="w-4 h-4" />;
      case 'improvement':
        return <Zap className="w-4 h-4" />;
      case 'fix':
        return <Bug className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'feature':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'improvement':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'fix':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Changelog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track the latest updates, improvements, and bug fixes to Apexcify
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-700 via-gray-800 to-transparent"></div>

          <div className="space-y-12">
            {updates.map((update, index) => (
              <div
                key={index}
                className="relative pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center border-4 border-black">
                  <span className="text-white font-bold text-sm">v{update.version.slice(1)}</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h2 className="text-2xl font-bold text-white">{update.version}</h2>
                        {update.badge && (
                          <span className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full">
                            {update.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400">{update.date}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {update.changes.map((change, changeIndex) => (
                      <div
                        key={changeIndex}
                        className="flex items-start space-x-3 group"
                      >
                        <div className={`flex items-center justify-center w-8 h-8 rounded-lg border ${getBadgeColor(change.type)} flex-shrink-0`}>
                          {getIcon(change.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs font-semibold uppercase text-gray-500">
                              {change.type}
                            </span>
                          </div>
                          <p className="text-gray-300">{change.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all duration-300">
            View Full History
          </button>
        </div>
      </div>
    </div>
  );
}
