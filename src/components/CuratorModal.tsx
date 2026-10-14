import React from 'react';
import { X, Feather, Compass, Layers, ShieldCheck } from 'lucide-react';

interface CuratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CuratorModal: React.FC<CuratorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center p-4">
        <div className="relative inline-block w-full max-w-2xl p-6 sm:p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#FBF9F5] border border-stone-300 rounded shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pb-6 border-b border-stone-200">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
              Editorial Codex & Manifesto
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900">
              The Curatorial Board
            </h2>
            <p className="text-sm font-prose text-stone-600 leading-relaxed">
              TERRA & FORMA is an independent quarterly journal of architecture, material science, and vernacular engineering.
            </p>
          </div>

          {/* Manifesto Principles */}
          <div className="py-6 space-y-6">
            <div className="flex gap-4 items-start">
              <Layers className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-serif font-medium text-stone-900">
                  I. Fidelity to Gravity and Geologic Mass
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1 leading-relaxed">
                  We reject the prevailing modern dogma that reduces buildings to disposable polymer layers and planned obsolescence. Real architecture endures through mass, stone, timber, and the slow, honest weathering of materials over centuries.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Compass className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-serif font-medium text-stone-900">
                  II. Passive Thermodynamic Sovereignty
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1 leading-relaxed">
                  Before electrical grids and mechanical compressor pumps, cultures across the globe solved comfort through orientation, wind catchers, courtyards, and thermal lag. We study vernacular wisdom not as quaint folklore, but as urgent, zero-carbon engineering.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Feather className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-serif font-medium text-stone-900">
                  III. The Somatosensory Atmosphere
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1 leading-relaxed">
                  Architecture is not an image to be consumed on a flat glass screen. It is an acoustic embrace, a thermal sensation against bare soles, and a tactile memory of hand-chiseled cedar.
                </p>
              </div>
            </div>
          </div>

          {/* Masthead details */}
          <div className="pt-6 border-t border-stone-200 text-xs text-stone-500 font-mono space-y-2">
            <div className="flex justify-between">
              <span>PUBLISHER:</span>
              <span className="text-stone-800">Atelier Terra Press</span>
            </div>
            <div className="flex justify-between">
              <span>EDITOR-IN-CHIEF:</span>
              <span className="text-stone-800">Dr. Julian K. Thorne</span>
            </div>
            <div className="flex justify-between">
              <span>FREQUENCY:</span>
              <span className="text-stone-800">4 Monograph Editions / Annum</span>
            </div>
            <div className="flex justify-between">
              <span>ARCHIVE ACCESS:</span>
              <span className="text-stone-800">Open Digital Repository</span>
            </div>
          </div>

          <div className="mt-8 text-right">
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-stone-50 bg-stone-900 rounded hover:bg-stone-800 transition-colors"
            >
              Return to Journal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
