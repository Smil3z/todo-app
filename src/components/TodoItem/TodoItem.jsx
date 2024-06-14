import React from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./TodoItem.css";

const TodoCard = (props) => {
  const handleMarkComplete = (event) => {
    event.preventDefault();
    axios
      .put(`/todolist/${props.todo.id}`)
      .then((response) => {
        props.getTodoList();
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!");
      });

    console.log("Turning Green", props.todo.task);
    if (props.todo.completed === true) {
      event.target.style.backgroundColor = "green";
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardContent sx={{ padding: "20px" }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="h3">{props.todo.task}</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="error"
                onClick={props.clickHandler}
              >
                Delete
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleMarkComplete}>
                Completed
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

function TodoItem(props) {
  const clickHandler = () => {
    console.log("You selected", props.todo.task);
    axios
      .delete(`/todolist/${props.todo.id}`)
      .then((response) => {
        props.getTodoList();
      })
      .catch((error) => {
        console.error(error);
        alert("something went wrong");
      });
  };

  return (
    <TodoCard
      todo={props.todo}
      getTodoList={props.getTodoList}
      clickHandler={clickHandler}
    />
  );
}

export default TodoItem;
