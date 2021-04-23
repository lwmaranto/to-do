<template>
  
    <tr class="todo">
      <td>
      {{todo.todo}}
      </td>
      <td>
      {{todo.dueDate}}
      </td>
      <td>
      {{todo.completionDate}}
      </td>
      <td>
      <button @click="todoCompleted">COMPLETED</button>
      </td>
    </tr>
  
</template>

<script>
import axios from "axios";

export default {
  name: 'Todos',
  props: {
    todo: Object,
  },
  emits: ['todo-complete'],
  methods: {
    todoCompleted() {
      //console.log('I WAS CLICKED')
      this.$emit('todo-complete')
    }
  },
// setup() {
//  function todoCompleted() {
//    console.log('I WAS CLICKED')
//    this.$emit('todo-complete')
//  }
// return {
//   // complete
//   todoCompleted
// }
// }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  border-style: dotted;
  padding: 5px;
  width: 20%
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
