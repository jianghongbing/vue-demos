# API 

## 全局配置 

Vue提供了一个全局的config对象, 包含Vue的全局配置. 要是修改的全局配置生效, 需要在应用启动应用之前修改完成. 全局配置有以下选项. 

* silent: 是否取消Vue所有的日志与警告
* optionMergeStrategies: 自定义全局混入合并策略
* devtools: 配置是否允许vue-devtools检查代码. 开发版本默认为true, 生产版本默认为false. 生产版本设为true可以启用检查. 
* errorHandler: 指定组件的渲染和观察期间未捕获错误的处理函数. 这个处理函数被调用时, 可获取错误信息和Vue实例. 该处理函数接收以下三个参数: 
  * error: 捕获到的error信息
  * vm: 发生错误所在的Vue实例
  * info: 发生错误的特定信息
* warnHandler: 为Vue的运行时警告赋予一个自定义处理函数. 注意这只会在开发者环境下生效, 在生产环境下它会被忽略.
* ignoredElements: 使Vue忽略在Vue之外的自定义元素(例如使用了 Web Components APIs). 否则, 它会假设你忘记注册全局组件或者拼错了组件名称, 从而抛出一个关于 Unknown custom element 的警告. 
* keyCodes: 给 v-on 自定义键位别名. 该选项中, 每一个值的key需以kebab-case来命名. 
* performance: 设置为true以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪. 只适用于开发模式和支持performance.mark API 的浏览器上. 
* productionTip: 是否在启动时生成生产提示. 

## 全局函数属性

* extend: 创建一个Vue子类, 用于创建新的Vue实例, 参数是一个包含组件选项的对象. 
* nextTick: 在下次DOM更新循环结束之后执行延迟回调. 在修改数据之后立即使用这个方法, 获取更新后的 DOM. 支持作为一个Promise来使用. 
* set(target, propertyName/index, value): 向响应式对象中添加一个 property, 并确保这个新 property 同样是响应式的, 且触发视图更新.
* delete(target, propertyName/index): 删除对象的property. 如果对象是响应式的, 确保删除能触发更新视图. 这个方法主要用于避开Vue不能检测到 property被删除的限制.
* directive: 注册或获取全局指令
* filter: 注册或获取全局过滤器
* component: 注册或获取全局组件
* use: 使用插件. 如果需要使用插件, 该方法必须在Vue实例创建之前调用
* mixin: 全局注册一个混入, 混入数据会添加在混入以后所有创建的Vue实例. 不推荐在应用代码中使用.
* compile: 将一个模板字符串编译成render函数.
* observable: 让一个对象可响应.  返回的对象可以直接用于渲染函数和计算属性内, 并且会在发生变更时触发相应的更新.组件实例中data函数就是是通过该函数来处理的, 使其变为可响应式的. 
* version: Vue的版本号.

## 组件实例选项 

* data: Vue实例的数据对象, 非根实例该选项的值必须为一个函数. Vue将会递归将 data 的 property 转换为 getter/setter, 从而让 data 的 property 能够响应数据变化. 实例创建之后, 可以通过$data访问原始数据对象. Vue实例也代理了data对象上所有的 property, 因此访问this.a等价于访问this.data.a. 以_或$开头的 property不会被Vue实例代理, 因为它们可能和 Vue 内置的 property、API 方法冲突, 此时必须通过this.data.属性名的方式去访问data对象上的property. 
* props: 定义组件的属性. props可以是数组或对象, 用于接收来自父组件的数据. 当使用对象的方式来定义时, 可以定义一些选项, 具体参考[这里](./13-ProP.md)
* propsData: 只用于new 创建的实例中, 创建实例时传递props.
* computed: 定义计算属性. 计算属性将被混入到Vue实例中. 所有getter和setter的 this 上下文自动地绑定为Vue实例. 计算属性的结果会被缓存, 除非依赖的响应式 property 变化才会重新计算. 
* methods: 定义实例方法. 可以直接通过实例来访问这里方法. 
* watch: 定义需要监听的对象的值. 当该key的值发生变化改变时, 会出watch的回调函数. 
* el: 提供一个在页面上已存在的DOM元素作为当前实例的挂载目标. 只在用new创建实例上生效. 
* template: 模板字符串, 如果同时定义了el和template, template会替换挂载的el. 如果选项中定义了render函数, 将使用render函数来渲染标签元素. 
* render: 渲染函数. 该渲染函数接收一个createElement方法作为第一个参数用来创建VNode. 如果组件是一个函数组件, 渲染函数还会接收一个额外的 context 参数, 为没有实例的函数组件提供上下文信息. Vue 选项中的 render 函数若存在, 则Vue构造函数不会从template选项或通过el选项指定的挂载元素中提取出的 HTML 模板编译渲染函数. 
* renderError: 当render函数遭遇错误时, 会通过该函数来渲染输出. render中发生的错误将会作为第二个参数传递到当前函数. 
* directives: 定义组件的指令, 局部指令, 只能在当前组件中使用. 
* filters: 定义组件的过滤器, 局部过滤器, 只能在当前组件中使用. 
* components: 定义在当前组件上可用的组件.
* parent: 指定已创建的实例之父实例, 在两者之间建立父子关系. 子实例可以用this.$parent访问父实例, 子实例被推入父实例的$children数组中. 
* mixins: 混入数据到当前实例上, 具体可以参考[这里](./18-混入.md)
* extends: 允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数), 而无需使用Vue.extend. 这主要是为了便于扩展单文件组件. 
* provide/inject: [依赖注入](./17-处理边界情况.md)
* name: 定义组件的名称
* delimiters: 改变纯文本插入分隔符. 
* functional: 定义组件为无状态组件
* model: 自定义组件在使用v-model时定制 prop 和 event
* inheritAttrs: 是否将传递给子组件的非props的attribute作为普通的HTML attribute添加在子组件的根元素上. 默认为true. 通过设置inheritAttrs 为false, 这些默认行为将会被去掉. 
* comments: 是否保留且渲染模板中的HTML注释, 默认为false.

