const todoFactory = (title, description, dueDate, priority, id, projectID, status, creationDate) => {
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
    return {title, description, dueDate, priority, id, projectID, status, creationDate,addToProject, deleteTodo};
};

const projectFactory = (title, description, dueDate, priority, todosList, status, id, creationDate) => {
    const deleteProject = () => {
        let i = this.id;
        for (let n=0; n<projectsArray.length; n++) {
            if (projectsArray[n].id===i){
                projectsArray.splice(n,1);
            };
        };
    };
    return {title, description, dueDate, priority, todosList, status, id, creationDate, deleteProject};
    
};

let todoAll = [];
let projectsArray = [];
let todoCounter=0;
let projectCounter=0;

const createTodo = (title, description, dueDate, priority, projectID, status) => {
    todoCounter++;
    let id = todoCounter;
    let creationDate = new Date();
    let newTodo = todoFactory(title, description, dueDate, priority, id, projectID, status,creationDate);
    todoAll.push(newTodo);
}

const createProject = (title, description, dueDate, priority) => {
    projectCounter++;
    let id = projectCounter;
    let creationDate = new Date();
    let todosList = [];
    let status = "New";
    
    let newProject = projectFactory(title, description, dueDate, priority, id, todosList, status, creationDate);
    
    projectsArray.push(newProject);
};

if (projectsArray===[]){
    createProject("All tasks", "This is a list of all your tasks", "N/A", "Normal");
};


export {
    todoAll,
    projectsArray,
    createProject,
    createTodo
};