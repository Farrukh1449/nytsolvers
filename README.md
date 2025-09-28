# NYT Game Solvers Hub

A comprehensive web application providing solutions, hints, and tools for New York Times games and popular word puzzles. Built with React, TypeScript, and Tailwind CSS.

## 🎯 Live Demo

Visit the live application: [https://nyt-game-solvers-hub-lhjn.bolt.host](https://nyt-game-solvers-hub-lhjn.bolt.host)

## 🎮 Features

### NYT Game Solvers
- **Wordle Solver** - Advanced algorithm to find optimal Wordle solutions
- **Spelling Bee Solver** - Find all possible words and pangrams
- **Letter Boxed Solver** - Optimal word combinations for Letter Boxed puzzles
- **Connections Hints** - Daily hints for NYT Connections puzzles

### Daily Hints & Answers
- **Wordle Hints** - Daily hints and answers with strategy tips
- **Connections Hints** - Progressive hints for all difficulty levels
- **Spelling Bee Hints** - Theme hints and pangram reveals
- **Crossword Hints** - Daily crossword clues and solutions
- **Mini Crossword Hints** - Quick hints for the NYT Mini
- **Strands Hints** - Navigate today's Strands puzzle
- **Letter Boxed Hints** - Daily solutions and strategies

### Additional Solvers
- **Scrabble Word Finder** - High-scoring Scrabble words
- **Words With Friends Solver** - Optimal plays for WWF
- **Word Unscrambler** - Unscramble any letter combination
- **Anagram Solver** - Find all possible anagrams
- **Crossword Solver** - Solve crossword clues instantly
- **Jumble Solver** - Daily jumble puzzle solutions
- **Quordle Solver** - Solve four Wordle puzzles simultaneously

### Word Lists
Complete collections of words by length (3-12 letters) perfect for:
- Wordle practice and strategy
- Scrabble and word games
- Vocabulary building
- Crossword solving

### Educational Resources
- **Grammar Guide** - Comprehensive grammar lessons
- **Spelling Help** - Common misspelling corrections
- **Word Definitions** - Dictionary with pronunciations
- **Blog Articles** - Expert strategies and insights

## 🛠️ Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Bolt Hosting
- **Font:** Inter & Montserrat from Google Fonts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nyt-game-solvers-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Main navigation with dropdowns
│   ├── Hero.tsx        # Landing page hero section
│   ├── Footer.tsx      # Site footer with links
│   ├── SearchModal.tsx # Global search functionality
│   ├── BlogTemplate.tsx # Blog post template
│   ├── FeaturedSolvers.tsx # Featured solvers section
│   ├── SolutionsSection.tsx # Solutions showcase
│   └── AnswersSection.tsx # Daily answers section
├── pages/              # Individual page components
│   ├── solvers/        # Game solver pages
│   ├── hints/          # Daily hint pages
│   ├── words/          # Word list pages
│   └── resources/      # Educational resources
├── styles/             # CSS and styling
│   └── blog.css        # Blog-specific styles
└── index.css           # Global styles and animations
```

## 🎨 Design System

### Colors
- **Primary:** Teal (500-600) and Lime (500-600)
- **Secondary:** Blue, Purple, Yellow, Orange gradients
- **Neutral:** Gray scale for text and backgrounds

### Typography
- **Headings:** Montserrat (300-900 weights)
- **Body:** Inter (300-900 weights)
- **Code:** Monaco, Menlo, Ubuntu Mono

### Components
- Consistent 8px spacing system
- Rounded corners (8px, 12px, 16px)
- Gradient backgrounds and hover effects
- Smooth animations and transitions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

All components adapt seamlessly across devices with:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized typography scaling
- Collapsible navigation menus

## ⚡ Performance Features

- **Lazy Loading:** Components load on demand
- **Optimized Images:** Proper sizing and formats
- **Minimal Bundle:** Tree-shaking and code splitting
- **Fast Navigation:** Client-side routing
- **Smooth Animations:** Hardware-accelerated CSS

## 🎯 SEO Optimization

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions and titles
- Open Graph tags
- Structured data markup
- Fast loading times

## 🧪 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@nytsolvers.com or create an issue in the repository.

## 🙏 Acknowledgments

- New York Times for creating amazing word puzzles
- The word game community for inspiration
- Open source contributors and maintainers

---

Built with ❤️ for word game enthusiasts everywhere.