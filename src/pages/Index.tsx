
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import Team from '@/components/home/Team';
import CTA from '@/components/home/CTA';
import ClientLogos from '@/components/home/ClientLogos';
import Awards from '@/components/home/Awards';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ClientLogos />
      <Services />
      <About />
      <Stats />
      <Process />
      <Awards />
      <Testimonials />
      <Team />
      <CTA />
    </Layout>
  );
};

export default Index;
