import { todoAll, projectsArray} from "./internal";

let newProjectButton = document.getElementById("new-project");
let newTodoButton = document.getElementById("new-todo");

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
} 
}

const displayTodoForm = () => {
    
};

const displayAllTodos = () => {
    let container = document.getElementById("proj-view");
    deleteAllChildEl(container);
    const heading = document.createElement('h1')
    heading.textContent = "All your tasks";
    todoAll.forEach(element => {
        
    });
};


export {
    displayLabel
}