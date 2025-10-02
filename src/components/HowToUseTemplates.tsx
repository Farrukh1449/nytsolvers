import React from 'react';
import { ArrowRight, Zap, Target, Sparkles, Boxes } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HowToUseProps {
  steps: Step[];
  template?: 'gradient-cards' | 'timeline' | 'grid-flow' | 'interactive-stack';
}

export const HowToUseTemplates: React.FC<HowToUseProps> = ({ steps, template = 'gradient-cards' }) => {
  if (template === 'gradient-cards') {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              How to Use
            </h2>
            <p className="text-gray-600 text-lg">Follow these simple steps to get started</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  <ArrowRight className="absolute bottom-8 right-8 w-6 h-6 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'timeline') {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Getting Started
            </h2>
            <p className="text-slate-300 text-lg">Your journey begins here</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300 group">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'grid-flow') {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full mb-4 font-semibold">
              <Sparkles className="w-5 h-5" />
              Simple Process
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the power of simplicity with our streamlined workflow
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-10 hover:border-orange-400 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-8 h-8 text-orange-400 rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'interactive-stack') {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Your Path Forward
              </span>
            </h2>
            <p className="text-gray-600 text-xl">Navigate through each step effortlessly</p>
          </div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-violet-500 via-purple-500 to-fuchsia-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                <div className="p-8 md:p-10 flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-6xl font-bold text-violet-200 group-hover:text-violet-300 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                  <div className="flex-shrink-0 hidden lg:block">
                    <ArrowRight className="w-8 h-8 text-purple-400 group-hover:translate-x-4 transition-transform duration-300" />
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
