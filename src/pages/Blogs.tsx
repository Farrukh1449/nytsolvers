import React from 'react';
import { Calendar, BookOpen, ArrowRight, Clock, User, Tag } from 'lucide-react';

const Blogs: React.FC = () => {
  const blogPosts = [
    {
      title: 'Mastering Wordle: Advanced Strategies for Consistent Success',
      excerpt: 'Learn the mathematical approach to Wordle that will improve your average score and help you solve puzzles in fewer guesses.',
      author: 'Word Game Expert',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Strategy',
      href: '/blog/mastering-wordle-strategies',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'The Psychology Behind NYT Connections Puzzles',
      excerpt: 'Discover how understanding cognitive patterns can help you identify connections faster and solve puzzles more efficiently.',
      author: 'Puzzle Analyst',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Psychology',
      href: '/blog/connections-psychology',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Spelling Bee Queen: How to Find Every Word',
      excerpt: 'A comprehensive guide to achieving Queen Bee status consistently, including letter pattern recognition and word formation techniques.',
      author: 'Vocabulary Master',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'Tutorial',
      href: '/blog/spelling-bee-queen-guide',
      gradient: 'from-amber-400 to-yellow-500'
    },
    {
      title: 'The Evolution of Word Games in Digital Media',
      excerpt: 'From newspaper crosswords to mobile apps: how word games have adapted to the digital age and captured millions of players.',
      author: 'Game Historian',
      date: 'January 8, 2025',
      readTime: '12 min read',
      category: 'History',
      href: '/blog/word-games-evolution',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Building Your Vocabulary Through Daily Puzzles',
      excerpt: 'How consistent puzzle solving can dramatically improve your vocabulary and language skills over time.',
      author: 'Language Expert',
      date: 'January 5, 2025',
      readTime: '7 min read',
      category: 'Education',
      href: '/blog/vocabulary-building',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      title: 'Crossword Construction: Behind the Scenes',
      excerpt: 'An inside look at how professional crossword constructors create the puzzles we love to solve.',
      author: 'Constructor Insider',
      date: 'January 3, 2025',
      readTime: '9 min read',
      category: 'Behind the Scenes',
      href: '/blog/crossword-construction',
      gradient: 'from-red-400 to-rose-500'
    }
  ];

  const categories = ['All', 'Strategy', 'Psychology', 'Tutorial', 'History', 'Education', 'Behind the Scenes'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Word Game Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert strategies, tips, and insights to help you master word games and puzzles
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
              
              {/* Content */}
              <div className="p-8">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Date */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <a
                  href={post.href}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${post.gradient} text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;