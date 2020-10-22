import React from 'react';
import FolderData from "../database";
import Folders from "./Folders";
import Tasks from "./Tasks";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    const userFolders = FolderData.getAll()
    return (
        <Router>
            <div className="app">
                <div className="app-wrap">
                    <p className='site-title'>Qu To Do</p>
                    <Switch>
                        <Route exact path="/">
                            <Folders folders={userFolders}/>
                        </Route>
                        <Route path='/f/:folderId'>
                            <Tasks/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
