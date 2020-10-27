# 路由实例对象

一个路由实例对象表示当前激活的路由的状态信息, 包含了当前URL解析得到的信息, 还有URL匹配到的路由记录. 路由对象是不可变的, 每次成功的导航后都会产生一个新的对象.

## 路由实例配置对象

在创建router实例的时候, 可以通过在routes选项的每一个元素中注入路由的选项. 具体每个选项如下: 

* path: 路由路径
* component: 路由映射的组件
* name: 路由名称
* components: 命名视图组件, 一个数组
* redirect: 重定向到指定的路由
* props: 将pramas映射到组件的属性
* alias: 路由别名
* children: 嵌套路由
* meta: 路由元数据
* query: 路由url的查询字符串
* beforeEnter: 路由跳转前的回调
* caseSensitive: 匹配规则是否大小写敏感, 默认为false
* pathToRegexpOptions: 编译正则的选项

## 路由实例属性和方法

在很多的地方都可以直接访问到路由实例对象. 常见的有如下的几处: 
* 在组件中, 可以通过this.$route来访问
* 在watch选项中, 可以通过$route来访问
* 一些导航守卫函数中的参数

### 属性和方法

* path: 路由路径
* params: 路由参数
* query: url查询字符串序列化后的对象形式
* hash: 当前路由的hash值(带 #), 如果没有hash值, 则为空字符串. 
* fullPath: 完成解析后的 URL, 包含查询参数和hash的完整路径. 
* name: 路由名称
* redirectedFrom: 如果存在重定向, 即为重定向来源的路由的名字.
* matched: 匹配到的路由数组


