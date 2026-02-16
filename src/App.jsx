import './App.css'
import Column from './components/Column'

function App() {
  return (
    <div className="app-container">
      <h1>Project Management Tool</h1>
      <div className="containers">
        <Column title="Tasks" className="box-1" />
        <Column title="In Progress" className="box-2" />
        <Column title="Completed" className="box-3" />
      </div>
    </div>
  )
}

export default App