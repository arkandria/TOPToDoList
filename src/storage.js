let projCounter;
let taskCounter;

const testStorage= () => {
    const testProjCount = (localStorage.getItem('projCounter') == null);

    if (testProjCount)  {
        window.localStorage.setItem('projCounter', "0")
        projCounter = 0;
    } else {
        let see = window.localStorage.getItem('projCounter')
        projCounter=see;
    };
    const testTaskCount = (localStorage.getItem('taskCounter') == null);

    if (testTaskCount)  {
        window.localStorage.setItem('taskCounter', "0")
        taskCounter = 0;
    } else {
        let see = window.localStorage.getItem('taskCounter')
        projCounter=see;
    };
};




const storeProj= (array) => {
    let pId = "proj"+array[4];
    console.log(pId);
    window.localStorage.setItem(pId, JSON.stringify(array));
    window.localStorage.setItem('projCounter', projCounter)
}

const storeTask= (array) => {
    const tempTaskjArr = array;
    taskCounter++;
    let tId = "task"+taskCounter;
    window.localStorage.setItem(tId, JSON.stringify(tempTaskArr));
}


const retrieveProj= (id) => {
    let name = "proj"+id;
    console.log(name);
    return JSON.parse(window.localStorage.getItem(name));
    }

const retrieveTask= (id) => {
    let name = "task"+id;
    let storedTaskArray= JSON.parse(window.localStorage.getItem(name));
    return storedTaskArray;
}




export {
    testStorage,
    retrieveProj,
    retrieveTask,
    storeProj,
    storeTask,
    projCounter,
};