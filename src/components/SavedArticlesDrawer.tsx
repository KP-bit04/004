import React from 'react';
import { Article } from '../types/blog';
import { X, Trash2, ArrowRight, BookOpen } from 'lucide-react';

interface SavedArticlesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onReadArticle: (article: Article) => void;
  onRemoveSave: (id: string) => void;
  onClearAll: () => void;
}

export const SavedArticlesDrawer: React.FC<SavedArticlesDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onReadArticle,
  onRemoveSave,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF9F5] border-l border-stone-200 shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-stone-200 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-serif font-medium text-stone-900">
                Saved Monographs ({savedArticles.length})
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Your private architectural reading desk
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
              aria-label="Close saved drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedArticles.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <BookOpen className="w-8 h-8 text-stone-300 mx-auto" />
                <p className="text-sm font-serif text-stone-600">
                  Your reading desk is empty.
                </p>
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Bookmark any essay from the journal catalog to study it offline or in depth.
                </p>
              </div>
            ) : (
              savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-4 bg-white rounded border border-stone-200 hover:border-stone-400 transition-colors flex flex-col justify-between space-y-3 group"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1">
                      <span>{article.category}</span>
                      <span>·</span>
                      <span className="tabular-nums">{article.readTime}</span>
                    </div>
                    <h3 
                      onClick={() => {
                        onReadArticle(article);
                        onClose();
                      }}
                      className="text-sm font-serif font-medium text-stone-900 group-hover:text-stone-700 transition-colors cursor-pointer leading-snug"
                    >
                      {article.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-100">
                    <span className="text-stone-500 truncate max-w-[150px]">
                      {article.author.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onRemoveSave(article.id)}
                        className="p-1 text-stone-400 hover:text-rose-700 transition-colors"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          onReadArticle(article);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1 font-medium text-stone-900 hover:underline"
                      >
                        <span>Open</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {savedArticles.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-100/60 flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-stone-500 hover:text-stone-900 underline transition-colors"
              >
                Clear all saved
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-stone-50 bg-stone-900 rounded hover:bg-stone-800 transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
