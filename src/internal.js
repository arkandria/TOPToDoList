import {storeProj, retrieveProj, projCounter} from './storage'

const todoFactory = (title, description, dueDate, priority, id, projectID, status) => {
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
    return {title, description, dueDate, priority, id, projectID, status,addToProject, deleteTodo};
};

const projectFactory = (title, description, dueDate, priority, todosList, status, id) => {
    const deleteProject = () => {
        let i = this.id;
        for (let n=0; n<projectsArray.length; n++) {
            if (projectsArray[n].id===i){
                projectsArray.splice(n,1);
            };
        };
    };
    return {title, description, dueDate, priority, todosList, status, id, deleteProject};
    
};

let todoAll = [];
let projectsArray = [];
let todoCounter=0;


const createTodo = (title, description, dueDate, priority, projectID) => {
    todoCounter++;
    let id = todoCounter;
    
    let status = "New";
    let newTodo = todoFactory(title, description, dueDate, priority, id, projectID, status);
    todoAll.push(newTodo);
    projectsArray.forEach(element => {
       if ((element.id===newTodo.projectID)&&(element.id>1)||element.id===1){
         element.todosList.push(newTodo.id);
       } 
    });
    console.log(todoAll);
    console.log(projectsArray);
};

const createProjectArray = (title, description, dueDate, priority) => {
    projCounter++;
    let id = projCounter;
    let todosList = [];
    let status = "New";
    let array = [title, description, dueDate, priority, id, todosList, status];
    console.log(array);
    storeProj(array);
    console.log(id);
};


const createProject = (title, description, dueDate, priority) => {
    
    

    
    let newProject = projectFactory(title, description, dueDate, priority, todosList, status, id);
    
    projectsArray.push(newProject);
    //storeProjArray();
    //testProjects();
};

const initialProject =() => {
    
    if (projCounter===0){
        
        createProjectArray("General view", "This is a list of all your tasks", "N/A", "Normal");
        
    };
    
}
/*
const storeProjArray= () => {
    alert("storing!");
    const myProjectsArr = projectsArray;
    window.localStorage.setItem('projects', JSON.stringify(myProjectsArr));
}

const retrieveProjArray= () => {
    alert("retrieving!");
    const storedProjArray= JSON.parse(window.localStorage.getItem('projects'));
    projectsArray = storedProjArray;
}
const testProjects= () => {
    const itemSet = (localStorage.getItem('projects') !== null);

    if (itemSet)  {
        console.log(localStorage.getItem('projects'));
    }
};
*/

export {
    createProjectArray,
    projectsArray,
    createProject,
    createTodo,
    initialProject
};