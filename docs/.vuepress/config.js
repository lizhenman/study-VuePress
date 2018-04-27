module.exports = {
    base: '/study-vuepress/',
    title: 'study-vuepress',
    description: '学习vuepress',
    port: 8888,
    head: [
        ['link', { rel: 'icon', href: `/images/vue-logo.png` }],
    ],
    markdown: {
        toc: {
            includeLevel: [1, 2, 3]
        }
    },
    themeConfig: {
        repo: 'lizhenman/study-vuepress',
        sidebar: [
            ['/', '介绍'],
            ['/getting-started/', '起步'],
            ['/example/', '示例']
        ],
    }
}