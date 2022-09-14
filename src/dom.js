import {  projectsArray, createProject, createTodo} from "./internal";

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
        addProjectSelect();
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
        projectListDisplay();
        console
    });
    
};

const addProjectSelect = () => {
    
    let selectContainer = document.getElementById("project-dropdown");
    let select = document.createElement("select");
    let label = document.createElement("label");
    label.setAttribute ("for", "project-select");
    label.textContent = "Choose Project:";
    select.setAttribute ("id", "project-select");
    
    projectsArray.forEach(element => {
    
        let projtitle = element.title;
        let option = document.createElement("option");
        option.setAttribute("value", element.id);
        option.textContent = projtitle;
        select.appendChild(option);
    });
    selectContainer.appendChild(label);
    selectContainer.appendChild(select);
}

const createTodoButton = () => {
        let todoButton = document.getElementById("create-todo-button");
        todoButton.addEventListener("click", () => {
        let title = document.getElementById("todo-title").value;
        let description = document.getElementById("todo-description").value;
        let dueDate = document.getElementById("todo-dueDate").value;
        let priority = document.getElementById("todo-priority-select").value;
        let projectID = document.getElementById("project-select").value;
        createTodo(title, description, dueDate, priority, projectID);
        closeTodoForm();
        console
    });
    
}

const projectListDisplay = () => {
    let listContainer = document.getElementById("project-list-container");
    projectsArray.forEach(el => {
        if (el.id>1) {
            let name = el.title;
            let entry = document.createElement("div");
            entry.textContent = name;
            entry.addEventListener("click", ()=> { alert ("oui")})
        };
    });
}


const domHandler = () => {
    
    displayLabel();
    displayProjectForm();
    displayTodoForm();
    closeProjectButton();
    closeTodoButton();
    createProjectButton();
    createTodoButton()
};


export {
    domHandler
};