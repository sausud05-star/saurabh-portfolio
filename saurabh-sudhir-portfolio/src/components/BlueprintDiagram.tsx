import React from 'react';

interface BlueprintData {
  title: string;
  subtitle: string;
  problem: string;         // User Problem
  businessGoal: string;    // Business Goal
  insight: string;         // Key Insight / Constraint
  decision: string;        // Product Decision
  approach: string;        // System Approach
  outcome: string;         // Success Outcome
  tradeoffTitle: string;
  tradeoffText: string;
  productReasoning: string;
}

const blueprintConfigs: Record<string, BlueprintData> = {
  fluent: {
    title: "FLUENT · PRODUCT DECISION BLUEPRINT",
    subtitle: "AI Workflows Practice Platform · tryfluent.netlify.app",
    problem: "High cognitive friction from blank-prompt screen paralysis. Furthermore, default AI models behave with 'sycophancy' (agreeing too quickly with the user), which prevents genuine human skill evaluation and capability development.",
    businessGoal: "Accelerate user prompt evaluation skills and establish high retention without relying on vanity platform engagement metrics.",
    insight: "End-users do not learn AI prompt curation by chatting with standard models. They learn by actively testing drafts and comparing their outputs side-by-side with peer patterns in real-world professional contexts.",
    decision: "Tighten MVP scope to exactly one targeted workflow and a single high-pushback persona rather than a generic prompt playground.",
    approach: "Built a comparative evaluation loop: users paste prompt drafts, run them against an adversarial 'skeptical CFO' actor, and see their performance instantly contrast with successful peer benchmarks.",
    outcome: "100% positive validation in PM user testing across Berlin and Bangalore; reduced prompt initiation failure drop-offs during core training pilots.",
    tradeoffTitle: "Targeted Adversarial Contrast vs. Broad Chat Sandbox",
    tradeoffText: "We rejected building a general-purpose chat workspace. Instead, we directed all product efforts into a comparative-contrast interface. Restricting scope to one tough persona enabled frictionless comparative testing.",
    productReasoning: "Standard product patterns optimize for raw query volumes. Fluent optimizes for human-in-the-loop critical evaluation, which remains the only durable competitive advantage in LLM operations."
  },
  lomiha: {
    title: "LOMIHA · PRODUCT DECISION BLUEPRINT",
    subtitle: "Mental Wellness Navigator · Trust and Privacy Alignment Strategy",
    problem: "Acute user anxiety and reluctance to submit personal wellness questions. Requiring standard account registrations, cloud-logged histories, or profile setups drives an massive 70%+ initial sign-up drop-off.",
    businessGoal: "Achieve friction-free consumer intake volume and maximize user trust adoption for young professionals in crisis.",
    insight: "In mental wellness products, trust is the sole performance bottleneck. Users prioritize raw privacy and guaranteed data isolation over personalized long-term dashboard features.",
    decision: "Adopt a strict 'Privacy-by-Design' system requirement: enforce zero-login, zero database logging of personal queries in the initial release.",
    approach: "Designed a secure client-side lookup model: ephemerally passed queries are checked against locked clinical textbooks locally and routed to emergency hotline vectors if suicide/self-harm regexes are triggered.",
    outcome: "Created a professional, safe, clinical-grade triage layout that completely bypasses user identification and preserves full psychological safety.",
    tradeoffTitle: "Absolute Privacy vs. User Profile Personalization",
    tradeoffText: "We sacrificed historic dashboard reporting and personalized email retention flows. In critical wellness, removing registration friction completely outweighed the value of decorative tracking.",
    productReasoning: "Trust is a structural moat, not just a marketing slogan. Engineering complete data isolation proves that wellness technology can remain both clinically helpful and ethically sound."
  },
  cardekho: {
    title: "CAR COPILOT · PRODUCT DECISION BLUEPRINT",
    subtitle: "AI Car Buying Companion · Trust over Full Mathematical Transparency",
    problem: "Massive search marketplaces suffer from high buyer hesitation. Surfacing complex algorithmic scores and multiple vehicle rating matrices increases cognitive overload, causing buyers to bounce before contacting dealers.",
    businessGoal: "Increase the transaction-onboarding conversion rate and elevate active consumer leads shared with local dealers.",
    insight: "Buyers do not choose vehicles by examining abstract math and decimal weight distributions. They buy based on plain-language, qualitative lifestyle validations (e.g., family logistics, step-in ease).",
    decision: "Conceal complex numeric recommendation weights. Translate raw car parameter matching matrices into easily readable blocks called 'Trust Cards.'",
    approach: "Constructed an automated translation engine converting quantitative database tags to direct qualitative outcomes, paired with contextual confidence nudges triggered exactly at point-of-sale hesitation zones.",
    outcome: "Significantly enhanced active car-buyer engagement and created higher-trust leads with dealers, reducing choice drop-offs.",
    tradeoffTitle: "Plain-Language Trust Cards vs. Multi-dimensional Score Values",
    tradeoffText: "We selected simple, qualitative everyday explanations over full algorithmic rating transparency. Recruiter user tests proved that clear explanations beat math-heavy transparency every time.",
    productReasoning: "A car purchase is a major lifestyle decision. Our product companion addresses the emotional side of decision-making by clarifying usability rather than showing off technical telemetry."
  },
  driveu: {
    title: "DRIVEU · PRODUCT DECISION BLUEPRINT",
    subtitle: "Post-Driver-Assignment Clarity · Churn Mitigation Project",
    problem: "A high user transaction cancellation rate inside the key operational window between driver assignment and actual driver arrival. Marketplace data showed customers cancelling due to zero progress feedback.",
    businessGoal: "Drastically reduce driver-allocated cancellations and improve fleet scheduling efficiency across city hubs.",
    insight: "The cancellation driver was not marketplace matching speed or price points. The core issue was post-match customer anxiety due to completely invisible driver arrival states.",
    decision: "Reject expensive matching algorithm rewrites. Instead, focus entirely on mapping clear arrival expectations and driver progress communication loops.",
    approach: "Created the 'Post-Driver-Assignment Clarity' module: structured a progress tracker (Scheduled → En Route → Arriving) paired with contextual driver FAQs and live ETA updates.",
    outcome: "Effectively targeted and reduced passenger drop-off rates, preserving driver allocation utility with zero changes to the underlying matching systems.",
    tradeoffTitle: "Arrival expectation loops vs. Core allocation engine rewrites",
    tradeoffText: "Instead of spending quarters of engineering resources trying to optimize vehicle routing by 2%, we solved the human anxiety problem in under a sprint with simple status transparency.",
    productReasoning: "Many product delivery bottlenecks are expectation problems in disguise. Clarifying arrival milestones is a cheaper and more durable driver of trust than minor system speed adjustments."
  },
  sylvester: {
    title: "SYLVESTER AI · PRODUCT DECISION BLUEPRINT",
    subtitle: "Global Feline Facial Triage Platform · GTM Acceleration",
    problem: "Launching a global healthcare triage product on an over-scoped roadmap. Implementing complex social sharing, photo custom folders, and personalization threatened to miss critical pet partner GTM windows.",
    businessGoal: "Secure first-mover global advantage with B2B veterinary networks and accelerate international market entry.",
    insight: "In clinical pet triage, the only critical value proposition is immediate, accurate facial scanning and risk classification. Ancillary features offer zero early validation metrics.",
    decision: "Implemented a radical feature cut: stripped out all photo albums, profile setup, and social tracking to isolate the core clinical GTM.",
    approach: "Directed developer efforts exclusively to the feline facial scanning indicators (Ears, eyes, snout) mapped to the veterinary Feline Grimace Scale (FGS), including immediate localized vet routing.",
    outcome: "Launched successfully across 172 countries in under 4 months, accelerating time-to-market by 30% or 6 to 8 weeks ahead of competition.",
    tradeoffTitle: "Radical Core Feature Cut vs. Complex Holistic Profile Features",
    tradeoffText: "We deprioritized cosmetic profile options in favor of getting the scanner into clinicians' hands. This preserved critical runway and validated the core technology under high global volume.",
    productReasoning: "In fast-moving healthcare markets, shipping a validated triage engine is the difference between leading the segment or missing the annual window entirely."
  },
  coal: {
    title: "BGR COAL MINING · PRODUCT DECISION BLUEPRINT",
    subtitle: "Safety-Critical Heavy Fleet Telemetry system · Offline-First",
    problem: "Heavily loaded coal fleet telemetry servers suffered from constant silent data losses and log corruptions inside zero-grid mining pits, forcing shifts to complete manual tracking checks.",
    businessGoal: "Achieve 100% operational telemetry uptime, secure regulatory safety audits, and eliminate hours of manual tracking sheets.",
    insight: "Standard REST APIs fail under field reality. Deep mining pits have continuous connectivity dead zones. The application's core data model must operate decoupled from the state of the network.",
    decision: "Overrule standard cloud-reliant API guidelines. Enforce a custom, local on-device cache database as the master logger before synchronization triggers.",
    approach: "Built a robust on-device local database buffer paired with a low-bandwidth connectivity heartbeat listener and automatic, adaptive sync-on-reconnect engines during active haul routes.",
    outcome: "Captured 100% telemetry data integrity across heavy machinery shifts, completely eliminating 3-5 hours of manual audit tracking per shift.",
    tradeoffTitle: "Offline-First Local Database vs. Real-time Cloud Telemetry Streams",
    tradeoffText: "We rejected standard API protocols and deferred cloud transmission. Direct on-site mapping proved that remote field environments demand heavy local buffering to prevent silent operations failures.",
    productReasoning: "A digital system is only as good as the environment it was built for. In high-capital mining safety, reliability under complete physical isolation is the absolute baseline product expectation."
  },
  berlin: {
    title: "BERLIN GOV REDESIGN · PRODUCT DECISION BLUEPRINT",
    subtitle: "Citizen Registration Service Redesign · Anmeldung System Redesign",
    problem: "Archaic interface forms, multi-month queues, and severe language barriers. Expatriates face scheduling deadlocks simply attempting to comply with residency registration laws (Anmeldung).",
    businessGoal: "Increase municipal filing efficiency, minimize administrative work overhead, and improve the expatriate registration journey.",
    insight: "Polishing front-end layouts or portal styling does not solve administrative queues. The bottleneck lies in physical paper verification loops under officers reviewing inaccurate landlord forms.",
    decision: "Reject standard administrative form redesigns. Benchmark Ukraine's high-efficiency digital system ('Diia') to automate verification of tenant forms.",
    approach: "Drafted a centralized digital intake model connecting document confirmations to municipal queues, creating automated dispatch routing matching real-time officer capacity.",
    outcome: "Reduced manual administrative checks by over 40% and simplified the citizen queue track to a clean, transparent digital process.",
    tradeoffTitle: "Whole Systems Redesign (Diia Benchmark) vs. Minor Front-end Skinning",
    tradeoffText: "We rejected making incremental aesthetic changes to municipal portals. We focused instead on structural flow-routing and landlord system verification, resolving operational backlogs at the source.",
    productReasoning: "Bureaucracy is a systems routing problem. Addressing civic backlogs requires re-architecting the physical documentation paths rather than applying basic interactive paint."
  }
};

