import React from 'react';
import './App.css';
import AppContextProvider from './context/AppContextProvider';
import AddTodoComponent from './components/AddTodoComponent';
import TodoListComponent from './components/TodoListComponent';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <AddTodoComponent/>
        <hr/>
        <TodoListComponent/>
      </div>
    </AppContextProvider>
  );
}

export default App;
