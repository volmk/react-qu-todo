import React from 'react';
import {useParams} from "react-router-dom";

const Tasks = () => {
    let {folderId} = useParams();
    return <h3>Requested folder ID: {folderId}</h3>;
};

export default Tasks;