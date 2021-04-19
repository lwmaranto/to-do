<template>
  <div>
    <h1>Todos</h1>
    <h2>Completed Todos</h2>
    <table>
      <Todos v-for="todo in notCompletedTodos"  :key="todo.id" :todo="todo" />
    </table>
    <h2>Completed Todos</h2>
    <table>
      <Todos v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
    </table>
    
  </div>
</template>

<script>
import { reactive, computed} from "vue";
import axios from "axios";
import { onMounted } from "vue";
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    Todos,
  },
  // data() {
  //   return {
  //     todos: state.todos
  //   }
  // }, 
  setup() {
    const state = reactive({
      todos: [],

      
    });

    let completedTodos = computed(() => {
      return state.todos.filter((x)=> {
        return x.completionDate !== null
      })
    })

    let notCompletedTodos = computed(() => {
      return state.todos.filter((x)=> {
        return x.completionDate === null
      })
    })

    async function fetchTodos() {
      try {
        const resp = await axios.get("/api/todos");
        const todos = resp.data;
        console.log(todos);
        return todos;
      } catch (error) {
        console.log("Something went wrong");
      }
    }

    onMounted(async () => {
      console.log("I MOUNTED")
      state.todos = await fetchTodos();
      console.log("THE TODOS", state.todos);
    });

    return {
      state,
      onMounted,
      fetchTodos,
      completedTodos,
      notCompletedTodos
    };
  }
  // ,
  // computed: {
  //   returnCompleted() {
  //     let completedTodos = []
  //     for (todo of this.todos) {
  //       if (todo.completionDate !== null) {
  //         completedTodos.push(todo)
  //       }
  //     }
  //     return completedTodos
      
  //   },
  //   returnNotCompleted() {
  //     let NotCompletedTodos = []
  //     for (todo of this.todos) {
  //       if (todo.completionDate === null) {
  //         NotCompletedTodos.push(todo)
  //       }
  //     }
  //     return NotCompletedTodos
  //   }
  // }
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
