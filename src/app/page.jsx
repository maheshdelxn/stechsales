import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Clients from '@/components/Clients';

// Import Products and Footer normally (they're already Client Components)
import Products from '@/components/Products';
import Footer from '@/components/Footer';
// import Gallery from '@/components/galary';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Products />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}