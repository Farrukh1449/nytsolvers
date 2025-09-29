import React from 'react';
import BlogTemplate from '../components/BlogTemplate';
import { Target, Grid3x3 as Grid3X3, Zap, Lightbulb, CheckCircle, Star, TrendingUp, BarChart3 } from 'lucide-react';

const WhatIsWordleBlog: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'What is Wordle?', level: 1 },
    { id: 'how-to-play', title: 'How to Play Wordle', level: 1 },
    { id: 'basic-rules', title: 'Basic Rules and Mechanics', level: 2 },
    { id: 'color-system', title: 'Understanding the Color System', level: 2 },
    { id: 'game-example', title: 'Step-by-Step Game Example', level: 2 },
    { id: 'history', title: 'The History of Wordle', level: 1 },
    { id: 'creator-story', title: 'Josh Wardle\'s Creation Story', level: 2 },
    { id: 'viral-phenomenon', title: 'How Wordle Became a Viral Phenomenon', level: 2 },
    { id: 'nyt-acquisition', title: 'The New York Times Acquisition', level: 2 },
    { id: 'strategy-tips', title: 'Essential Strategy Tips', level: 1 },
    { id: 'starting-words', title: 'Best Starting Words', level: 2 },
    { id: 'letter-frequency', title: 'Letter Frequency Strategy', level: 2 },
    { id: 'common-patterns', title: 'Common Word Patterns', level: 2 },
    { id: 'wordle-variants', title: 'Popular Wordle Variants', level: 1 },
    { id: 'cultural-impact', title: 'Cultural Impact and Community', level: 1 },
    { id: 'conclusion', title: 'Why Wordle Continues to Captivate', level: 1 }
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
          src="/Generated_Image_September_29_2025_-_4_45PM.png" 
          alt="What is Wordle? - Illustrated guide showing the Wordle game interface with players solving puzzles"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      <section id="introduction">
        <h2>What is Wordle?</h2>
        <p>
          Wordle is a daily word puzzle game that has captured the hearts and minds of millions of players worldwide. 
          Created by Josh Wardle (hence the name), this deceptively simple game challenges players to guess a 
          five-letter word within six attempts, using a clever color-coded feedback system that guides players 
          toward the solution.
        </p>
        
        <p>
          What makes Wordle special isn't just its elegant simplicity, but its social aspect. With only one puzzle 
          per day, players around the world solve the same challenge, creating a shared experience that has spawned 
          countless discussions, strategies, and even academic studies on optimal play.
        </p>
        
        <div className="blog-highlight">
          <p><strong>Key Facts:</strong> Wordle is free to play, available on the New York Times website, 
          and features exactly one puzzle per day. No apps, no subscriptions, no ads—just pure word puzzle fun.</p>
        </div>
      </section>

      <section id="how-to-play">
        <h2>How to Play Wordle</h2>
        <p>
          Playing Wordle is straightforward, but mastering it requires strategy and understanding. The game 
          presents you with a 6x5 grid where you have six attempts to guess a five-letter word. Each guess 
          must be a valid English word, and after each guess, the game provides crucial feedback through 
          its color-coding system.
        </p>

        <h3 id="basic-rules">Basic Rules and Mechanics</h3>
        <p>
          The fundamental rules of Wordle are elegantly simple, making the game accessible to players of all ages 
          while still providing depth for strategic thinking:
        </p>

        <div className="blog-info">
          <h4>Core Game Rules:</h4>
          <ul>
            <li><strong>Six Attempts:</strong> You have exactly six guesses to find the target word</li>
            <li><strong>Five Letters:</strong> All words are exactly five letters long</li>
            <li><strong>Valid Words Only:</strong> Each guess must be a legitimate English word</li>
            <li><strong>Daily Puzzle:</strong> One new puzzle is released every day at midnight</li>
            <li><strong>No Repeats:</strong> The same word won't appear as the answer for several years</li>
          </ul>
        </div>

        <h3 id="color-system">Understanding the Color System</h3>
        <p>
          Wordle's genius lies in its feedback system. After each guess, every letter in your word is colored 
          to provide specific information about the target word:
        </p>

        <table>
          <thead>
            <tr>
              <th>Color</th>
              <th>Meaning</th>
              <th>Strategy Implication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="inline-block w-4 h-4 bg-green-500 rounded mr-2"></span>Green</td>
              <td>Correct letter in correct position</td>
              <td>Keep this letter in this exact spot</td>
            </tr>
            <tr>
              <td><span className="inline-block w-4 h-4 bg-yellow-500 rounded mr-2"></span>Yellow</td>
              <td>Correct letter in wrong position</td>
              <td>Use this letter but try different positions</td>
            </tr>
            <tr>
              <td><span className="inline-block w-4 h-4 bg-gray-400 rounded mr-2"></span>Gray</td>
              <td>Letter not in the target word</td>
              <td>Eliminate this letter from future guesses</td>
            </tr>
          </tbody>
        </table>

        <h3 id="game-example">Step-by-Step Game Example</h3>
        <p>
          Let's walk through a typical Wordle game to illustrate how the feedback system works in practice. 
          Imagine today's word is "PLANT" and we're using the popular starting word "STARE":
        </p>

        <div className="blog-tip">
          <h4>Example Game Walkthrough:</h4>
          <ol>
            <li><strong>Guess 1: STARE</strong>
              <ul>
                <li>S - Gray (not in PLANT)</li>
                <li>T - Yellow (in PLANT but not position 2)</li>
                <li>A - Yellow (in PLANT but not position 3)</li>
                <li>R - Gray (not in PLANT)</li>
                <li>E - Gray (not in PLANT)</li>
              </ul>
            </li>
            <li><strong>Guess 2: PLANT</strong>
              <ul>
                <li>P - Green (correct position)</li>
                <li>L - Green (correct position)</li>
                <li>A - Green (correct position)</li>
                <li>N - Green (correct position)</li>
                <li>T - Green (correct position)</li>
              </ul>
            </li>
          </ol>
          <p>Success in just two guesses! The yellow letters from the first guess guided us to the correct answer.</p>
        </div>
      </section>

      <section id="history">
        <h2>The History of Wordle</h2>
        <p>
          Understanding Wordle's origin story helps explain why it became such a cultural phenomenon. The game's 
          creation was driven by love, refined through family testing, and shared with the world at just the 
          right moment in history.
        </p>

        <h3 id="creator-story">Josh Wardle's Creation Story</h3>
        <p>
          Josh Wardle, a software engineer from Wales, created Wordle in 2021 as a personal gift for his partner, 
          Palak Shah, who loved word games. The name "Wordle" is a playful combination of his surname and the 
          concept of word puzzles. Initially, the game was just a private creation shared between the couple.
        </p>

        <p>
          Wardle refined the game based on feedback from his family, carefully curating the word list to remove 
          obscure terms and potentially offensive words. This attention to accessibility and inclusivity would 
          prove crucial to the game's eventual success.
        </p>

        <h3 id="viral-phenomenon">How Wordle Became a Viral Phenomenon</h3>
        <p>
          In October 2021, Wardle released Wordle to the public as a free web game. The timing was perfect—people 
          were looking for simple, shared experiences during the pandemic. The game's built-in sharing feature, 
          which allows players to post their results as colored emoji grids without spoilers, proved to be genius.
        </p>

        <div className="blog-highlight">
          <p><strong>Viral Growth Timeline:</strong></p>
          <ul>
            <li><strong>October 2021:</strong> Public release with 90 players</li>
            <li><strong>November 2021:</strong> 300,000 daily players</li>
            <li><strong>January 2022:</strong> Over 2 million daily players</li>
            <li><strong>February 2022:</strong> Acquired by The New York Times</li>
          </ul>
        </div>

        <h3 id="nyt-acquisition">The New York Times Acquisition</h3>
        <p>
          In January 2022, The New York Times purchased Wordle for an undisclosed seven-figure sum. The acquisition 
          was part of the Times' strategy to expand their games portfolio and attract younger subscribers. 
          Importantly, the Times committed to keeping Wordle free for all players, at least initially.
        </p>

        <p>
          Under New York Times ownership, Wordle has maintained its core appeal while benefiting from professional 
          editorial oversight and technical infrastructure. The game continues to be updated daily with carefully 
          selected words that maintain the original's spirit and difficulty balance.
        </p>
      </section>

      <section id="strategy-tips">
        <h2>Essential Strategy Tips</h2>
        <p>
          While Wordle can be enjoyed casually, understanding basic strategy can significantly improve your 
          success rate and reduce your average number of guesses. These tips are based on mathematical analysis 
          and the collective wisdom of millions of players.
        </p>

        <h3 id="starting-words">Best Starting Words</h3>
        <p>
          Your first guess is crucial because it sets the foundation for all subsequent guesses. The best starting 
          words maximize the information you gain about the target word by including the most common letters in 
          optimal positions.
        </p>

        <div className="blog-tip">
          <h4>Top Starting Words (Mathematically Proven):</h4>
          <ul>
            <li><strong>STARE:</strong> Excellent balance of common vowels and consonants</li>
            <li><strong>SLATE:</strong> High-frequency letters in statistically optimal positions</li>
            <li><strong>ADIEU:</strong> Maximizes vowel coverage for quick vowel identification</li>
            <li><strong>AUDIO:</strong> Good vowel distribution with useful consonants</li>
            <li><strong>CRANE:</strong> Strong consonant coverage with strategic vowel placement</li>
          </ul>
        </div>

        <h3 id="letter-frequency">Letter Frequency Strategy</h3>
        <p>
          Understanding which letters appear most frequently in five-letter words gives you a significant 
          advantage. This knowledge should guide both your starting word choice and subsequent guesses.
        </p>

        <div className="blog-info">
          <h4>Most Common Letters in Wordle Solutions:</h4>
          <ul>
            <li><strong>Vowels:</strong> E (13%), A (9%), I (8%), O (7%), U (4%)</li>
            <li><strong>Consonants:</strong> R (9%), T (9%), L (7%), S (6%), N (6%)</li>
            <li><strong>Rare Letters:</strong> Q, X, Z appear in less than 1% of solutions</li>
          </ul>
        </div>

        <h3 id="common-patterns">Common Word Patterns</h3>
        <p>
          Recognizing common English word patterns can help you make educated guesses when you have partial 
          information. These patterns are particularly useful in your final guesses when you need to be precise.
        </p>

        <div className="blog-warning">
          <h4>Essential Word Patterns to Remember:</h4>
          <ul>
            <li><strong>Common Endings:</strong> -ING, -ION, -TION, -ABLE, -MENT</li>
            <li><strong>Common Beginnings:</strong> UN-, RE-, IN-, DE-, PRE-</li>
            <li><strong>Consonant Clusters:</strong> TH, CH, SH, ST, CR, BR, TR</li>
            <li><strong>Vowel Combinations:</strong> EA, AI, OU, IE, OO</li>
          </ul>
        </div>
      </section>

      <section id="wordle-variants">
        <h2>Popular Wordle Variants</h2>
        <p>
          Wordle's success has inspired numerous variants and spin-offs, each adding unique twists to the 
          original formula. These games have expanded the word puzzle genre and created new communities 
          of dedicated players.
        </p>

        <table>
          <thead>
            <tr>
              <th>Game</th>
              <th>Unique Feature</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Quordle</strong></td>
              <td>Solve four Wordle puzzles simultaneously</td>
              <td>Hard</td>
            </tr>
            <tr>
              <td><strong>Octordle</strong></td>
              <td>Eight Wordle puzzles at once</td>
              <td>Expert</td>
            </tr>
            <tr>
              <td><strong>Wordhurdle</strong></td>
              <td>Six-letter words instead of five</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td><strong>Absurdle</strong></td>
              <td>The word changes to avoid your guesses</td>
              <td>Extreme</td>
            </tr>
            <tr>
              <td><strong>Worldle</strong></td>
              <td>Geography-based guessing with countries</td>
              <td>Medium</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cultural-impact">
        <h2>Cultural Impact and Community</h2>
        <p>
          Wordle's impact extends far beyond gaming. It has influenced social media behavior, inspired academic 
          research, and created a global community of word puzzle enthusiasts. The game's sharing mechanism, 
          using colored emoji squares, became a new form of digital communication.
        </p>

        <p>
          The daily nature of Wordle creates a unique shared experience. Unlike other games where players can 
          binge-play, Wordle's one-puzzle-per-day limit creates anticipation and makes each game feel special. 
          This scarcity has contributed significantly to its lasting appeal.
        </p>

        <div className="blog-highlight">
          <p><strong>Social Media Impact:</strong> Wordle results shared on Twitter and other platforms created 
          a new form of spoiler-free puzzle sharing. The colored grid system became instantly recognizable and 
          spawned countless memes and discussions about strategy.</p>
        </div>

        <p>
          Educational institutions have embraced Wordle as a teaching tool for vocabulary, probability, and 
          strategic thinking. The game's mathematical underpinnings make it an excellent case study for 
          information theory and optimization problems.
        </p>
      </section>

      <section id="conclusion">
        <h2>Why Wordle Continues to Captivate</h2>
        <p>
          More than three years after its creation, Wordle remains a daily ritual for millions of players. 
          Its success lies in the perfect balance of simplicity and depth, accessibility and challenge, 
          individual play and social sharing.
        </p>

        <p>
          The game taps into fundamental human desires: the satisfaction of solving puzzles, the joy of 
          learning and improvement, and the pleasure of shared experiences. In an increasingly complex 
          digital world, Wordle offers a moment of focused, mindful engagement that many find both 
          relaxing and stimulating.
        </p>

        <div className="blog-highlight">
          <p><strong>The Wordle Formula:</strong> Simple rules + Daily ritual + Social sharing + Perfect difficulty = 
          Enduring success. This formula has been attempted by many imitators, but few have captured the 
          magic of the original.</p>
        </div>

        <p>
          Whether you're a casual player enjoying a daily mental exercise or a strategy enthusiast analyzing 
          optimal play patterns, Wordle offers something special. It's a reminder that the best games often 
          come from the simplest ideas, executed with care and shared with love.
        </p>

        <p>
          As you continue your Wordle journey, remember that improvement comes through practice and reflection. 
          Each puzzle is an opportunity to refine your strategy, expand your vocabulary, and enjoy the 
          satisfaction that comes from solving a well-crafted challenge.
        </p>
      </section>
    </div>
  );

  return (
    <BlogTemplate
      title="What is Wordle? The Complete Guide to the World's Favorite Word Game"
      excerpt="Discover everything you need to know about Wordle, from basic rules and strategy tips to its fascinating history and cultural impact on millions of daily players worldwide."
      author="Word Game Expert"
      date="January 20, 2025"
      readTime="12 min read"
      category="Guide"
      content={content}
      tableOfContents={tableOfContents}
      relatedPages={relatedPages}
    />
  );
};

export default WhatIsWordleBlog;