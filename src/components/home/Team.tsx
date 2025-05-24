
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import ayush from "@/team/ayush1.jpeg";
import ansh from "@/team/ansh1.jpg";
import diksha from "@/team/diksha1.jpg";

const teamMembers = [
  {
    name: 'Ayush Mishra',
    position: 'CEO & Founder',
    image: ayush,
    linkedin: 'https://www.linkedin.com/in/digi-ayush/'
  },
  {
    name: 'DIksha Agrawal',
    position: 'Creative Director',
    image: diksha,
    linkedin: '#'
  },
  {
    name: 'Ansh Shegal',
    position: 'AI & Analytics Lead',
    image: ansh,
    linkedin: '#'
  }
];

const Team = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Our Team</span>
          <h2 className="heading-lg mb-6">Meet the Experts Behind Our Success</h2>
          <p className="text-lg text-gray-600">
            Our diverse team combines creativity, technical expertise, and industry knowledge to deliver exceptional digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg reveal-animation"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-96 object-cover object-center transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-gray-300">{member.position}</p>
                    </div>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal-animation">
          <Button variant="outline" asChild>
            <Link to="/about">View Entire Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
