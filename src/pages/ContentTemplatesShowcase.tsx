import React from 'react';
import { HowToUseTemplates } from '../components/HowToUseTemplates';
import { KeyFeaturesTemplates } from '../components/KeyFeaturesTemplates';
import { BenefitsTemplates } from '../components/BenefitsTemplates';
import { FAQTemplates } from '../components/FAQTemplates';

const sampleSteps = [
  {
    title: 'Enter Your Input',
    description: 'Type or paste your text into the intuitive input field designed for maximum efficiency and ease of use.'
  },
  {
    title: 'Configure Settings',
    description: 'Customize advanced options to match your specific needs and preferences with our powerful configuration tools.'
  },
  {
    title: 'Generate Results',
    description: 'Click the generate button and watch as our advanced algorithms process your input in real-time.'
  },
  {
    title: 'Export and Share',
    description: 'Save your results in multiple formats or share them directly with your team and collaborators.'
  }
];

const sampleFeatures = [
  {
    title: 'Lightning Fast Processing',
    description: 'Experience blazing-fast performance with our optimized algorithms that deliver results in milliseconds.'
  },
  {
    title: 'Advanced Security',
    description: 'Enterprise-grade encryption ensures your data remains private and secure at all times.'
  },
  {
    title: 'Smart Automation',
    description: 'Intelligent automation features save you time by handling repetitive tasks effortlessly.'
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work seamlessly with your team through integrated collaboration tools and live updates.'
  },
  {
    title: 'Customizable Workflows',
    description: 'Tailor every aspect of your workflow to match your unique requirements and preferences.'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Gain valuable insights with comprehensive analytics and detailed performance metrics.'
  }
];

const sampleBenefits = [
  {
    title: 'Save Time and Resources',
    description: 'Automate tedious tasks and focus on what matters most, reducing operational costs by up to 60%.'
  },
  {
    title: 'Boost Productivity',
    description: 'Streamline your workflow and accomplish more in less time with intelligent automation features.'
  },
  {
    title: 'Improve Accuracy',
    description: 'Eliminate human errors and ensure consistent, reliable results with every operation.'
  },
  {
    title: 'Scale Effortlessly',
    description: 'Grow your operations without limitations thanks to our cloud-based infrastructure.'
  },
  {
    title: 'Enhance Collaboration',
    description: 'Bring your team together with real-time sharing and seamless communication tools.'
  },
  {
    title: 'Stay Competitive',
    description: 'Leverage cutting-edge technology to stay ahead of the competition and meet market demands.'
  }
];

const sampleFAQs = [
  {
    question: 'How do I get started with the platform?',
    answer: 'Getting started is simple! Just sign up for a free account, complete the quick onboarding process, and you will have access to all basic features immediately. Our intuitive interface guides you through each step.'
  },
  {
    question: 'What pricing plans are available?',
    answer: 'We offer flexible pricing plans to suit every need, from individual users to large enterprises. Start with our free tier, or choose from Starter, Professional, or Enterprise plans with advanced features and priority support.'
  },
  {
    question: 'Is my data secure and private?',
    answer: 'Absolutely! We use bank-level encryption, secure data centers, and comply with international privacy standards including GDPR and CCPA. Your data is never shared with third parties without your explicit consent.'
  },
  {
    question: 'Can I integrate with other tools?',
    answer: 'Yes! Our platform offers extensive integration capabilities with popular tools and services through our REST API, webhooks, and pre-built connectors for platforms like Slack, Google Workspace, and Microsoft 365.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide comprehensive support including detailed documentation, video tutorials, email support, and live chat. Premium plans include priority support with dedicated account managers and 24/7 assistance.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period, and you can export all your data before leaving.'
  }
];

export default function ContentTemplatesShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Content Section Templates
            </h1>
            <p className="text-gray-300 text-2xl max-w-4xl mx-auto">
              Explore multiple unique, futuristic designs for How to Use, Key Features, Benefits, and FAQ sections
            </p>
          </div>
        </div>

        <div className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Use Section Templates</h2>
            <p className="text-gray-600 text-lg mb-8">Four completely different design approaches</p>
          </div>
        </div>

        <HowToUseTemplates steps={sampleSteps} template="gradient-cards" />

        <div className="h-20 bg-gradient-to-b from-teal-50 to-slate-900" />

        <HowToUseTemplates steps={sampleSteps} template="timeline" />

        <div className="h-20 bg-gradient-to-b from-slate-800 to-white" />

        <HowToUseTemplates steps={sampleSteps} template="grid-flow" />

        <div className="h-20 bg-gradient-to-b from-white to-purple-50" />

        <HowToUseTemplates steps={sampleSteps} template="interactive-stack" />

        <div className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features Section Templates</h2>
            <p className="text-gray-600 text-lg mb-8">Four distinct visual styles to showcase features</p>
          </div>
        </div>

        <KeyFeaturesTemplates features={sampleFeatures} template="floating-cards" />

        <div className="h-20 bg-gradient-to-b from-cyan-50 to-slate-900" />

        <KeyFeaturesTemplates features={sampleFeatures} template="hexagon-grid" />

        <div className="h-20 bg-gradient-to-b from-slate-900 to-white" />

        <KeyFeaturesTemplates features={sampleFeatures} template="spotlight" />

        <div className="h-20 bg-gradient-to-b from-white to-blue-900" />

        <KeyFeaturesTemplates features={sampleFeatures} template="wave-design" />

        <div className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits Section Templates</h2>
            <p className="text-gray-600 text-lg mb-8">Four innovative ways to present advantages</p>
          </div>
        </div>

        <BenefitsTemplates benefits={sampleBenefits} toolName="Our Platform" template="split-showcase" />

        <div className="h-20 bg-gradient-to-b from-teal-50 to-slate-900" />

        <BenefitsTemplates benefits={sampleBenefits} toolName="Our Platform" template="radial-cards" />

        <div className="h-20 bg-gradient-to-b from-slate-800 to-white" />

        <BenefitsTemplates benefits={sampleBenefits} toolName="Our Platform" template="diagonal-flow" />

        <div className="h-20 bg-gradient-to-b from-rose-50 to-indigo-900" />

        <BenefitsTemplates benefits={sampleBenefits} toolName="Our Platform" template="prismatic" />

        <div className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ Section Templates</h2>
            <p className="text-gray-600 text-lg mb-8">Four creative approaches to frequently asked questions</p>
          </div>
        </div>

        <FAQTemplates faqs={sampleFAQs} template="accordion-classic" />

        <div className="h-20 bg-gradient-to-b from-purple-50 to-slate-900" />

        <FAQTemplates faqs={sampleFAQs} template="cards-expandable" />

        <div className="h-20 bg-gradient-to-b from-slate-900 to-white" />

        <FAQTemplates faqs={sampleFAQs} template="split-layout" />

        <div className="h-20 bg-gradient-to-b from-white to-violet-900" />

        <FAQTemplates faqs={sampleFAQs} template="gradient-boxes" />

        <div className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Use These Templates?</h2>
            <p className="text-gray-300 text-xl mb-8">
              All templates are fully responsive, customizable, and production-ready. Simply import the component and pass your data.
            </p>
            <div className="bg-gray-800 rounded-2xl p-8 text-left">
              <code className="text-cyan-400 text-sm">
                {`import { HowToUseTemplates } from './components/HowToUseTemplates';\nimport { KeyFeaturesTemplates } from './components/KeyFeaturesTemplates';\nimport { BenefitsTemplates } from './components/BenefitsTemplates';\nimport { FAQTemplates } from './components/FAQTemplates';`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
