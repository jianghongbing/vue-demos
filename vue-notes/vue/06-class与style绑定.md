# class与style绑定

在Vue开发的项目中, 可以通过v-bind指令来对class和style属性来进行绑定. 不过Vue在对将v-bind用于class和style时, 做了专门的增强. v-bind表达式结果的类型除了字符串之外, 还可以是对象或数组. 其中v-bind:class还可以与普通的class同时存在, 不会覆盖普通class属性的值. class与style的绑定如果需要通过实例的data来控制, 推荐使用计算属性来绑定. 

## 组件上绑定class 

当在一个自定义组件上使用class property时, class将被添加到该组件的根元素上面. 并且根元素上已经存在的class不会被覆盖. 





