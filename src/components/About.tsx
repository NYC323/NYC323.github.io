import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { userInfo, stats } from '../data/portfolio';
import { User, Briefcase, Award, Star } from 'lucide-react';

const statIcons = [Briefcase, Award, Star, Star];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setAnimatedStats((prev) => {
              const newStats = [...prev];
              newStats[index] = stat.value;
              return newStats;
            });
            clearInterval(timer);
          } else {
            setAnimatedStats((prev) => {
              const newStats = [...prev];
              newStats[index] = Math.floor(current);
              return newStats;
            });
          }
        }, duration / steps);
      });
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="py-24 bg-dark-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-mono mb-4">
              关于我
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              了解更多 <span className="text-gradient">关于我</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              我是一名充满激情的全栈开发者，致力于创造有意义的数字体验
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-dark-500/50 rounded-3xl p-8 border border-dark-400/30">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {userInfo.name}
                      </h3>
                      <p className="text-primary-400 font-medium mb-4">
                        {userInfo.title}
                      </p>
                      <p className="text-dark-300 leading-relaxed">
                        {userInfo.bio}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-dark-400/30">
                    <h4 className="text-sm font-semibold text-dark-200 mb-4">
                      专业技能
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'TypeScript', 'Python', 'Go', 'AWS'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-dark-400/50 text-dark-200 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <motion.div
                    key={stat.label}
                    className="group relative bg-dark-500/30 rounded-2xl p-6 border border-dark-400/20 hover:border-primary-500/30 transition-all card-hover"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1 font-mono">
                        {animatedStats[index]}
                        {stat.suffix}
                      </div>
                      <div className="text-dark-400 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-20">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '创新思维',
                  description: '勇于尝试新技术，不断探索更好的解决方案',
                },
                {
                  title: '团队协作',
                  description: '善于沟通，能够与团队成员高效协作完成项目',
                },
                {
                  title: '持续学习',
                  description: '保持好奇心，持续学习最新技术和行业趋势',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-dark-500/20 rounded-2xl p-8 border border-dark-400/20 text-center group hover:border-primary-500/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-gradient">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dark-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
