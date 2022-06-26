let tasks=[] // a container for having all the tasks here

// function load_tasks() // to be defined to support loading saved tasks

function add_task(){// to add a task to the table and also store in the memory
    console.log('added task')
    let taskName=document.createElement('td')
    let taskDesc=document.createElement('td')
    let taskRow=document.createElement('tr')
    taskName.innerText=textBoxes[0].value
    taskDesc.innerText=textBoxes[1].value
    taskRow.appendChild(taskName)
    taskRow.appendChild(taskDesc)
    document.querySelector('table').appendChild(taskRow)
}

var textBoxes=document.querySelectorAll(".input>input[type='text']")
for (let i=0;i<2;i++){
    // console.log("tried it.")
    textBoxes[i].addEventListener("focus",(event) => {
        event.target.value='';
    })
}
textBoxes[0].addEventListener("blur",(event)=>{
    event.target.value="Enter Task Name";
})
textBoxes[1].addEventListener("blur",(event)=>{
    event.target.value="Enter Task Description";
})
document.querySelector(".input>input[type='button']").addEventListener('click',add_task)