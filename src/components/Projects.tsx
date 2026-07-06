import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects, projectCategories } from '../data/portfolio';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProjects = activeCategory === '全部'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

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
    <section id="projects" className="py-24 bg-dark-600 relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-mono mb-4">
              项目作品
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              我的 <span className="text-gradient">项目</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              精选的个人项目和开源贡献，展示我的技术能力和创造力
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-dark-500/30 rounded-2xl overflow-hidden border border-dark-400/20 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-600 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-dark-600/80 backdrop-blur-sm text-white hover:bg-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-dark-600/80 backdrop-blur-sm text-white hover:bg-accent-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-dark-600/80 backdrop-blur-sm text-primary-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center group-hover:text-primary-400 transition-colors">
                    {project.name}
                    <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-dark-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-lg bg-dark-400/50 text-dark-200 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <div className="w-24 h-24 rounded-full bg-dark-500/50 flex items-center justify-center mx-auto mb-6">
                <Github className="w-12 h-12 text-dark-400" />
              </div>
              <h3 className="text-xl font-semibold text-dark-200 mb-2">
                暂无项目
              </h3>
              <p className="text-dark-400">
                该分类下还没有项目，看看其他分类吧
              </p>
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <motion.a
              href="https://github.com/alexchen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-dark-500/50 border border-dark-400/30 text-white font-semibold hover:border-primary-500/50 hover:bg-dark-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="mr-3 w-5 h-5" />
              查看更多项目
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
