// Project data for portfolio
// Helper function to get correct asset path based on environment
const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  const fullPath = `${base}${path}`.replace(/\/+/g, '/');
  return fullPath;
};

export const projectsData = [
  {
    id: 1,
    slug: 'velvet-melt-chocolate-brand',
    title: 'Velvet Melt – Chocolate Brand Design',
    category: 'branding',
    featured: true,
    thumbnail: getAssetPath('assets/projects/velvet-melt/velvet-melt-main.png'),
    shortDescription: 'Complete brand identity and marketing collateral for a premium chocolate brand.',
    fullDescription: `Velvet Melt is crafted for those who believe chocolate is more than just a sweet treat — it's an experience. Smooth, rich, and irresistibly creamy, every bite melts effortlessly, leaving behind a deep, indulgent flavor that lingers.

Made with carefully selected cocoa and the finest ingredients, Velvet Melt delivers a silky texture and balanced sweetness that feels comforting yet luxurious. Whether it's a self-love moment, a gift for someone special, or a midnight craving, Velvet Melt turns ordinary moments into something unforgettable.

Velvet Melt – Soft. Smooth. Simply Irresistible.`,
    role: 'Brand Designer & Content Strategist',
    duration: '3 weeks',
    client: 'Velvet Melt',
    deliverables: [
      'Brand Logo Design',
      'Social Media Content',
      'Packaging Design',
      'Marketing Collateral',
      'Website Design',
      'Print Advertisements'
    ],
    images: [
      getAssetPath('assets/projects/velvet-melt/velvet-melt-main.png'),
      getAssetPath('assets/projects/velvet-melt/brand-logo.png'),
      getAssetPath('assets/projects/velvet-melt/velvet-melt-2.png'),
      getAssetPath('assets/projects/velvet-melt/velvet-melt-3.png'),
      getAssetPath('assets/projects/velvet-melt/standy-chocolate.png'),
      getAssetPath('assets/projects/velvet-melt/instagram-post-1.png'),
      getAssetPath('assets/projects/velvet-melt/instagram-story-1.png'),
      getAssetPath('assets/projects/velvet-melt/instagram-story-2.png'),
      getAssetPath('assets/projects/velvet-melt/food-flyer.png'),
      getAssetPath('assets/projects/velvet-melt/half-page-ad-1.png'),
      getAssetPath('assets/projects/velvet-melt/half-page-ad-2.png'),
      getAssetPath('assets/projects/velvet-melt/pamphlet.png'),
      getAssetPath('assets/projects/velvet-melt/web-page.png'),
      getAssetPath('assets/projects/velvet-melt/letterhead.png'),
      getAssetPath('assets/projects/velvet-melt/business-envelope.png'),
      getAssetPath('assets/projects/velvet-melt/merchandise.png')
    ],
    stats: {
      reach: '2.5M+',
      engagement: '18.5%',
      brandAwareness: '+75%'
    },
    tags: ['Branding', 'Graphic Design', 'Social Media', 'Packaging']
  },
  {
    id: 2,
    slug: 'chuski-soda-brand',
    title: 'Chuski – Soda Brand Products',
    category: 'product-design',
    featured: true,
    thumbnail: getAssetPath('assets/projects/chuski/chuski-main.jpg'),
    shortDescription: 'Product design and branding for a vibrant soda brand targeting youth.',
    fullDescription: `Chuski is the soda that brings instant masti with every sip. Bursting with bold fizz and exciting flavors, it delivers the same mazedaar taste every single time.

Whether it's a hot summer afternoon, friends' hangout, college break, or family get-together — Chuski makes every moment more refreshing and more fun. Its vibrant taste, strong fizz, and affordable vibe make it the perfect drink for those who love flavor without compromise.

One bottle. Full masti.
Chuski – Mazedaar Swad Har Baar.`,
    role: 'Product Designer & Brand Strategist',
    duration: '4 weeks',
    client: 'Chuski',
    deliverables: [
      'Product Packaging Design',
      'Brand Identity',
      'Marketing Content',
      'Video Content'
    ],
    images: [
      getAssetPath('assets/projects/chuski/chuski-main.jpg'),
      getAssetPath('assets/projects/chuski/chuski-product.png')
    ],
    video: getAssetPath('assets/projects/chuski/chuski-video.mov'),
    stats: {
      products: '3+',
      campaigns: '5',
      socialReach: '1.8M+'
    },
    tags: ['Product Design', 'Branding', 'Video Content', 'Marketing']
  },
  {
    id: 3,
    slug: 'thumbs-up-pitch-deck',
    title: 'Thums Up – Marketing Pitch Deck',
    category: 'presentation',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
    shortDescription: 'Strategic marketing pitch deck for iconic cola brand Thums Up.',
    fullDescription: `A comprehensive marketing pitch deck created for Thums Up, India's iconic cola brand. This presentation showcases strategic marketing initiatives, brand positioning, target audience analysis, and innovative campaign ideas designed to strengthen Thums Up's market presence and connect with the new generation while maintaining its bold legacy.

The deck includes market research, competitive analysis, creative concepts, and implementation roadmaps for multi-channel marketing campaigns.`,
    role: 'Marketing Strategist & Presentation Designer',
    duration: '2 weeks',
    client: 'Thums Up',
    deliverables: [
      'Strategic Pitch Deck',
      'Market Analysis',
      'Campaign Concepts',
      'Brand Strategy'
    ],
    images: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80'
    ],
    pdfFile: getAssetPath('assets/projects/thumbs-up/THUMBS UP PITCH DECK.pdf'),
    stats: {
      slides: '25+',
      strategies: '8',
      campaigns: '4'
    },
    tags: ['Marketing Strategy', 'Pitch Deck', 'Brand Strategy', 'Presentations']
  },
  {
    id: 4,
    slug: 'social-media-campaign-sample',
    title: 'Viral Social Media Campaign',
    category: 'social-media',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
    shortDescription: 'Multi-platform social media campaign that generated 5M+ impressions.',
    fullDescription: `A high-impact social media campaign designed to create viral engagement across Instagram, Facebook, and TikTok. The campaign utilized trending audio, creative storytelling, and strategic posting schedules to maximize reach and engagement.

The content strategy focused on authentic brand storytelling, user-generated content integration, and community building. Through careful analysis of platform algorithms and audience behavior, the campaign achieved exceptional organic reach without paid promotion.`,
    role: 'Social Media Manager & Content Creator',
    duration: '6 weeks',
    client: 'Fashion E-commerce Brand',
    deliverables: [
      'Content Strategy',
      'Instagram Reels (30+)',
      'TikTok Videos (25+)',
      'Story Templates',
      'Caption Copy',
      'Hashtag Strategy'
    ],
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
      'https://images.unsplash.com/photo-1611162616305-c69b3037c7f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
    ],
    stats: {
      reach: '5.2M+',
      engagement: '22.8%',
      followers: '+85K'
    },
    tags: ['Social Media', 'Content Creation', 'Instagram', 'Viral Marketing']
  }
];

// Filter functions
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const getAllCategories = () => {
  const categories = new Set(projectsData.map(p => p.category));
  return ['all', ...Array.from(categories)];
};
