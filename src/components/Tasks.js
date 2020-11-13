import React, {Fragment} from 'react';
import {Link, useParams} from "react-router-dom";
import FolderData from "../database";
import Task from "./Task";

const Tasks = () => {
    let {folderId} = useParams();
    const folder = FolderData.getFolder(parseInt(folderId))
    return (
        <Fragment>
            {(() => {
                if (!folder) {
                    return (<p className="title">Folder not found :(</p>)
                }
                return (
                    <Fragment>
                        <p className="title">{folder.title}</p>
                        <p className="tasks-folder-descr">{folder.descr}</p>
                    </Fragment>
                )
            })()}


            <div className="tasks-content">
                <Link to='/'>
                    <div className="text-center link">
                        <i className="fas fa-long-arrow-alt-left"/> Folders
                    </div>
                </Link>
                <div className='task-list'>
                    {folder && folder.tasks.map(task => {
                        return <Task
                            key={task.id}
                            text={task.text}
                            done={task.done}
                        />
                    })}
                </div>
            </div>


        </Fragment>
    )
};

export default Tasks;