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

  const toggleEdit = (text,id) => {
    const editingTask = list[id];

    setCurrentTaskValue({...editingTask, isEditing:true, text});
    setEditedId(id);
  }

  return (
    <div className={`${componentMainDivStyle} todo-container`}>
          <div className='todo-header'>ToDo List</div>
          <div className='todo-body'>
              <form 
                onSubmit={handleAddAndEditTask} 
                className='todo-form'>
                <input 
                  required
                  type='text' 
                  value={currentTask.text} 
                  onChange={e => setCurrentTaskValue({...currentTask, text: e.target.value})}
                  placeholder='Please add your task.'
                  className='todo-input'
                />  
                <button type='submit' className={`todo-submit ${currentTask.isEditing ? 'update' : 'add'}`}>
                  {currentTask.isEditing ? 'Update' : 'Add'}
                </button>
              </form>
              {list && 
                <TaskList
                  taskList={list}
                  setTaskList = {setList}
                  toggleEdit = {toggleEdit}
                />
              }
          </div>
    </div>
  )
}

export default ToDoList;