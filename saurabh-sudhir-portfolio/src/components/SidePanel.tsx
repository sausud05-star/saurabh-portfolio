import React from 'react';
import { panelsData, PanelConfig } from '../panelsData';
import { BlueprintDiagram } from './BlueprintDiagram';

interface SidePanelProps {
  activePanel: string | null;
  onClose: () => void;
}

export const SidePanel: React.FC<SidePanelProps> = ({ activePanel, onClose }) => {
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Close when clicking overlay backdrop directly
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activePanel) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePanel, onClose]);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (activePanel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePanel]);

  if (!activePanel) return null;

  const data: PanelConfig | undefined = panelsData[activePanel];
  if (!data) return null;

  return (
    <div 
      className={`overlay ${activePanel ? 'active' : ''}`} 
      onClick={handleOverlayClick}
      id="overlay"
      role="dialog"
      aria-modal="true"
    >
      <div className="side-panel" ref={panelRef} id="sidePanel">
        <div className="panel-close">
          <div className="panel-close-label">Case Study Details</div>
          <button className="panel-close-btn" onClick={onClose} aria-label="Close panel">
            Close
          </button>
        </div>

        <div className="panel-body" id="panelContent">
          <div className="panel-type">{data.type}</div>
          <h3 className="panel-title">{data.title}</h3>
          <div className="panel-sub">{data.sub}</div>

          {data.decision && (
            <div className="panel-decision">
              <div className="panel-decision-label">Intentional Choice / Pivot</div>
              <div className="panel-decision-text">{data.decision}</div>
            </div>
          )}

          {activePanel && ['fluent', 'lomiha', 'cardekho', 'sylvester', 'coal', 'berlin', 'driveu'].includes(activePanel.toLowerCase()) && (
            <BlueprintDiagram projectId={activePanel} />
          )}

          {/* Embedded YouTube video for Berlin administration case study */}
          {activePanel.toLowerCase() === 'berlin' && (
            <div className="my-5 p-4 bg-zinc-900 border border-zinc-800 rounded-md">
              <span className="text-[10px] tracking-widest text-[#B06920] font-mono font-bold uppercase block mb-3">
                // Systems Overhaul Presentation Video
              </span>
              <div className="relative w-full aspect-video rounded overflow-hidden">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/6bav49fNhfo" 
                  title="Berlin Digital Registration Presentation Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Direct Document / Live Prototype Link banner (Replaces mockups to use uploaded source-of-truth PDFs directly) */}
          {data.link && !data.link.includes('coming soon') && !data.link.startsWith('#') && (
            <div className="my-5 p-5 border border-dashed border-zinc-800 bg-black/40 rounded-md flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-[#3f1515]/30 border border-[#5c1c1c]/30 flex items-center justify-center shrink-0">
                  {data.link.includes('.pdf') ? (
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  )}
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#737373] uppercase font-mono block">
                    {data.link.includes('.pdf') ? 'Connected Document' : 'Live Interactive Link'}
                  </span>
                  <span className="text-sm font-semibold text-[#f5f5f5]">{data.linkLabel || 'Official Credentials'}</span>
                </div>
              </div>
              <a 
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-black text-xs font-mono font-medium rounded text-gray-200 transition-all cursor-pointer whitespace-nowrap"
                href={data.link.startsWith('http') ? data.link : `/${data.link}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {data.link.includes('.pdf') ? 'Open PDF ↗' : 'View Prototype ↗'}
              </a>
            </div>
          )}

          {data.sections && data.sections.map((section, idx) => (
            <div key={idx}>
              <div className="panel-section-label">{section.label}</div>
              <p className="panel-text">{section.text}</p>
              {idx < (data.sections?.length || 0) - 1 && <div className="panel-divider"></div>}
            </div>
          ))}

          {data.metrics && data.metrics.length > 0 && (
            <>
              <div className="panel-divider"></div>
              <div className="panel-section-label">Key Metrics &amp; Outcomes</div>
              <div className="panel-metric-row">
                {data.metrics.map((metric, idx) => (
                  <div className="panel-metric-item" key={idx}>
                    <div className="panel-metric-num">{metric.num}</div>
                    <div className="panel-metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* DriveU PRD Specs */}
          {data.prd && (
            <>
              <div className="panel-divider"></div>
              <div className="panel-section-label">{data.prd.label}</div>
              <div className="prd-block">
                {data.prd.rows.map((row, idx) => (
                  <div className="prd-row" key={idx}>
                    <span className="prd-row-label">{row.label}</span>
                    <span className="prd-row-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Masters & HelloPM Projects List */}
          {data.credProjects && (
            <>
              <div className="panel-divider"></div>
              <div className="panel-section-label">Programme Sub-Assignments &amp; Outputs</div>
              <div className="cred-program-block">
                {data.credProjects.map((p, idx) => (
                  <div className="cred-course-row" key={idx}>
                    <div className="cred-course-title">{p.title}</div>
                    <div className="cred-course-detail">{p.detail}</div>
                    {/* Render specific attachments dynamically if present */}
                    {p.videoUrl && (
                      <div className="cred-video-wrap">
                        <iframe 
                          className="cred-video" 
                          src={p.videoUrl} 
                          title="Project presentation video"
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    {p.pdfUrl && (
                      <div className="cred-course-links" style={{ marginTop: '12px' }}>
                        <a className="cred-pdf-link" href={p.pdfUrl.startsWith('http') || p.pdfUrl.startsWith('/') ? p.pdfUrl : `/${p.pdfUrl}`} target="_blank" rel="noopener noreferrer">
                          View Project PDF (View in new window) ↗
                        </a>
                      </div>
                    )}
                    {p.linkUrl && (
                      <div className="cred-course-links" style={{ marginTop: '12px' }}>
                        <a className="cred-pdf-link" href={p.linkUrl} target="_blank" rel="noopener noreferrer" style={{ borderColor: 'var(--accent)' }}>
                          {p.linkLabel || 'View Live Prototype'} ↗
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Main Attachment Buttons */}
          {data.link && !data.link.includes('coming soon') && !data.link.startsWith('#') && (
            <div style={{ marginTop: '32px' }}>
              <a className="panel-link" href={data.link.startsWith('http') ? data.link : `/${data.link}`} target="_blank" rel="noopener noreferrer">
                {data.linkLabel || 'View Live Demo'} ↗
              </a>
            </div>
          )}

          {activePanel === 'lomiha' && (
            <span className="panel-note">
              Mental wellness RAG architecture drawings and technical configurations are embedded in the spec.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
