
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, BookOpen, Heart } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior Web Developer',
    type: 'Full-time',
    location: 'Remote / New York Office',
    description: 'Looking for an experienced web developer to lead projects and mentor junior team members.',
    requirements: [
      '5+ years of experience with modern web technologies',
      'Proficient in React, Node.js, and TypeScript',
      'Experience with e-commerce platforms',
      'Strong problem-solving and communication skills'
    ]
  },
  {
    title: 'Social Media Specialist',
    type: 'Full-time',
    location: 'Remote',
    description: 'Join our team to develop and implement effective social media strategies for diverse clients.',
    requirements: [
      '3+ years of experience in social media management',
      'Expertise with major social platforms and analytics tools',
      'Experience with content creation and community management',
      'Strong copywriting and communication skills'
    ]
  },
  {
    title: 'PPC Campaign Manager',
    type: 'Full-time',
    location: 'Remote / New York Office',
    description: 'Seeking a data-driven marketer to manage and optimize paid search and social campaigns.',
    requirements: [
      'Google Ads and Meta Ads certification',
      'Experience managing campaigns with $10k+ monthly budgets',
      'Strong analytical and reporting skills',
      'Understanding of conversion rate optimization'
    ]
  },
  {
    title: 'Video Editor / Motion Designer',
    type: 'Contract / Part-time',
    location: 'Remote',
    description: 'Create engaging video content for social media, websites, and advertising campaigns.',
    requirements: [
      'Portfolio demonstrating video editing and motion graphics skills',
      'Proficient with Adobe Premiere Pro and After Effects',
      'Understanding of marketing and brand storytelling',
      'Ability to work within brand guidelines and creative briefs'
    ]
  }
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Careers</span>
            <h1 className="heading-xl mb-6">Join Our Team of Digital Experts</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who are passionate about digital marketing and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-animation">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Why Join Us</span>
              <h2 className="heading-lg mb-6">Be Part of Something Innovative</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Marketing Hub, we're more than just a digital agency. We're a team of innovators, creators, and strategic thinkers dedicated to transforming how businesses approach digital marketing.
              </p>
              <p className="text-gray-600 mb-8">
                We foster a collaborative environment where new ideas are encouraged, professional growth is prioritized, and work-life balance is respected. Join us to work with cutting-edge technologies and contribute to projects that make a real difference for our clients.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>Competitive compensation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>Flexible work arrangements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>Health and wellness benefits</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>Professional development fund</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>Regular team building events</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>Career advancement opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="relative reveal-animation" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                alt="Marketing Hub Team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-white pb-1">Our Values</span>
            <h2 className="heading-lg mb-6">The Principles That Guide Us</h2>
            <p className="text-lg text-gray-300">
              Our values define how we work together and serve our clients. They're at the core of our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-800 rounded-lg reveal-animation">
              <div className="bg-white p-3 rounded-full inline-flex mb-6">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Collaborative Innovation</h3>
              <p className="text-gray-300">
                We believe the best ideas emerge when diverse perspectives come together. We foster an environment where everyone's voice is heard and valued.
              </p>
            </div>
            
            <div className="p-8 border border-gray-800 rounded-lg reveal-animation" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-3 rounded-full inline-flex mb-6">
                <BookOpen className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-gray-300">
                In our rapidly evolving industry, standing still means falling behind. We're committed to ongoing professional development and knowledge sharing.
              </p>
            </div>
            
            <div className="p-8 border border-gray-800 rounded-lg reveal-animation" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white p-3 rounded-full inline-flex mb-6">
                <Heart className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Client Success</h3>
              <p className="text-gray-300">
                We measure our success by our clients' success. We're dedicated to delivering exceptional results that help businesses grow and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Join Our Team</span>
            <h2 className="heading-lg mb-6">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Explore our current job openings and find where your talents can make an impact.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden reveal-animation"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                        <span>{position.type}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <a href="#application">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {position.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="application" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal-animation">
            <h2 className="heading-lg mb-6">Don't See a Perfect Fit?</h2>
            <p className="text-lg text-gray-600">
              We're always interested in connecting with talented professionals. Send us your resume for future opportunities.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg border border-gray-200 shadow-sm reveal-animation" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">General Application</h3>
            
            <div className="text-center mt-6">
              <Button size="lg" asChild>
                <a href="mailto:careers@marketinghub.com">
                  Send Your Resume <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-gray-500 text-sm mt-4">
                Email your resume and cover letter to careers@marketinghub.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
