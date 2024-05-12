import React from 'react';
import Todos from "./Todos.js";
//import Services from '../../services/todosService';


const TodoList = ({todos}) => {
  console.log({todos});
  return (
    <Todos />
    // <div>
    //      {todos.map(todo => ( //maps over each of the todos, and
    //      <Todos key={todo.id} {...todo} />   //refers to each individually for server communication, spreads in the props for each
    //    ))}       
    //  </div>
  );
}

 export default TodoList;