import React from 'react';

export const AppContext = React.createContext({
    todos:[],
    addTodo:() => {},
    removeTodo:() => {},
    changeTodoStatus:() => {}
});