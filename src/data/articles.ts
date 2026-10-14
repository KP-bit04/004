import { Article } from '../types/blog';

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'silence-of-heavy-walls-monastic-brutalism',
    title: 'The Silence of Heavy Walls: Monastic Brutalism and Thermal Memory',
    subtitle: 'How 80-centimeter rammed earth and cast stone cloisters engineer both acoustic sanctuary and passive thermodynamic stability.',
    category: 'Spatial Theory',
    date: 'October 12, 2026',
    readTime: '9 min read',
    wordCount: 1840,
    edition: 'Vol. VII — Autumn Monograph',
    featured: true,
    author: {
      name: 'Elena Rostova',
      role: 'Professor of Tectonic Morphology',
      affiliation: 'Polytechnic Institute of Zurich',
      initials: 'ER'
    },
    coverImage: '/src/assets/images/hero_brutalist_sacred_space_1791991504577.jpg',
    coverCaption: 'Cloister colonnade at Sainte-Marie de La Tourette, showcasing deep-set cast concrete arches and rammed limestone aggregate.',
    excerpt: 'Before mechanical air conditioning turned buildings into sealed glass terrariums, architecture spoke an older language: the slow, breathing inertia of mass. Heavy walls do not merely support roofs; they remember temperatures.',
    keyTakeaways: [
      'Thermal lag in uninsulated 60–90cm earthen and stone masonry dampens diurnal temperature oscillations by up to 82%.',
      'Acoustic silence is not an absence of sound, but the deliberate absorption and diffuse scattering of high frequencies by textured mineral surfaces.',
      'Monastic corridors act as thermodynamic lungs, cooling during nighttime radiative venting and releasing stored coolness throughout peak solar hours.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Banham, Reyner. "The Architecture of the Well-tempered Environment", Architectural Press, 1969, pp. 45–62.'
      },
      {
        id: 2,
        label: '2',
        text: 'Givoni, Baruch. "Passive and Low Energy Cooling of Buildings", Van Nostrand Reinhold, 1994.'
      },
      {
        id: 3,
        label: '3',
        text: 'Pallasmaa, Juhani. "The Eyes of the Skin: Architecture and the Senses", Academy Editions, 1996, p. 31.'
      }
    ],
    sections: [
      {
        id: 'thermal-mass-and-memory',
        title: 'The Thermodynamics of Uninsulated Mass',
        paragraphs: [
          'In contemporary construction, walls have dwindled to multi-layered films: rainscreens, mineral wool battens, vapor membranes, and gypsum drywalls barely five centimeters thick. While thermally resistive on paper, such lightweight envelopes possess no thermodynamic memory. When solar radiation strikes an insulated curtain wall, the interior temperature immediately spikes unless artificial air-handling compressors intervene.',
          'Consider, by contrast, the Cistercian monasteries of southern France or Le Corbusier’s monolithic convent of Sainte-Marie de La Tourette. Here, walls exceed seventy centimeters in thickness, poured from unyielding aggregate or compacted local limestone. Such walls do not resist heat through air pockets; they absorb thermal energy through sheer volumetric density. The thermal wave takes between ten and fourteen hours to traverse the cross-section—a physical phenomenon known as thermal lag.',
          'By the time midday solar heat reaches the inner surface, the sun has set, the Mediterranean night has descended, and the cloister can be purged through simple cross-ventilation. The wall does not merely insulate; it phases heat out of sync with human occupancy.'
        ],
        pullQuote: {
          text: 'A wall that lacks mass is merely a partition; a wall endowed with stone volume is an atmospheric calendar.',
          citation: 'Elena Rostova, "The Geologies of Inhabitation"'
        }
      },
      {
        id: 'acoustic-sanctuary',
        title: 'The Tectonic Production of Silence',
        paragraphs: [
          'Architectural silence is rarely an accident. In modern glass and steel spaces, sound waves ricochet between parallel reflective sheets, generating high-frequency flutter and cognitive fatigue. In the heavy cloister, the surface roughness of board-marked concrete and rammed loam breaks specular sound reflection into scattered diffusion.',
          'The monastic arch functions simultaneously as a structural load distributor and an acoustic decelerator. Low-frequency reverberations resonate within vaulted chambers, creating a deep, anchoring hum that masks extraneous environmental noise while clarifying human footsteps and whispered recitation.',
          'When one walks beneath these colonnades, the sensory shift is immediate: the air feels denser, the footfall produces a tactile thud rather than a harsh click, and the visual horizon is bounded by rhythmic piers that block the chaotic peripheral movement of the outside landscape.'
        ]
      },
      {
        id: 'modern-applicability',
        title: 'Towards a Contemporary Heavy Architecture',
        paragraphs: [
          'Can this ancient monastic tectonic be revived within high-density urban environments? Several leading European ateliers think so. Projects in Vorarlberg, Ticino, and rural Portugal are discarding mechanical HVAC systems in favor of uninsulated monomaterial envelopes made from hollow clay tile or low-carbon geopolymer concrete.',
          'By designing buildings with structural mass capable of bearing loads for two centuries rather than twenty years, architects eliminate the cycle of toxic sealants, petrochemical insulation boards, and disposable mechanical ductwork. In an era obsessed with smart sensors, the heaviest brick remains the smartest computer ever devised.'
        ]
      }
    ]
  },
  {
    id: 'art-02',
    slug: 'geometry-of-friction-japanese-timber-joinery',
    title: 'The Geometry of Friction: Nail-less Timber Joinery of the Hida Carpenters',
    subtitle: 'The engineering brilliance of kigumi woodworking, where wood movement, seasonal humidity, and seismic energy are absorbed through interlocking grain.',
    category: 'Vernacular Craft',
    date: 'October 8, 2026',
    readTime: '11 min read',
    wordCount: 2150,
    edition: 'Vol. VII — Autumn Monograph',
    featured: false,
    author: {
      name: 'Kenji Takahashi',
      role: 'Senior Master Builder & Historian',
      affiliation: 'Hida Woodcraft Institute, Takayama',
      initials: 'KT'
    },
    coverImage: '/src/assets/images/timber_joinery_craft_1791991506367.jpg',
    coverCaption: 'Intricate kanawa-tsugi scarf joint executed in aged Hinoki cypress, designed to tighten under tensile load.',
    excerpt: 'In the alpine valleys of Gifu Prefecture, master carpenters have worked for twelve centuries under a strict rule: steel nails rot wood, but interlocking wood lives forever. Kigumi joinery transforms timber elasticity into perpetual structural resilience.',
    keyTakeaways: [
      'Traditional Japanese wooden structures can withstand magnitude 8 earthquakes by converting kinetic shear into microscopic wood-on-wood frictional deformation.',
      'Unlike steel fasteners that create point stress concentrations and induce localized rot, all-wood mortise-and-tenon joints distribute tensile loads evenly across grain fibers.',
      'Drying shrinkage and seasonal hygroscopic expansion are pre-calculated by carpenters: joints grow tighter with age rather than loosening.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Nishi, Kazuo. "What is Japanese Architecture?", Kodansha International, 1985.'
      },
      {
        id: 2,
        label: '2',
        text: 'Brown, Azby. "The Genius of Japanese Carpentry: Secrets of an Ancient Woodworking Craft", Tuttle Publishing, 2013.'
      }
    ],
    sections: [
      {
        id: 'interlocking-wisdom',
        title: 'The Philosophy of Living Material',
        paragraphs: [
          'Western tectonic traditions have long treated timber as an isotropic dead stock to be pinned, bolted, and forced into static compliance with steel angles. The daiku (Japanese master carpenter), however, approaches Hinoki cypress and Sugi cedar as living hydro-sensitive tissue that expands perpendicular to the grain during monsoon humidity and contracts during winter frosts.',
          'If a carpenter fixes two moisture-sensitive beams together using rigid iron spikes, the metal resists the wood’s natural volumetric pulsation. Over decades, repeated micro-cleavages form around the nail shaft, trapping condensed moisture and fostering fungal rot. Kigumi solves this problem by using timber keys (shachi-sen) cut from denser hardwoods such as keyaki (zelkova). When the host timber expands, the key yields slightly, dampening the stress without fracturing.'
        ],
        pullQuote: {
          text: 'If you force wood with iron, iron wins the hour and wood rots the century. If you pair grain with grain, they dance together through ten dynasties.',
          citation: 'Tsunekazu Nishioka, Temple Carpenter of Hōryū-ji'
        }
      },
      {
        id: 'seismic-dissipation',
        title: 'Kinetic Dissipation: The Pagoda as Shock Absorber',
        paragraphs: [
          'The five-story pagoda of Hōryū-ji near Nara has stood since 607 AD, surviving dozens of devastating earthquakes, typhoons, and fires without a single collapse. Structural engineers from Tokyo University who placed seismic accelerometers inside the pagoda discovered an astonishing phenomenon: the pagoda does not resist seismic shock through stiffness; it sways like a stacked snake.',
          'Each floor tier is structurally decoupled from the one below it, resting upon friction-mortised column heads. As the ground accelerates back and forth, the layers slip by millimeters against each other. The thousands of interlocking wood joints act as internal frictional brake pads, converting immense ground motion into negligible thermal dissipation.'
        ]
      },
      {
        id: 'digital-renaissance',
        title: 'CNC Tectonics and the Contemporary Grid',
        paragraphs: [
          'Today, kigumi is experiencing an unexpected renaissance through five-axis robotic CNC milling. Contemporary architects are transcribing hand-chiseled joints—such as okukkake-daisen-tsugi and kanawa-tsugi—into parametric algorithms. By manufacturing glulam components with precision tolerances of 0.2 millimeters, mass timber skyscrapers in Zurich and Tokyo can now be assembled without crane-welded steel plates.',
          'This convergence of ancient craft wisdom and computational geometry represents the future of circular construction: buildings that can be disassembled after sixty years of service without saw blades or demolition hammers, their timbers ready to be reused in another configuration.'
        ]
      }
    ]
  },
  {
    id: 'art-03',
    slug: 'between-threshold-and-void-the-engawa',
    title: 'Between Threshold and Void: The Engawa as Liminal Weather Architecture',
    subtitle: 'The Japanese veranda demonstrates how intermediate microclimates dissolve the violent binary between outdoor elements and interior domestic life.',
    category: 'Spatial Theory',
    date: 'September 29, 2026',
    readTime: '8 min read',
    wordCount: 1620,
    edition: 'Vol. VII — Autumn Monograph',
    featured: false,
    author: {
      name: 'Dr. Shiori Moriyama',
      role: 'Research Chair in Environmental Phenomenology',
      affiliation: 'Kyoto University of Art and Design',
      initials: 'SM'
    },
    coverImage: '/src/assets/images/kyoto_courtyard_moss_1791991505682.jpg',
    coverCaption: 'Weathered cedar engawa looking onto a raked gravel and moss courtyard garden in Kyoto, illustrating deep roof overhangs.',
    excerpt: 'Modern architecture created the airtight sealed window, dividing human life into two stark states: inside or outside. The traditional engawa demonstrates a third condition: a sheltered spatial buffer that tempers climate and human consciousness.',
    keyTakeaways: [
      'The engawa functions as an unconditioned buffer zone, cutting solar heat gain by 65% in summer while acting as a greenhouse trap in winter.',
      'By projecting deep eaves (nokisaki) at a 45-degree angle, summer high-noon sun is blocked while low winter solar rays penetrate deeply onto tatami mats.',
      'Spatially, the veranda turns circulation into contemplation, transforming the act of walking across rooms into a continuous dialogue with rain and stone.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Tanizaki, Jun\'ichiro. "In Praise of Shadows", Leete\'s Island Books, 1977.'
      },
      {
        id: 2,
        label: '2',
        text: 'Kuma, Kengo. "Anti-Object: The Dissolution and Disintegration of Architecture", Architectural Association, 2008.'
      }
    ],
    sections: [
      {
        id: 'the-third-realm',
        title: 'Beyond the Binary Wall',
        paragraphs: [
          'In western domestic architecture, the exterior wall is an absolute frontier. One is either entirely enclosed in conditioned space or exposed to the elements. In the traditional machiya (townhouse) or shoin-zukuri estate, this boundary is fractured into a permeable sequence: first the raked gravel yard, then the water-smoothed stone shoe-drop (kutsunugi-ishi), then the elevated polished timber planking of the engawa, followed by sliding shoji screens, and finally the interior tatami chamber.',
          'This spatial depth creates what Japanese theorists term "ma"—the pregnant in-between interval. The engawa belongs neither to nature nor to domesticity. One can sit with legs dangling over the edge in heavy rain without feeling damp; the deep timber overhang captures the falling water while allowing the cool ozone breeze of the storm to flow directly over one’s bare skin.'
        ],
        pullQuote: {
          text: 'We find beauty not in the thing itself but in the patterns of shadows, the light and the darkness, that one thing against another creates.',
          citation: 'Jun\'ichiro Tanizaki, In Praise of Shadows'
        }
      },
      {
        id: 'passive-envelope-optics',
        title: 'The Solar Geometry of Nokisaki Eaves',
        paragraphs: [
          'The environmental efficiency of the engawa is mathematically elegant. In Kyoto (latitude 35°N), the solar elevation angle reaches approximately 78 degrees during the summer solstice and drops to 31 degrees during the winter solstice.',
          'By extending timber eaves two meters beyond the engawa edge, the high-altitude summer sun is completely intercepted before it can touch the sliding paper panels. The veranda remains cast in cool, perpetual shade. In December, however, the low winter sun slips easily beneath the timber eaves, bathing the interior floorboards in warm direct light throughout the short afternoon.'
        ]
      }
    ]
  },
  {
    id: 'art-04',
    slug: 'shadow-brick-quiet-volume-lewerentz',
    title: 'Shadow, Brick, and Quiet Volume: Lessons from Lewerentz and Utzon',
    subtitle: 'Why Sigurd Lewerentz’s refusal to cut bricks at Klippan produced one of the most hauntingly poetic sacred spaces in architectural history.',
    category: 'Monographs',
    date: 'September 22, 2026',
    readTime: '12 min read',
    wordCount: 2400,
    edition: 'Vol. VII — Autumn Monograph',
    featured: false,
    author: {
      name: 'Soren Lindqvist',
      role: 'Curator of Nordic Architectural Archives',
      affiliation: 'ArkDes Museum, Stockholm',
      initials: 'SL'
    },
    coverImage: '/src/assets/images/nordic_brick_library_1791991507180.jpg',
    coverCaption: 'High-slit fenestration illuminating monolithic dark brick vaulting and raw oak furnishings, reminiscent of St. Peter’s Church, Klippan.',
    excerpt: 'When building St. Peter’s in Klippan, Sigurd Lewerentz issued a decree to the masonry team that horrified them: under no circumstances was a single brick to be cut. Where a brick did not fit, mortar joints were thickened. The resulting surface became a living geological tapestry.',
    keyTakeaways: [
      'Refusing to cut industrial brick forces masonry from standardized geometric perfection into expressive organic rhythm.',
      'Lewerentz glued structural window glass directly to the exterior masonry plane, eliminating frames and producing pure rectangular incisions of sky.',
      'Nordic light in high-latitude winter requires deep volumetric reveals to capture and gently refract low-angle solar rays.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Flora, Nicola et al. "Sigurd Lewerentz 1885-1975: The Complete Works", Electa, 2002.'
      },
      {
        id: 2,
        label: '2',
        text: 'Utzon, Jørn. "Additive Architecture", Arkitektur DK, No. 1, 1970.'
      }
    ],
    sections: [
      {
        id: 'the-uncut-brick',
        title: 'The Tectonic Tyranny of Standardized Dimensions',
        paragraphs: [
          'In ordinary commercial brickwork, masons use diamond saws and trowel edges to snip bricks to fit predetermined modular dimensions. Lewerentz viewed this habit as an insult to the kilning process. Bricks warp, swell, and take on subtle differences in coloration during firing. To cut them is to force an industrial abstraction onto an earthy, ceramic craft.',
          'At the Church of St. Peter in Klippan (completed in 1966 when Lewerentz was eighty-one years old), he instructed the masons to adjust the mortar beds instead. In areas where the bond encountered corners or arched sills, mortar joints swelled from eight millimeters to nearly five centimeters in thickness. The mortar was not smoothed; it was thumbed and scraped flush with the clinker surface. The wall ceased being a pattern of little red rectangles and became a massive monolithic stratum resembling a cliff face.'
        ],
        pullQuote: {
          text: 'Lewerentz showed that true precision does not mean millimeter alignment; it means total fidelity to the behavior of material under gravity.',
          citation: 'Jørn Utzon, notes on visiting Klippan'
        }
      },
      {
        id: 'frameless-voids',
        title: 'Glass Glued Directly to Clay',
        paragraphs: [
          'Equally radical was Lewerentz’s handling of fenestration. Rather than specifying timber or steel window sub-frames that would interrupt the brick boundary, he applied structural polysulfide mastic directly to the outer surface of the dark brickwork and clamped thick panes of plate glass against it with bronze clips.',
          'Seen from the inside of the nave, there are no sills, no jambs, no mullions. There is only an opening in the dark brick through which trees and snow are visible as though through a clean surgical puncture in the earth.'
        ]
      }
    ]
  },
  {
    id: 'art-05',
    slug: 'catching-the-wind-in-mud-earthen-ventilation',
    title: 'Catching the Wind in Mud: Passive Earthen Ventilation of the Iranian Plateau',
    subtitle: 'How traditional badgir wind catchers harness thermal buoyancy and underground water canals to cool desert homes with zero watts of electricity.',
    category: 'Urban Ecology',
    date: 'September 15, 2026',
    readTime: '10 min read',
    wordCount: 1980,
    edition: 'Vol. VI — Summer Monograph',
    featured: false,
    author: {
      name: 'Farhad Behnam & Leila Ghasemi',
      role: 'Founders of Studio Khak / Earthen Tectonics Lab',
      affiliation: 'University of Tehran',
      initials: 'FB'
    },
    coverImage: '/src/assets/images/desert_earthen_tower_1791991506070.jpg',
    coverCaption: 'Adobe wind towers (badgir) rising above the sun-baked mud brick roofs of Yazd during sunset, creating passive convective draft.',
    excerpt: 'In the scorching desert city of Yazd, ambient summer air regularly climbs past 45 degrees Celsius. Yet inside courtyard residences built from sundried mud and straw, interior temperatures hover at an astonishing 24 degrees—without a single fan blade spinning.',
    keyTakeaways: [
      'Badgir towers capture high-altitude desert breezes that are cooler and freer of ground-level dust than street air.',
      'By routing captured air downward through subterranean qanat channels, air is cooled through water evaporation and conductive contact with cool earth.',
      'At night, the tower functions in reverse: daytime heat stored in the mud masonry draws stale interior air up and exhausts it through natural chimney draft.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Roaf, Susan. "The Windcatchers of Yazd", PhD Thesis, Oxford Polytechnic, 1988.'
      },
      {
        id: 2,
        label: '2',
        text: 'Bahadori, M. N. "Passive Cooling Systems in Iranian Architecture", Scientific American, Vol. 238, No. 2, 1978, pp. 144–154.'
      }
    ],
    sections: [
      {
        id: 'anatomy-of-a-windcatcher',
        title: 'The Tectonic Column as Fluid Dynamic Pump',
        paragraphs: [
          'A badgir is not merely a chimney; it is a sophisticated dual-action thermodynamic engine built entirely of mud brick (khezht) plastered with a mix of straw, lime, and clay (kahgel). Rising ten to twenty meters above the city fabric, the tower’s uppermost openings intercept prevailing high-altitude winds that skim above the hot, dusty boundary layer of the ground.',
          'The interior of the shaft is subdivided vertically into four or eight separate flutes by internal brick partition walls. Windward flutes scoop oncoming gusts and guide them down into the subterranean living rooms (sardab). Meanwhile, the leeward flutes, operating under negative Bernoulli pressure, suck warm air from the ceilings of the rooms and exhaust it into the sky.'
        ],
        pullQuote: {
          text: 'The desert people did not build defenses against the heat; they built organs to inhale the sky and exhale the earth.',
          citation: 'Farhad Behnam, "The Breath of Yazd"'
        }
      },
      {
        id: 'qanat-synergy',
        title: 'Subterranean Evaporation and the Qanat',
        paragraphs: [
          'The true genius of the system emerges when the badgir is linked to the qanat—ancient gravity-fed underground water aqueducts running beneath Iranian settlements. As hot, dry wind forced down the badgir shaft reaches the subterranean chamber, it sweeps across the chilled surface of the flowing qanat stream.',
          'Water molecules evaporate instantly into the desiccated air, dropping the dry-bulb temperature by twelve to fifteen degrees Celsius while boosting relative humidity from an arid 8% to a soothing 45%. It is evaporative cooling in its purest, most durable manifestation: powered exclusively by gravity, solar radiation, and wind.'
        ]
      }
    ]
  },
  {
    id: 'art-06',
    slug: 'metabolism-of-lime-ancient-roman-pozzolana',
    title: 'The Metabolism of Lime: Why Ancient Roman Pozzolana Outlasts Portland Cement',
    subtitle: 'Recent mineralogical breakthroughs reveal that Roman concrete’s secret self-healing ability was born from hot-mixing reactive volcanic ash.',
    category: 'Material Studies',
    date: 'September 4, 2026',
    readTime: '7 min read',
    wordCount: 1540,
    edition: 'Vol. VI — Summer Monograph',
    featured: false,
    author: {
      name: 'Prof. Marco Valerius',
      role: 'Chair of Archaeometry & Materials Chemistry',
      affiliation: 'Sapienza University of Rome',
      initials: 'MV'
    },
    coverImage: '',
    coverCaption: 'High-resolution petrographic cross-section demonstrating reactive lime clasts precipitating strätlingite crystals within volcanic ash matrix.',
    excerpt: 'Modern Portland cement structures begin deteriorating within fifty years, plagued by rebar corrosion and micro-cracking. Yet Roman marine piers at Baiae and the unreinforced dome of the Pantheon still stand intact after two thousand years of pounding waves.',
    keyTakeaways: [
      'Roman builders used "hot mixing"—combining quicklime (calcium oxide) with volcanic pozzolana at scorching temperatures rather than slaking lime first.',
      'This process created macroscopic "lime clasts" throughout the matrix that act as chemical self-healing reservoirs when micro-cracks form.',
      'Upon water ingress, the unreacted lime clasts dissolve and recrystallize into calcium carbonate and strätlingite, sealing fissures automatically.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Seymour, Linda M. et al. "Hot mixing: Mechanistic insights into the durability of ancient Roman concrete", Science Advances, Vol. 9, 2023.'
      },
      {
        id: 2,
        label: '2',
        text: 'Jackson, Marie D. et al. "Phillipsite and Al-tobermorite mineral cements produce robusteness in Roman marine concretes", American Mineralogist, 2017.'
      }
    ],
    sections: [
      {
        id: 'the-pantheon-anomaly',
        title: 'The 43-Meter Unreinforced Marvel',
        paragraphs: [
          'The dome of the Pantheon in Rome remains the largest unreinforced concrete dome in the world, spanning 43.3 meters. Cast in 126 AD under Emperor Hadrian, it contains no internal iron rebar. In standard modern structural engineering theory, such a tensile structure should have suffered catastrophic shear cracks centuries ago.',
          'For decades, materials scientists believed the secret lay exclusively in the volcanic ash (pozzolana) mined from Pozzuoli near the Bay of Naples. Pozzolana is rich in reactive silica and alumina. However, chemical analysis always identified tiny white mineral inclusions throughout the concrete matrix. Long dismissed as sloppy mixing by Roman laborers, these "lime clasts" have now been revealed as the central masterstroke of Roman civil engineering.'
        ],
        figure: {
          id: 'fig-pozzolana',
          caption: 'Figure 1: Schematic mechanism of Roman hot-mixed concrete crystallization and self-healing autogenous repair.',
          svgType: 'pozzolana'
        }
      },
      {
        id: 'hot-mixing-revelation',
        title: 'The Discovery of Autogenous Self-Healing',
        paragraphs: [
          'In 2023, high-resolution spectroscopy confirmed that the Romans mixed dry quicklime (CaO) directly with volcanic aggregate and water at elevated temperatures—reaching over 200 degrees Celsius in the mix. This "hot mixing" prevents complete dissolution, leaving behind brittle lime clast pockets.',
          'When microscopic stress cracks inevitably propagate through the mortar during seismic tremors, they preferential pathway directly through the brittle lime clasts. When rainwater or seawater subsequently enters the fissure, it reacts with the calcium-rich clast, producing a saturated calcium solution that precipitates out as crystalline calcite, sealing the crack shut before water can widen it. The concrete literally heals its own wounds.'
        ]
      }
    ]
  },
  {
    id: 'art-07',
    slug: 'mycelium-hemp-lime-radical-chemistry',
    title: 'Mycelium, Hemp, and Lime: The Radical Chemistry of Grown Envelopes',
    subtitle: 'From agricultural waste to monolithic acoustic envelopes: how fungal hyphae bind lignocellulosic fibers into non-toxic, fire-retardant structural insulation.',
    category: 'Material Studies',
    date: 'August 28, 2026',
    readTime: '9 min read',
    wordCount: 1720,
    edition: 'Vol. V — Spring Monograph',
    featured: false,
    author: {
      name: 'Dr. Astrid Lindgren-Ward',
      role: 'Director of Bio-Integrated Envelopes Lab',
      affiliation: 'Royal Danish Academy, Copenhagen',
      initials: 'AW'
    },
    coverImage: '',
    coverCaption: 'Grown fungal mycelium envelope panel binding crushed hemp shivs into a rigid acoustic substrate with zero petrochemical binders.',
    excerpt: 'The global construction industry consumes 40% of extracted raw materials and is responsible for a third of landfill waste. Growing building components from fungal root networks transforms architecture from an extractive industry into an agricultural harvest.',
    keyTakeaways: [
      'Mycelium consumes agricultural byproducts (hemp shiv, flax straw, sawdust) over a 7–14 day cycle inside reusable molds.',
      'Bio-composites achieve thermal conductivity (λ) values as low as 0.038 W/m·K, directly rivaling petroleum-derived expanded polystyrene (EPS).',
      'At end-of-life, panels can be shredded and composted into organic agricultural soil amendment in 90 days.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Jones, Mitchell et al. "Engineered mycelium composite construction materials: A review", Materials & Design, Vol. 187, 2020.'
      },
      {
        id: 2,
        label: '2',
        text: 'Heisel, Felix and Hebel, Dirk. "Cultivated Building Materials: Industrialized Natural Resources for Architecture and Construction", Birkhäuser, 2017.'
      }
    ],
    sections: [
      {
        id: 'hyphal-polymerization',
        title: 'Fungi as Natural Macromolecular Chemists',
        paragraphs: [
          'Mycelium is the vegetative filament network of fungi. When inoculated into pasteurized agricultural residues such as hemp shivs or hazelnut shells, the hyphae secrete digestive enzymes that break down tough cellulose and lignin polymers into simpler sugars.',
          'As the fungus branches exponentially in search of nutrients, its micro-filaments knit the loose substrate together into an extraordinarily dense, interlocking three-dimensional mesh. Once the mold volume is completely filled, the component is heat-baked to terminate biological growth and stabilize moisture content. What remains is a lightweight, water-resistant, highly insulative composite block with zero synthetic glues or formaldehyde.'
        ],
        figure: {
          id: 'fig-mycelium',
          caption: 'Figure 2: Cellular hyphal branching across hemp shiv substrate and carbon storage metrics.',
          svgType: 'mycelium'
        }
      },
      {
        id: 'fire-and-acoustic-behavior',
        title: 'Inherent Fire Retardance and Acoustic Damping',
        paragraphs: [
          'A persistent skepticism surrounding biological construction materials concerns fire safety. Yet mycelium possesses a natural biochemical defense: chitin. Chitin is the same fibrous polysaccharide found in the hard exoskeletons of arthropods. When exposed to an open flame, the exterior layer of mycelium does not melt or emit toxic cyanide fumes like polyurethane insulation; instead, it rapidly carbonizes into a protective ceramic-like char layer that shields the interior matrix from oxygen.',
          'Acoustically, the tortuous micro-porosity of hyphal filaments absorbs up to 75% of incident airborne noise in the 250–2000 Hz vocal frequency range, making grown panels superior to synthetic fiberglass boards for concert halls and communal housing.'
        ]
      }
    ]
  },
  {
    id: 'art-08',
    slug: 'courtyards-of-the-mediterranean-microclimates',
    title: 'Courtyards of the Mediterranean: Microclimatic Wells in High-Density Quarters',
    subtitle: 'The thermodynamic physics of the traditional patio: stack ventilation, radiative cold sinks, and privacy in compact Mediterranean urban fabric.',
    category: 'Urban Ecology',
    date: 'August 19, 2026',
    readTime: '8 min read',
    wordCount: 1680,
    edition: 'Vol. V — Spring Monograph',
    featured: false,
    author: {
      name: 'Mateo Hernandez',
      role: 'Associate Professor of Mediterranean Vernaculars',
      affiliation: 'School of Architecture of Seville',
      initials: 'MH'
    },
    coverImage: '',
    coverCaption: 'Thermal circulation diagram of an Andalusian domestic courtyard showing nighttime pooling of cool air and diurnal stack exhaust.',
    excerpt: 'From the Roman domus to the Andalusian patio, the courtyard has stood as the quintessential Mediterranean housing unit for three millennia. Far from a decorative garden, the patio is an air-conditioning machine powered by astronomical physics.',
    keyTakeaways: [
      'Courtyards function as nocturnal cold air reservoirs: dense cool air sinks into the enclosed well overnight and remains trapped through the morning.',
      'Paved courtyard floors shielded by canvas awnings (toldos) prevent direct solar incidence from heating building thermal mass during the sun’s peak zenith.',
      'Evaporation from central fountain basins lowers surrounding ambient air temperature by 4–8 degrees Celsius via sensible-to-latent heat conversion.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Correa, Charles. "The New Landscape: Urbanisation in the Third World", Concept Media, 1989.'
      },
      {
        id: 2,
        label: '2',
        text: 'Taleghani, Mohammad. "Outdoor thermal comfort within five different urban forms in the Netherlands", Building and Environment, 2015.'
      }
    ],
    sections: [
      {
        id: 'the-three-phases',
        title: 'The Thermodynamic Diurnal Cycle',
        paragraphs: [
          'The Mediterranean courtyard operates through three distinct diurnal phases described by bioclimatic architect Martin Evans. During the night, the open sky acts as a black-body radiator. The courtyard walls and terracotta floor radiate their heat upward into the clear atmosphere, cooling rapidly.',
          'Cold night air, being denser than warm ambient air, flows over the parapet roof and sinks into the bottom of the well. Because the surrounding building rooms protect the courtyard from lateral wind shear, this pocket of dense, chilled air sits undisturbed at the ground level like water in a bucket.'
        ],
        figure: {
          id: 'fig-courtyard',
          caption: 'Figure 3: Thermal convective flow lines during diurnal cycle inside high-aspect Andalusian courtyard.',
          svgType: 'courtyard'
        }
      },
      {
        id: 'high-density-without-sprawl',
        title: 'Urban Geometry and Social Intimacy',
        paragraphs: [
          'Beyond its climatic prowess, the courtyard solves a profound urban planning dilemma: how to achieve extreme residential density without sacrificing privacy, natural daylight, or green living. Courtyard housing fabrics in Cordoba, Fez, and Aleppo achieve Floor Area Ratios (FAR) exceeding 2.5 with buildings only two or three stories tall.',
          'There are no front lawns requiring fossil-fueled mowing, no sprawling asphalt suburban street widths, and no shared party-wall windows overlooking neighbors. Life turns inward toward a private slice of sky, cool fountain water, and climbing jasmine.'
        ]
      }
    ]
  },
  {
    id: 'art-09',
    slug: 'tactile-floor-terracotta-cobblestone-foot',
    title: 'The Tactile Floor: Terracotta, Cobblestone, and the Somatosensory Foot',
    subtitle: 'How pedestrian paving textures modulate human walking velocity, posture, thermal grounding, and emotional perception of the civic sphere.',
    category: 'Spatial Theory',
    date: 'August 11, 2026',
    readTime: '6 min read',
    wordCount: 1350,
    edition: 'Vol. V — Spring Monograph',
    featured: false,
    author: {
      name: 'Claire de Saint-Germain',
      role: 'Spatial Anthropologist & Landscape Architect',
      affiliation: 'École Nationale Supérieure du Paysage, Versailles',
      initials: 'CS'
    },
    coverImage: '',
    coverCaption: '45-degree herringbone terracotta paving study illustrating sand-joint drainage beds and tactile footstep feedback.',
    excerpt: 'Contemporary cities are paved with seamless, frictionless asphalt and polished granite slabs. We glide across our streets without feeling them. In historic stone cities, our feet engage in continuous tactile dialogue with the geological surface of the earth.',
    keyTakeaways: [
      'Irregular cobblestone and split stone pavers activate the human proprioceptive foot arch, slowing average walking velocity by 28%.',
      'Unsealed sand-set brick paving absorbs rainwater on site, eliminating stormwater runoff surges while replenishing urban aquifers.',
      'Thermal effusivity of natural terracotta creates warm sensory tactile comfort for human touch compared to cold dense synthetic terrazzo.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Pallasmaa, Juhani. "The Thinking Hand: Existential and Embodied Wisdom in Architecture", John Wiley & Sons, 2009.'
      },
      {
        id: 2,
        label: '2',
        text: 'Gehl, Jan. "Life Between Buildings: Using Public Space", Island Press, 2011.'
      }
    ],
    sections: [
      {
        id: 'the-erased-foot',
        title: 'The Modern Eradication of Texture',
        paragraphs: [
          'In his seminal treatise "The Thinking Hand", Juhani Pallasmaa laments the reduction of architectural experience to the ocular realm. We design spaces to be photographed for screens, ignoring how they sound to the ear and how they register to the soles of our shoes.',
          'Smooth monolithic concrete sidewalks and asphalt roadways encourage fast, distracted transit. The pedestrian does not look down because there is nothing to read; the foot has been demoted to a mechanical wheel. By contrast, walking across the porphyry cobblestones (sampietrini) of Rome or the herringbone brick alleys of Siena requires constant subconscious muscular micro-adjustments that connect the human nervous system to the ground plane.'
        ],
        figure: {
          id: 'fig-cobblestone',
          caption: 'Figure 4: Somatosensory paving cross-section showing permeable sand bedding and herringbone dispersion.',
          svgType: 'cobblestone'
        }
      },
      {
        id: 'permeability-and-civic-life',
        title: 'The Hydraulic Living Street',
        paragraphs: [
          'Paving is also environmental infrastructure. When bricks are laid over a bed of crushed aggregate and washed river sand without impervious cement mortar joints, the street functions as a vast sponge. Rainwater filters naturally through the thousands of hairline interstices, preventing the sudden urban flash floods that plague tarmac cities.',
          'As the stored moisture evaporates during dry afternoons, it cools the pedestrian microclimate. The street breathes.'
        ]
      }
    ]
  },
  {
    id: 'art-10',
    slug: 'alpine-steading-modular-timber-granaries',
    title: 'The Alpine Steading: Modular Timber Granaries and Rodent Cantilevers',
    subtitle: 'The engineering brilliance of Swiss Valais raccards: demountable larch timber framing elevated upon mushroom-shaped stone discs.',
    category: 'Vernacular Craft',
    date: 'July 30, 2026',
    readTime: '7 min read',
    wordCount: 1490,
    edition: 'Vol. IV — Monograph Collection',
    featured: false,
    author: {
      name: 'Lukas von Allmen',
      role: 'Master Timber Carpenter & Alpine Vernacular Historian',
      affiliation: 'Center for Alpine Architecture, Brig',
      initials: 'LA'
    },
    coverImage: '',
    coverCaption: 'Traditional Valais raccard elevated on stone mushroom pillars (stadel), providing rodent defense and damp insulation.',
    excerpt: 'High in the Swiss cantons of Valais and Grisons, isolated farming hamlets developed a timber granary so structurally sophisticated that families could dismantle an entire multi-ton building, load it onto mule carts, and reassemble it in a new valley within days.',
    keyTakeaways: [
      'Circular schist stone discs (Mäuseplatten) perched atop timber pillars create an insurmountable horizontal cantilever that prevents rodents from entering grain stores.',
      'Serrated corner lap joints (Blockbau) permit wood beams to settle tightly under gravity without loosening over centuries of heavy alpine snow loads.',
      'The entire superstructure is dry-stacked without foundation concrete, decoupling timber from rising soil moisture.'
    ],
    footnotes: [
      {
        id: 1,
        label: '1',
        text: 'Weiss, Richard. "Häuser und Landschaften der Schweiz", Eugen Rentsch Verlag, 1959.'
      },
      {
        id: 2,
        label: '2',
        text: 'Zumbrunn, Hans. "Das Walliser Blockhaus und seine Konstruktion", Verlag Schifferli, 1974.'
      }
    ],
    sections: [
      {
        id: 'the-stadel-mechanism',
        title: 'The Kinetic Rodent Shield',
        paragraphs: [
          'In subsistence alpine agriculture, losing grain supplies to mountain rodents or damp mold during the long winter meant starvation. The solution invented by Valais farmers was the "raccard" or "stadel". Rather than building directly on the earth, the timber granary is hoisted two meters into the air on short wooden stilts.',
          'Crucially, between the top of each stilt and the bottom of the building beams sits a massive circular disc of cleaved slate or schist stone known as the Mäuseplatte (mouse plate). Field mice can scamper vertically up the rough bark of the timber posts, but upon reaching the underside of the flat stone disc, their claws cannot grip the slick horizontal underside. Unable to execute the inverted ceiling climb, they tumble harmlessly back to the ground.'
        ],
        figure: {
          id: 'fig-steading',
          caption: 'Figure 5: Exploded structural axonometric of the Valais stadel mushroom pillar and interlocking larch beamwork.',
          svgType: 'steading'
        }
      },
      {
        id: 'circular-prefabrication',
        title: 'Medieval Demountable Prefabrication',
        paragraphs: [
          'Every timber log in a raccard was marked with roman numeral chisel strokes (Zimmerzeichen) on its interlocking corner joints. If a family sold land or inheritance was subdivided, the granary was taken down log by log without damaging a single structural fiber. It represents the pinnacle of demountable circular timber engineering—long before twentieth-century modernism coined the phrase "design for deconstruction".'
        ]
      }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Spatial Theory',
  'Vernacular Craft',
  'Urban Ecology',
  'Material Studies',
  'Monographs'
] as const;
