import React, { useState, useMemo } from 'react';
import { Article, Category } from '../types/blog';
import { CATEGORIES } from '../data/articles';
import { ArticleCard } from './ArticleCard';
import { Search, SlidersHorizontal, LayoutGrid, ListFilter, BookMarked } from 'lucide-react';

interface ArchiveIndexProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
  savedArticleIds: string[];
  onToggleSave: (id: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const ArchiveIndex: React.FC<ArchiveIndexProps> = ({
  articles,
  onReadArticle,
  savedArticleIds,
  onToggleSave,
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'readTime' | 'wordCount' | 'title'>('date');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  // Filter & Search logic
  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const matchesCategory =
          selectedCategory === 'All' || article.category === selectedCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
          !q ||
          article.title.toLowerCase().includes(q) ||
          article.subtitle.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.author.name.toLowerCase().includes(q);
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'wordCount') {
          return b.wordCount - a.wordCount;
        }
        if (sortBy === 'readTime') {
          return parseInt(b.readTime) - parseInt(a.readTime);
        }
        // default date order (as in array order 1 to 10)
        return 0;
      });
  }, [articles, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-8">
      {/* Category Segmented Control & Search Bar */}
      <div className="space-y-4">
        {/* Title & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-stone-200">
          <div>
            <h2 className="text-2xl font-serif font-medium text-stone-900">
              The Architectural Archive
            </h2>
            <p className="text-xs text-stone-500 font-sans mt-0.5">
              Ten peer-reviewed inquiries into tectonic permanence and material culture
            </p>
          </div>
          <div className="text-xs font-mono text-stone-400 tabular-nums">
            Showing {filteredArticles.length} of {articles.length} Monographs
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs (Segmented Buttons - allowed for interactive filtering per section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-md">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search & View Toggles */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search archive..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-8 pr-3 py-1.5 bg-white border border-stone-200 rounded focus:border-stone-900 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs py-1.5 px-2 bg-white border border-stone-200 rounded text-stone-700 focus:border-stone-900 focus:outline-none"
            >
              <option value="date">Latest Issue</option>
              <option value="readTime">Read Time</option>
              <option value="wordCount">Word Count</option>
              <option value="title">Alphabetical</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-stone-200 rounded bg-white p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-stone-900 text-stone-50' : 'text-stone-500 hover:text-stone-900'}`}
                title="Grid layout"
                aria-label="Grid layout"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-1.5 rounded ${viewMode === 'compact' ? 'bg-stone-900 text-stone-50' : 'text-stone-500 hover:text-stone-900'}`}
                title="Ledger list layout"
                aria-label="Ledger list layout"
              >
                <ListFilter className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Display */}
      {filteredArticles.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-white/50 border border-dashed border-stone-200 rounded">
          <p className="text-sm font-serif text-stone-600">
            No monographs found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onSelectCategory('All');
            }}
            className="text-xs font-mono text-stone-900 underline hover:opacity-80"
          >
            Reset query filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onReadArticle={onReadArticle}
              isSaved={savedArticleIds.includes(article.id)}
              onToggleSave={onToggleSave}
              viewMode="grid"
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-stone-200 rounded divide-y divide-stone-100 px-6 py-2">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onReadArticle={onReadArticle}
              isSaved={savedArticleIds.includes(article.id)}
              onToggleSave={onToggleSave}
              viewMode="compact"
            />
          ))}
        </div>
      )}
    </div>
  );
};
