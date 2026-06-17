import { useEffect, useState } from "react";
import './App.css';

function App(){
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [taskInput, setTaskInput] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addtask(){
        if (taskInput.trim() === "") {
            return;
        }
        const newTasks = [{
           text: taskInput.trim(),
            completed: false
            }, ...tasks];

        setTasks(newTasks);
        setTaskInput("");
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((task, currentIndex) => {
            return currentIndex !== index;
        });
        setTasks(updatedTask);
    }

    function completedTask(index){
        const updatedTasks = tasks.map((task, currentIndex) => {
            if(currentIndex === index){
                return{
                    ...task,
                    completed: !task.completed
                }
            }else{
                return task;
            }
        })
        setTasks(updatedTasks);
    }
    return(
        <div className="todo-container">
            <h1>My ToDo App</h1>
<div className="input-section">
            <input 
            type = "text"
            placeholder="type task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => {
               if (e.key === "Enter") {
                    addtask();
                }
            }}
            />

            <button onClick={addtask}>Add Task</button>
</div>
<p>Total Tasks: {tasks.length}</p>
<p>Completed Tasks: {tasks.filter(task => task.completed).length}</p>
<p>Remaining Tasks: {tasks.length - tasks.filter(task => task.completed).length}</p>
            <p>Your Tasks:</p>
            {tasks.length === 0 && (
  <p>📝 No tasks yet. Add one above!</p>
)}
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className="task-item">
                           <span className={task.completed ? "completed" : ""}>
                            {task.text}
                            </span>
                           <button onClick={() => completedTask(index)}>{task.completed ? "Undo" : "Complete"}</button>
                            <button onClick={() => deleteTask(index)}>Delete</button>
                            </li>
                    ))}
                </ul>
            
        </div>
    )
}
export default App;