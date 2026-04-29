export const company = {
  name: 'MetaIntelligence',
  legalNameEn: 'MetaIntelligence Inc.',
  formerName: 'Metacomputing Inc.',
  founded: '2021.12.10',
  headquarters: '4F #401, 13 Alphacity 1-ro 35-gil, Suseong-gu, Daegu, Republic of Korea',
  phone: '053-719-4290',
  fax: '053-719-4291',
  email: 'choi@metaintelligence.co.kr',
  tagline: 'Insight into Essence, Design for Value',
  shortDescription:
    'MetaIntelligence builds First-Principle AI software for domain signal intelligence, manufacturing vision inspection, and source-grounded knowledge workflows. The company focuses on systems whose outputs can be traced, tested, and operated in real workflows.',
};

export const mainStats = [
  { value: '2021', label: 'Founded as a software and AI company' },
  { value: '4 years', label: 'Consecutive public R&D analytics execution' },
  { value: '6.5M+', label: 'Large-scale records processed and structured' },
  { value: 'KR 10-2573563', label: 'Registered patent for natural data analysis' },
];

export const principles = [
  {
    title: 'First-Principle AI',
    label: 'Model the structure first',
    description:
      'We begin with the physical, statistical, or operational structure of a problem before selecting models and automation layers.',
    icon: 'tabler:atom-2',
  },
  {
    title: 'Verification-Driven',
    label: 'Keep outputs traceable',
    description:
      'Generated insights are connected to source data, reproducible calculations, and reviewable operating procedures.',
    icon: 'tabler:shield-check',
  },
  {
    title: 'Open Architecture',
    label: 'Fit the customer environment',
    description:
      'Pipelines are designed to integrate with existing data, models, deployment constraints, and multiple LLM providers.',
    icon: 'tabler:network',
  },
];

export const capabilities = [
  {
    title: 'Multimodal AI',
    subtitle: 'Vision-language fusion and physics-informed modeling',
    description:
      'Computer vision, image generation, document understanding, and structured signals are combined for industrial AI workflows.',
    icon: 'tabler:brain',
  },
  {
    title: 'Knowledge AI',
    subtitle: 'Agentic AI and document intelligence',
    description:
      'Technical documents and structured datasets are converted into searchable knowledge, grounded summaries, and report-ready insights.',
    icon: 'tabler:file-analytics',
  },
  {
    title: 'HPC & Optimization',
    subtitle: 'Hybrid computing and large-scale data pipelines',
    description:
      'Large datasets, GPU workloads, and deployment pipelines are engineered as part of the product, not left as lab-only prototypes.',
    icon: 'tabler:cpu',
  },
  {
    title: 'Signal Intelligence',
    subtitle: 'Configurable trend and risk discovery',
    description:
      'Text fields, dates, amounts, groups, and temporal signals are analyzed to reveal domain-specific momentum.',
    icon: 'tabler:chart-arrows-vertical',
  },
];

export const solutions = [
  {
    name: 'MVI',
    fullName: 'Meta Vision AI',
    href: '/solutions/mvi',
    domain: 'Manufacturing vision AI',
    summary:
      'A field-adaptive inspection workflow that combines one-class anomaly detection, targeted data augmentation, and 3-BIN human-in-the-loop operation.',
    proof: 'Validated on anomaly detection workflows including MVTec AD experiments and manufacturing PoC scenarios.',
    icon: 'tabler:scan-eye',
    detail:
      'Normal-data learning, targeted GenAI augmentation, 3-BIN review, and legacy-friendly deployment are organized as one field workflow.',
  },
  {
    name: 'MetaInsight',
    fullName: 'Domain Signal Intelligence Platform',
    href: '/solutions/metainsight',
    domain: 'Domain-agnostic signal analytics',
    summary:
      'A configurable platform for collecting, cleaning, clustering, scoring, and reporting large-scale domain datasets with evidence-linked outputs.',
    proof:
      'Built from repeated public R&D analytics work, then generalized into a domain-configurable trend and insight engine.',
    icon: 'tabler:database-search',
    detail:
      'Collection, cleansing, vectorization, clustering, scoring, and insight generation stay connected to source records and reviewable evidence.',
  },
  {
    name: 'DIANA',
    fullName: 'Domain Intelligence Agent',
    href: '/solutions/diana',
    domain: 'Agentic AI',
    summary:
      'An agent layer for query planning, evidence retrieval, calculation checks, and draft outputs on top of structured domain data and documents.',
    proof: 'Designed to extend MetaInsight pipelines into grounded, repeatable knowledge-work automation.',
    icon: 'tabler:sparkles',
    detail:
      'A guided agent layer turns structured evidence into intelligence units, draft reports, review notes, and verification logs.',
  },
];

