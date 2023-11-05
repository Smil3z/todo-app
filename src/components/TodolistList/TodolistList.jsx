import TodolistItem from "../TodolistItem/TodolistItem";
import { Grid } from "@mui/material";

function TodolistList (props) {

    return (
        <>
            <h1>To Do List</h1>

        <Grid>
            {
                props.TodolistList.map((todo) => {
                    return <TodolistItem key={todo.id} getTodoList={props.getTodoList}todo={todo} />
                })
            }
        </Grid>
        </>
    )
}

export default TodolistList