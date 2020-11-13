class FolderData {
    constructor(title, descr, id = new Date()) {
        this.id = id
        this.title = title
        this.descr = descr
    }

    get itemsCount() {
        return this.tasks.length
    }

    get tasks() {
        return _tasks.filter(task => task.folderId === this.id)
    }

    static getFolder(folderId) {
        return _folders.filter(folder => folder.id === folderId)[0]
    }

    static add(folder) {
        _folders.push(folder)
    }

    static getAll() {
        return _folders
    }

    static remove(folder) {
        _folders = _folders.filter(id => id !== folder.id)
    }
}

class TaskData {
    constructor(text, folderId) {
        this.id = new Date()
        this.done = false
        this.text = text
        this.folderId = folderId
    }

    remove() {
        _tasks = _tasks.filter(id => id !== this.id)
    }
}

let _folders = [new FolderData('f2', 'lorem 01', 1),
    new FolderData('f3', 'asdfkjaf', 2),
    new FolderData('f11289 1234', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', 3),

    new FolderData('f4', 'New one', 4),
]
let _tasks = [
    new TaskData('t1', 1),
    new TaskData('t2', 1),
    new TaskData('t3', 4),
]

export default FolderData