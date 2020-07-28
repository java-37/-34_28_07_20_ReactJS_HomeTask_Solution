import React from 'react';
import withContext from '../context/withContext';

function ToDoRowComponent(props){
    return(
        <div style={{display:'flex'}}>
            <input 
            type="checkbox" 
            checked={props.context.todos[props.index].status}
            onChange={(e) => props.context.changeTodoStatus(props.index,e.target.checked)}
            />
            <span>{props.context.todos[props.index].title}</span>
            <button onClick={() => props.context.removeTodo(props.index)}>Remove</button>
        </div>
    );
}

export default withContext(ToDoRowComponent);