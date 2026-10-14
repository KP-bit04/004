import React, { useState } from 'react';
import { X, Check, Mail, BookOpen } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState<'digital' | 'print'>('digital');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      // auto close after 2.5s
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        onClose();
      }, 2500);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center p-4">
        <div className="relative inline-block w-full max-w-lg p-6 sm:p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#FBF9F5] border border-stone-300 rounded shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-900">
                You are inscribed in the dispatch list
              </h3>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                A confirmation note and our archival index have been dispatched to <span className="font-mono text-stone-900">{email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                  Subscribers' Registry
                </span>
                <h2 className="text-2xl font-serif font-medium text-stone-900 mt-1">
                  Receive the Terra & Forma Dispatch
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-prose mt-2 leading-relaxed">
                  Delivered fortnightly: long-form essays, tectonic field reports from ongoing archaeological excavations, and rare photographic archives. Zero sponsored content.
                </p>
              </div>

              {/* Format selection */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setTier('digital')}
                  className={`p-3 text-left rounded border transition-colors ${
                    tier === 'digital'
                      ? 'border-stone-900 bg-white ring-1 ring-stone-900'
                      : 'border-stone-200 bg-stone-100/60 hover:border-stone-400'
                  }`}
                >
                  <Mail className="w-4 h-4 text-stone-700 mb-1" />
                  <div className="text-xs font-serif font-medium text-stone-900">Digital Monograph</div>
                  <div className="text-[11px] text-stone-500">Free open-access dispatch</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTier('print')}
                  className={`p-3 text-left rounded border transition-colors ${
                    tier === 'print'
                      ? 'border-stone-900 bg-white ring-1 ring-stone-900'
                      : 'border-stone-200 bg-stone-100/60 hover:border-stone-400'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-stone-700 mb-1" />
                  <div className="text-xs font-serif font-medium text-stone-900">Quarterly Letterpress</div>
                  <div className="text-[11px] text-stone-500">Limited hand-bound folio</div>
                </button>
              </div>

              {/* Input */}
              <div className="space-y-2">
                <label htmlFor="dispatch-email" className="block text-xs font-mono uppercase tracking-wider text-stone-500">
                  Architectural Practice / Personal Email
                </label>
                <input
                  id="dispatch-email"
                  type="email"
                  required
                  placeholder="architect@atelier.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 bg-white border border-stone-300 rounded focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-sans">
                  Privacy guaranteed. Unsubscribe at any time.
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-stone-50 bg-stone-900 rounded hover:bg-stone-800 transition-colors"
                >
                  Join Dispatch
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
