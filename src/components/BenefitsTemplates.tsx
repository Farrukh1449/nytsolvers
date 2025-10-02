import React from 'react';
import { CheckCircle, TrendingUp, Award, Heart, Zap, Star, Target, Sparkles } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

interface BenefitsProps {
  benefits: Benefit[];
  toolName?: string;
  template?: 'split-showcase' | 'radial-cards' | 'diagonal-flow' | 'prismatic';
}

const getIcon = (iconName?: string, index?: number) => {
  const icons = [CheckCircle, TrendingUp, Award, Heart, Zap, Star, Target, Sparkles];
  const IconComponent = icons[index || 0];
  return <IconComponent className="w-full h-full" />;
};

export const BenefitsTemplates: React.FC<BenefitsProps> = ({
  benefits,
  toolName = 'Our Tool',
  template = 'split-showcase'
}) => {
  if (template === 'split-showcase') {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Benefits of {toolName}
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Transform your workflow and achieve unprecedented results
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, Math.ceil(benefits.length / 2)).map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-x-2 border-l-4 border-green-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {getIcon(benefit.icon, index)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(Math.ceil(benefits.length / 2)).map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:translate-x-2 border-r-4 border-emerald-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                      {getIcon(benefit.icon, index + Math.ceil(benefits.length / 2))}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (template === 'radial-cards') {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose {toolName}
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Unlock your full potential with these incredible advantages
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-500 h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                      {getIcon(benefit.icon, index)}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'diagonal-flow') {
    return (
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 transform -skew-y-6 origin-top-left" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              {toolName} Advantages
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Experience the difference that innovation makes
            </p>
          </div>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group flex items-center gap-8 ${
                  index % 2 === 0 ? '' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-orange-200 hover:border-orange-400 group-hover:scale-105">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {getIcon(benefit.icon, index)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'prismatic') {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/5 rounded-full blur-2xl"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              The {toolName} Edge
            </h2>
            <p className="text-purple-200 text-xl max-w-3xl mx-auto">
              Step into a world of limitless possibilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-3xl opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500 h-full">
                  <div className="w-20 h-20 mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-pink-400 to-yellow-400 rounded-2xl animate-spin-slow" />
                    <div className="absolute inset-1 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl flex items-center justify-center text-white">
                      {getIcon(benefit.icon, index)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </section>
    );
  }

  return null;
};
