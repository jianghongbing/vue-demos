# Mutation 

Vuex中的状态是不能直接通过state的值去改变的, 唯一修改数据状态的途径就是提交mutation. store中的mutations选项就是用于注册mutation的地方. 在mutations选项中, 每一个mutation都是一个函数, 函数名就是该mutation的类型, 在函数的内部对状态进行更改, 该函数接收state作为第一个参数和一个可选的payload(载荷)作为第二参数. 不能直接调用该函数来进行状态更改, 需要通过store.commit方法来提交一个mutation.

## 提交mutation

通过store.commit方法来提交指定类型的mutation. 一般有2种形式提交mutation. 第一种是将mutation的type作为一个参数传递, 此时commit函数接收2个参数: 
* type: mutation类型, 必要参数.
* payload: 载荷, 提交mutation时传递的额外的数据. 可选. 该参数一般为一个对象. 

另外一种是以对象的形式提交, 此时将type放入payload中, 当使用对象风格的提交方式, 整个对象都作为载荷传给 mutation函数. 此时commit函数只接收一个payload函数的参数

## 使用常量替代mutation事件类型

使用常量替代mutation事件类型也是一种不错的方式, 可以在项目使用一个单独的文件来储存所有的mutation类型常量, 事件类型常量一般中所有字母大写, 单词之间使用下划线链接, 以MUTATION结尾作为常用的规范. 在声明mutation函数的地方可以使用ES6风格的计算属性命名功能来使用事件类型常量作为函数名. 如果是用这种方式来定mutation类型名, 建议全部的mutation都使用这种方法来定义, 不要混合使用. 


## 注意事项

* 每一个mutation必须是同步函数. 在异步函数中, 当mutation触发的时候, 回调函数还没有被调用. devtools不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的
* mutation需遵守Vue的响应原则. Vuex的store中的状态是响应式的, 那么当我们变更状态时, 监视状态的 Vue 组件也会自动更新. 这也意味着Vuex中的mutation也需要与使用Vue一样遵守一些注意事项: 
  * 最好提前store中初始化好所有所需属性
  * 当需要在对象上添加新属性时, 通过Vue.set方法或者以新对象替换老对象的方式来处理. 

