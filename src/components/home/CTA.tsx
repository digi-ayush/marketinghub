
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6 reveal-animation">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto reveal-animation" style={{ animationDelay: '0.2s' }}>
            Let's collaborate to create custom digital marketing solutions that drive real results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal-animation" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
              <Link to="/contact">
                Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
