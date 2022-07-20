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

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: "viewport", content: "width=device-width,initial-scale=1.0,maximum-scale=1.0" }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
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

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    '@vuepress/plugin-back-to-top': true,
    '@vuepress/plugin-medium-zoom': false,
  },

  /**
   * Use alias
   */
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
}
