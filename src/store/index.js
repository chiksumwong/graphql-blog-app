import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    //gobal data -> todos
    state: {
        isAuth:false
        // todos: [],

        // newTodo: {
        //     id: null,
        //     title: '',
        //     completed: false
        // }
    },
    //change state
    mutations: {
        // getTodos(state, todos) {
        //     state.todos = todos;
        // },
        // completeTodo(state, todo) {
        //     todo.completed = !todo.completed;
        // },
        // deleteTodo(state, index) {
        //     state.todos.splice(index, 1);
        // },
        // addTodo(state, todo) {
        //     state.todos.push(todo);
        // }
    },
    //call to use, like 'this.$store.dispatch('action_name');
    //it wil connect api to CURD the database 
    //then call mutations to change the gobal data in state
    actions: {
        // //selete
        // getTodos(store) {
        //     Vue.axios.get('http://api.test/api/todos').then(response => {
        //         console.log('Select from todo', response.data);
        //         store.commit('getTodos', response.data);
        //     })
        // },

        // //change the completed state
        // completeTodo(store, todo) {
        //     Vue.axios.patch('http://api.test/api/todos/'+todo.id+'/completed').then(response => {
        //         store.commit('completeTodo', todo);
        //     })
        // },

        // //delete
        // deleteTodo(store, payload) {
        //     Vue.axios.delete('http://api.test/api/todos/'+payload.todo.id+'/delete').then(response => {
        //         console.log("delete result", response.data, payload.index)
        //         store.commit('deleteTodo', payload.index)
        //     })
        // },

        // //create
        // addTodo(store, todo) {
        //     Vue.axios.post('http://api.test/api/todos/create', {
        //         title: todo.title
        //     }).then(response => {
        //         console.log("create data", response.data)
        //         store.commit('addTodo', response.data);
        //     })

        //     store.state.newTodo = {
        //         id: null,
        //         title: "",
        //         completed: false
        //     };
        // }
    }

    
})