module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'MossFrp Wiki',
    description: 'MossFrp 官方文档',
    plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: '搜索文档',
              }
            },
          },
        ],
      ],
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    chainWebpack: config => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    },
    themeConfig: {
        logo: 'https://mossmirror.heycrab.xyz/static/img/bigmoshou.jpg',
        sidebar: {
            '/': [
            {
                text: '主页',
                collapsible: true,
                children: ['/readme.md', '/beforeask.md'],
            },
            {
                text: '使用客户端',
                collapsible: true,
                children: ['/client/windows.md', '/client/linux.md'],
            },
            {
                text: 'FAQ',
                collapsible: true,
                children: ['/help/main.md', '/help/collection.md'],
            },
            ],
      },
    }
  }