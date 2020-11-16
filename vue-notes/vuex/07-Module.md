# Module 

由于使用单一状态树, 应用的所有状态会集中到一个比较大的对象. 当应用变得非常复杂时, store对象就有可能变得相当庞大臃肿. Vuex允许通过Module将store进行分隔, 每个模块拥有自己的state、mutation、action、getter、甚至是嵌套子模块, 减少了store的复杂性. 每个module之间是相互独立的. 

## Module的局部状态

在Module中的mutations和getters里面的方法的第一个参数state是当前Module的局部状态, 而不是全局的state. getter方法的第二参数getters是Module的getters, 第三个参数rootGetters是指store的getters. 对于action局部状态通过context.state暴露出来, 根节点状态则为 context.rootState. 

## 命名空间

默认情况下, 模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应. 这样就加深各个模块之间的耦合度, 一般情况每个声明的模块都是独立, 通过namespaced: true的方式来声明一个带有命名空间的Module, 让Module更加独立. 启用了命名空间的模块里面的 getter 和 action 会收到局部化的 getter，dispatch 和 commit. 

## 带命名空间的模块内访问全局内容

在局部mutation和getter中, 可以通过mutation和getter的第三个参数rootState和第四个参数rootGetters来获取全局的state和getters. 对于Module中的action, rootState和rootGetters可以通过context参数来获取. 若需要在全局命名空间内分发action或提交mutation, 将 { root: true }作为第三参数传给 dispatch 或 commit 即可. 

### 在模块中注册全局的action

若需要在带命名空间的模块注册全局action, 可添加 root: true, 并将这个action的定义放在函数 handler中.
```javascript 
actions: {
  increment: {
    root: true,
    handler() {
      //do some action
    }
  }
}
```

### 带命名空间的绑定函数 

当使用 mapState, mapGetters, mapActions 和 mapMutations 这些函数来绑定带命名空间的模块时, 写起来比较繁琐. 对于这种情况, 可以将模块的空间名称字符串作为第一个参数传递给上述函数, 这样所有绑定都会自动将该模块作为上下文. 而且还可以通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数. 它返回一个对象, 对象里有新的绑定在给定命名空间值上的组件绑定辅助函数, 从该对象提取mapState, mapGetters, mapActions, mapMutations, 使用时就如同使用全局的绑定函数那样. 

## 动态注册模块

在store创建之后, 可以使用 store.registerModule方法动态注册模块, 模块动态注册功能使得其他 Vue 插件可以通过在 store 中附加新模块的方式来使用 Vuex 管理状态. 动态注册的模块可以通过store.unregisterModule(moduleName) 来动态卸载模块. 注意, 不能使用此方法卸载静态模块(即创建store时声明的模块).



