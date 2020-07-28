import React from 'react';
import {AppContext} from './app-context';

export default class AppContextProvider extends React.Component{
    state = {
        todos:[]
    }

    addTodo = (todo) => {
        this.setState({...this.state,todos:[...this.state.todos,{title:todo,status:false}]});
    }

    removeTodo = (index) => {
        const tmp = [...this.state.todos];
        tmp.splice(index,1);
        this.setState({...this.state,todos:[...tmp]});
    }

    changeTodoStatus = (index,isDone) => {
        const tmp = [...this.state.todos];
        tmp[index] = {...tmp[index],status:isDone};
        this.setState({...this.state,todos:[...tmp]});
    }

    render(){
        return(
            <AppContext.Provider value={{
                todos:[...this.state.todos],
                addTodo:this.addTodo,
                removeTodo:this.removeTodo,
                changeTodoStatus:this.changeTodoStatus
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}