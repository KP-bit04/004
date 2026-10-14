import React from 'react';

interface SvgDiagramProps {
  type: 'pozzolana' | 'mycelium' | 'courtyard' | 'cobblestone' | 'steading';
  className?: string;
}

export const ArchitecturalSvgDiagram: React.FC<SvgDiagramProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'pozzolana':
      return (
        <div className={`relative bg-stone-900 text-stone-100 rounded-lg p-6 sm:p-8 overflow-hidden font-sans border border-stone-800 ${className}`}>
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-stone-800 text-xs text-stone-400 font-mono tracking-wider">
            <span>DIAGRAM 06 — CALCIUM-ALUMINATE-SILICATE HYDRATE MATRIX</span>
            <span className="hidden sm:inline">SCALE: 50μm</span>
          </div>
          <svg viewBox="0 0 600 300" className="w-full h-auto text-stone-300">
            {/* Background grid */}
            <defs>
              <pattern id="grid-poz" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#292524" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="600" height="300" fill="url(#grid-poz)" />
            
            {/* Aggregate chunks */}
            <path d="M 80,120 Q 110,90 150,110 T 210,160 T 170,220 T 100,200 Z" fill="#44403C" stroke="#78716C" strokeWidth="1.5" />
            <text x="110" y="155" fill="#E7E5E4" fontSize="11" fontFamily="sans-serif">Volcanic Ash Clast</text>
            <text x="110" y="172" fill="#A8A29E" fontSize="9" fontFamily="monospace">Al-tobermorite nucleation</text>

            <path d="M 360,70 Q 420,50 470,80 T 520,150 T 450,210 T 380,160 Z" fill="#292524" stroke="#57534E" strokeWidth="1.5" />
            <text x="400" y="125" fill="#E7E5E4" fontSize="11" fontFamily="sans-serif">Quicklime (CaO) Core</text>
            <text x="400" y="142" fill="#A8A29E" fontSize="9" fontFamily="monospace">Hot-mixing re-crystallization</text>

            {/* Crystalline needles growing across crack */}
            <g stroke="#D97706" strokeWidth="1.5" opacity="0.9">
              <line x1="210" y1="160" x2="290" y2="140" strokeDasharray="3,3" />
              <line x1="205" y1="180" x2="310" y2="175" />
              <line x1="210" y1="200" x2="330" y2="210" strokeDasharray="2,2" />
              <line x1="280" y1="130" x2="360" y2="100" />
              <line x1="310" y1="175" x2="370" y2="150" />
              <line x1="330" y1="210" x2="420" y2="210" />
            </g>

            {/* Chemical reaction note */}
            <circle cx="295" cy="165" r="4" fill="#F59E0B" />
            <text x="240" y="260" fill="#F59E0B" fontSize="10" fontFamily="monospace">Strätlingite Platelets (Self-Healing Interface)</text>
            <path d="M 295,245 L 295,175" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
          </svg>
          <div className="mt-3 text-xs text-stone-400 font-serif italic text-center">
            Microstructural reconstitution: Ingress of seawater stimulates dissolution of volcanic ash, precipitating crystalline interlocks.
          </div>
        </div>
      );

    case 'mycelium':
      return (
        <div className={`relative bg-stone-900 text-stone-100 rounded-lg p-6 sm:p-8 overflow-hidden font-sans border border-stone-800 ${className}`}>
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-stone-800 text-xs text-stone-400 font-mono tracking-wider">
            <span>DIAGRAM 07 — GROWN MYCELIUM-HEMP BIO-COMPOSITE ENVELOPE</span>
            <span className="hidden sm:inline">GROWTH CYCLE: 14 DAYS</span>
          </div>
          <svg viewBox="0 0 600 300" className="w-full h-auto text-stone-300">
            <defs>
              <pattern id="grid-myc" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#292524" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="600" height="300" fill="url(#grid-myc)" />

            {/* Hemp shiv substrate fibers */}
            <g stroke="#78716C" strokeWidth="5" strokeLinecap="round" opacity="0.6">
              <line x1="70" y1="80" x2="190" y2="120" />
              <line x1="120" y1="180" x2="240" y2="160" />
              <line x1="90" y1="240" x2="220" y2="210" />
              <line x1="320" y1="70" x2="430" y2="110" />
              <line x1="390" y1="170" x2="520" y2="140" />
              <line x1="310" y1="220" x2="460" y2="240" />
            </g>

            {/* Hyphal network branching */}
            <g stroke="#10B981" strokeWidth="1.5" fill="none" opacity="0.85">
              <path d="M 60,150 Q 150,140 230,120 T 340,160 T 440,120 T 540,180" />
              <path d="M 120,70 Q 180,120 230,160 T 320,220 T 430,230" />
              <path d="M 160,250 Q 230,190 320,180 T 480,190" />
              <path d="M 240,90 Q 280,140 380,140 T 490,90" />
              <circle cx="230" cy="160" r="3" fill="#34D399" />
              <circle cx="340" cy="160" r="3" fill="#34D399" />
              <circle cx="380" cy="140" r="3" fill="#34D399" />
            </g>

            <rect x="50" y="25" width="220" height="24" rx="4" fill="#1C1917" stroke="#44403C" strokeWidth="1" />
            <text x="60" y="41" fill="#E7E5E4" fontSize="10" fontFamily="monospace">Embodied Carbon: -38 kg CO2e/m²</text>

            <rect x="330" y="25" width="220" height="24" rx="4" fill="#1C1917" stroke="#44403C" strokeWidth="1" />
            <text x="340" y="41" fill="#E7E5E4" fontSize="10" fontFamily="monospace">Thermal Cond.: λ = 0.038 W/m·K</text>
          </svg>
          <div className="mt-3 text-xs text-stone-400 font-serif italic text-center">
            Cellular hyphae digest lignocellulosic agricultural surplus, binding loose fibers into rigid acoustic and thermal insulation.
          </div>
        </div>
      );

    case 'courtyard':
      return (
        <div className={`relative bg-stone-900 text-stone-100 rounded-lg p-6 sm:p-8 overflow-hidden font-sans border border-stone-800 ${className}`}>
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-stone-800 text-xs text-stone-400 font-mono tracking-wider">
            <span>DIAGRAM 08 — DIURNAL COURTYARD THERMAL CONVECTION WELL</span>
            <span className="hidden sm:inline">MICROCLIMATE DELTA: -7.5°C</span>
          </div>
          <svg viewBox="0 0 600 300" className="w-full h-auto text-stone-300">
            <defs>
              <pattern id="grid-ct" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#292524" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="600" height="300" fill="url(#grid-ct)" />

            {/* Left Building Wing */}
            <rect x="60" y="80" width="140" height="180" fill="#292524" stroke="#57534E" strokeWidth="1.5" />
            <line x1="85" y1="120" x2="115" y2="120" stroke="#78716C" strokeWidth="2" />
            <line x1="85" y1="180" x2="115" y2="180" stroke="#78716C" strokeWidth="2" />
            <text x="80" y="230" fill="#A8A29E" fontSize="11" fontFamily="sans-serif">Living Quarters</text>

            {/* Right Building Wing */}
            <rect x="400" y="80" width="140" height="180" fill="#292524" stroke="#57534E" strokeWidth="1.5" />
            <line x1="425" y1="120" x2="455" y2="120" stroke="#78716C" strokeWidth="2" />
            <line x1="425" y1="180" x2="455" y2="180" stroke="#78716C" strokeWidth="2" />
            <text x="420" y="230" fill="#A8A29E" fontSize="11" fontFamily="sans-serif">Shaded Portico</text>

            {/* Central Courtyard Basin */}
            <rect x="250" y="240" width="100" height="18" rx="2" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
            <text x="262" y="253" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif">Reflecting Pool</text>

            {/* Night-time convective cool air sinking */}
            <g stroke="#38BDF8" strokeWidth="2" fill="none">
              <path d="M 230,60 Q 230,160 270,220" strokeDasharray="4,4" />
              <path d="M 370,60 Q 370,160 330,220" strokeDasharray="4,4" />
              <polygon points="270,225 264,215 276,215" fill="#38BDF8" />
              <polygon points="330,225 324,215 336,215" fill="#38BDF8" />
            </g>

            {/* Warm air stack displacement up */}
            <g stroke="#F97316" strokeWidth="2" fill="none">
              <path d="M 300,210 Q 300,120 300,50" />
              <polygon points="300,45 295,55 305,55" fill="#F97316" />
            </g>

            <text x="235" y="35" fill="#F97316" fontSize="10" fontFamily="monospace">Diurnal Venting Exhaust</text>
            <text x="220" y="150" fill="#38BDF8" fontSize="10" fontFamily="monospace">Cool Air Pool Reservoir</text>
          </svg>
          <div className="mt-3 text-xs text-stone-400 font-serif italic text-center">
            Axonometric microclimatic well: Night-cooled air accumulates on stone paving, drawn inside rooms during midday heat.
          </div>
        </div>
      );

    case 'cobblestone':
      return (
        <div className={`relative bg-stone-900 text-stone-100 rounded-lg p-6 sm:p-8 overflow-hidden font-sans border border-stone-800 ${className}`}>
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-stone-800 text-xs text-stone-400 font-mono tracking-wider">
            <span>DIAGRAM 09 — SOMATOSENSORY PAVING SYSTEM: PORPHYRY & TERRACOTTA</span>
            <span className="hidden sm:inline">PATTERN: 45° HERRINGBONE</span>
          </div>
          <svg viewBox="0 0 600 300" className="w-full h-auto text-stone-300">
            <defs>
              <pattern id="grid-cob" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#292524" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="600" height="300" fill="url(#grid-cob)" />

            {/* Herringbone brick pavers */}
            <g stroke="#44403C" strokeWidth="1.5">
              <rect x="100" y="80" width="70" height="30" fill="#78350F" transform="rotate(45 100 80)" />
              <rect x="150" y="80" width="70" height="30" fill="#9A3412" transform="rotate(-45 150 80)" />
              <rect x="150" y="130" width="70" height="30" fill="#854D0E" transform="rotate(45 150 130)" />
              <rect x="200" y="130" width="70" height="30" fill="#78350F" transform="rotate(-45 200 130)" />
              <rect x="200" y="180" width="70" height="30" fill="#9A3412" transform="rotate(45 200 180)" />
              <rect x="250" y="180" width="70" height="30" fill="#B45309" transform="rotate(-45 250 180)" />
            </g>

            {/* Sand joint drainage */}
            <path d="M 360,90 L 520,90 L 520,220 L 360,220 Z" fill="#292524" stroke="#57534E" strokeWidth="1.5" />
            <line x1="360" y1="125" x2="520" y2="125" stroke="#A8A29E" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="360" y1="170" x2="520" y2="170" stroke="#78716C" strokeWidth="1" strokeDasharray="3,3" />

            <text x="375" y="112" fill="#E7E5E4" fontSize="10" fontFamily="sans-serif">Tuscan Clay Brick (35mm)</text>
            <text x="375" y="152" fill="#E7E5E4" fontSize="10" fontFamily="sans-serif">Coarse Sand Setting Bed (40mm)</text>
            <text x="375" y="200" fill="#E7E5E4" fontSize="10" fontFamily="sans-serif">Crushed Limestone Aggregate (150mm)</text>
          </svg>
          <div className="mt-3 text-xs text-stone-400 font-serif italic text-center">
            Porous bedding matrix: Capillary dissipation of moisture and sensory acoustic damping beneath pedestrian footsteps.
          </div>
        </div>
      );

    case 'steading':
      return (
        <div className={`relative bg-stone-900 text-stone-100 rounded-lg p-6 sm:p-8 overflow-hidden font-sans border border-stone-800 ${className}`}>
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-stone-800 text-xs text-stone-400 font-mono tracking-wider">
            <span>DIAGRAM 10 — VALAIS ALPINE RACCARD: MUSHROOM PILLAR (STADEL)</span>
            <span className="hidden sm:inline">STRUCTURE: TIMBER + SCHIST DISC</span>
          </div>
          <svg viewBox="0 0 600 300" className="w-full h-auto text-stone-300">
            <defs>
              <pattern id="grid-std" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#292524" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="600" height="300" fill="url(#grid-std)" />

            {/* Elevated timber storehouse */}
            <rect x="120" y="40" width="360" height="110" fill="#3E2723" stroke="#8D6E63" strokeWidth="2" />
            <text x="180" y="80" fill="#D7CCC8" fontSize="14" fontFamily="serif">Interlocking Larch Log Beamwork</text>
            <text x="210" y="105" fill="#A1887F" fontSize="10" fontFamily="monospace">Natural Resin Rot-Resistance</text>

            {/* Stone Pillar 1 */}
            <ellipse cx="200" cy="155" rx="45" ry="12" fill="#78716C" stroke="#D6D3D1" strokeWidth="1.5" />
            <rect x="185" y="165" width="30" height="80" fill="#44403C" stroke="#78716C" strokeWidth="1.5" />
            
            {/* Stone Pillar 2 */}
            <ellipse cx="400" cy="155" rx="45" ry="12" fill="#78716C" stroke="#D6D3D1" strokeWidth="1.5" />
            <rect x="385" y="165" width="30" height="80" fill="#44403C" stroke="#78716C" strokeWidth="1.5" />

            {/* Ground line */}
            <line x1="80" y1="245" x2="520" y2="245" stroke="#57534E" strokeWidth="2" />

            {/* Explanatory callouts */}
            <path d="M 155,155 L 70,170" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
            <text x="30" y="190" fill="#F59E0B" fontSize="10" fontFamily="monospace">Mäuseplatte (Schist Disc)</text>
            <text x="30" y="204" fill="#A8A29E" fontSize="9" fontFamily="sans-serif">Impassable rodent overhang</text>

            <path d="M 430,205 L 480,205" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
            <text x="490" y="202" fill="#F59E0B" fontSize="10" fontFamily="monospace">Free-Floating Joint</text>
            <text x="490" y="216" fill="#A8A29E" fontSize="9" fontFamily="sans-serif">Seismic decoupling</text>
          </svg>
          <div className="mt-3 text-xs text-stone-400 font-serif italic text-center">
            Cantilevered schist circular disc (Mäuseplatte) isolates grain stores from rodents while decoupling timber from rising damp.
          </div>
        </div>
      );
  }
};
