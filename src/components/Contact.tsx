'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // 重置提交状态
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section className="section-spacing min-h-screen flex flex-col justify-center">
      <div className="minimal-container">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-light mb-2">联系我们</h2>
          <div className="h-px w-16 bg-[var(--text-primary)] opacity-20"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-light mb-4">联系方式</h3>
                <div className="space-y-4">
                  <p className="text-lg">电子邮件：<span className="text-[var(--text-secondary)]">yyymalicious@gmail.com</span></p>
                  <p className="text-lg">电话：<span className="text-[var(--text-secondary)]">+86 198 1689 1233</span></p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-light mb-4">地址</h3>
                <p className="text-[var(--text-secondary)]">
                  中国杭州市<br />
                  西湖区转塘街道<br />
                  恒隆广场28楼2801室
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-light mb-4">工作时间</h3>
                <p className="text-[var(--text-secondary)]">
                  周一至周五：9:00 - 18:00<br />
                  周六、周日：休息
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div 
                className="min-h-[300px] flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-2xl font-light mb-6">消息已发送</p>
                <p className="text-lg text-[var(--text-secondary)]">感谢您联系我们，我们会尽快回复您。</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="text-sm block mb-2">
                    您的姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full py-3 bg-transparent border-b border-[var(--text-primary)] border-opacity-10 focus:outline-none focus:border-opacity-100 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm block mb-2">
                    您的邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full py-3 bg-transparent border-b border-[var(--text-primary)] border-opacity-10 focus:outline-none focus:border-opacity-100 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm block mb-2">
                    您的留言
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full py-3 bg-transparent border-b border-[var(--text-primary)] border-opacity-10 focus:outline-none focus:border-opacity-100 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <div className="pt-6">
                  <motion.button
                    type="submit"
                    className="text-sm uppercase tracking-widest py-2 flow-border relative inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '发送中...' : '发送消息'}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 