import React from 'react';

interface WorkSectionProps {
  onOpenPanel: (id: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  tier3Open: boolean;
  setTier3Open: (open: boolean) => void;
  onNavigateToMilestone: (milestoneId: string) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  onOpenPanel,
  activeFilter,
  setActiveFilter,
  tier3Open,
  setTier3Open,
  onNavigateToMilestone,
}) => {
  const toggleTier3 = () => {
    setTier3Open(!tier3Open);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const isVisible = (tags: string[]) => {
    if (activeFilter === 'all') return true;
    return tags.includes(activeFilter);
  };

  // Determine if grouped headers/containers are visible based on current filters
  const hasVisibleGroupT1 = isVisible(['live', 'prd']) || isVisible(['live', 'prd']);
  const hasVisibleGroupEnterprise = isVisible(['all']);

  return (
    <section id="work">
      <div className="section-header fade-up visible">
        <span className="section-num">01</span>
        <h2 className="section-title">Selected Work</h2>
        <div className="section-rule"></div>
      </div>

      {/* Filter tabs */}
      <div className="filter-tabs" id="filterTabsBar" role="tablist">
        <button
          className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeFilter === 'all'}
          onClick={() => handleFilterClick('all')}
        >
          All
        </button>
        <button
          className={`filter-tab live-tab ${activeFilter === 'live' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeFilter === 'live'}
          onClick={() => handleFilterClick('live')}
        >
          Live Prototypes
        </button>
        <button
          className={`filter-tab ${activeFilter === 'prd' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeFilter === 'prd'}
          onClick={() => handleFilterClick('prd')}
        >
          PRDs
        </button>
        <button
          className={`filter-tab ${activeFilter === 'spec' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeFilter === 'spec'}
          onClick={() => handleFilterClick('spec')}
        >
          Specs
        </button>
      </div>

      {/* ══════════════════════════════════
           TIER 1 — Featured AI & Independent
           ══════════════════════════════════ */}
      {hasVisibleGroupT1 && (
        <>
          <div className="tier-label t1" id="group-t1">Featured AI &amp; Independent Projects</div>

          <div className="featured-strip" id="featuredStrip">
            {/* ── FLUENT ── */}
            {isVisible(['live', 'prd']) && (
              <div className="fc-fluent" onClick={() => onOpenPanel('fluent')}>
                <span className="fc-arrow">↗</span>
                <div className="fc-browser-chrome">
                  <div className="fc-browser-bar">
                    <div className="fc-browser-dots">
                      <div className="fc-browser-dot"></div>
                      <div className="fc-browser-dot"></div>
                      <div className="fc-browser-dot"></div>
                    </div>
                    <div className="fc-browser-url">tryfluent.netlify.app</div>
                  </div>
                  <div className="fc-iframe-wrap">
                    <iframe
                      src="https://tryfluent.netlify.app"
                      loading="lazy"
                      title="Fluent live preview"
                      sandbox="allow-scripts allow-same-origin"
                    ></iframe>
                  </div>
                </div>
                <div className="fc-footer">
                  <div className="fc-footer-left">
                    <div className="fc-badge-row">
                      <span className="fc-badge live">Live prototype</span>
                    </div>
                    <div className="fc-footer-title">Fluent &nbsp;·&nbsp; AI Workflow Practice Platform</div>
                    <div className="fc-footer-sub">The gap is not access &nbsp;·&nbsp; AI Product &middot; 0-to-1 &middot; n8n + Gemini 2.5 Flash</div>
                  </div>
                  <div className="fc-footer-cta-group">
                    <a
                      className="fc-cta primary"
                      href="https://tryfluent.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Prototype ↗
                    </a>
                    <button className="fc-cta ghost" onClick={(e) => { e.stopPropagation(); onOpenPanel('fluent'); }}>
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ── CARDEKHO ── */}
            {isVisible(['live', 'prd']) && (
              <div className="fc-cardekho" onClick={() => onOpenPanel('cardekho')}>
                <span className="fc-arrow">↗</span>
                <div className="fc-cd-body">
                  <div className="fc-cd-left">
                    <div>
                      <div className="fc-cd-type">AI Feature Design &nbsp;·&nbsp; Full PRD + Prototype &nbsp;·&nbsp; HelloPM</div>
                    </div>
                    <div>
                      <div className="fc-cd-insight-num">02</div>
                      <div className="fc-cd-insight">
                        High intent, no conversion. The platform had no way to tell a buyer they had found the right car.
                      </div>
                    </div>
                    <div>
                      <div className="fc-badge-row" style={{ marginBottom: '14px' }}>
                        <span className="fc-badge prd">Full PRD + Prototype</span>
                      </div>
                      <div className="fc-footer-cta-group">
                        <a
                          className="fc-cta primary"
                          href="https://carcopilot-buddy.lovable.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Prototype ↗
                        </a>
                        <button className="fc-cta ghost" onClick={(e) => { e.stopPropagation(); onOpenPanel('cardekho'); }}>
                          Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="fc-cd-right">
                    <iframe
                      src="https://carcopilot-buddy.lovable.app"
                      loading="lazy"
                      title="CarDekho AI prototype"
                      sandbox="allow-scripts allow-same-origin"
                    ></iframe>
                  </div>
                </div>
                <div className="fc-cd-footer">
                  <div className="fc-cd-footer-left">
                    <div className="fc-cd-footer-name">AI Car Buying Companion &nbsp;·&nbsp; CarDekho</div>
                    <div className="fc-footer-sub" style={{ marginTop: '2px' }}>
                      Trust over transparency &nbsp;·&nbsp; AI Fit Score &middot; Trust Cards &middot; Decision Nudge
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="featured-strip" id="featuredStrip2" style={{ marginTop: '8px' }}>
            {/* ── DRIVEU ── */}
            {isVisible(['prd']) && (
              <div className="fc-driveu" onClick={() => onOpenPanel('driveu')}>
                <span className="fc-arrow">↗</span>
                <div className="fc-du-visual">
                  <div className="fc-du-vis-label">What users saw</div>
                  <div className="fc-du-timeline">
                    <div className="fc-du-step">
                      <div className="fc-du-dot done"></div>
                      <div className="fc-du-step-label">Driver<br />assigned</div>
                    </div>
                    <div className="fc-du-line"></div>
                    <div className="fc-du-step">
                      <div className="fc-du-dot blank"></div>
                      <div className="fc-du-step-label" style={{ color: 'rgba(255,255,255,0.18)' }}>??</div>
                    </div>
                    <div className="fc-du-line faded"></div>
                    <div className="fc-du-step">
                      <div className="fc-du-dot blank"></div>
                      <div className="fc-du-step-label" style={{ color: 'rgba(255,255,255,0.18)' }}>??</div>
                    </div>
                    <div className="fc-du-line faded"></div>
                    <div className="fc-du-step">
                      <div className="fc-du-dot dim"></div>
                      <div className="fc-du-step-label">Arriving</div>
                    </div>
                  </div>
                  <div className="fc-du-vis-label" style={{ marginTop: '10px' }}>What the PRD fixed</div>
                  <div className="fc-du-timeline">
                    <div className="fc-du-step">
                      <div className="fc-du-dot done"></div>
                      <div className="fc-du-step-label">Assigned</div>
                    </div>
                    <div className="fc-du-line lit"></div>
                    <div className="fc-du-step">
                      <div className="fc-du-dot done"></div>
                      <div className="fc-du-step-label">ETA<br />confirmed</div>
                    </div>
                    <div className="fc-du-line lit"></div>
                    <div className="fc-du-step">
                      <div className="fc-du-dot done"></div>
                      <div className="fc-du-step-label">En<br />route</div>
                    </div>
                    <div className="fc-du-line lit"></div>
                    <div className="fc-du-step">
                      <div className="fc-du-dot done"></div>
                      <div className="fc-du-step-label">Arriving</div>
                    </div>
                  </div>
                </div>
                <div className="fc-du-footer">
                  <div className="fc-du-footer-top">
                    <div className="fc-badge-row">
                      <span className="fc-badge prd">Full PRD</span>
                    </div>
                    <div className="fc-du-insight">
                      The churn was not about matching speed. It was what happened after the driver was assigned.
                    </div>
                    <div className="fc-footer-sub">DriveU &nbsp;·&nbsp; Ride-hailing Reliability &nbsp;·&nbsp; 2026</div>
                  </div>
                  <div className="fc-footer-cta-group">
                    <a
                      className="fc-cta primary"
                      href="/DriveU_Case_Study_Saurabh_Sudhir.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read Case Study ↗
                    </a>
                    <button className="fc-cta ghost" onClick={(e) => { e.stopPropagation(); onOpenPanel('driveu'); }}>
                      PRD Details
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ── LOMIHA — IN DEVELOPMENT ── */}
            {isVisible(['spec']) && (
              <div className="lomiha-card" onClick={() => onOpenPanel('lomiha')}>
                <span className="fc-arrow">↗</span>
                <div className="lomiha-arch">
                  <div className="fc-lm-arch">
                    <div className="fc-lm-row">
                      <div className="fc-lm-node user">
                        User<br />
                        <span>No login</span>
                      </div>
                      <div className="fc-lm-conn">→</div>
                      <div className="fc-lm-node rag">
                        RAG<br />
                        <span>Chunked KB</span>
                      </div>
                      <div className="fc-lm-conn">→</div>
                      <div className="fc-lm-node prompt">
                        Prompt<br />
                        <span>Architecture</span>
                      </div>
                    </div>
                    <div className="fc-lm-row" style={{ justifyContent: 'flex-end', marginTop: '6px' }}>
                      <div className="fc-lm-safety">
                        <div className="fc-lm-safety-icon">▲</div>
                        <div className="fc-lm-safety-label">
                          Safety<br />
                          escalation
                        </div>
                      </div>
                      <div className="fc-lm-conn" style={{ transform: 'rotate(180deg)' }}>→</div>
                      <div className="fc-lm-node response">
                        Response<br />
                        <span>No retention</span>
                      </div>
                    </div>
                    <div className="fc-lm-trust-badge">
                      <span className="fc-lm-trust-dot"></span>
                      Trust is the product in v1
                    </div>
                  </div>
                </div>
                <div className="lomiha-info">
                  <div>
                    <div className="lomiha-wip-badge">
                      <span className="lomiha-wip-dot"></span>Production build in progress
                    </div>
                    <div className="lomiha-insight" style={{ marginTop: '14px' }}>
                      No login. No data retention. Trust is the product in v1.
                    </div>
                    <div className="lomiha-sub">Lomiha &nbsp;·&nbsp; Mental Wellness Navigator &nbsp;·&nbsp; RAG Spec &nbsp;·&nbsp; 2026</div>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)', lineHeight: '1.65', marginTop: '12px', fontWeight: 300 }}>
                      The engineer-ready specification is complete. The full-stack production build is actively in development and will be deployed here when live. The architecture decisions, trust model, and system design are available now.
                    </p>
                  </div>
                  <div className="fc-footer-cta-group">
                    <button className="fc-cta primary" onClick={(e) => { e.stopPropagation(); onOpenPanel('lomiha'); }}>
                      View Architecture ↗
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* ══════════════════════════════════
           TIER 2 — Enterprise Product Impact
           ══════════════════════════════════ */}
      {hasVisibleGroupEnterprise && (
        <>
          <div className="tier-label" id="group-enterprise" style={{ marginTop: '32px' }}>
            Enterprise Product Impact &nbsp;·&nbsp; Neetable Technologies
          </div>
          <div className="work-grid" id="gridEnterprise">
            {/* ── SYLVESTER A.I. ── */}
            <div className="pcard" onClick={() => onOpenPanel('sylvester')}>
              <div className="pcard-arrow">↗</div>
              <div className="pcard-meta">
                <span className="pcard-type company">0-to-1 &nbsp;·&nbsp; AI Product</span>
                <span className="pcard-source company">Neetable</span>
              </div>
              <div className="card-visual cv-sylvester">
                <div className="cv-syl-story">
                  <div className="cv-syl-step">
                    <div className="cv-syl-icon cut">✂</div>
                    <div className="cv-syl-label">Feature<br />cut</div>
                  </div>
                  <div className="cv-syl-arrow">→</div>
                  <div className="cv-syl-step">
                    <div className="cv-syl-icon ship">✓</div>
                    <div className="cv-syl-label">6 wks<br />earlier</div>
                  </div>
                  <div className="cv-syl-arrow">→</div>
                  <div className="cv-syl-step">
                    <div className="cv-syl-icon globe">🌎</div>
                    <div className="cv-syl-label">Global<br />launch</div>
                  </div>
                </div>
                <div className="cv-syl-result">
                  <div>
                    <div className="cv-syl-num">172+</div>
                  </div>
                  <div className="cv-syl-numlabel">Countries<br />in 4 months</div>
                </div>
              </div>
              <div className="pcard-insight">Cut the feature. Launched 6 weeks earlier.</div>
              <div className="pcard-company">Sylvester A.I. &nbsp;·&nbsp; AI Pet Health</div>
              <div className="pcard-metric">~30% GTM acceleration</div>
            </div>

            {/* ── COAL MINING ── */}
            <div className="pcard" onClick={() => onOpenPanel('coal')}>
              <div className="pcard-arrow">↗</div>
              <div className="pcard-meta">
                <span className="pcard-type company">Enterprise &nbsp;·&nbsp; Greenfield</span>
                <span className="pcard-source company">Neetable</span>
              </div>
              <div className="card-visual cv-coal">
                <div className="cv-coal-zones">
                  <div className="cv-coal-zone connected">●&nbsp;Signal</div>
                  <div className="cv-coal-zone dead">No signal</div>
                  <div className="cv-coal-zone dead">No signal</div>
                  <div className="cv-coal-zone connected">●&nbsp;Signal</div>
                </div>
                <div className="cv-coal-fix">
                  <div className="cv-coal-fix-label">Fix applied</div>
                  <div className="cv-coal-fix-val">
                    <div className="cv-coal-dot"></div>Offline-first architecture &nbsp;·&nbsp; 100% integrity
                  </div>
                </div>
              </div>
              <div className="pcard-insight">The data loss was invisible in every requirement document.</div>
              <div className="pcard-company">BGR Mining &amp; Infra &nbsp;·&nbsp; Coal Mining Operations Platform</div>
              <div className="pcard-metric">3–5 hrs/shift manual audit eliminated</div>
            </div>

            {/* ── PHOXHEALTH ── */}
            <div className="pcard" onClick={() => onOpenPanel('phox')}>
              <div className="pcard-arrow">↗</div>
              <div className="pcard-meta">
                <span className="pcard-type company">Healthcare SaaS &nbsp;·&nbsp; US Client</span>
                <span className="pcard-source company">Neetable</span>
              </div>
              <div className="card-visual cv-phox">
                <div className="cv-phox-compare">
                  <div className="cv-phox-model old">
                    <div className="cv-phox-shape">
                      <svg viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22" cy="19" r="14" stroke="rgba(176, 105, 32, 0.4)" strokeWidth="1.5" strokeDasharray="3 2" />
                        <circle cx="22" cy="19" r="3" fill="rgba(176, 105, 32, 0.5)" />
                        <line x1="8" y1="4" x2="36" y2="34" stroke="rgba(176, 105, 32, 0.3)" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className="cv-phox-model-label">Radius<br />model</div>
                  </div>
                  <div className="cv-phox-model new">
                    <div className="cv-phox-shape">
                      <svg viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="22,4 38,14 34,32 10,32 6,14" stroke="rgba(79, 112, 148, 0.5)" strokeWidth="1.5" fill="rgba(79, 112, 148, 0.06)" />
                        <circle cx="22" cy="19" r="3" fill="rgba(79, 112, 148, 0.6)" />
                      </svg>
                    </div>
                    <div className="cv-phox-model-label">Polygon<br />model</div>
                  </div>
                </div>
                <div className="cv-phox-result">
                  <div className="cv-phox-result-left">Dispatcher overhead</div>
                  <div className="cv-phox-result-val">↓&nbsp;~20%</div>
                </div>
              </div>
              <div className="pcard-insight">Polygon over radius. The simpler model was costing dispatchers hours every shift.</div>
              <div className="pcard-company">PhoxHealth &nbsp;·&nbsp; Healthcare Logistics</div>
              <div className="pcard-metric">Root cause was the routing model, not the UX</div>
            </div>
          </div>
        </>
      )}

      {/* ══════════════════════════════════
           TIER 3 — More Work (collapsed smart navigation)
           ══════════════════════════════════ */}
      {activeFilter === 'all' && (
        <>
          <button className="tier3-toggle" id="tier3Toggle" onClick={toggleTier3}>
            <div className="tier3-toggle-left font-sans">
              <span className="tier3-toggle-label uppercase">More Work &amp; Research Chapters</span>
              <span className="tier3-toggle-count">Sleek Navigational Shortcuts to Deeper Chronological Axis Chapters</span>
            </div>
            <span className={`tier3-chevron ${tier3Open ? 'open' : ''}`} id="tier3Chevron">▼</span>
          </button>

          <div className={`tier3-content ${tier3Open ? 'open' : ''}`} id="tier3Content">
            
            {/* Smart Navigation Layer (Bypasses duplicate project cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full pt-4">
              
              {/* Shortcut 1: Masters Projects */}
              <div 
                onClick={() => onNavigateToMilestone('journey-masters')}
                className="p-5 border border-zinc-800/80 bg-zinc-900/10 rounded-md transition-all duration-300 hover:border-[#B06920]/70 hover:bg-[#1C1A18]/30 cursor-pointer flex flex-col justify-between max-w-full group animate-fadeIn"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-[0.2em] text-[#B06920] font-mono font-bold uppercase block mb-1">
                      // Chapter Shortcut
                    </span>
                    <span className="text-zinc-650 font-mono text-xs group-hover:text-[#B06920] transition-colors">Jump ↓</span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-tight mt-1">
                    Masters Projects
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed font-sans font-light">
                    Explore strategic innovation frameworks completed in-person in Germany. Highlights the Flagship Postgraduate Thesis, Berlin Administration Digitalisation, and VISA ledger studies.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 font-medium">4 Projects · Germany</span>
                  <span className="text-[9px] font-mono text-[#B06920] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Timeline Axis ↗
                  </span>
                </div>
              </div>

              {/* Shortcut 2: Research & Education */}
              <div 
                onClick={() => onNavigateToMilestone('journey-wharton')}
                className="p-5 border border-zinc-800/80 bg-zinc-900/10 rounded-md transition-all duration-300 hover:border-[#B06920]/70 hover:bg-[#1C1A18]/30 cursor-pointer flex flex-col justify-between max-w-full group animate-fadeIn"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-[0.2em] text-[#B06920] font-mono font-bold uppercase block mb-1">
                      // Chapter Shortcut
                    </span>
                    <span className="text-zinc-650 font-mono text-xs group-hover:text-[#B06920] transition-colors">Jump ↓</span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-tight mt-1">
                    Research &amp; Credentials
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed font-sans font-light">
                    Review academic executive certifications covering machine learning at Wharton Business School and core design foundations completed at LISAA School of Design.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 font-medium">Wharton &amp; LISAA</span>
                  <span className="text-[9px] font-mono text-[#B06920] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Timeline Axis ↗
                  </span>
                </div>
              </div>

              {/* Shortcut 3: Additional Product Work */}
              <div 
                onClick={() => onNavigateToMilestone('journey-neetable')}
                className="p-5 border border-zinc-800/80 bg-zinc-900/10 rounded-md transition-all duration-300 hover:border-[#B06920]/70 hover:bg-[#1C1A18]/30 cursor-pointer flex flex-col justify-between max-w-full group animate-fadeIn"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-[0.2em] text-[#B06920] font-mono font-bold uppercase block mb-1">
                      // Chapter Shortcut
                    </span>
                    <span className="text-zinc-650 font-mono text-xs group-hover:text-[#B06920] transition-colors">Jump ↓</span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-tight mt-1">
                    Additional PM Work
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed font-sans font-light">
                    Analyze enterprise systems and process governance at Smruthi Technologies &amp; Neetable. Covers Apollo Pharmacies, vendor portals, and APAC market delivery schedules.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 font-medium">B2B SaaS · Process Sprints</span>
                  <span className="text-[9px] font-mono text-[#B06920] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Timeline Axis ↗
                  </span>
                </div>
              </div>

            </div>

          </div>
        </>
      )}
    </section>
  );
};
