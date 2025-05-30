'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-hidden">
        <Header />
        <Hero />
        <Products />
        <About />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
