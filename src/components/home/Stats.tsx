
import { ScrollArea } from '@/components/ui/scroll-area';

const stats = [
  { number: '200+', label: 'Completed Projects' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '40%', label: 'Average ROI Increase' },
  { number: '5+', label: 'Years of Excellence' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <ScrollArea className="w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center min-w-max">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="reveal-animation px-8"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="font-montserrat text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Stats;
