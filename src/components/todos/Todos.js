 import React from 'react';
 import './Todos.css';
// import {getTodos} from '../../services/todosService';
//   import { useEffect, useState } from 'react';
//   import TodoList from './TodoList';

const Todos = () => {
  return <div className='todos'>
    This project
  </div>;
};
export default Todos;

// const Todos = () => {
//   const [todos, setTodos] = useState([]);
//   //const [loading, setLoading] = useState(false);

//   const fetchTodos = async () => {
//     try {
//       setLoading(true);
//       const todos = await getTodos();  //retrieves todos
//       setTodos(todos);    //sets the todos in the empty State array
//     } catch (error) {
//       console.error(error);
//     // } finally {
//     //   setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);  //it will only run one time since there is no other dependency

//   return (
//     <div className='todos'>
//       <TodoList todos={todos} />
//     </div>
//   )
// };
// export default Todos;

// const Todo = ({id, name, completed, checkTodo, deleteTodo}) => {  //inherits all the parent method props
//   return (   <li>
//     <input 
//       type="checkbox" 
//       checked={completed} 
//       onChange={Services(checkTodo(id, completed))}/>
//     <span 
//       style= {{
//        textDecoration: completed ? "line-through" : "none", 
//        }}
//     >
//       {name}
//     </span>
//     <button onClick={Services(deleteTodo(id))}>Delete</button>
//   </li>)
// };


// export default Todo;