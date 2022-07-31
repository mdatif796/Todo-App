// color array
let colorArray = {
    'Personal' : 'red',
    'Work' : 'blue',
    'Cleaning' : 'midnightblue',
    'School' : 'skyblue'
};


// fetching all the button which is inside the task
let catBtn = document.getElementsByClassName('category-btn');

// adding the background color to the individual working button
for(let btn of catBtn){
    if(btn.innerText === 'Cleaning'){
        btn.style.backgroundColor = colorArray.Cleaning;
    }else if(btn.innerText === 'Personal'){
        btn.style.backgroundColor = colorArray.Personal;
    }else if(btn.innerText === 'School'){
        btn.style.backgroundColor = colorArray.School;
    }else if(btn.innerText === 'Work'){
        btn.style.backgroundColor = colorArray.Work;
    }
}