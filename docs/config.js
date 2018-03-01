const langs = [
  { title: 'English', path: '/en-Us/', matchPath: /^\/en-Us/ },
  { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ }
]

const Tab1 = {
  default: {
    title: 'Docs', type: 'dropdown', items: [
      {title: 'debug', path: '/en-Us/Debug'},      
      {type: 'sep'} ,              
    ]
  },
  'zh-Hans': {
    title: '文档', type: 'dropdown', items: [
      {title: '调试', path: '/zh-Hans/Debug'},      
      {type: 'sep'} ,              
    ]
  },
}

docute.init({
    sidebar: false,
    disableSidebarToggle: true,
    home: "https://raw.githubusercontent.com/egojump/ACGCard/master/docs/en-Us/README.md",
    nav: {
      default: [
        {title: 'Home', path: '/en-Us/'},
        Tab1.default,              
        {title: 'Language', type: 'dropdown', items: langs },
      ],
      'zh-Hans': [
        {title: '首页', path: '/zh-Hans/'},
        Tab1['zh-Hans'],
        {title: '选择语言', type: 'dropdown', items: langs }
      ],
    }
  })