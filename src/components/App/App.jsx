// useEffect is a function provided by React
import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "../TodoForm/TodoForm.jsx";
import TodoList from "../TodoList/TodoList.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import { Container } from "@mui/material";

function App() {
  // useState creates a variable that will automatically update on
  // the DOM (webpage).
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // This code will run on page load (when the component displayed)
    console.log("in useEffect");
    // On page load, get list of todo items
    getTodoList();
  }, []);

  // This function gets todo items from the server and updates
  // a variable in state.
  const getTodoList = () => {
    console.log("getTodoList");
    // TODO: axios.get
    axios
      .get("/todolist")
      .then((response) => {
        // Logging the server response which is the list of todo items
        console.log(response.data);
        setTodoList(response.data);
      })
      .catch((error) => {
        console.log("error with GET", error);
        alert("Something went wrong");
      });
  };

  return (
    <Container maxWidth="lg">
      <TodoForm getTodoList={getTodoList} />
      <TodoList getTodoList={getTodoList} todoList={todoList} />
    </Container>
  );
}

export default App;
