import React from 'react';
import { Bookmark, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: () => void;
  onOpenCurators: () => void;
  onOpenSaved: () => void;
  onOpenSubscribe: () => void;
  savedCount: number;
  activeView: 'home' | 'reader' | 'archive';
  onSelectCategory?: (category: string) => void;
  onViewArchive: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onOpenCurators,
  onOpenSaved,
  onOpenSubscribe,
  savedCount,
  onViewArchive,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element in display face, no descriptors) */}
        <button
          onClick={onNavigateHome}
          className="text-xl sm:text-2xl font-serif font-semibold tracking-widest text-stone-900 uppercase hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
        >
          TERRA & FORMA
        </button>

        {/* Zone 2: 4-5 clean single-line nav links with hover underlines */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <button
            onClick={onNavigateHome}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-stone-400"
          >
            Essays
          </button>
          <button
            onClick={onViewArchive}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-stone-400"
          >
            Archive Index
          </button>
          <button
            onClick={onOpenCurators}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-stone-400"
          >
            Curatorial Board
          </button>
          <button
            onClick={onOpenSaved}
            className="flex items-center gap-1.5 hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-stone-400"
          >
            <span>Saved</span>
            {savedCount > 0 && (
              <span className="font-mono text-xs tabular-nums text-stone-500">
                ({savedCount})
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSaved}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors relative"
            aria-label="View saved articles"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-stone-900 text-stone-50 text-[10px] font-mono flex items-center justify-center rounded-full">
                {savedCount}
              </span>
            )}
          </button>
          <button
            onClick={onOpenSubscribe}
            className="px-4 py-2 text-xs font-medium tracking-wide uppercase text-stone-50 bg-stone-900 rounded hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          >
            Receive Dispatch
          </button>
        </div>
      </div>
    </header>
  );
};
