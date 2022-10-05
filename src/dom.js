import {format, formatDistance} from 'date-fns';
import { createProjectArray, projectsArray, createProject, createTodo} from "./internal";
import { projCounter,retrieveProj } from './storage';

let newProjectButton = document.getElementById("new-project");
let newTodoButton = document.getElementById("new-todo");
let todoForm = document.getElementById("todo-form");
let projectForm = document.getElementById("project-form");

//This adds a label on hover to new project and new todo buttons
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

//a div cleaner
const deleteAllChildEl = (el) => {
    let child = el.lastElementChild; 
        while (child) {
            el.removeChild(child);
            child = el.lastElementChild;
}; 
}

//forms display controls
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

//display list of all todos
const displayAllTodos = () => {
    let container = document.getElementById("proj-view");
    deleteAllChildEl(container);
    const heading = document.createElement('h1')
    heading.textContent = "All your tasks";
    todoAll.forEach(element => {
        
    });
};

//new project form button functionality
const createProjectButton = () => {
    let projectButton = document.getElementById("create-project-button");
    
    projectButton.addEventListener("click", () => {
       
        let title = document.getElementById("project-title").value;
        let description = document.getElementById("project-description").value;
        let dueDate = document.getElementById("project-dueDate").value;
        let priority = document.getElementById("project-priority-select").value;
        createProjectArray(title, description, dueDate, priority);
        closeProjectForm();
        projectListDisplay();
        
    });
    
};

const addProjectSelect = () => {
    
    let selectContainer = document.getElementById("project-dropdown");
    let select = document.createElement("select");
    let label = document.createElement("label");
    label.setAttribute ("for", "project-select");
    label.textContent = "Choose Project:";
    select.setAttribute ("id", "project-select");
    //retrieveProjArray();
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
    deleteAllChildEl(listContainer);
    for (let i=1; i>=projCounter; i++) {
        
        let tempArr = retrieveProj(i);
        createProject(tempArr);
        let loc = i-1;

        let name = tempArr[0];
        
        let entry = document.createElement("div");
        entry.textContent = name;
        entry.setAttribute("class", "project-entry");
        entry.addEventListener("click", ()=> { displayProjectDetails(i)})
        listContainer.appendChild(entry);
        };
    };

const displayProjectDetails = (id) => {
    let projectsContainer = document.getElementById("proj-view");
    deleteAllChildEl(projectsContainer);
        
       for (let i=1; i<=projectsArray.length;i++) {

   
        if (projectsArray[i].id===id) {
            console.log (projectsArray);

            let titleText=projectsArray[i].title;
            let titleP = document.createElement("div");
            titleP.setAttribute("class", "project-title");
            titleP.textContent=titleText;

            let priorityLabel=  document.createElement("div");
            priorityLabel.setAttribute("class", "priority-label")
            let priorityText = projectsArray[i].priority;
            priorityLabel.textContent = "Priority: " + priorityText;
            
            

            let dateLabel = document.createElement("div");
            let date = new Date (projectsArray[i].dueDate)
            let presentDay = new Date ();
            let dateInfo = formatDistance (presentDay, date);
            dateLabel.setAttribute("class", "date-label");
            dateLabel.setAttribute("class", "date-label");
            dateLabel.textContent = "This project must be completed in: "+dateInfo;
            
            let description = document.createElement("div");
            let descrpText = projectsArray[i].description;
            description.setAttribute("class", "project-description")
            description.textContent=descrpText;

            projectsContainer.appendChild(titleP);
            projectsContainer.appendChild(priorityLabel);
            projectsContainer.appendChild(dateLabel);
            projectsContainer.appendChild(description);
        }
    };
}


const domHandler = () => {
    projectListDisplay();
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