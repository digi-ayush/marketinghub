
import Layout from '@/components/layout/Layout';
import { ArrowRight, CheckCircle, Users, Award, Target } from 'lucide-react';
import ayush from "../team/ayush1.jpeg";
import ansh from "../team/ansh1.jpg";
import diksha from "../team/diksha1.jpg";

import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Ayush Kumar',
    position: 'CEO & Founder',
    image: ayush,
    bio: 'With over 15 years of experience in digital marketing, Alex founded Marketing Hub to bring enterprise-level strategies to small businesses through AI innovation.'
  },
  {
    name: 'Diksha',
    position: 'Creative Director',
    image: diksha,
    bio: 'Jessica leads our creative team with her exceptional design vision and 10+ years of branding experience across multiple industries.'
  },
  {
    name: 'Ansh',
    position: 'AI & Analytics Lead',
    image: ansh,
    bio: 'Daniel combines his data science background with marketing expertise to develop our proprietary AI tools that drive client results.'
  },
  {
    name: 'Emma Wilson',
    position: 'Web Development Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    bio: 'Emma oversees all web development projects, ensuring each site we build meets the highest standards of performance and user experience.'
  },
  {
    name: 'Marcus Johnson',
    position: 'Social Media Strategist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    bio: 'Marcus crafts engaging social media strategies that have helped our clients build thriving online communities and increase brand loyalty.'
  },
  {
    name: 'Olivia Chang',
    position: 'PPC & SEM Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    bio: 'Olivia optimizes our clients\' advertising spend across search and social platforms, consistently delivering above-industry ROI.'
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">About Us</span>
            <h1 className="heading-xl mb-6">We're Transforming Digital Marketing Through AI</h1>
            <p className="text-xl text-gray-600 mb-8">
              Marketing Hub was founded with a clear mission: to make premium digital marketing accessible to startups and small businesses through AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-animation">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Our Story</span>
              <h2 className="heading-lg mb-6">From Startup to Industry Innovation Leader</h2>
              <p className="text-lg text-gray-600 mb-6">
                Marketing Hub was born from a simple observation: small businesses and startups were being priced out of effective digital marketing services, while larger agencies focused on serving enterprise clients.
              </p>
              <p className="text-gray-600 mb-6">
                In 2018, our founder Alex Morgan decided to change this by creating a new kind of agency — one that leverages the power of AI to deliver enterprise-quality strategies at prices accessible to growing businesses.
              </p>
              <p className="text-gray-600">
                Since then, we've grown from a team of 3 to over 30 digital marketing experts, serving more than 200 clients across diverse industries. Our proprietary AI marketing tools have revolutionized how we approach strategy development, allowing us to deliver data-driven results that consistently outperform traditional marketing approaches.
              </p>
            </div>
            <div className="relative reveal-animation" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                alt="Marketing Hub founding team" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 rounded-lg shadow-lg md:flex items-center space-x-4 hidden">
                <div className="text-3xl font-bold">2018</div>
                <div className="text-sm">Year Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-800 rounded-lg reveal-animation">
              <div className="flex items-center mb-6">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-300">
                To democratize access to premium digital marketing by harnessing AI technology, enabling startups and small businesses to compete effectively in the digital landscape.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-lg reveal-animation" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-gray-300">
                To become the global leader in AI-driven digital marketing, setting new standards for effectiveness, accessibility, and innovation in the industry.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-lg reveal-animation" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-6">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-semibold">Our Values</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Innovation through technology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Data-driven decision making</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Client success as our priority</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Transparency and integrity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Our Team</span>
            <h2 className="heading-lg mb-6">The Experts Behind Marketing Hub</h2>
            <p className="text-lg text-gray-600">
              Our diverse team of marketers, designers, developers, and data scientists brings together decades of experience to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden reveal-animation"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-60 object-cover object-center" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-500 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center reveal-animation">
            <h2 className="heading-lg mb-6">Ready to Work with Our Team?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you achieve your digital marketing goals with our AI-powered approach.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
