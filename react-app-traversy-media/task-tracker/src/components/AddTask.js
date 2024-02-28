//each input has component level state
import { useState } from "react"

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text){
      alert('Enter some task!!!')
      return
    }
    onAddTask({text, date, reminder});

    setText('');
    setDate('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>      
      <div className="form-control">
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => {setReminder(e.currentTarget.checked)}}/>
      </div>
      <input type="submit" value='Save Task' className="btn btn-block" />
    </form>
  )
}

export default AddTask