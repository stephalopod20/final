//creating the API request to retrieve the Todos
//import { useState, useEffect } from "react";
//import TodoList from "../components/todos/TodoList";

const API_ENDPOINT = 'https://6605d5ddd92166b2e3c2df20.mockapi.io/api/week12/todos';

//CRUD operation: READ (HTTP verb GET)
export const getTodos = async () => {
    try {
        const res = await fetch(API_ENDPOINT);
        if (!res.ok) {  //if response is NOT okay, throw an error
            throw new Error("Error with network response.");
        }
        return await res.json(); //if response is okay, returns the todos fetched
    } catch (error) {
        console.error("Issue fetching todos:", error);
        throw error;
    }
};



// function Services() {
//     const [todos, setTodos] = useState([]); //uses an empty array for the state from the API
//     //state for input field for new todo names
//     const [todoName, setTodoName] = useState('');
//  const getTodos = async () => {    //async function to fetch todos from API
//     //"READ"
//     const res = await fetch(`${API_ENDPOINT}`) //fetches from api
//     const fetchedTodos = await res.json(); //converts response to json
//     setTodos(fetchedTodos); //updates todos state with fetched todos
//   };

// //Add Task button function; "CREATE"
//  const addTodo = async () => {
//     if (todoName) {  //checking the name is not empty
//       const newTodo = {
//         name: todoName,
//         completed: false,
//       };
//       try {
//         await fetch(`${API_ENDPOINT}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json', 
//           },
//           body: JSON.stringify(newTodo), //stringify to send data via internet
//         });

//         getTodos();     //rerenders the page
//         } catch (error) {
//           console.log(error.message);
//         }

//         setTodoName(''); //clears input field for good user experience
//       } else {
//         alert('Whoops, nothing is entered!');
//       }
// };

// //checkbox feature; "UPDATE"
//  const checkTodo = async (id, completed) => {  //specifies a particular to-do and its status
//     try {   //best practice is to use try/catch with async/await
//       await fetch(`${API_ENDPOINT}/${id}`, {   //using the second param to specify http method since default is get
//         method: 'PUT',
//         headers: {
//           'Content-Type': "application/json"
//         },
//         body: JSON.stringify({ completed: !completed }), //toggles when clicked
//       });

//       getTodos();   //rerenders the page for updates
//     } catch (error) {
//       console.log(error.message);
//     }
//  };

//  const deleteTodo = async (id) => { //"DELETE"
//     try {
//       await fetch(`${API_ENDPOINT}/${id}`, {  //deleting the specified task
//         method: 'DELETE'
//       });

//       getTodos(); //rerenders the page for updates
//     } catch (error) {
//       console.log(error.message);
//     }
//  };

//  useEffect(() => {
//     getTodos(); //calling todo function when component mounts
//   }, []);  //empty array means run every time the page loads

//   return (
//     <div className="App">
//       <h1 style={{textAlign: 'center'}}>To-Do App</h1> {/* input field for new tasks; the event setToDoName grabs the user input */}
//         <input 
//           type='text' 
//           placeholder='task'
//           value={todoName}
//           onChange={(e) => setTodoName(e.target.value)}> 
//           </input>
//         <button onClick={addTodo}>Add Task</button>
//       <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>  {/* receives the info passed down, and setting the props for todos */}
//     </div>
//   );
// };

// export default Services();