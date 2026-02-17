import { useState } from 'react'
import './App.css'
import Column from './components/Column'

function App() {
  // مصفوفة تجريبية للمهام
  const [tasks, setTasks] = useState([
    { id: 1, text: "تصميم واجهة المستخدم", status: "Tasks" },
    { id: 2, text: "إعداد مستودع GitHub", status: "In Progress" },
    { id: 3, text: "تعلم الـ Hooks", status: "Completed" },
    { id: 4, text: "تليغ مثال", status: "Tasks" },
  ]);

  return (
    <div className="app-container">
      <h1>Project Management Tool</h1>
      <div className="containers">
        {/* سنقوم هنا بتصفية المهام لكل عمود */}
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
  )
}

export default App