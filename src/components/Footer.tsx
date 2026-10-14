import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenCurators: () => void;
  onOpenSubscribe: () => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCurators,
  onOpenSubscribe,
  onSelectCategory,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 border-t border-stone-200 bg-[#F7F4EE] text-stone-700 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-300">
          {/* Brand & Editorial Charter */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-serif font-medium tracking-widest text-stone-900 uppercase">
              TERRA & FORMA
            </span>
            <p className="text-xs text-stone-600 font-prose max-w-md leading-relaxed">
              A peer-reviewed journal investigating the durability of architectural mass, vernacular engineering, and somatic space across ancient traditions and contemporary ecological practices.
            </p>
            <div className="text-xs text-stone-500 font-mono">
              Published quarterly in Zurich, Tokyo, and Rome.
            </div>
          </div>

          {/* Catalog Categories */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-stone-900">
              Inquiries
            </h4>
            <ul className="space-y-2 text-stone-600">
              <li>
                <button
                  onClick={() => onSelectCategory('Spatial Theory')}
                  className="hover:text-stone-900 hover:underline"
                >
                  Spatial Theory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Vernacular Craft')}
                  className="hover:text-stone-900 hover:underline"
                >
                  Vernacular Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Urban Ecology')}
                  className="hover:text-stone-900 hover:underline"
                >
                  Urban Ecology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Material Studies')}
                  className="hover:text-stone-900 hover:underline"
                >
                  Material Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Monographs')}
                  className="hover:text-stone-900 hover:underline"
                >
                  Monographs
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Actions */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-stone-900">
              Institutional
            </h4>
            <ul className="space-y-2 text-stone-600">
              <li>
                <button
                  onClick={onOpenCurators}
                  className="hover:text-stone-900 hover:underline"
                >
                  Curatorial Board & Manifesto
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSubscribe}
                  className="hover:text-stone-900 hover:underline"
                >
                  Receive Fortnightly Dispatch
                </button>
              </li>
              <li>
                <span className="text-stone-400">Archival ISSN: 2841-091X</span>
              </li>
              <li>
                <span className="text-stone-400">Open Access Attribution CC-BY-NC 4.0</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-xs">
          <div>
            © {new Date().getFullYear()} Terra & Forma Journal. All essays peer-reviewed and archived.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-stone-900 transition-colors uppercase tracking-wider font-mono text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
