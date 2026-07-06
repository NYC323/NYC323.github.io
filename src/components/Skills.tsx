import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills, skillCategories } from '../data/portfolio';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('全部');
  const [animatedWidths, setAnimatedWidths] = useState<Record<string, number>>({});

  useEffect(() => {
    if (isInView) {
      skills.forEach((skill) => {
        const duration = 1500;
        const steps = 30;
        const increment = skill.level / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= skill.level) {
            setAnimatedWidths((prev) => ({ ...prev, [skill.name]: skill.level }));
            clearInterval(timer);
          } else {
            setAnimatedWidths((prev) => ({ ...prev, [skill.name]: Math.floor(current) }));
          }
        }, duration / steps);
      });
    }
  }, [isInView]);

  const filteredSkills = activeCategory === '全部'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="skills" className="py-24 bg-dark-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
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
              技术技能
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              我的 <span className="text-gradient">技术栈</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              多年积累的技术技能，涵盖前端、后端、数据库和 DevOps
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-dark-500/50 text-dark-200 border border-dark-400/30 hover:border-primary-500/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-dark-600/50 rounded-2xl p-6 border border-dark-400/20 hover:border-primary-500/30 transition-all card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <div
                        className="w-4 h-4 rounded-lg"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    <span className="font-semibold text-white">{skill.name}</span>
                  </div>
                  <span
                    className="text-sm font-mono font-semibold"
                    style={{ color: skill.color }}
                  >
                    {animatedWidths[skill.name] || 0}%
                  </span>
                </div>
                
                <div className="h-2 bg-dark-500 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedWidths[skill.name] || 0}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
                
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-dark-400">{skill.category}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i < Math.floor(skill.level / 20)
                            ? 'opacity-100'
                            : 'opacity-30'
                        }`}
                        style={{ backgroundColor: skill.color }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-dark-600 to-dark-500/50 rounded-3xl p-8 md:p-12 border border-dark-400/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  持续学习，不断成长
                </h3>
                <p className="text-dark-300 mb-6">
                  我相信技术永无止境，保持学习的态度是成为优秀开发者的关键。
                  我定期学习新技术，参与开源项目，并分享我的知识和经验。
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React 18', 'Next.js 14', 'TypeScript 5', 'Go 1.22', 'AWS CDK'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square max-w-sm mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute inset-4 border-2 border-dark-400/30 rounded-full" />
                  <div className="absolute inset-8 border-2 border-primary-500/20 rounded-full" />
                  <div className="absolute inset-12 border-2 border-accent-500/20 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                      <div className="text-dark-400 text-sm">技术技能</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
