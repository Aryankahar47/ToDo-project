// import { useEffect, useState } from "react";
import "./App.css";
import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   // Fetch data from backend
//   useEffect(() => {
//     fetch("http://localhost:3001/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data));
//   }, []);

//   return (
//     <div>
//       <h1>Todo App</h1>

//       {todos.length === 0 ? (
//         <p>No Todos Found</p>
//       ) : (
//         todos.map((todo) => (
//           <div key={todo.id}>
//             <h3>{todo.title}</h3>
//             <p>{todo.completed ? "✅ Completed" : "❌ Not Completed"}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default App;





function App(){
  const [tasks, setTask] = useState(["Code", "Eat", "Sleep", "repeat"])
  const [input, setInput] = useState("")
  return(
    <div className="list">
      <h3 id="heading">Listings</h3>
      <input type="text" placeholder="Enter Task" value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button onClick={()=>{
        if(input.trim()===""){
          return
        }
        setTask([...tasks, input]);
        setInput("");
      }}>Add</button>
      <ol>
        {tasks.map((task, index)=>(
          <li key={index} className="task-item">{task}</li>
        ))}
      </ol>

    </div>
  )

}

export default App;