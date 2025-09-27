import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Lightbulb, ArrowRight } from 'lucide-react';

const AffectVsEffect: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const examples = [
    {
      sentence: 'The rain will _____ our picnic plans.',
      correct: 'affect',
      explanation: 'Use "affect" (verb) because the rain is doing something to the plans.',
      isCorrect: true
    },
    {
      sentence: 'The _____ of the rain was a cancelled picnic.',
      correct: 'effect',
      explanation: 'Use "effect" (noun) because we\'re talking about the result or consequence.',
      isCorrect: true
    },
    {
      sentence: 'How did the medicine _____ you?',
      correct: 'affect',
      explanation: 'Use "affect" (verb) because the medicine is doing something to you.',
      isCorrect: true
    },
    {
      sentence: 'The _____ of the medicine was immediate relief.',
      correct: 'effect',
      explanation: 'Use "effect" (noun) because we\'re describing the result.',
      isCorrect: true
    }
  ];

  const quiz = [
    {
      question: 'The new policy will _____ all employees.',
      options: ['affect', 'effect'],
      correct: 'affect',
      explanation: 'The policy is doing something to the employees (verb).'
    },
    {
      question: 'What was the _____ of the new policy?',
      options: ['affect', 'effect'],
      correct: 'effect',
      explanation: 'We\'re asking about the result or consequence (noun).'
    },
    {
      question: 'The special _____ in the movie were amazing.',
      options: ['affects', 'effects'],
      correct: 'effects',
      explanation: 'Special effects are things/results (noun, plural).'
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answer;
    setQuizAnswers(newAnswers);
  };

  const checkQuiz = () => {
    setShowQuizResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-rose-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Common Misspelling
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Affect vs <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">Effect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the difference between these commonly confused words once and for all
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex space-x-2">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'examples', label: 'Examples' },
              { id: 'quiz', label: 'Quiz' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {selectedTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Rule */}
            <div className="bg-gradient-to-r from-red-100 to-rose-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Rule</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">AFFECT</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">Verb (Action)</div>
                  <p className="text-gray-600">To influence or make a change</p>
                  <div className="mt-4 text-sm text-gray-500">
                    Memory trick: <strong>A</strong>ffect = <strong>A</strong>ction
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-4xl font-bold text-rose-600 mb-2">EFFECT</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">Noun (Thing)</div>
                  <p className="text-gray-600">A result or consequence</p>
                  <div className="mt-4 text-sm text-gray-500">
                    Memory trick: <strong>E</strong>ffect = <strong>E</strong>nd result
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Explanations */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  AFFECT (Verb)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Means to influence or change something</li>
                  <li>• Usually comes before the thing being changed</li>
                  <li>• Can be replaced with "influence" in most cases</li>
                  <li>• Example: "The weather affects my mood"</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-rose-600 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  EFFECT (Noun)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Means a result or consequence</li>
                  <li>• Often comes after "the" or "an"</li>
                  <li>• Can be replaced with "result" in most cases</li>
                  <li>• Example: "The effect of weather on my mood"</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'examples' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Practice Examples</h2>
            {examples.map((example, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <p className="text-lg text-gray-800 mb-2">
                    {example.sentence.replace('_____', `**${example.correct}**`)}
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-green-700">Correct: {example.correct}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5" />
                    <p className="text-sm text-gray-600">{example.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Test Your Knowledge</h2>
            {quiz.map((question, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Question {index + 1}: {question.question}
                </h3>
                <div className="space-y-2 mb-4">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleQuizAnswer(index, option)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                        quizAnswers[index] === option
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {showQuizResults && quizAnswers[index] && (
                  <div className={`p-4 rounded-lg ${
                    quizAnswers[index] === question.correct
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-center mb-2">
                      {quizAnswers[index] === question.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mr-2" />
                      )}
                      <span className={`font-semibold ${
                        quizAnswers[index] === question.correct ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {quizAnswers[index] === question.correct ? 'Correct!' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{question.explanation}</p>
                  </div>
                )}
              </div>
            ))}

            {quizAnswers.length === quiz.length && !showQuizResults && (
              <div className="text-center">
                <button
                  onClick={checkQuiz}
                  className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-red-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Check Answers
                </button>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 text-center">
          <a
            href="/misspelling"
            className="inline-flex items-center bg-gradient-to-r from-red-500 to-rose-500 text-white px-6 py-3 rounded-xl font-medium hover:from-red-600 hover:to-rose-600 transition-all duration-200"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Misspellings
          </a>
        </div>
      </div>
    </div>
  );
};

export default AffectVsEffect;