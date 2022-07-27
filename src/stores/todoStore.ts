import { makeAutoObservable } from "mobx"
import { TodosType, TodoType } from "models/types"
import { v4 as uuidv4 } from 'uuid'

class TodoStore {
  todos: TodosType = [{
    id: '12312421412',
    title: 'Купить хлеб',
    completed: false
  },{
    id: '1221412',
    title: 'Дописать тестовое',
    completed: false
  },{
    id: '312421412',
    title: 'Залить тестовое на гитхаб',
    completed: false
  }]

  constructor () {
    makeAutoObservable(this)
  }

  readTodo (todo: TodoType) {
    console.log('readTodo');
    
    todo.completed = !todo.completed
  }
  
  deleteTodo (id: string) {
    console.log('deleteTodo');
    this.todos = this.todos.filter((todo: TodoType) => todo.id !== id)
  }
  
  addTodo (title: string) {
    console.log('addTodo');
    const newTodo: TodoType = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.todos.push(newTodo)
  }
}

const todoStore = new TodoStore()
export default todoStore