### 选项生命周期钩子函数

所有的生命周期钩子自动绑定this上下文到实例中, 因此在生命周期钩子函数中可以通过this访问数据和方法. 

* beforeCreate: 在实例初始化之后, 数据观测 (data observer) 和 event/watcher 事件配置之前被调用.
* created: 在实例创建完成后被立即调用
* beforeMount: 在挂载开始之前被调用, 相关的render函数首次被调用.
* mounted: 实例挂载后调用, 这时el被新创建的vm.$el替换了. 如果根实例挂载到了一个文档内的元素上, 当 mounted 被调用时vm.$el 也在文档内. mounted不会保证所有的子组件也都一起被挂载. 如果你希望等到整个视图都渲染完毕, 可以在 mounted 内部使用 vm.$nextTick来处理在所有子组件挂载后的回调
* beforeUpdate: 数据更新时调用. 
* updated: 由于数据更改导致的虚拟DOM重新渲染, 重新渲染完成后, 会调用该钩子函数
* activated: 被keep-alive缓存的组件激活时调用.
* deactivated: 被keep-alive缓存的组件停用时调用.
* beforeDestroy: 实例销毁之前调用, 这该方法里面实例还可以使用
* destroyed: 实例销毁之后调用, 在该方法里面不能获取到实例对象
* errorCaptured: 当捕获一个来自子孙组件的错误时被调用

## 组件实例属性

* $data: Vue实例数据对象. Vue实例代理了对其data对象property的访问.
* $props: 当前组件接收到的props对象, Vue 实例代理了对其 props 对象 property 的访问.
* $el: Vue实例使用的根DOM元素
* $options: 用于当前Vue实例的初始化选项
* $parent: 父实例对象
* $root: 根实例对象
* $children: 当前实例的直接子组件, 需要注意 $children 并不保证顺序, 也不是响应式的.
* $slots: 组件中所有的插槽. 每个具名插槽有其相应的property, 可以通过插槽名来访问对应的插槽. 默认插槽通过this.$slots.default来访问. 
* $scopedSlots: 当前实例所有的作用域插槽. $scopeSlots里面的每个key对应的是一个函数, 该函数有以下几个特点: 
  * 作用域插槽函数现在保证返回一个VNode数组, 除非在返回值无效的情况下返回 undefined. 
  * 所有的$slots现在都会作为函数暴露在$scopedSlots 中. 如果你在使用渲染函数, 不论当前插槽是否带有作用域, 推荐始终通过$scopedSlots访问它们.
* $refs: 组件或者元素引用对象, 持有注册过ref attribute 的所有 DOM 元素和组件实例. 
* $isServer: 判断当前Vue实例是否运行于服务器.
* $attrs: 包含了父作用域中不作为prop被识别(且获取)的 attribute 绑定 (class 和 style 除外)
* $listeners: 包含了父作用域中的(不含 .native 修饰器的)v-on 事件监听器.

## 组件实例方法

