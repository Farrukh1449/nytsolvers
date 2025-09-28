import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, BookOpen, Hash, Eye, Share2, ChevronRight, Target, Grid3x3 as Grid3X3, Zap } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
  gradient: string;
}

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface BlogTemplateProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
  tableOfContents: TableOfContentsItem[];
  relatedPosts?: BlogPost[];
  relatedPages?: Array<{
    title: string;
    description: string;
    href: string;
    icon: React.ComponentType<any>;
    gradient: string;
  }>;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  content,
  tableOfContents,
  relatedPosts = [],
  relatedPages = []
}) => {
  const [activeSection, setActiveSection] = useState('');
  const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const defaultRelatedPages = [
    {
      title: 'Wordle Solver',
      description: 'Get the perfect word for today\'s Wordle puzzle',
      href: '/wordle-solver',
      icon: Target,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Connections Hints',
      description: 'Daily hints for NYT Connections puzzle',
      href: '/connections-hints',
      icon: Grid3X3,
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Spelling Bee Solver',
      description: 'Find all possible words and pangrams',
      href: '/spelling-bee-solver',
      icon: Zap,
      gradient: 'from-amber-400 to-yellow-500'
    }
  ];

  const defaultRelatedPosts = [
    {
      title: 'Mastering Wordle: Advanced Strategies for Consistent Success',
      excerpt: 'Learn the mathematical approach to Wordle that will improve your average score.',
      author: 'Word Game Expert',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Strategy',
      href: '/blog/mastering-wordle-strategies',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'The Psychology Behind NYT Connections Puzzles',
      excerpt: 'Discover how understanding cognitive patterns can help you solve puzzles faster.',
      author: 'Puzzle Analyst',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Psychology',
      href: '/blog/connections-psychology',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Spelling Bee Queen: How to Find Every Word',
      excerpt: 'A comprehensive guide to achieving Queen Bee status consistently.',
      author: 'Vocabulary Master',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'Tutorial',
      href: '/blog/spelling-bee-queen-guide',
      gradient: 'from-amber-400 to-yellow-500'
    }
  ];

  const finalRelatedPosts = relatedPosts.length > 0 ? relatedPosts : defaultRelatedPosts;
  const finalRelatedPages = relatedPages.length > 0 ? relatedPages : defaultRelatedPages;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Table of Contents - Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                        activeSection === item.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      } ${item.level === 2 ? 'ml-4' : item.level === 3 ? 'ml-8' : ''}`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            {/* Article Header */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="p-8 md:p-12">
                {/* Category Badge */}
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Hash className="w-4 h-4 mr-2" />
                  {category}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    <span className="text-sm">2,847 views</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center space-x-4 pb-8 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Share:</span>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Mobile Table of Contents */}
            <div className="lg:hidden mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <button
                  onClick={() => setIsTableOfContentsOpen(!isTableOfContentsOpen)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                    Table of Contents
                  </h3>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    isTableOfContentsOpen ? 'rotate-90' : ''
                  }`} />
                </button>
                
                {isTableOfContentsOpen && (
                  <nav className="mt-4 space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsTableOfContentsOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                          activeSection === item.id
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        } ${item.level === 2 ? 'ml-4' : item.level === 3 ? 'ml-8' : ''}`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                )}
              </div>
            </div>

            {/* Blog Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {content}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              {/* Related Pages */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Related Tools</h3>
                <div className="space-y-4">
                  {finalRelatedPages.map((page, index) => (
                    <a
                      key={page.title}
                      href={page.href}
                      className="group block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${page.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                          <page.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                            {page.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest word game strategies and daily puzzle solutions delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Published</span>
                    <span className="font-medium text-gray-900">{date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Reading Time</span>
                    <span className="font-medium text-gray-900">{readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium text-blue-600">{category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="font-medium text-gray-900">2,847</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        {finalRelatedPosts.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Articles</span>
              </h2>
              <p className="text-lg text-gray-600">
                Continue your learning journey with these related articles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {finalRelatedPosts.map((post, index) => (
                <article
                  key={post.title}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>

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
          </div>
        )}

        {/* Back to Blog */}
        <div className="text-center mt-16">
          <a
            href="/blogs"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Back to All Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;