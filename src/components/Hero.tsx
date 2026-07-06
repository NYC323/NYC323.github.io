import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';

const roles = ['全栈开发者', 'React 专家', '开源贡献者', '技术博主'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 50 : 100;
    
    if (isDeleting) {
      setDisplayText(role.substring(0, displayText.length - 1));
    } else {
      setDisplayText(role.substring(0, displayText.length + 1));
    }

    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }
  }, [displayText, isDeleting, currentRole]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dynamic"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        <motion.div
          className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          style={{ top: '10%', left: '10%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          style={{ bottom: '10%', right: '10%' }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-dark-500/50 border border-dark-400/30 text-primary-400 text-sm font-mono">
              <Sparkles className="w-4 h-4 mr-2" />
              欢迎来到我的个人主页
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">嗨，我是</span>
            <br />
            <span className="text-gradient glow-text">Alex Chen</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-dark-200 font-medium">
              <span className="text-white">我是一名</span>
              <span className="text-primary-500 mx-2">{displayText}</span>
              <span className="text-primary-500 animate-blink">|</span>
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-300 max-w-2xl mx-auto mb-10"
          >
            热爱编程的全栈开发者，专注于构建优雅的 Web 应用。
            拥有丰富的开发经验，擅长 React、Node.js 和云原生技术。
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              className="group flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:shadow-xl hover:shadow-primary-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              查看我的项目
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://github.com/alexchen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 rounded-full bg-dark-500/50 border border-dark-400/30 text-white font-semibold hover:border-primary-500/50 hover:bg-dark-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="mr-2 w-5 h-5" />
              GitHub
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/alexchen', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/alexchen', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com/alexchen', label: 'Twitter' },
              { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-500/30 border border-dark-400/20 text-dark-300 hover:text-primary-500 hover:border-primary-500/30 hover:bg-dark-500/50 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-dark-400/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-500 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
