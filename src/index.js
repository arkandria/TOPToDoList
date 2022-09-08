import { format} from 'date-fns'

const todoFactory = (title, description, dueDate, priority, notes, id, projectID, status, creationDate) => {
    const deleteTodo = () => {
        let i = this.id;
        for (let n=0; n<todoAll.length; n++) {
            if (todoAll[n].id===i){
                todoAll.splice(n,1);
            };
        };
    }
    const addToProject = (projectId) => {
        let t = this.id;
        for (let n=0; n<projectsArray.length; n++) {
            if (projectsArray[n].id===projectID){
                projectsArray[n].todoslist.push(t);
            };
        };
    }
    return {title, description, dueDate, priority, notes, id, projectID, status, creationDate};
};

const projectFactory = (title, description, dueDate, priority, notes, todosList, status, id, creationDate) => {
    const deleteProject = () => {
        let i = this.id;
        for (let n=0; n<projectsArray.length; n++) {
            if (projectsArray[n].id===i){
                projectsArray.splice(n,1);
            };
        };
    return {title, description, dueDate, priority, notes, todosList, status, id, creationDate};
    };
};

const todoAll = [];
const projectsArray = [];
const todoCounter=0;
const projectCounter=0;

const createTodo = (title, description, dueDate, priority, notes, projectID, status) => {
    todoCounter++;
    let id = todoCounter;
    let creationDate = new Date();
    let newTodo = todoFactory(title, description, dueDate, priority, notes, id, projectID, status,creationDate);
    todoAll.push(newTodo);
}

const createProject = (title, description, dueDate, priority, notes) => {
    projectCounter++;
    let id = projectCounter;
    let creationDate = new Date();
    let todosList = [];
    let status = "New";
    let newProject = projectFactory(title, description, dueDate, priority, notes, id, todosList, status, creationDate);
    projectsArray.push(newProject);
};
