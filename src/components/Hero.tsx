'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="minimal-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <motion.h1 
            className="large-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            WAVES 60
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-10 max-w-md font-light text-[var(--text-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            流动键盘的旗舰系列，最小化设计与极致的打字体验，让灵感随指尖流动
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-x-6"
          >
            <a 
              href="#products" 
              className="text-sm uppercase tracking-widest flow-border py-2"
            >
              探索产品
            </a>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-xl aspect-square"
          >
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src="/4.png"
                alt="WAVES 60 Keyboard"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* 键帽特写 */}
            <motion.div 
              className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[var(--background)] shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-primary)] to-[var(--accent-light)] opacity-5"></div>
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-thin text-4xl opacity-40">W</span>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {/* <div className="text-xs tracking-widest uppercase">向下滚动</div> */}
      </motion.div>
    </section>
  );
};

export default Hero; 