import React, { useState } from 'react';
import { Calendar, Target, Eye, EyeOff, Lightbulb, Clock, ArrowRight, Zap, BookOpen, Grid3x3 as Grid3X3, Flower } from 'lucide-react';

const ConnectionsHints: React.FC = () => {
  const [showHints, setShowHints] = useState([false, false, false, false]);
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    number: 542,
    categories: [
      {
        name: 'YELLOW (EASIEST)',
        color: 'bg-yellow-400',
        hint: 'Things you might find in a kitchen drawer',
        words: ['FORK', 'KNIFE', 'SPOON', 'LADLE'],
        explanation: 'Common kitchen utensils used for eating and cooking.'
      },
      {
        name: 'GREEN (EASY)',
        color: 'bg-green-400', 
        hint: 'Words that can come before "BOARD"',
        words: ['CLIP', 'DASH', 'KEY', 'SURF'],
        explanation: 'CLIPBOARD, DASHBOARD, KEYBOARD, SURFBOARD'
      },
      {
        name: 'BLUE (MEDIUM)',
        color: 'bg-blue-400',
        hint: 'Things that are typically round',
        words: ['BALL', 'COIN', 'PIZZA', 'WHEEL'],
        explanation: 'Objects that have a circular shape.'
      },
      {
        name: 'PURPLE (HARDEST)',
        color: 'bg-purple-400',
        hint: 'Words with double letters',
        words: ['ALLEY', 'BERRY', 'DIZZY', 'HAPPY'],
        explanation: 'Each word contains repeated consecutive letters.'
      }
    ]
  };

  const relatedGames = [
    {
      title: 'Wordle Hints',
      description: 'Get daily hints for today\'s Wordle puzzle',
      href: '/wordle-hints',
      icon: Target,
      gradient: 'from-green-400 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Spelling Bee Hints',
      description: 'Find today\'s pangram and word list',
      href: '/spelling-bee-hints',
      icon: Zap,
      gradient: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Strands Hints',
      description: 'Navigate today\'s Strands puzzle',
      href: '/strands-hints',
      icon: Target,
      gradient: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Mini Crossword Hints',
      description: 'Quick hints for the NYT Mini',
      href: '/mini-crossword-hints',
      icon: Grid3X3,
      gradient: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-teal-50'
    }
  ];

  const toggleHint = (index: number) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              NYT Connections Hints
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Connections <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hints</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {puzzleData.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Puzzle #{puzzleData.number}
              </div>
            </div>
          </div>

          {/* Game Board Visual */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <div className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block mb-4 text-sm">
                Flip any "?" below to reveal the word
              </div>
            </div>
            
            <div className="space-y-4">
              {puzzleData.categories.map((category, categoryIndex) => (
                <div key={category.name} className="relative">
                  <div className={`${category.color} rounded-xl p-4 relative`}>
                    {/* Hint Button */}
                    <button
                      onClick={() => toggleHint(categoryIndex)}
                      className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center"
                    >
                      <Lightbulb className="w-4 h-4 mr-1" />
                      Hint
                    </button>
                    
                    {/* Top hint box */}
                    <div className="flex justify-center mb-4">
                      <div className="bg-white/30 border-2 border-white/50 rounded-lg px-6 py-3 text-center">
                        {showHints[categoryIndex] ? (
                          <span className="text-white font-semibold">{category.hint}</span>
                        ) : (
                          <span className="text-white text-2xl font-bold">?</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Word boxes */}
                    <div className="grid grid-cols-4 gap-3">
                      {category.words.map((word, wordIndex) => (
                        <div
                          key={word}
                          className="bg-white/30 border-2 border-white/50 rounded-lg px-4 py-3 text-center"
                        >
                          {showAnswers ? (
                            <span className="text-white font-semibold">{word}</span>
                          ) : (
                            <span className="text-white text-xl font-bold">?</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <div className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block text-sm">
                Tap a word to place it into the right group
              </div>
            </div>
          </div>

          {/* Show Answers Button */}
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                showAnswers 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
              }`}
            >
              {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* You Might Need Help Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You Might Need Help in Other <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NYT Games</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore hints and solutions for other popular New York Times puzzle games
            </p>
          </div>

          {/* Related Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {relatedGames.map((game, index) => (
              <div
                key={game.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${game.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <game.icon className="w-6 h-6 text-gray-700" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {game.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                    Get Hints
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Daily Games Hints & Answers Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Games Hints & Answers:</h3>
            <p className="text-gray-600 mb-8">We also help our users decode other daily word-guessing games.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              {[
                { name: 'Wordle Answers', icon: Target, href: '/wordle-hints', color: 'bg-green-100' },
                { name: 'Connections Answers', icon: Target, href: '/connections-hints', color: 'bg-purple-100' },
                { name: 'NYT Mini Answers', icon: Grid3X3, href: '/mini-crossword-hints', color: 'bg-blue-100' },
                { name: 'Strands Answers', icon: Target, href: '/strands-hints', color: 'bg-red-100' },
                { name: 'Spelling Bee Answers', icon: Zap, href: '/spelling-bee-hints', color: 'bg-yellow-100' }
              ].map((game, index) => (
                <a
                  key={game.name}
                  href={game.href}
                  className="group text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 ${game.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <game.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {game.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Jul 27, 2025</div>
                </a>
              ))}
            </div>

            <p className="text-gray-600 mb-6">
              We have our dedicated Connections answers page for a complete archive of past solutions. Scroll to the bottom, and you'll see all the answers from the NYT Connections Solutions History. We've been keeping track, so you don't have to.
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              See Past Connections Answers
            </button>
          </div>

          {/* How to Use Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Use Our NYT Connections Hints</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Not every NYT connections player wants today's answers. That's why we created this page! Here, we will give you one connection clue for each category to help you solve today's puzzle yourself – feel free to bookmark this page whenever you need a quick connections hint.
            </p>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Looking to sharpen your Wordle skills? Don't forget to check out today's Wordle answer. We've got a whole page dedicated to it, with daily solutions. And a lot more. For buzzy players, you'll find "What is today's Spelling Bee pangram?" over on our NYT Spelling Bee Answers segment. We have scoured our database for pangram solutions so you can uphold The Queen Bee! status and keep your streak streamlined.
              </p>
              
              <p>
                Use our NYT Connections hint page to get help when you need it! Here are a few how-tos for using it.
              </p>
            </div>
          </div>

          {/* Quick Hints Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Hints</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Say you want to search for a quick hint but don't want to know exactly which categories the 16 words go into, tap on the first flashcard labeled below each category. We've color-coded them to help you guess the category title. We've color-coded them to help you out using the NYT Connections colors, and they're ordered from easy to most difficult. (Yellow to Purple).
            </p>
          </div>

          {/* To See The Groups Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">To See The Groups</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you need the category titles, we've got that too. Simply tap the flashcard labeled SEE GROUP, and the name of each category will come up. You might use this if you're stuck on a particular category and unsure which category you want.
            </p>
          </div>

          {/* To Find All The Answers Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">To Find All The Answers</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you're completely stuck, we understand the frustration of today's Connections answers. We've left this until the end, partially for suspense and also to help those who want to solve the daily puzzle themselves. Tap SEE WORD to see which of the 16 words go into which group. Again this is color-coded so you can see how difficult each group was to guess, according to The New York Times.
            </p>
          </div>

          {/* What is Connections Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What is Connections by The New York Times?</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              NYT Connections is pretty similar to a game you might have played as a child called Categories. However, instead of having a certain starting letter, you're given 16 words on your grid. Each group has four words that share a common thread. You have to place these words into one of the four categories or groups without making four mistakes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You make a mistake when you group the wrong words in a category. Every time you guess a correct group NYT Connections will tell you which color group you guessed correctly.
            </p>
          </div>

          {/* The NYT Connections Colors Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The NYT Connections Colors</h3>
            <p className="text-gray-600 mb-6">Each of the four groups has a color associated with it, and they each mean a slightly different thing.</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div>
                  <span className="font-semibold text-gray-900">Yellow</span>
                  <p className="text-gray-600 text-sm">Simple or easy answer.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div>
                  <span className="font-semibold text-gray-900">Green</span>
                  <p className="text-gray-600 text-sm">Fairly easy to guess.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div>
                  <span className="font-semibold text-gray-900">Blue</span>
                  <p className="text-gray-600 text-sm">It is an unfamiliar answer or trivia.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div>
                  <span className="font-semibold text-gray-900">Purple</span>
                  <p className="text-gray-600 text-sm">The most difficult to guess.</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mt-6">
              Once you've made all your guesses, you can share your NYT Connections solution grid with your friends.
            </p>
          </div>

          {/* How to Solve Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Solve The NYT Connections Puzzle?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Solving the daily puzzle is fairly straightforward, but you'll have to know about categorizations before you start, being good with trivia also helps! Here's our tips to get started.
            </p>
          </div>

          {/* Tips & Strategies Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tips & Strategies For Playing Connections</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Like any good word game puzzle, there are a few skills you can brush up on before you start playing, and with time these skills will get stronger the more you play.
            </p>
          </div>

          {/* Get to Know Your Trivia Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get to Know Your Trivia</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              NYT Connections' current editor Wyna Liu says the blue and green groups are medium-difficult. That's because words grouped into blue or green are often EXTENSIONS or SYNONYMS FOR ___. So get that board game out or that book about useless information and start swatting up on trivial facts (because they may help you!).
            </p>
          </div>

          {/* Get Your Guesses Out of The Way Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Guesses Out of The Way</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Before you make any guesses, assess which words could be categorized. Once you see one, get it out of the way as soon as possible. That way, you narrow down your word choices for your next guess.
            </p>
          </div>

          {/* More NYT Games Tools Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More NYT Games Tools</h3>
            <div className="space-y-4">
              {[
                { name: "Today's Strands Hints, Spangram, Answers", icon: Target, href: '/strands-hints' },
                { name: "Today's Wordle Answer", icon: Target, href: '/wordle-hints' },
                { name: "Today's Connections Answers", icon: Target, href: '/connections-hints' },
                { name: "Today's Spelling Bee Answers", icon: Zap, href: '/spelling-bee-hints' },
                { name: "Today's NYT The Mini Answers", icon: Grid3X3, href: '/mini-crossword-hints' },
                { name: "Today's Today's NYT The Crossword", icon: BookOpen, href: '/crossword-hints' }
              ].map((tool, index) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <tool.icon className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                      {tool.name}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsHints;