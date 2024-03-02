import { useState } from "react";
import Header from "./components/Header";
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTask] = useState ([
    {
      id : 1,
      text : 'build app',
      day: 'Monday',
      reminder : true,
    },
    {
      id : 2,
      text : 'give some charity',
      day: 'Tuesday',
      reminder : true,
    },
    {
      id : 3,
      text : 'buy a brand',
      day: 'Friday',
      reminder : true,
    },
  ]);

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
