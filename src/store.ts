import { createStore } from 'vuex'

const store = createStore({
    state: {
        tasks: JSON.parse(localStorage.getItem("tasks") || "[]")
    },
    mutations: {
     createTask(state, task) {
         state.tasks.push(task)

         localStorage.setItem("tasks", JSON.stringify(state.tasks))
     }
    },
    actions: {
        createTask({commit}, task) {
            commit("createTask", task)
        }
    },
    getters: {
        tasks: state => state.tasks,
        taskById: state => id => state.tasks.find(t => t.id === id)
    }
})

export default store