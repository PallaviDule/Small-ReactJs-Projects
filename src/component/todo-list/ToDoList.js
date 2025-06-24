import { useState } from 'react';
import './style.css';
import { componentMainDivStyle } from '../../css-class-constant/component-style';
import TaskList from './TaskList';

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
          <div className='text-3xl font-bold p-2 m-2'> ToDo List</div>
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
                  {list && 
                    <TaskList
                      taskList={list}
                    />
                  }
              </div>
            </div>
          </div>
    </div>
  )
}

export default ToDoList;