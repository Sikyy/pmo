'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // 检查是否在主页
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // 导航项数组
  const navItems = [
    { 
      name: 'About', 
      href: isHomePage ? '#about' : '/#about' 
    },
    { 
      name: 'Products', 
      href: isHomePage ? '#products' : '/#products' 
    },
    { name: 'Download', href: '/download' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 ${
        scrolled ? 'bg-background bg-opacity-90 backdrop-blur-sm' : ''
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="minimal-container flex justify-between items-center">
        <Link href="/">
          <motion.div 
            className="cursor-pointer"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xl font-light tracking-tight">PMO</span>
          </motion.div>
        </Link>
        
        <nav className="hidden md:flex space-x-12">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="text-sm uppercase tracking-widest flow-border py-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button 
            className="p-1" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <motion.span 
                className="block h-px w-6 bg-current"
                animate={{ width: menuOpen ? "24px" : "16px", rotate: menuOpen ? 45 : 0, y: menuOpen ? 3 : 0 }}
              />
              <motion.span 
                className="block h-px w-4 bg-current"
                animate={{ width: menuOpen ? "0" : "12px", opacity: menuOpen ? 0 : 1 }}
              />
              <motion.span 
                className="block h-px w-6 bg-current"
                animate={{ width: menuOpen ? "24px" : "20px", rotate: menuOpen ? -45 : 0, y: menuOpen ? -3 : 0 }}
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* 移动版菜单 */}
      <motion.div 
        className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ 
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? "0%" : "-100%",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="text-2xl tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header; 