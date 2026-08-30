module.exports = {
  email: 'me@zmjafary.com',
  resume: '/resume.pdf',

  socialMedia: [
    { name: 'GitHub', url: 'https://github.com/zmjafary' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zmjafary' },
    { name: 'Instagram', url: 'https://www.instagram.com/zmjafary' },
    { name: 'Facebook', url: 'https://www.facebook.com/zmjafary' },
  ],

  navLinks: [
    { name: 'Work', url: '/#work' },
    { name: 'How I work', url: '/#approach' },
    { name: 'Experience', url: '/#experience' },
    { name: 'About', url: '/#about' },
  ],

  stats: [
    { value: '9+', label: 'Years in, and ten on 17 January' },
    { value: '25+', label: 'Projects delivered, start to finish' },
    { value: '10+', label: 'Happy clients, some of them below' },
    { value: '4,000+', label: 'Tours on TourHub, from 200 operators' },
  ],

  capabilities: [
    {
      index: '01',
      title: 'Backend systems',
      body: 'Laravel and PHP. This is where most of my time goes.',
      points: [
        'Portals with roles and permissions, for CRM, HR, customer and trader',
        'APIs and queued jobs',
        'Stripe payments, OAuth, and whatever third party the client is already tied to',
        'Security and performance fixes on systems that are already live',
      ],
    },
    {
      index: '02',
      title: 'Front-end work',
      body: 'Vue 3 with Inertia, and React when a project calls for it.',
      points: [
        'Inertia apps, so there\'s no second API to keep in sync',
        'Components the next developer can pick up without ringing me',
        'Live updates that go out by email and WhatsApp',
        'Interfaces that still work properly on a phone',
      ],
    },
    {
      index: '03',
      title: 'Shopify and AI',
      body: 'White-label Shopify apps, WordPress sites, and OpenAI on top of them.',
      points: [
        'White-label Shopify apps for different clients',
        'Chatbots that handle the order and product questions nobody wants to answer',
        'Multilingual storefronts and more than one way to pay',
        'SEO and conversion work',
      ],
    },
  ],

  approach: [
    {
      index: '01',
      title: 'I build for whoever has it open all day',
      body: 'An inspector standing in a yard, an admin closing a rota, an operator trying to list a tour. They are the ones I picture. When one operator could not get through the form on TourHub, I built an importer that pulls their tours off their own website instead. For one operator. Worth it.',
    },
    {
      index: '02',
      title: 'I don\'t skip the boring parts',
      body: 'Roles and permissions, audit trails, queues, invoices, payment states. None of it is fun and none of it demos well. But it is what decides whether anyone still trusts the thing in year three.',
    },
    {
      index: '03',
      title: 'I fix how things get shipped',
      body: 'Setting up CI/CD with Jenkins, Docker and Kubernetes at SwishTag took our downtime down by about 30%. I would rather spend a week on the pipeline than keep losing hours to deploys that go sideways.',
    },
    {
      index: '04',
      title: 'I make sure I\'m not the only one who knows',
      body: 'I\'ve mentored juniors at YumyApps, Bloomrix and SwishTag. Onboarding got quicker and code quality went up about 15%. Being the only person who understands a system isn\'t job security, it\'s a problem you\'ve made for someone.',
    },
  ],

  jobs: [
    {
      company: 'Contract work',
      range: 'Nov 2024 – Present',
      title: 'Software Engineer',
      points: [
        'It\'s as much consultancy as it is building. Development planning, execution, code reviews, and AI integrations.',
        'Day to day that\'s an Ionic app on a Laravel backend. Writing the APIs, improving their search, and getting the speed up.',
        'DevOps and Docker management, and building out the pipelines.',
      ],
    },
    {
      company: 'TourHub',
      range: 'Nov 2024 – Present',
      title: 'Founder & Owner',
      points: [
        'TourHub puts Pakistan\'s tour packages in one place. Roughly 4,000 trips from 200 operators, with dates and real prices in Rupees side by side.',
        'I built all of it. The crawl and extraction pipeline that writes the catalog, an operator workspace for claiming companies and handling leads, a Filament admin for the review queue, and Meilisearch across the lot.',
        'Just crossed 10,000 unique page views. It\'s a one-man show, running alongside the contract work.',
      ],
    },
    {
      company: 'SwishTag',
      range: 'Sep 2023 – Nov 2024',
      title: 'Senior Laravel Developer',
      points: [
        'Built an AI Shopify chatbot that answers order and product questions. Support tickets dropped by about 20%.',
        'Built white-label Shopify apps for a range of clients, and client retention went up about 25%.',
        'Set up CI/CD with Jenkins, Docker and Kubernetes, which cut downtime by roughly 30%.',
        'Led cross-functional delivery and mentored the juniors. Code quality went up about 15%.',
      ],
    },
    {
      company: 'iCashCars',
      range: 'Dec 2021 – Sep 2023',
      title: 'Full Stack Developer',
      points: [
        'Led the CRM trader portal and the customer portal. Operations came out about 40% more efficient.',
        'Built the HR and Drivers Portal from scratch, which took roughly 25% off the manual work.',
        'Sorted out the SEO and how the site ran, and conversions went up about 20%.',
        'Automated a lot of the operational side and got downtime down by about 35%.',
      ],
    },
    {
      company: 'Bloomrix',
      range: 'Oct 2021 – Dec 2021',
      title: 'Technical Team Lead',
      points: [
        'Led the build of a driving school app for scheduling and booking. Customer satisfaction went up about 15%.',
        'Mentored the junior developers, which took roughly 10% off onboarding and project time.',
        'Worked with stakeholders to keep the technical plan lined up with what the business actually needed.',
      ],
    },
    {
      company: 'YumyApps',
      range: 'Oct 2019 – Oct 2021',
      title: 'Senior Laravel Developer & Team Lead',
      points: [
        'Ran the full revamp of a parental control app. User engagement went up about 35%.',
        'Added more payment methods and multilingual support, which widened the market by about 20%.',
        'Worked on sales strategy, security, and keeping the product consistent.',
      ],
    },
    {
      company: 'Freelance work',
      range: 'Jan 2017 – Oct 2019',
      title: 'Web Developer, part time',
      points: [
        'Internships, part-time jobs, and freelance work on Fiverr and Upwork, all while I was finishing my degree. Graduated in 2019.',
        'Worked with startups at Plan9, the PITB incubator, on technical support and mentoring.',
        'Laravel, React and Vue mostly. This is the stretch where I learned to actually finish things.',
      ],
    },
  ],

  stack: [
    {
      label: 'Languages & frameworks',
      items: ['PHP', 'Laravel', 'Lumen', 'Filament', 'Node.js', 'JavaScript (ES6+)', 'TypeScript'],
    },
    {
      label: 'Front-end & platforms',
      items: ['Vue 3', 'Inertia.js', 'React', 'Ionic', 'Shopify', 'WordPress'],
    },
    {
      label: 'Cloud, data & tooling',
      items: [
        'AWS',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Meilisearch',
        'Algolia',
        'MySQL',
        'Redis',
        'Firebase',
        'Stripe',
        'OpenAI',
        'WhatsApp API',
        'Zapier',
      ],
    },
  ],

  // Consumed by gatsby-config.js for the manifest and image placeholders.
  colors: {
    accent: '#a3e635',
    background: '#121316',
    backgroundDark: '#0d0e10',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
