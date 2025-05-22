
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Share2, DollarSign, Video, Paintbrush, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const serviceItems = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom websites designed for performance and conversion with SEO optimization.',
    link: '/services/web-development'
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns that engage your audience and boost brand awareness.',
    link: '/services/social-media-marketing'
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'PPC Ads',
    description: 'Data-driven PPC campaigns optimized for maximum ROI and lead generation.',
    link: '/services/ppc-ads'
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: 'Video Editing',
    description: 'Professional video editing services that tell your brand story with impact.',
    link: '/services/video-editing'
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: 'Graphic Design',
    description: 'Eye-catching visuals and branding that make your business stand out.',
    link: '/services/graphic-design'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Influencer Marketing',
    description: 'Strategic partnerships with influencers that expand your reach and credibility.',
    link: '/services/influencer-marketing'
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Our Services</span>
          <h2 className="heading-lg mb-6">Comprehensive Digital Solutions for Your Business Growth</h2>
          <p className="text-lg text-gray-600">
            From web development to influencer marketing, we offer a full spectrum of digital marketing services tailored to your unique business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-200 transition-all duration-300 hover:shadow-lg reveal-animation" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader className="pb-4">
                <div className="bg-black text-white p-3 rounded-md inline-flex mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <Link to={service.link}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 reveal-animation">
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
