import React from 'react';
import { BookOpen, CheckCircle, ArrowRight, Lightbulb, Target, Star } from 'lucide-react';

const Grammar: React.FC = () => {
  const grammarTopics = [
    {
      title: 'Parts of Speech',
      description: 'Master nouns, verbs, adjectives, adverbs, and more',
      icon: Target,
      gradient: 'from-blue-400 to-indigo-500',
      lessons: ['Nouns and Pronouns', 'Verbs and Tenses', 'Adjectives and Adverbs', 'Prepositions and Conjunctions']
    },
    {
      title: 'Sentence Structure',
      description: 'Learn to build clear, effective sentences',
      icon: CheckCircle,
      gradient: 'from-green-400 to-teal-500',
      lessons: ['Simple Sentences', 'Compound Sentences', 'Complex Sentences', 'Sentence Fragments']
    },
    {
      title: 'Punctuation Rules',
      description: 'Perfect your use of commas, semicolons, and more',
      icon: Star,
      gradient: 'from-purple-400 to-pink-500',
      lessons: ['Comma Usage', 'Semicolons and Colons', 'Apostrophes', 'Quotation Marks']
    },
    {
      title: 'Common Mistakes',
      description: 'Avoid the most frequent grammar errors',
      icon: Lightbulb,
      gradient: 'from-red-400 to-rose-500',
      lessons: ['Subject-Verb Agreement', 'Pronoun Usage', 'Modifier Placement', 'Parallel Structure']
    }
  ];

  const quickTips = [
    'Use active voice for clearer writing',
    'Keep sentences concise and focused',
    'Match subjects with their verbs',
    'Place modifiers close to what they modify',
    'Use parallel structure in lists',
    'Choose specific, concrete words'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Grammar Learning Center
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Master <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Grammar</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Improve your writing and communication skills with comprehensive grammar lessons and practical exercises
          </p>
        </div>

        {/* Grammar Topics */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {grammarTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${topic.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {topic.description}
                </p>

                {/* Lessons */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {topic.lessons.map((lesson, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${topic.gradient} text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Quick Grammar Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((tip, index) => (
              <div
                key={tip}
                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Improve Your Grammar?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start with our interactive lessons and practice exercises designed to make grammar learning engaging and effective.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Begin Grammar Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammar;