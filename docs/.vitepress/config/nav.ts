import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  {
    text: "我的智能体",
    items: [
      {
        text: "JWisdom",
        link: "https://www.coze.cn/home",
        activeMatch: "/categories/issues/",
      },
      {
        text: "WiseAgent",
        link: "https://www.coze.cn/home",
        activeMatch: "/categories/fragments/",
      },
      {
        text: "MyClaude",
        link: "https://www.claude.com/",
        activeMatch: "/categories/tools/",
      },
      {
        text: "JxFlow",
        link: "https://www.runninghub.cn/",
        activeMatch: "/categories/solutions/",
      },
    ],
    activeMatch: "/categories/",
  },
  {
    text: "我的知识库",
    items: [
      {
        text: "文本知识库",
        link: "/TextKnowledge/issues/index",
        activeMatch: "/TextKnowledge/issues/",
      },
      {
        text: "图像知识库",
        link: "/categories/fragments/index",
        activeMatch: "/categories/fragments/",
      },
      {
        text: "视频知识库",
        link: "/categories/tools/index",
        activeMatch: "/categories/tools/",
      },
      {
        text: "项目方案",
        link: "/categories/solutions/index",
        activeMatch: "/categories/solutions/",
      },
    ],
    activeMatch: "/categories/",
  },
  {
    text: "我的小册",
    items: [
      {
        text: "Java基础快速入门",
        link: "/courses/java/index",
        activeMatch: "/courses/java/",
      },
      {
        text: "MySQL快速入门",
        link: "/courses/mysql/index",
        activeMatch: "/courses/mysql/",
      },
      {
        text: "MyBatis快速入门",
        link: "/courses/mybatis/index",
        activeMatch: "/courses/mybatis/",
      },
    ],
    activeMatch: "/courses/",
  },
  {
    text: "我的标签",
    link: "/tags",
    activeMatch: "/tags",
  },
  {
    text: "我的归档",
    link: "/archives",
    activeMatch: "/archives",
  },
  {
    text: "关于",
    items: [
      { text: "关于知识库", link: "/about/index", activeMatch: "/about/index" },
      { text: "关于我", link: "/about/me", activeMatch: "/about/me" },
    ],
    activeMatch: "/about/", // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
];
