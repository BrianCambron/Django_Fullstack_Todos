import React, { Component } from 'react';



class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      isComplete: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
  this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
      <form className="col-12 col-md-6 mb-5" onSubmit={(event) => this.props.addTodo(event, this.state)}>
        <div className="form-group">
          <label htmlFor="name">Todos</label>
          <input type='text' className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;
