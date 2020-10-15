import React from 'react';

function TodoItem(props){
  // console.log(props.todo.isComplete);
  return(
    <ul className="list-group mb-3 col-12">
     <li className="list-group-item" style={{textDecoration: props.todo.isComplete ? "line-through" : ""}}>
       <div className="d-flex">
         <input onClick={() => props.editTodo(props.todo.name, props.todo.id)}type="checkbox" id="name"/>
         <h5>{props.todo.name}</h5>
       </div>
        <button className="btn btn-danger"onClick={() => props.deleteTodo(props.todo.id)} type="button">Delete</button>
     </li>
   </ul>
  )

}




function TodoList(props){
  const todos = props.todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={props.deleteTodo} editTodo={props.editTodo}/>);
  return(
    <React.Fragment>
      <div>
        {todos}
      </div>
    </React.Fragment>
  )
}
export default TodoList;
