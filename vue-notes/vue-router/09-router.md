# router实例

router实例通过vue-router提供的构造函数VueRouter创建的, 一般一个Vue应用只有一个router实例. 在组件中, 可以通过this.$router来获取注入到应用中的router实例. 

## router构建选项 

* routes: 所有页面路由数组, 数组中每一项是一个路由配置对象. 
* mode: 路由模式, 默认使用hash模式, 有以下三种模式: 
  * hash: 使用 URL hash 值来作路由. 支持所有浏览器, 包括不支持 HTML5 History Api 的浏览器. 
  * history: 依赖 HTML5 History API 和服务器配置. 具体参考[这里](https://router.vuejs.org/zh/guide/essentials/history-mode.html). 
  * abstract: 支持所有 JavaScript 运行环境, 如Node.js服务器端, 如果发现没有浏览器的 API, 路由会自动强制进入这个模式. 
* base: 应用的基路径, 默认为/. 例如, 如果整个单页应用服务在/app/下, 然后base就应该设为/app/. 
* linkActiveClass: 全局配置router-link默认的激活的class, 默认为router-link-active
* linkExactActiveClass: 全局配置router-link默认的精确匹配激活的class, 默认值为router-link-exact-active.
* scrollBehavior: 定义路由的滚动行为
* parseQuery / stringifyQuery: 提供自定义查询字符串的解析/反解析函数. 覆盖默认行为
* fallback: 当浏览器不支持history.pushState控制路由是否应该回退到hash模式. 默认值为 true.

## router实例属性和方法

* app: 获取配置了该router的Vue根实例
* mode: 路由使用的模式
* currentRoute: 获取当前的路由
* beforeEach: 导航前置守卫. 导航被确认之前调用.
* beforeResolve: 导航解析守卫. 导航被确认之前, 同时在所有组件内守卫和异步路由组件被解析之后调用. 
* afterEach: 导航完成后调用
* push: 导航到一个新的路由, 导航记录会留在history栈中
* replace: 替换当前路由, 不会在history中添加导航记录
* go: 在history记录中前进或后退多少步, 如果history记录不够用, 那就默默地导航失败.
* back: 返回到history中的上一个路由
* forward: 前进到history中的下一个记录
* addRoutes: 动态添加路由. 参数必须是一个符合 routes 选项要求的数组. 
* onReady(callback, errorCallback): 该方法把一个回调排队, 在路由完成初始导航时调用. 这意味着它可以解析所有的异步进入钩子和路由初始化相关联的异步组件. errorCallback在路由解析运行出错时调用.
* onError: 注册一个回调, 该回调会在路由导航过程中出错时被调用. 注意被调用的错误必须是下列情形中的一种:
  * 错误在一个路由守卫函数中被同步抛出
  * 错误在一个路由守卫函数中通过调用 next(err) 的方式异步捕获并处理
  * 渲染一个路由的过程中, 需要尝试解析一个异步组件时发生错误.
* getMatchedComponents: 返回目标位置或是当前路由匹配的组件数组(是数组的定义/构造类, 不是实例). 通常在服务端渲染的数据预加载时使用. 
* resolve: 解析目标位置

## 路由跳转函数的参数说明

router实例提供的路由跳转函数有5个, 分别为push, replace, go, back, forward. 每个函数的参数说明如下:

* go: 接收一个整数作为参数, 表示在当前历史记录栈前进或者后退多少步.
* back, forward: 都不接收参数, 表示前进后者后退
* push,replace: 两个函数接收相同的参数, 都接收3个参数. 返回值都为一个Promise, 如果导航成功, then回调会被被执行, 如果失败catch回调会被执行, 此时可以省略后面2个参数. 
  * 第一个参数为必须传递的参数, 可以为一个字符串或者对象.
    * 如果该参数为字符串, 表示的是要跳转的路由的路径. 
    * 如果该参数为对象, 该对象可以接收一下字段做为属性
      * path: 表示路由的路径
      * name: 路由的名称
      * params: 路由参数, 一般和name字段搭配使用. 如果设置了path的值, params将会不生效, 此时应该将需要传递的参数写在路由路径中. 
      * query: 查询字符串 
  * onComplete: 导航完成后的回调.
  * onAbort: 导航终止的回调.