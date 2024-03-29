const { description } = require('../../package')

module.exports = {
  base: '/notebook/',
  title: "Sihle's Notebook",
  description: description,
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-Hant-TW'
    }
  },
  head: [
    ['meta', { name: "viewport", content: "width=device-width,initial-scale=1.0,maximum-scale=1.0" }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    smoothScroll: true,
    lastUpdated: '最後更新',
    nav: [
      {
        text: '前端',
        link: '/frontend/',
      },
      {
        text: '後端',
        link: '/backend/'
      },
      {
        text: '其它',
        link: '/else/'
      },
      {
        text: '部落格',
        link: 'https://bugbug777.github.io/sihle/'
      }
    ],
    sidebar: 'auto',
  },
  plugins: {
    '@vuepress/plugin-back-to-top': true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
}
