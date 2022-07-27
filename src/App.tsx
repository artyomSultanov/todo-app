import React, { useState } from 'react';
// import { uuid } from 'uuidv4';
import { TodoList, TodoFilter } from './components/todo-list';
import TodoForm from './components/todo-form';
import { filterOptions } from 'components/todo-list/';

// console.log(uuid());
function App() {
  const [indexOption, setIndexOptions] = useState(0)

  return (
    <div className="App">
      <TodoForm/>
      <TodoFilter onFilterClick={(indexOption: number) => setIndexOptions(indexOption)}/>
      <TodoList indexOption={indexOption}/>
    </div>
  );
}

export default App;
