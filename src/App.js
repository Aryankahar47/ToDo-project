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
  const [tasks, setTasks] = useState([{
                                      title: "code",
                                      completed: false
                                      },
                                    {
                                      title: "eat",
                                      completed: false
                                      },
                                    {
                                      title: "sleep",
                                      completed:false
                                      }])
  const [input, setInput] = useState("")


  const [editInput, setEditInput] = useState(null)
 

  function handleToggle(index){
  const updatedTask = tasks.map((task, i)=>{
    if(i===index){
      return{
        ...task, completed: !task.completed
      };

    }
    return task;
  });
  setTasks(updatedTask);
}

function handleDelete(index){
  const deleteTask = tasks.filter((task, i)=>{
       if(i!==index){
        return true;
       }
       else{
        return false;
       }
  })
  setTasks(deleteTask)
}

function handleEdit(index){
  setInput(tasks[index].title);
  setEditInput(index);
}
  return(
    <div className="list">
      <h3 id="heading">Listings</h3>
      <div className="input">
        <input type="text" placeholder="Enter Task" value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button onClick={()=>{
        if(input.trim()===""){
          return
        }

        if(editInput===null){
          setTasks([...tasks, {
                            title: input,
                            completed: false
                             }]);

        }else{
          const updatedTask= tasks.map((task, i)=>{
            if(i===editInput){
              return{...task, title: input}
            }
            return task;
          })
          setTasks(updatedTask);
          setEditInput(null);
        }
        
        setInput("");
      }}>{editInput===null?"Add":"Update"}
      </button>
      </div>
      
      <ol >
        {tasks.map((task, index)=>(
          <li className="insideList" key={index} >
            <span>{task.title} </span>
            <div className="actions">
              <button onClick={()=> handleToggle(index)}>
                <span>
                  {task.completed?"completed":"Not completed"}
                </span>
            </button> 
         
          <button onClick={()=>handleEdit(index)}>Edit</button>
          <button onClick={()=> handleDelete(index)}>Delete</button>

            </div>
          
          </li>
          
          
        ))}
      </ol>

    </div>
  )

}

export default App;