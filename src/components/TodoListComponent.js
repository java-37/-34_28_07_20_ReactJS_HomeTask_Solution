import React from 'react';
import withContext from '../context/withContext';
import TodoRowComponent from './TodoRowComponent';

function TodoListComponent(props) {
    return (
        <>
        {props.context.todos.map((todo,index) => <TodoRowComponent key={index} index={index}/>)}
        </>
    );
}

export default withContext(TodoListComponent);