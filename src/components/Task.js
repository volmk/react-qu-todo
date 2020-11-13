import React, {useState} from 'react';

function useTaskValue() {
    const [hover, setHover] = useState(false)

    return {
        hover,
        bind: {
            onMouseEnter: () => setHover(true),
            onMouseLeave: () => setHover(false),
        }
    }
}

function useTrashValue(){
    const [hover, setHover] = useState(false)

    return {
        hover,
        bind: {
            onMouseEnter: () => setHover(true),
            onMouseLeave: () => setHover(false),
        }
    }
}

const Task = ({text, done}) => {
    const useTask = useTaskValue()
    const useTrashIcon = useTrashValue()

    const taskClasses = ['task']
    const taskSettingsClasses = ['task-settings']
    if (useTask.hover) {
        taskClasses.push('task-hover')
        taskSettingsClasses.push('task-settings-hover')
    }
    const trashIconClasses = ['fas', 'fa-trash', 'task-settings-icon']
    if (useTrashIcon.hover){
        trashIconClasses.push('task-trash-icon-hover')
    }

    return (
        <div className={taskClasses.join(' ')} {...useTask.bind}>
            <div className="task-info">
                <input className='task-check' type="checkbox" checked={done}/>
                <span>{text}</span>
            </div>
            <div className={taskSettingsClasses.join(' ')}>
                <i className={trashIconClasses.join(' ')} {...useTrashIcon.bind}/>
            </div>
        </div>
    );
};

export default Task;