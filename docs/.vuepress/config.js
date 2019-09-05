const path = require('path');
console.log(path)
module.exports = {
    // 基本配置
    title: '日常学习笔记',//网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
    description: '前端学习笔记',//网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    base: '/',//部署站点的基础路径
    // head 额外的需要被注入到当前页面的 HTML<head> 中的标签
    head: [
        ['meta', { name: 'keywords', content: 'javascript,web,前端学习,java' }]
    ],
    // host 指定用于 dev server 的主机名 Default: '0.0.0.0'
    // port 指定 dev server 的端口 默认值: 8080
    // dest 指定 vuepress build 的输出目录 默认值: .vuepress/dist
    dest: path.resolve(__dirname, '../../dist'),
    // ga 提供一个 Google Analytics ID 来使 GA 生效。
    serviceWorker: true,//如果设置成 true，VuePress 将会自动生成并且注册一个 service worker，它缓存了那些已访问过的页面的内容，用于离线访问（仅在生产环境生效）
    // locales 提供多语言支持的语言配置
    // shouldPrefetch 一个函数，用来控制对于哪些文件，是需要生成<link rel = "prefetch"> 资源提示的


    // 主题
    // theme 当你使用自定义主题的时候，需要指定它
    // themeConfig 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题
    themeConfig: {
        nav: [
            // { text: 'Home', link: '/' },
            // { text: 'Guide', link: '/guide/' },
            // { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            },
            // {
            //     text: 'Languages',
            //     items: [
            //         { text: 'Group1', items: [13123123] },
            //         { text: 'Group2', items: [333333] }
            //     ]
            // }
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    },


    // Markdown
    // markdown.lineNumbers 是否在每个代码块的左侧显示行号
    // markdown.anchor  markdown-it-anchor 的选项
    // markdown.externalLinks 这个键值对将会作为特性被增加到是外部链接的<a>标签上，默认的选项将会在新窗口中打开一个该外部链接。
    // markdown.toc  markdown-it-table-of-contents的选项
    // markdown.config  一个用于修改当前的markdown-it实例的默认配置，或者应用额外的插件的函数


    // 构建流程
    // postcss postcss-loader的选项，请注意，指定这个值，将会覆盖内置的 autoprefixer，所以你需要自己将它加进去
    // stylus  stylus-loader的选项
    // scss    加载*.scss文件的sass-loader的选项
    // sass    加载*.sass文件的sass-loader的选项
    // less    less-loader的选项
    // configureWebpack    用于修改内部的 Webpack 配置
    // chainWebpack    通过webpack-chain来修改内部的Webpack配置

    // 浏览器兼容性
    evergreen: true, //设置成 true，这将会禁止ESNext到ES5的转译以及对IE的polyfills，同时会带来更快的构建速度和更小的文件体积。

}