* $watch: 观察Vue实例上的一个表达式或者一个函数计算结果的变化. 回调函数得到的参数为新值和旧值. 表达式只接受简单的键路径. 对于更复杂的表达式, 用一个函数取代. $watch方法返回一个取消观察函数, 用来停止触发回调. 观察函数参数说明如下:
  * expOrFn: 第一个参数可以是一个键路劲的表达式也可以是一个函数
  * callback: 第二个参数是一个回调函数, 当监测的表达式或者函数计算结果发生变化时, 会触发回调. 回调函数的参数为监测的表达式或者计算结果的新值和旧值.
  * options: 选项
    * deep: 是否监测对象内部值的变化
    * immediate: 是否立即以表达式的当前值触发回调
* $set( target, propertyName/index, value ): 同Vue.set.
* $delete(target, propertyName/index): 同Vue.delete.
* $on: 监听当前实例上的自定义事件
* $once: 监听某个自定义事件一次
* $off: 移除监听自定义事件
* $emit: 发送自定义事件
* $mount: 挂载实例到指定的元素上. 如果Vue实例在实例化时没有收到el选项, 则它处于未挂载状态, 没有关联的 DOM 元素. 可以使用$mount函数手动地挂载一个未挂载的实例. 
* $forceUpdate: 迫使重新渲染组件. 仅仅影响实例本身和插入插槽内容的子组件, 而不是所有子组件.
* $nextTick: 在下次DOM更新循环之后, 执行某个回调函数. 在修改数据之后使用它, 然后等待DOM更新. 
* $destroy: 销毁组件实例对象. 清理它与其它实例的连接, 解绑它的全部指令及事件监听器.

## Vue内置指令

* v-text: 将v-text的值元素的textContent
* v-html: 将v-html的值绑定元素的innerHTML
* v-show: 将值绑定到元素的 CSS display属性
* v-if: 当v-if的值为真时, 会将元素插入到DOM中; 如果为假, 将元素从DOM中移除.
* v-else: 前一兄弟元素必须有 v-if 或 v-else-if. 类似于Javascript中的if-else if-else表达式
* v-else-if: 前一兄弟元素必须有 v-if 或 v-else-if. 类似于Javascript中的if-else if-else表达式
* v-for: 渲染列表, 一般需要给渲染出来的元素一个特定的key
* v-on: 绑定事件监听器
* v-bind: 动态地绑定一个或多个attribute, 或一个组件prop到表达式. 修饰符: 
  * .prop: 作为一个DOM property绑定而不是作为attribute绑定
  * .camel: 将kebab-case attribute名转换为 camelCase. 
  * .sync: 语法糖, 会扩展成一个更新父组件绑定值的v-on侦听器
* v-model: 在表单元素或者组件上创建双向绑定
* v-slot: 提供具名插槽或需要接收prop的插槽. 
* v-pre: 跳过这个元素和它的子元素的编译过程. 可以用来显示原始Mustache标签. 跳过大量没有指令的节点会加快编译.
* v-cloak: 这个指令保持在元素上直到关联实例结束编译.
* v-once: 只渲染元素和组件一次. 随后的重新渲染, 元素/组件及其所有的子节点将被视为静态内容并跳过. 这可以用于优化更新性能. 

## 特殊 attribute

* key: 元素或者组件的key, 表示在父元素中, 该元素的唯一性. key主要用在 Vue 的虚拟 DOM 算法, 在新旧 nodes 对比时辨识 VNodes. 如果不使用key, Vue会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法. 而使用key时, 它会基于key的变化重新排列元素顺序, 并且会移除key不存在的元素. 有相同父元素的子元素必须有独特的 key, 重复的key会造成渲染错误. 
* ref: 给元素或子组件注册引用信息. 引用信息将会注册在父组件的$refs对象上. 如果在普通的DOM元素上使用, 引用指向的就是 DOM 元素; 如果用在子组件上, 引用就指向组件实例. 
* is: 用于component组件上, 动态渲染某个组件

## 内置的组件

* component: 动态渲染某个组件. is的值决定了哪个组件被渲染. 
* transition: 过渡组件, 具体参考[这里](./25-过渡.md). 
* transition-group: 用于多个元素/组件过渡的组件, 具体参考[这里](./25-过渡.md).
* keep-alive:  包裹动态组件时, 会缓存不活动的组件实例, 而不是销毁它们. 自身不会渲染一个DOM元素, 也不会出现在组件的父组件链中. 当组件在 keep-alive内被切换, 它的activated和deactivated这两个生命周期钩子函数将会被对应执行. keep-alive组件接收以下props: 
  * include: 字符串或正则表达式, 只有名称匹配的组件会被缓存.
  * exclude: 字符串或正则表达式, 任何名称匹配的组件都不会被缓存.
  * max: 最多可以缓存多少组件实例.
* slot: 插槽, 用户分发内容. 