
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-black pb-1">Contact Us</span>
            <h1 className="heading-xl mb-6">Let's Talk About Your Project</h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your digital presence? Reach out to us for a free consultation and discover how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div className="reveal-animation">
              <h2 className="heading-md mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to answer any questions you might have about our services, process, or how we can help your business succeed online. Reach out to us through any of the following channels:
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-black text-white p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Monday-Friday, 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black text-white p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-600">contact@marketinghub.com</p>
                    <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black text-white p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Office</h3>
                    <p className="text-gray-600">123 Marketing Street</p>
                    <p className="text-gray-600">Digital City, 10001</p>
                    <p className="text-gray-500 text-sm mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</div>
                    <p>We'll contact you within 24 hours to schedule a consultation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</div>
                    <p>We'll discuss your goals and challenges to understand your needs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</div>
                    <p>We'll provide a customized proposal with our recommended approach</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="reveal-animation" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="heading-md mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In *</label>
                    <Select value={formData.service} onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="social-media-marketing">Social Media Marketing</SelectItem>
                        <SelectItem value="ppc-ads">PPC Ads</SelectItem>
                        <SelectItem value="video-editing">Video Editing</SelectItem>
                        <SelectItem value="graphic-design">Graphic Design</SelectItem>
                        <SelectItem value="influencer-marketing">Influencer Marketing</SelectItem>
                        <SelectItem value="other">Other / Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your project or requirements"
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="h-[400px] w-full bg-gray-200 rounded-lg reveal-animation overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976383964467!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1661981226904!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 reveal-animation" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold mb-3">How soon can you start on my project?</h3>
              <p className="text-gray-600">Typically, we can begin new projects within 1-2 weeks of contract signing. For urgent needs, we also offer expedited services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 reveal-animation" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold mb-3">What are your payment terms?</h3>
              <p className="text-gray-600">We require a 50% deposit to begin work, with the remaining balance due upon completion. For ongoing services, we offer monthly billing options.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 reveal-animation" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold mb-3">How do you measure success?</h3>
              <p className="text-gray-600">We establish clear KPIs at the beginning of each project and provide regular performance reports. Our focus is always on delivering measurable ROI.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 reveal-animation" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold mb-3">Do you work with businesses outside the US?</h3>
              <p className="text-gray-600">Yes, we work with clients globally. Our team is equipped to handle international projects and can accommodate different time zones for meetings.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
