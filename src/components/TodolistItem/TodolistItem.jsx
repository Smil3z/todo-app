import axios from "axios";
import './TodolistItem.css';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TodolistItem(props) {
    const clickHandler = () => {
        console.log('You selected', props.todo.task);
        axios.delete(`/todolist/${props.todo.id}`).then((response) => {
            //Refresh
            props.getTodolistList();
        }).catch((error) => {
            console.error(error);
            alert('something went wrong')
        })
    }

    const markComplete = () => {
        axios.put(`/todo/${props.todo.id}`).then((response) => {
            props.getTodolistList();
        }).catch((error) => {
            console.error(error);
            alert('something went wrong!');
        })
    }
    return (
        <Grid item xs={12} md={4}>
            <CardContent>
                <Typography variant='h3'>
                    {props.todo.task}
                </Typography>
            </CardContent>
            <CardActions sx={{ padding:'20px', float:'right'}}>
                {
                    props.todo.complete === false && (
                        <Button variant="outlined" onClick={clickHandler}>Incomplete</Button>
                    )

                }
                <Button variant='contained' onClick={markComplete}>Completed</Button>
            </CardActions>
        </Grid>

    )
}

export default TodolistItem;