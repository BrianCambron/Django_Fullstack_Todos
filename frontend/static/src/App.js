import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Cookies from 'js-cookie';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }
  componentDidMount(){
    fetch('api/v1/')
    .then(response => response.json())
    .then(data => this.setState({todos: data}))
    .catch(error => console.log('Error:', error));
  }

  addTodo(event, data){
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    fetch('api/v1/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
  .then(response => response.json())
  .then(data => {
    const todos = [...this.state.todos, data];
    this.setState({todos})
  })
  }
  deleteTodo(id){
    fetch(`api/v1/${id}`, {
      method: 'DELETE',
    })
  .then(response => response)
  .then(data => {
    const todos = [...this.state.todos]
    console.log('todos', todos)
    const index = todos.findIndex(todo => todo.id === id)
    todos.splice(index,1);
    this.setState({todos})
  })
  .catch(error => console.log("Error:", error));
  }

  editTodo(data, id){
    fetch(`api/v1/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data,
        isComplete: true,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const todos = [...this.state.todos];
      const index = todos.findIndex(todo => todo.id === id);
      todos[index] = data;
      this.setState({todos})

    })
    .catch(error => console.log('Error:', error));
  }

  render(){
    return(
      <div>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
      </div>
    )
  }
}
export default App;
