export interface Section {
  label: string;
  text: string;
}

export interface Metric {
  num: string;
  label: string;
}

export interface PrdRow {
  label: string;
  value: string;
}

export interface PrdSpec {
  label: string;
  rows: PrdRow[];
}

export interface CredentialProject {
  title: string;
  detail: string;
  videoUrl?: string;
  pdfUrl?: string;
  linkUrl?: string;
  linkLabel?: string;
}

export interface PanelConfig {
  type: string;
  title: string;
  sub: string;
  decision?: string;
  sections?: Section[];
  metrics?: Metric[];
  prd?: PrdSpec;
  credProjects?: CredentialProject[];
  certImg?: string;
  link?: string;
  linkLabel?: string;
}

export const panelsData: Record<string, PanelConfig> = {
  sylvester: {
    type: "0-to-1 · AI Product · Neetable Technologies",
    title: "Cut the feature. Launched 6 weeks earlier.",
    sub: "Sylvester A.I. · AI Pet Health · 2024–2025",
    decision: "Personalisation in v1 had no demand signal. Cutting it freed 6 weeks and de-risked the global launch. The client was aligned through weekly demos showing progress, not just promises.",
    sections: [
      {
        label: "The problem",
        text: "An AI pet health product targeting 172+ countries from day one. The original scope included personalisation features with no user validation and no demand signal. Shipping them would have delayed the launch window with no measurable upside."
      },
      {
        label: "What I did",
        text: "Identified the scope risk early. Made the call to cut personalisation from v1, documented the rationale, and aligned the client through structured weekly demos. Managed delivery across backend, AI integration, and mobile."
      },
      {
        label: "Outcome",
        text: "Launched across 172+ countries in under 4 months. The GTM window was hit approximately 6 to 8 weeks earlier than the original scope would have allowed, accelerating go-to-market by roughly 30%."
      }
    ],
    metrics: [
      { num: "172+", label: "Countries at launch" },
      { num: "~30%", label: "GTM acceleration" },
      { num: "6–8wk", label: "Earlier market entry" }
    ]
  },
  phox: {
    type: "Healthcare SaaS · US Client · Neetable Technologies",
    title: "Polygon over radius. The simpler model was costing dispatchers hours every shift.",
    sub: "PhoxHealth · Healthcare Logistics · 2024–2025",
    decision: "The routing model was the root cause, not a UX issue. Polygon-based planning required a deeper product change than originally scoped but was the right call.",
    sections: [
      {
        label: "The problem",
        text: "A US healthcare logistics platform was experiencing dispatcher overhead not explained by volume alone. The assumed problem was UX friction. Discovery revealed the routing model itself was structurally incorrect for the actual geography of deliveries."
      },
      {
        label: "What I did",
        text: "Led full v5 discovery: structured user research with dispatchers, empathy mapping, and full UX flow redesign. Identified that the radius-based routing model was creating systematic mismatches. Proposed and specified polygon-based route planning matched to actual delivery zones."
      },
      {
        label: "Outcome",
        text: "Approximately 20% reduction in dispatcher overhead following implementation."
      }
    ],
    metrics: [
      { num: "~20%", label: "Dispatcher overhead reduction" },
      { num: "v5", label: "Full discovery cycle" }
    ]
  },
  coal: {
    type: "Enterprise · Greenfield · Neetable Technologies",
    title: "The data loss was invisible in every requirement document.",
    sub: "BGR Mining & Infra Limited · Coal Mining Operations Platform · 2024–2025",
    decision: "Offline-first was not in the original spec. Raising it meant slowing initial delivery. It was the right call because the alternative was silent data corruption in a safety-critical system.",
    sections: [
      {
        label: "The problem",
        text: "A safety-critical fleet tracking system for coal mining operations in zero-connectivity zones. The original requirements assumed connectivity. Discovery revealed periodic connectivity drops were creating silent data corruption invisible in normal testing conditions."
      },
      {
        label: "What I did",
        text: "Identified the connectivity risk during requirements analysis. Led the architectural shift to offline-first design: local data buffering, sync-on-reconnect logic, and conflict resolution. Validated across live A, B, and C shifts before full rollout."
      },
      {
        label: "Outcome",
        text: "100% data integrity in zero-connectivity zones. Manual audit overhead eliminated. The system was accepted without rework."
      }
    ],
    metrics: [
      { num: "100%", label: "Data integrity" },
      { num: "3–5hrs", label: "Audit work per shift eliminated" }
    ]
  },
  skartify: {
    type: "B2B Commerce · Vendor Onboarding · Neetable Technologies",
    title: "The drop-off was a friction problem, not a missing feature problem.",
    sub: "Skartify · B2B Commerce Platform · 2024–2025",
    decision: "The instinct was to add features. The data showed the problem was the flow itself.",
    sections: [
      {
        label: "The problem",
        text: "Vendor onboarding completion rates on a B2B commerce platform were low. The assumed cause was missing features. Structured discovery revealed the actual problem: the onboarding flow was too complex and unfamiliar for the target vendor profile."
      },
      {
        label: "What I did",
        text: "Mapped the onboarding journey and identified where and why vendors were dropping off. Recommended replacing the conventional multi-step form UI with a familiar social-style experience modelled on Instagram and WhatsApp patterns."
      },
      {
        label: "Outcome",
        text: "Approximately 1,000 additional vendors onboarded following the redesign."
      }
    ],
    metrics: [
      { num: "~1,000", label: "Additional vendors onboarded" },
      { num: "UX", label: "Root cause addressed" }
    ]
  },
  merck: {
    type: "Enterprise Tools · APAC Delivery · Neetable Technologies",
    title: "Three markets, three stakeholder groups, three timelines. Zero slips.",
    sub: "Merck Enterprise Tools · India, Philippines, Thailand · 2024–2025",
    decision: "Each market had different requirements and different stakeholders. Managing them as separate workstreams with shared visibility was the only model that worked.",
    sections: [
      {
        label: "The problem",
        text: "Merck enterprise tools required simultaneous release across three markets: India, Philippines, and Thailand. Each had different localisation requirements, different stakeholder contacts, and different internal timelines."
      },
      {
        label: "What I did",
        text: "Structured delivery across three separate release streams with consolidated requirements tracking and stakeholder communication. Ran feasibility checks per market, managed production release sequencing, and maintained visibility across all three timelines simultaneously."
      },
      {
        label: "Outcome",
        text: "All three markets delivered on time. Zero timeline slips. Merck India released one week ahead of schedule."
      }
    ],
    metrics: [
      { num: "3", label: "Markets delivered" },
      { num: "0", label: "Timeline slips" },
      { num: "+1wk", label: "India ahead of schedule" }
    ]
  },
  cardekho: {
    type: "AI Feature Design & Spec · HelloPM AI Product Specialisation",
    title: "High intent, no conversion. The platform had no way to tell a buyer they had found the right car.",
    sub: "AI Car Buying Companion · CarDekho · 2026",
    decision: "Full AI transparency was the original brief. The real problem was decision paralysis. Designed for trust over transparency: showing confidence, not the algorithm.",
    sections: [
      {
        label: "The problem",
        text: "India's largest car marketplace had high-intent buyers dropping off without converting. The platform surfaced cars well but had no mechanism to help buyers cross the decision threshold. The gap was not discovery. It was confidence in the final decision."
      },
      {
        label: "What I did",
        text: "Designed three interlocking features: AI Fit Score (a personalised confidence signal, not a raw match percentage), Trust Cards (surfacing specific reasons behind the recommendation in plain language), and Decision Nudge triggers (contextual signals at the moment of hesitation). Chose trust-building over full AI transparency. Monetisation tied to lead-to-action rate rather than passive engagement."
      },
      {
        label: "Outcome",
        text: "Full PRD and working prototype delivered. Architecture designed to improve lead quality rather than lead volume."
      }
    ],
    metrics: [
      { num: "PRD", label: "Full product spec" },
      { num: "Live", label: "Working prototype" },
      { num: "Trust", label: "Over transparency" }
    ],
    link: "https://carcopilot-buddy.lovable.app",
    linkLabel: "View live prototype"
  },
  fluent: {
    type: "AI Product Strategy · Live Prototype · HelloPM AI Product Specialisation",
    title: "28 of 30 people used AI last week. Only 3 felt on top of it. The gap is not access.",
    sub: "Fluent · AI Workflow Practice Platform · 2026",
    decision: "Scoped to one workflow for one role in MVP. The instinct was to build broadly. The research said go narrow and go deep.",
    sections: [
      {
        label: "The problem",
        text: "Primary research across India and Germany revealed access to AI tools is no longer the barrier. The real barriers are cognitive load from blank-prompt paralysis, trust collapse from AI sycophancy, and social cost of feeling behind peers. Existing tools optimise for usage, not capability development."
      },
      {
        label: "What I did",
        text: "Designed a structured AI practice environment: scaffolded prompt templates, a Peer Library of real prompts from peers in similar roles, and a comparison-based evaluation mode to train judgement rather than just reward output. Scoped MVP deliberately to one workflow for one role. Built and deployed live on n8n and Gemini 2.5 Flash."
      },
      {
        label: "Outcome",
        text: "Live at tryfluent.netlify.app. Four qualitative interviews and 30 survey responses informed the design. Full PRD delivered for the MGA Group Project assignment."
      }
    ],
    metrics: [
      { num: "Live", label: "tryfluent.netlify.app" },
      { num: "30", label: "Survey respondents" },
      { num: "PRD", label: "Full spec delivered" }
    ],
    link: "https://tryfluent.netlify.app",
    linkLabel: "View live prototype"
  },
  lomiha: {
    type: "Holistic Product Strategy & Spec · HelloPM AI Product Specialisation",
    title: "Bridging Private Wellness Journeys with Clinically Approved Recommendations",
    sub: "Lomiha · Mental Wellness Navigator · 2026",
    decision: "Factual and professional product implementation. Privacy by Design with no registration or data retention in v1 to overcome structural user trust barriers holistically.",
    sections: [
      {
        label: "Product Strategy & Wellness Journeys",
        text: "Led the holistic product discovery initiative. Structured user wellness journey maps, mapped emotional trust patterns for users in crisis, and designed recommendation flow gates to connect seekers with safe, professional guidance without friction."
      },
      {
        label: "Trust-First Architecture & Privacy Controls",
        text: "Pioneered Privacy by Design: designed zero-login and zero-retention guidelines in v1, proving that high-quality mental health recommendation utilities do not require security intrusion, database tracking, or risk of cloud leaks."
      },
      {
        label: "Intelligent Workflow & Guardrails",
        text: "Orchestrated advanced system prompt insulation parameters, document chunking guidelines, and direct safety escalation networks that fast-path critical safety triggers directly to physical local emergency channels."
      }
    ],
    metrics: [
      { num: "Zero", label: "Data Retention v1" },
      { num: "Trust", label: "Privacy Matrix" }
    ],
    linkLabel: "Specification and product strategy details are fully outlined below"
  },
  driveu: {
    type: "Product Analysis & PRD · HelloPM AI Product Specialisation",
    title: "The churn was not about matching speed. It was what happened after the driver was assigned.",
    sub: "DriveU · Ride-hailing Reliability · 2026",
    decision: "Reframed from algorithm improvement to communication and expectation-setting. The shift changed the solution space entirely.",
    sections: [
      {
        label: "The problem",
        text: "DriveU was experiencing churn. The assumed problem was slow driver matching. Structured discovery revealed the real friction: post-match anxiety in the window between driver assignment and arrival where users had no reliable signal of what was happening."
      },
      {
        label: "What I did",
        text: "Mapped the full user lifecycle to surface where friction actually lived. Applied Why-Why root cause analysis to confirm the problem was state communication, not marketplace or algorithm performance. Produced user segmentation, RICE prioritisation, and a PRD."
      },
      {
        label: "Outcome",
        text: "End-to-end product analysis and full PRD delivered. Problem reframed from matching speed to post-match reliability. A different problem, with a different and cheaper solution."
      }
    ],
    metrics: [
      { num: "PRD", label: "Full product spec" },
      { num: "RICE", label: "Prioritisation" }
    ],
    link: "DriveU_Case_Study_Saurabh_Sudhir.pdf",
    linkLabel: "Full case study",
    prd: {
      label: "PRD Highlights · DriveU Post-Assignment Clarity Module",
      rows: [
        { label: "Core insight", value: "Post-driver-assignment cancellation is a state-communication problem, not a marketplace or pricing problem. Confirmed through Why-Why root cause analysis." },
        { label: "Solution", value: "Post-Driver-Assignment Clarity Module: context-aware ETA messaging, structured ride lifecycle timeline (Assigned → Scheduled → En Route → Arriving), and a What Happens Next information card." },
        { label: "Prioritisation", value: "RICE scoring across 10 solution ideas. Info card scored highest (18) for high reach, high confidence, and lowest effort. One cohesive module over fragmented fixes." },
        { label: "Primary metric", value: "Post-driver-assignment cancellation rate among Occasional Need Users. Guardrails: driver idle time and pickup delay rate." },
        { label: "Risk framing", value: "Three risks identified with detection signals: cancellation rate unchanged, status mismatch logs, driver idle time increase." }
      ]
    }
  },
  "cred-masters": {
    type: "Masters · 2021–2023",
    title: "M.A. Innovation Design Management",
    sub: "University of Europe for Applied Sciences, Potsdam, Germany · In-person · 2021–2023",
    link: "Master Certificate.pdf",
    linkLabel: "M.A. Degree Certificate",
    decision: "Acquired deep training in managing design, business models, and technology concurrently. Realized that physical spatial mapping directly scales to digital systems thinking.",
    sections: [
      {
        label: "Programme focus",
        text: "Ranked as a top design management master's, this 120 ECTS program bridges business model innovation, systems thinking, user journey mapping, service design, and customer empathy research. Completed all courses in-person in Berlin/Potsdam in multidisciplinary teams. Lived in Germany for 2 years."
      },
      {
        label: "Documentary credentials",
        text: "M.A. Innovation Design Management - 120 ECTS Track. Conferred in Berlin on October 17, 2023 with a final grade of 'Very good (90.4)'. Thesis topic: 'Driving Disruptive Business Model Innovation in the Medical Home Care Industry: Empowering Entrepreneurial Ventures'."
      }
    ],
    metrics: [
      { num: "120 ECTS", label: "Credits completed" },
      { num: "90.4", label: "Very Good Grade" },
      { num: "2 yrs", label: "Potsdam/Berlin" }
    ],
    credProjects: [
      {
        title: "Thesis: Disruptive Business Model Innovation in Medical Home Care",
        detail: "Independent 110+ page postgraduate research thesis under Prof. Johannes Keissler & Prof. Martina Skender. Used the Research Onion methodology: ran 24 surveys in Bangalore with patients and next of kin to analyze satisfaction levels (54.2% good/avg, 75% choose based on close recommendations) and trust criteria (cleanliness, dependability, and contract-less 75% trust gaps); held extensive group discussions with 3 chief hospital doctors (Surgical Oncologist from Manipal, Geriatric Endocrinologist from Baptist, Psychiatrist from St. John's); designed 5-stage Customer Journey Maps for geriatric patients, kins, and doctors (Onset of Illness, Hospital Inpatient, Rehab Transition, Discharge Planning, and Home Recovery); analyzed Tata 1MG (aggregator) and Urban Company (trusted direct vetting) as analog benchmarks; and proposed a full-stack aggregator product roadmap for medical home care delivery optimization.",
        pdfUrl: "Sudhir_Saurabh_ma_thesis_ss23.pdf"
      },
      {
        title: "Digitisation of Berlin Administration",
        detail: "Collaboration with VOLT Think Tank. Redesigned Berlin's public registration service (Anmeldung) for expatriates and non-German speakers using the Double Diamond design framework. Conducted administrative user experience shadowing, systems flow modeling, and benchmarked Ukraine's 'Diia' digital government model for high efficiency.",
        videoUrl: "https://www.youtube.com/embed/6bav49fNhfo"
      },
      {
        title: "VISA Coin and VISA Trading",
        detail: "Advanced business model study for Prof. Martina Skender. Modeled a dual-value blockchain architecture: 'VISA Coin' (a network-incentivized client loyalty ledger) and 'VISA Trading' (an integrated B2C trading system). Drafted full Value Proposition Canvas, Business Model Canvas, financial cashflows, and Blue Ocean strategy charts.",
        pdfUrl: "VISA___UE_1.pdf"
      },
      {
        title: "INSTANT · AI Mental Wellness Super App",
        detail: "Entrepreneurship project designing an AI-driven, therapist-integrated mobile ecosystem. Runs a contextual 'Empathetic Virtual Assistant' welcoming users, integrating calendar meetings to predict stage anxiety, and matching real-time stress levels to dedicated partner resources (Calm, BetterHelp, Headspace, Practo, Spotify). Designed full TAM-SAM-SOM analytics (73% of world suffers from anxiety; Bangalore SAM focused on English-speaking presenters; SOM targeting 40% private colleges and 20% companies + 10k bulk consumers); structured a 3-month tiered individual subscription model (€4.5 Base / €15 Up / €30 Max) and B2B institutional tiers. Financial modeling mapped a 4-year growth schedule (Bangalore to Metros to Celebrity endorsements to Global scale) requesting a €1,000,000 funding Ask against a year-0 EBITDA deficit.",
        pdfUrl: "Business_pitch_.pdf"
      }
    ]
  },
  "cred-lisaa": {
    type: "Undergrad · 2016–2020",
    title: "Diploma (4 years) in Interior Architecture, Product & Environmental Design",
    sub: "LISAA School of Design, Bangalore / Paris · 2016–2020",
    link: "UG Certificate.pdf",
    linkLabel: "LISAA Undergrad Diploma",
    decision: "Taking interior and product design built my foundational skill of mapping whole spatial ecosystems and human physical mechanics before drawing static visual interfaces.",
    sections: [
      {
        label: "Programme focus",
        text: "4-year professional diploma co-certified by LISAA Paris. Grounded in spatial layout structures, material science, ergonomics, physical model prototyping, and user circulation mapping. This intensive spatial training serves as the foundation for my current digital systems architecture and UX mapping capabilities."
      }
    ],
    metrics: [
      { num: "4 yrs", label: "Design Training" },
      { num: "Paris", label: "Co-Certified" }
    ]
  },
  "cred-hellopm": {
    type: "Educational Specialisation · 2026",
    title: "HelloPM AI Product Management Specialisation",
    sub: "15-Week Intensive AI PM Curriculum & Case Studies",
    decision: "Enrolled in HelloPM to learn advanced AI orchestration, context routing, prompt boundaries, and scalable go-to-market mechanics.",
    sections: [
      {
        label: "Curriculum Focus",
        text: "Completed intensive specialized training spanning product sense, user discovery loops, RICE prioritization, and full-stack AI integration pipelines. Built multiple engineering-ready product resource cases, treated as realistic consulting deliverables."
      },
      {
        label: "Associated Project Specifications",
        text: "Delivered four comprehensive, product studies: DriveU expectations module, CarDekho trust maps, Lomiha zero-login wellness specs, and Fluent prompt evaluations. Each focuses on solving hard operational friction with intelligent system features."
      }
    ],
    metrics: [
      { num: "15-wk", label: "Intensive training" },
      { num: "RICE", label: "Prioritisation" },
      { num: "4", label: "Case Specs Delivered" }
    ],
    credProjects: [
      {
        title: "DriveU · Product Analysis & PRD",
        detail: "Structured discovery revealing post-match anxiety as the core churn driver. Why-Why root cause analysis, RICE prioritisation, full PRD.",
        pdfUrl: "DriveU_Case_Study_Saurabh_Sudhir.pdf"
      },
      {
        title: "AI Car Buying Companion · Full PRD & Prototype",
        detail: "AI Fit Score, Trust Cards, Decision Nudge triggers. Trust over full AI transparency. Working Lovable prototype.",
        linkUrl: "https://carcopilot-buddy.lovable.app",
        linkLabel: "View Prototype"
      },
      {
        title: "Lomiha · Mental Wellness Product Strategy & Specification",
        detail: "Holistic, trust-first product definition with no signups or database writing in v1. Includes full prompt engineering guardrails, textbook indexing schemas, and fallback logic."
      },
      {
        title: "Fluent · AI Workflow Practice Platform (MGA Group Project)",
        detail: "Primary user research, comparison-based evaluation flows, and live prototype deployed on tryfluent.netlify.app.",
        linkUrl: "https://tryfluent.netlify.app",
        linkLabel: "View Prototype"
      }
    ]
  },
  "cred-wharton": {
    type: "Certification · 2024",
    title: "AI for Decision Making: Business Strategies and Applications",
    sub: "Wharton Online, University of Pennsylvania · Conferred September 2, 2024",
    link: "Whaton Univesrity PDf .pdf",
    linkLabel: "Wharton AI Certificate",
    decision: "Joined the program under Professor Kartik Hosanagar to master ML evaluations, decision tree models, LLM hallucination trade-offs, and deployment risks in enterprise applications.",
    sections: [
      {
        label: "Course curriculum",
        text: "Completed Wharton's formal AI strategies curriculum. Topics covered include machine learning pipelines, predictive analytics, LLM retrieval evaluations, neural network applications, and operational risk mitigation for AI adoption."
      }
    ],
    metrics: [
      { num: "Penn", label: "Wharton Online" },
      { num: "Sept 2024", label: "Conferred" }
    ]
  },
  "classpanda": {
    type: "EdTech · Three-sided Marketplace · HelloPM AI Product Specialisation",
    title: "Streamlined three-sided marketplace matching via onboarding overhaul and tiered incentives.",
    sub: "Class Panda · EdTech Platform · 2024–2025",
    decision: "The dropping transaction rate was not a feature deficiency but rather pricing and onboarding friction. Chose a tiered discount model to protect tutor retention while expanding learner transaction frequency.",
    sections: [
      {
        label: "The challenge",
        text: "An EdTech three-sided marketplace matching learners, tutors, and the parent platform was struggling with matching speed and user drop-offs. Traditional pricing models were hurting tutor retention, and learners suffered high onboarding friction before reaching tutors."
      },
      {
        label: "What I did",
        text: "Conducted a complete flow overhaul to simplify teacher and parent registration. Introduced a tiered discount pricing system designed to encourage longer-term, repeat tuition blocks while safeguarding the platform's transactional commission margins."
      },
      {
        label: "The outcome",
        text: "Drastically accelerated tutor matching speeds and improved parent transaction-onboarding conversion rates, resulting in increased overall marketplace transaction volume."
      }
    ],
    metrics: [
      { num: "3-way", label: "Marketplace" },
      { num: "Tiered", label: "Pricing Model" }
    ]
  },
  "smruthi": {
    type: "Delivery & Process Transformation · Smruthi Technologies",
    title: "Eliminated ~20% code rework rate and recovered critical delayed accounts.",
    sub: "Smruthi Technologies · Bengaluru · Sep 2023 – Aug 2024",
    decision: "Rework is rarely an engineering speed problem—it is a requirement definition and scope alignment problem. Enforced a hard milestone: no engineering build begins without prior Figma prototype sign-offs and structured backlog locks.",
    sections: [
      {
        label: "The problem",
        text: "Active digital accounts had an estimated 20% code rework rate, project delays, and a reactive requirement management process. Teams were working on ad-hoc requests, leading to timeline slips and unstable developer sprints."
      },
      {
        label: "What I did",
        text: "Introduced formal sprint backlogs, backlog governance via Odoo, and a strict requirement alignment process. Initiated a 'Figma-first' review cycle where stakeholders explicitly signed off on design layout prior to code initialization. Personally managed end-to-end milestone delivery for three major client accounts: Apollo Pharmacies (interactive web platform), Aarogya Hastha Hospital (patient mobile app), and ResGov (governmental policy hub versions 1 and 2)."
      },
      {
        label: "The outcome",
        text: "Near-eliminated code rework within the first year of rollout. Successfully recovered all delayed projects and transitioned delivery cadence from frantic and ad-hoc to predictable, structured releases."
      }
    ],
    metrics: [
      { num: "~20%", label: "Rework rate eliminated" },
      { num: "3", label: "Accounts fully recovered" },
      { num: "Odoo", label: "Sprint governance" }
    ]
  },
  "berlin": {
    type: "Civil Service Digitisation · Volt Think Tank · Masters",
    title: "Digitisation of Berlin Administration",
    sub: "Collaboration with VOLT Think Tank · Berlin",
    link: "https://www.youtube.com/embed/6bav49fNhfo",
    linkLabel: "Systems Presentation Video",
    decision: "Decided to map systemic, cross-office queues rather than focusing purely on front-end aesthetics. Used Ukraine's high-efficiency digital government (Diia) model as an architectural benchmark.",
    sections: [
      {
        label: "The problem",
        text: "Expatriates and non-German speakers in Berlin face extreme bureaucratic friction, archaic portal forms, and multi-month queue delays just to complete a standard Anmeldung (residency registration)."
      },
      {
        label: "What we did",
        text: "Redesigned Berlin's public registration service utilizing systems flow modeling, municipal workload dispatch, and Double Diamond methodologies. Structured a 5-step digital lifecycle: Citizen request validation, automatic Wohnungsgeberbestätigung verification, decentralized queue routing, and direct digital receipt issuance."
      }
    ],
    metrics: [
      { num: "Diia", label: "Model Benchmark" },
      { num: "5-stage", label: "Workload Stream" }
    ]
  },
  "journey-design": {
    type: "Milestone 1 · 2016–2020",
    title: "Design Foundations & Spatial Ecosystems",
    sub: "LISAA School of Design, Bangalore / Paris · Co-certified Undergrad Diploma",
    decision: "Before designing digital interfaces, I trained for four years in mapping physical spaces, human ergonomics, and environmental circulation systems. This built the spatial foundations for my current systems thinking.",
    sections: [
      {
        label: "Design Foundations",
        text: "Completed an intensive, co-certified 4-year professional design program. Rather than diving straight into visual UI pixels, my core training was in user circulation flows, structural layout density, and spatial systems orchestration. This taught me to analyze how users move through multi-layered environments, a framework that translates directly into digital product architecture and complex user workflows."
      },
      {
        label: "Credentials & Verification",
        text: "The 4-year Diploma in Interior Architecture & Product Design was co-certified by LISAA Paris. The focus remains strictly on the transition into product and innovation design, mapping spatial ecosystems and human mechanics before building static software screens."
      }
    ],
    metrics: [
      { num: "4 yrs", label: "Design Training" },
      { num: "Paris", label: "Co-Certified" }
    ],
    link: "UG Certificate.pdf",
    linkLabel: "Diploma Degree Certificate"
  },
  "journey-masters": {
    type: "Milestone 2 · 2021–2023",
    title: "Systems Thinking & International Innovation",
    sub: "University of Europe for Applied Sciences, Potsdam, Germany · M.A. Degree",
    decision: "Moving to Germany bridged my design training with core business-model engineering and digital platforms strategy. Here, I mastered frameworks matching visual design directly to market viability.",
    sections: [
      {
        label: "Master of Science in Innovation Design Management",
        text: "Completed Potsdam's premier 120 ECTS business innovation curriculum with a final grade of 'Very Good (90.4)'. Lived in Germany for 2 years. Extensively studied business model design, systems thinking, user journey mapping, and customer empathy research."
      },
      {
        label: "Academic Masterworks & Artifacts",
        text: "Developed major, system-oriented strategic projects including a PG Thesis in medical care coordination products, a digital registration framework with Volt Think Tank, a dual-currency loyalty protocol (VISA Coin), and an AI psychiatric platform proposal (INSTANT). Supporting papers are linked below."
      }
    ],
    metrics: [
      { num: "120 ECTS", label: "Credits Completed" },
      { num: "90.4", label: "Very Good Grade" },
      { num: "2 yrs", label: "Potsdam/Berlin" }
    ],
    link: "Master Certificate.pdf",
    linkLabel: "M.A. Degree Certificate",
    credProjects: [
      {
        title: "Thesis: Disruptive Home-Care Aggregator Model",
        detail: "Independent 110+ page postgraduate research thesis under Prof. Johannes Keissler & Prof. Martina Skender. Conducted 24 patient/family surveys, structured 5-stage Customer Journey Maps, analyzed analog models (Tata 1MG, Urban Company), and designed a full-stack, aggregator product roadmap for medical home care delivery optimization.",
        pdfUrl: "Sudhir_Saurabh_ma_thesis_ss23.pdf"
      },
      {
        title: "Digitisation of Berlin Administration",
        detail: "Collaboration with VOLT Think Tank. Redesigned Berlin's public registration service (Anmeldung) for expatriates and non-German speakers using the Double Diamond design framework. Conducted administrative user shadow research, flow modeling, and benchmarked Diia digital models.",
        videoUrl: "https://www.youtube.com/embed/6bav49fNhfo"
      },
      {
        title: "VISA Coin & Dual-Value Ledger",
        detail: "Designed a dual-ledger value mechanism involving client loyalty tokenomics and frictionless B2C commerce. Built detailed value propositions, BMC projections, and Blue Ocean strategy maps.",
        pdfUrl: "VISA___UE_1.pdf"
      },
      {
        title: "INSTANT: AI Mental Wellness Proposal",
        detail: "Strategic business layout outlining TAM-SAM-SOM analytics, subscription monetization tracks, and interactive psychiatric referral schedules with a €1,000,000 funding Ask outline.",
        pdfUrl: "Business_pitch_.pdf"
      }
    ]
  },
  "journey-smruthi": {
    type: "Milestone 3 · 2023–2024",
    title: "Product Delivery & Process Transformation",
    sub: "Smruthi Technologies · Bengaluru · Process Governance",
    decision: "Software delivery delays are rarely an engineering speed problem—they are a requirements and scoping alignment problem. Transitioned development from ad-hoc reacting to a predictable sprint machine.",
    sections: [
      {
        label: "Process Engineering & Delivery Governance",
        text: "Spearheaded the complete transformation of our client delivery pipelines, serving as the central coordinator between engineering blocks and business stakeholders. Near-eliminated a ~20% code rework rate by enforcing sprint governance via Odoo, launching backlog grooming standards, and requiring explicit Figma interactive approvals before coding."
      },
      {
        label: "Key Client Accounts Recovered",
        text: "Successfully unblocked and recovered three high-value accounts that had slipped past target dates: Apollo Pharmacies (interactive web platform), Aarogya Hastha Hospital (patient mobile app), and ResGov (governmental policy hub versions 1 and 2)."
      },
      {
        label: "Focus Areas",
        text: "Process design, stakeholder coordination, product operations, and business analysis foundations."
      }
    ],
    metrics: [
      { num: "~20%", label: "Rework rate eliminated" },
      { num: "3", label: "Strategic accounts recovered" },
      { num: "Odoo", label: "Process governance" }
    ]
  },
  "journey-neetable": {
    type: "Milestone 4 · 2024–2025",
    title: "SaaS Products & AI Implementation Ownership",
    sub: "Neetable Technologies · Bengaluru · Product Owner",
    decision: "Owning products at Neetable meant shipping production-grade solutions across complex industries. I shifted scoping from 'maximizing features' to 'maximizing learning and system efficiency'.",
    sections: [
      {
        label: "Enterprise SaaS & AI Delivery Ownership",
        text: "Pioneered product strategy, requirement definitions, and daily sprint delivery for high-stakes healthcare logistics, fleet telemetry, AI triage, and APAC commerce systems. Partnered directly with developers, designers, and business contacts to drive feature releases."
      },
      {
        label: "SaaS & AI Highlights",
        text: "• Healthcare SaaS: Redesigned PhoxHealth's routing model from radial zones to polygons, dropping dispatcher overhead by 20%.\n• Enterprise Products: Structured coal mining safety telemetry with offline SQLite caches keeping 100% data integrity.\n• AI-Enabled Products: Directed Sylvester AI's feline facial triage, cutting personalization to accelerate go-to-market by 30%.\n• Cross-functional collaboration: Managed direct communication, project operations, and daily releases among 12+ developers."
      }
    ],
    metrics: [
      { num: "172+", label: "Sylvester GTM Countries" },
      { num: "~20%", label: "Dispatcher overhead drop" },
      { num: "100%", label: "Telemetry data integrity" }
    ]
  },
  "journey-strategy": {
    type: "Milestone 5 · 2025–PRESENT",
    title: "AI Product Strategy & Advanced Systems",
    sub: "Advanced Product Management & AI Frameworks Integration",
    decision: "Moving into high-tier AI Product Strategy required establishing expert proficiency in model evaluation, RAG pipelines, prompt engineering guidelines, and business evaluation trade-offs.",
    sections: [
      {
        label: "Advanced Frameworks & Continuous Mastery",
        text: "Sharpening a professional AI toolset. Acquired domain-level expertise in retrieval-augmented generation (RAG) chunking strategy, prompt adversarial design, decision tree evaluations, and LLM hallucination trade-offs."
      },
      {
        label: "Next-Generation AI Products Built",
        text: "Constructed engineer-ready product case studies and live interactive software artifacts: 1. Fluent (Live tryfluent.netlify.app): scaffolding prompts to dodge blank-box cognitive load. 2. Lomiha: privacy-grounded mental recovery spec with zero login and zero retention. 3. Car Copilot (carcopilot-buddy.lovable.app): score relevance translation via Trust Cards."
      }
    ],
    metrics: [
      { num: "Live", label: "Interactive systems" },
      { num: "RAG", label: "Spec designs" },
      { num: "0-to-1", label: "Product strategy" }
    ]
  },
  "journey-hellopm": {
    type: "AI PM Training · HelloPM · 2026",
    title: "AI Product Management Programme",
    sub: "HelloPM · 15-week Intensive Core Curriculum",
    decision: "Committed to deep-dive AI product workflows to translate standard PM skills (prioritisation, UX mapping) into LLM capabilities, retrieval-augmented models, and multi-agent operations.",
    sections: [
      {
        label: "Programme focus",
        text: "15-week intensive covering product sense, PRD writing, prioritisation frameworks (RICE, ICE, KANO), value proposition design, AI for PMs (LLMs, RAG, agents), analytics, and go-to-market. Assignments built as real product work, not exercises."
      },
      {
        label: "Delivered Specifications & Prototypes",
        text: "Produced core specifications and interactive previews including the DriveU post-assignment clarity module (PRD), CarDekho trust companion (lo-fi prototype), Lomiha mental wellness navigator (RAG specification), and Fluent prompt learning system."
      }
    ],
    metrics: [
      { num: "15-wk", label: "Intensive training" },
      { num: "RICE", label: "Prioritisation" },
      { num: "4", label: "Major Specs" }
    ],
    credProjects: [
      {
        title: "DriveU · Product Analysis",
        detail: "Structured discovery revealing post-match anxiety as the core churn driver. Why-Why root cause analysis, RICE prioritisation, full PRD.",
        pdfUrl: "DriveU_Case_Study_Saurabh_Sudhir.pdf"
      },
      {
        title: "AI Car Buying Companion · Full PRD + Prototype",
        detail: "AI Fit Score, Trust Cards, Decision Nudge triggers. Trust over full AI transparency. Working Lovable prototype.",
        linkUrl: "https://carcopilot-buddy.lovable.app",
        linkLabel: "View Prototype"
      },
      {
        title: "Lomiha · Mental Wellness RAG Specification",
        detail: "Engineer-ready RAG spec: chunking strategy, system prompt architecture, fallback logic, safety escalation flows. Trust-first v1 with no login or data retention."
      },
      {
        title: "Fluent · AI Workflow Practice Platform (MGA Group Project)",
        detail: "Primary research across India and Germany. Live prototype at tryfluent.netlify.app. Full PRD delivered.",
        linkUrl: "https://tryfluent.netlify.app",
        linkLabel: "View Prototype"
      }
    ]
  },
  "journey-wharton": {
    type: "Wharton Certificate · 2024",
    title: "AI for Decision Making: Strategy & Application",
    sub: "Wharton Online, University of Pennsylvania · Conferred September 2, 2024 · 3-month program",
    decision: "Acquired formal machine learning capability mapping under Professor Kartik Hosanagar to evaluate ML algorithms, validate neural network architectures, and handle hallucination trade-offs structurally.",
    sections: [
      {
        label: "Course curriculum & Mastery",
        text: "Completed Wharton's formal AI strategies curriculum. Topics covered include machine learning pipelines, predictive analytics, LLM retrieval evaluations, neural network applications, and operational risk mitigation for AI adoption."
      },
      {
        label: "Standalone Credential",
        text: "Official Wharton Online/University of Pennsylvania executive program certificate, verified and linked directly below for absolute integrity."
      }
    ],
    metrics: [
      { num: "Penn", label: "Wharton Online" },
      { num: "3-mo", label: "Program track" },
      { num: "Sept 24", label: "Conferred" }
    ],
    link: "Whaton Univesrity PDf .pdf",
    linkLabel: "Wharton AI Certificate Document"
  }
};
