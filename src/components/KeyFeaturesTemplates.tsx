import React from 'react';
import { Zap, Shield, Sparkles, TrendingUp, Star, Rocket, Brain, Eye } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface KeyFeaturesProps {
  features: Feature[];
  template?: 'floating-cards' | 'hexagon-grid' | 'spotlight' | 'wave-design';
}

const getIcon = (iconName?: string, index?: number) => {
  const icons = [Zap, Shield, Sparkles, TrendingUp, Star, Rocket, Brain, Eye];
  const IconComponent = icons[index || 0];
  return <IconComponent className="w-full h-full" />;
};

export const KeyFeaturesTemplates: React.FC<KeyFeaturesProps> = ({ features, template = 'floating-cards' }) => {
  if (template === 'floating-cards') {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Powerful capabilities designed to transform your experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100 group-hover:border-emerald-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {getIcon(feature.icon, index)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>
    );
  }

  if (template === 'hexagon-grid') {
    return (
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Core Features
              </div>
            </div>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Cutting-edge technology meets intuitive design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group perspective-1000">
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-500 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="w-20 h-20 mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                      <div className="absolute inset-2 bg-slate-900 rounded-xl rotate-45 flex items-center justify-center">
                        <div className="text-cyan-400 -rotate-45 w-8 h-8">
                          {getIcon(feature.icon, index)}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'spotlight') {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              Feature Spotlight
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Discover what makes us exceptional
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500 opacity-90" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30" />
                <div className="relative p-10 h-full">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {getIcon(feature.icon, index)}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed text-lg">{feature.description}</p>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'wave-design') {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Premium Features
            </h2>
            <p className="text-blue-200 text-xl max-w-3xl mx-auto">
              Experience excellence at every level
            </p>
          </div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500 group">
                    <div className="flex items-center gap-6 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {getIcon(feature.icon, index)}
                      </div>
                      <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-blue-200 leading-relaxed text-lg pl-20">{feature.description}</p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full flex items-center justify-center text-4xl font-bold text-white backdrop-blur-sm">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
};
