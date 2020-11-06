# Actions 

Action和Mutation的目的一样, 都用于修改store中的状态, 但是Action和Mutation有以下2点区别

* Action不是直接修改数据的状态, 而是通过在Action内部提交Mutation来达到修改状态的目的
* 在Action内部可以执行异步操作

每一个Action也是一个函数, 该函数接收一个context的参数, context和store具有相同的方法和属性, 因此在Action内部可以通过context.commit来提交Mutation.

## 分发Action 

分发Action是通过store.dispatch函数来实现的, 在组件中可以通过this.$store.dispatch('xxx')来分发某个action, Vuex也提供mapActions函数来映射Action为组件的指定方法, 直接派发即可. 

## 组合Action

Action一般是异步的, store.dispatch函数的返回值是一个Promise, 因此可以在then回调中去其他的Action, 来达到组合的目的. 也可以利用async/await的方式来组合Action. 
