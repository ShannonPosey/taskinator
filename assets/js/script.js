// Stop at 4.1.8 right after the video

var buttonE1 = document.querySelector("#save-task");
// console.log(buttonE1);

var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task";
    tasksToDoE1.appendChild(listItemE1);
};

buttonE1.addEventListener("click", createTaskHandler);
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


