import { useId } from 'react';

import '../styles/TaskBar.css';

export default function TaskBar(task: {name: string})
{   
    const taskId: string = useId();
    return(
        <>
            <div>
                <input type="checkbox" id={taskId} name={task.name}/>
                <label htmlFor={taskId}>{task.name}</label>
            </div>
        </>
    );
}