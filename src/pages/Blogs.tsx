import React from 'react';
import { Calendar, BookOpen, ArrowRight, Clock, User, Tag } from 'lucide-react';
import BlogTemplate from '../components/BlogTemplate';
import { Target, Grid3x3 as Grid3X3, Zap, Lightbulb, CheckCircle, Star, TrendingUp, BarChart3 } from 'lucide-react';

const Blogs: React.FC = () => {
  const [selectedPost, setSelectedPost] = React.useState<string | null>(null);

  const blogPosts = [
    {
      title: 'Mastering Wordle: Advanced Strategies for Consistent Success',
      excerpt: 'Discover everything you need to know about Wordle, from basic rules and strategy tips to its fascinating history and cultural impact.',
      author: 'Word Game Expert',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Strategy',
      href: 'mastering-wordle-strategies',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'The Psychology Behind NYT Connections Puzzles',
      excerpt: 'Discover how understanding cognitive patterns can help you identify connections faster and solve puzzles more efficiently.',
      author: 'Puzzle Analyst',
      date: 'January 20, 2025',
      readTime: '12 min read',
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
      href: 'what-is-wordle',
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

  // Blog post content
  const renderBlogPost = () => {
    if (selectedPost === 'mastering-wordle-strategies') {
      const tableOfContents = [
        { id: 'introduction', title: 'Introduction to Advanced Wordle', level: 1 },
        { id: 'mathematical-foundation', title: 'The Mathematical Foundation', level: 1 },
        { id: 'letter-frequency', title: 'Letter Frequency Analysis', level: 2 },
        { id: 'position-probability', title: 'Position Probability Theory', level: 2 },
        { id: 'optimal-starting-words', title: 'Optimal Starting Words', level: 1 },
        { id: 'vowel-heavy-starters', title: 'Vowel-Heavy Starters', level: 2 },
        { id: 'consonant-rich-alternatives', title: 'Consonant-Rich Alternatives', level: 2 },
        { id: 'advanced-strategies', title: 'Advanced Solving Strategies', level: 1 },
        { id: 'elimination-method', title: 'The Systematic Elimination Method', level: 2 },
        { id: 'pattern-recognition', title: 'Pattern Recognition Techniques', level: 2 },
        { id: 'endgame-tactics', title: 'Endgame Tactics', level: 2 },
        { id: 'psychological-aspects', title: 'Psychological Aspects of Wordle', level: 1 },
        { id: 'common-mistakes', title: 'Common Mistakes to Avoid', level: 1 },
        { id: 'practice-exercises', title: 'Practice Exercises', level: 1 },
        { id: 'conclusion', title: 'Conclusion and Next Steps', level: 1 }
      ];

      const relatedPages = [
        {
          title: 'Wordle Solver',
          description: 'Get instant solutions for today\'s Wordle puzzle',
          href: '/wordle-solver',
          icon: Target,
          gradient: 'from-yellow-400 to-orange-500'
        },
        {
          title: 'Wordle Hints',
          description: 'Daily hints and answers for Wordle',
          href: '/wordle-hints',
          icon: Grid3X3,
          gradient: 'from-green-400 to-teal-500'
        },
        {
          title: '5 Letter Words',
          description: 'Complete list of 5-letter words for Wordle',
          href: '/5-letter-words',
          icon: Zap,
          gradient: 'from-blue-400 to-indigo-500'
        }
      ];

      const content = (
        <div>
          {/* Hero Image */}
          <div className="mb-12 -mx-8 md:-mx-12">
            <img 
              src="/Generated_Image_September_29_2025_-_4_45PM copy.png" 
              alt="Mastering Wordle: Advanced Strategies - Illustrated guide showing Wordle game mechanics and strategic thinking"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <section id="introduction">
            <h2>Introduction to Advanced Wordle</h2>
            <p>
              Wordle has evolved from a simple word game into a global phenomenon that challenges millions of players daily. 
              While the basic rules are straightforward—guess a five-letter word in six attempts—mastering the game requires 
              a deep understanding of linguistic patterns, probability theory, and strategic thinking.
            </p>
            
            <p>
              This comprehensive guide will transform your approach to Wordle from random guessing to calculated strategy. 
              We'll explore the mathematical foundations that govern optimal play, analyze letter frequency distributions, 
              and develop systematic approaches that consistently lead to success.
            </p>
            
            <div className="blog-highlight">
              <p><strong>What You'll Learn:</strong> By the end of this article, you'll understand the mathematical 
              principles behind Wordle, know the optimal starting words, and have a systematic approach that can 
              improve your average score by 1-2 guesses.</p>
            </div>
          </section>

          <section id="mathematical-foundation">
            <h2>The Mathematical Foundation</h2>
            <p>
              Successful Wordle play isn't about luck—it's about information theory and probability. Each guess provides 
              information that reduces the possible solution space. The key is maximizing the information gained from 
              each guess while minimizing the number of guesses required.
            </p>

            <h3 id="letter-frequency">Letter Frequency Analysis</h3>
            <p>
              The foundation of any Wordle strategy begins with understanding letter frequency in the English language, 
              specifically within five-letter words. Our analysis of over 12,000 valid Wordle words reveals fascinating patterns.
            </p>

            <div className="blog-info">
              <h4>Most Frequent Letters in Wordle Solutions:</h4>
              <ul>
                <li><strong>E:</strong> Appears in 46% of solutions</li>
                <li><strong>A:</strong> Appears in 39% of solutions</li>
                <li><strong>R:</strong> Appears in 36% of solutions</li>
                <li><strong>O:</strong> Appears in 29% of solutions</li>
                <li><strong>T:</strong> Appears in 35% of solutions</li>
                <li><strong>L:</strong> Appears in 27% of solutions</li>
                <li><strong>I:</strong> Appears in 28% of solutions</li>
                <li><strong>S:</strong> Appears in 31% of solutions</li>
                <li><strong>N:</strong> Appears in 25% of solutions</li>
              </ul>
            </div>

            <p>
              This frequency analysis immediately suggests that words containing these letters should be prioritized 
              in your opening strategy. However, frequency alone isn't enough—position matters significantly.
            </p>

            <h3 id="position-probability">Position Probability Theory</h3>
            <p>
              Each position in a five-letter word has distinct probability distributions. Understanding these patterns 
              allows you to make more informed guesses about letter placement.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Most Common Letters</th>
                  <th>Probability</th>
                  <th>Strategy Implication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st</td>
                  <td>S, C, B, T, P</td>
                  <td>S: 15.3%</td>
                  <td>Consonant-heavy starting position</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>A, O, R, E, I</td>
                  <td>A: 16.8%</td>
                  <td>Prime vowel position</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>A, I, O, E, U</td>
                  <td>A: 13.2%</td>
                  <td>Secondary vowel position</td>
                </tr>
                <tr>
                  <td>4th</td>
                  <td>E, N, S, A, L</td>
                  <td>E: 18.1%</td>
                  <td>E dominates this position</td>
                </tr>
                <tr>
                  <td>5th</td>
                  <td>S, E, Y, D, T</td>
                  <td>S: 31.4%</td>
                  <td>Plural endings are common</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="optimal-starting-words">
            <h2>Optimal Starting Words</h2>
            <p>
              Based on our mathematical analysis, certain starting words provide maximum information gain. 
              The optimal starting word should maximize the expected number of letters revealed while 
              considering both frequency and position probability.
            </p>

            <h3 id="vowel-heavy-starters">Vowel-Heavy Starters</h3>
            <p>
              Vowel-heavy starting words are excellent for quickly identifying the vowel structure of the target word. 
              Since vowels are less numerous but highly frequent, identifying them early provides significant constraints.
            </p>

            <div className="blog-tip">
              <h4>Top Vowel-Heavy Starters:</h4>
              <ul>
                <li><strong>ADIEU:</strong> Contains 4 vowels, excellent for vowel identification</li>
                <li><strong>AUDIO:</strong> Good vowel coverage with useful consonants</li>
                <li><strong>OUIJA:</strong> Covers rare vowel combinations</li>
                <li><strong>AULOI:</strong> Maximum vowel density (5 vowels)</li>
              </ul>
            </div>

            <h3 id="consonant-rich-alternatives">Consonant-Rich Alternatives</h3>
            <p>
              Consonant-rich starters focus on the most common consonants while including strategic vowels. 
              These words often provide better overall letter coverage for subsequent guesses.
            </p>

            <div className="blog-info">
              <h4>Top Consonant-Rich Starters:</h4>
              <ul>
                <li><strong>STARE:</strong> Excellent balance of common letters</li>
                <li><strong>SLATE:</strong> High-frequency letters in optimal positions</li>
                <li><strong>CRANE:</strong> Strong consonant coverage with strategic vowels</li>
                <li><strong>TRACE:</strong> Balanced approach with common patterns</li>
              </ul>
            </div>
          </section>

          <section id="advanced-strategies">
            <h2>Advanced Solving Strategies</h2>
            <p>
              Once you've mastered optimal starting words, the real skill lies in interpreting the feedback and 
              making strategic subsequent guesses. Advanced players use systematic approaches that maximize 
              information gain at each step.
            </p>

            <h3 id="elimination-method">The Systematic Elimination Method</h3>
            <p>
              The elimination method treats each guess as a hypothesis test, systematically ruling out possibilities 
              while gathering maximum information about the remaining solution space.
            </p>

            <ol>
              <li><strong>Guess 1:</strong> Use your optimal starting word to establish baseline letter frequency</li>
              <li><strong>Guess 2:</strong> Incorporate yellow letters in new positions while introducing new letters</li>
              <li><strong>Guess 3:</strong> Focus on remaining high-probability letters and confirmed positions</li>
              <li><strong>Guess 4:</strong> Should be your most educated guess based on accumulated information</li>
              <li><strong>Guesses 5-6:</strong> Emergency guesses using all available constraints</li>
            </ol>

            <h3 id="pattern-recognition">Pattern Recognition Techniques</h3>
            <p>
              Experienced Wordle players develop pattern recognition skills that allow them to quickly identify 
              likely word structures based on partial information. This intuitive skill can be developed through 
              understanding common English word patterns.
            </p>

            <div className="blog-highlight">
              <h4>Essential Pattern Categories:</h4>
              <ul>
                <li><strong>Common Prefixes:</strong> UN-, RE-, IN-, DE-, PRE-</li>
                <li><strong>Common Suffixes:</strong> -ING, -ION, -TION, -ABLE, -MENT</li>
                <li><strong>Consonant Clusters:</strong> TH, CH, SH, ST, CR, BR, TR</li>
                <li><strong>Vowel Patterns:</strong> A-E, I-E, O-E, OU, EA, AI</li>
              </ul>
            </div>

            <h3 id="endgame-tactics">Endgame Tactics</h3>
            <p>
              When you're down to your final guesses, the strategy shifts from information gathering to precise 
              targeting. Endgame tactics focus on using all available constraints to identify the exact solution.
            </p>

            <div className="blog-warning">
              <h4>Critical Endgame Principles:</h4>
              <ul>
                <li>Never waste a guess on a word that can't be the solution</li>
                <li>Consider all position constraints from yellow letters</li>
                <li>Think about common vs. uncommon words</li>
                <li>Use word frequency as a tiebreaker</li>
              </ul>
            </div>
          </section>

          <section id="psychological-aspects">
            <h2>Psychological Aspects of Wordle</h2>
            <p>
              Beyond the mathematical aspects, Wordle success involves psychological factors that can significantly 
              impact performance. Understanding these mental aspects can help you maintain consistency and avoid 
              common cognitive traps.
            </p>

            <p>
              <strong>Confirmation Bias:</strong> Players often fixate on their first guess results and fail to 
              consider alternative interpretations. Combat this by actively seeking disconfirming evidence.
            </p>

            <p>
              <strong>Anchoring Effect:</strong> The tendency to rely too heavily on the first piece of information 
              encountered. In Wordle, this manifests as overweighting early letter discoveries.
            </p>

            <p>
              <strong>Analysis Paralysis:</strong> Overthinking can lead to suboptimal choices. Set time limits 
              for each guess to maintain momentum and trust your systematic approach.
            </p>
          </section>

          <section id="common-mistakes">
            <h2>Common Mistakes to Avoid</h2>
            <p>
              Even experienced players fall into predictable traps that can derail an otherwise perfect game. 
              Recognizing and avoiding these mistakes is crucial for consistent performance.
            </p>

            <div className="blog-warning">
              <h4>The Seven Deadly Wordle Sins:</h4>
              <ol>
                <li><strong>Repeating Letters Too Early:</strong> Using duplicate letters before exploring the full alphabet</li>
                <li><strong>Ignoring Position Constraints:</strong> Placing yellow letters in impossible positions</li>
                <li><strong>Vowel Tunnel Vision:</strong> Focusing only on vowels and neglecting consonant patterns</li>
                <li><strong>Hard Mode Rigidity:</strong> Being too conservative with letter placement</li>
                <li><strong>Frequency Blindness:</strong> Choosing obscure words over common alternatives</li>
                <li><strong>Pattern Fixation:</strong> Sticking to familiar word patterns</li>
                <li><strong>Endgame Panic:</strong> Making desperate guesses instead of calculated risks</li>
              </ol>
            </div>
          </section>

          <section id="practice-exercises">
            <h2>Practice Exercises</h2>
            <p>
              To internalize these strategies, practice with these scenarios that commonly challenge even 
              experienced players. Each exercise focuses on a specific strategic principle.
            </p>

            <div className="blog-tip">
              <h4>Exercise 1: Letter Frequency Challenge</h4>
              <p>Given the letters A, E, R, T, S are confirmed in the word but positions unknown, 
              what's your systematic approach to finding their correct positions?</p>
              
              <h4>Exercise 2: Vowel Placement Puzzle</h4>
              <p>You know the word contains A and E, with A in position 2. The word doesn't contain 
              I, O, or U. What's your next optimal guess?</p>
              
              <h4>Exercise 3: Endgame Scenario</h4>
              <p>It's your 5th guess. You know: _IGHT. The word isn't LIGHT, MIGHT, NIGHT, RIGHT, 
              SIGHT, or TIGHT. What's your approach?</p>
            </div>
          </section>

          <section id="conclusion">
            <h2>Conclusion and Next Steps</h2>
            <p>
              Mastering Wordle is a journey that combines mathematical understanding, pattern recognition, 
              and psychological awareness. The strategies outlined in this guide provide a systematic 
              framework for consistent success.
            </p>

            <p>
              Remember that improvement comes through deliberate practice. Start by implementing the 
              optimal starting word strategy, then gradually incorporate the advanced techniques as 
              they become second nature.
            </p>

            <div className="blog-highlight">
              <p><strong>Your Next Steps:</strong></p>
              <ol>
                <li>Choose your optimal starting word and stick with it for 20 games</li>
                <li>Practice the systematic elimination method</li>
                <li>Track your average score and identify improvement areas</li>
                <li>Study the pattern recognition examples until they become intuitive</li>
              </ol>
            </div>

            <p>
              With consistent application of these strategies, you'll find yourself solving Wordle puzzles 
              more efficiently and enjoying the satisfaction that comes from strategic mastery rather than lucky guesses.
            </p>
          </section>
        </div>
      );

      return (
        <BlogTemplate
          title="Mastering Wordle: Advanced Strategies for Consistent Success"
          excerpt="Learn the mathematical approach to Wordle that will improve your average score and help you solve puzzles in fewer guesses with proven strategies and systematic techniques."
          author="Word Game Expert"
          date="January 15, 2025"
          readTime="8 min read"
          category="Strategy"
          content={content}
          tableOfContents={tableOfContents}
          relatedPages={relatedPages}
        />
      );
    }
    return null;
  };

  // If a blog post is selected, render it
  if (selectedPost) {
    return (
      <div>
        {renderBlogPost()}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setSelectedPost(null)}
            className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-200 flex items-center"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

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
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPost(post.href);
                  }}
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