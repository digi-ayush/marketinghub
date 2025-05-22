
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-white" >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-right" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">AI-Driven Agency</span>
            <h1 className="heading-xl mb-6">
              Transforming <span className="relative">
                Digital Marketing
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C33.9205 6.41469 146.537 -1.27199 356 3.34875" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span> with AI Innovation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Empower your business with cutting-edge digital marketing solutions tailored for startups and small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-left" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                alt="Digital Marketing Hub" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-black text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                  <span className="font-medium">Live AI Analytics</span>
                </div>
                <p className="text-sm">89% increase in conversion rate using our AI-optimized campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
