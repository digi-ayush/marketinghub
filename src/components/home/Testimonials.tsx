
const testimonials = [
  {
    quote: "The Marketing Hub team completely transformed our digital strategy. Their AI-driven approach increased our conversion rate by 65% in just three months.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a small business owner, I was struggling to compete online. Marketing Hub provided affordable solutions that delivered real results. Our social media engagement has tripled!",
    author: "Michael Chen",
    position: "Owner, Urban Cafe",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "What impressed me most was their attention to detail and commitment to understanding our unique needs. The website they developed for us perfectly captures our brand identity.",
    author: "Emily Rodriguez",
    position: "Marketing Director, Eco Goods",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Testimonials</span>
          <h2 className="heading-lg mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what businesses like yours have achieved with our digital marketing solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative reveal-animation"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <svg className="absolute top-6 left-6 h-12 w-12 text-gray-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391C14.017 10.561 16.022 8 18.875 8M14.017 21h-4v-7.391C10.017 10.561 12.022 8 14.875 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="relative z-10">
                <p className="italic text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
