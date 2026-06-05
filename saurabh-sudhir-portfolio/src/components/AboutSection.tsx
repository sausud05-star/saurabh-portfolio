import React from 'react';

interface ProjectDetail {
  title: string;
  description: string;
  artifact?: string;
  artifactLink?: string;
  outcome?: string;
  panelId?: string;
}

interface Milestone {
  id: string;
  year: string;
  title: string;
  company: string;
  badge: 'Complete' | 'Active' | 'Current';
  shortDesc: string;
  keyProjects: string[];
  projectsDetail?: ProjectDetail[];
  metrics?: { num: string; label: string }[];
  connectedDoc?: {
    label: string;
    file: string;
  };
}

const milestones: Milestone[] = [
  {
    id: 'journey-strategy',
    year: '2025–PRESENT',
    title: 'AI Product Strategy & Advanced Systems',
    company: 'Applied Practice · Built on HelloPM AI PM Specialisation',
    badge: 'Current',
    shortDesc: 'Ongoing application of the HelloPM specialisation — mapping prompt design constraints, RAG evaluations, product strategy frameworks, and lead-to-action PM metrics across live deployments.',
    keyProjects: ['Fluent Prompting Model', 'Lomiha RAG Flow', 'Car Copilot Trust Cards'],
    metrics: [
      { num: "0-to-1", label: "Product strategy" },
      { num: "RAG", label: "Evaluations" },
      { num: "Live", label: "Deployments" }
    ],
    projectsDetail: [
      {
        title: "Fluent · AI Workflow Practice",
        description: "Mapped user flow loops solving blank-prompt cognitive load hurdles. Architected peer-prompt libraries and comparison metrics.",
        artifact: "tryfluent.netlify.app",
        artifactLink: "https://tryfluent.netlify.app",
        outcome: "Fully validated in PM user testing across Berlin and Bangalore; reduced prompt-initialization drop-off.",
        panelId: "fluent"
      },
      {
        title: "Lomiha · Mental Wellness Platform",
        description: "End-to-end product definition covering discovery, solution architecture, AI workflow design, privacy considerations, specification writing, and product strategy.",
        artifact: "System RAG Flow & Specs",
        outcome: "Factual, professional zero-login safety orchestration layout.",
        panelId: "lomiha"
      },
      {
        title: "Car Copilot · CarDekho Triage",
        description: "Specified confidence score metrics and direct trust cards to replace standard technical AI explanations.",
        artifact: "carcopilot-buddy.lovable.app",
        artifactLink: "https://carcopilot-buddy.lovable.app",
        outcome: "Designed to counteract user choice hesitancy and increase active dealer matching.",
        panelId: "cardekho"
      }
    ]
  },
  {
    id: 'journey-hellopm',
    year: '2024–2026',
    title: 'HelloPM AI Product Management Specialisation',
    company: 'Postgraduate Level PM Curriculum',
    badge: 'Active',
    shortDesc: 'Mentorship-guided training across product sense, user discovery, RICE scoring, and full-stack AI specifications. Source programme for DriveU, Fluent, Lomiha, and Car Copilot.',
    keyProjects: ['DriveU (PRD)', 'Fluent (MGA Group Project)', 'Lomiha (Specs)', 'Car Copilot (Prototype)'],
    metrics: [
      { num: "15-wk", label: "Specialist track" },
      { num: "RICE", label: "Strategic prioritization" },
      { num: "4", label: "Delivered Projects" }
    ],
    projectsDetail: [
      {
        title: "DriveU · Post-Assignment Clarity Module",
        description: "Reframed standard slow-matching cancellation triggers as a post-match customer expectation and communication problem. Synthesized target segments, ETA progressions, and full PRD specifications.",
        artifact: "PRD Documentation PDF",
        artifactLink: "/DriveU_Case_Study_Saurabh_Sudhir.pdf",
        outcome: "Solved operational churn using simple, cost-efficient user transparent status guides.",
        panelId: "driveu"
      },
      {
        title: "Fluent · AI Workflow Practice (MGA Group Project)",
        description: "Mapped user flow loops solving blank-prompt cognitive load hurdles. Architected peer-prompt libraries and structured comparison metrics through primary research across India and Germany.",
        artifact: "tryfluent.netlify.app",
        artifactLink: "https://tryfluent.netlify.app",
        outcome: "Validated in PM user testing across Berlin and Bangalore; reduced prompt-initialization drop-off.",
        panelId: "fluent"
      },
      {
        title: "Lomiha & Car Copilot (CarDekho)",
        description: "Defined holistic, safe therapeutic recommendations and consumer-focused qualitative plain-language 'Trust Cards'.",
        artifact: "Specialized Specs & Prototypes",
        panelId: "lomiha"
      }
    ]
  },
  {
    id: 'journey-wharton',
    year: '2024',
    title: 'Wharton Executive Certification',
    company: 'AI for Decision Making · UPenn Online',
    badge: 'Complete',
    shortDesc: 'Mastered predictive analytics, algorithmic decision trees, neural network scaling, retrieval evaluations, and deployment audit frameworks.',
    keyProjects: ['Machine Learning Pipelines', 'LLM Hallucination audits'],
    metrics: [
      { num: "Penn", label: "Wharton Online" },
      { num: "3-mo", label: "Academic track" },
      { num: "Sept 2024", label: "Conferred" }
    ],
    projectsDetail: [
      {
        title: "AI Business Strategies & Risk Mitigation",
        description: "Formally qualified under Professor Kartik Hosanagar. Bridged advanced algorithmic accuracy constraints with actual organizational go-to-market risks.",
        outcome: "Mastered retrieval-augmented generation validation and predictive model safety gates."
      }
    ],
    connectedDoc: {
      label: "Wharton AI Certificate Document",
      file: "Whaton Univesrity PDf .pdf"
    }
  },
  {
    id: 'journey-neetable',
    year: '2024–2025',
    title: 'Neetable Technologies',
    company: 'Product Owner · SaaS & AI Release Operations',
    badge: 'Complete',
    shortDesc: 'Directed sprint teams across complex SaaS platforms, fleet telemetry systems, and international AI triage deployments.',
    keyProjects: ['PhoxHealth Routing', 'Skartify Vendor Flow', 'Merck APAC Sync', 'BGR Coal Telemetry', 'Sylvester AI Triage'],
    metrics: [
      { num: "172+", label: "Countries GTM" },
      { num: "100%", label: "Telemetry integrity" },
      { num: "~20%", label: "Dispatcher drop" }
    ],
    projectsDetail: [
      {
        title: "PhoxHealth Routing & Dispatch",
        description: "Analyzed dispatch logistics. Redesigned route matching rules from radial zones to custom polygon-based geofenced delivery sectors.",
        outcome: "Reduced dispatcher overhead by 20% on US networks.",
        panelId: "phox"
      },
      {
        title: "Skartify B2B Vendor Flow",
        description: "Mapped onboarding drop-offs. Replaced dry multi-step validation forms with responsive, social-style onboarding patterns.",
        outcome: "Successfully onboarded over 1,000 additional dealers and external suppliers.",
        panelId: "skartify"
      },
      {
        title: "Merck Enterprise APAC Sync",
        description: "Coordinated cross-border sprint priorities, localization requirements, and release tracks for India, Thailand, and Philippines markets.",
        outcome: "100% on-time concurrent launch with no timeline slips.",
        panelId: "merck"
      },
      {
        title: "BGR Coal Mining Telemetry Tracker",
        description: "Architected sync-on-connectivity SQLite buffering schemas for heavy mining shifts operating in zero-network valleys.",
        outcome: "Preserved 100% data integrity; eliminated 3-5 hours/shift of manual log audit checks.",
        panelId: "coal"
      },
      {
        title: "Sylvester AI Feline facial Triage",
        description: "Guided engineering sprint priorities. Cut unvalidated personalization paths from MVP scope to prioritize core vision pipeline accuracy.",
        outcome: "Accelerated public release by 6-8 weeks; launched in 172 countries inside 4 months.",
        panelId: "sylvester"
      }
    ]
  },
  {
    id: 'journey-smruthi',
    year: '2023–2024',
    title: 'Smruthi Technologies',
    company: 'Process Operations & Scope Governance',
    badge: 'Complete',
    shortDesc: 'Unblocked ad-hoc code delays by establishing Odoo sprints, client requirement grooming, and strict interactive lockups.',
    keyProjects: ['Apollo Pharmacy portal', 'Aarogya Hospital companion', 'ResGov Policy hub'],
    metrics: [
      { num: "~20%", label: "Rework rate slashed" },
      { num: "3", label: "Strategic accounts" },
      { num: "Odoo", label: "Sprint governance" }
    ],
    projectsDetail: [
      {
        title: "Figma-First interactive design lockups",
        description: "Enforced strict signature sign-offs on screens before development launched.",
        outcome: "Slash-eliminated a persistent 20% code rework rate and recovered critical delayed clients."
      }
    ]
  },
  {
    id: 'journey-masters',
    year: '2021–2023',
    title: 'M.A. Innovation Design Management',
    company: 'University of Europe for Applied Sciences · Potsdam, Germany',
    badge: 'Complete',
    shortDesc: 'Rigorous training linking business viability matrices directly to human journey architectures. Lived in Germany 2 years.',
    keyProjects: ["Master's Thesis", "Berlin Digitalisation", "VISA Coin Study", "Mental Recovery Project"],
    metrics: [
      { num: "120 ECTS", label: "Thesis-concluded" },
      { num: "90.4", label: "Very Good Grade" },
      { num: "2 yrs", label: "Potsdam/Berlin" }
    ],
    projectsDetail: [
      {
        title: "Master's Thesis (Primary Flagship Postgraduate Research)",
        description: "Independent 110-page postgraduate research thesis analyzing caregiver vetting models, geriatric patient journey maps, professional surveying in Bangalore, and trust matrices.",
        artifact: "M.A. Innovation Thesis PDF",
        artifactLink: "/Sudhir_Saurabh_ma_thesis_ss23.pdf",
        outcome: "Conferred with highest grade tracks. Research guided strategic medical-aggregator workflows."
      },
      {
        title: "Digitalisation of Berlin Administration Project",
        description: "Collaborated with VOLT Think Tank to redesign Berlin's public registration service (Anmeldung) for expatriates using systems flow modeling, Double Diamond designs, and Diia benchmarks.",
        artifact: "Systems Presentation Video",
        artifactLink: "https://www.youtube.com/embed/6bav49fNhfo",
        panelId: "berlin"
      },
      {
        title: "VISA Coin Study",
        description: "Drafted ledger structures connecting client-side loyalty rewards with secure merchant trade schedules.",
        artifact: "VISA CJS Study PDF",
        artifactLink: "/VISA___UE_1.pdf"
      },
      {
        title: "Mental Recovery Project: INSTANT AI",
        description: "Formed psychiatric referral apps outline matching real-time calendar anxiety indicators to local partner resources.",
        artifact: "Business Pitch PDF Document",
        artifactLink: "/Business_pitch_.pdf"
      }
    ],
    connectedDoc: {
      label: "M.A. Master Degree Certificate",
      file: "Master Certificate.pdf"
    }
  },
  {
    id: 'journey-design',
    year: '2016–2020',
    title: 'Design Foundations',
    company: 'LISAA School of Design · Bangalore / Paris',
    badge: 'Complete',
    shortDesc: '4-year professional environmental and product layout structures training co-certified in France. Layout ergonomics that translate into digital architecture thinking.',
    keyProjects: ['Ergonomics layout mapping', 'Circulation & Systems planning'],
    metrics: [
      { num: "4 yrs", label: "Spatial training" },
      { num: "Paris", label: "Co-Certified" }
    ],
    projectsDetail: [
      {
        title: "Environments, spacing & circulation flows",
        description: "Intense spatial mapping and material ergonomics modeling to coordinate multi-tier environments.",
        outcome: "Informed a structural, behavioral transition into digital interface logic and flow densities."
      }
    ],
    connectedDoc: {
      label: "Undergraduate Diploma Certificate",
      file: "UG Certificate.pdf"
    }
  }
];

