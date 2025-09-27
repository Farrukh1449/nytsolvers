import React from 'react';
import { AlertTriangle, BookOpen, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const Misspelling: React.FC = () => {
  const commonMisspellings = [
    {
      title: 'Affect vs Effect',
      description: 'Learn the difference between these commonly confused words',
      href: '/affect-vs-effect',
      gradient: 'from-red-400 to-rose-500',
      preview: 'Affect is a verb, Effect is a noun'
    },
    {
      title: 'Your vs You\'re',
      description: 'Master the possessive vs contraction distinction',
      href: '/your-vs-youre',
      gradient: 'from-blue-400 to-indigo-500',
      preview: 'Your shows possession, You\'re means "you are"'
    },
    {
      title: 'There vs Their vs They\'re',
      description: 'Navigate these three similar-sounding words',
      href: '/there-their-theyre',
      gradient: 'from-green-400 to-teal-500',
      preview: 'Location, possession, and contraction'
    },
    {
      title: 'Its vs It\'s',
      description: 'Understand when to use the apostrophe',
      href: '/its-vs-its',
      gradient: 'from-purple-400 to-pink-500',
      preview: 'Its shows possession, It\'s means "it is"'
    },
    {
      title: 'Lose vs Loose',
      description: 'Don\'t lose track of these spelling differences',
      href: '/lose-vs-loose',
      gradient: 'from-yellow-400 to-orange-500',
      preview: 'Lose is a verb, Loose is an adjective'
    },
    {
      title: 'Accept vs Except',
      description: 'Accept the difference, except when confused',
      href: '/accept-vs-except',
      gradient: 'from-teal-400 to-cyan-500',
      preview: 'Accept means to receive, Except means to exclude'
    }
  ];

  const spellingTips = [
    'Read your writing aloud to catch errors',
    'Use spell-check but don\'t rely on it completely',
    'Keep a list of words you commonly misspell',
    'Break long words into syllables',
    'Learn common prefixes and suffixes',
    'Practice writing difficult words multiple times'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Common Misspellings
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spelling <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Mistakes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn to avoid the most common spelling mistakes and improve your writing accuracy
          </p>
        </div>

        {/* Common Misspellings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {commonMisspellings.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Preview */}
                <div className="bg-gray-50 rounded-lg p-3 mb-6">
                  <p className="text-sm text-gray-700 font-medium">{item.preview}</p>
                </div>

                {/* CTA Button */}
                <a
                  href={item.href}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${item.gradient} text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Spelling Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            Spelling Improvement Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spellingTips.map((tip, index) => (
              <div
                key={tip}
                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg hover:from-red-100 hover:to-orange-100 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Improve Your Spelling Today
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start with our most common misspelling guides and work your way up to perfect spelling accuracy.
            </p>
            <a
              href="/affect-vs-effect"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center"
            >
              Start with Affect vs Effect
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misspelling;