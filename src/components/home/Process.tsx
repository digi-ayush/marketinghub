
import { ArrowRight } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We begin by understanding your business, analyzing your market position, and identifying opportunities for growth.'
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Our team creates a customized digital strategy leveraging AI insights to maximize your ROI and meet your specific goals.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We execute the strategy across selected channels, creating high-quality content and campaigns optimized for performance.'
  },
  {
    number: '04',
    title: 'Monitoring & Optimization',
    description: 'We continuously track performance metrics, making data-driven adjustments to improve results and maximize success.'
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-white pb-1">Our Process</span>
          <h2 className="heading-lg mb-6">How We Transform Your Digital Presence</h2>
          <p className="text-lg text-gray-300">
            Our systematic approach ensures that every project we undertake delivers exceptional results through a proven methodology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="relative reveal-animation"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="mb-6">
                <span className="text-5xl font-bold opacity-30">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              
              {index < processSteps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-12 -right-4 h-8 w-8 text-gray-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
