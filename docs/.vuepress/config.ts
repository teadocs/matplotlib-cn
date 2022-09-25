import teadocThemeConfig from './configs/themeConfig'
import customPlugin from './configs/plugins'
import { head, navbarZh, navbarEn, sidebarZh, sidebarEn } from './configs'
import { DefaultThemeLocaleData, defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress-theme-teadocs'

export default defineUserConfig({
  dest: './dist',

  base: '/',

  head,

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Matplotlib',
      subTitle: '中文网',
      description: 'Matplotlib中文网、Matplotlib官方中文文档。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Matplotlib',
      subTitle: '中文网',
      description: 'Python Data Analysis Library.'
    }
  },
  theme: defaultTheme({
    // logo: {
    //   text: 'Matplotlib',
    //   subText: '中文网',
    //   image: '/logo.svg',
    // },
    logo: '/logo.svg',
    colorModeSwitch: false,
    alert: [{
      id: '2019-7-29',
      title: '文档公告',
      content: `我们经常发布文档更新，部分页面的翻译可能仍在进行中。有关最新信息，请访问<a href="/en/">英文文档</a>。如果某个页面上的翻译有问题，请提issues<a href="https://github.com/teadocs/matplotlib-cn/issues" target="_blank">告诉我们</a>。`
    }],
    // 侧面板配置
    sidePanel: {
      enable: false,
      btnName: '快捷聊天室',
      title: 'Matplotlib 爱好者'
    },
    repo: 'teadocs/matplotlib-cn',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        contributors: false,
        lastUpdated: true,
        lastUpdatedText: '上次更新',
        navbar: navbarZh,
        sidebarDepth: 3,
        sidebar: sidebarZh,
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        contributors: false,
        lastUpdated: true,
        lastUpdatedText: 'Last Updated',
        navbar: navbarEn,
        sidebarDepth: 3,
        sidebar: sidebarEn,
      }
    }
  }),
  // themeConfig: require('./configs/themeConfig'),
  plugins: customPlugin,
  // extraWatchFiles: [
  //   '.vuepress/nav/en.js',
  //   '.vuepress/nav/zh.js',
  //   '.vuepress/sidebar/en.js',
  //   '.vuepress/sidebar/zh.js'
  // ]
})
