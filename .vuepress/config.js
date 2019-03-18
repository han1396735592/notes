module.exports = {
    title: '我的学习笔记',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ], themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
                items: [
                    { text: 'Android', link: '/android/' },
                    { text: 'ios', link: '/ios/' },
                    { text: 'Web', link: '/web/' }
                ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/codeteenager' },
        ],
        sidebar: {
            '/android/': [
                "",
                "android1",
            ],
            "/ios/":[
                "",
                "ios1",
            ],
            "/web/":[
                "",
                "web1",
            ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}
