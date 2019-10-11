module.exports = ctx => ({
  dest: './dist',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Matplotlib 中文',
      description: 'Matplotlib中文网、Matplotlib官方中文文档。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Matplotlib',
      description: 'Python Data Analysis Library.'
    }
  },
  head: require('./configs/head'),
  theme: 'teadocs',
  themeConfig: require('./configs/themeConfig'),
  plugins: require('./configs/plugins'),
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js',
    '.vuepress/sidebar/en.js',
    '.vuepress/sidebar/zh.js'
  ]
})
