## Core

### State
  1. 不要直接修改 State,应该使用 setState(),构造函数是唯一可以给 this.state 赋值的地方
  2. State 的更新可能是异步的,出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。 
  解决异步的问题是setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数
  3. State 的更新会被合并，合并是浅合并，Object.assign(Obj, { attr }) ?

### 数据是向下流动的
  - 通常会被叫做“自上而下”或是“单向”的数据流

### 事件处理
  - React 事件的命名采用小驼峰式（camelCase），而不是纯小写
  - 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串
  - 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为，必须显式的使用 preventDefault 。
  - 使用 React 时，你一般不需要使用 addEventListener 为已创建的 DOM 元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可
  - 关于this,推荐构造函数中绑定this,Create React App脚手架也默认启动了箭头函数绑定语法,第三种是回调中使用箭头函数，此语法问题在于每次渲染 该组件 时都会创建不同的回调函数，大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染，通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题
  - 向事件处理程序传递参数
  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
  - 在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。

### 条件渲染
  - 可以使用变量来储存元素。它可以帮助你有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。
  - 通过花括号包裹代码，你可以在 JSX 中嵌入任何表达式。
  - 与运算符 && 之所以能这样做，是因为在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
  - 三目运算符
  - 如果条件变得过于复杂，那你应该考虑如何提取组件。
  - 阻止组件渲染 若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
  - 在组件的 render 方法中返回 null 并不会影响组件的生命周期。

### 列表 & Key
 - 渲染多个组件 可以通过使用 {} 在 JSX 内构建一个元素集合
 - key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。
 - 元素的 key 只有放在就近的数组上下文中才有意义
 - key 只是在兄弟节点之间必须唯一
 - key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值：
 ``` javascript
 const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
 );
 ```
 - 上面例子中，Post 组件可以读出 props.id，但是不能读出 props.key
 - 如果一个 map() 嵌套了太多层级，那可能就是你提取组件的一个好时机。

### 表单
  - 在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state
  - 大多数情况下，使用 JavaScript 函数可以很方便的处理表单的提交， 同时还可以访问用户填写的表单数据。实现这种效果的标准方式是使用“受控组件”。
  - 受控组件 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。
  - 对于受控组件来说，每个 state 突变都有一个相关的处理函数。这使得修改或验证用户输入变得简单。
  - 你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项
  - 文件 input 标签 在 HTML 中，<input type="file"> 允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 File API 进行控制。因为它的 value 只读，所以它是 React 中的一个非受控组件。
  - 处理多个输入,当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作
  - 在受控组件上指定 value 的 prop 会阻止用户更改输入。如果你指定了 value，但输入仍可编辑，则可能是你意外地将value 设置为 undefined 或 null

  * 处理表单插件 [formik](https://jaredpalmer.com/formik/docs/overview#installation)
  * 验证配套插件 [Yup]()