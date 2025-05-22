
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Globe, Share2, DollarSign, Video, Paintbrush, Users, CheckCircle, Award, Star } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: <Globe className="h-10 w-10" />,
    description: 'Custom websites designed for performance and conversion with SEO optimization.',
    features: [
      'Custom responsive website design',
      'E-commerce development',
      'CMS integration (WordPress, Shopify, etc.)',
      'SEO-optimized architecture',
      'Performance optimization',
      'Ongoing maintenance and support'
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    icon: <Share2 className="h-10 w-10" />,
    description: 'Strategic social media campaigns that engage your audience and boost brand awareness.',
    features: [
      'Platform-specific strategy development',
      'Content creation and calendar planning',
      'Community management',
      'Paid social media advertising',
      'Performance analytics and reporting',
      'Influencer partnership coordination'
    ],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'ppc-ads',
    title: 'PPC Ads',
    icon: <DollarSign className="h-10 w-10" />,
    description: 'Data-driven PPC campaigns optimized for maximum ROI and lead generation.',
    features: [
      'Google Ads and Microsoft Advertising management',
      'Keyword research and selection',
      'Ad copywriting and testing',
      'Landing page optimization',
      'Budget management and bid strategy',
      'Conversion tracking and ROI analysis'
    ],
    image: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    icon: <Video className="h-10 w-10" />,
    description: 'Professional video editing services that tell your brand story with impact.',
    features: [
      'Brand video production',
      'Social media video content',
      'Product demonstrations',
      'Testimonial videos',
      'Animation and motion graphics',
      'Video optimization for different platforms'
    ],
    image: 'https://images.unsplash.com/photo-1574717024892-a569ca586146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: <Paintbrush className="h-10 w-10" />,
    description: 'Eye-catching visuals and branding that make your business stand out.',
    features: [
      'Logo design and brand identity',
      'Marketing materials and sales collateral',
      'Social media graphics',
      'Packaging design',
      'Infographics and data visualization',
      'Print and digital advertisement design'
    ],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    icon: <Users className="h-10 w-10" />,
    description: 'Strategic partnerships with influencers that expand your reach and credibility.',
    features: [
      'Influencer identification and vetting',
      'Campaign strategy development',
      'Relationship management',
      'Content collaboration and approval',
      'Performance tracking',
      'ROI measurement and analysis'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('web-development');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Our Services</span>
            <h1 className="heading-xl mb-6">Comprehensive Digital Marketing Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">
              From web development to influencer marketing, we offer a full spectrum of AI-enhanced digital services designed to help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <ScrollArea className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 min-w-max">
                {services.map((service) => (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id}
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-black data-[state=active]:text-white"
                  >
                    {service.icon}
                    <span className="text-sm whitespace-nowrap">{service.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
            
            {services.map((service) => (
              <TabsContent 
                key={service.id} 
                value={service.id}
                className="animate-fade-in"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="heading-lg mb-6">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild>
                      <Link to={`/services/${service.id}`}>
                        Learn more about {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-lg shadow-xl w-full h-auto" 
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <Button variant="secondary" asChild>
                        <Link to={`/services/${service.id}`}>
                          See Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Results Section - New */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Our Impact</span>
            <h2 className="heading-lg mb-6">Measurable Results Through Data-Driven Strategies</h2>
            <p className="text-lg text-gray-600">
              We don't just deliver services; we deliver results. Our data-driven approach ensures every strategy is optimized for maximum impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-animation">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-black text-white p-3 rounded-full inline-flex mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">156%</h3>
              <p className="text-gray-600">Average increase in conversion rates for our clients</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-black text-white p-3 rounded-full inline-flex mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">42%</h3>
              <p className="text-gray-600">Reduction in cost per acquisition through optimized campaigns</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-black text-white p-3 rounded-full inline-flex mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">3.2x</h3>
              <p className="text-gray-600">Average ROI for clients' marketing investments</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-black text-white p-3 rounded-full inline-flex mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">94%</h3>
              <p className="text-gray-600">Client retention rate due to consistent performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal-animation">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-white pb-1">Our Process</span>
              <h2 className="heading-lg mb-6">How We Deliver Results</h2>
              <p className="text-gray-300 mb-8">
                Our structured approach combines AI-driven insights with human creativity to deliver exceptional results for every project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white text-black rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discovery & Strategy</h3>
                    <p className="text-gray-400">We analyze your business, competitors, and target audience to develop a tailored strategy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white text-black rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Creative Development</h3>
                    <p className="text-gray-400">Our team creates the assets needed to execute your strategy, from websites to ad creatives.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white text-black rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                    <p className="text-gray-400">We launch your campaigns across selected channels, ensuring everything works perfectly.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white text-black rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Optimization & Scaling</h3>
                    <p className="text-gray-400">We continuously monitor and improve performance, scaling successful elements of your strategy.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal-animation" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                alt="Our process" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">FAQ</span>
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-animation">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How long does it take to see results?</h3>
              <p className="text-gray-600">
                While initial improvements can be seen within weeks, significant results typically start appearing in 2-3 months. 
                Our focus is on sustainable growth rather than quick wins that don't last.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Do you offer packages for small businesses?</h3>
              <p className="text-gray-600">
                Yes! We have tailored solutions for businesses of all sizes. Our small business packages 
                focus on high-impact strategies that deliver maximum ROI within your budget constraints.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How do you measure success?</h3>
              <p className="text-gray-600">
                We establish clear KPIs at the beginning of our engagement, which may include traffic growth, 
                conversion rates, cost per acquisition, or revenue increases, depending on your goals.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">What makes you different from other agencies?</h3>
              <p className="text-gray-600">
                Our AI-driven approach combines data analytics with human creativity for more effective strategies. 
                We also focus on educating clients and building long-term partnerships rather than just service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center reveal-animation">
            <h2 className="heading-lg mb-6">Ready to Elevate Your Digital Presence?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how our services can help your business grow.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
