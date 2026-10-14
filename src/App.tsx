import React, { useState, useEffect } from 'react';
import { ARTICLES } from './data/articles';
import { Article } from './types/blog';
import { Header } from './components/Header';
import { HeroFeatured } from './components/HeroFeatured';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReader } from './components/ArticleReader';
import { ArchiveIndex } from './components/ArchiveIndex';
import { CuratorModal } from './components/CuratorModal';
import { SavedArticlesDrawer } from './components/SavedArticlesDrawer';
import { SubscribeModal } from './components/SubscribeModal';
import { Footer } from './components/Footer';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeView, setActiveView] = useState<'home' | 'archive'>('home');
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isCuratorModalOpen, setIsCuratorModalOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Load saved articles from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('terra_saved_articles');
    if (stored) {
      try {
        setSavedArticleIds(JSON.parse(stored));
      } catch {
        // fallback
      }
    }
  }, []);

  const handleToggleSave = (articleId: string) => {
    setSavedArticleIds((prev) => {
      let updated: string[];
      if (prev.includes(articleId)) {
        updated = prev.filter((id) => id !== articleId);
      } else {
        updated = [...prev, articleId];
      }
      localStorage.setItem('terra_saved_articles', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearAllSaved = () => {
    setSavedArticleIds([]);
    localStorage.removeItem('terra_saved_articles');
  };

  const savedArticlesList = ARTICLES.filter((a) => savedArticleIds.includes(a.id));

  const leadArticle = ARTICLES[0];
  const secondaryFeatured = [ARTICLES[1], ARTICLES[2]];
  const remainingArticles = ARTICLES.slice(3);

  // Read article handler
  const handleReadArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToJournal = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromNav = (cat: string) => {
    setSelectedCategory(cat);
    setActiveView('archive');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setSelectedArticle(null);
    setActiveView('home');
    setSelectedCategory('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewArchive = () => {
    setSelectedArticle(null);
    setActiveView('archive');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 font-sans">
      {/* Top Bar Header */}
      <Header
        onNavigateHome={handleNavigateHome}
        onOpenCurators={() => setIsCuratorModalOpen(true)}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenSubscribe={() => setIsSubscribeModalOpen(true)}
        savedCount={savedArticleIds.length}
        activeView={selectedArticle ? 'reader' : activeView}
        onViewArchive={handleViewArchive}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedArticle ? (
          /* Reader View */
          <ArticleReader
            article={selectedArticle}
            onBack={handleBackToJournal}
            isSaved={savedArticleIds.includes(selectedArticle.id)}
            onToggleSave={handleToggleSave}
            onNavigateToArticle={handleReadArticle}
            allArticles={ARTICLES}
          />
        ) : activeView === 'archive' ? (
          /* Dedicated Archive Index View */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <ArchiveIndex
              articles={ARTICLES}
              onReadArticle={handleReadArticle}
              savedArticleIds={savedArticleIds}
              onToggleSave={handleToggleSave}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        ) : (
          /* Editorial Home Front Page (3-tier Salience Pattern C from domain guidelines) */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
            {/* Tier 1: Lead Story Marquee Hero */}
            <HeroFeatured
              article={leadArticle}
              onReadArticle={handleReadArticle}
              isSaved={savedArticleIds.includes(leadArticle.id)}
              onToggleSave={handleToggleSave}
            />

            {/* Tier 2: Curated Secondary Pair */}
            <section className="border-b border-stone-200 pb-16">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 pb-3 border-b border-stone-200">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                    Curatorial Selection
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                    Craft & Vernacular Inquiries
                  </h2>
                </div>
                <button
                  onClick={handleViewArchive}
                  className="text-xs uppercase font-mono tracking-wider text-stone-600 hover:text-stone-900 hover:underline flex items-center gap-1"
                >
                  <span>View All 10 Monographs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {secondaryFeatured.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onReadArticle={handleReadArticle}
                    isSaved={savedArticleIds.includes(article.id)}
                    onToggleSave={handleToggleSave}
                    viewMode="grid"
                  />
                ))}
              </div>
            </section>

            {/* Tier 3: Complete Archive Catalog & In-depth Inquiries */}
            <section className="pb-16">
              <ArchiveIndex
                articles={ARTICLES}
                onReadArticle={handleReadArticle}
                savedArticleIds={savedArticleIds}
                onToggleSave={handleToggleSave}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </section>
          </div>
        )}
      </main>

      {/* Global Modals & Drawers */}
      <SavedArticlesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedArticles={savedArticlesList}
        onReadArticle={handleReadArticle}
        onRemoveSave={handleToggleSave}
        onClearAll={handleClearAllSaved}
      />

      <CuratorModal
        isOpen={isCuratorModalOpen}
        onClose={() => setIsCuratorModalOpen(false)}
      />

      <SubscribeModal
        isOpen={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenCurators={() => setIsCuratorModalOpen(true)}
        onOpenSubscribe={() => setIsSubscribeModalOpen(true)}
        onSelectCategory={handleSelectCategoryFromNav}
      />
    </div>
  );
}
