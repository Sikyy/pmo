'use client';

import Header from '@/components/Header';
import Download from '@/components/Download';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function DownloadPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-hidden">
        <Header />
        <div className="pt-32">
          <Download />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
} 