'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="section-spacing relative min-h-[70vh] flex flex-col justify-center"
    >
      <div className="minimal-container">
        <div className="max-w-2xl">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-light mb-2">关于我们</h2>
            <div className="h-px w-16 bg-[var(--text-primary)] opacity-20"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <p className="text-lg text-[var(--text-secondary)]">
                PMO是一家专注于机械键盘设计的品牌，我们将流水的灵感融入到每一款产品中，创造出既美观又实用的键盘体验。
              </p>
              
              <p className="text-lg text-[var(--text-secondary)]">
                我们的设计理念围绕着简约、流畅和和谐，就像水一样自然流动。每一款键盘都经过精心调校，确保打字时的流畅感受，同时保持极简的美学。
              </p>
              
              <p className="text-lg text-[var(--text-secondary)]">
                从选材到制造，我们坚持高品质标准，每个细节都经过严格把控，确保产品不仅美观，而且经久耐用。
              </p>
              
              <div className="pt-6">
                <a href="/contact" className="text-sm uppercase tracking-widest flow-border py-2">
                  联系我们
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 