export const collaborationSolutions = [
  {
    name: 'MetaInsight MFG',
    domain: 'Manufacturing report automation',
    description:
      'A manufacturing analytics extension that connects MES, sensor, ERP, inspection, and 4M logs into diagnosis and reporting workflows.',
  },
  {
    name: 'AeroGimbal-Track',
    domain: 'Real-time visual tracking and control',
    description:
      'A vision AI concept for tracking high-speed moving objects and linking perception to gimbal control in operational environments.',
  },
];

export const trackRecords = [
  {
    year: '2022-2025',
    title: 'Repeated public R&D analytics projects',
    description:
      'Analyzed domestic and global R&D funding, emerging research topics, and technology signals across multiple yearly projects.',
  },
  {
    year: '2023.08',
    title: 'Registered patent KR 10-2573563',
    description:
      'Registered intellectual property for a natural data analysis system and method, forming a basis for R&D intelligence workflows.',
  },
  {
    year: '2024',
    title: 'MetaInsight prototype and workflow demonstrations',
    description:
      'Expanded large-scale R&D analytics pipelines into web-based workflows for filtering, clustering, insight review, and reporting.',
  },
  {
    year: '2025',
    title: 'MicroDIPS-based vision anomaly detection validation',
    description:
      'Extended normal-data-based anomaly detection and data augmentation methods toward manufacturing vision AI use cases.',
  },
  {
    year: '2026',
    title: 'Manufacturing, aerospace, and LLM workflow expansion',
    description:
      'Developing applied product directions around MVI, MetaInsight MFG, AeroGimbal-Track, and agentic domain intelligence.',
  },
];

export const team = [
  {
    name: 'Seongsoo Choi',
    role: 'Founder & CEO',
    specialty: 'Physics-informed AI and integrated AI architecture',
    summary:
      'Ph.D. in physics from POSTECH. Experience across machine vision engineering, CSAIC research, and registered AI analytics IP.',
  },
  {
    name: 'NLP / LLM Lead',
    role: 'Document Intelligence',
    specialty: 'Language models, evaluation, and report generation',
    summary:
      'Leads grounded document analysis, LLM evaluation, and agent workflows for domain intelligence and technical reporting.',
  },
  {
    name: 'Software Engineering Lead',
    role: 'Product Engineering',
    specialty: 'Frameworks, graphics, SaaS, and deployment',
    summary:
      'Builds product-grade software architecture for vision AI demos, analytics interfaces, and enterprise-ready workflows.',
  },
  {
    name: 'Machine Vision Researcher',
    role: 'Modeling & Inspection AI',
    specialty: 'Defect modeling and anomaly detection',
    summary:
      'Develops inspection logic, synthetic data strategies, and model evaluation pipelines for manufacturing vision scenarios.',
  },
  {
    name: 'Data Quality Researcher',
    role: 'R&D Data Operations',
    specialty: 'Data processing and quality management',
    summary: 'Supports collection, cleansing, validation, and structured operation of large-scale datasets.',
  },
];

export const researchHighlights = [
  {
    title: 'Natural data analysis system',
    description:
      'Registered patent KR 10-2573563 covers a method for analyzing technical and natural data through structured interpretation.',
  },
  {
    title: 'R&D grants data physics',
    description:
      'A quantitative approach for analyzing global R&D records such as NSF, NIH, NTIS, KAKEN, and CORDIS datasets.',
  },
  {
    title: 'Emerging technology signal pipeline',
    description:
      'Clustering, temporal signals, quantitative indicators, and LLM-based evaluation are combined to identify emerging technology candidates.',
  },
  {
    title: 'Public research presentations',
    description:
      'Research activities include R&D funding analytics, future issue discovery, and related presentation or report work.',
  },
];
