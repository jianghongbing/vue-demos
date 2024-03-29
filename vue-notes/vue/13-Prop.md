# Prop

Prop是在组件上注册的自定义attribute. 在组件实例中, 可以通过props选项来定义组件接收哪些在组件上定义的attribute作为组件的prop, 组件的prop会作为组件实例的属性. 一个组件默认可以拥有任意数量的prop, 任何值都可以传递给任何prop, 在组件内部可以通过this去直接访问属性.

## 给Prop传值 

直接给prop attribute传递某个值, 都会被作为字符串; 通过v-bind+属性名的形式, 最后表达式的值会作为prop的值, 如果想为属性传递任何非字符串的值或者v-bind后面表达式的值依赖某个data, computed属性的值都必须使用v-bind的形式来传递值. 可以通过v-bind="某个对象"的形式一次为多个属性传递值. 

## Prop验证

组件实例选项props用于注册属性, props的值可以是一个字符串数组, 这种定义方式无法为定义的prop进行验证; props的值也可以是一个对象, 该对象中键值对的key就是定义的属性名, 当键值对的值是一个类型的值的时候, 那个该属性的类型就是该类型; 如果键值对的值是一个对象时, 对象中可以定义多个选项来验证Prop, 当传递给组件的prop的值不符合注册时的规则, Vue会在控制提示错误或者警告信息. 验证的选项参考下面的说明: 

* type: 用于定义该属性的值的类型, 可以为Number, String, Boolean, Array, Object, Date, Function, Symbol 或者自定义的类型, 类型的值可以为其中的一个或者多个. 
* default: 属性默认值, 如果传了值给该属性, 属性的值为传进来的值; 如果没有传值给属性, 属性的值为默认值. 
* require: 是否必选要为该属性设置值. 
* validator: 自定义验证函数, 常见的场景是属性的值必须为某个数组中的其中一个值

## 非Prop的 Attribute

非Prop的Attribute指定是在组件实例选项props中没有注册该attribute的属性, 但是使用组件组件时, 给该组件传递了该attribute. 一般情况下, 该attribute最终会被添加到该组件的根元素上. 可以通过在组件实例选项中设置inheritAttrs: false来阻止根元素继承attribute, 配合组件的$attrs可以手动将attribute赋值给指定的元素. 

## 数据单向流 

一般情况下, 组件的prop都由其父组件传递过来的, 使得其父子形成了一个单向下行绑定. 父组件中的该prop的更新会向下流动到子组件中; 但是反过来则不行, 这样会防止从子组件意外变更父级组件的状态, 从而导致应用的数据流向难以理解. 每次父级组件中的数据发生变更时, 子组件中所有的prop都将会刷新为最新的值, 子组件会被重新渲染. 因此不应该在一个子组件内部改变prop的值. 如果这样做了, Vue会在浏览器的控制台中发出警告. 

## prop的双向绑定

一般情况下通过数据的单向流的方式去更改prop的值, 但有时候又希望在子组件中去改变prop的值, 这种情况可以通过触发update事件去更改. 使用方式可以参考如下: 
在父组件中通过下面的方式来为子组件设置prop
```html
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
>
</text-document>
```
在子组件中通过触发update事件去更改prop的值. 
```javascript
this.$emit('update:title', 'haha')
```

### .sync修饰符

上面的方式为子组件设置prop的方式过于繁琐, vue提供了.sync修饰符可以达到简写的目的. sync修饰符的v-bind不能和表达式一起使用. 
```html
<text-document
  v-bind:title.sync="doc.title"
>
</text-document>
```

### 用一个对象同时设置多个prop

```html
<text-document
  v-bind.sync="doc"
>
</text-document>
```
在自组件中触发的方式和上面的一致. 





