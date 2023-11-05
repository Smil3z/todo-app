import { useState } from "react";
import axios from "axios";

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
            <form onSubmit={sendTodolistToServer}>
                Task: <input value={task} onChange={(e) => setTask(e.target.value)} />
                    <p>{task}</p>
                    <br />
                {/*Completed <input value={completed} onChange={(e) => setCompleted(e.target.value)}></input>*/}
                <p>{completed}</p>
                <button>Submit</button>
            </form>
        </>
    )
}

export default TodoForm;