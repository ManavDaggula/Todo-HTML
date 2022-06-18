function add_task(){
    var name=prompt("Enter Task name");
    var description=prompt("Enter task description.")
    if (name!=undefined){
        var table = document.getElementById("task-table")
        if(description!=undefined){
            table.innerHTML+="<tr><td>"+name+"</td><td>"+description+"</td></tr>"
        }
        else{
            table.innerHTML+="<tr><td>"+name+"</td><td></td></tr>"
        }
    }
}