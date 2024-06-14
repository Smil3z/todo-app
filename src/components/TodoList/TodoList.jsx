import TodoItem from "../TodoItem/TodoItem";
import { Grid } from "@mui/material";

function TodoList(props) {
  return (
    <>
      <Grid>
        {props.todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              getTodoList={props.getTodoList}
              todo={todo}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default TodoList;
