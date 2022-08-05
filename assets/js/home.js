// turn off auto complete for the input fields 
$('input').attr('autocomplete', 'off');


// date picker
$('#date').datepicker({
    minDate: new Date(),
    // changeYear: true
});

// taking an array for storing the id of that todo which should be deleted on clicking the delete tasks button
let idArray = [];

// fetching checkbox and apply style if it is checked or unchecked
let check = $('.check');
for(let ch of check){
    let id =  $(ch).attr('data-id');
    // finding that para 
    let para = document.getElementById(id);
    if($(ch).attr('data-toggle') === 'true'){

        // push the checked element id into idArray
        idArray.push($(ch).attr('data-id'));
        $(ch).attr('checked', true);
        // if the checkbox is checked then apply css of line-through
        para.style.textDecoration = 'line-through';
    }else{
        $(ch).removeAttr('checked');
        // if the checkbox is unchecked then apply css of none
        para.style.textDecoration = 'none';
    }
}
// for(let id of idArray){
//     console.log(id);
// }


// color array
let colorArray = {
    'Personal' : 'red',
    'Work' : 'blue',
    'Cleaning' : 'midnightblue',
    'School' : 'skyblue'
};


// fetching all the button which is inside the task
let catBtn = $('.category-btn');

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
    }else{
        btn.style.backgroundColor = 'green';
    }
}


// checkbox function
$('body').click(function(e){
    // finding the checkbox
    let ele = e.target;
    let eleAttr = $(ele).attr('type');
    if(eleAttr !== 'checkbox'){
        // console.log('bhaag');
        return;
    }
    let id =  $(ele).attr('data-id');
    // ajax post request to toggle the value in the database
    $.post('/todo-toggle', {
        id: id
    });
    // finding that para 
    let para = document.getElementById(id);
    // if the checkbox is checked then apply css of line-through
    if($(ele).is(":checked")){
        idArray.push(id);
        para.style.textDecoration = 'line-through';
        return;
    }
    // console.log(btn);
    // remove the id of unchecked element from the idArray
    idArray = idArray.filter((todo) => {
        return todo != id;
    });
    // for(let id of idArray){
        //     console.log(id);
        // }
        
    // if the checkbox is unchecked then apply css of none
    para.style.textDecoration = 'none';
    return;
});


// when delete button is clicked then we make a post request to delete it from the database
$('#del-btn').click(function(){
    // run a for loop to make a call request on every id of todo which should be deleted
    if(idArray.length === 0){
        alert("Click on the checkbox for deleting the todos");
        return;
    }
    for(let id of idArray){
        $.post('/delete-todo', {id: id}, function(){
            window.location.href = '/';
        });
    }
    // for reloading the page after deleting the todo , so that the changes is visible to the user
    // window.location.reload();
});
