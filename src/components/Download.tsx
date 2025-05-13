'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface DownloadFile {
  id: number;
  name: string;
  description: string;
  type: string;
  size: string;
  url: string;
}

const downloadFiles: DownloadFile[] = [
  {
    id: 1,
    name: 'WAVE 75 固件使用说明',
    description: '最新版本的WAVES 75 固件使用说明',
    type: 'docx',
    size: '854.6KB',
    url: '/downloads/WAVE75_Firmware_Usage_Instructions.docx'
  },
  {
    id: 2,
    name: 'WAVE 75 有线固件',
    description: '适用于有线版本的WAVES 75键盘',
    type: 'exe',
    size: '2.1MB',
    url: '/downloads/WAVE75_Wired-Firmware.exe'
  },
  {
    id: 3,
    name: 'WAVE 75 2.4G无线固件',
    description: '适用于2.4G无线版本的WAVES 75键盘',
    type: 'exe',
    size: '2.1MB',
    url: '/downloads/WAVE75_[2.4G_Firmware].exe'
  },
  {
    id: 4,
    name: '【WAVE75使用说明】VIA使用导入方式',
    description: '文件介绍了VIA使用导入方式',
    type: 'txt',
    size: '0.7KB',
    url: '/downloads/[WAVE75_Instructions]_VIA_Import_Method.txt'
  },
  {
    id: 5,
    name: 'WAVE75【仅有线模式使用】RGB版',
    description: '适用于RGB版WAVE75--仅有线模式使用',
    type: 'json',
    size: '10.2KB',
    url: '/downloads/WAVE75_[Wired_Mode_Only]_RGB_Version.json'
  },
  {
    id: 6,
    name: 'WAVE75【仅有线模式使用】无光版',
    description: '适用于无光版WAVE75--仅有线模式使用',
    type: 'json',
    size: '6.6KB',
    url: '/downloads/WAVE75_[Wired_Mode_Only]_Non_RGB_Version.JSON'
  },
  {
    id: 7,
    name: 'qmk_toolbox_install（安装程序）教程',
    description: 'QMK-ToolBox 安装教程',
    type: 'doc',
    size: '10KB',
    url: '/downloads/QMK_Toolbox_Install_(Installation_Program).doc'
  },
  {
    id: 8,
    name: 'WAVE75三模RGB（QMK代码）',
    description: 'WAVE 75 QMK代码--仅适用于三模RGB版本',
    type: 'bin',
    size: '72.3KB',
    url: '/downloads/WAVE75_Tri_Mode_RGB_(QMK_Code).bin'
  },
  {
    id: 9,
    name: 'WAVE75三模无光（QMK代码）',
    description: 'WAVE 75 QMK代码--仅适用于三模无光版本',
    type: 'bin',
    size: '56.6KB',
    url: '/downloads/WAVE75_Tri_Mode_Non_RGB_(QMK_Code).bin'
  },
  {
    id: 10,
    name: 'WAVE75升级流程',
    description: 'WAVE 75 升级版本细节说明',
    type: 'doc',
    size: '253KB',
    url: '/downloads/WAVE75_Upgrade_Process.doc'
  }
];

const FileTypeIcon = ({ type }: { type: string }) => {
  // 根据文件类型返回不同的图标样式
  const getIconClass = () => {
    switch(type.toLowerCase()) {
      case 'pdf': return 'bg-red-500/10 text-red-500';
      case 'docx':
      case 'doc': return 'bg-blue-500/10 text-blue-500';
      case 'exe': return 'bg-purple-500/10 text-purple-500';
      case 'json': return 'bg-yellow-500/10 text-yellow-500';
      case 'bin': return 'bg-green-500/10 text-green-500';
      case 'txt': return 'bg-gray-500/10 text-gray-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className={`w-10 h-10 rounded-md ${getIconClass()} flex items-center justify-center`}>
      <span className="text-xs uppercase font-medium">{type}</span>
    </div>
  );
};

const Download = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // 文件过滤逻辑
  const filteredFiles = activeTab === 'all' 
    ? downloadFiles 
    : downloadFiles.filter(file => file.type.toLowerCase() === activeTab);

  // 可用的文件类型标签
  const fileTypes = ['all', ...new Set(downloadFiles.map(file => file.type.toLowerCase()))];

  return (
    <section className="section-spacing">
      <div className="minimal-container">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-light mb-2">下载中心</h2>
          <div className="h-px w-16 bg-[var(--text-primary)] opacity-20"></div>
          <p className="mt-4 text-[var(--text-secondary)]">获取最新的产品固件、驱动程序和文档资料</p>
        </motion.div>
        
        {/* 文件类型筛选标签 */}
        <div className="flex flex-wrap gap-2 mb-10">
          {fileTypes.map(type => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                activeTab === type 
                  ? 'bg-[var(--accent-light)] text-[var(--background)]' 
                  : 'bg-[var(--background-light)] hover:bg-[var(--background-light)] hover:bg-opacity-50'
              }`}
            >
              {type === 'all' ? '全部' : type.toUpperCase()}
            </button>
          ))}
        </div>
        
        {/* 文件列表 */}
        <div className="grid grid-cols-1 gap-4">
          {filteredFiles.map((file) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-md bg-[var(--background-light)] bg-opacity-20 hover:bg-opacity-30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <FileTypeIcon type={file.type} />
                
                <div className="flex-grow">
                  <h3 className="text-lg font-medium">{file.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{file.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-[var(--text-secondary)]">{file.type.toUpperCase()}</span>
                    <span className="text-xs text-[var(--text-secondary)]">{file.size}</span>
                  </div>
                </div>
                
                <a 
                  href={file.url} 
                  download
                  className="inline-flex items-center px-4 py-2 text-sm bg-[var(--accent-light)] text-[var(--background)] rounded hover:bg-opacity-90 transition-all"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  下载
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredFiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)]">暂无此类型的文件</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Download; 