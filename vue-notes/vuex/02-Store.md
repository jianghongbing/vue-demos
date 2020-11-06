# Store 

在Vuex的项目中, 就是通过一个全局的store来管理数据的状态. store可以通过Vuex提供Store函数来创建, 创建的时候可以通过参数来对store进行配置, 创建的store实例会集成到Vue根实例中去, 在组件中可以通过this.$store来访问该store实例. 在Vuex的项目中只有一个store, store基本上就是一个容器, 包含了大部分的状态. 


## Vuex的store和全局的数据对象的区别:

* Vuex的状态存储是响应式的. 当Vue组件从store中读取状态的时候, 若store中的状态发生变化, 那么相应的组件也会相应地得到高效更新. 
* 不能直接改变store中的状态. 改变store中的状态的唯一途径就是显式地提交(commit) mutation. 这样使得我们可以方便地跟踪每一个状态的变化, 从而让我们能够实现一些工具帮助我们更好地了解我们的应用. 

