'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-light mb-6">404</h1>
        <h2 className="text-2xl font-light mb-8">页面未找到</h2>
        <Link 
          href="/" 
          className="text-sm uppercase tracking-widest flow-border py-2"
        >
          返回首页
        </Link>
      </motion.div>
    </div>
  );
} 