interface BlueprintDiagramProps {
  projectId: string;
}

export const BlueprintDiagram: React.FC<BlueprintDiagramProps> = ({ projectId }) => {
  const data = blueprintConfigs[projectId] || blueprintConfigs[projectId.toLowerCase()];

  if (!data) return null;

  return (
    <div className="blueprint-container my-8 p-6 md:p-8 bg-[#121110] border border-zinc-800 text-[#DDD9D1] rounded-md font-mono relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(#2F2C29 1px, transparent 1px)', backgroundSize: '16px 16px' }} id={`decision-blueprint-${projectId}`}>
      
      {/* Blueprint Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-800 pb-5 mb-6 gap-4">
        <div>
          <div className="text-[10px] tracking-[0.2em] text-[#B06920] font-bold uppercase">{data.title}</div>
          <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{data.subtitle}</div>
        </div>
        <div className="px-2.5 py-1 text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold tracking-widest rounded uppercase">
          PM-DECISION-V5.0
        </div>
      </div>

      {/* 6-Stage Product Strategy Chain */}
      <div className="space-y-4 relative">
        <div className="text-[10px] uppercase font-bold text-[#b06920] mb-4 flex items-center gap-1.5 border-b border-zinc-800 pb-2">
          <span className="inline-block w-1.5 h-1.5 bg-[#B06920] rounded-full"></span>
          PRODUCT THINKING &amp; DECISION CHAIN
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Stage 1: User Problem */}
          <div className="p-4 border border-zinc-800 bg-[#1C1A18]/60 rounded-md flex flex-col justify-between transition-all hover:border-[#F43F5E]/30 group">
            <div>
              <div className="text-[9px] font-bold text-[#F43F5E] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E]"></span>
                01 / User Problem
              </div>
              <p className="text-[11.5px] text-zinc-300 leading-relaxed font-sans">{data.problem}</p>
            </div>
          </div>

          {/* Stage 2: Business Goal */}
          <div className="p-4 border border-zinc-800 bg-[#1C1A18]/60 rounded-md flex flex-col justify-between transition-all hover:border-[#3B82F6]/30 group">
            <div>
              <div className="text-[9px] font-bold text-[#3B82F6] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                02 / Business Goal
              </div>
              <p className="text-[11.5px] text-zinc-300 leading-relaxed font-sans">{data.businessGoal}</p>
            </div>
          </div>

          {/* Stage 3: Key Insight */}
          <div className="p-4 border border-zinc-800 bg-[#1C1A18]/60 rounded-md flex flex-col justify-between transition-all hover:border-[#F59E0B]/30 group">
            <div>
              <div className="text-[9px] font-bold text-[#F59E0B] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                03 / Key Insight or Constraint
              </div>
              <p className="text-[11.5px] text-zinc-300 leading-relaxed font-sans">{data.insight}</p>
            </div>
          </div>

          {/* Stage 4: Product Decision */}
          <div className="p-4 border-2 border-[#B06920]/40 bg-[#241B13]/60 rounded-md flex flex-col justify-between transition-all hover:border-[#B06920]/70 group">
            <div>
              <div className="text-[9px] font-bold text-[#B06920] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B06920]"></span>
                04 / Product Decision
              </div>
              <p className="text-[11.5px] text-zinc-100 font-semibold leading-relaxed font-sans">{data.decision}</p>
            </div>
          </div>

          {/* Stage 5: System Approach */}
          <div className="p-4 border border-zinc-800 bg-[#1C1A18]/60 rounded-md flex flex-col justify-between transition-all hover:border-[#8B5CF6]/30 group">
            <div>
              <div className="text-[9px] font-bold text-[#8B5CF6] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                05 / System Approach
              </div>
              <p className="text-[11.5px] text-zinc-300 leading-relaxed font-sans">{data.approach}</p>
            </div>
          </div>

          {/* Stage 6: Outcome */}
          <div className="p-4 border border-[#10B981]/50 bg-[#0F261D]/50 rounded-md flex flex-col justify-between transition-all hover:border-[#10B981] group">
            <div>
              <div className="text-[9px] font-bold text-[#10B981] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                06 / Success Outcome
              </div>
              <p className="text-[11.5px] text-emerald-100 font-medium leading-relaxed font-sans">{data.outcome}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Trade-off Matrix Panel */}
      <div className="mt-6 p-4 border border-dashed border-zinc-800 bg-black/50 rounded grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">
            // INTENTIONAL PIVOT &amp; COMPROMISE
          </div>
          <div className="text-xs font-bold text-[#B06920] mb-1 uppercase">{data.tradeoffTitle}</div>
          <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">{data.tradeoffText}</p>
        </div>
        <div>
          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">
            // STRATEGIC PRODUCT REASONING
          </div>
          <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">{data.productReasoning}</p>
        </div>
      </div>

      {/* Technical Metadata Bar */}
      <div className="mt-6 flex flex-wrap items-stretch border border-zinc-900 rounded bg-[#151413]">
        <div className="p-2.5 border-r border-zinc-900 flex-1 min-w-[120px]">
          <span className="text-[8px] text-zinc-600 block uppercase font-bold">PORTFOLIO TRACK</span>
          <span className="text-[10px] text-zinc-300 font-bold block uppercase tracking-wide">SAURABH SUDHIR PM</span>
        </div>
        <div className="p-2.5 border-r border-[#1C1A18] flex-1 min-w-[120px] bg-[#1d120a]/20">
          <span className="text-[8px] text-[#B06920] block uppercase font-bold">DISCIPLINE</span>
          <span className="text-[10px] text-zinc-200 font-bold block uppercase tracking-wide">PRODUCT STRATEGY</span>
        </div>
        <div className="p-2.5 border-r border-zinc-900 flex-1 min-w-[120px]">
          <span className="text-[8px] text-zinc-600 block uppercase font-bold">RATIONALE METHODOLOGY</span>
          <span className="text-[10px] text-zinc-400 font-bold block uppercase tracking-wide">DECISION BLUEPRINTS</span>
        </div>
        <div className="p-2.5 flex-1 min-w-[120px] bg-[#0c1c13]/20">
          <span className="text-[8px] text-[#10B981] block uppercase font-bold">VALIDATION</span>
          <span className="text-[10px] text-[#10B981] font-bold block uppercase tracking-wide">APPROVED CASE STUDY</span>
        </div>
      </div>

    </div>
  );
};
