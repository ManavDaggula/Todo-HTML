const table = document.getElementById("task-table");
const add_button = document.getElementById("add-task");
const remove_button = document.getElementById("remove-task");
const button_div = document.querySelector(".button-holder");
const input_fields = document.querySelector("#inputs");

add_button.addEventListener("click",get_new_task);
remove_button.addEventListener("click",remove_a_task);

function add_task(){
    // window.alert("Button Pressed");
    let task_row = document.createElement("tr");
    let task_id = document.createElement("td");
    let task_name = document.createElement("td");
    let task_description = document.createElement("td");
    let task_due = document.createElement("td");

    let input_arr = input_fields.children;

    task_id.textContent=table.children.length + 1;
    task_name.textContent=input_arr[1].value.trim();
    task_description.textContent=input_arr[3].value.trim();
    task_due.textContent=input_arr[5].value;

    //validation
    // let valid = false;
    // console.log(task_name);
    // console.log(task_name!=="");
    if(task_name.textContent!==""){
        
        task_row.append(task_id);
        task_row.append(task_name);
        task_row.append(task_description);
        task_row.append(task_due);
        table.append(task_row);
    }

    button_div.style.display="flex";
    // console.log(input_fields.children)
    
    while(input_arr.length!==0){
        input_arr[0].remove()
    }
}
function get_new_task(){
    // window.alert("get-task-called");
    let label1 = document.createElement("label");
    label1.innerText="Task Name";
    let label2 = document.createElement("label");
    label2.innerText="Task Description";
    let label3 = document.createElement("label");
    label3.innerText="Task Due";
    let input1 = document.createElement("input");
    input1.type="text";
    let input2 = document.createElement("input");
    input2.type="text";
    let input3 = document.createElement("input");
    input3.type="datetime-local";
    let add = document.createElement("button");
    add.innerText="Add";
    // add.style.gridColumn="1 / span 2";
    add.addEventListener("click",add_task);
    input_fields.append(label1);
    input_fields.append(input1);
    input_fields.append(label2);
    input_fields.append(input2);
    input_fields.append(label3);
    input_fields.append(input3);
    input_fields.append(add);
    button_div.style.display="none";
}

function remove_a_task(){
    let tasks = table.children;
    if(tasks.length!==0){
        console.log("trying to remove a task");
        for(let i=0;i<tasks.length;i++){
            tasks[i].addEventListener("click",remove_row);
        }
        let message = document.createElement("p");
        message.innerText = "Select the task which is completed.";
        input_fields.append(message);
        button_div.style.display="none";
    }
}

function remove_row(event){
    // console.log(event.target.parentElement);
    event.target.parentElement.remove()
    let tasks = table.children;
    for(let i=0;i<tasks.length;i++){
        // console.log(tasks[i]);
        tasks[i].querySelector('td').innerText = i+1;
        tasks[i].removeEventListener("click",remove_row);
    }
    let input_arr = input_fields.children;
    while(input_arr.length!==0){
        input_arr[0].remove()
    }
    button_div.style.display="flex";
}