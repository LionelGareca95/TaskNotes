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
    <div className="w-5/6 ">

        <header className="flex justify-between items-center py-4 ">
            <h1>tasks {tasks.length}</h1>
            <Link to='/create-task' className="bg-indigo-600 px-2 py-1 rounded-md text-md">

                Create Task

            </Link>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                tasks.map(task => (
                    <div key={task.id} className="bg-neutral-800 p-4 rounded-md h-235 min-h-full " > 
                     <p className="w-235 min-w-full break-words">{task.description}</p>   
                        <div className="flex-col ">
                            <h3>{task.title}</h3>
                            <div className="flex gap-x-2">
                                <Link to={`/edit-task/${task.id}`}
                                    className="bg-zinc-600 px-2 py-1 text-sm rounded-md"
                                >
                                    Edit
                                </Link>
                                <button 
                                    onClick={() => handleDelete(task.id)}
                                    className="bg-red-500 px-2 py-1 text-sm rounded-md self-center">
                                    Delete
                                </button>
                                
                            </div>
                        </div>                       
                              
                    </div>
                    
                ))
                
            }
            
        </div>
     
    </div>
  )
}

export default TaskList