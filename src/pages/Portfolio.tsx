
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award, ChevronRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const categories = [
  'All',
  'Web Development',
  'Social Media',
  'PPC Ads',
  'Video Editing',
  'Graphic Design'
];

const projects = [
  {
    id: 1,
    title: 'TechStart Website Redesign',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Complete website redesign with improved UX, resulting in 156% increase in lead generation.'
  },
  {
    id: 2,
    title: 'Urban Cafe Social Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Comprehensive social media strategy increasing engagement by 300% and growing follower base.'
  },
  {
    id: 3,
    title: 'LegalPartners PPC Campaign',
    category: 'PPC Ads',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Targeted PPC ads reducing cost per lead by 47% while improving lead quality.'
  },
  {
    id: 4,
    title: 'NatureBlend Product Videos',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1618329395766-7714cb5a2d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Series of product videos increasing conversion rates by 220% on product pages.'
  },
  {
    id: 5,
    title: 'Fresh Start Juices Rebranding',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1605433175323-83d6e785250f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Complete brand redesign including logo, packaging, and marketing materials.'
  },
  {
    id: 6,
    title: 'EcoGoods E-commerce Site',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Custom Shopify store generating $125,000 in sales within first three months.'
  },
  {
    id: 7,
    title: 'FitLife Apparel Social Strategy',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1475695752828-6d2de6357217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Ambassador program and UGC campaign reaching 25,000 followers and generating $80,000 in sales.'
  },
  {
    id: 8,
    title: 'HomeServices Pro Google Ads',
    category: 'PPC Ads',
    image: 'https://images.unsplash.com/photo-1571116747380-9de3acc25d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Local service ads generating 60+ qualified appointments at $42 cost per acquisition.'
  },
  {
    id: 9,
    title: 'TechConference 2023 Videos',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    description: 'Full editing package for 12 speaker presentations receiving over 50,000 views.'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'All') {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Our Work</span>
            <h1 className="heading-xl mb-6">Portfolio of Digital Excellence</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our successful projects and see how we've helped businesses like yours achieve their digital marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <ScrollArea className="w-full">
            <div className="flex flex-nowrap justify-center gap-4 mb-12 reveal-animation">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="min-w-[120px]"
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group overflow-hidden border border-gray-200 rounded-lg reveal-animation"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <Button variant="secondary">View Project</Button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - New */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Client Success</span>
            <h2 className="heading-lg mb-6">Featured Case Studies</h2>
            <p className="text-lg text-gray-600">
              Dive deeper into how our strategic approach transformed these businesses and delivered exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal-animation">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative">
              <div className="absolute top-6 right-6 bg-black text-white p-2 rounded-full">
                <Star className="h-5 w-5" />
              </div>
              <span className="text-sm text-gray-500 mb-2 block">Web Development + PPC</span>
              <h3 className="text-2xl font-bold mb-4">TechStart Leads Increased by 156%</h3>
              <p className="text-gray-600 mb-6">
                See how we transformed TechStart's digital presence with a new website and targeted PPC campaign that 
                generated a 156% increase in qualified leads within just 3 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Timeline</span>
                  <p className="font-medium">12 Weeks</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">ROI</span>
                  <p className="font-medium">347%</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Industry</span>
                  <p className="font-medium">SaaS / Tech</p>
                </div>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                View Full Case Study <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative">
              <div className="absolute top-6 right-6 bg-black text-white p-2 rounded-full">
                <Award className="h-5 w-5" />
              </div>
              <span className="text-sm text-gray-500 mb-2 block">Social Media + Graphic Design</span>
              <h3 className="text-2xl font-bold mb-4">Urban Cafe's Social Media Transformation</h3>
              <p className="text-gray-600 mb-6">
                Discover how our comprehensive rebrand and social media strategy helped Urban Cafe increase 
                foot traffic by 43% and grow their online following from 2,500 to 25,000 within 6 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Timeline</span>
                  <p className="font-medium">6 Months</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Engagement</span>
                  <p className="font-medium">+300%</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Industry</span>
                  <p className="font-medium">Food & Beverage</p>
                </div>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                View Full Case Study <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - New */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-animation">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-white pb-1">Real Results</span>
              <h2 className="heading-lg mb-6">Measured Success Across All Campaigns</h2>
              <p className="text-gray-300 mb-8">
                We don't just create beautiful work; we deliver measurable business results. Every campaign we run is built 
                around achieving specific goals and KPIs that matter to your business growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-black rounded-md p-2">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Average ROI of 287% across all client campaigns</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white text-black rounded-md p-2">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">41% average increase in conversion rates</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white text-black rounded-md p-2">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">89% client retention rate over 3+ years</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal-animation" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">156%</h3>
                <p className="text-gray-300">Average Increase in Web Traffic</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">42%</h3>
                <p className="text-gray-300">Lower Cost Per Acquisition</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">3.2x</h3>
                <p className="text-gray-300">Social Engagement Growth</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">94%</h3>
                <p className="text-gray-300">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Banner */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto reveal-animation">
            <h2 className="heading-lg mb-6">Our Work Speaks For Itself</h2>
            <p className="text-xl text-gray-600 mb-8 italic">
              "Marketing Hub completely transformed our digital presence. Their AI-driven approach increased our conversion rate by 65% in just three months."
            </p>
            <p className="font-medium">Sarah Johnson, CEO of TechStart Inc.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center reveal-animation">
            <h2 className="heading-lg mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how our digital marketing services can transform your business.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
