# sumocen.web

#### 安装依赖
```
yarn add vue-router // vue-router
yarn add vuex // vuex
yarn add sass-loader node-sass // sass
yarn add eslint-plugin-vue-libs // eslint
yarn add vue-awesome-swiper // swiper
```

#### 目录结构
```
│**********************************************│           
├─public
│  │  favicon.ico
│  │  index.html
│  │  
│  └─images
│      ├─ background.png    // 背景图片
│      ├─ logo.svg      // logo
│              
└─src
    │  App.vue      // 主组件
    │  main.js      // 入口文件
    │  
    ├─assets
    │  ├─image
    │  │  ├─banner      // 首页banner静态图片
    │  │  │      hello-world.jpg
    │  │  │      
    │  │  └─list    // 首页list静态图片
    │  │          dream.jpg
    │  │          
    │  ├─sass   // sass配置文件
    │  │  │  app.scss
    │  │  │  common.scss
    │  │  │  font.scss
    │  │  │  init.scss
    │  │  │  mixins.scss
    │  │  │  theme.scss
    │  │  │  variables.scss
    │  │  │  
    │  │  └─marx
    │  │          marx.scss
    │  │          _base.scss
    │  │          _buttons.scss
    │  │          _form.scss
    │  │          _sanitize.scss
    │  │          _tables.scss
    │  │          _typography.scss
    │  │          
    │  └─svg    // 过度动画svg
    │          motion-blur-filter.svg
    │          
    ├─components
    │  ├─archive
    │  │      announcement.vue      // 首页公告组件
    │  │      carrousel.vue     // 首页banner组件
    │  │      item.vue      // 首页日志item组件
    │  │      list.vue      // 首页日志list组件
    │  │      
    │  ├─global     // 全局组件
    │  │  │  index.js
    │  │  │  
    │  │  ├─color-block     // 一个灰色的方块组件
    │  │  │      block.vue
    │  │  │      
    │  │  ├─empty       // 一个为空的展示组件
    │  │  │      empty.vue
    │  │  │      
    │  │  └─loading     // loading组件
    │  │          loading.vue
    │  │          
    │  ├─layout     // 布局
    │  │  └─pc      // pc布局
    │  │      │  footer.vue     // 尾部
    │  │      │  header.vue     // 头部
    │  │      │  main.vue       //  pc主糅合页面
    │  │      │  nav.vue        // pc菜单栏
    │  │      │  
    │  │      └─aside   // 侧边栏
    │  │              calendar.vue  // 日历组件
    │  │              main.vue  //  aside主糅合页面
    │  │              
    │  └─widget     // 网站小饰件
    │          background.vue   // 网站背景图片内容
    │          
    ├─config    // 设置
    │      ad.config.js     // 广告配置文件（已屏蔽）
    │      i18n.config.js   // 多语言配置文件
    │      
    ├─constants     // 常量
    │      state.js     // 显示状态常量
    │      system.js    // methods状态常量
    │      
    ├─filters
    │      index.js // 全局过滤注册
    │      
    ├─layouts   // 布局(未使用)
    │      default.vue  // 默认加载页面
    │      empty.vue    // 空页面
    │      error.vue    // 错误页面
    │      
    ├─plugins // 插件
    │      vue-extend.js    // vue拓展注册js(本来可以写道man.js里面的东西)
    │      
    ├─router    // 页面路由
    │      index.js
    │      
    ├─store     // Vuex管理
    │  │  index.js  // Vuex糅合
    │  │  
    │  └─modules    // Vuex模块
    │          global.js    // 语言状态管理
    │          
    ├─transforms
    │      article-tag-link.js      // article-tag-link
    │      html.js      // 文字处理过滤器(文字溢出过滤器、首字母大写)
    │      i18n.js      // 语言格式转换器
    │      time.js      // 时间转换
    │      ua-device.js     // 当前设备解析器
    │      ua-parser.js     // 评论模块 UA、OS 解析器
    │      
    └─views
        └─home  // 默认加载页面首页
                home.vue
│  .eslintrc.js     //  eslint规则https://github.com/vuejs/eslint-plugin-vue-libs
│  .gitignore
│  babel.config.js      // babel config
│  package.json     // package
│  README.md
│  vue.config.js    // Vue项目配置文件
│  yarn.lock    // yarn 包管理
│**********************************************│
```
