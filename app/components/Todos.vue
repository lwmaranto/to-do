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
      <button v-if="!todo.completionDate" @click="todoCompleted">COMPLETED</button>
      <button v-else @click="uncompleteTodo">ADD ME BACK</button>
      </td>
    </tr>
  
</template>

<script>
import axios from "axios";
import moment from 'moment';
export default {
  name: 'Todos',
  props: {
    todo: Object,
  },
  emits: ['todo-complete'],
  methods: {
    todoCompleted() {
      //console.log('I WAS CLICKED')
      this.todo.completionDate = moment(Date.now()).format('LLLL')
      this.$emit('todo-complete', this.todo)
    },
    uncompleteTodo() {
      this.todo.completionDate = null
    }
  }  
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
