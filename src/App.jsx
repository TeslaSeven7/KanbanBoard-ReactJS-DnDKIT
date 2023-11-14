import './App.css'
import KanbanBoard from './components/KanbanBoard'
import NavBar from './components/NavBar'
import SidePanel from './components/SidePanel'

function App() {
  return (
    <div className="flex">
      <SidePanel />
      <div className="w-full">
        <NavBar />
        <KanbanBoard />
      </div>
    </div>
  )
}

export default App
