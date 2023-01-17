import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import { addTask, editTask } from "../../features/task/taskSlice";
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {

  const [task, setTask] = useState({
      title: '',
      description: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {

    if(params.id) {
      dispatch(editTask(task))
    } else {
    e.preventDefault()
    dispatch(addTask({
      ...task,
      id: uuid(),    
    }))
  }
    navigate("/")
  }

  useEffect( () => {
    if(params.id) {
      setTask(tasks.find((task) => task.id === params.id))
    }
  }, [])
  return (
    <form onSubmit={handleSubmit}>
        <input 
        name="title" 
        type="text" 
        placeholder="title" 
        onChange={handleChange}
        value={task.title}
        />
        <textarea 
        name="description" 
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        ></textarea>

        <button>Save</button>
    </form>
  )
}

export default TaskForm