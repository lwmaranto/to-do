import axios from "axios";

export const updateTodoCompletion = async (todoId, todo) => {
  try {
    const response = await axios.put(`/api/todos/${todoId}`, todo);
  } catch (error) {
    console.log(error);
  }
};
