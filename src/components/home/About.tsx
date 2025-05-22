
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'AI-powered strategy development',
    'Data-driven decision making',
    'Custom solutions for unique needs',
    'Results-focused campaigns',
    'Transparent reporting',
    'Continuous optimization'
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative reveal-animation">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
              alt="Our Agency" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-8 right-8 bg-white p-4 shadow-lg rounded-lg hidden md:block">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-gray-600 text-sm">Years of Excellence</div>
            </div>
            <div className="absolute -top-8 -right-8 bg-black text-white p-5 rounded-full hidden lg:flex items-center justify-center w-24 h-24">
              <div>
                <div className="text-lg font-bold">100%</div>
                <div className="text-xs">Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="reveal-animation" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">About Us</span>
            <h2 className="heading-lg mb-6">We Deliver Digital Excellence Through Innovation</h2>
            <p className="text-lg text-gray-600 mb-6">
              Marketing Hub is an AI-driven digital agency founded with a clear mission: to make premium digital marketing services accessible and effective for startups and small businesses.
            </p>
            <p className="text-gray-600 mb-6">
              Unlike traditional agencies, we leverage the power of artificial intelligence to deliver data-driven strategies that maximize your ROI while keeping costs manageable. Our team of experts combines technological innovation with creative excellence to help your business thrive in the digital landscape.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-black" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button asChild>
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
