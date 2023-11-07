import { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import CardActions from "@mui/material";
import CardContent from "@mui/material";
import Card from "@mui/material";
import Container from "@mui/material";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Padding } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Input } from "@mui/material";
import {TextField } from "@mui/material";


function TodoForm(props) {
    const [task, setTask] = useState('');
    const [completed, setCompleted] = useState('');

    const sendTodolistToServer = (event) => {
        event.preventDefault();

        console.log('sendTodolistToServer', task);
        axios.post('/todolist', {
            task: task,
            completed: setCompleted,
        }).then((response) => {
            console.log(response.data);
            setTask('');
            setCompleted('');
            props.getTodoList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong!!');
        })
    }
    return(
        <>
            <h2>Todo List</h2>
            <Grid>
                <form onSubmit={sendTodolistToServer}>
                    Task:<TextField size="small"><Input value={task} id="outlined-basic" variant="outlined" onChange={(e) => setTask(e.target.value)} 
                        color="secondary" focused="true"/></TextField><Button  type="submit" variant="contained" color="primary" style={{ width: "10%" }}>Submit</Button>
        
                    <p>{task}</p>
                    <br/>
                    <p>{completed}</p>
                </form>
            </Grid>
        </>
    )
}

export default TodoForm;