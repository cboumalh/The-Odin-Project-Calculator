let calculation = "";

const clear_button = document.querySelector('.clear');
const calc_screen = document.querySelector('.calculations');
const result_screen = document.querySelector('.result');

const delete_button = document.querySelector('.delete');


//Clear button 
clear_button.addEventListener('click', ()=>{
    calculation = "";
    calc_screen.textContent = "";
    result_screen.textContent = "";
});

delete_button.addEventListener('click', ()=>{
    calculation = calculation.slice(0, -1);
    calc_screen.textContent = calculation;

});

calc_buttons = document.querySelectorAll('.operations button');

calc_buttons.forEach((button)=> {
    
    if(button.textContent == "=")
        button.addEventListener('click', function(data){
            calculation = calculation + data.target.textContent;
            calc_screen.textContent = calculation;
            calculation = calculation.replace(/[^-()\d/*+.]/g, '');
            result_screen.textContent = eval(calculation).toString();
        });
    else
        button.addEventListener('click', function(data){
            calculation = calculation + data.target.textContent;
            calc_screen.textContent = calculation;
        });
        
});




