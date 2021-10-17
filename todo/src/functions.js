console.log("Loading functions...")


document.addEventListener('DOMContentLoaded', () => {
    // Load after dom content
    // const todayBox = document.getElementsByName('today')[0];
    // const dailyBox = document.getElementsByName('daily')[0];
    // const weeklyBox = document.getElementsByName('weekly')[0];
    // const monthlyBox = document.getElementsByName('monthly')[0];


    addBtnEventListeners();
})

function addBtnEventListeners() {
    // Add evnet listeners to change the todo box
    let todoOptions = document.getElementsByClassName('box-item');


    
    for(let i = 0; i < todoOptions.length;i++) {
        todoOptions[i].addEventListener('click', () => {
            console.log("DATA", todoOptions[i].innerText);
            let keyword = todoOptions[i].innerText[0].toLowerCase() + todoOptions[i].innerText.slice(1)
            let todoBox = document.getElementsByName(keyword)[0]
            console.log(todoBox)
            loadTodoBox(keyword)
            
        })
    }
}


function loadTodoBox(todo) {
    // Display given todobox
    const todayBox = document.getElementsByName('today')[0];
    const dailyBox = document.getElementsByName('daily')[0];
    const weeklyBox = document.getElementsByName('weekly')[0];
    const monthlyBox = document.getElementsByName('monthly')[0];
    if(todo === 'today') {
        todayBox.style.display = 'block';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'daily') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'block';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'weekly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'block';
        monthlyBox.style.display = 'none';
    } else if (todo === 'monthly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'block';
    }
}


