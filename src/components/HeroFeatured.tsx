import React from 'react';
import { Article } from '../types/blog';
import { ArrowRight, Bookmark, Clock, BookOpen } from 'lucide-react';

interface HeroFeaturedProps {
  article: Article;
  onReadArticle: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  article,
  onReadArticle,
  isSaved,
  onToggleSave,
}) => {
  return (
    <section className="border-b border-stone-200 pb-12 lg:pb-16 pt-8">
      {/* Editorial Kicker Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-500 uppercase tracking-widest pb-4 mb-8 border-b border-stone-200">
        <div>
          <span>{article.edition}</span>
          <span className="mx-2 text-stone-300">/</span>
          <span>Lead Monograph</span>
        </div>
        <div className="hidden sm:block">
          <span>ISSN 2841-091X</span>
          <span className="mx-2 text-stone-300">·</span>
          <span>Open Archive</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Image Asset with Fig. Caption */}
        <div className="lg:col-span-7 flex flex-col justify-between group">
          <div 
            onClick={() => onReadArticle(article)}
            className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded bg-stone-200 cursor-pointer border border-stone-300/60"
          >
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-stone-900/10 pointer-events-none group-hover:bg-transparent transition-colors" />
          </div>
          <p className="mt-3 text-xs font-serif italic text-stone-500">
            {article.coverCaption}
          </p>
        </div>

        {/* Right Column: Editorial Narrative & Metadata */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Clean unboxed metadata with typographic separators (NO PILLS) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-sans">
              <span className="font-medium text-stone-800 tracking-wide uppercase">
                {article.category}
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 inline text-stone-400" />
                {article.readTime}
              </span>
            </div>

            {/* Title with balanced text wrap */}
            <h1 
              onClick={() => onReadArticle(article)}
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight text-stone-900 hover:text-stone-700 transition-colors cursor-pointer leading-[1.18]"
              style={{ textWrap: 'balance' }}
            >
              {article.title}
            </h1>

            {/* Subtitle / Decks */}
            <p className="text-sm sm:text-base font-prose text-stone-600 leading-relaxed">
              {article.subtitle}
            </p>

            {/* Excerpt with drop-cap aesthetic preview */}
            <div className="pt-2 text-sm text-stone-700 font-prose leading-relaxed border-t border-stone-200/80">
              <p className="line-clamp-3">
                {article.excerpt}
              </p>
            </div>
          </div>

          {/* Author Foot & Action Buttons */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-mono">Byline</div>
              <div className="text-sm font-serif font-medium text-stone-900">
                {article.author.name}
              </div>
              <div className="text-xs text-stone-500">
                {article.author.affiliation}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleSave(article.id)}
                className={`p-2.5 rounded border transition-colors ${
                  isSaved
                    ? 'bg-stone-900 text-stone-50 border-stone-900'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                }`}
                title={isSaved ? 'Remove from saved' : 'Save for later'}
                aria-label={isSaved ? 'Remove from saved' : 'Save for later'}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={() => onReadArticle(article)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-stone-50 bg-stone-900 rounded hover:bg-stone-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
              >
                <span>Read Monograph</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
