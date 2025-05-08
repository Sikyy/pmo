'use client';

import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function ContactPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-hidden">
        <Header />
        <div className="pt-32">
          <Contact />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
} 