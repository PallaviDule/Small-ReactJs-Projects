import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";

const TaskList = ({taskList, setTaskList, toggleEdit}) => {
    const removeTask = (id) => {
        const {[id]:_, ...rest} = taskList;
        setTaskList({...rest});
    }

    const toggleDone = (key) => {
        const task = taskList[key];
        task.isDone =  !task.isDone;

        setTaskList({...taskList, [key]: task});
    }

    return (
        <ul className='text-start items-start w-3/4 m-auto my-4'>
            {
                Object.entries(taskList).map(([key, value]) => (
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
                    <button onClick={() => toggleEdit(value.text, key)} className='m-1 p-1'>
                        <RiEditBoxLine size={20} />
                    </button>
                    <button onClick={() => removeTask(key)} className='m-1 p-1'>
                        <RiDeleteBin5Line size={20}/>
                    </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TaskList