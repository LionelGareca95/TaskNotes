
import './App.css';
import { useSelector } from 'react-redux';
import TaskForm from './app/components/TaskForm';
import TaskList from './app/components/TaskList';

function App() {

  const tasksState = useSelector( state => state.tasks)
  console.log(tasksState)

  return (
    <div className="App">
        <h1>Hola planeta</h1>

        <TaskForm/>
        <TaskList/>
    </div>
  );
}

export default App;