interface AboutSectionProps {
  onOpenPanel: (id: string) => void;
  targetMilestone: string | null;
  clearTargetMilestone: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenPanel,
  targetMilestone,
  clearTargetMilestone
}) => {
  const [expandedMilestones, setExpandedMilestones] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    if (targetMilestone) {
      setExpandedMilestones(prev => ({
        ...prev,
        [targetMilestone]: true
      }));
      // Smooth scroll directly to the timeline card element
      setTimeout(() => {
        const cardElement = document.getElementById(`milestone-${targetMilestone}`);
        if (cardElement) {
          cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
      clearTargetMilestone();
    }
  }, [targetMilestone, clearTargetMilestone]);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMilestones(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="section-header mb-10 md:mb-12">
        <span className="section-num">02</span>
        <h2 className="section-title">AI Native Journey</h2>
        <div className="section-rule"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left Column: Bio & Core Narrative */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          <div>
            <div className="about-statement text-xl md:text-2xl font-serif leading-snug text-zinc-900 mb-4 md:mb-6">
              I construct cohesive systems matching <em>human behavior</em> directly to <em>digital architectures</em>.
            </div>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-4">
              My background integrates rigorous spatial planning and environmental layout systems co-certified by LISAA Paris with a Master's degree in Innovation Design Management completed in-person in Berlin and Potsdam, Germany.
            </p>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
              This path has shaped a disciplined, systems-driven perspective. I approach digital platforms and advanced AI pipelines not as isolated interfaces, but as comprehensive workflows where operational constraints, data inputs, and system rules must align perfectly.
            </p>
          </div>

          {/* Experience Principle Narrative Diagram */}
          <div className="p-5 md:p-6 bg-white border border-zinc-200 rounded-md shadow-sm">
            <div className="text-[10px] tracking-widest text-[#B06920] font-bold uppercase mb-4">
              EXPERIENCE PRINCIPLE / STAGE-GATE EVOLUTION
            </div>
            <div className="space-y-3.5">
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#B06920]/10 border border-[#B06920]/30 text-[10px] text-[#B06920] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <div className="text-[11px] font-bold text-zinc-900 uppercase">Design Foundations</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    Spatial circulation layout and ergonomic structures at LISAA. Taught me to map systems of human friction.
                  </div>
                </div>
              </div>
              
              <div className="w-[1px] h-3 bg-zinc-200 ml-2.5"></div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#4F7094]/10 border border-[#4F7094]/30 text-[10px] text-[#4F7094] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <div className="text-[11px] font-bold text-zinc-900 uppercase">Systems Thinking &amp; Innovation</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    Transition in Germany matching customer journeys to viable global business model mechanics.
                  </div>
                </div>
              </div>

              <div className="w-[1px] h-3 bg-zinc-200 ml-2.5"></div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-900/10 border border-zinc-300 text-[10px] text-zinc-600 font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <div className="text-[11px] font-bold text-zinc-900 uppercase">Product Delivery &amp; Scaling</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    Driving process changes at Smruthi and owning complex enterprise SaaS and AI releases at Neetable.
                  </div>
                </div>
              </div>

              <div className="w-[1px] h-3 bg-zinc-200 ml-2.5"></div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#68B18C]/10 border border-[#68B18C]/30 text-[10px] text-[#68B18C] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <div className="text-[11px] font-bold text-zinc-900 uppercase">AI Product Strategy</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    Synthesizing adversarial prompt loops, structured LLM metrics, database RAG specs, and lead-to-action metrics.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Clickable Timeline Map */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-[10px] tracking-widest text-zinc-500 font-mono font-bold uppercase mb-2 block">
            INTERACTIVE TIMELINE · TAP CARDS TO EXPAND DETAILS
          </div>

          <div className="relative border-l-2 border-zinc-200 pl-4 sm:pl-6 md:pl-8 space-y-6 py-2">
            
            {milestones.map((milestone) => {
              const isExpanded = !!expandedMilestones[milestone.id];
              return (
                <div 
                  key={milestone.id}
                  id={`milestone-${milestone.id}`}
                  onClick={(e) => toggleExpand(milestone.id, e)}
                  className={`group relative bg-white border ${
                    isExpanded ? 'border-[#B06920]' : 'border-zinc-200 hover:border-[#B06920]'
                  } p-4 sm:p-5 md:p-6 rounded-md shadow-sm transition-all cursor-pointer select-none`}
                >
                  
                  {/* Timeline Interactive Dot Indicator */}
                  <span className={`absolute -left-[23px] sm:-left-[31px] md:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-white border-2 ${
                    isExpanded ? 'border-[#B06920] bg-[#B06920]' : 'border-zinc-300 group-hover:border-[#B06920]'
                  } transition-all flex items-center justify-center`}>
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>

                  {/* Card Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-zinc-100 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-[#B06920]">
                        [{milestone.year}]
                      </span>
                      <span className="text-xs font-bold text-zinc-900 uppercase tracking-tight">
                        {milestone.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 sm:mt-0">
                      <span className={`text-[8.5px] uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                        milestone.badge === 'Current' 
                          ? 'bg-[#FFF4E5] text-[#9A6600] border border-[#F5DCA5]' 
                          : 'bg-[#EFF4F9] text-[#43698C] border border-[#C4D6E5]'
                      }`}>
                        {milestone.badge}
                      </span>
                      <span className="text-zinc-400 font-mono text-[10px] font-bold">
                        {isExpanded ? 'Collapse ▲' : 'Expand Details ▼'}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle / Company */}
                  <h4 className="text-xs font-semibold text-zinc-700 tracking-wide">
                    {milestone.company}
                  </h4>

                  {/* Short Paragraph Summary */}
                  <p className="text-xs text-zinc-500 mt-1 pb-1 leading-relaxed">
                    {milestone.shortDesc}
                  </p>

                  {/* Non-expanded artifacts tags */}
                  {!isExpanded && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-zinc-100 mt-3">
                      <span className="text-[9px] font-mono tracking-wider text-zinc-400 uppercase font-bold mr-1 block">
                        Artifacts:
                      </span>
                      {milestone.keyProjects.map((proj, idx) => (
                        <span 
                          key={idx} 
                          className="text-[9px] bg-zinc-100 border border-zinc-200 text-zinc-600 font-medium px-2 py-0.5 rounded"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Expanded Content Section */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-100 space-y-4 animate-[fadeSlideUp_0.3s_var(--ease-out-expo)_forwards]" onClick={(e) => e.stopPropagation()}>
                      
                      {milestone.metrics && milestone.metrics.length > 0 && (
                        <div>
                          <span className="text-[9px] font-mono font-bold tracking-wider text-zinc-400 uppercase block mb-2">Key Metrics & Outcomes</span>
                          <div className="grid grid-cols-3 gap-2">
                            {milestone.metrics.map((met, i) => (
                              <div key={i} className="bg-zinc-50 border border-zinc-100 p-2.5 rounded text-center">
                                <div className="text-sm font-serif font-bold text-zinc-950">{met.num}</div>
                                <div className="text-[9px] text-[#B06920] font-sans uppercase tracking-tight leading-tighter mt-0.5">{met.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {milestone.projectsDetail && milestone.projectsDetail.length > 0 && (
                        <div className="space-y-3">
                          <span className="text-[9px] font-mono font-bold tracking-wider text-zinc-400 uppercase block font-sans">Projects &amp; Decision Artifacts</span>
                          {milestone.projectsDetail.map((proj, idx) => {
                            const isFlagshipThesis = milestone.id === 'journey-masters' && idx === 0;
                            return (
                              <div 
                                key={idx} 
                                className={`p-4 rounded space-y-2 relative overflow-hidden transition-all ${
                                  isFlagshipThesis 
                                    ? "bg-[#FAF7F0] border-2 border-[#B06920]/40 shadow-sm" 
                                    : "bg-[#FCFBFA] border border-zinc-200/60"
                                }`}
                              >
                                {isFlagshipThesis && (
                                  <div className="absolute top-0 right-0 bg-[#B06920] text-white text-[8px] font-mono font-bold tracking-widest px-2.5 py-0.5 uppercase rounded-bl">
                                    Flagship Graduate Work
                                  </div>
                                )}
                                <div className="flex justify-between items-start gap-2 flex-wrap sm:flex-nowrap">
                                  <div className={`text-[11.5px] font-bold uppercase tracking-tight ${isFlagshipThesis ? "text-[#5C3317] font-serif pr-24" : "text-zinc-950"}`}>
                                    {proj.title}
                                  </div>
                                  <div className="flex items-center gap-3">
                                    {proj.panelId && (
                                      <button
                                        onClick={(e) => { e.stopPropagation(); onOpenPanel(proj.panelId!); }}
                                        className="text-[9px] font-mono font-bold text-[#B06920] hover:underline cursor-pointer whitespace-nowrap"
                                      >
                                        View Decision Blueprint ↗
                                      </button>
                                    )}
                                    {proj.artifact && (
                                      proj.artifactLink ? (
                                        <a 
                                          href={proj.artifactLink} 
                                          target="_blank" 
                                          rel="noopener noreferrer" 
                                          className="text-[9px] font-mono font-bold hover:underline text-zinc-500 whitespace-nowrap"
                                        >
                                          {proj.artifact} ↗
                                        </a>
                                      ) : (
                                        <span className="text-[9px] font-mono text-zinc-400 font-medium whitespace-nowrap">{proj.artifact}</span>
                                      )
                                    )}
                                  </div>
                                </div>
                                <p className="text-[11.5px] text-zinc-600 leading-normal font-sans">{proj.description}</p>
                                {proj.outcome && (
                                  <div className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-100/60 px-2.5 py-1 rounded inline-block font-medium font-sans">
                                    Outcome: {proj.outcome}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {milestone.connectedDoc && (
                        <div className="flex items-center justify-between p-3 bg-zinc-900 text-white rounded mt-1.5">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span className="text-[10.5px] font-mono text-zinc-300 font-medium">{milestone.connectedDoc.label}</span>
                          </div>
                          <a 
                            href={`/${milestone.connectedDoc.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono font-bold bg-[#B06920] hover:bg-[#C68128] text-white px-3 py-1.5 rounded uppercase"
                          >
                            Open PDF ↗
                          </a>
                        </div>
                      )}

                      <div className="flex justify-end pt-2">
                        <button 
                          className="text-[10px] font-mono font-bold text-zinc-400 hover:text-zinc-600 cursor-pointer"
                          onClick={(e) => toggleExpand(milestone.id, e)}
                        >
                          Collapse Axis ▲
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};