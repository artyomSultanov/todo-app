import React from 'react';
// import { uuid } from 'uuidv4';
import { TodoList, TodoFilter } from './components/todo-list';
import TodoForm from './components/todo-form';

// console.log(uuid());
function App() {
  return (
    <div className="App">
      <TodoForm/>
      <TodoFilter/>
      <TodoList/>
    </div>
  );
}

export default App;
