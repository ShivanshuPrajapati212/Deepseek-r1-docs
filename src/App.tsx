import React, { useState, useEffect } from 'react';
import { Search, Menu, Book, Zap, Code, MessageSquare, Shield, X, Cpu, BarChart, Terminal, Cloud, Lightbulb, Users, HelpCircle } from 'lucide-react';
import GettingStarted from './pages/GettingStarted';
import APIReference from './pages/APIReference';
import Examples from './pages/Examples';
import Security from './pages/Security';
import ModelArchitecture from './pages/ModelArchitecture';
import Performance from './pages/Performance';
import AdvancedUsage from './pages/AdvancedUsage';
import Deployment from './pages/Deployment';
import PromptEngineering from './pages/PromptEngineering';
import Community from './pages/Community';
import Troubleshooting from './pages/Troubleshooting';

const SIDEBAR_ITEMS = [
  { title: 'Getting Started', icon: Zap, component: GettingStarted },
  { title: 'Model Architecture', icon: Cpu, component: ModelArchitecture },
  { title: 'Performance', icon: BarChart, component: Performance },
  { title: 'API Reference', icon: Code, component: APIReference },
  { title: 'Advanced Usage', icon: Terminal, component: AdvancedUsage },
  { title: 'Deployment', icon: Cloud, component: Deployment },
  { title: 'Prompt Engineering', icon: Lightbulb, component: PromptEngineering },
  { title: 'Examples', icon: MessageSquare, component: Examples },
  { title: 'Security', icon: Shield, component: Security },
  { title: 'Community', icon: Users, component: Community },
  { title: 'Troubleshooting', icon: HelpCircle, component: Troubleshooting },
];

// Enhanced search index with more keywords and descriptions for better SEO
const SEARCH_INDEX = [
  { 
    title: 'Getting Started',
    keywords: ['installation', 'setup', 'quickstart', 'ollama', 'model', 'introduction', 'getting started with deepseek', 'how to install deepseek', 'deepseek setup guide'],
    description: 'Learn how to install and set up DeepSeek-R1, an advanced open-source AI model with 671B parameters.'
  },
  { 
    title: 'Model Architecture',
    keywords: ['moe', 'parameters', 'experts', 'architecture', 'inference', 'design', 'mixture of experts', 'model structure', 'neural network', 'deep learning'],
    description: 'Explore DeepSeek-R1\'s Mixture of Experts (MoE) architecture and how it manages 671B parameters.'
  },
  { 
    title: 'Performance',
    keywords: ['benchmarks', 'comparison', 'metrics', 'evaluation', 'speed', 'accuracy', 'model performance', 'inference speed', 'benchmark results', 'optimization'],
    description: 'Detailed performance metrics and benchmarks for DeepSeek-R1 across various tasks.'
  },
  { 
    title: 'API Reference',
    keywords: ['api', 'authentication', 'endpoints', 'parameters', 'chat', 'completion', 'rest api', 'api documentation', 'integration', 'api key'],
    description: 'Complete API documentation for integrating DeepSeek-R1 into your applications.'
  },
  { 
    title: 'Advanced Usage',
    keywords: ['advanced', 'configuration', 'optimization', 'fine-tuning', 'customization', 'advanced features', 'model configuration', 'expert settings'],
    description: 'Advanced techniques and configurations for getting the most out of DeepSeek-R1.'
  },
  { 
    title: 'Deployment',
    keywords: ['deployment', 'vps', 'server', 'cloud', 'scaling', 'production', 'docker', 'kubernetes', 'server setup', 'cloud deployment'],
    description: 'Guide for deploying DeepSeek-R1 in production environments and scaling strategies.'
  },
  { 
    title: 'Prompt Engineering',
    keywords: ['prompts', 'techniques', 'optimization', 'templates', 'best practices', 'prompt design', 'prompt examples', 'effective prompting'],
    description: 'Best practices and techniques for crafting effective prompts with DeepSeek-R1.'
  },
  { 
    title: 'Examples',
    keywords: ['code', 'examples', 'chat', 'streaming', 'reasoning', 'templates', 'sample code', 'implementation examples', 'use cases'],
    description: 'Practical code examples and use cases demonstrating DeepSeek-R1 capabilities.'
  },
  { 
    title: 'Security',
    keywords: ['security', 'vulnerabilities', 'best practices', 'monitoring', 'validation', 'safety measures', 'security protocols', 'risk mitigation'],
    description: 'Security considerations and best practices for using DeepSeek-R1 safely.'
  },
  { 
    title: 'Community',
    keywords: ['community', 'resources', 'contributions', 'discord', 'github', 'forum', 'support', 'collaboration', 'developers'],
    description: 'Join the DeepSeek community and explore available resources and support.'
  },
  { 
    title: 'Troubleshooting',
    keywords: ['troubleshooting', 'errors', 'faq', 'common issues', 'solutions', 'problem solving', 'debugging', 'error handling'],
    description: 'Solutions for common issues and frequently asked questions about DeepSeek-R1.'
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('Getting Started');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Enhanced search functionality with better relevance scoring
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = SEARCH_INDEX
      .map(item => {
        // Calculate relevance score
        const titleMatch = item.title.toLowerCase().includes(query) ? 3 : 0;
        const descriptionMatch = item.description.toLowerCase().includes(query) ? 2 : 0;
        const keywordMatches = item.keywords.filter(keyword => 
          keyword.toLowerCase().includes(query)
        ).length;
        
        const score = titleMatch + descriptionMatch + keywordMatches;
        
        return {
          title: item.title,
          score
        };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.title);

    setSearchResults(results);
    setIsSearching(true);
  }, [searchQuery]);

  const handleSearchResultClick = (title: string) => {
    setActiveSection(title);
    setSearchQuery('');
    setIsSearching(false);
  };

  const ActiveComponent = SIDEBAR_ITEMS.find(item => item.title === activeSection)?.component || GettingStarted;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          fixed inset-y-0 left-0 z-30
          w-72 bg-card border-r border-border
          transition-transform duration-300
          md:translate-x-0 md:relative
        `}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Book className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">DeepSeek Docs</h1>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-secondary rounded-lg md:hidden"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.title}
              onClick={() => {
                setActiveSection(item.title);
                setIsMenuOpen(false);
              }}
              className={`
                w-full flex items-center space-x-3 p-3 rounded-lg transition-colors
                ${activeSection === item.title 
                  ? 'bg-secondary text-secondary-foreground' 
                  : 'hover:bg-secondary/50 text-muted-foreground'}
              `}
              aria-label={`Navigate to ${item.title}`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-card border-b border-border">
          <div className="flex items-center p-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-secondary rounded-lg md:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex-1 mx-4">
              <div className="relative max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-secondary border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Search documentation"
                />
                {/* Search Results Dropdown */}
                {isSearching && searchResults.length > 0 && (
                  <div 
                    className="absolute mt-2 w-full bg-card rounded-lg border border-border shadow-lg overflow-hidden"
                    role="listbox"
                  >
                    {searchResults.map((result) => (
                      <button
                        key={result}
                        onClick={() => handleSearchResultClick(result)}
                        className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center space-x-2"
                        role="option"
                      >
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <span>{result}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full overflow-auto">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}

export default App;