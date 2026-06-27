const siteContent = {
  company: {
    name: 'Cosmic Talent Bridge',
    shortName: 'CTB',
    legalName: 'Cosmic Talent Bridge',
    tagline: 'Connecting Global Talent with Global Opportunities and Professional Training',
    industry: 'Staffing and Recruiting',
    location: 'Lahore, Punjab, Pakistan',
    size: '2-10 employees',
    siteUrl: 'https://www.cosmictalentbridge.com',
    email: 'hello@cosmictalentbridge.com',
    phone: '+92-300-0000000',
    testimonials: [
      {
        name: 'John Smith',
        company: 'Tech Startup Inc',
        role: 'Hiring Manager',
        image: '/images/testimonial-1.jpg',
        text: 'Cosmic Talent Bridge found us the perfect Senior Developer in just 2 weeks!'
      },
      {
        name: 'Sarah Johnson',
        company: 'Finance Corp',
        role: 'HR Director',
        image: '/images/testimonial-2.jpg',
        text: 'Professional, fast, and reliable. Their training programs saved us months of onboarding.'
      },
      {
        name: 'Ahmed Khan',
        company: 'Global Services Ltd',
        role: 'Founder',
        image: '/images/testimonial-3.jpg',
        text: 'Best recruitment experience. They truly understand international hiring requirements.'
      }
    ]
  },
  navigation: [
    { label: 'Services', href: '#services' },
    { label: 'Specializations', href: '#specializations' },
    { label: 'Insights', href: '#insights' },
    { label: 'Training', href: '#training' },
    { label: 'Contact', href: '#contact' }
  ],
  hero: {
    title: 'Anything is possible',
    titleBold: true,
    subtitle: 'when the right talent meets the right opportunity.',
    subtitleBold: ['talent', 'opportunity'],
    description: 'Cosmic Talent Bridge connects employers with skilled professionals and prepares candidates for global teams through practical training and placement support.',
    primaryCta: { label: 'Find a Job', href: '#contact' },
    secondaryCta: { label: 'Find a Talent', href: '#specializations' },
    tertiaryCta: { label: 'Services', href: '#services' },
    backgroundImages: [
      '/images/hero-1.jpg',
      '/images/hero-2.jpg',
      '/images/hero-3.jpg',
      '/images/hero-4.jpg'
    ]
  },
  stats: [
    { value: '5000+', label: 'Placements Made' },
    { value: '500+', label: 'Companies Served' },
    { value: '50+', label: 'Countries Reached' }
  ],
  services: [
    {
      title: 'Permanent Placement',
      description: 'Full-time hires with comprehensive screening and cultural fit assessment.',
      image: '/images/service-permanent.jpg'
    },
    {
      title: 'Contract & Temporary Staffing',
      description: 'Flexible workforce solutions for project-based and seasonal needs.',
      image: '/images/service-contract.jpg'
    },
    {
      title: 'Executive Placement',
      description: 'Senior leadership recruitment for C-suite and director-level roles.',
      image: '/images/service-executive.jpg'
    },
    {
      title: 'Professional Training Programs',
      description: 'Upskill your workforce with our specialized professional development.',
      image: '/images/service-training.jpg'
    },
    {
      title: 'Consulting & Advisory',
      description: 'Strategic guidance on hiring, organizational structure, and talent management.',
      image: '/images/service-consulting.jpg'
    },
    {
      title: 'Onboarding & Integration',
      description: '30-day support ensuring new hires succeed in their roles.',
      image: '/images/service-onboarding.jpg'
    }
  ],
  specializations: [
    { name: 'Finance & Accounting', icon: '💰' },
    { name: 'Technology & IT', icon: '💻' },
    { name: 'Marketing & Creative', icon: '🎨' },
    { name: 'Legal & Compliance', icon: '⚖️' },
    { name: 'Administrative Support', icon: '📋' },
    { name: 'Customer Service', icon: '🎧' },
    { name: 'Operations & Supply Chain', icon: '📦' }
  ],
  insights: [
    {
      title: '2026 Salary Guide',
      description: 'Compensation benchmarks and planning signals for employers and candidates.'
    },
    {
      title: 'Demand for Skilled Talent',
      description: 'Hiring trend outlook focused on critical skills and role velocity.'
    },
    {
      title: 'AI in Recruitment',
      description: 'Human-first use of AI screening and matching practices for faster decisions.'
    }
  ],
  trainingPrograms: [
    'Professional environment adaptation',
    'Communication standards',
    'Workplace culture',
    'Language requirements'
  ],
  process: [
    'Define role outcomes and culture fit',
    'Build a targeted candidate pipeline',
    'Evaluate through practical screening',
    'Coordinate onboarding and first-month support'
  ]
}

export default siteContent
