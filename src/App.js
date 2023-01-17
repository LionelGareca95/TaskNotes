
import './App.css';
import TaskForm from './app/components/TaskForm';
import TaskList from './app/components/TaskList';

function App() {

  return (
    <div className="App">
        <h1>Hola planeta</h1>

        <TaskForm/>
        <TaskList/>
    </div>
  );
}

export default App;
