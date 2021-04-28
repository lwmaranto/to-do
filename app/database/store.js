import axios from "axios";

export const completeTodo = async (todoId, todo) => {
  try {
    console.log("Made it to the store");
    const response = await axios.put(`/api/todos/${todoId}`, todo);
  } catch (error) {
    console.log(error);
  }
};
