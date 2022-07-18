const { description } = require('../package')

module.exports = {
  base: '/notebook/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
   title: "Sihle's Notebook",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
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
    lastUpdated: false,
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
    // sidebar: {
    //   '/frontend/': [
    //     {
    //       title: '前端',
    //       collapsable: true,
    //       children: [
    //         'js',
    //         'vue',
    //         'vite',
    //         'vuepress',
    //       ]
    //     }
    //   ],
    // }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
