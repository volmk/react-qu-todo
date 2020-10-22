import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import Folder from "./Folder";

const Folders = ({folders}) => {
    return (
       <Fragment>
           <p className="title">Your folders</p>
           <div className='folder-list'>
               {folders.map(folder => {
                   return <Folder
                       key={folder.id}
                       id={folder.id}
                       title={folder.title}
                       descr={folder.descr}
                       itemsCount={folder.itemsCount}
                   />
               })}
           </div>
       </Fragment>
    );
};

Folders.propTypes = {
    folders: PropTypes.array
}

export default Folders;