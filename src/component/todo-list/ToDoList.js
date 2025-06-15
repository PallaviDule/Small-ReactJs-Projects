import { useState } from 'react';
import './style.css';

const ToDoList = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [list, setList] = useState([]);

  const handleAddNewTask = (event) => {
    event.preventDefault();
    if(!currentValue.trim()) return;
    
    setList([...list,{text:currentValue.trim(), isDone: false, isEditing: false}]);
    setCurrentValue('');
    console.log('setList:', list);
  }

  const removeTask = (index) => {
    const updatedTask = list.filter((_, i) => i !== index);
    setList(updatedTask);
  }

  const toggleEdit = (index) => {
    const task = [...list];
    task[index].isEditing =  !task[index].isEditing;

    setList(task);
  }

  const editTask = (index, newValue) => {
    const tasks = [...list];
    tasks[index].text = newValue;

    setList(tasks);
  }

  const toggleDone = (index) => {
    const task = [...list];
    task[index].isDone =  !task[index].isDone;

    setList(task);
  }

  return (
    <div className='todo-container'>
          <div className="todo-header">ToDo List</div>
          <div className='grid grid-flow-col'>
            <div className='col-span-1 m-3'>
              <ul>
                <li key='addNewTask'><button onClick={() => setShowNewTask(true)}>Add Task </button></li>
              </ul>
            </div>
            <div className='col-span-3 text-start m-3'>
              <label>List</label>
              <div>
                {showNewTask && 
                  <form onSubmit={handleAddNewTask}>
                    <input 
                      type='text' 
                      value={currentValue} 
                      onChange={e => setCurrentValue(e.target.value)}
                      className='border border-blue-800 rounded-lg'/>  
                    <button type='submit' className='m-2'>Add</button>
                  </form>
                }
                <ul className='text-start items-start'>
                  {list && list.map((value, index) =>
                    (
                      value.isEditing ? 
                      (
                        <li key={index}>
                          <input 
                            type='text' 
                            value={value.text}
                            onChange={(event) => editTask(index, event.target.value)}
                            className='border border-blue-800 rounded-md'/>
                          <button onClick={() => toggleEdit(index)}>Update</button>
                        </li>
                      ) : (
                        <li key={index} className='flex justify-between'> 
                          <span
                            onClick={() => toggleDone(index)}
                            style={{
                              textDecoration: value.isDone ? 'line-through' : 'none',
                              cursor: 'pointer',
                              marginRight: '10px',
                            }}
                          > 
                              {value.text} 
                          </span>
                          <div>
                            <button onClick={() => toggleEdit(index)} className='border border-blue-800 rounded-lg m-1 p-1 text-end text-xs'>Edit</button>
                            <button onClick={() => removeTask(index)} className='border border-blue-800 rounded-lg m-1 p-1 text-end text-xs'>Remove</button>
                          </div>
                        </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ToDoList;