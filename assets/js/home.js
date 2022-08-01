// turn off auto complete for the input fields off
$('input').attr('autocomplete', 'off');


// date picker
$('#date').datepicker({
    minDate: new Date(),
    // changeYear: true
});

// fetching checkbox and apply style if it is checked or unchecked
let check = $('.check');
for(let ch of check){
    let id =  $(ch).attr('data-id');
    // finding that para 
    let para = document.getElementById(id);
    if($(ch).attr('data-toggle') === 'true'){
        $(ch).attr('checked', true);
        // if the checkbox is checked then apply css of line-through
        para.style.textDecoration = 'line-through';
    }else{
        $(ch).removeAttr('checked');
        // if the checkbox is unchecked then apply css of none
        para.style.textDecoration = 'none';
    }
}


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
    $.post('/todo-toggle', {
        id: id
    });
    // finding that para 
    let para = document.getElementById(id);
    // if the checkbox is checked then apply css of line-through
    if($(ele).is(":checked")){
        para.style.textDecoration = 'line-through';
        return;
    }
    // console.log(btn);
    // if the checkbox is unchecked then apply css of none
    para.style.textDecoration = 'none';
    return;
});


// $('#del-btn').click(function(){
//     $.post('/delete-todo', function(){

//     })
// });
