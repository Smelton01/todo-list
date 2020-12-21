import React, { Component } from 'react'
// import React, { Component } from 'react'
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import {v4 as uuidv4} from "uuid";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "first one",
        completed: false
      },
      {
        id: uuidv4(),
        title: "second one",
        completed: false
      }
    ]
  }

  // componentDidMount(){
  //   const storedTodos = localStorage.getItem("todoApp.todos"); 
  //   if(storedTodos){
  //     this.setState({todos: storedTodos});
  //   }
  //   console.log(storedTodos);
  // }

  toggleComplete = (id) => {
    
      this.setState({
        todos:this.state.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });    
    }
    
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(), 
      title, 
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <Todos 
            todoList={this.state.todos} 
            toggleComplete={this.toggleComplete} 
            delete={this.delTodo} 
          />
          <AddTodo addTodo={this.addTodo}/>
        </div>
        
      </div>
    )
  }
}
export default App