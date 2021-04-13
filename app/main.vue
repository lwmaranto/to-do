<template>
<div>
  <h1>
    Todos
  </h1>
<Todos />
</div>
  
 
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
import { onMounted } from "vue";
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    Todos,
  },
  setup() {
    const state = reactive({
      todos: []
    });

    async function fetchTodos() {
      try {
         const resp = await axios.get('/api/todos')
         const todos = resp.data
         console.log(todos)
         return todos
      } catch (error) {
        console.log('Something went wrong')
      }
    }

    onMounted(async () => {
      state.todos = await fetchTodos()
      console.log("THE TODOS", state.todos)
    })

    return {
      state,
      onMounted,
      fetchTodos
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
