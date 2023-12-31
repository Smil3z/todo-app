import axios from "axios";
import { Grid } from "@mui/material";
import './TodoItem.css';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Card } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TodoItem(props) {
    const clickHandler = () => {
        console.log('You selected', props.todo.task);
        axios.delete(`/todolist/${props.todo.id}`).then((response) => {
            //Refresh
            props.getTodoList();
        }).catch((error) => {
            console.error(error);
            alert('something went wrong')
        })
    }

    const markComplete = () => {
        axios.put(`/todolist/${props.todo.id}`).then((response) => {
            props.getTodoList();
        }).catch((error) => {
            console.error(error);
            alert('something went wrong!');
        })
    }
    return (
        <Grid item xs={12} md={4}>
            <Card>
                <CardContent>
                <CardActions sx={{ padding:'20px', float:'right'}}>
                    <Button variant="outlined" color="error" onClick={clickHandler}>Delete</Button>
                    <Button variant='contained' onClick={markComplete}>Completed</Button>
                </CardActions>
                    <Typography variant='h3'>
                        {props.todo.task}
                    </Typography>
                    {
                        props.todo.completed === false && (
                            <p>Not Complete</p>
                        )
                        }
                </CardContent>
            </Card>
        </Grid>

    )
}

export default TodoItem;