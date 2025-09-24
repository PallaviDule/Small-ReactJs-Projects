import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";

const TaskList = ({taskList, setTaskList, toggleEdit}) => {
    const removeTask = (id) => {
        const {[id]:_, ...rest} = taskList;
        setTaskList({...rest});
    }

    const toggleDone = (key) => {
        const task = taskList[key];
        const updatedTask = { ...task, isDone: !task.isDone };
        setTaskList({ ...taskList, [key]: updatedTask });
    }

    return (
        <div className='todo-list-wrap'>
        <ul className='todo-list'>
            {
                Object.entries(taskList)
                .sort(([_aId, a], [_bId, b]) => {
                    if (a.isDone !== b.isDone) {
                        return a.isDone ? 1 : -1; // uncompleted first
                    }
                    return (a.text || '').localeCompare((b.text || ''), undefined, { sensitivity: 'base' });
                })
                .map(([key, value]) => (
                <li key={key} className={`flex justify-between items-center todo-item ${value.isDone ? 'completed' : ''}`}> 
                    <label className='flex items-center cursor-pointer gap-2 task-label'>
                        <input
                            type='checkbox'
                            className='task-checkbox'
                            checked={Boolean(value.isDone)}
                            onChange={() => toggleDone(key)}
                        />
                        <span className='task-text'>
                            {value.text}
                        </span>
                    </label>
                    <div className='todo-actions inline'>
                        <button onClick={() => toggleEdit(value.text, key)} className='action-btn edit' title='Edit task'>
                            <RiEditBoxLine size={18} />
                        </button>
                        <button onClick={() => removeTask(key)} className='action-btn delete' title='Remove task'>
                            <RiDeleteBin5Line size={18}/>
                        </button>
                        </div>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default TaskList