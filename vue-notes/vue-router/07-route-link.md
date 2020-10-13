# route-link

route-link是vue-router内置的一个组件, 表示一个连接, 通过 to 属性指定目标地址, 使其可以导航到其他的路由. route-link默认渲染一个a标签, 可以通过配置tag属性生成别的标签. 另外, 当目标路由成功激活时, 链接元素自动设置一个表示激活的CSS类名. router-link比起写死的a标签, 有如下的几个优点: 
 * 无论是HTML5 history 模式还是hash模式, 它的表现行为一致, 所以当你要切换路由模式, 或者在IE9降级使用 hash模式, 无须作任何变动. 
 * 在 HTML5 history 模式下, router-link 会守卫点击事件, 让浏览器不再重新加载页面. 
 * 当你在 HTML5 history 模式下使用 base 选项之后, 所有的 to 属性都不需要写基路径. 

## route-link组件属性

* to: 目标路由的链接, route-link组件必须配置该属性. 当被点击后, 内部会立刻把to的值传到router.push函数中, 这个值可以是一个字符串或者是描述目标位置的对象, 和router.push函数参数的值一致.
* replace: 是否替换当前路由, 一个布尔值, 默认为false. 当点击时, 会调用router.replace方法, 而不是router.push方法, 在导航后不会留下history记录.
* append: 是否在当前的路由路径基础上, 在拼接要跳转的路由路径
* tag: 渲染成指定的标签, 默认为a标签. 同样它还是会监听点击, 触发导航
* active-class: 设置链接激活时使用的CSS类名. 默认值可以通过路由的构造选项linkActiveClass来全局配置. 
* exact: 是否使用精确匹配. 是否激活默认类名的依据是包含匹配, 如果当前路径是/a, 并且给其设置了active-class, 但是/的路径的路由也会被设置. 如果不想其影响到其他路由, 可通过exact来设置, 如果exact为true, 那么不会影响到其他的路由. 
* event: 声明可以用来触发导航的事件. 可以是一个字符串或是一个包含字符串的数组. 默认为click事件
* exact-active-class: 路由精确匹配时激活的class. 可以通过路由构造函数选项linkExactActiveClass 进行全局配置.