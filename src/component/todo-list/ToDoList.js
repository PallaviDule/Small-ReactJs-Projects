import { useState } from 'react';
import './style.css';
import { componentMainDivStyle } from '../../css-class-constant/component-style';

const ToDoList = () => {
  const initialTaskState = {
    isDone: false,
    isEditing: false,
    text: ''
  }
  const [currentTask, setCurrentTaskValue] = useState(initialTaskState);
  const [editedId, setEditedId] = useState(null);
  const [list, setList] = useState({});

  const handleAddAndEditTask = (event) => {
    event.preventDefault();
    if(!currentTask.text.trim()) return;
    
    if(currentTask.isEditing && editedId){
        setList({...list, [editedId]: {...currentTask, isEditing: false}});
        setCurrentTaskValue(initialTaskState);
    } else {
        setList({...list, [Date.now()]: {...currentTask}});
        setCurrentTaskValue(initialTaskState);
        console.log('setList:', {...list, [Date.now()]: {...currentTask}});
    }
  }

  const removeTask = (id) => {
    const {[id]:_, ...rest} = list;
    setList({...rest});
  }

  const toggleEdit = (text,id) => {
    const editingTask = list[id];

    setCurrentTaskValue({...editingTask, isEditing:true, text});
    setEditedId(id);
  }

  const toggleDone = (key) => {
    const task = list[key];
    task.isDone =  !task.isDone;

    setList({...list, [key]: task});
  }

  return (
    <div className={componentMainDivStyle}>
          <label className="todo-header">ToDo List</label>
          <div className='grid grid-flow-col'>
            <div className='col-span-3 text-start m-3'>
              <div>
                  <form 
                    onSubmit={handleAddAndEditTask} 
                    className='text-center border border-blue-800 rounded-lg w-3/4 m-auto bg-blue-100 flex justify-between p-1 focus:border-4 relative'>
                    <input 
                      required
                      type='text' 
                      value={currentTask.text} 
                      onChange={e => setCurrentTaskValue({...currentTask, text: e.target.value})}
                      placeholder='Please add your task.'
                      className='focus:ring-blue-500 focus:border-blue-500 w-full relative p-2'
                    />  
                    <button type='submit'             
                      className='absolute end-2.5 text-white focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 bg-green-600 hover:bg-green-700 my-0.5'
                    >{currentTask.isEditing ? 'Update' : 'Add+'}</button>
                  </form>
                <ul className='text-start items-start w-3/4 m-auto my-4'>
                  {list && Object.entries(list).map(([key, value]) => (
                        <li key={key} className='flex justify-between'> 
                          <span
                            onClick={() => toggleDone(key)}
                            style={{
                              textDecoration: value.isDone ? 'line-through' : 'none',
                              cursor: 'pointer',
                              marginRight: '10px',
                            }}
                          > 
                              {value.text} 
                          </span>
                          <div>
                            <button onClick={() => toggleEdit(value.text, key)} className='border border-blue-800 rounded-lg m-1 p-1 text-end text-xs'>Edit</button>
                            <button onClick={() => removeTask(key)} className='border border-blue-800 rounded-lg m-1 p-1 text-end text-xs'>Remove</button>
                          </div>
                        </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ToDoList;