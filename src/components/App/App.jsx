// useEffect is a function provided by React
import { useState, useEffect } from 'react';
import axios from 'axios';
import TodolistItem from '../TodolistItem/TodolistItem.jsx';

function App () {
  // useState creates a variable that will automatically update on
  // the DOM (webpage).
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // This code will run on page load (when the component displayed)
    console.log('in useEffect');
    // On page load, get list of todo items
    getTodoList();
  }, []);

  // This function gets todo items from the server and updates
  // a variable in state.
  const getTodoList = () => {
    console.log('getTodoList');
    // TODO: axios.get
    axios.get('/todolist').then((response) => {
      // Logging the server response which is the list of todo items
      console.log(response.data);
      setTodoList(response.data);
    }).catch((error) => {
      console.log('error with GET', error);
      alert('Something went wrong');
    })
  }

  return (
    <div>
      <h1>TO DO APP</h1>
      {/* TODO: Replace with .map, stringify is for debugging only. */}
      {JSON.stringify(todoList)}
    </div>
  );

}

export default App
