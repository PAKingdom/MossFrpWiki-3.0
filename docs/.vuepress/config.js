module.exports = {
    lang: 'zh-CN',
    title: 'MossFrp Wiki 3.1',
    base: '/', 
    bundler: '@vuepress/bundler-webpack',
    head: [
      [
        'link',
        { rel: 'icon' , href: 'bigmoshou.jpg'}
      ]
    ],
    plugins: [
      [
        '@vuepress/plugin-search',
        {
            // 排除首页
        isSearchable: (page) => page.path !== '/',
          locales: {
            '/': {
              placeholder: '搜索',
            },
            '/en/': {
              placeholder: 'Search',
            },
          },
        },
      ],
    ],
    themeConfig: {
        logo: '/bigmoshou.jpg',
        navbar: [
          { text: "首页", link: "/" },
          { text: "Mossfrp官网", link: "https://baidu.com" },
          { text: "加入官方QQ群" , link: "https://jq.qq.com/?_wv=1027&k=8DWtQWn6"},
          { text: "GitHub", link: "https://github.com/MossFrp/MossFrpWiki-3.0"}
        ],
        sidebar: {
            '/': [
            {
                text: '主页',
                collapsible: false,
                children: ['/readme.md', '/tips.md','/beforeask.md'],
            },
            {
                text: '开始使用MossFrp',
                collapsible: false,
                children: ['/process/reg.md', '/process/help.md','/process/hellomossfrp.md'],
            },
            {
                text: '客户端/使用方法',
                children: ['/client/navigation.md','/client/MossFrpJava-win.md','/client/MossFrpJava-linux.md','/client/MossFrpJava-client.md','/client/MossFrpJava-plugins.md','/client/MossFrp.exe.md','/old/MossFrp_Client.md','/client/MossFrp_Client_Fastv'],
            },
            {
              text: 'MossFrp Bot命令大全',
              children: ['/bothelp/readme.md'],
            },
            {
                text: '旧教程(能用！)',
                collapsible: false,
                children: ['/old/MossFrpStandard.md'],
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