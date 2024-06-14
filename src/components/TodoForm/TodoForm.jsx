import { useState } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";

import { Button } from "@mui/material";

import { TextField } from "@mui/material";

function TodoForm(props) {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState("");

  const sendTodolistToServer = (event) => {
    event.preventDefault();

    console.log("sendTodolistToServer", task);
    axios
      .post("/todolist", {
        task: task,
        completed: setCompleted,
      })
      .then((response) => {
        console.log(response.data);
        setTask("");
        setCompleted("");
        props.getTodoList();
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!!");
      });
  };
  return (
    <>
      <br />
      <Typography fontSize={30} align="center">
        Todo List
      </Typography>
      <br />
      <Grid>
        <form fontSize={30} align="center" onSubmit={sendTodolistToServer}>
          Task:
          <TextField
            size="small"
            value={task}
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setTask(e.target.value)}
            color="secondary"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "10%" }}
          >
            Submit
          </Button>
          <br />
        </form>
      </Grid>
    </>
  );
}

export default TodoForm;
