'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductDetailProps {
  id: number;
  name: string;
  description: string;
  specs: string;
  image: string;
  details?: {
    overview: string;
    features: string[];
    specifications: {
      [key: string]: string;
    };
    package: string[];
  };
}

const ProductDetail = ({ id, name, description, specs, image, details }: ProductDetailProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: '概览' },
    { id: 'features', label: '特点' },
    { id: 'specifications', label: '规格' },
    { id: 'package', label: '包装内容' },
  ];

  // 规格数据分组，使显示更加优雅
  const specGroups = details?.specifications ? {
    '基本信息': ['布局', '材质', '键帽', '轴体', '尺寸', '重量'],
    '连接与兼容': ['连接方式', '兼容系统', '电池容量'],
    '其他特性': ['固件', '背光']
  } : {};
  
  const renderTabContent = () => {
    if (!details) return <p>加载中...</p>;
    
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="leading-relaxed text-lg"
          >
            {details.overview}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-3">
              {details.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-1.5 mr-3 rounded-full bg-white"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      case 'specifications':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {Object.entries(specGroups).map(([groupName, keys]) => (
              <div key={groupName} className="space-y-4">
                <h3 className="text-lg font-medium border-b border-gray-200 dark:border-gray-700 pb-2">{groupName}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {keys.map((key: string) => 
                    details.specifications[key] && (
                      <div key={key} className="flex justify-between">
                        <span className="text-[var(--text-secondary)]">{key}</span>
                        <span className="font-medium">{details.specifications[key]}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        );
      case 'package':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-3">
              {details.package.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-1.5 mr-3 rounded-full bg-white"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section-spacing">
      <div className="minimal-container">
        <div className="relative">
          <Link href="/" className="inline-flex items-center text-sm mb-6 hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回主页
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-[85px]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-square relative overflow-hidden bg-[#0a0a0a] rounded-lg"
            >
              <Image 
                src={image}
                alt={name}
                fill
                className="object-contain p-6"
                priority
              />
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-light mb-3">{name}</h1>
                <p className="text-lg text-[var(--text-secondary)]">{description}</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {specs.split(' / ').map((spec, index) => (
                    <span key={index} className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-8">
                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav className="flex space-x-8 overflow-x-auto">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 text-sm font-medium relative whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'text-[var(--text-primary)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {tab.label}
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-primary)]"
                          />
                        )}
                      </button>
                    ))}
                  </nav>
                </div>
                
                <div className="py-6">
                  {renderTabContent()}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail; 