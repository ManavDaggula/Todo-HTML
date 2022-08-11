const table = document.getElementById("task-table");
const add_button = document.getElementById("add-task");
const remove_button = document.getElementById("remove-task");
const button_div = document.querySelector(".button-holder");
const input_fields = document.querySelector("#inputs");

load_from_save();

add_button.addEventListener("click",get_new_task);
remove_button.addEventListener("click",remove_a_task);

function add_task(){
    // window.alert("Button Pressed");
    let task_row = document.createElement("tr");
    let task_id = document.createElement("td");
    let task_name = document.createElement("td");
    let task_description = document.createElement("td");
    let task_due = document.createElement("td");
    let valid=true;

    let input_arr = input_fields.children;

    task_id.textContent=table.children.length + 1;
    task_name.textContent=input_arr[1].value.trim();
    task_description.textContent=input_arr[3].value.trim();
    task_due.textContent=input_arr[5].children[0].value +" "+ input_arr[5].children[1].value
    
    
    //test for time formating
    // console.log(new Date(input_arr[5].children[0].value +"T"+ input_arr[5].children[1].value))
    
    let task_date = input_arr[5].children[0].value;
    if(task_date===""){
        valid=false;
        console.log("date is empty")
    }
    
    
    let task_time = input_arr[5].children[1].value;
    if(task_time===""){
        valid=false;
        console.log("time is empty")
    }

    let due = new Date(input_arr[5].children[0].value +"T"+ input_arr[5].children[1].value) - new Date().getTime();
    if (due <= 86400000){
        task_row.style.backgroundColor = "#d4401b";
    }

    //validation
    // let valid = false;
    // console.log(task_name);
    // console.log(task_name!=="");
    if(task_name.textContent===""){valid=false;}
    console.log(valid)
    if(valid==true){
        
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
    save_tasks();
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
    input3.type="date";
    let input4 = document.createElement("input");
    input4.type="time";
    let due_input = document.createElement("div")
    due_input.append(input3);
    due_input.append(input4)
    let add = document.createElement("button");
    add.innerText="Add";
    // add.style.gridColumn="1 / span 2";
    add.addEventListener("click",add_task);
    input_fields.append(label1);
    input_fields.append(input1);
    input_fields.append(label2);
    input_fields.append(input2);
    input_fields.append(label3);
    input_fields.append(due_input);
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
    save_tasks();
}

function save_tasks(){
    let tasks = [];
    if(table.children.length==0){return;}
    for (let i=0;i<table.children.length;i++){
        let task_obj = {"name":table.children[1].textContent,"description":table.children[2].textContent,"due":table.children[3].textContent}
        tasks.append(task_obj)
    }
    // new Array(table.children).forEach((row) => {
    //     let row_contents = row.children;
    //     console.log(row_contents)
    // });
    window.localStorage.setItem('saved_items',{tasks});
}

function load_from_save(){
    // let tasks = window.localStorage.getItem('saved_tasks');
    // if(tasks===null){return;}
    // else{console.log('tasks is not null');}
    // for(let i=0;i<tasks.length;i++){
    //     table.append(tasks[i]);
    // }
    // console.log(tasks);
    table.innerHTML = window.localStorage.getItem('saved_items');
}