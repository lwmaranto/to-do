<template>
  <div>
    <h1>Todos</h1>

    <div class="todos">
      <h2>Completed Todos</h2>
      <h3 v-if="notCompletedTodos.length < 1">You finished all your todos!</h3>
      <table v-else>
        <tr>
          <th>TODO</th>
          <th>DUE DATE</th>
          <th>COMPLETED</th>
        </tr>
        <Todos
          v-for="todo in notCompletedTodos"
          :key="todo.id"
          :todo="todo"
          @todo-complete="complete"
        />
      </table>
      <h2>Completed Todos</h2>
      <h3 v-if="completedTodos.length < 1">You better get to work completing those todos!</h3>
      <table v-else>
         <tr>
          <th>TODO</th>
          <th>DUE DATE</th>
          <th>COMPLETED AT</th>
          <th>COMPLETED</th>
        </tr>
        <Todos
          v-for="todo in completedTodos"
          :key="todo.id"
          :todo="todo"
          @todo-complete="complete"
        />
      </table>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import axios from "axios";
import { onMounted } from "vue";
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    Todos,
  },

  setup() {
    //console.log(context.emits)
    const state = reactive({
      todos: [],
    });
    let completedTodos = computed(() => {
      return state.todos.filter((x) => {
        return x.completionDate !== null;
      });
    });

    let notCompletedTodos = computed(() => {
      return state.todos.filter((x) => {
        return x.completionDate === null;
      });
    });

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

   

    const complete = (value) => {
      console.log(state.todos);
    };

    onMounted(async () => {
      console.log("I MOUNTED");
      state.todos = await fetchTodos();
      console.log("THE TODOS", state.todos);
    });

    return {
      state,
      onMounted,
      fetchTodos,
      completedTodos,
      notCompletedTodos,
      //completeTodo,
      complete,
    };
  },
};
</script>

<style>
body {
  background: #d8e2dc;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
  /* background-image: linear-gradient(#3C4858, white); */
}

.todos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 75% */
}

table {
  width: 75%;
}
</style>
