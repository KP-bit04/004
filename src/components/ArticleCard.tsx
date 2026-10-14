import React from 'react';
import { Article } from '../types/blog';
import { Clock, Bookmark, ArrowUpRight } from 'lucide-react';
import { ArchitecturalSvgDiagram } from './ArchitecturalSvgDiagram';

interface ArticleCardProps {
  article: Article;
  onReadArticle: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
  viewMode?: 'grid' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadArticle,
  isSaved,
  onToggleSave,
  viewMode = 'grid',
}) => {
  // If compact row layout (used in archive index or compact view)
  if (viewMode === 'compact') {
    return (
      <article className="py-5 border-b border-stone-200/80 hover:bg-stone-100/50 transition-colors px-3 -mx-3 rounded flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group">
        <div className="space-y-1.5 flex-1 min-w-0">
          {/* Unboxed metadata */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-sans">
            <span className="font-medium text-stone-800 uppercase tracking-wider">{article.category}</span>
            <span className="text-stone-300">·</span>
            <span>{article.date}</span>
            <span className="text-stone-300">·</span>
            <span className="tabular-nums">{article.readTime}</span>
          </div>

          <h3 
            onClick={() => onReadArticle(article)}
            className="text-lg font-serif font-medium text-stone-900 group-hover:text-stone-700 transition-colors cursor-pointer truncate"
          >
            {article.title}
          </h3>
          <p className="text-xs text-stone-600 line-clamp-1 font-prose">
            {article.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
          <span className="text-xs text-stone-500 hidden md:inline font-sans">
            {article.author.name}
          </span>
          <button
            onClick={() => onToggleSave(article.id)}
            className={`p-1.5 rounded transition-colors ${
              isSaved ? 'text-stone-900' : 'text-stone-400 hover:text-stone-700'
            }`}
            title={isSaved ? 'Saved' : 'Save for later'}
            aria-label={isSaved ? 'Saved' : 'Save for later'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => onReadArticle(article)}
            className="p-1.5 text-stone-700 hover:text-stone-950 transition-colors"
            title="Read article"
            aria-label={`Read ${article.title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </article>
    );
  }

  // Standard Grid Card layout
  return (
    <article className="flex flex-col justify-between border-b border-stone-200/80 pb-8 group">
      <div>
        {/* Visual asset frame: Photo or architectural technical illustration */}
        <div 
          onClick={() => onReadArticle(article)}
          className="relative aspect-[4/3] overflow-hidden rounded bg-stone-200 cursor-pointer border border-stone-300/60 mb-4"
        >
          {article.coverImage ? (
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : article.sections[0]?.figure?.svgType ? (
            <div className="w-full h-full pointer-events-none scale-90 sm:scale-100 origin-top-left">
              <ArchitecturalSvgDiagram 
                type={article.sections[0].figure.svgType} 
                className="w-full h-full border-none rounded-none p-3" 
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400 font-serif text-sm">
              Architectural Archive Plate
            </div>
          )}
        </div>

        {/* Clean unboxed metadata (NO PILLS) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-sans mb-2">
          <span className="font-medium text-stone-800 uppercase tracking-wider text-[11px]">
            {article.category}
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1 tabular-nums">
            <Clock className="w-3 h-3 text-stone-400" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 
          onClick={() => onReadArticle(article)}
          className="text-xl font-serif font-medium text-stone-900 group-hover:text-stone-700 transition-colors cursor-pointer leading-snug mb-2"
          style={{ textWrap: 'balance' }}
        >
          {article.title}
        </h2>

        {/* Subtitle / Excerpt */}
        <p className="text-xs sm:text-sm text-stone-600 font-prose line-clamp-3 leading-relaxed mb-4">
          {article.subtitle}
        </p>
      </div>

      {/* Footer info: Author & Actions */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3 text-xs">
        <div className="min-w-0">
          <div className="font-medium text-stone-900 truncate font-serif">
            {article.author.name}
          </div>
          <div className="text-stone-500 truncate text-[11px]">
            {article.author.affiliation}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onToggleSave(article.id)}
            className={`p-2 rounded border transition-colors ${
              isSaved
                ? 'bg-stone-900 text-stone-50 border-stone-900'
                : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
            }`}
            title={isSaved ? 'Saved to reading list' : 'Save for later'}
            aria-label={isSaved ? 'Saved to reading list' : 'Save for later'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          
          <button
            onClick={() => onReadArticle(article)}
            className="px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-stone-900 hover:text-stone-50 hover:bg-stone-900 border border-stone-300 hover:border-stone-900 rounded transition-colors"
          >
            Read
          </button>
        </div>
      </div>
    </article>
  );
};
