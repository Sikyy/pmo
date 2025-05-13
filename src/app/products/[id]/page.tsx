'use client';
import { useParams } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';

// 模拟产品数据，实际项目中应该从API获取
const productsData = [
  {
    id: 1,
    name: 'WAVES 60',
    description: '旗舰60%布局键盘，极简主义设计与出色的声学表现',
    specs: '铝合金机身 / PBT键帽 / 静音轴',
    image: '/1.png',
    details: {
      overview: 'WAVES 60是我们的旗舰产品，采用60%紧凑布局，为追求极简设计和卓越性能的用户打造。每一个细节都经过精心设计，从铝合金一体式机身到精选的PBT键帽，再到特别调校的静音轴体，都体现了我们对品质的执着追求。',
      features: [
        '铝合金CNC一体成型机身，坚固耐用',
        '高品质PBT热升华键帽，手感舒适，不易磨损',
        '特别调校的静音轴体，提供流畅而安静的打字体验',
        '可编程按键功能，满足个性化需求',
        'USB-C接口，支持高速数据传输',
        'QMK/VIA固件支持，完全自定义',
        '人体工程学设计，长时间使用也不疲劳'
      ],
      specifications: {
        "布局": '60%',
        "材质": '铝合金',
        "键帽": 'PBT热升华',
        "轴体": '定制静音轴',
        "连接方式": 'USB-C',
        "尺寸": '293 x 103 x 30 mm',
        "重量": '约800g',
        "兼容系统": 'Windows, macOS, Linux',
        "固件": 'QMK/VIA支持',
        "背光": 'RGB可编程背光'
      } as Record<string, string>,
      package: [
        '1 x WAVES 60键盘',
        '1 x 高品质编织USB-C数据线',
        '1 x 键帽拔键器',
        '1 x 轴体拔出器',
        '额外赠送键帽',
        '使用手册'
      ]
    }
  },
  {
    id: 2,
    name: 'WAVE 75',
    description: '全功能75%布局，带有触控旋钮和波纹形外观设计',
    specs: '金属CNC外壳 / 热插拔 / 可编程功能',
    image: '/2.png',
    details: {
      overview: 'WAVE 75是我们的全能型键盘，75%布局提供了功能键和方向键，同时保持紧凑的尺寸。独特的波纹形外观设计和多功能触控旋钮是其标志性特点，为用户提供了美观与实用的完美结合。',
      features: [
        '精密CNC加工金属外壳，波纹形设计',
        '多功能触控旋钮，控制音量、亮度等功能',
        '热插拔PCB设计，轻松更换轴体',
        '全键可编程，灵活定制',
        '双模连接，有线/无线自由切换',
        '长效电池，单次充电可使用数周',
        'RGB背光，支持多种灯效'
      ],
      specifications: {
        "布局": '75%',
        "材质": '铝合金CNC',
        "键帽": 'PBT双色注塑',
        "轴体": '热插拔支持',
        "连接方式": 'USB-C/蓝牙5.0',
        "尺寸": '325 x 127 x 35 mm',
        "重量": '约950g',
        "电池容量": '4000mAh',
        "兼容系统": 'Windows, macOS, iOS, Android',
        "背光": '可编程RGB'
      } as Record<string, string>,
      package: [
        '1 x WAVE 75键盘',
        '1 x 编织USB-C数据线',
        '1 x 键帽拔键器',
        '1 x 轴体拔出器',
        '使用手册'
      ]
    }
  },
  {
    id: 3,
    name: 'FLOW 65',
    description: '紧凑型设计与出色的便携性，为移动办公带来顺畅体验',
    specs: '轻量化设计 / 有线/无线双模 / 长效电池',
    image: '/3.png',
    details: {
      overview: 'FLOW 65是为追求便携性和效率的用户设计的理想选择。65%布局在保留方向键的同时实现了紧凑设计，超轻量化结构和长效电池让您随时随地享受顺畅的输入体验。',
      features: [
        '轻量化设计，便于携带',
        '65%布局，紧凑但保留方向键',
        '三模连接：有线/蓝牙/2.4G无线',
        '长达45天的电池续航',
        '快速充电技术，充电15分钟可使用8小时',
        '静音设计，适合公共场所使用',
        '多设备切换功能，最多连接3个设备'
      ],
      specifications: {
        "布局": '65%',
        "材质": '聚碳酸酯+铝合金板',
        "键帽": 'PBT材质',
        "轴体": '低噪音轴',
        "连接方式": 'USB-C/蓝牙5.1/2.4G',
        "尺寸": '315 x 105 x 25 mm',
        "重量": '约650g',
        "电池容量": '3500mAh',
        "兼容系统": 'Windows, macOS, iOS, Android',
        "背光": '单色背光'
      } as Record<string, string>,
      package: [
        '1 x FLOW 65键盘',
        '1 x USB-C数据线',
        '1 x 2.4G接收器',
        '1 x 收纳袋',
        '使用手册'
      ]
    }
  }
];

export default function ProductPage() {
  const params = useParams();
  const productId = Number(params.id);
  
  const product = productsData.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="minimal-container section-spacing">
        <h1 className="text-3xl font-light mb-4">产品未找到</h1>
        <p>抱歉，您查找的产品不存在。</p>
      </div>
    );
  }
  
  return <ProductDetail {...product} />;
} 