import React from 'react';

interface HeroProps {
  onOpenPanel: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPanel }) => {
  const [activeHp, setActiveHp] = React.useState<string>('fluent');

  const hpToggle = (id: string) => {
    setActiveHp(prev => (prev === id ? '' : id));
  };

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-eyebrow">AI Product Manager</div>
        <h1 className="hero-headline">
          I discover problems<br />worth solving and design<br /><em>AI products</em> that create value.
        </h1>
        <p className="hero-sub">
          From discovery to delivery, I work across product strategy, system design, and AI implementation. The thread across everything is understanding the problem deeply enough to know what kind of solution it actually needs.
        </p>
        <div className="hero-cta-group">
          <a className="btn-primary" href="#work"><span>View My Work ↗</span></a>
          <a className="btn-secondary" href="Saurabh_Sudhir_Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
        <div className="hero-contact-row">
          <div className="hero-contact-item">
            <span className="hero-contact-label">Email</span>
            <a className="hero-contact-val" href="mailto:sausud05@gmail.com">sausud05@gmail.com</a>
          </div>
          <div className="hero-contact-item">
            <span className="hero-contact-label">LinkedIn</span>
            <a className="hero-contact-val" href="https://linkedin.com/in/saurabh0501" target="_blank" rel="noopener noreferrer">linkedin.com/in/saurabh0501</a>
          </div>
          <div className="hero-contact-item">
            <span className="hero-contact-label">Phone</span>
            <a className="hero-contact-val" href="tel:+917829391665">+91 78293 91665</a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hp-label">Featured Work</div>
        <div className="hp-list">
          {/* ── Fluent ── */}
          <div className={`hp-item ${activeHp === 'fluent' ? 'active' : ''}`} id="hp-fluent" onClick={() => hpToggle('fluent')}>
            <div className="hp-header">
              <div className="hp-icon fluent">⚡</div>
              <div className="hp-title-group">
                <div className="hp-name">Fluent &nbsp;·&nbsp; AI Workflow Practice</div>
                <div className="hp-tagline">0-to-1 &nbsp;·&nbsp; n8n + Gemini 2.5 Flash &nbsp;·&nbsp; MGA Group Project</div>
              </div>
              <div className="hp-badge-wrap">
                <span className="hp-badge live">Live</span>
                <span className="hp-chevron">▼</span>
              </div>
            </div>
            <div className="hp-body">
              <div className="hp-body-inner">
                <div className="hp-insight">“28 of 30 people used AI last week. Only 3 felt on top of it. The gap is not access.”</div>
                <div className="hp-chips">
                  <span className="hp-chip highlight">Primary research</span>
                  <span className="hp-chip">India + Germany</span>
                  <span className="hp-chip">Full PRD</span>
                  <span className="hp-chip">Live prototype</span>
                </div>
                <div className="hp-ctas">
                  <a className="hp-cta primary" href="https://tryfluent.netlify.app" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>View Prototype ↗</a>
                  <button className="hp-cta ghost" onClick={(e) => { e.stopPropagation(); onOpenPanel('fluent'); }}>Case Study</button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Car Copilot ── */}
          <div className={`hp-item ${activeHp === 'cardekho' ? 'active' : ''}`} id="hp-cardekho" onClick={() => hpToggle('cardekho')}>
            <div className="hp-header">
              <div className="hp-icon cardekho">🚗</div>
              <div className="hp-title-group">
                <div className="hp-name">Car Copilot &nbsp;·&nbsp; CarDekho AI</div>
                <div className="hp-tagline">AI Fit Score &nbsp;·&nbsp; Trust Cards &nbsp;·&nbsp; Decision Nudge</div>
              </div>
              <div className="hp-badge-wrap">
                <span className="hp-badge prd">PRD + Proto</span>
                <span className="hp-chevron">▼</span>
              </div>
            </div>
            <div className="hp-body">
              <div className="hp-body-inner">
                <div className="hp-insight">“High intent, no conversion. The platform had no way to tell a buyer they had found the right car.”</div>
                <div className="hp-chips">
                  <span className="hp-chip highlight">AI Fit Score</span>
                  <span className="hp-chip">Trust Cards</span>
                  <span className="hp-chip">Decision Nudge</span>
                  <span className="hp-chip">Full PRD</span>
                </div>
                <div className="hp-ctas">
                  <a className="hp-cta primary" href="https://carcopilot-buddy.lovable.app" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>View Prototype ↗</a>
                  <button className="hp-cta ghost" onClick={(e) => { e.stopPropagation(); onOpenPanel('cardekho'); }}>Case Study</button>
                </div>
              </div>
            </div>
          </div>

          {/* ── DriveU ── */}
          <div className={`hp-item ${activeHp === 'driveu' ? 'active' : ''}`} id="hp-driveu" onClick={() => hpToggle('driveu')}>
            <div className="hp-header">
              <div className="hp-icon driveu">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="rgba(255,200,140,0.85)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="2.5" />
                  <line x1="12" y1="3" x2="12" y2="9.5" />
                  <line x1="3.7" y1="16.5" x2="9.3" y2="13.2" />
                  <line x1="20.3" y1="16.5" x2="14.7" y2="13.2" />
                </svg>
              </div>
              <div className="hp-title-group">
                <div className="hp-name">DriveU &nbsp;·&nbsp; Post-Assignment Clarity</div>
                <div className="hp-tagline">Product Analysis &nbsp;·&nbsp; Full PRD &nbsp;·&nbsp; HelloPM</div>
              </div>
              <div className="hp-badge-wrap">
                <span className="hp-badge prd">Full PRD</span>
                <span className="hp-chevron">▼</span>
              </div>
            </div>
            <div className="hp-body">
              <div className="hp-body-inner">
                <div className="hp-insight">“The churn was not about matching speed. It was what happened after the driver was assigned.”</div>
                <div className="hp-chips">
                  <span className="hp-chip highlight">Why-Why analysis</span>
                  <span className="hp-chip">RICE prioritisation</span>
                  <span className="hp-chip">State comms reframe</span>
                </div>
                <div className="hp-ctas">
                  <a className="hp-cta primary" href="/DriveU_Case_Study_Saurabh_Sudhir.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Read Case Study ↗</a>
                  <button className="hp-cta ghost" onClick={(e) => { e.stopPropagation(); onOpenPanel('driveu'); }}>PRD Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hp-footer">
          <span className="hp-footer-note">3 of 10 projects shown</span>
          <a className="hp-footer-link" href="#work">View all work ↗</a>
        </div>
      </div>
    </section>
  );
};
