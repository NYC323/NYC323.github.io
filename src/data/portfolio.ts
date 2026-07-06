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
  name: "NYC323",
  title: "A student of DT",
  bio: "An idiot",
  email: "396442603@qq.com",
  githubUrl: "https://github.com/NYC323",
  linkedinUrl: "https://linkedin.com/in/NYC323",
  twitterUrl: "https://twitter.com/NYC323",
  websiteUrl: "https://NYC323.dev",
};

export const stats: Stat[] = [
  { value: 5, label: "年开发经验", suffix: "+" },
  { value: 50, label: "完成项目", suffix: "+" },
  { value: 20, label: "开源贡献", suffix: "+" },
  { value: 1000, label: "GitHub Stars", suffix: "+" },
];

export const skills: Skill[] = [
  { name: "Nothing", category: "Nothing", level: 100, color: "#61DAFB" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Nothing",
    description: "Nothing",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20task%20management%20app%20interface%20with%20clean%20UI%20dark%20theme&image_size=landscape_16_9",
    githubUrl: "https://github.com/alexchen/taskmaster",
    liveUrl: "https://taskmaster.alexchen.dev",
    skills: ["Nothing"],
    category: "Nothing",
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/NYC323", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/NYC323", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/NYC323", icon: "twitter" },
  { name: "Email", url: "3964426032qq.com", icon: "mail" },
];

export const skillCategories = ["Nothing"];
export const projectCategories = ["Nothing"];
