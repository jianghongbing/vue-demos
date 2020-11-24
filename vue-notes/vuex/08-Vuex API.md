# Vuex API

## Vuex.Store 构造器选项

通过Vuex.Store构造器来创建store实例. 该构造器可以传入以下选项: 

* state: store实例的根状态对象, 用于存放store的全局状态数据. 如果该值是一个函数, 其返回的对象会被作为根state. 
* mutations: 在store上面注册mutation, 每一个mutation方法的第一个参数都是state(在module是局部的state); 第二个参数是可选的payload对象. mutation用于更改state中的数据. 
* actions: 在store上注册action, action处理函数接收2个参数, 第一个为context上下文对象, 第二个为可选的payload对象. context上下文对象说明如下: 
  * state: 如果在模块中, 则为模块的state; 如果是全局的, 为store的根state. 
  * rootState: store的根state, 只存在于模块的actions中. 
  * commit: 等同于store的commit, 用于在action中提交mutation
  * dispatch: 等同于store的dispatch, 用于在action中派发其他的action
  * getters: 在模块中, 为模块的getters; 如果是全局的, 则为store的根getters. 
  * rootGetters: store的所有getters, 只存在于模块的actions中
* getters: 在store上注册getters, getter方法接收以下参数: 
  * state: 如果是全局的getter为根state, 如果是模块的state为模块的state.
  * getters: 如果是全局的getter, 则为store的所有getters; 如果是模块的state则为模块的getters.
  * rootState: 根state, 只在模块的getter中存在该参数. 
  * rootGetters: 所有getters. 只在某块的getter中存在该参数. 
* modules: 在store注册模块. 每一个模块的配置和Vuex.store构造器有类似的选项, 配置如下: 
  * state: 模块的state.
  * mutations: 在模块中注册mutaions. 
  * actions: 在模块中注册actions. 
  * getters: 模块的getters.
  * modules: 在模块中注册子模块. 
  * namespaced: 默认情况下, 模块的选项是不带命名空间的, 通过namespaced为true来设置模块带有命名空间. 
* plugins: 一个数组, 包含应用在 store 上的插件方法. 这些插件直接接收store作为唯一参数, 可以监听mutation(用于外部地数据持久化、记录或调试)或者提交mutation(用于内部数据, 例如websocket或某些观察者).
* strict: 是否使用严格模式. 在严格模式下, 任何 mutation 处理函数以外修改 Vuex state 都会抛出错误. 
* devtools: 为某个特定的Vuex实例打开或关闭devtools. 对于传入false的实例来说Vuex store不会订阅到 devtools 插件. 可用于一个页面中有多个 store 的情况. 

## store实例属性和方法
* state: 根状态, 只读.
* getters: 注册的getters, 只读. 
* commit: commit用于提交mutation, 来达到更改state中数据的目的. 该方法的说明如下: 
  * 当以类型的提交方式时, 该函数接收3个参数.
    * type: mutation的类型
    * payload: 提交的数据
    * options: options里可以通过root: true, 允许在命名空间模块里提交根的 mutation
  * 当以对象的提交方式时, 该函数接收2个参数. 
    * object: 将mutation的类型和payload的数据放置于一个对象. 
    * options: 同上
* dispatch: 派发action, 该方法的返回值为一个Promise, 因此可以在一个action派发成功后, 在接着派发其他的action. 该方法的说明如下: 
  * 当以类型的提交方式时, 该方法接收3个参数. 
    * type: action的类型
    * payload: 派发action时携带的数据
    * options: options里可以通过root: true, 允许在命名空间模块里提交根的action
  * 当以对象的提交方式时, 该方法接收2个参数. 
    * object: 将mutation的类型和payload的数据放置于一个对象. 
    * options: 同上
* replaceState: 替换store的根状态, 仅用状态合并或时光旅行调试.
* watch: 该函数接收3个参数, 第一个参数为一个函数, 该函数接收store的state和getters作为其参数, 该函数需要返回一个值. 第二个参数也是一个函数, 监听第一个参数函数返回值的变化.  最后接收一个可选的对象参数表示 Vue 的 vm.$watch方法的参数. 要停止侦听第一个参数函数返回值的变化, 调用此方法返回的函数即可停止侦听. 
* subscribe: 订阅store的mutation. 该函数接收一个handler的函数和一个可选的options对象作为参数.  handler函数在每个mutataion完成后会触发, 接收mutation和state作为该函数的参数. 可以多次订阅store的mutation, 默认情况下, 新的处理函数会被添加到其链的尾端, 因此它会在其它之前已经被添加了的处理函数之后执行. 这一行为可以通过向 options 添加 prepend: true 来覆写, 即把处理函数添加到其链的最开始. 要停止订阅, 调用此方法返回的函数即可停止订阅. 
* subscribeAction: 订阅store的action. 该函数接收一个handler的函数和一个可选的options对象作为参数.   handler会在每个action分发的时候调用并接收action描述和当前的 store 的 state 这两个参数. 默认情况下, 新的handler函数会被添加到其链的尾端, 因此它会在其它之前已经被添加了的处理函数之后执行. 这一行为可以通过向 options 添加 prepend: true 来覆写, 即把处理函数添加到其链的最开始. 要停止订阅, 调用此方法返回的函数即可停止订阅. 
* registerModule: 动态注册模块
* unregisterModule: 卸载一个动态注册的模块
* hasModule: 判断store中是否存在某个名字的module
* hotUpdate: 热替换新的 action 和 mutation. 

## 组件绑定的辅助函数 

* mapState: 映射store中的state数据到组件中, 一般映射为组件的计算属性中去.  如果想要映射module的state, 第一个参数需要传递module的命名空间
* mapGetters: 映射store的getters到组件中, 一般映射到组件的计算属性中去. 如果想要映射module的getters, 第一个参数需要传递module的命名空间
* mapActions: 映射store的actions方法到组件中, 映射到组件的methods选项中, 调用映射后的方法可以直接派发action. 如果想要映射module的actions, 第一个参数需要传递module的命名空间
* mapMutations: 映射store的mutations到组件中, 映射到组件的methods选项中, 调用映射后的方法后可以直接提交mutation. 如果想要映射module的mutation, 第一个参数需要传递module的命名空间. 
* createNamespacedHelpers: 创建基于命名空间的组件绑定辅助函数. 其返回一个包含 mapState、mapGetters、mapActions 和 mapMutations 的对象, 并且它们都已经绑定在了给定的命名空间上.