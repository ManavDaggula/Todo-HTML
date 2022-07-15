const table = document.getElementById("task-table");
const add_button = document.getElementById("add-task");
const remove_button = document.getElementById("remove-task");

function add_task(){
    // window.alert("Button Pressed");
    let task_row = document.createElement("tr");
    let task_id = document.createElement("td");
    let task_name = document.createElement("td");
    let task_description = document.createElement("td");
    let task_due = document.createElement("td");

    task_id.textContent="id";
    task_name.textContent="name";
    task_description.textContent="description";
    task_due.textContent="due";

    task_row.append(task_id);
    task_row.append(task_name);
    task_row.append(task_description);
    task_row.append(task_due);
    table.append(task_row);
}

add_button.addEventListener("click",add_task);