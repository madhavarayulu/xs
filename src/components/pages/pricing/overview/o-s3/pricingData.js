export const pricingPlans = [
  {
    name: 'Free',
    badge: 'Free',
    description: 'For individuals automating ELT for small volumes of data.',
    features: [
      'Access Standard Plan features, free up to 500,000 monthly active rows (MAR)',
      'Commitment free: No credit card required',
    ],
  },
  {
    name: 'Starter',
    badge: 'Free',
    description: 'Achieve modern ELT for your application and file sources.',
    features: [
      '10 users',
      '1-hour syncs',
      '500+ fully-managed connectors',
      'Automatic schema migrations',
      'Integration for dbt core',
      'Role-based access control',
    ],
  },
  {
    name: 'Standard',
    badge: 'Most popular',
    description:
      'Centralize product and transactional data from your databases.',
    features: [
      'Everything in our Starter Plan, plus:',
      'Unlimited users',
      '15-min syncs',
      'Database connectors',
      "Access to Xemsoft's REST API",
    ],
  },
  {
    name: 'Enterprise',
    badge: 'Free',
    description:
      'Empower everyone with fast, secure, reliable data from all of your sources.',
    features: [
      'Everything in Standard, plus:',
      'Enterprise database connectors',
      '1-minute syncs',
      'Hybrid deployment option',
      'Granular roles & support for teams',
      'Advanced data governance',
      'Advanced security and data residency options.',
      'Priority support',
    ],
  },
];

export const featureBoxes = [
  {
    title: 'Business Critical',
    description:
      'Designed for enterprise companies that need the highest levels of data protection and compliance.',
    features: [
      'Access to Xemsoft HVR and Hybrid deployment option',
      'Customer-managed keys for encryption',
      'Private networking options',
      'PCI DSS Level 1 certification',
    ],
    buttonText: 'Contact sales',
  },
  {
    title: 'Private Deployment',
    description:
      'Meet the strictest requirements for secure database replication.',
    features: [
      'Host Xemsoft on-premises, in a virtual private cloud or air gapped in your secure network',
      'Real-time, streaming and high-volume database replication',
      'Work with Xemsoft Professional Services for faster implementation',
      'Annual subscription pricing based on usage',
    ],
    buttonText: 'Contact sales',
  },
];
