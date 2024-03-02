import { FaTimes } from 'react-icons/fa'

const Task = ({ id, task }) => {
  return (
    <div className='task'>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <FaTimes style={{color: 'red', cursor: 'pointer'}}></FaTimes>
    </div>
  )
}

export default Task