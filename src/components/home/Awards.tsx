
import { Award, Trophy, Star } from 'lucide-react';

const awards = [
  {
    icon: <Trophy className="h-10 w-10" />,
    title: 'Best Digital Marketing Agency',
    organization: 'Business Excellence Awards 2023',
    description: 'Recognized for outstanding client results and innovative strategies.'
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: 'Top Web Development Firm',
    organization: 'Digital Innovation Awards 2023',
    description: 'Honored for cutting-edge web design and development services.'
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: 'Social Media Campaign of the Year',
    organization: 'Marketing Association Awards 2022',
    description: 'Our work for Urban Cafe generated exceptional engagement metrics.'
  }
];

const Awards = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Recognition</span>
          <h2 className="heading-lg mb-6">Award-Winning Excellence</h2>
          <p className="text-lg text-gray-600">
            Our commitment to delivering outstanding results has been recognized by leading industry organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg border border-gray-100 text-center reveal-animation"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-black text-white p-3 rounded-full inline-flex mb-4">
                {award.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{award.organization}</p>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
