
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Globe, Share2, DollarSign, Video, Paintbrush, Users } from 'lucide-react';

const serviceData = {
  'web-development': {
    title: 'Web Development',
    icon: <Globe className="h-10 w-10" />,
    description: 'Custom websites designed for performance and conversion with SEO optimization.',
    longDescription: 'Our web development services focus on creating websites that not only look beautiful but also drive business results. We combine cutting-edge design with technical expertise to build sites that convert visitors into customers. Every website we create is fully responsive, optimized for search engines, and built to provide an exceptional user experience.',
    features: [
      'Custom responsive website design',
      'E-commerce development',
      'CMS integration (WordPress, Shopify, etc.)',
      'SEO-optimized architecture',
      'Performance optimization',
      'Ongoing maintenance and support'
    ],
    benefits: [
      'Increased conversion rates',
      'Improved user engagement',
      'Enhanced brand credibility',
      'Better search engine rankings',
      'Reduced bounce rates',
      'Mobile-friendly experience'
    ],
    process: [
      { title: 'Discovery', description: 'We start by understanding your business goals, target audience, and specific requirements.' },
      { title: 'Planning', description: 'Our team develops a detailed plan including site structure, content strategy, and technical specifications.' },
      { title: 'Design', description: 'We create visual mockups of key pages for your approval before moving to development.' },
      { title: 'Development', description: 'Our developers build your website with clean, efficient code and integrate all necessary functionality.' },
      { title: 'Testing', description: 'We rigorously test your website across devices and browsers to ensure flawless performance.' },
      { title: 'Launch', description: 'After your approval, we deploy your website and ensure everything is working correctly.' }
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    caseStudies: [
      {
        client: 'TechStart Inc.',
        challenge: 'Outdated website with poor conversion rates and mobile experience.',
        solution: 'Redesigned responsive website with optimized user journey and clear CTAs.',
        result: '156% increase in leads and 43% improvement in mobile engagement.'
      },
      {
        client: 'EcoGoods',
        challenge: 'New e-commerce business needing a complete online store.',
        solution: 'Custom Shopify development with unique product showcase features.',
        result: '$125,000 in sales within the first three months after launch.'
      }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    icon: <Share2 className="h-10 w-10" />,
    description: 'Strategic social media campaigns that engage your audience and boost brand awareness.',
    longDescription: 'Our social media marketing services help businesses build meaningful connections with their audience across platforms. We develop content strategies that align with your brand voice and business goals, creating engaging posts that drive interaction and conversions. Our AI-enhanced approach ensures we target the right audience with optimized content at the ideal times.',
    features: [
      'Platform-specific strategy development',
      'Content creation and calendar planning',
      'Community management',
      'Paid social media advertising',
      'Performance analytics and reporting',
      'Influencer partnership coordination'
    ],
    benefits: [
      'Increased brand awareness',
      'Stronger customer relationships',
      'Higher website traffic',
      'Improved customer service',
      'Enhanced brand loyalty',
      'Valuable audience insights'
    ],
    process: [
      { title: 'Audit', description: 'We evaluate your current social media presence and identify opportunities for improvement.' },
      { title: 'Strategy', description: 'Our team develops a comprehensive social media strategy tailored to your business goals.' },
      { title: 'Content Creation', description: 'We create engaging content that resonates with your target audience.' },
      { title: 'Community Building', description: 'We actively engage with your audience to foster a thriving community around your brand.' },
      { title: 'Advertising', description: 'Strategic paid campaigns amplify your message to reach new potential customers.' },
      { title: 'Analysis', description: 'We continuously monitor performance and optimize strategy based on data.' }
    ],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    caseStudies: [
      {
        client: 'Urban Cafe',
        challenge: 'Low social media engagement and minimal brand recognition.',
        solution: 'Developed content strategy focusing on behind-the-scenes content and local community engagement.',
        result: '300% increase in engagement and 5,000 new followers in 3 months.'
      },
      {
        client: 'FitLife Apparel',
        challenge: 'New fitness brand struggling to build audience in competitive market.',
        solution: 'Created ambassador program and user-generated content campaign.',
        result: 'Reached 25,000 followers and generated $80,000 in direct social sales.'
      }
    ]
  },
  'ppc-ads': {
    title: 'PPC Ads',
    icon: <DollarSign className="h-10 w-10" />,
    description: 'Data-driven PPC campaigns optimized for maximum ROI and lead generation.',
    longDescription: 'Our PPC advertising services focus on creating highly targeted campaigns that maximize your return on ad spend. We combine detailed keyword research, compelling ad copy, and strategic bidding to ensure your ads reach the right audience at the right time. Our AI-powered optimization continuously improves performance, reducing costs while increasing conversions.',
    features: [
      'Google Ads and Microsoft Advertising management',
      'Keyword research and selection',
      'Ad copywriting and testing',
      'Landing page optimization',
      'Budget management and bid strategy',
      'Conversion tracking and ROI analysis'
    ],
    benefits: [
      'Immediate visibility in search results',
      'Highly targeted traffic',
      'Measurable ROI',
      'Flexible budgeting',
      'Quick testing and iteration',
      'Scalable lead generation'
    ],
    process: [
      { title: 'Research', description: 'We conduct thorough keyword and competitor research to identify opportunities.' },
      { title: 'Campaign Setup', description: 'We build optimized account structure with targeted ad groups and keywords.' },
      { title: 'Creative Development', description: 'Our team creates compelling ad copy and extensions that drive clicks.' },
      { title: 'Landing Page Optimization', description: 'We ensure your landing pages are designed to convert PPC traffic effectively.' },
      { title: 'Launch & Monitor', description: 'We closely monitor campaign performance from the moment it goes live.' },
      { title: 'Optimization', description: 'Continuous refinement based on performance data to improve results over time.' }
    ],
    image: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    caseStudies: [
      {
        client: 'LegalPartners LLC',
        challenge: 'High cost per lead and low quality leads from existing PPC campaigns.',
        solution: 'Restructured campaigns with focused keywords and improved qualifying language.',
        result: '47% reduction in cost per lead and 80% increase in lead quality.'
      },
      {
        client: 'HomeServices Pro',
        challenge: 'New service business needing to generate appointments quickly.',
        solution: 'Local service ads and targeted search campaigns with call extensions.',
        result: '60+ qualified appointments in the first month at $42 cost per acquisition.'
      }
    ]
  },
  'video-editing': {
    title: 'Video Editing',
    icon: <Video className="h-10 w-10" />,
    description: 'Professional video editing services that tell your brand story with impact.',
    longDescription: 'Our video editing services transform raw footage into polished, professional content that captivates your audience. We use cutting-edge editing techniques and tools to create videos that align with your brand and marketing objectives. From short social media clips to comprehensive brand stories, we ensure your video content stands out and delivers your message effectively.',
    features: [
      'Brand video production',
      'Social media video content',
      'Product demonstrations',
      'Testimonial videos',
      'Animation and motion graphics',
      'Video optimization for different platforms'
    ],
    benefits: [
      'Higher engagement rates',
      'Improved information retention',
      'Enhanced brand storytelling',
      'Increased social sharing',
      'Better conversion rates',
      'Versatile content for multiple channels'
    ],
    process: [
      { title: 'Concept Development', description: 'We work with you to define the goals and creative direction for your video.' },
      { title: 'Storyboarding', description: 'We create a visual outline of your video to ensure it tells a cohesive story.' },
      { title: 'Editing', description: 'Our editors assemble footage, add effects, and create a polished preliminary edit.' },
      { title: 'Audio Enhancement', description: 'We add music, sound effects, and ensure clear audio throughout.' },
      { title: 'Graphics Integration', description: 'We incorporate motion graphics, titles, and your branding elements.' },
      { title: 'Final Delivery', description: 'After revisions and approval, we deliver your video in optimal formats for your channels.' }
    ],
    image: 'https://images.unsplash.com/photo-1574717024892-a569ca586146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    caseStudies: [
      {
        client: 'NatureBlend Skincare',
        challenge: 'Needed to showcase product benefits in an engaging way.',
        solution: 'Created series of before/after videos and lifestyle content.',
        result: '220% increase in product page conversions after adding videos.'
      },
      {
        client: 'TechConference 2023',
        challenge: 'Virtual event needing professional video production.',
        solution: 'Full editing package for 12 speaker presentations with graphics and transitions.',
        result: 'Over 50,000 views and 95% positive feedback from attendees.'
      }
    ]
  },
  'graphic-design': {
    title: 'Graphic Design',
    icon: <Paintbrush className="h-10 w-10" />,
    description: 'Eye-catching visuals and branding that make your business stand out.',
    longDescription: "Our graphic design services create visual elements that communicate your brand's identity and message effectively. From logos and brand identity systems to marketing materials and digital assets, we develop designs that resonate with your target audience. Our team combines artistic creativity with strategic thinking to ensure every design serves your business objectives while maintaining visual appeal.",
    features: [
      'Logo design and brand identity',
      'Marketing materials and sales collateral',
      'Social media graphics',
      'Packaging design',
      'Infographics and data visualization',
      'Print and digital advertisement design'
    ],
    benefits: [
      'Consistent brand presentation',
      'Enhanced brand recognition',
      'Clear visual communication',
      'Professional market positioning',
      'Improved audience engagement',
      'Versatile design assets'
    ],
    process: [
      { title: 'Discovery', description: 'We learn about your brand, audience, and design needs.' },
      { title: 'Concept Development', description: 'Our designers create initial concepts based on research and objectives.' },
      { title: 'Refinement', description: 'We refine selected concepts based on your feedback.' },
      { title: 'Finalization', description: 'We perfect the details and prepare final designs.' },
      { title: 'Asset Delivery', description: 'We provide your designs in all necessary formats with usage guidelines.' },
      { title: 'Support', description: 'Ongoing assistance with implementation and additional design needs.' }
    ],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    caseStudies: [
      {
        client: 'Fresh Start Juices',
        challenge: 'Outdated branding not appealing to health-conscious millennials.',
        solution: 'Complete brand refresh including logo, packaging, and marketing materials.',
        result: '35% increase in sales and successful expansion to 3 new retail chains.'
      },
      {
        client: 'TechSolutions Inc.',
        challenge: 'Complex service offerings difficult to explain to prospects.',
        solution: 'Series of infographics and visual explainers for sales process.',
        result: '28% improvement in prospect understanding and 15% higher close rate.'
      }
    ]
  },
  'influencer-marketing': {
    title: 'Influencer Marketing',
    icon: <Users className="h-10 w-10" />,
    description: 'Strategic partnerships with influencers that expand your reach and credibility.',
    longDescription: "Our influencer marketing services connect your brand with the right content creators to authentically reach your target audience. We identify influencers whose followers align with your ideal customers, then develop campaigns that integrate your brand naturally into their content. Our focus is on building genuine relationships that deliver measurable results beyond simple exposure.",
    features: [
      'Influencer identification and vetting',
      'Campaign strategy development',
      'Relationship management',
      'Content collaboration and approval',
      'Performance tracking',
      'ROI measurement and analysis'
    ],
    benefits: [
      'Access to established audiences',
      'Authentic brand recommendations',
      'Increased trust and credibility',
      'Fresh creative perspectives',
      'Enhanced content strategy',
      'Targeted reach to ideal customers'
    ],
    process: [
      { title: 'Goal Setting', description: 'We establish clear objectives and KPIs for your influencer campaigns.' },
      { title: 'Influencer Research', description: 'We identify and vet influencers whose audiences match your target market.' },
      { title: 'Strategy Development', description: 'We create a campaign approach that aligns with your brand and the influencer\'s style.' },
      { title: 'Outreach & Negotiation', description: 'We handle all communication and contract negotiations with influencers.' },
      { title: 'Campaign Management', description: 'We oversee content creation, approvals, and publication schedules.' },
      { title: 'Analysis & Reporting', description: 'We provide detailed performance reports and insights for future optimization.' }
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    caseStudies: [
      {
        client: 'ActiveLife Fitness App',
        challenge: 'New app struggling to gain users in crowded fitness market.',
        solution: 'Partnerships with 15 mid-tier fitness influencers for authentic app demonstrations.',
        result: '25,000 new downloads and 40% lower customer acquisition cost than paid ads.'
      },
      {
        client: 'GourmetBox Subscription',
        challenge: 'Needed to expand beyond early adopter customer base.',
        solution: 'Influencer unboxing campaign with foodie content creators.',
        result: '300% increase in subscription sign-ups during campaign period.'
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="heading-lg mb-6">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <div className="inline-flex items-center justify-center bg-black text-white p-4 rounded-lg mb-6">
              {service.icon}
            </div>
            <h1 className="heading-xl mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-animation">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Overview</span>
              <h2 className="heading-lg mb-6">How Our {service.title} Service Works</h2>
              <p className="text-lg text-gray-600 mb-6">{service.longDescription}</p>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-black mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-animation" style={{ animationDelay: '0.2s' }}>
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-lg shadow-xl w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-white pb-1">Our Process</span>
            <h2 className="heading-lg mb-6">How We Deliver {service.title}</h2>
            <p className="text-lg text-gray-300">
              Our systematic approach ensures exceptional results for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="border border-gray-800 rounded-lg p-6 reveal-animation"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-white text-black rounded-full h-10 w-10 flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Benefits</span>
            <h2 className="heading-lg mb-6">Why Choose Our {service.title} Service</h2>
            <p className="text-lg text-gray-600">
              Our approach delivers tangible advantages for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg flex items-start reveal-animation"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Success Stories</span>
            <h2 className="heading-lg mb-6">Client Case Studies</h2>
            <p className="text-lg text-gray-600">
              Real results we've achieved for businesses like yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-8 reveal-animation"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <h3 className="text-xl font-semibold mb-4">{caseStudy.client}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-medium text-gray-800">Challenge:</p>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Solution:</p>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Result:</p>
                    <p className="text-gray-600">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center reveal-animation">
            <h2 className="heading-lg mb-6">Ready to Transform Your {service.title}?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our {service.title.toLowerCase()} services can help your business grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/services">
                  Explore Other Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
