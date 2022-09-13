import { todoAll, projectsArray, createProject} from "./internal";

let newProjectButton = document.getElementById("new-project");
let newTodoButton = document.getElementById("new-todo");
let todoForm = document.getElementById("todo-form");
let projectForm = document.getElementById("project-form");

const displayLabel = () => {
    let todoLabel = document.getElementById("todo-label");
    let projectLabel = document.getElementById("project-label");
    newProjectButton.addEventListener("mouseover", () => {
        projectLabel.style.display = "block";
    });
    newProjectButton.addEventListener("mouseout", () => {
        projectLabel.style.display = "none";
    });
    newTodoButton.addEventListener("mouseover", () => {
        todoLabel.style.display = "block";
    });
    newTodoButton.addEventListener("mouseout", () => {
        todoLabel.style.display = "none";
    });
}


const deleteAllChildEl = (el) => {
    let child = el.lastElementChild; 
        while (child) {
            el.removeChild(child);
            child = el.lastElementChild;
}; 
}

const displayProjectForm = () => {
    newProjectButton.addEventListener("click", () => {
        projectForm.style.display = "block";
});
};

const closeProjectForm = () => {
    document.getElementById("create-project-form").reset();
    projectForm.style.display = "none";
};


const closeProjectButton = () => {
    let closeNewProject = document.getElementById("close-project-new");
    closeNewProject.addEventListener("click", () => {
        closeProjectForm();
    });
};

const displayTodoForm = () => {
    newTodoButton.addEventListener("click", () => {
        todoForm.style.display = "block";
});
};
const closeTodoForm = () => {
    document.getElementById("create-todo-form").reset();
    todoForm.style.display = "none";
};


const closeTodoButton = () => {
    let closeNewTodo = document.getElementById("close-todo-new");
    closeNewTodo.addEventListener("click", () => {
        closeTodoForm();
    });
};

const displayAllTodos = () => {
    let container = document.getElementById("proj-view");
    deleteAllChildEl(container);
    const heading = document.createElement('h1')
    heading.textContent = "All your tasks";
    todoAll.forEach(element => {
        
    });
};

const createProjectButton = () => {
    let projectButton = document.getElementById("create-project-button");
    
    projectButton.addEventListener("click", () => {
       
        let title = document.getElementById("project-title").value;
        let description = document.getElementById("project-description").value;
        let dueDate = document.getElementById("project-dueDate").value;
        let priority = document.getElementById("project-priority-select").value;
        createProject(title, description, dueDate, priority);
        closeProjectForm();
        console
    });
    
};

const createTodoButton = () => {
    let todoButton = document.getElementById("create-todo-button");
        todoButton.addEventListener("click", () => {
        let title = document.getElementById("todo-title").value;
        let description = document.getElementById("todo-description").value;
        let dueDate = document.getElementById("todo-dueDate").value;
        let priority = document.getElementById("todo-priority-select").value;
        createProject(title, description, dueDate, priority);
        closeProjectForm();
        console
    });
    
};


const domHandler = () => {
    displayLabel();
    displayProjectForm();
    displayTodoForm();
    closeProjectButton();
    closeTodoButton();
    createProjectButton();
};


export {
    domHandler
};