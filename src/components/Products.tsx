'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  specs: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'WAVES 60',
    description: '旗舰60%布局键盘，极简主义设计与出色的声学表现',
    specs: '铝合金机身 / PBT键帽 / 静音轴',
    image: '/1.png'
  },
  {
    id: 2,
    name: 'WAVE 75',
    description: '全功能75%布局，带有触控旋钮和波纹形外观设计',
    specs: '金属CNC外壳 / 热插拔 / 可编程功能',
    image: '/2.png'
  },
  {
    id: 3,
    name: 'FLOW 65',
    description: '紧凑型设计与出色的便携性，为移动办公带来顺畅体验',
    specs: '轻量化设计 / 有线/无线双模 / 长效电池',
    image: '/3.png'
  }
];

const Products = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="products" ref={containerRef} className="section-spacing">
      <div className="minimal-container">
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-light mb-2">产品系列</h2>
          <div className="h-px w-16 bg-[var(--text-primary)] opacity-20"></div>
        </motion.div>
        
        <div className="space-y-32">
          {products.map((product, index) => (
            <ProductRow 
              key={product.id} 
              product={product} 
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductRowProps {
  product: Product;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const ProductRow = ({ product, index, scrollYProgress }: ProductRowProps) => {
  const isEven = index % 2 === 0;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [isEven ? -50 : 50, 0]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.5, 1]
  );

  return (
    <motion.div 
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
      style={{ opacity }}
    >
      <div className={`${isEven ? '' : 'lg:order-2'}`}>
        <motion.div
          style={{ x }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="aspect-square relative overflow-hidden"
        >
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
      
      <div className={`${isEven ? '' : 'lg:order-1'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-light">{product.name}</h3>
          <p className="text-lg text-[var(--text-secondary)]">{product.description}</p>
          <div className="text-sm tracking-wide opacity-60">{product.specs}</div>
          <div className="pt-4">
            <Link href={`/products/${product.id}`} className="text-sm uppercase tracking-widest flow-border py-2">
              查看详情
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Products; 