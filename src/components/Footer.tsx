'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="minimal-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-xl font-light tracking-tight">PMO</span>
            </motion.div>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest mb-4"
            >
              导航
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <Link href="#home" className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">首页</Link>
              <Link href="#about" className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">关于我们</Link>
              <Link href="#products" className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">产品系列</Link>
              <Link href="#contact" className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">联系我们</Link>
            </motion.div>
          </nav>
          
          <nav className="flex flex-col space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest mb-4"
            >
              社交媒体
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <a href="#" className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">微博</a>
              <a href="#" className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">微信</a>
              <a href="#" className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Instagram</a>
              <a href="#" className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">小红书</a>
            </motion.div>
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[var(--text-primary)] border-opacity-5 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-xs text-[var(--text-secondary)]">© {new Date().getFullYear()} PMO Keyboards. 保留所有权利。</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <Link href="#" className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">隐私政策</Link>
            <Link href="#" className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">使用条款</Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 