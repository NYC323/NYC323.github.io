import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { userInfo, socialLinks } from '../data/portfolio';
import { Github, Linkedin, Twitter, Mail, Send, MapPin, Phone, Heart } from 'lucide-react';

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" className="py-24 bg-dark-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-mono mb-4">
              联系我
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              让我们 <span className="text-gradient">一起工作</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              有项目想法？合作机会？或者只是想打个招呼？我很乐意听到你的声音
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="bg-dark-600/50 rounded-3xl p-8 border border-dark-400/20">
                <h3 className="text-xl font-bold text-white mb-6">发送消息</h3>
                
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                  >
                    消息发送成功！我会尽快回复你。
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-dark-200 text-sm font-medium mb-2">
                      你的名字
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-500/50 border border-dark-400/30 text-white placeholder-dark-400 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="请输入你的名字"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-200 text-sm font-medium mb-2">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-500/50 border border-dark-400/30 text-white placeholder-dark-400 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="请输入你的邮箱"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-200 text-sm font-medium mb-2">
                      消息内容
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-dark-500/50 border border-dark-400/30 text-white placeholder-dark-400 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                      placeholder="请输入你的消息..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        发送中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        发送消息
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div className="bg-dark-600/50 rounded-3xl p-8 border border-dark-400/20">
                  <h3 className="text-xl font-bold text-white mb-6">联系方式</h3>
                  
                  <div className="space-y-6">
                    <motion.a
                      href={`mailto:${userInfo.email}`}
                      className="flex items-center space-x-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-dark-400 text-sm">电子邮箱</div>
                        <div className="text-white font-medium group-hover:text-primary-400 transition-colors">
                          {userInfo.email}
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+8613800138000"
                      className="flex items-center space-x-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-dark-400 text-sm">电话号码</div>
                        <div className="text-white font-medium group-hover:text-primary-400 transition-colors">
                          +86 138 0013 8000
                        </div>
                      </div>
                    </motion.a>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-dark-400 text-sm">所在地</div>
                        <div className="text-white font-medium">
                          中国，上海
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-600/50 rounded-3xl p-8 border border-dark-400/20">
                  <h3 className="text-xl font-bold text-white mb-6">社交链接</h3>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {socialLinks.map((link) => {
                      const Icon = iconMap[link.icon];
                      return (
                        <motion.a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center p-4 rounded-xl bg-dark-500/30 border border-dark-400/20 hover:border-primary-500/30 hover:bg-dark-500/50 transition-all group"
                          whileHover={{ y: -5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-6 h-6 text-dark-300 group-hover:text-primary-400 transition-colors mb-2" />
                          <span className="text-xs text-dark-400 group-hover:text-dark-200 transition-colors">
                            {link.name}
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-3xl p-8 border border-primary-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">感谢访问</h3>
                  <p className="text-dark-300 text-sm">
                    如果你喜欢我的作品，请在 GitHub 上给我一个 Star，或者关注我的社交媒体。
                    期待与你合作！
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-dark-500/50 mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-mono font-bold text-lg">AC</span>
              </div>
              <span className="font-mono font-semibold text-white">Alex Chen</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-dark-400 hover:text-white text-sm transition-colors">
                关于
              </a>
              <a href="#skills" className="text-dark-400 hover:text-white text-sm transition-colors">
                技能
              </a>
              <a href="#projects" className="text-dark-400 hover:text-white text-sm transition-colors">
                项目
              </a>
              <a href="#contact" className="text-dark-400 hover:text-white text-sm transition-colors">
                联系
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-dark-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent-500" />
              <span>by Alex Chen</span>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-dark-500/30 text-center">
            <p className="text-dark-500 text-sm">
              2024 Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
