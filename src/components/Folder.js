import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {isMobile} from "react-device-detect";
import {useHistory} from "react-router-dom";

function useFolderValue(defaultValue, folderId) {
    const [onHover, setOnHover] = useState(defaultValue)
    const history = useHistory();
    return {
        value: onHover,
        hover: {
            onMouseEnter: () => setOnHover(true),
            onMouseLeave: () => setOnHover(false),
            onClick: () => history.push(`/f/${folderId}`)
        }
    }

}

const Folder = ({id, title, itemsCount, descr}) => {
    const useFolder = useFolderValue(false, id)
    const folderClasses = ['folder']
    const itemsCountClasses = ['folder-items-count']
    const folderArrowClasses = ['fas', 'fa-arrow-right', 'folder-arrow']
    if (useFolder.value || isMobile) {
        folderClasses.push('folder-hover')
        itemsCountClasses.push('folder-items-count-hover')
        folderArrowClasses.push('folder-arrow-hover')
    }
    return (
        <div className={folderClasses.join(' ')} {...useFolder.hover}>
            <div className="folder-content">
                <p className="folder-title">{title}</p>
                <p className="folder-descr">{descr}</p>
            </div>
            <div className="folder-info">
                <p className={itemsCountClasses.join(' ')}>{itemsCount}</p>
                <span className={folderArrowClasses.join(' ')}></span>
            </div>
        </div>
    );
};

Folder.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    itemsCount: PropTypes.number,
    descr: PropTypes.string
}

export default Folder;