import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Plus, Minus, ArrowRight } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQ[];
  template?: 'accordion-classic' | 'cards-expandable' | 'split-layout' | 'gradient-boxes';
}

export const FAQTemplates: React.FC<FAQProps> = ({ faqs, template = 'accordion-classic' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (template === 'accordion-classic') {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-xl">
              Find answers to common questions about our service
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50 transition-colors duration-300"
                >
                  <span className="text-xl font-bold text-gray-900 pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'cards-expandable') {
    return (
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-cyan-500/20 px-6 py-3 rounded-full mb-6">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">FAQ</span>
            </div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Got Questions?
            </h2>
            <p className="text-slate-300 text-xl">
              We have got answers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div
                  className={`relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden transition-all duration-500 hover:border-cyan-500 ${
                    openIndex === index ? 'shadow-2xl shadow-cyan-500/20' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-8 flex items-start justify-between text-left gap-6"
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{faq.question}</h3>
                    </div>
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                      {openIndex === index ? (
                        <Minus className="w-6 h-6 text-white" />
                      ) : (
                        <Plus className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-8">
                      <p className="text-slate-300 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (template === 'split-layout') {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-6xl font-bold text-gray-900 mb-6">
                Common Questions
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                Everything you need to know about our platform. Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
              <div className="inline-flex items-center gap-3 text-orange-600 font-semibold text-lg group cursor-pointer">
                <span>Still have questions?</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div
                    className={`bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 transition-all duration-500 cursor-pointer border-2 ${
                      openIndex === index
                        ? 'border-orange-400 shadow-xl'
                        : 'border-transparent hover:border-orange-200'
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-start justify-between gap-6 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{faq.question}</h3>
                      <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
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

  if (template === 'gradient-boxes') {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              Questions & Answers
            </h2>
            <p className="text-purple-200 text-xl max-w-3xl mx-auto">
              Get clarity on everything you need to know
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div
                  className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/15 cursor-pointer ${
                    openIndex === index ? 'shadow-2xl shadow-fuchsia-500/30' : ''
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{faq.question}</h3>
                      </div>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-6 h-6 text-fuchsia-300" />
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-18">
                        <p className="text-purple-200 leading-relaxed text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 transition-all duration-500 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`} />
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
