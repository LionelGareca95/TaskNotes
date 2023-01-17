import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../../features/task/taskSlice"
import { Link } from "react-router-dom"

function TaskList(){

   const tasks = useSelector( state => state.tasks)
   const dispatch = useDispatch()
   console.log(tasks)

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

  return (
    <div className="w-4/6 ">

        <header className="flex justify-beetwen items-center py-4">
            <h1>tasks {tasks.length}</h1>
            <Link to='/create-task'>

                Create Task

            </Link>
        </header>
        {
            tasks.map(task => (
                <div key={task.id}> 
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                    <Link to={`/edit-task/${task.id}`}>Edit</Link>
                </div>
            ))
        }
    </div>
  )
}

export default TaskList