module.exports = {
    dest: 'dist',// dest 指定 vuepress build 的输出目录 默认值: .vuepress/dist
    title: '前端之路',//网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
    description: '前端学习笔记',//网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    base: '/',//部署站点的基础路径
    // head 额外的需要被注入到当前页面的 HTML<head> 中的标签
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'keywords', content: 'JavaScript,HTML,CSS' }]
    ],
    // host 指定用于 dev server 的主机名 Default: '0.0.0.0'
    // port 指定 dev server 的端口 默认值: 8080
    serviceWorker: true,//如果设置成 true，VuePress 将会自动生成并且注册一个 service worker，它缓存了那些已访问过的页面的内容，用于离线访问（仅在生产环境生效）
    // 主题
    themeConfig: {
        repo: 'Vegetableratio/blog',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
            {
                text: 'JavaScript',
                link: '/javascript/prepare/'
            },
            {
                text: 'HTML',
                link: '/html/prepare/'
            },
            {
                text: 'CSS',
                link: '/css/prepare/'
            },
        ],
        sidebar: {
            // '/html/': [
            //     {
            //         title: '准备工作',
            //         collapsable: false,
            //         children: [
            //             ['prepare/', 'Introduction'],
            //             'prepare/flow',
            //             'prepare/directory',
            //             'prepare/build',
            //             'prepare/entrance'
            //         ]
            //     },
            // ],
            // '/javascript/': [
            //     {
            //         title: '准备工作',
            //         collapsable: false,
            //         children: [
                        
            //         ]
            //     },
            // ],
        }
    },

    // 浏览器兼容性
    evergreen: true, //设置成 true，这将会禁止ESNext到ES5的转译以及对IE的polyfills，同时会带来更快的构建速度和更小的文件体积。
}