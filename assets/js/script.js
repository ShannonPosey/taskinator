// Stop at 4.2.4 right at Add task type dropdown

var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    // give it a class name
    taskInfoE1.className = "task-info";

    // add HTML content to div
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemE1.appendChild(taskInfoE1);

    // add entire list item to list
    tasksToDoE1.appendChild(listItemE1);
};

formE1.addEventListener("submit", createTaskHandler);
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


