
import React, { useMemo, useState } from "react";
import './../styles/App.css';

const todoData = [
  { todo: "Todo 1", completed: true },
  { todo: "Todo 2", completed: false },
  { todo: "Todo 3", completed: true },
  { todo: "Todo 4", completed: false },
  { todo: "Todo 5", completed: true },
  { todo: "Todo 6", completed: false },
  { todo: "Todo 7", completed: true },
  { todo: "Todo 8", completed: false },
  { todo: "Todo 9", completed: true },
  { todo: "Todo 10", completed: false },
  { todo: "Todo 11", completed: true },
  { todo: "Todo 12", completed: false },
  { todo: "Todo 13", completed: true },
  { todo: "Todo 14", completed: false },
  { todo: "Todo 15", completed: true },
  { todo: "Todo 16", completed: false },
  { todo: "Todo 17", completed: true },
  { todo: "Todo 18", completed: false },
  { todo: "Todo 19", completed: true },
  { todo: "Todo 20", completed: false },
  { todo: "Todo 21", completed: true },
  { todo: "Todo 22", completed: false },
  { todo: "Todo 23", completed: true },
  { todo: "Todo 24", completed: false },
  { todo: "Todo 25", completed: true },
  { todo: "Todo 26", completed: false },
  { todo: "Todo 27", completed: true },
  { todo: "Todo 28", completed: false },
  { todo: "Todo 29", completed: true },
  { todo: "Todo 30", completed: false },
  { todo: "Todo 31", completed: true },
  { todo: "Todo 32", completed: false },
  { todo: "Todo 33", completed: true },
  { todo: "Todo 34", completed: false },
  { todo: "Todo 35", completed: true },
  { todo: "Todo 36", completed: false },
  { todo: "Todo 37", completed: true },
  { todo: "Todo 38", completed: false },
  { todo: "Todo 39", completed: true },
  { todo: "Todo 40", completed: false },
  { todo: "Todo 41", completed: true },
  { todo: "Todo 42", completed: false },
  { todo: "Todo 43", completed: true },
  { todo: "Todo 44", completed: false },
  { todo: "Todo 45", completed: true },
  { todo: "Todo 46", completed: false },
  { todo: "Todo 47", completed: true },
  { todo: "Todo 48", completed: false },
  { todo: "Todo 49", completed: true },
  { todo: "Todo 50", completed: false },
];


const App = () => {
  const [todos] = useState(todoData);
  const [filter, setFilter] = useState("all");

  const filteredData = useMemo(()=>{
    if(filter === 'active') return todos.filter(todo => todo.completed === false);
    if(filter === 'completed') return todos.filter(todo => todo.completed === true);
    return todos;
  }, [todos, filter])
  console.log(filteredData);
  return (
    <div>
        <button onClick={()=>{setFilter("all")}}>All</button>
        <button onClick={()=>{setFilter("active")}}>Active</button>
        <button onClick={()=>{setFilter("completed")}}>Completed</button>
        <h1>Note: List is artificially slowed down!</h1>

        <ul>
          {
            filteredData.map((todo, index) => {
              return <li key={index} style={{textDecoration: todo.completed ? "line-through": "none"}}>{todo.todo}</li>
            })
          }
        </ul>
    </div>
  )
}

export default App
