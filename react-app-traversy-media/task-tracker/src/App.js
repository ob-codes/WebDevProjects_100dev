import { useState } from "react";
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [tasks, setTask] = useState ([
    {
      id : 1,
      text : 'build app',
      date: "2024-01-05",
      reminder : true,
    },
    {
      id : 2,
      text : 'give some charity',
      date: "2024-03-05",
      reminder : true,
    },
    {
      id : 3,
      text : 'buy a brand',
      date: "2024-02-11",
      reminder : true,
    },
  ]);
  
  const toggleForm = () => {
    console.log('form toggle')
    setShowForm(!showForm)
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000 +1);
    const newTask =  {id, ...task}
    setTask([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTask(tasks.map((task) => (task.id === id) ? ({...task, reminder: !task.reminder}) : task))
  }

  return (
    <div className="container">
      <Header onToggleForm={toggleForm} showForm={showForm} ></Header>
      {showForm && <AddTask onAddTask={addTask} ></AddTask>}
      {tasks.length ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>) : ('No task to show')}
    </div>
  );
}

export default App;
