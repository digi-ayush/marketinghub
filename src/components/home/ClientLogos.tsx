
import { ScrollArea } from '@/components/ui/scroll-area';

const clients = [
  { name: 'TechStart Inc.', logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969316.png' },
  { name: 'Urban Cafe', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968770.png' },
  { name: 'EcoGoods', logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969292.png' },
  { name: 'LegalPartners', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968869.png' },
  { name: 'NatureBlend', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968896.png' },
  { name: 'Fresh Start Juices', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968853.png' },
  { name: 'HomeServices Pro', logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969002.png' },
  { name: 'FitLife Apparel', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 reveal-animation">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Trusted By</span>
          <h2 className="heading-md mb-6">Brands That Work With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with these forward-thinking companies to help them achieve their digital marketing goals.
          </p>
        </div>
        
        <ScrollArea className="w-full">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-12 min-w-max px-4">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="reveal-animation flex flex-col items-center"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-white p-4 rounded-lg w-32 h-32 flex items-center justify-center shadow-sm border border-gray-100">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-16 max-w-full opacity-80 hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">{client.name}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default ClientLogos;
