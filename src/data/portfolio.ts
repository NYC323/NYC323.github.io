export interface Skill {
  name: string;
  category: string;
  level: number;
  color: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  skills: string[];
  category: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export const userInfo = {
  name: "Alex Chen",
  title: "Full Stack Developer",
  bio: "热爱编程的全栈开发者，专注于构建优雅的 Web 应用。拥有 5+ 年开发经验，擅长 React、Node.js 和云原生技术。",
  email: "alex@example.com",
  githubUrl: "https://github.com/alexchen",
  linkedinUrl: "https://linkedin.com/in/alexchen",
  twitterUrl: "https://twitter.com/alexchen",
  websiteUrl: "https://alexchen.dev",
};

export const stats: Stat[] = [
  { value: 5, label: "年开发经验", suffix: "+" },
  { value: 50, label: "完成项目", suffix: "+" },
  { value: 20, label: "开源贡献", suffix: "+" },
  { value: 1000, label: "GitHub Stars", suffix: "+" },
];

export const skills: Skill[] = [
  { name: "React", category: "前端", level: 95, color: "#61DAFB" },
  { name: "TypeScript", category: "前端", level: 90, color: "#3178C6" },
  { name: "Vue", category: "前端", level: 85, color: "#4FC08D" },
  { name: "Next.js", category: "前端", level: 88, color: "#000000" },
  { name: "Node.js", category: "后端", level: 92, color: "#339933" },
  { name: "Python", category: "后端", level: 80, color: "#3776AB" },
  { name: "Go", category: "后端", level: 75, color: "#00ADD8" },
  { name: "PostgreSQL", category: "数据库", level: 85, color: "#4169E1" },
  { name: "MongoDB", category: "数据库", level: 80, color: "#47A248" },
  { name: "Redis", category: "数据库", level: 75, color: "#DC382D" },
  { name: "Docker", category: "DevOps", level: 85, color: "#2496ED" },
  { name: "AWS", category: "DevOps", level: 78, color: "#FF9900" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "TaskMaster",
    description: "一款基于 React 和 Node.js 的任务管理应用，支持团队协作、实时同步和数据可视化。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20task%20management%20app%20interface%20with%20clean%20UI%20dark%20theme&image_size=landscape_16_9",
    githubUrl: "https://github.com/alexchen/taskmaster",
    liveUrl: "https://taskmaster.alexchen.dev",
    skills: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    category: "全栈",
  },
  {
    id: "2",
    name: "DataViz Dashboard",
    description: "交互式数据可视化仪表盘，支持多种图表类型和实时数据更新。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20with%20charts%20and%20graphs%20dark%20theme&image_size=landscape_16_9",
    githubUrl: "https://github.com/alexchen/dataviz",
    liveUrl: "https://dataviz.alexchen.dev",
    skills: ["React", "D3.js", "TypeScript"],
    category: "前端",
  },
  {
    id: "3",
    name: "E-commerce API",
    description: "高性能电商后端 API，支持订单管理、支付集成和库存系统。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20backend%20api%20architecture%20diagram%20tech%20illustration&image_size=landscape_16_9",
    githubUrl: "https://github.com/alexchen/ecommerce-api",
    skills: ["Node.js", "MongoDB", "Stripe", "Docker"],
    category: "后端",
  },
  {
    id: "4",
    name: "Portfolio Website",
    description: "个人作品集网站，采用现代设计风格，支持深色模式和响应式布局。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20portfolio%20website%20design%20showcase%20dark%20theme&image_size=landscape_16_9",
    githubUrl: "https://github.com/alexchen/portfolio",
    liveUrl: "https://alexchen.dev",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "前端",
  },
  {
    id: "5",
    name: "Chat Application",
    description: "实时聊天应用，支持一对一和群组聊天，包含消息通知功能。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=real%20time%20chat%20application%20interface%20messaging%20app%20dark%20theme&image_size=landscape_16_9",
    githubUrl: "https://github.com/alexchen/chat-app",
    skills: ["React", "Firebase", "TypeScript"],
    category: "全栈",
  },
  {
    id: "6",
    name: "URL Shortener",
    description: "轻量级 URL 短服务，支持自定义短链和访问统计。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=url%20shortener%20service%20simple%20clean%20interface%20dark%20theme&image_size=landscape_16_9",
    githubUrl: "https://github.com/alexchen/url-shortener",
    liveUrl: "https://short.alexchen.dev",
    skills: ["Go", "Redis", "PostgreSQL"],
    category: "后端",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/alexchen", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/alexchen", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/alexchen", icon: "twitter" },
  { name: "Email", url: "mailto:alex@example.com", icon: "mail" },
];

export const skillCategories = ["全部", "前端", "后端", "数据库", "DevOps"];
export const projectCategories = ["全部", "全栈", "前端", "后端"];
