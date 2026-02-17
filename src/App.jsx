import { useState } from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import './App.css'
import Column from './components/Column'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "تصميم واجهة المستخدم", status: "Tasks" },
    { id: 2, text: "إعداد مستودع GitHub", status: "In Progress" },
    { id: 3, text: "تعلم الـ Hooks", status: "Completed" },
  ]);

  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      status: "Tasks"
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const onDragEnd = (result) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app-container">
        <h1>Project Management Tool</h1>
        <form onSubmit={addTask} className="add-task-form">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Add a new task..."
          />
          <button type="submit">Add Task</button>
        </form>
        <div className="containers">
          <Column 
            title="Tasks" 
            className="box-1" 
            tasks={tasks.filter(t => t.status === "Tasks")} 
          />
          <Column 
            title="In Progress" 
            className="box-2" 
            tasks={tasks.filter(t => t.status === "In Progress")} 
          />
          <Column 
            title="Completed" 
            className="box-3" 
            tasks={tasks.filter(t => t.status === "Completed")} 
          />
      </div>
      </div>
    </DragDropContext>
  )
}

export default App