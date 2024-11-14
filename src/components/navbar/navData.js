const navData = {
  product: {
    label: 'Product',
    sections: [
      {
        title: 'Platform',
        links: [
          {
            to: '/data-movement',
            icon: 'product__data-movement.svg',
            label: 'Data movement',
          },
          {
            to: '/transformations',
            icon: 'product__transformations.svg',
            label: 'Transformations',
          },
          { to: '', icon: 'product__security.svg', label: 'Security' },
          { to: '', icon: 'product__governance.svg', label: 'Governance' },
          {
            to: '',
            icon: 'product__extensibility-and-management.svg',
            label: 'Extensibility and management',
          },
          {
            to: '',
            icon: 'product__deployment-options.svg',
            label: 'Deployment options',
          },
        ],
      },
      {
        title: 'Sources',
        links: [
          {
            to: '',
            icon: 'product__saas-replication.svg',
            label: 'Saas replication',
          },
          {
            to: '',
            icon: 'product__database-replication.svg',
            label: 'Database replication',
          },
          {
            to: '',
            icon: 'product__sap-replication.svg',
            label: 'SAP replication',
          },
          {
            to: '',
            icon: 'product__streaming-replication.svg',
            label: 'Streaming replication',
          },
          {
            to: '',
            icon: 'product__file-replication.svg',
            label: 'File replication',
          },
          {
            to: '',
            icon: 'product__custom-connectors.svg',
            label: 'Custom connectors',
          },
          {
            to: '',
            icon: 'product__destination-to-destination.svg',
            label: 'Destination to destination',
          },
        ],
      },
      {
        title: 'Destinations',
        links: [
          { to: '', icon: 'product__data-lakes.svg', label: 'Data lakes' },
        ],
      },
    ],
  },
  solutions: {
    label: 'Solutions',
    sections: [
      {
        title: 'For Operations',
        links: [
          {
            to: '/data-democratization',
            icon: 'solutions__data-democratization.svg',
            label: 'Data democratization',
          },
          {
            to: '/infrastructure-modernization',
            icon: 'solutions__infrastructure-modernization.svg',
            label: 'Infrastructure modernization',
          },
          { to: '', icon: 'solutions__embedded.svg', label: 'Embedded' },
          {
            to: '',
            icon: 'solutions__data-readiness-for-ai.svg',
            label: 'Data readiness for AI',
          },
        ],
      },
      {
        title: 'For Analytics',
        links: [
          { to: '', icon: 'solutions__marketing.svg', label: 'Marketing' },
          { to: '', icon: 'solutions__finance.svg', label: 'Finance' },
          {
            to: '',
            icon: 'solutions__sales-and-support.svg',
            label: 'Sales and support',
          },
        ],
      },
      {
        title: 'For Industry',
        links: [
          { to: '', icon: 'solutions__retail+cpg.svg', label: 'Retail + CPG' },
          {
            to: '',
            icon: 'solutions__financial-services.svg',
            label: 'Financial services',
          },
          {
            to: '',
            icon: 'solutions__manufacturing.svg',
            label: 'Manufacturing',
          },
        ],
      },
      {
        title: 'For Teams',
        links: [
          {
            to: '',
            icon: 'solutions__data-science.svg',
            label: 'Data science',
          },
          {
            to: '',
            icon: 'solutions__data-engineering.svg',
            label: 'Data engineering',
          },
        ],
      },
      {
        title: 'Partner Technology',
        links: [
          {
            to: '',
            icon: 'solutions__amazon-web-services.svg',
            label: 'Amazon Web Services',
          },
          { to: '', icon: 'solutions__databricks.svg', label: 'Databricks' },
          {
            to: '',
            icon: 'solutions__google-bigquery.svg',
            label: 'Google BigQuery',
          },
          {
            to: '',
            icon: 'solutions__microsoft-azure.svg',
            label: 'Microsoft Azure',
          },
          { to: '', icon: 'solutions__snowflake.svg', label: 'Snowflake' },
        ],
      },
    ],
  },
  pricing: {
    label: 'Pricing',
    sections: [
      {
        title: '',
        links: [
          {
            to: '/pricing',
            icon: 'pricing__overview.svg',
            label: 'Overview',
          },
          {
            to: '',
            icon: 'pricing__free-plan.svg',
            label: 'Free plan',
          },
          {
            to: '',
            icon: 'pricing__all-features.svg',
            label: 'All features',
          },
        ],
      },
    ],
  },
  resources: {
    label: 'Resources',
    sections: [
      {
        title: 'Education',
        links: [
          {
            to: '',
            icon: 'resources__blog.svg',
            label: 'Blog',
          },
          {
            to: '',
            icon: 'resources__case-studies.svg',
            label: 'Case studies',
          },
          {
            to: '',
            icon: 'resources__resource-center.svg',
            label: 'Resource center',
          },
          {
            to: '',
            icon: 'resources__documentation.svg',
            label: 'Documentation',
          },
        ],
      },
      {
        title: 'Connect',
        links: [
          {
            to: '',
            icon: 'resources__events.svg',
            label: 'Events',
          },
          {
            to: '',
            icon: 'resources__news.svg',
            label: 'News',
          },
        ],
      },
      {
        title: 'Support',
        links: [
          {
            to: '',
            icon: 'resources__professional-services.svg',
            label: 'Professional Services',
          },
          {
            to: '',
            icon: 'resources__partners.svg',
            label: 'Partners',
          },
          {
            to: '',
            icon: 'resources__changelog.svg',
            label: 'Changelog',
          },
          {
            to: '',
            icon: 'resources__status.svg',
            label: 'Status',
          },
        ],
      },
      {
        title: 'Developers',
        links: [
          {
            to: '',
            icon: 'resources__full-api-reference.svg',
            label: 'Full API Reference',
          },
        ],
      },
    ],
  },
};

export default navData;
