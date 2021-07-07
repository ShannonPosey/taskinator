// Stop at 4.2.8 right at Reset the form

var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formE1.reset();

    // package up data as an abject
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskE1
    createTaskE1(taskDataObj);
};

var createTaskE1 = function(taskDataObj){
    // create list item
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    // give it a class name
    taskInfoE1.className = "task-info";
    // add HTML content to div
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name +"</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemE1.appendChild(taskInfoE1);

    // add entire list item to list
    tasksToDoE1.appendChild(listItemE1);
};

formE1.addEventListener("submit", taskFormHandler);
//  {
//     // 1. Created a new HTML element specified by tagname 
//     var listItemE1 = document.createElement("li");
//     // 2. Styles specific class element
//     listItemE1.className = "task-item";
//     // 3. Added the text
//     listItemE1.textContent = "This is a new task.";
//     // 4. adds the text to the end of the DOM tree
//     tasksToDoE1.appendChild(listItemE1);
// }


