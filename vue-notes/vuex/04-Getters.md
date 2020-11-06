# Getters

有时候我们想对state中的数据进行转换, store的getters选项就是提供该功能的. 在组件中可以通过store.getters来访问getters属性的值. getters选项中的每一个getter就像计算属性一样, getter的返回值会根据它的依赖被缓存起来, 且只有当它的依赖值发生了改变才会被重新计算. 

## getter说明

getters对象中的每一个getter的value是一个函数, 该函数接收2个参数. 分别store的state和getters. 可以在函数中返回转换后的值; 也可以让getter返回一个函数, 来实现给getter传参, 当对store里的数组进行查询时非常有用. 

## mapGetters函数

这是Vuex内部提供的一个函数, 通过该函数可以将store中的getter映射到组件的计算属性中去. 

