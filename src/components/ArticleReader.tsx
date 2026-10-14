import React, { useState, useEffect, useRef } from 'react';
import { Article, ArticleComment } from '../types/blog';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Clock, 
  Check, 
  Volume2, 
  Play, 
  Pause, 
  RotateCcw,
  Maximize2,
  Minimize2,
  Type,
  ChevronLeft,
  ChevronRight,
  Send
} from 'lucide-react';
import { ArchitecturalSvgDiagram } from './ArchitecturalSvgDiagram';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onNavigateToArticle: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  onBack,
  isSaved,
  onToggleSave,
  onNavigateToArticle,
  allArticles,
}) => {
  // Reading preferences state
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [focusMode, setFocusMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);

  // Audio narration simulator state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(0);
  const [audioSpeed, setAudioSpeed] = useState<1 | 1.25 | 1.5>(1);
  const totalAudioDuration = 480; // 8 minutes simulated

  // Comments / Reflections stored per article in localStorage
  const [comments, setComments] = useState<ArticleComment[]>([]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentRole, setNewCommentRole] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Scroll listener for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Audio simulation timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioSeconds((prev) => {
          if (prev >= totalAudioDuration) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1 * audioSpeed;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, audioSpeed]);

  // Load comments from localStorage
  useEffect(() => {
    const savedCommentsKey = `comments_${article.id}`;
    const stored = localStorage.getItem(savedCommentsKey);
    if (stored) {
      try {
        setComments(JSON.parse(stored));
      } catch {
        // fallback
      }
    } else {
      // Default initial architectural reflection
      setComments([
        {
          id: 'c1',
          author: 'David Chipperfield Studio',
          role: 'Visiting Fellow',
          date: '3 days ago',
          content: 'This analysis captures precisely the thermodynamic humility required in contemporary building. The rejection of lightweight disposable composites in favor of thermal mass is not nostalgia; it is the only viable long-term strategy for atmospheric resilience.'
        }
      ]);
    }
    // Scroll to top upon opening new article
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setAudioSeconds(0);
    setIsPlayingAudio(false);
  }, [article.id]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !newCommentName.trim()) return;

    const newEntry: ArticleComment = {
      id: Date.now().toString(),
      author: newCommentName.trim(),
      role: newCommentRole.trim() || 'Reader & Architect',
      date: 'Just now',
      content: newCommentText.trim()
    };

    const updated = [newEntry, ...comments];
    setComments(updated);
    localStorage.setItem(`comments_${article.id}`, JSON.stringify(updated));
    setNewCommentText('');
    setNewCommentName('');
    setNewCommentRole('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  // Find previous and next articles
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  // Font size classes
  const fontClass = 
    fontSize === 'large' 
      ? 'text-lg leading-relaxed' 
      : fontSize === 'xlarge' 
      ? 'text-xl leading-loose' 
      : 'text-base leading-relaxed';

  const familyClass = fontFamily === 'serif' ? 'font-prose' : 'font-sans';

  const formatAudioTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className={`min-h-screen bg-[#FBF9F5] transition-colors ${focusMode ? 'bg-[#FAF8F3]' : ''}`}>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-stone-200 z-50">
        <div 
          className="h-full bg-stone-900 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Toolbar Navigation */}
      <nav aria-label="Reader toolbar" className="sticky top-0 z-30 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Journal</span>
            <span className="sm:hidden">Index</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Family Switcher */}
            <div className="flex items-center border border-stone-300 rounded p-0.5 text-xs">
              <button
                onClick={() => setFontFamily('serif')}
                className={`px-2 py-1 rounded font-serif ${fontFamily === 'serif' ? 'bg-stone-900 text-stone-50' : 'text-stone-600 hover:text-stone-900'}`}
                title="Serif typography"
              >
                Serif
              </button>
              <button
                onClick={() => setFontFamily('sans')}
                className={`px-2 py-1 rounded font-sans ${fontFamily === 'sans' ? 'bg-stone-900 text-stone-50' : 'text-stone-600 hover:text-stone-900'}`}
                title="Sans typography"
              >
                Sans
              </button>
            </div>

            {/* Font Size Adjuster */}
            <div className="flex items-center border border-stone-300 rounded p-0.5 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded ${fontSize === 'normal' ? 'bg-stone-900 text-stone-50' : 'text-stone-600'}`}
                title="Standard font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded font-semibold ${fontSize === 'large' ? 'bg-stone-900 text-stone-50' : 'text-stone-600'}`}
                title="Large font size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded font-bold ${fontSize === 'xlarge' ? 'bg-stone-900 text-stone-50' : 'text-stone-600'}`}
                title="Extra large font size"
              >
                A++
              </button>
            </div>

            {/* Focus Mode Toggle */}
            <button
              onClick={() => setFocusMode(!focusMode)}
              className={`p-1.5 rounded border transition-colors ${focusMode ? 'bg-stone-900 text-stone-50 border-stone-900' : 'border-stone-300 text-stone-600 hover:text-stone-900'}`}
              title={focusMode ? 'Exit focus mode' : 'Focus reading mode'}
              aria-label={focusMode ? 'Exit focus mode' : 'Focus reading mode'}
            >
              {focusMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Save Toggle */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-1.5 rounded border transition-colors ${isSaved ? 'bg-stone-900 text-stone-50 border-stone-900' : 'border-stone-300 text-stone-600 hover:text-stone-900'}`}
              title={isSaved ? 'Saved in reading list' : 'Save article'}
              aria-label={isSaved ? 'Saved in reading list' : 'Save article'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded border border-stone-300 text-stone-600 hover:text-stone-900 transition-colors relative"
              title="Share article link"
              aria-label="Share article link"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Reading Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        {/* Article Meta Header */}
        <header className="mb-10 text-center max-w-3xl mx-auto">
          {/* Unboxed clean metadata (NO PILLS) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-widest mb-4">
            <span className="font-semibold text-stone-900">{article.category}</span>
            <span className="text-stone-300">·</span>
            <span>{article.edition}</span>
            <span className="text-stone-300">·</span>
            <span>{article.date}</span>
          </div>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 leading-[1.15] mb-6"
            style={{ textWrap: 'balance' }}
          >
            {article.title}
          </h1>

          <p className="text-base sm:text-lg font-serif italic text-stone-600 max-w-2xl mx-auto leading-relaxed mb-6">
            {article.subtitle}
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-stone-500 border-y border-stone-200 py-3">
            <div className="font-medium text-stone-800">
              By {article.author.name}
            </div>
            <span className="text-stone-300">·</span>
            <div>{article.author.affiliation}</div>
            <span className="text-stone-300">·</span>
            <div className="flex items-center gap-1 tabular-nums">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              {article.readTime} ({article.wordCount} words)
            </div>
          </div>
        </header>

        {/* Audio Narration Simulation Bar */}
        <section aria-label="Audio companion narration" className="mb-10 bg-white border border-stone-200 rounded-lg p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-10 h-10 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center shrink-0 hover:bg-stone-800 transition-colors"
                aria-label={isPlayingAudio ? 'Pause Narration' : 'Listen to Essay Narration'}
              >
                {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-mono text-stone-500">
                    Audio Narration Companion
                  </span>
                  {isPlayingAudio && (
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                  )}
                </div>
                <div className="text-xs font-serif italic text-stone-700 truncate">
                  Read aloud by curatorial synthesis · Archival recording
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              {/* Scrub timeline */}
              <div className="flex items-center gap-2 flex-1 sm:w-48">
                <span className="text-xs font-mono tabular-nums text-stone-500">
                  {formatAudioTime(audioSeconds)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={totalAudioDuration}
                  value={audioSeconds}
                  onChange={(e) => setAudioSeconds(Number(e.target.value))}
                  className="w-full accent-stone-900 h-1 bg-stone-200 rounded cursor-pointer"
                />
                <span className="text-xs font-mono tabular-nums text-stone-400">
                  {formatAudioTime(totalAudioDuration)}
                </span>
              </div>

              {/* Speed Button */}
              <button
                onClick={() => {
                  const nextSpeed = audioSpeed === 1 ? 1.25 : audioSpeed === 1.25 ? 1.5 : 1;
                  setAudioSpeed(nextSpeed);
                }}
                className="px-2 py-1 text-xs font-mono border border-stone-200 rounded hover:bg-stone-100 transition-colors shrink-0"
              >
                {audioSpeed}x
              </button>
            </div>
          </div>
        </section>

        {/* Lead Cover Visual Frame */}
        <section aria-label="Cover visual" className="mb-12">
          {article.coverImage ? (
            <figure className="space-y-2">
              <div className="overflow-hidden rounded border border-stone-200 aspect-[16/10] sm:aspect-[16/9] bg-stone-100">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-xs font-serif italic text-stone-500 text-center">
                Plate 1.0 — {article.coverCaption}
              </figcaption>
            </figure>
          ) : article.sections[0]?.figure?.svgType ? (
            <figure className="space-y-2">
              <ArchitecturalSvgDiagram type={article.sections[0].figure.svgType} />
              <figcaption className="text-xs font-serif italic text-stone-500 text-center">
                Plate 1.0 — {article.coverCaption}
              </figcaption>
            </figure>
          ) : null}
        </section>

        {/* Key Tectonic Principles (Anti-slop: subtle all-around hairline border, no thick left accent bar) */}
        <section className="mb-12 p-6 sm:p-8 rounded border border-stone-200 bg-white/70">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4 pb-2 border-b border-stone-200 flex justify-between items-center">
            <span>Essential Tectonic Principles</span>
            <span>Archival Codex</span>
          </div>
          <ul className="space-y-3">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-stone-700 font-sans">
                <span className="font-mono text-xs text-stone-400 mt-0.5">0{idx + 1}.</span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Essay Body Content */}
        <article className={`space-y-12 max-w-prose mx-auto ${familyClass} ${fontClass} text-stone-800`}>
          {article.sections.map((section, sIdx) => (
            <section key={section.id} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 tracking-tight pt-4 border-t border-stone-200/70">
                {section.title}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p 
                  key={pIdx} 
                  className={`leading-relaxed text-stone-800 ${sIdx === 0 && pIdx === 0 ? 'drop-cap' : ''}`}
                >
                  {p}
                </p>
              ))}

              {/* Pull quote with elegant hairline borders (no thick left bar) */}
              {section.pullQuote && (
                <blockquote className="my-10 py-6 border-y border-stone-300 text-center px-4 sm:px-8">
                  <p className="text-xl sm:text-2xl font-serif italic text-stone-800 leading-snug">
                    "{section.pullQuote.text}"
                  </p>
                  <cite className="block mt-3 text-xs font-sans uppercase tracking-widest text-stone-500 not-italic">
                    — {section.pullQuote.citation}
                  </cite>
                </blockquote>
              )}

              {/* Technical Figure / Diagram */}
              {section.figure && (
                <figure className="my-8 space-y-2">
                  {section.figure.svgType && (
                    <ArchitecturalSvgDiagram type={section.figure.svgType} />
                  )}
                  <figcaption className="text-xs font-serif italic text-stone-500 text-center">
                    {section.figure.caption}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
        </article>

        {/* Footnotes Section */}
        {article.footnotes && article.footnotes.length > 0 && (
          <section className="mt-16 pt-8 border-t border-stone-300 max-w-prose mx-auto">
            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
              Citations & Archival References
            </h3>
            <ol className="space-y-2 text-xs text-stone-600 font-sans">
              {article.footnotes.map((fn) => (
                <li key={fn.id} className="flex gap-2">
                  <span className="font-mono text-stone-400">[{fn.label}]</span>
                  <span>{fn.text}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Author Bio Box */}
        <section className="mt-16 p-6 sm:p-8 rounded border border-stone-200 bg-white max-w-prose mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded bg-stone-900 text-stone-50 font-serif text-lg flex items-center justify-center shrink-0">
              {article.author.initials}
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Contributing Monograph Author
              </div>
              <h4 className="text-lg font-serif font-medium text-stone-900">
                {article.author.name}
              </h4>
              <p className="text-xs text-stone-600">
                {article.author.role} · {article.author.affiliation}
              </p>
            </div>
          </div>
        </section>

        {/* Pagination: Previous & Next Articles */}
        <nav aria-label="Article navigation" className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-prose mx-auto">
          {prevArticle ? (
            <button
              onClick={() => onNavigateToArticle(prevArticle)}
              className="p-4 rounded border border-stone-200 hover:border-stone-400 bg-white text-left transition-colors group flex flex-col justify-between"
            >
              <div className="flex items-center gap-1 text-xs text-stone-400 font-mono uppercase tracking-wider mb-2">
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Monograph</span>
              </div>
              <div className="text-sm font-serif font-medium text-stone-900 group-hover:text-stone-700 line-clamp-2">
                {prevArticle.title}
              </div>
            </button>
          ) : <div />}

          {nextArticle ? (
            <button
              onClick={() => onNavigateToArticle(nextArticle)}
              className="p-4 rounded border border-stone-200 hover:border-stone-400 bg-white text-right transition-colors group flex flex-col justify-between"
            >
              <div className="flex items-center justify-end gap-1 text-xs text-stone-400 font-mono uppercase tracking-wider mb-2">
                <span>Next Monograph</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm font-serif font-medium text-stone-900 group-hover:text-stone-700 line-clamp-2">
                {nextArticle.title}
              </div>
            </button>
          ) : <div />}
        </nav>

        {/* Curatorial Discussion & Reader Reflections */}
        <section className="mt-16 pt-10 border-t border-stone-300 max-w-prose mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-serif font-medium text-stone-900">
                Curatorial Discourse & Reflections
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Scholarly dialogues and peer notes for this monograph
              </p>
            </div>
            <span className="text-xs font-mono tabular-nums text-stone-400">
              {comments.length} entries
            </span>
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} className="mb-10 bg-white border border-stone-200 rounded p-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Leave a Scholarly Annotation
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name / Studio"
                required
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-stone-300 rounded focus:border-stone-900 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Institutional Affiliation (Optional)"
                value={newCommentRole}
                onChange={(e) => setNewCommentRole(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-stone-300 rounded focus:border-stone-900 focus:outline-none"
              />
            </div>

            <textarea
              placeholder="Provide constructive commentary on the structural, thermal, or phenomenological claims presented..."
              required
              rows={3}
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              className="w-full text-xs px-3 py-2 border border-stone-300 rounded focus:border-stone-900 focus:outline-none font-sans"
            />

            <div className="flex items-center justify-between">
              {commentSuccess && (
                <span className="text-xs text-emerald-600 font-medium">
                  Annotation recorded into peer archive.
                </span>
              )}
              <div className="ml-auto">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-stone-50 bg-stone-900 rounded hover:bg-stone-800 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Note</span>
                </button>
              </div>
            </div>
          </form>

          {/* Comment Stream */}
          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="p-4 rounded border border-stone-200 bg-white/70 space-y-2">
                <div className="flex items-baseline justify-between text-xs">
                  <div className="font-serif font-medium text-stone-900">
                    {c.author} <span className="text-stone-400 font-sans font-normal">· {c.role}</span>
                  </div>
                  <span className="text-stone-400 font-mono text-[11px]">{c.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 font-prose leading-relaxed">
                  {c.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
