/**
 * 声明式渲染
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
});
//使用 Object.freeze()，这会阻止修改现有的 property。
var obj = { foo: 'bar' };
Object.freeze(obj);
new Vue({
    el: '#app-e',
    data: obj
});

/**
 * 条件与循环
 */
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})

/**
 * 处理用户输入
 */
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

/**
 * 组建化应用构建
 */
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    // todo-item 组件现在接受一个"prop"，类似于一个自定义 attribute。这个 prop 名为 todo。
    props: ['todo'],
    template: '<span>{{ todo.text }}、</span>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})
